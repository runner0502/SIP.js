import { SessionDialog } from "../dialogs/index";
import { IncomingInfoRequest, IncomingRequestDelegate, IncomingRequestMessage } from "../messages/index";
import { NonInviteServerTransaction,  } from "../transactions/index";
import { UserAgentServer } from "./user-agent-server";

/**
 * INFO UAS.
 * @public
 */
export class InfoUserAgentServer extends UserAgentServer implements IncomingInfoRequest {
  constructor(
    dialog: SessionDialog,
    message: IncomingRequestMessage,
    delegate?: IncomingRequestDelegate
  ) {
    super(NonInviteServerTransaction, dialog.userAgentCore, message, delegate);
  }
}
