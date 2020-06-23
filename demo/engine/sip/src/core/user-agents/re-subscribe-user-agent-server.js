import { NonInviteServerTransaction } from "../transactions/index";
import { UserAgentServer } from "./user-agent-server";
/**
 * Re-SUBSCRIBE UAS.
 * @public
 */
export class ReSubscribeUserAgentServer extends UserAgentServer {
    constructor(dialog, message, delegate) {
        super(NonInviteServerTransaction, dialog.userAgentCore, message, delegate);
    }
}
