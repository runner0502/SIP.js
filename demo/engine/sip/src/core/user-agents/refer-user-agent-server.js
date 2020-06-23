import { NonInviteServerTransaction } from "../transactions/index";
import { UserAgentServer } from "./user-agent-server";
/**
 * REFER UAS.
 * @public
 */
export class ReferUserAgentServer extends UserAgentServer {
    /**
     * REFER UAS constructor.
     * @param dialogOrCore - Dialog for in dialog REFER, UserAgentCore for out of dialog REFER.
     * @param message - Incoming REFER request message.
     */
    constructor(dialogOrCore, message, delegate) {
        const userAgentCore = instanceOfSessionDialog(dialogOrCore) ?
            dialogOrCore.userAgentCore :
            dialogOrCore;
        super(NonInviteServerTransaction, userAgentCore, message, delegate);
    }
}
function instanceOfSessionDialog(object) {
    return object.userAgentCore !== undefined;
}
