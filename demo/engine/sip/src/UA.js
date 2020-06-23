import { EventEmitter } from "events";
import { ClientContext } from "./ClientContext";
import { C as SIPConstants } from "./Constants";
import { DigestAuthentication, Grammar, IncomingRequestMessage, IncomingResponseMessage, Levels, LoggerFactory, Parser, TransportError, URI, UserAgentCore } from "./core";
import { SessionStatus, TypeStrings, UAStatus } from "./Enums";
import { Exceptions } from "./Exceptions";
import { PublishContext } from "./PublishContext";
import { ReferServerContext } from "./ReferContext";
import { RegisterContext } from "./RegisterContext";
import { ServerContext } from "./ServerContext";
import { InviteClientContext, InviteServerContext } from "./Session";
import { Subscription } from "./Subscription";
import { Utils } from "./Utils";
import { SessionDescriptionHandler as WebSessionDescriptionHandler } from "./Web/SessionDescriptionHandler";
import { Transport as WebTransport } from "./Web/Transport";
/**
 * @class Class creating a SIP User Agent.
 * @param {function returning SIP.sessionDescriptionHandler} [configuration.sessionDescriptionHandlerFactory]
 *  A function will be invoked by each of the UA's Sessions to build the sessionDescriptionHandler for that Session.
 *  If no (or a falsy) value is provided, each Session will use a default (WebRTC) sessionDescriptionHandler.
 */
