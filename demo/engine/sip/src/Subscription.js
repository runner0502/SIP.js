import { EventEmitter } from "events";
import { C } from "./Constants";
import { SubscriptionState } from "./core";
import { AllowedMethods } from "./core/user-agent-core/allowed-methods";
import { TypeStrings } from "./Enums";
import { Utils } from "./Utils";
/**
 * While this class is named `Subscription`, it is closer to
 * an implementation of a "subscriber" as defined in RFC 6665
 * "SIP-Specific Event Notifications".
 * https://tools.ietf.org/html/rfc6665
 * @class Class creating a SIP Subscriber.
 */
export class Subscription extends EventEmitter {
    /**
     * Constructor.
     * @param ua User agent.
     * @param target Subscription target.
     * @param event Subscription event.
     * @param options Options bucket.
     */
    constructor(ua, target, event, options = {}) {
        super();
        this.data = {};
        this.method = C.SUBSCRIBE;
        this.body = undefined;
        // ClientContext interface
        this.type = TypeStrings.Subscription;
        this.ua = ua;
        this.logger = ua.getLogger("sip.subscription");
        if (options.body) {
            this.body = {
                body: options.body,
                contentType: options.contentType ? options.contentType : "application/sdp"
            };
        }
        // Target URI
        const uri = ua.normalizeTarget(target);
        if (!uri) {
            throw new TypeError("Invalid target: " + target);
        }
        this.uri = uri;
        // Subscription event
        this.event = event;
        // Subscription expires
        if (options.expires === undefined) {
            this.expires = 3600;
        }
        else if (typeof options.expires !== "number") { // pre-typescript type guard
            ua.logger.warn(`Option "expires" must be a number. Using default of 3600.`);
            this.expires = 3600;
        }
        else {
            this.expires = options.expires;
        }
        // Subscription extra headers
        this.extraHeaders = (options.extraHeaders || []).slice();
        // Subscription context.
        this.context = this.initContext();
        this.disposed = false;
        // ClientContext interface
        this.request = this.context.message;
        if (!this.request.from) {
            throw new Error("From undefined.");
        }
        if (!this.request.to) {
            throw new Error("From undefined.");
        }
        this.localIdentity = this.request.from;
        this.remoteIdentity = this.request.to;
        // Add to UA's collection
        this.id = this.request.callId + this.request.from.parameters.tag + this.event;
        this.ua.subscriptions[this.id] = this;
    }
    /**
     * Destructor.
     */
    dispose() {
        if (this.disposed) {
            return;
        }
        if (this.retryAfterTimer) {
            clearTimeout(this.retryAfterTimer);
            this.retryAfterTimer = undefined;
        }
        this.context.dispose();
        this.disposed = true;
        // Remove from UA's collection
        delete this.ua.subscriptions[this.id];
    }
    on(name, callback) {
        return super.on(name, callback);
    }
    emit(event, ...args) {
        return super.emit(event, ...args);
    }
    /**
     * Gracefully terminate.
     */
    close() {
        if (this.disposed) {
            return;
        }
        this.dispose();
        switch (this.context.state) {
            case SubscriptionState.Initial:
                this.onTerminated();
                break;
            case SubscriptionState.NotifyWait:
                this.onTerminated();
                break;
            case SubscriptionState.Pending:
                this.unsubscribe();
                break;
            case SubscriptionState.Active:
                this.unsubscribe();
                break;
            case SubscriptionState.Terminated:
                this.onTerminated();
                break;
            default:
                break;
        }
    }
    /**
     * Send a re-SUBSCRIBE request if there is an "active" subscription.
     */
    refresh() {
        switch (this.context.state) {
            case SubscriptionState.Initial:
                break;
            case SubscriptionState.NotifyWait:
                break;
            case SubscriptionState.Pending:
                break;
            case SubscriptionState.Active:
                if (this.subscription) {
                    const request = this.subscription.refresh();
                    request.delegate = {
                        onAccept: ((response) => this.onAccepted(response)),
                        onRedirect: ((response) => this.onFailed(response)),
                        onReject: ((response) => this.onFailed(response)),
                    };
                }
                break;
            case SubscriptionState.Terminated:
                break;
            default:
                break;
        }
    }
    /**
     * Send an initial SUBSCRIBE request if no subscription.
     * Send a re-SUBSCRIBE request if there is an "active" subscription.
     */
    subscribe() {
        switch (this.context.state) {
            case SubscriptionState.Initial:
                this.context.subscribe().then((result) => {
                    if (result.success) {
                        if (result.success.subscription) {
                            this.subscription = result.success.subscription;
                            this.subscription.delegate = {
                                onNotify: (request) => this.onNotify(request),
                                onRefresh: (request) => this.onRefresh(request),
                                onTerminated: () => this.close()
                            };
                        }
                        this.onNotify(result.success.request);
                    }
                    else if (result.failure) {
                        this.onFailed(result.failure.response);
                    }
                });
                break;
            case SubscriptionState.NotifyWait:
                break;
            case SubscriptionState.Pending:
                break;
            case SubscriptionState.Active:
                this.refresh();
                break;
            case SubscriptionState.Terminated:
                break;
            default:
                break;
        }
        return this;
    }
    /**
     * Send a re-SUBSCRIBE request if there is a "pending" or "active" subscription.
     */
    unsubscribe() {
        this.dispose();
        switch (this.context.state) {
            case SubscriptionState.Initial:
                break;
            case SubscriptionState.NotifyWait:
                break;
            case SubscriptionState.Pending:
                if (this.subscription) {
                    this.subscription.unsubscribe();
                    // responses intentionally ignored
                }
                break;
            case SubscriptionState.Active:
                if (this.subscription) {
                    this.subscription.unsubscribe();
                    // responses intentionally ignored
                }
                break;
            case SubscriptionState.Terminated:
                break;
            default:
                break;
        }
        this.onTerminated();
    }
    onAccepted(response) {
        const statusCode = response.message.statusCode ? response.message.statusCode : 0;
        const cause = Utils.getReasonPhrase(statusCode);
        this.emit("accepted", response.message, cause);
    }
    onFailed(response) {
        this.close();
        if (response) {
            const statusCode = response.message.statusCode ? response.message.statusCode : 0;
            const cause = Utils.getReasonPhrase(statusCode);
            this.emit("failed", response.message, cause);
            this.emit("rejected", response.message, cause);
        }
    }
    onNotify(request) {
        request.accept(); // Send 200 response.
        this.emit("notify", { request: request.message });
        // If we've set state to done, no further processing should take place
        // and we are only interested in cleaning up after the appropriate NOTIFY.
        if (this.disposed) {
            return;
        }
        //  If the "Subscription-State" value is "terminated", the subscriber
        //  MUST consider the subscription terminated.  The "expires" parameter
        //  has no semantics for "terminated" -- notifiers SHOULD NOT include an
        //  "expires" parameter on a "Subscription-State" header field with a
        //  value of "terminated", and subscribers MUST ignore any such
        //  parameter, if present.  If a reason code is present, the client
        //  should behave as described below.  If no reason code or an unknown
        //  reason code is present, the client MAY attempt to re-subscribe at any
        //  time (unless a "retry-after" parameter is present, in which case the
        //  client SHOULD NOT attempt re-subscription until after the number of
        //  seconds specified by the "retry-after" parameter).  The reason codes
        //  defined by this document are:
        // https://tools.ietf.org/html/rfc6665#section-4.1.3
        const subscriptionState = request.message.parseHeader("Subscription-State");
        if (subscriptionState && subscriptionState.state) {
            switch (subscriptionState.state) {
                case "terminated":
                    if (subscriptionState.reason) {
                        this.logger.log(`Terminated subscription with reason ${subscriptionState.reason}`);
                        switch (subscriptionState.reason) {
                            case "deactivated":
                            case "timeout":
                                this.initContext();
                                this.subscribe();
                                return;
                            case "probation":
                            case "giveup":
                                this.initContext();
                                if (subscriptionState.params && subscriptionState.params["retry-after"]) {
                                    this.retryAfterTimer = setTimeout(() => this.subscribe(), subscriptionState.params["retry-after"]);
                                }
                                else {
                                    this.subscribe();
                                }
                                return;
                            case "rejected":
                            case "noresource":
                            case "invariant":
                                break;
                        }
                    }
                    this.close();
                    break;
                default:
                    break;
            }
        }
    }
    onRefresh(request) {
        request.delegate = {
            onAccept: (response) => this.onAccepted(response)
        };
    }
    onTerminated() {
        this.emit("terminated");
    }
    initContext() {
        const options = {
            extraHeaders: this.extraHeaders,
            body: this.body ? Utils.fromBodyObj(this.body) : undefined
        };
        this.context = new SubscribeClientContext(this.ua.userAgentCore, this.uri, this.event, this.expires, options);
        this.context.delegate = {
            onAccept: ((response) => this.onAccepted(response))
        };
        return this.context;
    }
}
// tslint:disable-next-line:max-classes-per-file
class SubscribeClientContext {
    constructor(core, target, event, expires, options, delegate) {
        this.core = core;
        this.target = target;
        this.event = event;
        this.expires = expires;
        this.subscribed = false;
        this.logger = core.loggerFactory.getLogger("sip.subscription");
        this.delegate = delegate;
        const allowHeader = "Allow: " + AllowedMethods.toString();
        const extraHeaders = (options && options.extraHeaders || []).slice();
        extraHeaders.push(allowHeader);
        extraHeaders.push("Event: " + this.event);
        extraHeaders.push("Expires: " + this.expires);
        extraHeaders.push("Contact: " + this.core.configuration.contact.toString());
        const body = options && options.body;
        this.message = core.makeOutgoingRequestMessage(C.SUBSCRIBE, this.target, this.core.configuration.aor, this.target, {}, extraHeaders, body);
    }
    /** Destructor. */
    dispose() {
        if (this.subscription) {
            this.subscription.dispose();
        }
        if (this.request) {
            this.request.waitNotifyStop();
            this.request.dispose();
        }
    }
    /** Subscription state. */
    get state() {
        if (this.subscription) {
            return this.subscription.subscriptionState;
        }
        else if (this.subscribed) {
            return SubscriptionState.NotifyWait;
        }
        else {
            return SubscriptionState.Initial;
        }
    }
    /**
     * Establish subscription.
     * @param options Options bucket.
     */
    subscribe() {
        if (this.subscribed) {
            return Promise.reject(new Error("Not in initial state. Did you call subscribe more than once?"));
        }
        this.subscribed = true;
        return new Promise((resolve, reject) => {
            if (!this.message) {
                throw new Error("Message undefined.");
            }
            this.request = this.core.subscribe(this.message, {
                // This SUBSCRIBE request will be confirmed with a final response.
                // 200-class responses indicate that the subscription has been accepted
                // and that a NOTIFY request will be sent immediately.
                // https://tools.ietf.org/html/rfc6665#section-4.1.2.1
                onAccept: (response) => {
                    if (this.delegate && this.delegate.onAccept) {
                        this.delegate.onAccept(response);
                    }
                },
                // Due to the potential for out-of-order messages, packet loss, and
                // forking, the subscriber MUST be prepared to receive NOTIFY requests
                // before the SUBSCRIBE transaction has completed.
                // https://tools.ietf.org/html/rfc6665#section-4.1.2.4
                onNotify: (requestWithSubscription) => {
                    this.subscription = requestWithSubscription.subscription;
                    if (this.subscription) {
                        this.subscription.autoRefresh = true;
                    }
                    resolve({ success: requestWithSubscription });
                },
                // If this Timer N expires prior to the receipt of a NOTIFY request,
                // the subscriber considers the subscription failed, and cleans up
                // any state associated with the subscription attempt.
                // https://tools.ietf.org/html/rfc6665#section-4.1.2.4
                onNotifyTimeout: () => {
                    resolve({ failure: {} });
                },
                // This SUBSCRIBE request will be confirmed with a final response.
                // Non-200-class final responses indicate that no subscription or new
                // dialog usage has been created, and no subsequent NOTIFY request will
                // be sent.
                // https://tools.ietf.org/html/rfc6665#section-4.1.2.1
                onRedirect: (response) => {
                    resolve({ failure: { response } });
                },
                // This SUBSCRIBE request will be confirmed with a final response.
                // Non-200-class final responses indicate that no subscription or new
                // dialog usage has been created, and no subsequent NOTIFY request will
                // be sent.
                // https://tools.ietf.org/html/rfc6665#section-4.1.2.1
                onReject: (response) => {
                    resolve({ failure: { response } });
                }
            });
        });
    }
}
