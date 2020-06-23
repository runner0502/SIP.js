import { EventEmitter } from "events";
import { fromBodyLegacy, getBody, Grammar, SessionState as SessionDialogState, SignalingState } from "../core/index";
import { getReasonPhrase } from "../core/messages/utils";
import { AllowedMethods } from "../core/user-agent-core/allowed-methods";
import { makeEmitter } from "./emitter";
import { ContentTypeUnsupportedError } from "./exceptions/index";
import { Info } from "./info";
import { Notification } from "./notification";
import { Referral } from "./referral";
import { SessionState } from "./session-state";
/**
 * Deprecated
 * @internal
 */
export var _SessionStatus;
(function (_SessionStatus) {
    // Session states
    _SessionStatus[_SessionStatus["STATUS_NULL"] = 0] = "STATUS_NULL";
    _SessionStatus[_SessionStatus["STATUS_INVITE_SENT"] = 1] = "STATUS_INVITE_SENT";
    _SessionStatus[_SessionStatus["STATUS_1XX_RECEIVED"] = 2] = "STATUS_1XX_RECEIVED";
    _SessionStatus[_SessionStatus["STATUS_INVITE_RECEIVED"] = 3] = "STATUS_INVITE_RECEIVED";
    _SessionStatus[_SessionStatus["STATUS_WAITING_FOR_ANSWER"] = 4] = "STATUS_WAITING_FOR_ANSWER";
    _SessionStatus[_SessionStatus["STATUS_ANSWERED"] = 5] = "STATUS_ANSWERED";
    _SessionStatus[_SessionStatus["STATUS_WAITING_FOR_PRACK"] = 6] = "STATUS_WAITING_FOR_PRACK";
    _SessionStatus[_SessionStatus["STATUS_WAITING_FOR_ACK"] = 7] = "STATUS_WAITING_FOR_ACK";
    _SessionStatus[_SessionStatus["STATUS_CANCELED"] = 8] = "STATUS_CANCELED";
    _SessionStatus[_SessionStatus["STATUS_TERMINATED"] = 9] = "STATUS_TERMINATED";
    _SessionStatus[_SessionStatus["STATUS_ANSWERED_WAITING_FOR_PRACK"] = 10] = "STATUS_ANSWERED_WAITING_FOR_PRACK";
    _SessionStatus[_SessionStatus["STATUS_EARLY_MEDIA"] = 11] = "STATUS_EARLY_MEDIA";
    _SessionStatus[_SessionStatus["STATUS_CONFIRMED"] = 12] = "STATUS_CONFIRMED";
})(_SessionStatus || (_SessionStatus = {}));
/**
 * A session provides real time communication between one or more participants.
 * @public
 */
