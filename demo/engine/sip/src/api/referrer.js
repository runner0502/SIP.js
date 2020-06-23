import { URI } from "../core/index";
import { SessionState } from "./session-state";
/**
 * A referrer sends a {@link Referral} (outgoing REFER).
 * @remarks
 * Sends an outgoing in dialog REFER request.
 * @public
 */
export class Referrer {
    /**
     * Constructs a new instance of the `Referrer` class.
     * @param session - The session the REFER will be sent from. See {@link Session} for details.
     * @param referTo - The referral target. If a `Session`, a REFER w/Replaces is sent.
     * @param options - An options bucket. See {@link ReferrerOptions} for details.
     */
    constructor(session, referTo, options) {
        this._session = session;
        this._referTo = referTo;
    }
    /** The referrer session. */
    get session() {
        return this._session;
    }
    /**
     * Sends the REFER request.
     * @param options - An options bucket.
     */
    refer(options = {}) {
        // guard session state
        if (this.session.state !== SessionState.Established) {
            const message = "Referrer.refer() may only be called if established session.";
            this.session.logger.error(message);
            return Promise.reject(new Error(`Invalid session state ${this.session.state}`));
        }
        const requestDelegate = options.requestDelegate;
        const requestOptions = options.requestOptions || {};
        const extraHeaders = this.extraHeaders(this.referToString(this._referTo));
        requestOptions.extraHeaders = requestOptions.extraHeaders || [];
        requestOptions.extraHeaders = requestOptions.extraHeaders.concat(extraHeaders);
        return this.session.refer(this, requestDelegate, requestOptions);
    }
    extraHeaders(referTo) {
        const extraHeaders = [];
        extraHeaders.push("Referred-By: <" + this._session.userAgent.configuration.uri + ">");
        extraHeaders.push("Contact: " + this._session.contact);
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
        extraHeaders.push("Refer-To: " + referTo);
        return extraHeaders;
    }
    referToString(target) {
        let referTo;
        if (target instanceof URI) {
            // REFER without Replaces (Blind Transfer)
            referTo = target.toString();
        }
        else {
            // REFER with Replaces (Attended Transfer)
            if (!target.dialog) {
                throw new Error("Dialog undefined.");
            }
            const displayName = target.remoteIdentity.friendlyName;
            const remoteTarget = target.dialog.remoteTarget.toString();
            const callId = target.dialog.callId;
            const remoteTag = target.dialog.remoteTag;
            const localTag = target.dialog.localTag;
            const replaces = encodeURIComponent(`${callId};to-tag=${remoteTag};from-tag=${localTag}`);
            referTo = `"${displayName}" <${remoteTarget}?Replaces=${replaces}>`;
        }
        return referTo;
    }
}