export class UA extends EventEmitter {
    constructor(configuration) {
        super();
        /** Unload listener. */
        this.unloadListener = (() => { this.stop(); });
        this.type = TypeStrings.UA;
        this.log = new LoggerFactory();
        this.logger = this.getLogger("sip.ua");
        this.configuration = {};
        // User actions outside any session/dialog (MESSAGE)
        this.applicants = {};
        this.data = {};
        this.sessions = {};
        this.subscriptions = {};
        this.publishers = {};
        this.status = UAStatus.STATUS_INIT;
        /**
         * Load configuration
         *
         * @throws {SIP.Exceptions.ConfigurationError}
         * @throws {TypeError}
         */
        if (configuration === undefined) {
            configuration = {};
        }
        else if (typeof configuration === "string" || configuration instanceof String) {
            configuration = {
                uri: configuration
            };
        }
        // Apply log configuration if present
        if (configuration.log) {
            this.log.builtinEnabled = configuration.log.builtinEnabled;
            if (configuration.log.hasOwnProperty("connector")) {
                this.log.connector = configuration.log.connector;
            }
            if (configuration.log.hasOwnProperty("level")) {
                const level = configuration.log.level;
                let normalized;
                if (typeof level === "string") {
                    switch (level) {
                        case "error":
                            normalized = Levels.error;
                            break;
                        case "warn":
                            normalized = Levels.warn;
                            break;
                        case "log":
                            normalized = Levels.log;
                            break;
                        case "debug":
                            normalized = Levels.debug;
                            break;
                        default:
                            break;
                    }
                }
                else {
                    switch (level) {
                        case 0:
                            normalized = Levels.error;
                            break;
                        case 1:
                            normalized = Levels.warn;
                            break;
                        case 2:
                            normalized = Levels.log;
                            break;
                        case 3:
                            normalized = Levels.debug;
                            break;
                        default:
                            break;
                    }
                }
                // avoid setting level when invalid, use default level instead
                if (normalized === undefined) {
                    this.logger.error(`Invalid "level" parameter value: ${JSON.stringify(level)}`);
                }
                else {
                    this.log.level = normalized;
                }
            }
        }
        const deprecatedMessage = "The UA class has been deprecated and will no longer be available starting with SIP.js release 0.16.0. " +
            "The UA has been replaced by the UserAgent class. Please update accordingly.";
        this.logger.warn(deprecatedMessage);
        try {
            this.loadConfig(configuration);
        }
        catch (e) {
            this.status = UAStatus.STATUS_NOT_READY;
            this.error = UA.C.CONFIGURATION_ERROR;
            throw e;
        }
        if (!this.configuration.transportConstructor) {
            throw new TransportError("Transport constructor not set");
        }
        this.transport = new this.configuration.transportConstructor(this.getLogger("sip.transport"), this.configuration.transportOptions);
        const userAgentCoreConfiguration = makeUserAgentCoreConfigurationFromUA(this);
        // The Replaces header contains information used to match an existing
        // SIP dialog (call-id, to-tag, and from-tag).  Upon receiving an INVITE
        // with a Replaces header, the User Agent (UA) attempts to match this
        // information with a confirmed or early dialog.
        // https://tools.ietf.org/html/rfc3891#section-3
        const handleInviteWithReplacesHeader = (context, request) => {
            if (this.configuration.replaces !== SIPConstants.supported.UNSUPPORTED) {
                const replaces = request.parseHeader("replaces");
                if (replaces) {
                    const targetSession = this.sessions[replaces.call_id + replaces.replaces_from_tag] ||
                        this.sessions[replaces.call_id + replaces.replaces_to_tag] ||
                        undefined;
                    if (!targetSession) {
                        this.userAgentCore.replyStateless(request, { statusCode: 481 });
                        return;
                    }
                    if (targetSession.status === SessionStatus.STATUS_TERMINATED) {
                        this.userAgentCore.replyStateless(request, { statusCode: 603 });
                        return;
                    }
                    const targetDialogId = replaces.call_id + replaces.replaces_to_tag + replaces.replaces_from_tag;
                    const targetDialog = this.userAgentCore.dialogs.get(targetDialogId);
                    if (!targetDialog) {
                        this.userAgentCore.replyStateless(request, { statusCode: 481 });
                        return;
                    }
                    if (!targetDialog.early && replaces.early_only) {
                        this.userAgentCore.replyStateless(request, { statusCode: 486 });
                        return;
                    }
                    context.replacee = targetSession;
                }
            }
        };
        const userAgentCoreDelegate = {
            onInvite: (incomingInviteRequest) => {
                // FIXME: Ported - 100 Trying send should be configurable.
                // Only required if TU will not respond in 200ms.
                // https://tools.ietf.org/html/rfc3261#section-17.2.1
                incomingInviteRequest.trying();
                incomingInviteRequest.delegate = {
                    onCancel: (cancel) => {
                        context.onCancel(cancel);
                    },
                    onTransportError: (error) => {
                        context.onTransportError();
                    }
                };
                const context = new InviteServerContext(this, incomingInviteRequest);
                // Ported - handling of out of dialog INVITE with Replaces.
                handleInviteWithReplacesHeader(context, incomingInviteRequest.message);
                // Ported - make the first call to progress automatically.
                if (context.autoSendAnInitialProvisionalResponse) {
                    context.progress();
                }
                this.emit("invite", context);
            },
            onMessage: (incomingMessageRequest) => {
                // Ported - handling of out of dialog MESSAGE.
                const serverContext = new ServerContext(this, incomingMessageRequest);
                serverContext.body = incomingMessageRequest.message.body;
                serverContext.contentType = incomingMessageRequest.message.getHeader("Content-Type") || "text/plain";
                incomingMessageRequest.accept();
                this.emit("message", serverContext); // TODO: Review. Why is a "ServerContext" emitted? What use it is?
            },
            onNotify: (incomingNotifyRequest) => {
                // DEPRECATED: Out of dialog NOTIFY is an obsolete usage.
                // Ported - handling of out of dialog NOTIFY.
                if (this.configuration.allowLegacyNotifications && this.listeners("notify").length > 0) {
                    incomingNotifyRequest.accept();
                    this.emit("notify", { request: incomingNotifyRequest.message });
                }
                else {
                    incomingNotifyRequest.reject({ statusCode: 481 });
                }
            },
            onRefer: (incomingReferRequest) => {
                // Ported - handling of out of dialog REFER.
                this.logger.log("Received an out of dialog refer");
                if (!this.configuration.allowOutOfDialogRefers) {
                    incomingReferRequest.reject({ statusCode: 405 });
                }
                this.logger.log("Allow out of dialog refers is enabled on the UA");
                const referContext = new ReferServerContext(this, incomingReferRequest);
                if (this.listeners("outOfDialogReferRequested").length) {
                    this.emit("outOfDialogReferRequested", referContext);
                }
                else {
                    this.logger.log("No outOfDialogReferRequest listeners, automatically accepting and following the out of dialog refer");
                    referContext.accept({ followRefer: true });
                }
            },
            onSubscribe: (incomingSubscribeRequest) => {
                this.emit("subscribe", incomingSubscribeRequest);
            },
        };
        this.userAgentCore = new UserAgentCore(userAgentCoreConfiguration, userAgentCoreDelegate);
        // Initialize registerContext
        this.registerContext = new RegisterContext(this, configuration.registerOptions);
        this.registerContext.on("failed", this.emit.bind(this, "registrationFailed"));
        this.registerContext.on("registered", this.emit.bind(this, "registered"));
        this.registerContext.on("unregistered", this.emit.bind(this, "unregistered"));
        if (this.configuration.autostart) {
            this.start();
        }
    }
    // =================
    //  High Level API
    // =================
    register(options = {}) {
        if (options.register) {
            this.configuration.register = true;
        }
        this.registerContext.register(options);
        return this;
    }
    /**
     * Unregister.
     *
     * @param {Boolean} [all] unregister all user bindings.
     *
     */
    unregister(options) {
        this.configuration.register = false;
        this.transport.afterConnected(() => {
            this.registerContext.unregister(options);
        });
        return this;
    }
    isRegistered() {
        return this.registerContext.registered;
    }
    /**
     * Make an outgoing call.
     *
     * @param {String} target
     * @param {Object} views
     * @param {Object} [options.media] gets passed to SIP.sessionDescriptionHandler.getDescription as mediaHint
     *
     * @throws {TypeError}
     *
     */
    invite(target, options, modifiers) {
        const context = new InviteClientContext(this, target, options, modifiers);
        // Delay sending actual invite until the next 'tick' if we are already
        // connected, so that API consumers can register to events fired by the
        // the session.
        this.transport.afterConnected(() => {
            context.invite();
            this.emit("inviteSent", context);
        });
        return context;
    }
    subscribe(target, event, options) {
        const sub = new Subscription(this, target, event, options);
        this.transport.afterConnected(() => sub.subscribe());
        return sub;
    }
    /**
     * Send PUBLISH Event State Publication (RFC3903)
     *
     * @param {String} target
     * @param {String} event
     * @param {String} body
     * @param {Object} [options]
     *
     * @throws {SIP.Exceptions.MethodParameterError}
     */
    publish(target, event, body, options) {
        const pub = new PublishContext(this, target, event, options);
        this.transport.afterConnected(() => {
            pub.publish(body);
        });
        return pub;
    }
    /**
     * Send a message.
     *
     * @param {String} target
     * @param {String} body
     * @param {Object} [options]
     *
     * @throws {TypeError}
     */
    message(target, body, options = {}) {
        if (body === undefined) {
            throw new TypeError("Not enough arguments");
        }
        // There is no Message module, so it is okay that the UA handles defaults here.
        options.contentType = options.contentType || "text/plain";
        options.body = body;
        return this.request(SIPConstants.MESSAGE, target, options);
    }
    request(method, target, options) {
        const req = new ClientContext(this, method, target, options);
        this.transport.afterConnected(() => req.send());
        return req;
    }
    /**
     * Gracefully close.
     */
    stop() {
        this.logger.log("user requested closure...");
        if (this.status === UAStatus.STATUS_USER_CLOSED) {
            this.logger.warn("UA already closed");
            return this;
        }
        // Close registerContext
        this.logger.log("closing registerContext");
        this.registerContext.close();
        // Run terminate on every Session
        for (const session in this.sessions) {
            if (this.sessions[session]) {
                this.logger.log("closing session " + session);
                this.sessions[session].terminate();
            }
        }
        // Run unsubscribe on every Subscription
        for (const subscription in this.subscriptions) {
            if (this.subscriptions[subscription]) {
                this.logger.log("unsubscribe " + subscription);
                this.subscriptions[subscription].unsubscribe();
            }
        }
        // Run close on every Publisher
        for (const publisher in this.publishers) {
            if (this.publishers[publisher]) {
                this.logger.log("unpublish " + publisher);
                this.publishers[publisher].close();
            }
        }
        // Run close on every applicant
        for (const applicant in this.applicants) {
            if (this.applicants[applicant]) {
                this.applicants[applicant].close();
            }
        }
        this.status = UAStatus.STATUS_USER_CLOSED;
        // Disconnect the transport and reset user agent core
        this.transport.disconnect();
        this.userAgentCore.reset();
        if (this.configuration.autostop) {
            // Google Chrome Packaged Apps don't allow 'unload' listeners: unload is not available in packaged apps
            const googleChromePackagedApp = typeof chrome !== "undefined" && chrome.app && chrome.app.runtime ? true : false;
            if (typeof window !== "undefined" &&
                typeof window.removeEventListener === "function" &&
                !googleChromePackagedApp) {
                window.removeEventListener("unload", this.unloadListener);
            }
        }
        return this;
    }
    /**
     * Connect to the WS server if status = STATUS_INIT.
     * Resume UA after being closed.
     *
     */
    start() {
        this.logger.log("user requested startup...");
        if (this.status === UAStatus.STATUS_INIT) {
            this.status = UAStatus.STATUS_STARTING;
            this.setTransportListeners();
            this.emit("transportCreated", this.transport);
            this.transport.connect();
        }
        else if (this.status === UAStatus.STATUS_USER_CLOSED) {
            this.logger.log("resuming");
            this.status = UAStatus.STATUS_READY;
            this.transport.connect();
        }
        else if (this.status === UAStatus.STATUS_STARTING) {
            this.logger.log("UA is in STARTING status, not opening new connection");
        }
        else if (this.status === UAStatus.STATUS_READY) {
            this.logger.log("UA is in READY status, not resuming");
        }
        else {
            this.logger.error("Connection is down. Auto-Recovery system is trying to connect");
        }
        if (this.configuration.autostop) {
            // Google Chrome Packaged Apps don't allow 'unload' listeners: unload is not available in packaged apps
            const googleChromePackagedApp = typeof chrome !== "undefined" && chrome.app && chrome.app.runtime ? true : false;
            if (typeof window !== "undefined" &&
                typeof window.addEventListener === "function" &&
                !googleChromePackagedApp) {
                window.addEventListener("unload", this.unloadListener);
            }
        }
        return this;
    }
    /**
     * Normalize a string into a valid SIP request URI
     *
     * @param {String} target
     *
     * @returns {SIP.URI|undefined}
     */
    normalizeTarget(target) {
        return Utils.normalizeTarget(target, this.configuration.hostportParams);
    }
    getLogger(category, label) {
        return this.log.getLogger(category, label);
    }
    getLoggerFactory() {
        return this.log;
    }
    getSupportedResponseOptions() {
        let optionTags = [];
        if (this.contact.pubGruu || this.contact.tempGruu) {
            optionTags.push("gruu");
        }
        if (this.configuration.rel100 === SIPConstants.supported.SUPPORTED) {
            optionTags.push("100rel");
        }
        if (this.configuration.replaces === SIPConstants.supported.SUPPORTED) {
            optionTags.push("replaces");
        }
        optionTags.push("outbound");
        optionTags = optionTags.concat(this.configuration.extraSupported || []);
        const allowUnregistered = this.configuration.hackAllowUnregisteredOptionTags || false;
        const optionTagSet = {};
        optionTags = optionTags.filter((optionTag) => {
            const registered = SIPConstants.OPTION_TAGS[optionTag];
            const unique = !optionTagSet[optionTag];
            optionTagSet[optionTag] = true;
            return (registered || allowUnregistered) && unique;
        });
        return optionTags;
    }
    /**
     * Get the session to which the request belongs to, if any.
     * @param {SIP.IncomingRequest} request.
     * @returns {SIP.OutgoingSession|SIP.IncomingSession|undefined}
     */
    findSession(request) {
        return this.sessions[request.callId + request.fromTag] ||
            this.sessions[request.callId + request.toTag] ||
            undefined;
    }
    on(name, callback) { return super.on(name, callback); }
    // ==============================
    // Event Handlers
    // ==============================
    onTransportError() {
        if (this.status === UAStatus.STATUS_USER_CLOSED) {
            return;
        }
        if (!this.error || this.error !== UA.C.NETWORK_ERROR) {
            this.status = UAStatus.STATUS_NOT_READY;
            this.error = UA.C.NETWORK_ERROR;
        }
    }
    /**
     * Helper function. Sets transport listeners
     */
    setTransportListeners() {
        this.transport.on("connected", () => this.onTransportConnected());
        this.transport.on("message", (message) => this.onTransportReceiveMsg(message));
        this.transport.on("transportError", () => this.onTransportError());
    }
    /**
     * Transport connection event.
     * @event
     * @param {SIP.Transport} transport.
     */
    onTransportConnected() {
        if (this.configuration.register) {
            // In an effor to maintain behavior from when we "initialized" an
            // authentication factory, this is in a Promise.then
            Promise.resolve().then(() => this.registerContext.register());
        }
    }
    /**
     * Handle SIP message received from the transport.
     * @param messageString The message.
     */
    onTransportReceiveMsg(messageString) {
        const message = Parser.parseMessage(messageString, this.getLogger("sip.parser"));
        if (!message) {
            this.logger.warn("UA failed to parse incoming SIP message - discarding.");
            return;
        }
        if (this.status === UAStatus.STATUS_USER_CLOSED && message instanceof IncomingRequestMessage) {
            this.logger.warn("UA received message when status = USER_CLOSED - aborting");
            return;
        }
        // A valid SIP request formulated by a UAC MUST, at a minimum, contain
        // the following header fields: To, From, CSeq, Call-ID, Max-Forwards,
        // and Via; all of these header fields are mandatory in all SIP
        // requests.
        // https://tools.ietf.org/html/rfc3261#section-8.1.1
        const hasMinimumHeaders = () => {
            const mandatoryHeaders = ["from", "to", "call_id", "cseq", "via"];
            for (const header of mandatoryHeaders) {
                if (!message.hasHeader(header)) {
                    this.logger.warn(`Missing mandatory header field : ${header}.`);
                    return false;
                }
            }
            return true;
        };
        // Request Checks
        if (message instanceof IncomingRequestMessage) {
            // This is port of SanityCheck.minimumHeaders().
            if (!hasMinimumHeaders()) {
                this.logger.warn(`Request missing mandatory header field. Dropping.`);
                return;
            }
            // FIXME: This is non-standard and should be a configruable behavior (desirable regardless).
            // Custom SIP.js check to reject request from ourself (this instance of SIP.js).
            // This is port of SanityCheck.rfc3261_16_3_4().
            if (!message.toTag && message.callId.substr(0, 5) === this.configuration.sipjsId) {
                this.userAgentCore.replyStateless(message, { statusCode: 482 });
                return;
            }
            // FIXME: This should be Transport check before we get here (Section 18).
            // Custom SIP.js check to reject requests if body length wrong.
            // This is port of SanityCheck.rfc3261_18_3_request().
            const len = Utils.str_utf8_length(message.body);
            const contentLength = message.getHeader("content-length");
            if (contentLength && len < Number(contentLength)) {
                this.userAgentCore.replyStateless(message, { statusCode: 400 });
                return;
            }
        }
        // Reponse Checks
        if (message instanceof IncomingResponseMessage) {
            // This is port of SanityCheck.minimumHeaders().
            if (!hasMinimumHeaders()) {
                this.logger.warn(`Response missing mandatory header field. Dropping.`);
                return;
            }
            // Custom SIP.js check to drop responses if multiple Via headers.
            // This is port of SanityCheck.rfc3261_8_1_3_3().
            if (message.getHeaders("via").length > 1) {
                this.logger.warn("More than one Via header field present in the response. Dropping.");
                return;
            }
            // FIXME: This should be Transport check before we get here (Section 18).
            // Custom SIP.js check to drop responses if bad Via header.
            // This is port of SanityCheck.rfc3261_18_1_2().
            if (message.via.host !== this.configuration.viaHost || message.via.port !== undefined) {
                this.logger.warn("Via sent-by in the response does not match UA Via host value. Dropping.");
                return;
            }
            // FIXME: This should be Transport check before we get here (Section 18).
            // Custom SIP.js check to reject requests if body length wrong.
            // This is port of SanityCheck.rfc3261_18_3_response().
            const len = Utils.str_utf8_length(message.body);
            const contentLength = message.getHeader("content-length");
            if (contentLength && len < Number(contentLength)) {
                this.logger.warn("Message body length is lower than the value in Content-Length header field. Dropping.");
                return;
            }
        }
        // Handle Request
        if (message instanceof IncomingRequestMessage) {
            this.userAgentCore.receiveIncomingRequestFromTransport(message);
            return;
        }
        // Handle Response
        if (message instanceof IncomingResponseMessage) {
            this.userAgentCore.receiveIncomingResponseFromTransport(message);
            return;
        }
        throw new Error("Invalid message type.");
    }
    // =================
    // Utils
    // =================
    checkAuthenticationFactory(authenticationFactory) {
        if (!(authenticationFactory instanceof Function)) {
            return;
        }
        if (!authenticationFactory.initialize) {
            authenticationFactory.initialize = () => {
                return Promise.resolve();
            };
        }
        return authenticationFactory;
    }
    /**
     * Configuration load.
     * returns {void}
     */
    loadConfig(configuration) {
        // Settings and default values
        const settings = {
            /* Host address
             * Value to be set in Via sent_by and host part of Contact FQDN
             */
            viaHost: Utils.createRandomToken(12) + ".invalid",
            uri: new URI("sip", "anonymous." + Utils.createRandomToken(6), "anonymous.invalid", undefined, undefined),
            // Custom Configuration Settings
            custom: {},
            // Display name
            displayName: "",
            // Password
            password: undefined,
            register: true,
            // Registration parameters
            registerOptions: {},
            // Transport related parameters
            transportConstructor: WebTransport,
            transportOptions: {},
            usePreloadedRoute: false,
            // string to be inserted into User-Agent request header
            userAgentString: SIPConstants.USER_AGENT,
            // Session parameters
            noAnswerTimeout: 60,
            // Hacks
            hackViaTcp: false,
            hackIpInContact: false,
            hackWssInTransport: false,
            hackAllowUnregisteredOptionTags: false,
            // Session Description Handler Options
            sessionDescriptionHandlerFactoryOptions: {
                constraints: {},
                peerConnectionOptions: {}
            },
            extraSupported: [],
            contactName: Utils.createRandomToken(8),
            contactTransport: "ws",
            forceRport: false,
            // autostarting
            autostart: true,
            autostop: true,
            // Reliable Provisional Responses
            rel100: SIPConstants.supported.UNSUPPORTED,
            // DTMF type: 'info' or 'rtp' (RFC 4733)
            // RTP Payload Spec: https://tools.ietf.org/html/rfc4733
            // WebRTC Audio Spec: https://tools.ietf.org/html/rfc7874
            dtmfType: SIPConstants.dtmfType.INFO,
            // Replaces header (RFC 3891)
            // http://tools.ietf.org/html/rfc3891
            replaces: SIPConstants.supported.UNSUPPORTED,
            sessionDescriptionHandlerFactory: WebSessionDescriptionHandler.defaultFactory,
            authenticationFactory: this.checkAuthenticationFactory((ua) => {
                return new DigestAuthentication(ua.getLoggerFactory(), this.configuration.authorizationUser, this.configuration.password);
            }),
            allowLegacyNotifications: false,
            allowOutOfDialogRefers: false,
            experimentalFeatures: false
        };
        const configCheck = this.getConfigurationCheck();
        // Check Mandatory parameters
        for (const parameter in configCheck.mandatory) {
            if (!configuration.hasOwnProperty(parameter)) {
                throw new Exceptions.ConfigurationError(parameter);
            }
            else {
                const value = configuration[parameter];
                const checkedValue = configCheck.mandatory[parameter](value);
                if (checkedValue !== undefined) {
                    settings[parameter] = checkedValue;
                }
                else {
                    throw new Exceptions.ConfigurationError(parameter, value);
                }
            }
        }
        // Check Optional parameters
        for (const parameter in configCheck.optional) {
            if (configuration.hasOwnProperty(parameter)) {
                const value = configuration[parameter];
                // If the parameter value is an empty array, but shouldn't be, apply its default value.
                // If the parameter value is null, empty string, or undefined then apply its default value.
                // If it's a number with NaN value then also apply its default value.
                // NOTE: JS does not allow "value === NaN", the following does the work:
                if ((value instanceof Array && value.length === 0) ||
                    (value === null || value === "" || value === undefined) ||
                    (typeof (value) === "number" && isNaN(value))) {
                    continue;
                }
                const checkedValue = configCheck.optional[parameter](value);
                if (checkedValue !== undefined) {
                    settings[parameter] = checkedValue;
                }
                else {
                    throw new Exceptions.ConfigurationError(parameter, value);
                }
            }
        }
        // Post Configuration Process
        // Allow passing 0 number as displayName.
        if (settings.displayName === 0) {
            settings.displayName = "0";
        }
        // sipjsId instance parameter. Static random tag of length 5
        settings.sipjsId = Utils.createRandomToken(5);
        // String containing settings.uri without scheme and user.
        const hostportParams = settings.uri.clone();
        hostportParams.user = undefined;
        settings.hostportParams = hostportParams.toRaw().replace(/^sip:/i, "");
        /* Check whether authorizationUser is explicitly defined.
         * Take 'settings.uri.user' value if not.
         */
        if (!settings.authorizationUser) {
            settings.authorizationUser = settings.uri.user;
        }
        // User noAnswerTimeout
        settings.noAnswerTimeout = settings.noAnswerTimeout * 1000;
        // Via Host
        if (settings.hackIpInContact) {
            if (typeof settings.hackIpInContact === "boolean") {
                const from = 1;
                const to = 254;
                const octet = Math.floor(Math.random() * (to - from + 1) + from);
                // random Test-Net IP (http://tools.ietf.org/html/rfc5735)
                settings.viaHost = "192.0.2." + octet;
            }
            else if (typeof settings.hackIpInContact === "string") {
                settings.viaHost = settings.hackIpInContact;
            }
        }
        // Contact transport parameter
        if (settings.hackWssInTransport) {
            settings.contactTransport = "wss";
        }
        this.contact = {
            pubGruu: undefined,
            tempGruu: undefined,
            uri: new URI("sip", settings.contactName, settings.viaHost, undefined, { transport: settings.contactTransport }),
            toString: (options = {}) => {
                const anonymous = options.anonymous || false;
                const outbound = options.outbound || false;
                let contact = "<";
                if (anonymous) {
                    contact += (this.contact.tempGruu ||
                        ("sip:anonymous@anonymous.invalid;transport=" + settings.contactTransport)).toString();
                }
                else {
                    contact += (this.contact.pubGruu || this.contact.uri).toString();
                }
                if (outbound) {
                    contact += ";ob";
                }
                contact += ">";
                return contact;
            }
        };
        const skeleton = {};
        // Fill the value of the configuration_skeleton
        for (const parameter in settings) {
            if (settings.hasOwnProperty(parameter)) {
                skeleton[parameter] = settings[parameter];
            }
        }
        Object.assign(this.configuration, skeleton);
        this.logger.log("configuration parameters after validation:");
        for (const parameter in settings) {
            if (settings.hasOwnProperty(parameter)) {
                switch (parameter) {
                    case "uri":
                    case "sessionDescriptionHandlerFactory":
                        this.logger.log("· " + parameter + ": " + settings[parameter]);
                        break;
                    case "password":
                        this.logger.log("· " + parameter + ": " + "NOT SHOWN");
                        break;
                    case "transportConstructor":
                        this.logger.log("· " + parameter + ": " + settings[parameter].name);
                        break;
                    default:
                        this.logger.log("· " + parameter + ": " + JSON.stringify(settings[parameter]));
                }
            }
        }
        return;
    }
    /**
     * Configuration checker.
     * @return {Boolean}
     */
    getConfigurationCheck() {
        return {
            mandatory: {},
            optional: {
                uri: (uri) => {
                    if (!(/^sip:/i).test(uri)) {
                        uri = SIPConstants.SIP + ":" + uri;
                    }
                    const parsed = Grammar.URIParse(uri);
                    if (!parsed || !parsed.user) {
                        return;
                    }
                    else {
                        return parsed;
                    }
                },
                transportConstructor: (transportConstructor) => {
                    if (transportConstructor instanceof Function) {
                        return transportConstructor;
                    }
                },
                transportOptions: (transportOptions) => {
                    if (typeof transportOptions === "object") {
                        return transportOptions;
                    }
                },
                authorizationUser: (authorizationUser) => {
                    if (Grammar.parse('"' + authorizationUser + '"', "quoted_string") === -1) {
                        return;
                    }
                    else {
                        return authorizationUser;
                    }
                },
                displayName: (displayName) => {
                    if (Grammar.parse('"' + displayName + '"', "displayName") === -1) {
                        return;
                    }
                    else {
                        return displayName;
                    }
                },
                dtmfType: (dtmfType) => {
                    switch (dtmfType) {
                        case SIPConstants.dtmfType.RTP:
                            return SIPConstants.dtmfType.RTP;
                        case SIPConstants.dtmfType.INFO:
                        // Fall through
                        default:
                            return SIPConstants.dtmfType.INFO;
                    }
                },
                hackViaTcp: (hackViaTcp) => {
                    if (typeof hackViaTcp === "boolean") {
                        return hackViaTcp;
                    }
                },
                hackIpInContact: (hackIpInContact) => {
                    if (typeof hackIpInContact === "boolean") {
                        return hackIpInContact;
                    }
                    else if (typeof hackIpInContact === "string" && Grammar.parse(hackIpInContact, "host") !== -1) {
                        return hackIpInContact;
                    }
                },
                hackWssInTransport: (hackWssInTransport) => {
                    if (typeof hackWssInTransport === "boolean") {
                        return hackWssInTransport;
                    }
                },
                hackAllowUnregisteredOptionTags: (hackAllowUnregisteredOptionTags) => {
                    if (typeof hackAllowUnregisteredOptionTags === "boolean") {
                        return hackAllowUnregisteredOptionTags;
                    }
                },
                contactTransport: (contactTransport) => {
                    if (typeof contactTransport === "string") {
                        return contactTransport;
                    }
                },
                extraSupported: (optionTags) => {
                    if (!(optionTags instanceof Array)) {
                        return;
                    }
                    for (const tag of optionTags) {
                        if (typeof tag !== "string") {
                            return;
                        }
                    }
                    return optionTags;
                },
                forceRport: (forceRport) => {
                    if (typeof forceRport === "boolean") {
                        return forceRport;
                    }
                },
                noAnswerTimeout: (noAnswerTimeout) => {
                    if (Utils.isDecimal(noAnswerTimeout)) {
                        const value = Number(noAnswerTimeout);
                        if (value > 0) {
                            return value;
                        }
                    }
                },
                password: (password) => {
                    return String(password);
                },
                rel100: (rel100) => {
                    if (rel100 === SIPConstants.supported.REQUIRED) {
                        return SIPConstants.supported.REQUIRED;
                    }
                    else if (rel100 === SIPConstants.supported.SUPPORTED) {
                        return SIPConstants.supported.SUPPORTED;
                    }
                    else {
                        return SIPConstants.supported.UNSUPPORTED;
                    }
                },
                replaces: (replaces) => {
                    if (replaces === SIPConstants.supported.REQUIRED) {
                        return SIPConstants.supported.REQUIRED;
                    }
                    else if (replaces === SIPConstants.supported.SUPPORTED) {
                        return SIPConstants.supported.SUPPORTED;
                    }
                    else {
                        return SIPConstants.supported.UNSUPPORTED;
                    }
                },
                register: (register) => {
                    if (typeof register === "boolean") {
                        return register;
                    }
                },
                registerOptions: (registerOptions) => {
                    if (typeof registerOptions === "object") {
                        return registerOptions;
                    }
                },
                usePreloadedRoute: (usePreloadedRoute) => {
                    if (typeof usePreloadedRoute === "boolean") {
                        return usePreloadedRoute;
                    }
                },
                userAgentString: (userAgentString) => {
                    if (typeof userAgentString === "string") {
                        return userAgentString;
                    }
                },
                autostart: (autostart) => {
                    if (typeof autostart === "boolean") {
                        return autostart;
                    }
                },
                autostop: (autostop) => {
                    if (typeof autostop === "boolean") {
                        return autostop;
                    }
                },
                sessionDescriptionHandlerFactory: (sessionDescriptionHandlerFactory) => {
                    if (sessionDescriptionHandlerFactory instanceof Function) {
                        return sessionDescriptionHandlerFactory;
                    }
                },
                sessionDescriptionHandlerFactoryOptions: (options) => {
                    if (typeof options === "object") {
                        return options;
                    }
                },
                authenticationFactory: this.checkAuthenticationFactory,
                allowLegacyNotifications: (allowLegacyNotifications) => {
                    if (typeof allowLegacyNotifications === "boolean") {
                        return allowLegacyNotifications;
                    }
                },
                custom: (custom) => {
                    if (typeof custom === "object") {
                        return custom;
                    }
                },
                contactName: (contactName) => {
                    if (typeof contactName === "string") {
                        return contactName;
                    }
                },
                experimentalFeatures: (experimentalFeatures) => {
                    if (typeof experimentalFeatures === "boolean") {
                        return experimentalFeatures;
                    }
                },
            }
        };
    }
}
UA.C = {
    // UA status codes
    STATUS_INIT: 0,
    STATUS_STARTING: 1,
    STATUS_READY: 2,
    STATUS_USER_CLOSED: 3,
    STATUS_NOT_READY: 4,
    // UA error codes
    CONFIGURATION_ERROR: 1,
    NETWORK_ERROR: 2,
    ALLOWED_METHODS: [
        "ACK",
        "CANCEL",
        "INVITE",
        "MESSAGE",
        "BYE",
        "OPTIONS",
        "INFO",
        "NOTIFY",
        "REFER"
    ],
    ACCEPTED_BODY_TYPES: [
        "application/sdp",
        "application/dtmf-relay"
    ],
    MAX_FORWARDS: 70,
    TAG_LENGTH: 10
};
(function (UA) {
    let DtmfType;
    (function (DtmfType) {
        DtmfType["RTP"] = "rtp";
        DtmfType["INFO"] = "info";
    })(DtmfType = UA.DtmfType || (UA.DtmfType = {}));
})(UA || (UA = {}));
/**
 * Factory function to generate configuration give a UA.
 * @param ua UA
 */
