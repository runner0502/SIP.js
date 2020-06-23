import { NonInviteServerTransaction, } from "../transactions/index";
import { UserAgentServer } from "./user-agent-server";
/**
 * INFO UAS.
 * @public
 */
export class InfoUserAgentServer extends UserAgentServer {
    constructor(dialog, message, delegate) {
        super(NonInviteServerTransaction, dialog.userAgentCore, message, delegate);
    }
}
