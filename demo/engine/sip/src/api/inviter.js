import { C, fromBodyLegacy, Grammar, SignalingState } from "../core/index";
import { getReasonPhrase, newTag } from "../core/messages/utils";
import { _SessionStatus, Session } from "./session";
import { SessionState } from "./session-state";
import { SIPExtension } from "./user-agent-options";
/**
 * An inviter offers to establish a {@link Session} (outgoing INVITE).
 * @public
 */
export class Inviter extends Session {
    /**
     * Constructs a new instance of the `Inviter` class.
     * @param userAgent - User agent. See {@link UserAgent} for details.
     * @param targetURI - Request URI identifying the target of the message.
     * @param options - Options bucket. See {@link InviterOptions} for details.
     */
    constructor(userAgent, targetURI, options = {}) {
        super(userAgent, options);
        /** @internal */
        this.body = undefined;
        this.earlyMediaSessionDescriptionHandlers = new Map();
        // Default options params
        options.params = options.params || {};
        // Check Session Status
        if (this.status !== _SessionStatus.STATUS_NULL) {
            throw new Error(`Invalid status ${this.status}`);
        }
        // ClientContext properties
        this.logger = userAgent.getLogger("sip.inviter");
        if (options.body) {
            this.body = {
                body: options.body,
                contentType: options.contentType ? options.contentType : "application/sdp"
            };
        }
        // Anonymous call
        const anonymous = options.anonymous || false;
        if (anonymous && userAgent.configuration.uri) {
            options.params.fromDisplayName = "Anonymous";
            options.params.fromUri = "sip:anonymous@anonymous.invalid";
        }
        // From Tag
        const fromTag = newTag();
        // Contact
        // Do not add ;ob in initial forming dialog requests if the registration over
        // the current connection got a GRUU URI.
        const contact = userAgent.contact.toString({
            anonymous,
            outbound: anonymous ? !userAgent.contact.tempGruu : !userAgent.contact.pubGruu
        });
        // Params
        const params = options.params || {};
        params.fromTag = fromTag;
        // URIs
        let fromURI = userAgent.userAgentCore.configuration.aor;
        if (options.params.fromUri) {
            fromURI =
                (typeof options.params.fromUri === "string") ?
                    Grammar.URIParse(options.params.fromUri) :
                    options.params.fromUri;
        }
        if (!fromURI) {
            throw new TypeError("Invalid from URI: " + options.params.fromUri);
        }
        let toURI = targetURI;
        if (options.params.toUri) {
            toURI =
                (typeof options.params.toUri === "string") ?
                    Grammar.URIParse(options.params.toUri) :
                    options.params.toUri;
        }
        if (!toURI) {
            throw new TypeError("Invalid to URI: " + options.params.toUri);
        }
        // Extra headers
        const extraHeaders = (options.extraHeaders || []).slice();
        if (anonymous && userAgent.configuration.uri) {
            extraHeaders.push("P-Preferred-Identity: " + userAgent.configuration.uri.toString());
            extraHeaders.push("Privacy: id");
        }
        extraHeaders.push("Contact: " + contact);
        extraHeaders.push("Allow: " + [
            "ACK",
            "CANCEL",
            "INVITE",
            "MESSAGE",
            "BYE",
            "OPTIONS",
            "INFO",
            "NOTIFY",
            "REFER"
        ].toString());
        if (userAgent.configuration.sipExtension100rel === SIPExtension.Required) {
            extraHeaders.push("Require: 100rel");
        }
        if (userAgent.configuration.sipExtensionReplaces === SIPExtension.Required) {
            extraHeaders.push("Require: replaces");
        }
        let body;
        if (this.body) {
            body = fromBodyLegacy(this.body);
        }
        // Request
        this.request = userAgent.userAgentCore.makeOutgoingRequestMessage(C.INVITE, targetURI, fromURI, toURI, params, extraHeaders, body);
        if (!this.request.from) {
            throw new Error("From undefined.");
        }
        if (!this.request.to) {
            throw new Error("From undefined.");
        }
        this.localIdentity = this.request.from;
        this.remoteIdentity = this.request.to;
        // Options
        options.params = params;
        options.extraHeaders = extraHeaders;
        // Session properties
        this.contact = contact;
        this.fromTag = fromTag;
        this.id = this.request.callId + this.fromTag;
        this.onInfo = options.onInfo;
        this.passedOptions = options; // Save for later to use with refer
        this.renderbody = options.renderbody || undefined;
        this.rendertype = options.rendertype || "text/plain";
        this.sessionDescriptionHandlerModifiers = options.sessionDescriptionHandlerModifiers || [];
        this.sessionDescriptionHandlerOptions = options.sessionDescriptionHandlerOptions || {};
        // InviteClientContext properties
        this.inviteWithoutSdp = options.inviteWithoutSdp || false;
        this.isCanceled = false;
        this.earlyMedia = options.earlyMedia || false;
        userAgent.applicants[this.toString()] = this;
    }
    /**
     * Cancels the INVITE request.
     * @param options - Options bucket.
     */
    cancel(options = {}) {
        this.logger.log("Inviter.cancel");
        // validate state
        if (this.state !== SessionState.Initial && this.state !== SessionState.Establishing) {
            const error = new Error(`Invalid session state ${this.state}`);
            this.logger.error(error.message);
            return Promise.reject(error);
        }
        // canceled has some special cases
        if (this.isCanceled) {
            throw new Error("Already canceled.");
        }
        this.isCanceled = true;
        // transition state
        this.stateTransition(SessionState.Terminating);
        // cleanup media as needed
        this.disposeEarlyMedia();
        if (this.sessionDescriptionHandler) {
            this.sessionDescriptionHandler.close();
        }
        // helper function
        function getCancelReason(code, reason) {
            if (code && code < 200 || code > 699) {
                throw new TypeError("Invalid statusCode: " + code);
            }
            else if (code) {
                const cause = code;
                const text = getReasonPhrase(code) || reason;
                return "SIP;cause=" + cause + ';text="' + text + '"';
            }
        }
        if (this.outgoingInviteRequest) {
            // the CANCEL may not be respected by peer(s), so don't transition to terminated
            let cancelReason;
            if (options.statusCode && options.reasonPhrase) {
                cancelReason = getCancelReason(options.statusCode, options.reasonPhrase);
            }
            this.outgoingInviteRequest.cancel(cancelReason, options);
        }
        else {
            this.logger.warn("Canceled session before INVITE was sent");
            this.stateTransition(SessionState.Terminated);
        }
        return Promise.resolve();
    }
    /**
     * Sends the INVITE request.
     * @remarks
     * TLDR...
     *  1) Only one offer/answer exchange permitted during initial INVITE.
     *  2) No "early media" if the initial offer is in an INVITE (default behavior).
     *  3) If "early media" and the initial offer is in an INVITE, no INVITE forking.
     *
     * 1) Only one offer/answer exchange permitted during initial INVITE.
     *
     * Our implementation replaces the following bullet point...
     *
     * o  After having sent or received an answer to the first offer, the
     *    UAC MAY generate subsequent offers in requests based on rules
     *    specified for that method, but only if it has received answers
     *    to any previous offers, and has not sent any offers to which it
     *    hasn't gotten an answer.
     * https://tools.ietf.org/html/rfc3261#section-13.2.1
     *
     * ...with...
     *
     * o  After having sent or received an answer to the first offer, the
     *    UAC MUST NOT generate subsequent offers in requests based on rules
     *    specified for that method.
     *
     * ...which in combination with this bullet point...
     *
     * o  Once the UAS has sent or received an answer to the initial
     *    offer, it MUST NOT generate subsequent offers in any responses
     *    to the initial INVITE.  This means that a UAS based on this
     *    specification alone can never generate subsequent offers until
     *    completion of the initial transaction.
     * https://tools.ietf.org/html/rfc3261#section-13.2.1
     *
     * ...ensures that EXACTLY ONE offer/answer exchange will occur
     * during an initial out of dialog INVITE request made by our UAC.
     *
     *
     * 2) No "early media" if the initial offer is in an INVITE (default behavior).
     *
     * While our implementation adheres to the following bullet point...
     *
     * o  If the initial offer is in an INVITE, the answer MUST be in a
     *    reliable non-failure message from UAS back to UAC which is
     *    correlated to that INVITE.  For this specification, that is
     *    only the final 2xx response to that INVITE.  That same exact
     *    answer MAY also be placed in any provisional responses sent
     *    prior to the answer.  The UAC MUST treat the first session
     *    description it receives as the answer, and MUST ignore any
     *    session descriptions in subsequent responses to the initial
     *    INVITE.
     * https://tools.ietf.org/html/rfc3261#section-13.2.1
     *
     * We have made the following implementation decision with regard to early media...
     *
     * o  If the initial offer is in the INVITE, the answer from the
     *    UAS back to the UAC will establish a media session only
     *    only after the final 2xx response to that INVITE is received.
     *
     * The reason for this decision is rooted in a restriction currently
     * inherent in WebRTC. Specifically, while a SIP INVITE request with an
     * initial offer may fork resulting in more than one provisional answer,
     * there is currently no easy/good way to to "fork" an offer generated
     * by a peer connection. In particular, a WebRTC offer currently may only
     * be matched with one answer and we have no good way to know which
     * "provisional answer" is going to be the "final answer". So we have
     * decided to punt and not create any "early media" sessions in this case.
     *
     * The upshot is that if you want "early media", you must not put the
     * initial offer in the INVITE. Instead, force the UAS to provide the
     * initial offer by sending an INVITE without an offer. In the WebRTC
     * case this allows us to create a unique peer connection with a unique
     * answer for every provisional offer with "early media" on all of them.
     *
     *
     * 3) If "early media" and the initial offer is in an INVITE, no INVITE forking.
     *
     * The default behaviour may be altered and "early media" utilized if the
     * initial offer is in the an INVITE by setting the `earlyMedia` options.
     * However in that case the INVITE request MUST NOT fork. This allows for
     * "early media" in environments where the forking behaviour of the SIP
     * servers being utilized is configured to disallow forking.
     */
    invite(options = {}) {
        this.logger.log("Inviter.invite");
        // validate state
        if (this.state !== SessionState.Initial) {
            // re-invite
            return super.invite(options);
        }
        if (!this.id) {
            throw new Error("Session id undefined.");
        }
        // save the session into the user agent sessions collection.
        this.userAgent.sessions[this.id] = this;
        // just send an INVITE with no sdp...
        if (options.withoutSdp || this.inviteWithoutSdp) {
            if (this.renderbody && this.rendertype) {
                this.request.body = { contentType: this.rendertype, body: this.renderbody };
            }
            // transition state
            this.stateTransition(SessionState.Establishing);
            this.status = _SessionStatus.STATUS_INVITE_SENT;
            return Promise.resolve(this.sendInvite(options));
        }
        // get an offer and send it in an INVITE
        const offerOptions = {
            sessionDescriptionHandlerOptions: this.sessionDescriptionHandlerOptions,
            sessionDescriptionHandlerModifiers: this.sessionDescriptionHandlerModifiers
        };
        return this.getOffer(offerOptions)
            .then((body) => {
            // TODO: Review error handling...
            // There are some race conditions which can occur, all of which will cause stateTransition() to throw.
            //  - invite() can be called (a)synchronously after invite() is called (second call to invite() fails)
            //  - cancel() or terminate()) can be called (a)synchronously after invite() (invite() fails)
            // The caller should avoid the first case, but the second one is common.
            // For now we are just letting the state transition fail in all cases.
            // transition state
            this.stateTransition(SessionState.Establishing);
            this.status = _SessionStatus.STATUS_INVITE_SENT;
            this.request.body = { body: body.content, contentType: body.contentType };
            return this.sendInvite(options);
        })
            .catch((error) => {
            this.logger.log(error.message);
            this.stateTransition(SessionState.Terminated);
            throw error;
        });
    }
    /**
     * Called to cleanup session after terminated.
     * Using it here just to dispose of early media.
     * @internal
     */
    _close() {
        this.disposeEarlyMedia();
        super._close();
    }
    /**
     * 13.2.1 Creating the Initial INVITE
     *
     * Since the initial INVITE represents a request outside of a dialog,
     * its construction follows the procedures of Section 8.1.1.  Additional
     * processing is required for the specific case of INVITE.
     *
     * An Allow header field (Section 20.5) SHOULD be present in the INVITE.
     * It indicates what methods can be invoked within a dialog, on the UA
     * sending the INVITE, for the duration of the dialog.  For example, a
     * UA capable of receiving INFO requests within a dialog [34] SHOULD
     * include an Allow header field listing the INFO method.
     *
     * A Supported header field (Section 20.37) SHOULD be present in the
     * INVITE.  It enumerates all the extensions understood by the UAC.
     *
     * An Accept (Section 20.1) header field MAY be present in the INVITE.
     * It indicates which Content-Types are acceptable to the UA, in both
     * the response received by it, and in any subsequent requests sent to
     * it within dialogs established by the INVITE.  The Accept header field
     * is especially useful for indicating support of various session
     * description formats.
     *
     * The UAC MAY add an Expires header field (Section 20.19) to limit the
     * validity of the invitation.  If the time indicated in the Expires
     * header field is reached and no final answer for the INVITE has been
     * received, the UAC core SHOULD generate a CANCEL request for the
     * INVITE, as per Section 9.
     *
     * A UAC MAY also find it useful to add, among others, Subject (Section
     * 20.36), Organization (Section 20.25) and User-Agent (Section 20.41)
     * header fields.  They all contain information related to the INVITE.
     *
     * The UAC MAY choose to add a message body to the INVITE.  Section
     * 8.1.1.10 deals with how to construct the header fields -- Content-
     * Type among others -- needed to describe the message body.
     *
     * https://tools.ietf.org/html/rfc3261#section-13.2.1
     */
    sendInvite(options = {}) {
        //    There are special rules for message bodies that contain a session
        //    description - their corresponding Content-Disposition is "session".
        //    SIP uses an offer/answer model where one UA sends a session
        //    description, called the offer, which contains a proposed description
        //    of the session.  The offer indicates the desired communications means
        //    (audio, video, games), parameters of those means (such as codec
        //    types) and addresses for receiving media from the answerer.  The
        //    other UA responds with another session description, called the
        //    answer, which indicates which communications means are accepted, the
        //    parameters that apply to those means, and addresses for receiving
        //    media from the offerer. An offer/answer exchange is within the
        //    context of a dialog, so that if a SIP INVITE results in multiple
        //    dialogs, each is a separate offer/answer exchange.  The offer/answer
        //    model defines restrictions on when offers and answers can be made
        //    (for example, you cannot make a new offer while one is in progress).
        //    This results in restrictions on where the offers and answers can
        //    appear in SIP messages.  In this specification, offers and answers
        //    can only appear in INVITE requests and responses, and ACK.  The usage
        //    of offers and answers is further restricted.  For the initial INVITE
        //    transaction, the rules are:
        //
        //       o  The initial offer MUST be in either an INVITE or, if not there,
        //          in the first reliable non-failure message from the UAS back to
        //          the UAC.  In this specification, that is the final 2xx
        //          response.
        //
        //       o  If the initial offer is in an INVITE, the answer MUST be in a
        //          reliable non-failure message from UAS back to UAC which is
        //          correlated to that INVITE.  For this specification, that is
        //          only the final 2xx response to that INVITE.  That same exact
        //          answer MAY also be placed in any provisional responses sent
        //          prior to the answer.  The UAC MUST treat the first session
        //          description it receives as the answer, and MUST ignore any
        //          session descriptions in subsequent responses to the initial
        //          INVITE.
        //
        //       o  If the initial offer is in the first reliable non-failure
        //          message from the UAS back to UAC, the answer MUST be in the
        //          acknowledgement for that message (in this specification, ACK
        //          for a 2xx response).
        //
        //       o  After having sent or received an answer to the first offer, the
        //          UAC MAY generate subsequent offers in requests based on rules
        //          specified for that method, but only if it has received answers
        //          to any previous offers, and has not sent any offers to which it
        //          hasn't gotten an answer.
        //
        //       o  Once the UAS has sent or received an answer to the initial
        //          offer, it MUST NOT generate subsequent offers in any responses
        //          to the initial INVITE.  This means that a UAS based on this
        //          specification alone can never generate subsequent offers until
        //          completion of the initial transaction.
        //
        // https://tools.ietf.org/html/rfc3261#section-13.2.1
        // 5 The Offer/Answer Model and PRACK
        //
        //    RFC 3261 describes guidelines for the sets of messages in which
        //    offers and answers [3] can appear.  Based on those guidelines, this
        //    extension provides additional opportunities for offer/answer
        //    exchanges.
        //    If the INVITE contained an offer, the UAS MAY generate an answer in a
        //    reliable provisional response (assuming these are supported by the
        //    UAC).  That results in the establishment of the session before
        //    completion of the call.  Similarly, if a reliable provisional
        //    response is the first reliable message sent back to the UAC, and the
        //    INVITE did not contain an offer, one MUST appear in that reliable
        //    provisional response.
        //    If the UAC receives a reliable provisional response with an offer
        //    (this would occur if the UAC sent an INVITE without an offer, in
        //    which case the first reliable provisional response will contain the
        //    offer), it MUST generate an answer in the PRACK.  If the UAC receives
        //    a reliable provisional response with an answer, it MAY generate an
        //    additional offer in the PRACK.  If the UAS receives a PRACK with an
        //    offer, it MUST place the answer in the 2xx to the PRACK.
        //    Once an answer has been sent or received, the UA SHOULD establish the
        //    session based on the parameters of the offer and answer, even if the
        //    original INVITE itself has not been responded to.
        //    If the UAS had placed a session description in any reliable
        //    provisional response that is unacknowledged when the INVITE is
        //    accepted, the UAS MUST delay sending the 2xx until the provisional
        //    response is acknowledged.  Otherwise, the reliability of the 1xx
        //    cannot be guaranteed, and reliability is needed for proper operation
        //    of the offer/answer exchange.
        //    All user agents that support this extension MUST support all
        //    offer/answer exchanges that are possible based on the rules in
        //    Section 13.2 of RFC 3261, based on the existence of INVITE and PRACK
        //    as requests, and 2xx and reliable 1xx as non-failure reliable
        //    responses.
        //
        // https://tools.ietf.org/html/rfc3262#section-5
        ////
        // The Offer/Answer Model Implementation
        //
        // The offer/answer model is straight forward, but one MUST READ the specifications...
        //
        // 13.2.1 Creating the Initial INVITE (paragraph 8 in particular)
        // https://tools.ietf.org/html/rfc3261#section-13.2.1
        //
        // 5 The Offer/Answer Model and PRACK
        // https://tools.ietf.org/html/rfc3262#section-5
        //
        // Session Initiation Protocol (SIP) Usage of the Offer/Answer Model
        // https://tools.ietf.org/html/rfc6337
        ////
        ////
        // TODO: The Offer/Answer Model Implementation
        //
        // Currently if `earlyMedia` is enabled and the INVITE request forks,
        // the session is terminated if the early dialog does not match the
        // confirmed dialog. This restriction make sense in a WebRTC environment,
        // but there are other enviroments where this restriction does not hold.
        //
        // So while we currently cannot make the offer in INVITE+forking+webrtc
        // case work, we propose doing the following...
        //
        // OPTION 1
        // - add a `earlyMediaForking` option and
        // - require SDH.setDescription() to be callable multiple times.
        //
        // OPTION 2
        // 1) modify SDH Factory to provide an initial offer without giving us the SDH, and then...
        // 2) stick that offer in the initial INVITE, and when 183 with initial answer is received...
        // 3) ask SDH Factory if it supports "earlyRemoteAnswer"
        //   a) if true, ask SDH Factory to createSDH(localOffer).then((sdh) => sdh.setDescription(remoteAnswer)
        //   b) if false, defer getting a SDH until 2xx response is received
        //
        // Our supplied WebRTC SDH will default to behavior 3b which works in forking environment (without)
        // early media if initial offer is in the INVITE). We will, however, provide an "inviteWillNotFork"
        // option which if set to "true" will have our supplied WebRTC SDH behave in the 3a manner.
        // That will result in
        //  - early media working with initial offer in the INVITE, and...
        //  - if the INVITE forks, the session terminating with an ERROR that reads like
        //    "You set 'inviteWillNotFork' to true but the INVITE forked. You can't eat your cake, and have it too."
        //  - furthermore, we accept that users will report that error to us as "bug" regardless
        //
        // So, SDH Factory is going to end up with a new interface along the lines of...
        //
        // interface SessionDescriptionHandlerFactory {
        //   makeLocalOffer(): Promise<ContentTypeAndBody>;
        //   makeSessionDescriptionHandler(
        //     initialOffer: ContentTypeAndBody, offerType: "local" | "remote"
        //   ): Promise<SessionDescriptionHandler>;
        //   supportsEarlyRemoteAnswer: boolean;
        //   supportsContentType(contentType: string): boolean;
        //   getDescription(description: ContentTypeAndBody): Promise<ContentTypeAndBody>
        //   setDescription(description: ContentTypeAndBody): Promise<void>
        // }
        ////
        // Send the INVITE request.
        this.outgoingInviteRequest = this.userAgent.userAgentCore.invite(this.request, {
            onAccept: (inviteResponse) => {
                // Our transaction layer is "non-standard" in that it will only
                // pass us a 2xx response once per branch, so there is no need to
                // worry about dealing with 2xx retransmissions. However, we can
                // and do still get 2xx responses for multiple branches (when an
                // INVITE is forked) which may create multiple confirmed dialogs.
                // Herein we are acking and sending a bye to any confirmed dialogs
                // which arrive beyond the first one. This is the desired behavior
                // for most applications (but certainly not all).
                // If we already received a confirmed dialog, ack & bye this additional confirmed session.
                if (this.dialog) {
                    this.logger.log("Additional confirmed dialog, sending ACK and BYE");
                    this.ackAndBye(inviteResponse);
                    // We do NOT transition state in this case (this is an "extra" dialog)
                    return;
                }
                // If the user requested cancellation, ack & bye this session.
                if (this.isCanceled) {
                    this.logger.log("Canceled session accepted, sending ACK and BYE");
                    this.ackAndBye(inviteResponse);
                    this.stateTransition(SessionState.Terminated);
                    return;
                }
                this.notifyReferer(inviteResponse);
                this.onAccept(inviteResponse)
                    .then(() => {
                    this.disposeEarlyMedia();
                })
                    .catch((error) => {
                    this.disposeEarlyMedia();
                })
                    .then(() => {
                    if (options.requestDelegate && options.requestDelegate.onAccept) {
                        options.requestDelegate.onAccept(inviteResponse);
                    }
                });
            },
            onProgress: (inviteResponse) => {
                // If the user requested cancellation, ignore response.
                if (this.isCanceled) {
                    return;
                }
                this.notifyReferer(inviteResponse);
                this.onProgress(inviteResponse)
                    .catch((error) => {
                    this.disposeEarlyMedia();
                })
                    .then(() => {
                    if (options.requestDelegate && options.requestDelegate.onProgress) {
                        options.requestDelegate.onProgress(inviteResponse);
                    }
                });
            },
            onRedirect: (inviteResponse) => {
                this.notifyReferer(inviteResponse);
                this.onRedirect(inviteResponse);
                if (options.requestDelegate && options.requestDelegate.onRedirect) {
                    options.requestDelegate.onRedirect(inviteResponse);
                }
            },
            onReject: (inviteResponse) => {
                this.notifyReferer(inviteResponse);
                this.onReject(inviteResponse);
                if (options.requestDelegate && options.requestDelegate.onReject) {
                    options.requestDelegate.onReject(inviteResponse);
                }
            },
            onTrying: (inviteResponse) => {
                this.notifyReferer(inviteResponse);
                this.onTrying(inviteResponse);
                if (options.requestDelegate && options.requestDelegate.onTrying) {
                    options.requestDelegate.onTrying(inviteResponse);
                }
            }
        });
        return this.outgoingInviteRequest;
    }
    disposeEarlyMedia() {
        this.earlyMediaSessionDescriptionHandlers.forEach((sessionDescriptionHandler) => {
            sessionDescriptionHandler.close();
        });
        this.earlyMediaSessionDescriptionHandlers.clear();
    }
    notifyReferer(response) {
        if (!this.referred) {
            return;
        }
        if (!(this.referred instanceof Session)) {
            throw new Error("Referred session not instance of session");
        }
        if (!this.referred.dialog) {
            return;
        }
        if (!response.message.statusCode) {
            throw new Error("Status code undefined.");
        }
        if (!response.message.reasonPhrase) {
            throw new Error("Reason phrase undefined.");
        }
        const statusCode = response.message.statusCode;
        const reasonPhrase = response.message.reasonPhrase;
        const body = `SIP/2.0 ${statusCode} ${reasonPhrase}`.trim();
        const outgoingNotifyRequest = this.referred.dialog.notify(undefined, {
            extraHeaders: [
                "Event: refer",
                "Subscription-State: terminated",
            ],
            body: {
                contentDisposition: "render",
                contentType: "message/sipfrag",
                content: body
            }
        });
        // The implicit subscription created by a REFER is the same as a
        // subscription created with a SUBSCRIBE request.  The agent issuing the
        // REFER can terminate this subscription prematurely by unsubscribing
        // using the mechanisms described in [2].  Terminating a subscription,
        // either by explicitly unsubscribing or rejecting NOTIFY, is not an
        // indication that the referenced request should be withdrawn or
        // abandoned.
        // https://tools.ietf.org/html/rfc3515#section-2.4.4
        // FIXME: TODO: This should be done in a subscribe dialog to satisfy the above.
        // If the notify is rejected, stop sending NOTIFY requests.
        outgoingNotifyRequest.delegate = {
            onReject: () => {
                this.referred = undefined;
            }
        };
    }
    /**
     * Handle final response to initial INVITE.
     * @param inviteResponse - 2xx response.
     */
    onAccept(inviteResponse) {
        this.logger.log("Inviter.onAccept");
        // validate state
        if (this.state !== SessionState.Establishing) {
            this.logger.error(`Accept received while in state ${this.state}, dropping response`);
            return Promise.reject(new Error(`Invalid session state ${this.state}`));
        }
        const response = inviteResponse.message;
        const session = inviteResponse.session;
        // Ported behavior.
        if (response.hasHeader("P-Asserted-Identity")) {
            this.assertedIdentity = Grammar.nameAddrHeaderParse(response.getHeader("P-Asserted-Identity"));
        }
        // We have a confirmed dialog.
        this.dialog = session;
        this.dialog.delegate = {
            onAck: (ackRequest) => this.onAckRequest(ackRequest),
            onBye: (byeRequest) => this.onByeRequest(byeRequest),
            onInfo: (infoRequest) => this.onInfoRequest(infoRequest),
            onInvite: (inviteRequest) => this.onInviteRequest(inviteRequest),
            onNotify: (notifyRequest) => this.onNotifyRequest(notifyRequest),
            onPrack: (prackRequest) => this.onPrackRequest(prackRequest),
            onRefer: (referRequest) => this.onReferRequest(referRequest)
        };
        const sdhOptions = this.sessionDescriptionHandlerOptions;
        const sdhModifiers = this.sessionDescriptionHandlerModifiers;
        switch (session.signalingState) {
            case SignalingState.Initial:
                // INVITE without offer, so MUST have offer at this point, so invalid state.
                this.logger.error("Received 2xx response to INVITE without a session description");
                this.ackAndBye(inviteResponse, 400, "Missing session description");
                this.stateTransition(SessionState.Terminated);
                return Promise.reject(new Error("Bad Media Description"));
            case SignalingState.HaveLocalOffer:
                // INVITE with offer, so MUST have answer at this point, so invalid state.
                this.logger.error("Received 2xx response to INVITE without a session description");
                this.ackAndBye(inviteResponse, 400, "Missing session description");
                this.stateTransition(SessionState.Terminated);
                return Promise.reject(new Error("Bad Media Description"));
            case SignalingState.HaveRemoteOffer: {
                // INVITE without offer, received offer in 2xx, so MUST send answer in ACK.
                if (!this.dialog.offer) {
                    throw new Error(`Session offer undefined in signaling state ${this.dialog.signalingState}.`);
                }
                const options = {
                    sessionDescriptionHandlerOptions: sdhOptions,
                    sessionDescriptionHandlerModifiers: sdhModifiers
                };
                return this.setOfferAndGetAnswer(this.dialog.offer, options)
                    .then((body) => {
                    this.status = _SessionStatus.STATUS_CONFIRMED;
                    const ackRequest = inviteResponse.ack({ body });
                    this.stateTransition(SessionState.Established);
                })
                    .catch((error) => {
                    this.ackAndBye(inviteResponse, 488, "Invalid session description");
                    this.stateTransition(SessionState.Terminated);
                    throw error;
                });
            }
            case SignalingState.Stable: {
                // If INVITE without offer and we have already completed the initial exchange.
                if (this.earlyMediaSessionDescriptionHandlers.size > 0) {
                    const sdh = this.earlyMediaSessionDescriptionHandlers.get(session.id);
                    if (!sdh) {
                        throw new Error("Session description handler undefined.");
                    }
                    this.setSessionDescriptionHandler(sdh);
                    this.earlyMediaSessionDescriptionHandlers.delete(session.id);
                    this.status = _SessionStatus.STATUS_CONFIRMED;
                    const ackRequest = inviteResponse.ack();
                    this.stateTransition(SessionState.Established);
                    return Promise.resolve();
                }
                // If INVITE with offer and we used an "early" answer in a provisional response for media
                if (this.earlyMediaDialog) {
                    // If early media dialog doesn't match confirmed dialog, we must unfortunately fail.
                    // This limitation stems from how WebRTC currently implements its offer/answer model.
                    // There are details elsewhere, but in short a WebRTC offer cannot be forked.
                    if (this.earlyMediaDialog !== session) {
                        if (this.earlyMedia) {
                            const message = "You have set the 'earlyMedia' option to 'true' which requires that your INVITE requests " +
                                "do not fork and yet this INVITE request did in fact fork. Consequentially and not surprisingly " +
                                "the end point which accepted the INVITE (confirmed dialog) does not match the end point with " +
                                "which early media has been setup (early dialog) and thus this session is unable to proceed. " +
                                "In accordance with the SIP specifications, the SIP servers your end point is connected to " +
                                "determine if an INVITE forks and the forking behaviour of those servers cannot be controlled " +
                                "by this library. If you wish to use early media with this library you must configure those " +
                                "servers accordingly. Alternatively you may set the 'earlyMedia' to 'false' which will allow " +
                                "this library to function with any INVITE requests which do fork.";
                            this.logger.error(message);
                        }
                        const error = new Error("Early media dialog does not equal confirmed dialog, terminating session");
                        this.logger.error(error.message);
                        this.ackAndBye(inviteResponse, 488, "Not Acceptable Here");
                        this.stateTransition(SessionState.Terminated);
                        return Promise.reject(error);
                    }
                    // Otherwise we are good to go.
                    this.status = _SessionStatus.STATUS_CONFIRMED;
                    const ackRequest = inviteResponse.ack();
                    this.stateTransition(SessionState.Established);
                    return Promise.resolve();
                }
                // If INVITE with offer and we have been waiting till now to apply the answer.
                const answer = session.answer;
                if (!answer) {
                    throw new Error("Answer is undefined.");
                }
                const options = {
                    sessionDescriptionHandlerOptions: sdhOptions,
                    sessionDescriptionHandlerModifiers: sdhModifiers
                };
                return this.setAnswer(answer, options)
                    .then(() => {
                    // This session has completed an initial offer/answer exchange...
                    let ackOptions;
                    if (this.renderbody && this.rendertype) {
                        ackOptions = {
                            body: { contentDisposition: "render", contentType: this.rendertype, content: this.renderbody }
                        };
                    }
                    this.status = _SessionStatus.STATUS_CONFIRMED;
                    const ackRequest = inviteResponse.ack(ackOptions);
                    this.stateTransition(SessionState.Established);
                })
                    .catch((error) => {
                    this.logger.error(error.message);
                    this.ackAndBye(inviteResponse, 488, "Not Acceptable Here");
                    this.stateTransition(SessionState.Terminated);
                    throw error;
                });
            }
            case SignalingState.Closed:
                // Dialog has terminated.
                return Promise.reject(new Error("Terminated."));
            default:
                throw new Error("Unknown session signaling state.");
        }
    }
    /**
     * Handle provisional response to initial INVITE.
     * @param inviteResponse - 1xx response.
     */
    onProgress(inviteResponse) {
        this.logger.log("Inviter.onProgress");
        // validate state
        if (this.state !== SessionState.Establishing) {
            this.logger.error(`Progress received while in state ${this.state}, dropping response`);
            return Promise.reject(new Error(`Invalid session state ${this.state}`));
        }
        if (!this.outgoingInviteRequest) {
            throw new Error("Outgoing INVITE request undefined.");
        }
        const response = inviteResponse.message;
        const session = inviteResponse.session;
        // Ported - Set status.
        this.status = _SessionStatus.STATUS_1XX_RECEIVED;
        // Ported - Set assertedIdentity.
        if (response.hasHeader("P-Asserted-Identity")) {
            this.assertedIdentity = Grammar.nameAddrHeaderParse(response.getHeader("P-Asserted-Identity"));
        }
        // If a provisional response is received for an initial request, and
        // that response contains a Require header field containing the option
        // tag 100rel, the response is to be sent reliably.  If the response is
        // a 100 (Trying) (as opposed to 101 to 199), this option tag MUST be
        // ignored, and the procedures below MUST NOT be used.
        // https://tools.ietf.org/html/rfc3262#section-4
        const requireHeader = response.getHeader("require");
        const rseqHeader = response.getHeader("rseq");
        const rseq = requireHeader && requireHeader.includes("100rel") && rseqHeader ? Number(rseqHeader) : undefined;
        const responseReliable = !!rseq;
        const extraHeaders = [];
        if (responseReliable) {
            extraHeaders.push("RAck: " + response.getHeader("rseq") + " " + response.getHeader("cseq"));
        }
        const sdhOptions = this.sessionDescriptionHandlerOptions;
        const sdhModifiers = this.sessionDescriptionHandlerModifiers;
        switch (session.signalingState) {
            case SignalingState.Initial:
                // INVITE without offer and session still has no offer (and no answer).
                if (responseReliable) {
                    // Similarly, if a reliable provisional
                    // response is the first reliable message sent back to the UAC, and the
                    // INVITE did not contain an offer, one MUST appear in that reliable
                    // provisional response.
                    // https://tools.ietf.org/html/rfc3262#section-5
                    this.logger.warn("First reliable provisional response received MUST contain an offer when INVITE does not contain an offer.");
                    // FIXME: Known popular UA's currently end up here...
                    inviteResponse.prack({ extraHeaders });
                }
                return Promise.resolve();
            case SignalingState.HaveLocalOffer:
                // INVITE with offer and session only has that initial local offer.
                if (responseReliable) {
                    inviteResponse.prack({ extraHeaders });
                }
                return Promise.resolve();
            case SignalingState.HaveRemoteOffer:
                if (!responseReliable) {
                    // The initial offer MUST be in either an INVITE or, if not there,
                    // in the first reliable non-failure message from the UAS back to
                    // the UAC.
                    // https://tools.ietf.org/html/rfc3261#section-13.2.1
                    // According to Section 13.2.1 of [RFC3261], 'The first reliable
                    // non-failure message' must have an offer if there is no offer in the
                    // INVITE request.  This means that the User Agent (UA) that receives
                    // the INVITE request without an offer must include an offer in the
                    // first reliable response with 100rel extension.  If no reliable
                    // provisional response has been sent, the User Agent Server (UAS) must
                    // include an offer when sending 2xx response.
                    // https://tools.ietf.org/html/rfc6337#section-2.2
                    this.logger.warn("Non-reliable provisional response MUST NOT contain an initial offer, discarding response.");
                    return Promise.resolve();
                }
                // If the initial offer is in the first reliable non-failure
                // message from the UAS back to UAC, the answer MUST be in the
                // acknowledgement for that message
                const sdh = this.sessionDescriptionHandlerFactory(this, this.userAgent.configuration.sessionDescriptionHandlerFactoryOptions || {});
                this.earlyMediaSessionDescriptionHandlers.set(session.id, sdh);
                return sdh
                    .setDescription(response.body, sdhOptions, sdhModifiers)
                    .then(() => sdh.getDescription(sdhOptions, sdhModifiers))
                    .then((description) => {
                    const body = {
                        contentDisposition: "session", contentType: description.contentType, content: description.body
                    };
                    inviteResponse.prack({ extraHeaders, body });
                })
                    .catch((error) => {
                    if (this.status === _SessionStatus.STATUS_TERMINATED) {
                        throw error;
                    }
                    this.stateTransition(SessionState.Terminated);
                    throw error;
                });
            case SignalingState.Stable:
                // This session has completed an initial offer/answer exchange, so...
                // - INVITE with SDP and this provisional response MAY be reliable
                // - INVITE without SDP and this provisional response MAY be reliable
                if (responseReliable) {
                    inviteResponse.prack({ extraHeaders });
                }
                if (this.earlyMedia && !this.earlyMediaDialog) {
                    this.earlyMediaDialog = session;
                    const answer = session.answer;
                    if (!answer) {
                        throw new Error("Answer is undefined.");
                    }
                    const options = {
                        sessionDescriptionHandlerOptions: sdhOptions,
                        sessionDescriptionHandlerModifiers: sdhModifiers
                    };
                    return this.setAnswer(answer, options)
                        .catch((error) => {
                        if (this.status === _SessionStatus.STATUS_TERMINATED) {
                            throw error;
                        }
                        this.stateTransition(SessionState.Terminated);
                        throw error;
                    });
                }
                return Promise.resolve();
            case SignalingState.Closed:
                // Dialog has terminated.
                return Promise.reject(new Error("Terminated."));
            default:
                throw new Error("Unknown session signaling state.");
        }
    }
    /**
     * Handle final response to initial INVITE.
     * @param inviteResponse - 3xx response.
     */
    onRedirect(inviteResponse) {
        this.logger.log("Inviter.onRedirect");
        // validate state
        if (this.state !== SessionState.Establishing &&
            this.state !== SessionState.Terminating) {
            this.logger.error(`Redirect received while in state ${this.state}, dropping response`);
            return;
        }
        // transition state
        this.stateTransition(SessionState.Terminated);
    }
    /**
     * Handle final response to initial INVITE.
     * @param inviteResponse - 4xx, 5xx, or 6xx response.
     */
    onReject(inviteResponse) {
        this.logger.log("Inviter.onReject");
        // validate state
        if (this.state !== SessionState.Establishing &&
            this.state !== SessionState.Terminating) {
            this.logger.error(`Reject received while in state ${this.state}, dropping response`);
            return;
        }
        // transition state
        this.stateTransition(SessionState.Terminated);
    }
    /**
     * Handle final response to initial INVITE.
     * @param inviteResponse - 100 response.
     */
    onTrying(inviteResponse) {
        this.logger.log("Inviter.onTrying");
        // validate state
        if (this.state !== SessionState.Establishing) {
            this.logger.error(`Trying received while in state ${this.state}, dropping response`);
            return;
        }
    }
}