export function makeUserAgentCoreConfigurationFromUA(ua) {
    // FIXME: Configuration URI is a bad mix of types currently. It also needs to exist.
    if (!(ua.configuration.uri instanceof URI)) {
        throw new Error("Configuration URI not instance of URI.");
    }
    const aor = ua.configuration.uri;
    const contact = ua.contact;
    const displayName = ua.configuration.displayName ? ua.configuration.displayName : "";
    const hackViaTcp = ua.configuration.hackViaTcp ? true : false;
    const routeSet = ua.configuration.usePreloadedRoute && ua.transport.server && ua.transport.server.sipUri ?
        [ua.transport.server.sipUri] :
        [];
    const sipjsId = ua.configuration.sipjsId || Utils.createRandomToken(5);
    let supportedOptionTags = [];
    supportedOptionTags.push("outbound"); // TODO: is this really supported?
    if (ua.configuration.rel100 === SIPConstants.supported.SUPPORTED) {
        supportedOptionTags.push("100rel");
    }
    if (ua.configuration.replaces === SIPConstants.supported.SUPPORTED) {
        supportedOptionTags.push("replaces");
    }
    if (ua.configuration.extraSupported) {
        supportedOptionTags.push(...ua.configuration.extraSupported);
    }
    if (!ua.configuration.hackAllowUnregisteredOptionTags) {
        supportedOptionTags = supportedOptionTags.filter((optionTag) => SIPConstants.OPTION_TAGS[optionTag]);
    }
    supportedOptionTags = Array.from(new Set(supportedOptionTags)); // array of unique values
    const supportedOptionTagsResponse = ua.getSupportedResponseOptions();
    const userAgentHeaderFieldValue = ua.configuration.userAgentString || "sipjs";
    if (!(ua.configuration.viaHost)) {
        throw new Error("Configuration via host undefined");
    }
    const viaForceRport = ua.configuration.forceRport ? true : false;
    const viaHost = ua.configuration.viaHost;
    const configuration = {
        aor,
        contact,
        displayName,
        hackViaTcp,
        loggerFactory: ua.getLoggerFactory(),
        routeSet,
        sipjsId,
        supportedOptionTags,
        supportedOptionTagsResponse,
        userAgentHeaderFieldValue,
        viaForceRport,
        viaHost,
        authenticationFactory: () => {
            if (ua.configuration.authenticationFactory) {
                return ua.configuration.authenticationFactory(ua);
            }
            return undefined;
        },
        transportAccessor: () => ua.transport
    };
    return configuration;
}
