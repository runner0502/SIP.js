import { IncomingRegisterRequest, IncomingRequestDelegate, IncomingRequestMessage } from "../messages/index";
import { NonInviteServerTransaction } from "../transactions/index";
import { UserAgentCore } from "../user-agent-core/index";
import { UserAgentServer } from "./user-agent-server";

/**
 * REGISTER UAS.
 * @public
 */
export class RegisterUserAgentServer extends UserAgentServer implements IncomingRegisterRequest {
  constructor(
    protected core: UserAgentCore,
    message: IncomingRequestMessage,
    delegate?: IncomingRequestDelegate
  ) {
    super(NonInviteServerTransaction, core, message, delegate);
  }
}
