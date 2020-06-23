import { SessionDialog } from "../dialogs/index";
import { C, OutgoingInfoRequest, OutgoingRequestDelegate, RequestOptions } from "../messages/index";
import { NonInviteClientTransaction } from "../transactions/index";
import { UserAgentClient } from "./user-agent-client";

/**
 * INFO UAC.
 * @public
 */
export class InfoUserAgentClient extends UserAgentClient implements OutgoingInfoRequest {
  constructor(
    dialog: SessionDialog,
    delegate?: OutgoingRequestDelegate,
    options?: RequestOptions
  ) {
    const message = dialog.createOutgoingRequestMessage(C.INFO, options);
    super(NonInviteClientTransaction, dialog.userAgentCore, message, delegate);
  }
}
