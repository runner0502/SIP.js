import { Exception } from "../../core/index";

/**
 * An exception indicating the session terminated before the action completed.
 * @public
 */
export class SessionTerminatedError extends Exception {
  constructor() {
    super("The session has terminated.");
  }
}
