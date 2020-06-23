import { NonInviteServerTransaction } from "../transactions/index";
import { UserAgentServer } from "./user-agent-server";
/**
 * NOTIFY UAS.
 * @public
 */
export class NotifyUserAgentServer extends UserAgentServer {
    /**
     * NOTIFY UAS constructor.
     * @param dialogOrCore - Dialog for in dialog NOTIFY, UserAgentCore for out of dialog NOTIFY (deprecated).
     * @param message - Incoming NOTIFY request message.
     */
    constructor(dialogOrCore, message, delegate) {
        const userAgentCore = instanceOfDialog(dialogOrCore) ?
            dialogOrCore.userAgentCore :
            dialogOrCore;
        super(NonInviteServerTransaction, userAgentCore, message, delegate);
    }
}
function instanceOfDialog(object) {
    return object.userAgentCore !== undefined;
}
