import { EventEmitter } from "events";
import { C } from "./Constants";
import { fromBodyLegacy, Grammar } from "./core";
import { TypeStrings } from "./Enums";
import { Utils } from "./Utils";
export class ServerContext extends EventEmitter {
    constructor(ua, incomingRequest) {
        super();
        this.incomingRequest = incomingRequest;
        this.data = {};
        ServerContext.initializer(this, ua, incomingRequest);
    }
    // hack to get around our multiple inheritance issues
    static initializer(objectToConstruct, ua, incomingRequest) {
        const request = incomingRequest.message;
        objectToConstruct.type = TypeStrings.ServerContext;
        objectToConstruct.ua = ua;
        objectToConstruct.logger = ua.getLogger("sip.servercontext");
        objectToConstruct.request = request;
        if (request.body) {
            objectToConstruct.body = request.body;
        }
        if (request.hasHeader("Content-Type")) {
            objectToConstruct.contentType = request.getHeader("Content-Type");
        }
        objectToConstruct.method = request.method;
        objectToConstruct.localIdentity = request.to;
        objectToConstruct.remoteIdentity = request.from;
        const hasAssertedIdentity = request.hasHeader("P-Asserted-Identity");
        if (hasAssertedIdentity) {
            const assertedIdentity = request.getHeader("P-Asserted-Identity");
            if (assertedIdentity) {
                objectToConstruct.assertedIdentity = Grammar.nameAddrHeaderParse(assertedIdentity);
            }
        }
    }
    progress(options = {}) {
        options.statusCode = options.statusCode || 180;
        options.minCode = 100;
        options.maxCode = 199;
        options.events = ["progress"];
        return this.reply(options);
    }
    accept(options = {}) {
        options.statusCode = options.statusCode || 200;
        options.minCode = 200;
        options.maxCode = 299;
        options.events = ["accepted"];
        return this.reply(options);
    }
    reject(options = {}) {
        options.statusCode = options.statusCode || 480;
        options.minCode = 300;
        options.maxCode = 699;
        options.events = ["rejected", "failed"];
        return this.reply(options);
    }
    reply(options = {}) {
        const statusCode = options.statusCode || 100;
        const minCode = options.minCode || 100;
        const maxCode = options.maxCode || 699;
        const reasonPhrase = Utils.getReasonPhrase(statusCode, options.reasonPhrase);
        const extraHeaders = options.extraHeaders || [];
        const body = options.body ? fromBodyLegacy(options.body) : undefined;
        const events = options.events || [];
        if (statusCode < minCode || statusCode > maxCode) {
            throw new TypeError("Invalid statusCode: " + statusCode);
        }
        const responseOptions = {
            statusCode,
            reasonPhrase,
            extraHeaders,
            body
        };
        let response;
        const statusCodeString = statusCode.toString();
        switch (true) {
            case /^100$/.test(statusCodeString):
                response = this.incomingRequest.trying(responseOptions).message;
                break;
            case /^1[0-9]{2}$/.test(statusCodeString):
                response = this.incomingRequest.progress(responseOptions).message;
                break;
            case /^2[0-9]{2}$/.test(statusCodeString):
                response = this.incomingRequest.accept(responseOptions).message;
                break;
            case /^3[0-9]{2}$/.test(statusCodeString):
                response = this.incomingRequest.redirect([], responseOptions).message;
                break;
            case /^[4-6][0-9]{2}$/.test(statusCodeString):
                response = this.incomingRequest.reject(responseOptions).message;
                break;
            default:
                throw new Error(`Invalid status code ${statusCode}`);
        }
        events.forEach((event) => {
            this.emit(event, response, reasonPhrase);
        });
        return this;
    }
    onRequestTimeout() {
        this.emit("failed", undefined, C.causes.REQUEST_TIMEOUT);
    }
    onTransportError() {
        this.emit("failed", undefined, C.causes.CONNECTION_ERROR);
    }
}
