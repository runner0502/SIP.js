import { SessionDialog } from "../dialogs/index";
import { C, OutgoingNotifyRequest, OutgoingRequestDelegate, RequestOptions } from "../messages/index";
import { NonInviteClientTransaction } from "../transactions/index";
import { UserAgentClient } from "./user-agent-client";

/**
 * NOTIFY UAS.
 * @public
 */
export class NotifyUserAgentClient extends UserAgentClient implements OutgoingNotifyRequest {
  constructor(
    dialog: SessionDialog,
    delegate?: OutgoingRequestDelegate,
    options?: RequestOptions
  ) {
    const message = dialog.createOutgoingRequestMessage(C.NOTIFY, options);
    super(NonInviteClientTransaction, dialog.userAgentCore, message, delegate);
  }
}
