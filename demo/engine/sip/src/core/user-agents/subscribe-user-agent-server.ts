import { IncomingRequestDelegate, IncomingRequestMessage, IncomingSubscribeRequest } from "../messages/index";
import { NonInviteServerTransaction } from "../transactions/index";
import { UserAgentCore } from "../user-agent-core/index";
import { UserAgentServer } from "./user-agent-server";

/**
 * SUBSCRIBE UAS.
 * @public
 */
export class SubscribeUserAgentServer extends UserAgentServer implements IncomingSubscribeRequest {
  constructor(
    protected core: UserAgentCore,
    message: IncomingRequestMessage,
    delegate?: IncomingRequestDelegate
  ) {
    super(NonInviteServerTransaction, core, message, delegate);
  }
}
