import { SessionDialog } from "../dialogs/index";
import { C, OutgoingPrackRequest, OutgoingRequestDelegate, RequestOptions } from "../messages/index";
import { NonInviteClientTransaction } from "../transactions/index";
import { UserAgentClient } from "./user-agent-client";

/**
 * PRACK UAC.
 * @public
 */
export class PrackUserAgentClient extends UserAgentClient implements OutgoingPrackRequest {
  constructor(
    dialog: SessionDialog,
    delegate?: OutgoingRequestDelegate,
    options?: RequestOptions
  ) {
    const message = dialog.createOutgoingRequestMessage(C.PRACK, options);
    super(NonInviteClientTransaction, dialog.userAgentCore, message, delegate);
    dialog.signalingStateTransition(message);
  }
}
