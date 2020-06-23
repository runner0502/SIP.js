import { SessionDialog } from "../dialogs/index";
import { C, OutgoingReferRequest, OutgoingRequestDelegate, RequestOptions } from "../messages/index";
import { NonInviteClientTransaction } from "../transactions/index";
import { UserAgentClient } from "./user-agent-client";

/**
 * REFER UAC.
 * @public
 */
export class ReferUserAgentClient extends UserAgentClient implements OutgoingReferRequest {
  constructor(
    dialog: SessionDialog,
    delegate?: OutgoingRequestDelegate,
    options?: RequestOptions
  ) {
    const message = dialog.createOutgoingRequestMessage(C.REFER, options);
    super(NonInviteClientTransaction, dialog.userAgentCore, message, delegate);
  }
}
