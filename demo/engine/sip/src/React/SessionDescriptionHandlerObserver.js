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
        this.session.emit("trackAdded");
    }
    directionChanged() {
        this.session.emit("directionChanged");
    }
}
