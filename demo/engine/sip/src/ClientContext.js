import { EventEmitter } from "events";
import { C } from "./Constants";
import { Grammar } from "./core";
import { TypeStrings } from "./Enums";
import { Utils } from "./Utils";
export class ClientContext extends EventEmitter {
    constructor(ua, method, target, options) {
        super();
        this.data = {};
        ClientContext.initializer(this, ua, method, target, options);
    }
    static initializer(objToConstruct, ua, method, originalTarget, options) {
        objToConstruct.type = TypeStrings.ClientContext;
        // Validate arguments
        if (originalTarget === undefined) {
            throw new TypeError("Not enough arguments");
        }
        objToConstruct.ua = ua;
        objToConstruct.logger = ua.getLogger("sip.clientcontext");
        objToConstruct.method = method;
        const target = ua.normalizeTarget(originalTarget);
        if (!target) {
            throw new TypeError("Invalid target: " + originalTarget);
        }
        let fromURI = ua.userAgentCore.configuration.aor;
        if (options && options.params && options.params.fromUri) {
            fromURI =
                (typeof options.params.fromUri === "string") ?
                    Grammar.URIParse(options.params.fromUri) :
                    options.params.fromUri;
            if (!fromURI) {
                throw new TypeError("Invalid from URI: " + options.params.fromUri);
            }
        }
        let toURI = target;
        if (options && options.params && options.params.toUri) {
            toURI =
                (typeof options.params.toUri === "string") ?
                    Grammar.URIParse(options.params.toUri) :
                    options.params.toUri;
            if (!toURI) {
                throw new TypeError("Invalid to URI: " + options.params.toUri);
            }
        }
        /* Options
        * - extraHeaders
        * - params
        * - contentType
        * - body
        */
        options = Object.create(options || Object.prototype);
        options = options || {};
        const extraHeaders = (options.extraHeaders || []).slice();
        const params = options.params || {};
        let bodyObj;
        if (options.body) {
            bodyObj = {
                body: options.body,
                contentType: options.contentType ? options.contentType : "application/sdp"
            };
            objToConstruct.body = bodyObj;
        }
        let body;
        if (bodyObj) {
            body = Utils.fromBodyObj(bodyObj);
        }
        // Build the request
        objToConstruct.request = ua.userAgentCore.makeOutgoingRequestMessage(method, target, fromURI, toURI, params, extraHeaders, body);
        /* Set other properties from the request */
        if (objToConstruct.request.from) {
            objToConstruct.localIdentity = objToConstruct.request.from;
        }
        if (objToConstruct.request.to) {
            objToConstruct.remoteIdentity = objToConstruct.request.to;
        }
    }
    send() {
        this.ua.userAgentCore.request(this.request, {
            onAccept: (response) => this.receiveResponse(response.message),
            onProgress: (response) => this.receiveResponse(response.message),
            onRedirect: (response) => this.receiveResponse(response.message),
            onReject: (response) => this.receiveResponse(response.message),
            onTrying: (response) => this.receiveResponse(response.message)
        });
        return this;
    }
    receiveResponse(response) {
        const statusCode = response.statusCode || 0;
        const cause = Utils.getReasonPhrase(statusCode);
        switch (true) {
            case /^1[0-9]{2}$/.test(statusCode.toString()):
                this.emit("progress", response, cause);
                break;
            case /^2[0-9]{2}$/.test(statusCode.toString()):
                if (this.ua.applicants[this.toString()]) {
                    delete this.ua.applicants[this.toString()];
                }
                this.emit("accepted", response, cause);
                break;
            default:
                if (this.ua.applicants[this.toString()]) {
                    delete this.ua.applicants[this.toString()];
                }
                this.emit("rejected", response, cause);
                this.emit("failed", response, cause);
                break;
        }
    }
    onRequestTimeout() {
        this.emit("failed", undefined, C.causes.REQUEST_TIMEOUT);
    }
    onTransportError() {
        this.emit("failed", undefined, C.causes.CONNECTION_ERROR);
    }
}
