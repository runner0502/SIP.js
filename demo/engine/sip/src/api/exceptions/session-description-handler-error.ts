import { Exception } from "../../core/index";

/**
 * An exception indicating a session description handler error occured.
 * @public
 */
export class SessionDescriptionHandlerError extends Exception {
  constructor(message?: string) {
    super(message ? message : "Unspecified session description handler error.");
  }
}
