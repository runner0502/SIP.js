import { EventEmitter } from "events";
import { UA } from "../UA";
import * as Modifiers from "./Modifiers";
/* Simple
 * @class Simple
 */
export var SimpleStatus;
(function (SimpleStatus) {
    SimpleStatus[SimpleStatus["STATUS_NULL"] = 0] = "STATUS_NULL";
    SimpleStatus[SimpleStatus["STATUS_NEW"] = 1] = "STATUS_NEW";
    SimpleStatus[SimpleStatus["STATUS_CONNECTING"] = 2] = "STATUS_CONNECTING";
    SimpleStatus[SimpleStatus["STATUS_CONNECTED"] = 3] = "STATUS_CONNECTED";
    SimpleStatus[SimpleStatus["STATUS_COMPLETED"] = 4] = "STATUS_COMPLETED";
})(SimpleStatus || (SimpleStatus = {}));
export class Simple extends EventEmitter {
    constructor(options) {
        super();
        /*
        *  {
        *    media: {
        *      remote: {
        *        audio: <DOM element>,
        *        video: <DOM element>
        *      },
        *      local: {
        *        video: <DOM element>
        *      }
        *    },
        *    ua: {
        *       <UA Configuration Options>
        *    }
        *  }
        */
        if (options.media.remote.video) {
            this.video = true;
        }
        else {
            this.video = false;
        }
        if (options.media.remote.audio) {
            this.audio = true;
        }
        else {
            this.audio = false;
        }
        if (!this.audio && !this.video) {
            // Need to do at least audio or video
            // Error
            throw new Error("At least one remote audio or video element is required for Simple.");
        }
        this.options = options;
        // https://stackoverflow.com/questions/7944460/detect-safari-browser
        const browserUa = navigator.userAgent.toLowerCase();
        let isSafari = false;
        let isFirefox = false;
        if (browserUa.indexOf("safari") > -1 && browserUa.indexOf("chrome") < 0) {
            isSafari = true;
        }
        else if (browserUa.indexOf("firefox") > -1 && browserUa.indexOf("chrome") < 0) {
            isFirefox = true;
        }
        const sessionDescriptionHandlerFactoryOptions = {};
        if (isSafari) {
            sessionDescriptionHandlerFactoryOptions.modifiers = [Modifiers.stripG722];
        }
        if (isFirefox) {
            sessionDescriptionHandlerFactoryOptions.alwaysAcquireMediaFirst = true;
        }
        if (!this.options.ua.uri) {
            this.anonymous = true;
        }
        else {
            this.anonymous = false;
        }
        this.ua = new UA({
            // User Configurable Options
            uri: this.options.ua.uri,
            authorizationUser: this.options.ua.authorizationUser,
            password: this.options.ua.password,
            displayName: this.options.ua.displayName,
            // Undocumented "Advanced" Options
            userAgentString: this.options.ua.userAgentString,
            // Fixed Options
            register: true,
            sessionDescriptionHandlerFactoryOptions,
            transportOptions: {
                traceSip: this.options.ua.traceSip,
                wsServers: this.options.ua.wsServers
            }
        });
        this.state = SimpleStatus.STATUS_NULL;
        this.logger = this.ua.getLogger("sip.simple");
        this.ua.on("registered", () => {
            this.emit("registered", this.ua);
        });
        this.ua.on("unregistered", () => {
            this.emit("unregistered", this.ua);
        });
        this.ua.on("registrationFailed", () => {
            this.emit("unregistered", this.ua);
        });
        this.ua.on("invite", (session) => {
            // If there is already an active session reject the incoming session
            if (this.state !== SimpleStatus.STATUS_NULL && this.state !== SimpleStatus.STATUS_COMPLETED) {
                this.logger.warn("Rejecting incoming call. Simple only supports 1 call at a time");
                session.reject();
                return;
            }
            this.session = session;
            this.setupSession();
            this.emit("ringing", this.session);
        });
        this.ua.on("message", (message) => {
            this.emit("message", message);
        });
    }
    call(destination) {
        if (!this.ua || !this.checkRegistration()) {
            this.logger.warn("A registered UA is required for calling");
            return;
        }
        if (this.state !== SimpleStatus.STATUS_NULL && this.state !== SimpleStatus.STATUS_COMPLETED) {
            this.logger.warn("Cannot make more than a single call with Simple");
            return;
        }
        // Safari hack, because you cannot call .play() from a non user action
        if (this.options.media.remote.audio) {
            this.options.media.remote.audio.autoplay = true;
        }
        if (this.options.media.remote.video) {
            this.options.media.remote.video.autoplay = true;
        }
        if (this.options.media.local && this.options.media.local.video) {
            this.options.media.local.video.autoplay = true;
            this.options.media.local.video.volume = 0;
        }
        this.session = this.ua.invite(destination, {
            sessionDescriptionHandlerOptions: {
                constraints: {
                    audio: this.audio,
                    video: this.video
                }
            }
        });
        this.setupSession();
        return this.session;
    }
    answer() {
        if (this.state !== SimpleStatus.STATUS_NEW && this.state !== SimpleStatus.STATUS_CONNECTING) {
            this.logger.warn("No call to answer");
            return;
        }
        // Safari hack, because you cannot call .play() from a non user action
        if (this.options.media.remote.audio) {
            this.options.media.remote.audio.autoplay = true;
        }
        if (this.options.media.remote.video) {
            this.options.media.remote.video.autoplay = true;
        }
        return this.session.accept({
            sessionDescriptionHandlerOptions: {
                constraints: {
                    audio: this.audio,
                    video: this.video
                }
            }
        });
        // emit call is active
    }
    reject() {
        if (this.state !== SimpleStatus.STATUS_NEW && this.state !== SimpleStatus.STATUS_CONNECTING) {
            this.logger.warn("Call is already answered");
            return;
        }
        return this.session.reject();
    }
    hangup() {
        if (this.state !== SimpleStatus.STATUS_CONNECTED &&
            this.state !== SimpleStatus.STATUS_CONNECTING &&
            this.state !== SimpleStatus.STATUS_NEW) {
            this.logger.warn("No active call to hang up on");
            return;
        }
        if (this.state !== SimpleStatus.STATUS_CONNECTED) {
            return this.session.cancel();
        }
        else if (this.session) {
            return this.session.bye();
        }
    }
    hold() {
        if (this.state !== SimpleStatus.STATUS_CONNECTED || !this.session || this.session.localHold) {
            this.logger.warn("Cannot put call on hold");
            return;
        }
        this.mute();
        this.logger.log("Placing session on hold");
        return this.session.hold();
    }
    unhold() {
        if (this.state !== SimpleStatus.STATUS_CONNECTED || !this.session || !this.session.localHold) {
            this.logger.warn("Cannot unhold a call that is not on hold");
            return;
        }
        this.unmute();
        this.logger.log("Placing call off hold");
        return this.session.unhold();
    }
    mute() {
        if (this.state !== SimpleStatus.STATUS_CONNECTED) {
            this.logger.warn("An acitve call is required to mute audio");
            return;
        }
        this.logger.log("Muting Audio");
        this.toggleMute(true);
        this.emit("mute", this);
    }
    unmute() {
        if (this.state !== SimpleStatus.STATUS_CONNECTED) {
            this.logger.warn("An active call is required to unmute audio");
            return;
        }
        this.logger.log("Unmuting Audio");
        this.toggleMute(false);
        this.emit("unmute", this);
    }
    sendDTMF(tone) {
        if (this.state !== SimpleStatus.STATUS_CONNECTED || !this.session) {
            this.logger.warn("An active call is required to send a DTMF tone");
            return;
        }
        this.logger.log("Sending DTMF tone: " + tone);
        this.session.dtmf(tone);
    }
    message(destination, message) {
        if (!this.ua || !this.checkRegistration()) {
            this.logger.warn("A registered UA is required to send a message");
            return;
        }
        if (!destination || !message) {
            this.logger.warn("A destination and message are required to send a message");
            return;
        }
        this.ua.message(destination, message);
    }
    // Private Helpers
    checkRegistration() {
        return (this.anonymous || (this.ua && this.ua.isRegistered()));
    }
    setupRemoteMedia() {
        if (!this.session) {
            this.logger.warn("No session to set remote media on");
            return;
        }
        // If there is a video track, it will attach the video and audio to the same element
        const pc = this.session.sessionDescriptionHandler.peerConnection;
        let remoteStream;
        if (pc.getReceivers) {
            remoteStream = new MediaStream();
            pc.getReceivers().forEach((receiver) => {
                const track = receiver.track;
                if (track) {
                    remoteStream.addTrack(track);
                }
            });
        }
        else {
            remoteStream = pc.getRemoteStreams()[0];
        }
        if (this.video) {
            this.options.media.remote.video.srcObject = remoteStream;
            this.options.media.remote.video.play().catch(() => {
                this.logger.log("play was rejected");
            });
        }
        else if (this.audio) {
            this.options.media.remote.audio.srcObject = remoteStream;
            this.options.media.remote.audio.play().catch(() => {
                this.logger.log("play was rejected");
            });
        }
    }
    setupLocalMedia() {
        if (!this.session) {
            this.logger.warn("No session to set local media on");
            return;
        }
        if (this.video && this.options.media.local && this.options.media.local.video) {
            const pc = this.session.sessionDescriptionHandler.peerConnection;
            let localStream;
            if (pc.getSenders) {
                localStream = new MediaStream();
                pc.getSenders().forEach((sender) => {
                    const track = sender.track;
                    if (track && track.kind === "video") {
                        localStream.addTrack(track);
                    }
                });
            }
            else {
                localStream = pc.getLocalStreams()[0];
            }
            this.options.media.local.video.srcObject = localStream;
            this.options.media.local.video.volume = 0;
            this.options.media.local.video.play();
        }
    }
    cleanupMedia() {
        if (this.video) {
            this.options.media.remote.video.srcObject = null;
            this.options.media.remote.video.pause();
            if (this.options.media.local && this.options.media.local.video) {
                this.options.media.local.video.srcObject = null;
                this.options.media.local.video.pause();
            }
        }
        if (this.audio) {
            this.options.media.remote.audio.srcObject = null;
            this.options.media.remote.audio.pause();
        }
    }
    setupSession() {
        if (!this.session) {
            this.logger.warn("No session to set up");
            return;
        }
        this.state = SimpleStatus.STATUS_NEW;
        this.emit("new", this.session);
        this.session.on("progress", () => this.onProgress());
        this.session.on("accepted", () => this.onAccepted());
        this.session.on("rejected", () => this.onEnded());
        this.session.on("failed", () => this.onFailed());
        this.session.on("terminated", () => this.onEnded());
    }
    destroyMedia() {
        if (this.session && this.session.sessionDescriptionHandler) {
            this.session.sessionDescriptionHandler.close();
        }
    }
    toggleMute(mute) {
        if (!this.session) {
            this.logger.warn("No session to toggle mute");
            return;
        }
        const pc = this.session.sessionDescriptionHandler.peerConnection;
        if (pc.getSenders) {
            pc.getSenders().forEach((sender) => {
                if (sender.track) {
                    sender.track.enabled = !mute;
                }
            });
        }
        else {
            pc.getLocalStreams().forEach((stream) => {
                stream.getAudioTracks().forEach((track) => {
                    track.enabled = !mute;
                });
                stream.getVideoTracks().forEach((track) => {
                    track.enabled = !mute;
                });
            });
        }
    }
    onAccepted() {
        if (!this.session) {
            this.logger.warn("No session for accepting");
            return;
        }
        this.state = SimpleStatus.STATUS_CONNECTED;
        this.emit("connected", this.session);
        this.setupLocalMedia();
        this.setupRemoteMedia();
        if (this.session.sessionDescriptionHandler) {
            this.session.sessionDescriptionHandler.on("addTrack", () => {
                this.logger.log("A track has been added, triggering new remoteMedia setup");
                this.setupRemoteMedia();
            });
            this.session.sessionDescriptionHandler.on("addStream", () => {
                this.logger.log("A stream has been added, trigger new remoteMedia setup");
                this.setupRemoteMedia();
            });
        }
        this.session.on("dtmf", (request, dtmf) => {
            this.emit("dtmf", dtmf.tone);
        });
        this.session.on("bye", () => this.onEnded());
    }
    onProgress() {
        this.state = SimpleStatus.STATUS_CONNECTING;
        this.emit("connecting", this.session);
    }
    onFailed() {
        this.onEnded();
    }
    onEnded() {
        this.state = SimpleStatus.STATUS_COMPLETED;
        this.emit("ended", this.session);
        this.cleanupMedia();
    }
}
Simple.C = SimpleStatus;
