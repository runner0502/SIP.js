import { OutgoingMessageRequest, OutgoingRequestDelegate, OutgoingRequestMessage } from "../messages/index";
import { NonInviteClientTransaction } from "../transactions/index";
import { UserAgentCore } from "../user-agent-core";
import { UserAgentClient } from "./user-agent-client";

/**
 * MESSAGE UAS.
 * @public
 */
export class MessageUserAgentClient extends UserAgentClient implements OutgoingMessageRequest {
  constructor(
    core: UserAgentCore,
    message: OutgoingRequestMessage,
    delegate?: OutgoingRequestDelegate
  ) {
    super(NonInviteClientTransaction, core, message, delegate);
  }
}
