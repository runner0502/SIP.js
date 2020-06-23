import { NonInviteClientTransaction } from "../transactions/index";
import { UserAgentClient } from "./user-agent-client";
/**
 * MESSAGE UAS.
 * @public
 */
export class MessageUserAgentClient extends UserAgentClient {
    constructor(core, message, delegate) {
        super(NonInviteClientTransaction, core, message, delegate);
    }
}
