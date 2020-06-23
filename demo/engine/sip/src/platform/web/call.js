import { SessionState } from "../../api/index";
import { SessionDescriptionHandler } from "./session-description-handler";
export class Call {
    constructor(sessionPara, localVideoControalPara, remoteVideoControalPara, logger, delegate, remoteAudioControl) {
        this.session = sessionPara;
        this.localVideoControal = localVideoControalPara;
        this.remoteVideoControal = remoteVideoControalPara;
        this.remoteAudioControl = remoteAudioControl;
        this.logger = logger;
        this.delegate = delegate;
        // Setup session state change handler
        this.session.stateChange.on((state) => {
            if (this.session == null) {
                return; // if our session has changed, just return
            }
            this.logger.log(`[${this.id}] session state changed to ${state}`);
            switch (state) {
                case SessionState.Initial:
                    break;
                case SessionState.Establishing:
                    break;
                case SessionState.Established:
                    this.setupLocalMedia();
                    this.setupRemoteMedia();
                    if (this.delegate && this.delegate.onCallAnswered) {
                        this.delegate.onCallAnswered(this.session.id);
                    }
                    break;
                case SessionState.Terminating:
                    break;
                case SessionState.Terminated:
                    // this.session = undefined;
                    this.cleanupMedia();
                    if (this.delegate && this.delegate.onCallHangup) {
                        this.delegate.onCallHangup(this.session.id);
                    }
                    break;
                default:
                    throw new Error("Unknown session state.");
            }
        });
    }
    /** Helper function to attach local media to html elements. */
    setupLocalMedia() {
        if (!this.session) {
            throw new Error("Session does not exist.");
        }
        if (this.localVideoControal && this.remoteVideoControal) {
            const localVideoTrack = this.localVideoTrack;
            if (localVideoTrack) {
                const localStream = new MediaStream([localVideoTrack]);
                this.localVideoControal.srcObject = localStream;
                this.localVideoControal.volume = 0;
                this.localVideoControal.play();
            }
        }
    }
    /** Helper function to attach remote media to html elements. */
    setupRemoteMedia() {
        if (!this.session) {
            throw new Error("Session does not exist.");
        }
        if (this.remoteVideoControal) {
            const remoteAudioTrack = this.remoteAudioTrack;
            const remoteVideoTrack = this.remoteVideoTrack;
            const remoteStream = new MediaStream();
            // If there is a video element, both audio and video will be attached that element.
            if (this.remoteVideoControal) {
                if (remoteAudioTrack) {
                    remoteStream.addTrack(remoteAudioTrack);
                }
                if (remoteVideoTrack) {
                    remoteStream.addTrack(remoteVideoTrack);
                }
                this.remoteVideoControal.srcObject = remoteStream;
                this.remoteVideoControal.play()
                    .catch((error) => {
                    this.logger.error(`[${this.id}] error playing video`);
                    this.logger.error(error.message);
                });
            }
            // if (this.remoteAudioControl) {
            //   if (remoteAudioTrack) {
            //     remoteStream.addTrack(remoteAudioTrack);
            //     this.remoteAudioControl.srcObject = remoteStream;
            //     this.remoteAudioControl.play()
            //       .catch((error: Error) => {
            //         this.logger.error(`[${this.id}] error playing audio`);
            //         this.logger.error(error.message);
            //       });
            //     }
            // }
        }
    }
    /** Helper function to remove media from html elements. */
    cleanupMedia() {
        if (this.localVideoControal) {
            this.localVideoControal.srcObject = null;
            this.localVideoControal.pause();
        }
        if (this.remoteVideoControal) {
            this.remoteVideoControal.srcObject = null;
            this.remoteVideoControal.pause();
        }
    }
    /** The receiver media track, if available. */
    getReceiverTrack(kind) {
        if (!this.session) {
            this.logger.warn(`[${this.id}] getReceiverTrack - session undefined`);
            return undefined;
        }
        const sessionDescriptionHandler = this.session.sessionDescriptionHandler;
        if (!sessionDescriptionHandler) {
            this.logger.warn(`[${this.id}] getReceiverTrack - session description handler undefined`);
            return undefined;
        }
        if (!(sessionDescriptionHandler instanceof SessionDescriptionHandler)) {
            throw new Error("Session's session description handler not instance of SessionDescriptionHandler.");
        }
        const peerConnection = sessionDescriptionHandler.peerConnection;
        const rtpReceiver = peerConnection.getReceivers().find((receiver) => {
            return receiver.track.kind === kind ? true : false;
        });
        return rtpReceiver ? rtpReceiver.track : undefined;
    }
    /** The sender media track, if available. */
    getSenderTrack(kind) {
        if (!this.session) {
            this.logger.warn(`[${this.id}] getSenderTrack - session undefined`);
            return undefined;
        }
        const sessionDescriptionHandler = this.session.sessionDescriptionHandler;
        if (!sessionDescriptionHandler) {
            this.logger.warn(`[${this.id}] getSenderTrack - session description handler undefined`);
            return undefined;
        }
        if (!(sessionDescriptionHandler instanceof SessionDescriptionHandler)) {
            throw new Error("Session's session description handler not instance of SessionDescriptionHandler.");
        }
        const peerConnection = sessionDescriptionHandler.peerConnection;
        const rtpSender = peerConnection.getSenders().find((sender) => {
            return sender.track && sender.track.kind === kind ? true : false;
        });
        return rtpSender && rtpSender.track ? rtpSender.track : undefined;
    }
    /** The remote audio track, if available. */
    get remoteAudioTrack() {
        return this.getReceiverTrack("audio");
    }
    /** The remote video track, if available. */
    get remoteVideoTrack() {
        return this.getReceiverTrack("video");
    }
    /** The local audio track, if available. */
    get localAudioTrack() {
        return this.getSenderTrack("audio");
    }
    /** The local video track, if available. */
    get localVideoTrack() {
        return this.getSenderTrack("video");
    }
}
