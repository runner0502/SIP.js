import { Exception } from "../../core/index";
/**
 * An exception indicating an outstanding prior request prevented execution.
 * @public
 */
export class RequestPendingError extends Exception {
    /** @internal */
    constructor(message) {
        super(message ? message : "Request pending.");
    }
}
