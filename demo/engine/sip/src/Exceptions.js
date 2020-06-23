import { Exception } from "./core";
import { TypeStrings } from "./Enums";
// tslint:disable:max-classes-per-file
export var Exceptions;
(function (Exceptions) {
    /**
     * Indicates the session description handler has closed.
     * Occurs when getDescription() or setDescription() are called after close() has been called.
     * Occurs when close() is called while getDescription() or setDescription() are in progress.
     */
    class ClosedSessionDescriptionHandlerError extends Exception {
        constructor() {
            super("The session description handler has closed.");
        }
    }
    Exceptions.ClosedSessionDescriptionHandlerError = ClosedSessionDescriptionHandlerError;
    /**
     * Indicates the session terminated before the action completed.
     */
    class TerminatedSessionError extends Exception {
        constructor() {
            super("The session has terminated.");
        }
    }
    Exceptions.TerminatedSessionError = TerminatedSessionError;
    /**
     * Unsupported session description content type.
     */
    class UnsupportedSessionDescriptionContentTypeError extends Exception {
        constructor(message) {
            super(message ? message : "Unsupported session description content type.");
        }
    }
    Exceptions.UnsupportedSessionDescriptionContentTypeError = UnsupportedSessionDescriptionContentTypeError;
})(Exceptions || (Exceptions = {}));
/**
 * DEPRECATED: The original implementation of exceptions in this library attempted to
 * deal with the lack of type checking in JavaScript by adding a "type" attribute
 * to objects and using that to discriminate. On top of that it layered allcoated
 * "code" numbers and constant "name" strings. All of that is unnecessary when using
 * TypeScript, inheriting from Error and properly setting up the prototype chain...
 */
class LegacyException extends Exception {
    constructor(code, name, message) {
        super(message);
        this.code = code;
        this.name = name;
        this.message = message;
    }
}
(function (Exceptions) {
    class ConfigurationError extends LegacyException {
        constructor(parameter, value) {
            super(1, "CONFIGURATION_ERROR", (!value) ? "Missing parameter: " + parameter :
                "Invalid value " + JSON.stringify(value) + " for parameter '" + parameter + "'");
            this.type = TypeStrings.ConfigurationError;
            this.parameter = parameter;
            this.value = value;
        }
    }
    Exceptions.ConfigurationError = ConfigurationError;
    class InvalidStateError extends LegacyException {
        constructor(status) {
            super(2, "INVALID_STATE_ERROR", "Invalid status: " + status);
            this.type = TypeStrings.InvalidStateError;
            this.status = status;
        }
    }
    Exceptions.InvalidStateError = InvalidStateError;
    class NotSupportedError extends LegacyException {
        constructor(message) {
            super(3, "NOT_SUPPORTED_ERROR", message);
            this.type = TypeStrings.NotSupportedError;
        }
    }
    Exceptions.NotSupportedError = NotSupportedError;
    // 4 was GetDescriptionError, which was deprecated and now removed
    class RenegotiationError extends LegacyException {
        constructor(message) {
            super(5, "RENEGOTIATION_ERROR", message);
            this.type = TypeStrings.RenegotiationError;
        }
    }
    Exceptions.RenegotiationError = RenegotiationError;
    class MethodParameterError extends LegacyException {
        constructor(method, parameter, value) {
            super(6, "METHOD_PARAMETER_ERROR", (!value) ?
                "Missing parameter: " + parameter :
                "Invalid value " + JSON.stringify(value) + " for parameter '" + parameter + "'");
            this.type = TypeStrings.MethodParameterError;
            this.method = method;
            this.parameter = parameter;
            this.value = value;
        }
    }
    Exceptions.MethodParameterError = MethodParameterError;
    // 7 was TransportError, which was replaced
    class SessionDescriptionHandlerError extends LegacyException {
        constructor(method, error, message) {
            super(8, "SESSION_DESCRIPTION_HANDLER_ERROR", message || "Error with Session Description Handler");
            this.type = TypeStrings.SessionDescriptionHandlerError;
            this.method = method;
            this.error = error;
        }
    }
    Exceptions.SessionDescriptionHandlerError = SessionDescriptionHandlerError;
})(Exceptions || (Exceptions = {}));
