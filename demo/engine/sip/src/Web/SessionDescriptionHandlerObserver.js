import { Session } from "../api/session";
import { TypeStrings } from "../Enums";
/* SessionDescriptionHandlerObserver
 * @class SessionDescriptionHandler Observer Class.
 * @param {SIP.Session} session
 * @param {Object} [options]
 */
export class SessionDescriptionHandlerObserver {
    constructor(session, options) {
        this.type = TypeStrings.SessionDescriptionHandlerObserver;
        this.session = session;
        this.options = options;
    }
    trackAdded() {
        if (this.session instanceof Session) {
            return;
        }
        this.session.emit("trackAdded");
    }
    directionChanged() {
        if (this.session instanceof Session) {
            return;
        }
        this.session.emit("directionChanged");
    }
}
