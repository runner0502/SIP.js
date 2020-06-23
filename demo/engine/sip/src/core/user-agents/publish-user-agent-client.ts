import { OutgoingPublishRequest, OutgoingRequestDelegate, OutgoingRequestMessage } from "../messages/index";
import { NonInviteClientTransaction } from "../transactions/index";
import { UserAgentCore } from "../user-agent-core/index";
import { UserAgentClient } from "./user-agent-client";

/**
 * PUBLISH UAC.
 * @public
 */
export class PublishUserAgentClient extends UserAgentClient implements OutgoingPublishRequest {
  constructor(
    core: UserAgentCore,
    message: OutgoingRequestMessage,
    delegate?: OutgoingRequestDelegate
  ) {
    super(NonInviteClientTransaction, core, message, delegate);
  }
}
