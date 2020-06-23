import { IncomingMessageRequest, IncomingRequestDelegate, IncomingRequestMessage } from "../messages/index";
import { NonInviteServerTransaction } from "../transactions/index";
import { UserAgentCore } from "../user-agent-core/index";
import { UserAgentServer } from "./user-agent-server";

/**
 * MESSAGE UAS.
 * @public
 */
export class MessageUserAgentServer extends UserAgentServer implements IncomingMessageRequest {
  constructor(
    protected core: UserAgentCore,
    message: IncomingRequestMessage,
    delegate?: IncomingRequestDelegate
  ) {
    super(NonInviteServerTransaction, core, message, delegate);
  }
}