export class Session {
    /**
     * Constructor.
     * @param userAgent - User agent. See {@link UserAgent} for details.
     * @internal
     */
    constructor(userAgent, options = {}) {
        /** @internal */
        this.localHold = false;
        /** True if an error caused session termination. */
        /** @internal */
        this.isFailed = false;
        /** @internal */
        this.rel100 = "none";
        /** @internal */
        this.status = _SessionStatus.STATUS_NULL;
        /** @internal */
        this.expiresTimer = undefined;
        /** @internal */
        this.userNoAnswerTimer = undefined;
        this._state = SessionState.Initial;
        this._stateEventEmitter = new EventEmitter();
        this.pendingReinvite = false;
        this.userAgent = userAgent;
        this.delegate = options.delegate;
        this.logger = userAgent.getLogger("sip.session");
    }
    /**
     * Session description handler.
     * @remarks
     * If `this` is an instance of `Invitation`,
     * `sessionDescriptionHandler` will be defined when the session state changes to "established".
     * If `this` is an instance of `Inviter` and an offer was sent in the INVITE,
     * `sessionDescriptionHandler` will be defined when the session state changes to "establishing".
     * If `this` is an instance of `Inviter` and an offer was not sent in the INVITE,
     * `sessionDescriptionHandler` will be defined when the session state changes to "established".
     * Otherwise `undefined`.
     */
    get sessionDescriptionHandler() {
        return this._sessionDescriptionHandler;
    }
    /**
     * Session description handler factory.
     */
    get sessionDescriptionHandlerFactory() {
        return this.userAgent.configuration.sessionDescriptionHandlerFactory;
    }
    /**
     * Session state.
     */
    get state() {
        return this._state;
    }
    /**
     * Session state change emitter.
     */
    get stateChange() {
        return makeEmitter(this._stateEventEmitter);
    }
    /**
     * Renegotiate the session. Sends a re-INVITE.
     * @param options - Options bucket.
     */
    invite(options = {}) {
        this.logger.log("Session.invite");
        if (this.state !== SessionState.Established) {
            return Promise.reject(new Error(`Invalid session state ${this.state}`));
        }
        if (this.pendingReinvite) {
            return Promise.reject(new Error("Reinvite in progress. Please wait until complete, then try again."));
        }
        if (!this._sessionDescriptionHandler) {
            throw new Error("Session description handler undefined.");
        }
        this.pendingReinvite = true;
        const delegate = {
            onAccept: (response) => {
                // A re-INVITE transaction has an offer/answer [RFC3264] exchange
                // associated with it.  The UAC (User Agent Client) generating a given
                // re-INVITE can act as the offerer or as the answerer.  A UAC willing
                // to act as the offerer includes an offer in the re-INVITE.  The UAS
                // (User Agent Server) then provides an answer in a response to the
                // re-INVITE.  A UAC willing to act as answerer does not include an
                // offer in the re-INVITE.  The UAS then provides an offer in a response
                // to the re-INVITE becoming, thus, the offerer.
                // https://tools.ietf.org/html/rfc6141#section-1
                const body = getBody(response.message);
                if (!body) {
                    // No way to recover, so terminate session and mark as failed.
                    this.logger.error("Received 2xx response to re-INVITE without a session description");
                    this.ackAndBye(response, 400, "Missing session description");
                    this.stateTransition(SessionState.Terminated);
                    this.isFailed = true;
                    this.pendingReinvite = false;
                    return;
                }
                if (options.withoutSdp) {
                    // INVITE without SDP - set remote offer and send an answer in the ACK
                    // FIXME: SDH options & SDH modifiers options are applied somewhat ambiguously
                    //        This behavior was ported from legacy code and the issue punted down the road.
                    const answerOptions = {
                        sessionDescriptionHandlerOptions: options.sessionDescriptionHandlerOptions,
                        sessionDescriptionHandlerModifiers: options.sessionDescriptionHandlerModifiers
                    };
                    this.setOfferAndGetAnswer(body, answerOptions)
                        .then((answerBody) => {
                        response.ack({ body: answerBody });
                    })
                        .catch((error) => {
                        // No way to recover, so terminate session and mark as failed.
                        this.logger.error("Failed to handle offer in 2xx response to re-INVITE");
                        this.logger.error(error.message);
                        if (this.state === SessionState.Terminated) {
                            // A BYE should not be sent if alreadly terminated.
                            // For example, a BYE may be sent/received while re-INVITE is outstanding.
                            response.ack();
                        }
                        else {
                            this.ackAndBye(response, 488, "Bad Media Description");
                            this.stateTransition(SessionState.Terminated);
                            this.isFailed = true;
                        }
                    })
                        .then(() => {
                        this.pendingReinvite = false;
                        if (options.requestDelegate && options.requestDelegate.onAccept) {
                            options.requestDelegate.onAccept(response);
                        }
                    });
                }
                else {
                    // INVITE with SDP - set remote answer and send an ACK
                    // FIXME: SDH options & SDH modifiers options are applied somewhat ambiguously
                    //        This behavior was ported from legacy code and the issue punted down the road.
                    const answerOptions = {
                        sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptions,
                        sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiers
                    };
                    this.setAnswer(body, answerOptions)
                        .then(() => {
                        response.ack();
                    })
                        .catch((error) => {
                        // No way to recover, so terminate session and mark as failed.
                        this.logger.error("Failed to handle answer in 2xx response to re-INVITE");
                        this.logger.error(error.message);
                        // A BYE should only be sent if session is not alreadly terminated.
                        // For example, a BYE may be sent/received while re-INVITE is outstanding.
                        // The ACK needs to be sent regardless as it was not handled by the transaction.
                        if (this.state !== SessionState.Terminated) {
                            this.ackAndBye(response, 488, "Bad Media Description");
                            this.stateTransition(SessionState.Terminated);
                            this.isFailed = true;
                        }
                        else {
                            response.ack();
                        }
                    })
                        .then(() => {
                        this.pendingReinvite = false;
                        if (options.requestDelegate && options.requestDelegate.onAccept) {
                            options.requestDelegate.onAccept(response);
                        }
                    });
                }
            },
            onProgress: (response) => {
                return;
            },
            onRedirect: (response) => {
                return;
            },
            onReject: (response) => {
                this.logger.warn("Received a non-2xx response to re-INVITE");
                this.pendingReinvite = false;
                if (options.withoutSdp) {
                    if (options.requestDelegate && options.requestDelegate.onReject) {
                        options.requestDelegate.onReject(response);
                    }
                }
                else {
                    this.rollbackOffer()
                        .catch((error) => {
                        // No way to recover, so terminate session and mark as failed.
                        this.logger.error("Failed to rollback offer on non-2xx response to re-INVITE");
                        this.logger.error(error.message);
                        // A BYE should only be sent if session is not alreadly terminated.
                        // For example, a BYE may be sent/received while re-INVITE is outstanding.
                        // Note that the ACK was already sent by the transaction, so just need to send BYE.
                        if (this.state !== SessionState.Terminated) {
                            if (!this.dialog) {
                                throw new Error("Dialog undefined.");
                            }
                            const extraHeaders = [];
                            extraHeaders.push("Reason: " + this.getReasonHeaderValue(500, "Internal Server Error"));
                            this.dialog.bye(undefined, { extraHeaders });
                            this.stateTransition(SessionState.Terminated);
                            this.isFailed = true;
                        }
                    })
                        .then(() => {
                        if (options.requestDelegate && options.requestDelegate.onReject) {
                            options.requestDelegate.onReject(response);
                        }
                    });
                }
            },
            onTrying: (response) => {
                return;
            }
        };
        const requestOptions = options.requestOptions || {};
        requestOptions.extraHeaders = (requestOptions.extraHeaders || []).slice();
        requestOptions.extraHeaders.push("Allow: " + AllowedMethods.toString());
        requestOptions.extraHeaders.push("Contact: " + this.contact);
        // Just send an INVITE with no sdp...
        if (options.withoutSdp) {
            if (!this.dialog) {
                this.pendingReinvite = false;
                return Promise.reject(new Error("Dialog undefined."));
            }
            return Promise.resolve(this.dialog.invite(delegate, requestOptions));
        }
        // Get an offer and send it in an INVITE
        // FIXME: SDH options & SDH modifiers options are applied somewhat ambiguously
        //        This behavior was ported from legacy code and the issue punted down the road.
        const offerOptions = {
            sessionDescriptionHandlerOptions: options.sessionDescriptionHandlerOptions,
            sessionDescriptionHandlerModifiers: options.sessionDescriptionHandlerModifiers
        };
        return this.getOffer(offerOptions)
            .then((offerBody) => {
            if (!this.dialog) {
                this.pendingReinvite = false;
                throw new Error("Dialog undefined.");
            }
            requestOptions.body = offerBody;
            return this.dialog.invite(delegate, requestOptions);
        })
            .catch((error) => {
            this.logger.error(error.message);
            this.logger.error("Failed to send re-INVITE");
            this.pendingReinvite = false;
            throw error;
        });
    }
    /**
     * Send BYE.
     * @param delegate - Request delegate.
     * @param options - Request options bucket.
     * @internal
     */
    _bye(delegate, options) {
        // Using core session dialog
        if (!this.dialog) {
            return Promise.reject(new Error("Session dialog undefined."));
        }
        const dialog = this.dialog;
        // The caller's UA MAY send a BYE for either confirmed or early dialogs,
        // and the callee's UA MAY send a BYE on confirmed dialogs, but MUST NOT
        // send a BYE on early dialogs. However, the callee's UA MUST NOT send a
        // BYE on a confirmed dialog until it has received an ACK for its 2xx
        // response or until the server transaction times out.
        // https://tools.ietf.org/html/rfc3261#section-15
        switch (dialog.sessionState) {
            case SessionDialogState.Initial:
                throw new Error(`Invalid dialog state ${dialog.sessionState}`);
            case SessionDialogState.Early: // Implementation choice - not sending BYE for early dialogs.
                throw new Error(`Invalid dialog state ${dialog.sessionState}`);
            case SessionDialogState.AckWait: { // This state only occurs if we are the callee.
                this.stateTransition(SessionState.Terminating); // We're terminating
                return new Promise((resolve, reject) => {
                    dialog.delegate = {
                        // When ACK shows up, say BYE.
                        onAck: () => {
                            const request = dialog.bye(delegate, options);
                            this.stateTransition(SessionState.Terminated);
                            resolve(request);
                        },
                        // Or the server transaction times out before the ACK arrives.
                        onAckTimeout: () => {
                            const request = dialog.bye(delegate, options);
                            this.stateTransition(SessionState.Terminated);
                            resolve(request);
                        }
                    };
                });
            }
            case SessionDialogState.Confirmed: {
                const request = dialog.bye(delegate, options);
                this.stateTransition(SessionState.Terminated);
                return Promise.resolve(request);
            }
            case SessionDialogState.Terminated:
                throw new Error(`Invalid dialog state ${dialog.sessionState}`);
            default:
                throw new Error("Unrecognized state.");
        }
    }
    /**
     * Called to cleanup session after terminated.
     * @internal
     */
    _close() {
        this.logger.log(`Session[${this.id}]._close`);
        if (this.status === _SessionStatus.STATUS_TERMINATED) {
            return;
        }
        // 1st Step. Terminate media.
        if (this._sessionDescriptionHandler) {
            this._sessionDescriptionHandler.close();
        }
        // 2nd Step. Terminate signaling.
        // Clear session timers
        if (this.expiresTimer) {
            clearTimeout(this.expiresTimer);
        }
        if (this.userNoAnswerTimer) {
            clearTimeout(this.userNoAnswerTimer);
        }
        this.status = _SessionStatus.STATUS_TERMINATED;
        if (!this.id) {
            throw new Error("Session id undefined.");
        }
        delete this.userAgent.sessions[this.id];
        return;
    }
    /**
     * Send INFO.
     * @param delegate - Request delegate.
     * @param options - Request options bucket.
     * @internal
     */
    _info(delegate, options) {
        // Using core session dialog
        if (!this.dialog) {
            return Promise.reject(new Error("Session dialog undefined."));
        }
        return Promise.resolve(this.dialog.info(delegate, options));
    }
    /**
     * Send REFER.
     * @param referrer - Referrer.
     * @param delegate - Request delegate.
     * @param options - Request options bucket.
     * @internal
     */
    refer(referrer, delegate, options) {
        // Using core session dialog
        if (!this.dialog) {
            return Promise.reject(new Error("Session dialog undefined."));
        }
        // If the session has a referrer, it will receive any in-dialog NOTIFY requests.
        this.referrer = referrer;
        return Promise.resolve(this.dialog.refer(delegate, options));
    }
    /**
     * Send ACK and then BYE. There are unrecoverable errors which can occur
     * while handling dialog forming and in-dialog INVITE responses and when
     * they occur we ACK the response and send a BYE.
     * Note that the BYE is sent in the dialog associated with the response
     * which is not necessarily `this.dialog`. And, accordingly, the
     * session state is not transitioned to terminated and session is not closed.
     * @param inviteResponse - The response causing the error.
     * @param statusCode - Status code for he reason phrase.
     * @param reasonPhrase - Reason phrase for the BYE.
     * @internal
     */
    ackAndBye(response, statusCode, reasonPhrase) {
        response.ack();
        const extraHeaders = [];
        if (statusCode) {
            extraHeaders.push("Reason: " + this.getReasonHeaderValue(statusCode, reasonPhrase));
        }
        // Using the dialog session associate with the response (which might not be this.dialog)
        response.session.bye(undefined, { extraHeaders });
    }
    /**
     * Handle in dialog ACK request.
     * @internal
     */
    onAckRequest(request) {
        this.logger.log("Session.onAckRequest");
        if (this.state !== SessionState.Established && this.state !== SessionState.Terminating) {
            this.logger.error(`ACK received while in state ${this.state}, dropping request`);
            return;
        }
        const dialog = this.dialog;
        if (!dialog) {
            throw new Error("Dialog undefined.");
        }
        switch (dialog.signalingState) {
            case SignalingState.Initial: {
                // State should never be reached as first reliable response must have answer/offer.
                // So we must have never has sent an offer.
                this.logger.error(`Invalid signaling state ${dialog.signalingState}.`);
                this.isFailed = true;
                const extraHeaders = ["Reason: " + this.getReasonHeaderValue(488, "Bad Media Description")];
                dialog.bye(undefined, { extraHeaders });
                this.stateTransition(SessionState.Terminated);
                return;
            }
            case SignalingState.Stable: {
                // State we should be in.
                // Either the ACK has the answer that got us here, or we were in this state prior to the ACK.
                const body = getBody(request.message);
                // If the ACK doesn't have an answer, nothing to be done.
                if (!body) {
                    this.status = _SessionStatus.STATUS_CONFIRMED;
                    return;
                }
                if (body.contentDisposition === "render") {
                    this.renderbody = body.content;
                    this.rendertype = body.contentType;
                    this.status = _SessionStatus.STATUS_CONFIRMED;
                    return;
                }
                if (body.contentDisposition !== "session") {
                    this.status = _SessionStatus.STATUS_CONFIRMED;
                    return;
                }
                // Receved answer in ACK.
                const options = {
                    sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptions,
                    sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiers
                };
                this.setAnswer(body, options)
                    .then(() => { this.status = _SessionStatus.STATUS_CONFIRMED; })
                    .catch((error) => {
                    this.logger.error(error.message);
                    this.isFailed = true;
                    const extraHeaders = ["Reason: " + this.getReasonHeaderValue(488, "Bad Media Description")];
                    dialog.bye(undefined, { extraHeaders });
                    this.stateTransition(SessionState.Terminated);
                });
                return;
            }
            case SignalingState.HaveLocalOffer: {
                // State should never be reached as local offer would be answered by this ACK.
                // So we must have received an ACK without an answer.
                this.logger.error(`Invalid signaling state ${dialog.signalingState}.`);
                this.isFailed = true;
                const extraHeaders = ["Reason: " + this.getReasonHeaderValue(488, "Bad Media Description")];
                dialog.bye(undefined, { extraHeaders });
                this.stateTransition(SessionState.Terminated);
                return;
            }
            case SignalingState.HaveRemoteOffer: {
                // State should never be reached as remote offer would be answered in first reliable response.
                // So we must have never has sent an answer.
                this.logger.error(`Invalid signaling state ${dialog.signalingState}.`);
                this.isFailed = true;
                const extraHeaders = ["Reason: " + this.getReasonHeaderValue(488, "Bad Media Description")];
                dialog.bye(undefined, { extraHeaders });
                this.stateTransition(SessionState.Terminated);
                return;
            }
            case SignalingState.Closed:
                throw new Error(`Invalid signaling state ${dialog.signalingState}.`);
            default:
                throw new Error(`Invalid signaling state ${dialog.signalingState}.`);
        }
    }
    /**
     * Handle in dialog BYE request.
     * @internal
     */
    onByeRequest(request) {
        this.logger.log("Session.onByeRequest");
        if (this.state !== SessionState.Established) {
            this.logger.error(`BYE received while in state ${this.state}, dropping request`);
            return;
        }
        request.accept();
        this.stateTransition(SessionState.Terminated);
    }
    /**
     * Handle in dialog INFO request.
     * @internal
     */
    onInfoRequest(request) {
        this.logger.log("Session.onInfoRequest");
        if (this.state !== SessionState.Established) {
            this.logger.error(`INFO received while in state ${this.state}, dropping request`);
            return;
        }
        if (this.delegate && this.delegate.onInfo) {
            const info = new Info(request);
            this.delegate.onInfo(info);
        }
        else {
            request.accept();
        }
    }
    /**
     * Handle in dialog INVITE request.
     * @internal
     */
    onInviteRequest(request) {
        this.logger.log("Session.onInviteRequest");
        if (this.state !== SessionState.Established) {
            this.logger.error(`INVITE received while in state ${this.state}, dropping request`);
            return;
        }
        // TODO: would be nice to have core track and set the Contact header,
        // but currently the session which is setting it is holding onto it.
        const extraHeaders = ["Contact: " + this.contact];
        // Handle P-Asserted-Identity
        if (request.message.hasHeader("P-Asserted-Identity")) {
            const header = request.message.getHeader("P-Asserted-Identity");
            if (!header) {
                throw new Error("Header undefined.");
            }
            this.assertedIdentity = Grammar.nameAddrHeaderParse(header);
        }
        // FIXME: SDH options & SDH modifiers options are applied somewhat ambiguously
        //        This behavior was ported from legacy code and the issue punted down the road.
        const options = {
            sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptions,
            sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiers
        };
        this.generateResponseOfferAnswerInDialog(options)
            .then((body) => {
            const outgoingResponse = request.accept({ statusCode: 200, extraHeaders, body });
            if (this.delegate && this.delegate.onInvite) {
                this.delegate.onInvite(request.message, outgoingResponse.message, 200);
            }
        })
            .catch((error) => {
            this.logger.error(error.message);
            this.logger.error("Failed to handle to re-INVITE request");
            if (!this.dialog) {
                throw new Error("Dialog undefined.");
            }
            this.logger.error(this.dialog.signalingState);
            // If we don't have a local/remote offer...
            if (this.dialog.signalingState === SignalingState.Stable) {
                const outgoingResponse = request.reject({ statusCode: 488 }); // Not Acceptable Here
                if (this.delegate && this.delegate.onInvite) {
                    this.delegate.onInvite(request.message, outgoingResponse.message, 488);
                }
                return;
            }
            // Otherwise rollback
            this.rollbackOffer()
                .then(() => {
                const outgoingResponse = request.reject({ statusCode: 488 }); // Not Acceptable Here
                if (this.delegate && this.delegate.onInvite) {
                    this.delegate.onInvite(request.message, outgoingResponse.message, 488);
                }
            })
                .catch((errorRollback) => {
                // No way to recover, so terminate session and mark as failed.
                this.logger.error(errorRollback.message);
                this.logger.error("Failed to rollback offer on re-INVITE request");
                const outgoingResponse = request.reject({ statusCode: 488 }); // Not Acceptable Here
                // A BYE should only be sent if session is not alreadly terminated.
                // For example, a BYE may be sent/received while re-INVITE is outstanding.
                // Note that the ACK was already sent by the transaction, so just need to send BYE.
                if (this.state !== SessionState.Terminated) {
                    if (!this.dialog) {
                        throw new Error("Dialog undefined.");
                    }
                    const extraHeadersBye = [];
                    extraHeadersBye.push("Reason: " + this.getReasonHeaderValue(500, "Internal Server Error"));
                    this.dialog.bye(undefined, { extraHeaders });
                    this.stateTransition(SessionState.Terminated);
                    this.isFailed = true;
                }
                if (this.delegate && this.delegate.onInvite) {
                    this.delegate.onInvite(request.message, outgoingResponse.message, 488);
                }
            });
        });
    }
    /**
     * Handle in dialog NOTIFY request.
     * @internal
     */
    onNotifyRequest(request) {
        this.logger.log("Session.onNotifyRequest");
        if (this.state !== SessionState.Established) {
            this.logger.error(`NOTIFY received while in state ${this.state}, dropping request`);
            return;
        }
        // If this a NOTIFY associated with the progress of a REFER,
        // look to delegate handling to the associated Referrer.
        if (this.referrer && this.referrer.delegate && this.referrer.delegate.onNotify) {
            const notification = new Notification(request);
            this.referrer.delegate.onNotify(notification);
            return;
        }
        // Otherwise accept the NOTIFY.
        if (this.delegate && this.delegate.onNotify) {
            const notification = new Notification(request);
            this.delegate.onNotify(notification);
        }
        else {
            request.accept();
        }
    }
    /**
     * Handle in dialog PRACK request.
     * @internal
     */
    onPrackRequest(request) {
        this.logger.log("Session.onPrackRequest");
        if (this.state !== SessionState.Established) {
            this.logger.error(`PRACK received while in state ${this.state}, dropping request`);
            return;
        }
        throw new Error("Unimplemented.");
    }
    /**
     * Handle in dialog REFER request.
     * @internal
     */
    onReferRequest(request) {
        this.logger.log("Session.onReferRequest");
        if (this.state !== SessionState.Established) {
            this.logger.error(`REFER received while in state ${this.state}, dropping request`);
            return;
        }
        if (this.status === _SessionStatus.STATUS_CONFIRMED) {
            // RFC 3515 2.4.1
            if (!request.message.hasHeader("refer-to")) {
                this.logger.warn("Invalid REFER packet. A refer-to header is required. Rejecting.");
                request.reject();
                return;
            }
            const referral = new Referral(request, this);
            if (this.delegate && this.delegate.onRefer) {
                this.delegate.onRefer(referral);
            }
            else {
                this.logger.log("No delegate available to handle REFER, automatically accepting and following.");
                referral
                    .accept()
                    .then(() => referral
                    .makeInviter(this.passedOptions)
                    .invite())
                    .catch((error) => {
                    // FIXME: logging and eating error...
                    this.logger.error(error.message);
                });
            }
        }
    }
    /**
     * Generate an offer or answer for a response to an INVITE request.
     * If a remote offer was provided in the request, set the remote
     * description and get a local answer. If a remote offer was not
     * provided, generates a local offer.
     * @internal
     */
    generateResponseOfferAnswer(request, options) {
        if (this.dialog) {
            return this.generateResponseOfferAnswerInDialog(options);
        }
        const body = getBody(request.message);
        if (!body || body.contentDisposition !== "session") {
            return this.getOffer(options);
        }
        else {
            return this.setOfferAndGetAnswer(body, options);
        }
    }
    /**
     * Generate an offer or answer for a response to an INVITE request
     * when a dialog (early or otherwise) has already been established.
     * This method may NOT be called if a dialog has yet to be established.
     * @internal
     */
    generateResponseOfferAnswerInDialog(options) {
        if (!this.dialog) {
            throw new Error("Dialog undefined.");
        }
        switch (this.dialog.signalingState) {
            case SignalingState.Initial:
                return this.getOffer(options);
            case SignalingState.HaveLocalOffer:
                // o  Once the UAS has sent or received an answer to the initial
                // offer, it MUST NOT generate subsequent offers in any responses
                // to the initial INVITE.  This means that a UAS based on this
                // specification alone can never generate subsequent offers until
                // completion of the initial transaction.
                // https://tools.ietf.org/html/rfc3261#section-13.2.1
                return Promise.resolve(undefined);
            case SignalingState.HaveRemoteOffer:
                if (!this.dialog.offer) {
                    throw new Error(`Session offer undefined in signaling state ${this.dialog.signalingState}.`);
                }
                return this.setOfferAndGetAnswer(this.dialog.offer, options);
            case SignalingState.Stable:
                // o  Once the UAS has sent or received an answer to the initial
                // offer, it MUST NOT generate subsequent offers in any responses
                // to the initial INVITE.  This means that a UAS based on this
                // specification alone can never generate subsequent offers until
                // completion of the initial transaction.
                // https://tools.ietf.org/html/rfc3261#section-13.2.1
                if (this.state !== SessionState.Established) {
                    return Promise.resolve(undefined);
                }
                // In dialog INVITE without offer, get an offer for the response.
                return this.getOffer(options);
            case SignalingState.Closed:
                throw new Error(`Invalid signaling state ${this.dialog.signalingState}.`);
            default:
                throw new Error(`Invalid signaling state ${this.dialog.signalingState}.`);
        }
    }
    /**
     * Get local offer.
     * @internal
     */
    getOffer(options) {
        const sdh = this.setupSessionDescriptionHandler();
        const sdhOptions = options.sessionDescriptionHandlerOptions;
        const sdhModifiers = options.sessionDescriptionHandlerModifiers;
        // This is intentionally written very defensively. Don't trust SDH to behave.
        try {
            return sdh.getDescription(sdhOptions, sdhModifiers)
                .then((bodyAndContentType) => fromBodyLegacy(bodyAndContentType))
                .catch((error) => {
                this.logger.error("Session.getOffer: SDH getDescription rejected...");
                const e = error instanceof Error ? error : new Error(error);
                this.logger.error(e.message);
                throw e;
            });
        }
        catch (error) { // don't trust SDH to throw an Error
            this.logger.error("Session.getOffer: SDH getDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
    }
    /**
     * Rollback local/remote offer.
     * @internal
     */
    rollbackOffer() {
        const sdh = this.setupSessionDescriptionHandler();
        if (!sdh.rollbackDescription) {
            return Promise.resolve();
        }
        // This is intentionally written very defensively. Don't trust SDH to behave.
        try {
            return sdh.rollbackDescription()
                .catch((error) => {
                this.logger.error("Session.rollbackOffer: SDH rollbackDescription rejected...");
                const e = error instanceof Error ? error : new Error(error);
                this.logger.error(e.message);
                throw e;
            });
        }
        catch (error) { // don't trust SDH to throw an Error
            this.logger.error("Session.rollbackOffer: SDH rollbackDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
    }
    /**
     * Set remote answer.
     * @internal
     */
    setAnswer(answer, options) {
        const sdh = this.setupSessionDescriptionHandler();
        const sdhOptions = options.sessionDescriptionHandlerOptions;
        const sdhModifiers = options.sessionDescriptionHandlerModifiers;
        // This is intentionally written very defensively. Don't trust SDH to behave.
        try {
            if (!sdh.hasDescription(answer.contentType)) {
                return Promise.reject(new ContentTypeUnsupportedError());
            }
        }
        catch (error) {
            this.logger.error("Session.setAnswer: SDH hasDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
        try {
            return sdh.setDescription(answer.content, sdhOptions, sdhModifiers)
                .catch((error) => {
                this.logger.error("Session.setAnswer: SDH setDescription rejected...");
                const e = error instanceof Error ? error : new Error(error);
                this.logger.error(e.message);
                throw e;
            });
        }
        catch (error) { // don't trust SDH to throw an Error
            this.logger.error("Session.setAnswer: SDH setDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
    }
    /**
     * Set remote offer and get local answer.
     * @internal
     */
    setOfferAndGetAnswer(offer, options) {
        const sdh = this.setupSessionDescriptionHandler();
        const sdhOptions = options.sessionDescriptionHandlerOptions;
        const sdhModifiers = options.sessionDescriptionHandlerModifiers;
        // This is intentionally written very defensively. Don't trust SDH to behave.
        try {
            if (!sdh.hasDescription(offer.contentType)) {
                return Promise.reject(new ContentTypeUnsupportedError());
            }
        }
        catch (error) {
            this.logger.error("Session.setOfferAndGetAnswer: SDH hasDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
        try {
            return sdh.setDescription(offer.content, sdhOptions, sdhModifiers)
                .then(() => sdh.getDescription(sdhOptions, sdhModifiers))
                .then((bodyAndContentType) => fromBodyLegacy(bodyAndContentType))
                .catch((error) => {
                this.logger.error("Session.setOfferAndGetAnswer: SDH setDescription or getDescription rejected...");
                const e = error instanceof Error ? error : new Error(error);
                this.logger.error(e.message);
                throw e;
            });
        }
        catch (error) { // don't trust SDH to throw an Error
            this.logger.error("Session.setOfferAndGetAnswer: SDH setDescription or getDescription threw...");
            const e = error instanceof Error ? error : new Error(error);
            this.logger.error(e.message);
            return Promise.reject(e);
        }
    }
    /**
     * SDH for confirmed dialog.
     * @internal
     */
    setSessionDescriptionHandler(sdh) {
        if (this._sessionDescriptionHandler) {
            throw new Error("Sessionn description handler defined.");
        }
        this._sessionDescriptionHandler = sdh;
    }
    /**
     * SDH for confirmed dialog.
     * @internal
     */
    setupSessionDescriptionHandler() {
        if (this._sessionDescriptionHandler) {
            return this._sessionDescriptionHandler;
        }
        this._sessionDescriptionHandler =
            this.sessionDescriptionHandlerFactory(this, this.userAgent.configuration.sessionDescriptionHandlerFactoryOptions);
        return this._sessionDescriptionHandler;
    }
    /**
     * Transition session state.
     * @internal
     */
    stateTransition(newState) {
        const invalidTransition = () => {
            throw new Error(`Invalid state transition from ${this._state} to ${newState}`);
        };
        // Validate transition
        switch (this._state) {
            case SessionState.Initial:
                if (newState !== SessionState.Establishing &&
                    newState !== SessionState.Established &&
                    newState !== SessionState.Terminating &&
                    newState !== SessionState.Terminated) {
                    invalidTransition();
                }
                break;
            case SessionState.Establishing:
                if (newState !== SessionState.Established &&
                    newState !== SessionState.Terminating &&
                    newState !== SessionState.Terminated) {
                    invalidTransition();
                }
                break;
            case SessionState.Established:
                if (newState !== SessionState.Terminating &&
                    newState !== SessionState.Terminated) {
                    invalidTransition();
                }
                break;
            case SessionState.Terminating:
                if (newState !== SessionState.Terminated) {
                    invalidTransition();
                }
                break;
            case SessionState.Terminated:
                invalidTransition();
                break;
            default:
                throw new Error("Unrecognized state.");
        }
        if (newState === SessionState.Established) {
            this.startTime = new Date(); // Deprecated legacy ported behavior
        }
        if (newState === SessionState.Terminated) {
            this.endTime = new Date(); // Deprecated legacy ported behavior
            this._close();
        }
        // Transition
        this._state = newState;
        this.logger.log(`Session ${this.id} transitioned to state ${this._state}`);
        this._stateEventEmitter.emit("event", this._state);
    }
    getReasonHeaderValue(code, reason) {
        const cause = code;
        let text = getReasonPhrase(code);
        if (!text && reason) {
            text = reason;
        }
        return "SIP;cause=" + cause + ';text="' + text + '"';
    }
}
