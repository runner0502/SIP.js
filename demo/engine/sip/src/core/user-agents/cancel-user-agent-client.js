import { NonInviteClientTransaction } from "../transactions/index";
import { UserAgentClient } from "./user-agent-client";
/**
 * CANCEL UAC.
 * @public
 */
export class CancelUserAgentClient extends UserAgentClient {
    constructor(core, message, delegate) {
        super(NonInviteClientTransaction, core, message, delegate);
    }
}
