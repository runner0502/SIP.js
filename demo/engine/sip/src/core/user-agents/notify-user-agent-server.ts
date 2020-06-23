import { Dialog } from "../dialogs/index";
import { IncomingNotifyRequest, IncomingRequestDelegate, IncomingRequestMessage } from "../messages/index";
import { NonInviteServerTransaction } from "../transactions/index";
import { UserAgentCore } from "../user-agent-core/index";
import { UserAgentServer } from "./user-agent-server";

/**
 * NOTIFY UAS.
 * @public
 */
export class NotifyUserAgentServer extends UserAgentServer implements IncomingNotifyRequest {
  /**
   * NOTIFY UAS constructor.
   * @param dialogOrCore - Dialog for in dialog NOTIFY, UserAgentCore for out of dialog NOTIFY (deprecated).
   * @param message - Incoming NOTIFY request message.
   */
  constructor(
    dialogOrCore: Dialog | UserAgentCore,
    message: IncomingRequestMessage,
    delegate?: IncomingRequestDelegate
  ) {
    const userAgentCore =
      instanceOfDialog(dialogOrCore) ?
        dialogOrCore.userAgentCore :
        dialogOrCore;
    super(NonInviteServerTransaction, userAgentCore, message, delegate);
  }
}

function instanceOfDialog(object: any): object is Dialog {
  return object.userAgentCore !== undefined;
}
