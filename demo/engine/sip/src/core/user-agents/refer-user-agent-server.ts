import { SessionDialog } from "../dialogs/index";
import { IncomingReferRequest, IncomingRequestDelegate, IncomingRequestMessage } from "../messages/index";
import { NonInviteServerTransaction } from "../transactions/index";
import { UserAgentCore } from "../user-agent-core/index";
import { UserAgentServer } from "./user-agent-server";

/**
 * REFER UAS.
 * @public
 */
export class ReferUserAgentServer extends UserAgentServer implements IncomingReferRequest {
  /**
   * REFER UAS constructor.
   * @param dialogOrCore - Dialog for in dialog REFER, UserAgentCore for out of dialog REFER.
   * @param message - Incoming REFER request message.
   */
  constructor(
    dialogOrCore: SessionDialog | UserAgentCore,
    message: IncomingRequestMessage,
    delegate?: IncomingRequestDelegate
  ) {
    const userAgentCore =
      instanceOfSessionDialog(dialogOrCore) ?
        dialogOrCore.userAgentCore :
        dialogOrCore;
    super(NonInviteServerTransaction, userAgentCore, message, delegate);
  }
}

function instanceOfSessionDialog(object: any): object is SessionDialog {
  return object.userAgentCore !== undefined;
}
