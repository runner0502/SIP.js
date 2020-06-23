import { Dialog } from "../dialogs/index";
import { IncomingRequestDelegate, IncomingRequestMessage, IncomingSubscribeRequest } from "../messages/index";
import { NonInviteServerTransaction } from "../transactions/index";
import { UserAgentServer } from "./user-agent-server";

/**
 * Re-SUBSCRIBE UAS.
 * @public
 */
export class ReSubscribeUserAgentServer extends UserAgentServer implements IncomingSubscribeRequest {
    constructor(
    dialog: Dialog,
    message: IncomingRequestMessage,
    delegate?: IncomingRequestDelegate
  ) {
    super(NonInviteServerTransaction, dialog.userAgentCore, message, delegate);
  }
}
