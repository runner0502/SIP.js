import { NonInviteClientTransaction } from "../transactions/index";
import { UserAgentClient } from "./user-agent-client";
/**
 * REGISTER UAC.
 * @public
 */
export class RegisterUserAgentClient extends UserAgentClient {
    constructor(core, message, delegate) {
        super(NonInviteClientTransaction, core, message, delegate);
    }
}
