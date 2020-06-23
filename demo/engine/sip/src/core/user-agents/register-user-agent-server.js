import { NonInviteServerTransaction } from "../transactions/index";
import { UserAgentServer } from "./user-agent-server";
/**
 * REGISTER UAS.
 * @public
 */
export class RegisterUserAgentServer extends UserAgentServer {
    constructor(core, message, delegate) {
        super(NonInviteServerTransaction, core, message, delegate);
        this.core = core;
    }
}
