import { Invitation } from "./invitation";
import { SessionState } from "./session-state";
/**
 * A byer ends a {@link Session} (outgoing BYE).
 * @remarks
 * Sends an outgoing in dialog BYE request.
 * @public
 */
export class Byer {
    /**
     * Constructs a new instance of the `Byer` class.
     * @param session - The session the BYE will be sent from. See {@link Session} for details.
     * @param options - An options bucket. See {@link ByerOptions} for details.
     */
    constructor(session, options) {
        this._session = session;
    }
    /** The byer session. */
    get session() {
        return this._session;
    }
    /**
     * Sends the BYE request.
     * @param options - {@link ByerByeOptions} options bucket.
     */
    bye(options = {}) {
        // guard session state
        if (this.session.state !== SessionState.Established &&
            this.session.state !== SessionState.Terminating) {
            let message = "Byer.bye() may only be called if established session.";
            if (this.session.state === SessionState.Terminated) {
                message += " However this session is already terminated.";
            }
            else {
                if (this.session instanceof Invitation) {
                    message += " However Invitation.accept() has not yet been called.";
                    message += " Perhaps you should have called Invitation.reject()?";
                }
                else {
                    message += " However a dialog does not yet exist.";
                    message += " Perhaps you should have called Inviter.cancel()?";
                }
            }
            this.session.logger.error(message);
            return Promise.reject(new Error(`Invalid session state ${this.session.state}`));
        }
        return this.session._bye(options.requestDelegate, options.requestOptions);
    }
}
