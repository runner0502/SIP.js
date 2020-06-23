import { OutgoingCancelRequest, OutgoingRequestDelegate, OutgoingRequestMessage } from "../messages/index";
import { NonInviteClientTransaction } from "../transactions/index";
import { UserAgentCore } from "../user-agent-core";
import { UserAgentClient } from "./user-agent-client";

/**
 * CANCEL UAC.
 * @public
 */
export class CancelUserAgentClient extends UserAgentClient implements OutgoingCancelRequest {
  constructor(
    core: UserAgentCore,
    message: OutgoingRequestMessage,
    delegate?: OutgoingRequestDelegate
  ) {
    super(NonInviteClientTransaction, core, message, delegate);
  }
}
