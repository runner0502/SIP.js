import { Exception } from "../../core/index";
/**
 * An exception indicating an unsupported content type prevented execution.
 * @public
 */
export class ContentTypeUnsupportedError extends Exception {
    constructor(message) {
        super(message ? message : "Unsupported content type.");
    }
}
