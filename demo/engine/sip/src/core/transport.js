import { EventEmitter } from "events";
/**
 * Transport.
 * @remarks
 * Abstract transport layer base class.
 * @public
 */
export class Transport extends EventEmitter {
    /**
     * Constructor
     * @param logger - Logger.
     * @param options - Options bucket. Deprecated.
     */
    constructor(logger, options) {
        super();
        this.logger = logger;
    }
    /**
     * Returns the promise designated by the child layer then emits a connected event.
     * Automatically emits an event upon resolution, unless overrideEvent is set. If you
     * override the event in this fashion, you should emit it in your implementation of connectPromise
     * @param options - Options bucket.
     */
    connect(options = {}) {
        return this.connectPromise(options).then((data) => {
            if (!data.overrideEvent) {
                this.emit("connected");
            }
        });
    }
    /**
     * Sends a message then emits a 'messageSent' event. Automatically emits an
     * event upon resolution, unless data.overrideEvent is set. If you override
     * the event in this fashion, you should emit it in your implementation of sendPromise
     * Rejects with an Error if message fails to send.
     * @param message - Message.
     * @param options - Options bucket.
     */
    send(message, options = {}) {
        // Error handling is independent of whether the message was a request or
        // response.
        //
        // If the transport user asks for a message to be sent over an
        // unreliable transport, and the result is an ICMP error, the behavior
        // depends on the type of ICMP error.  Host, network, port or protocol
        // unreachable errors, or parameter problem errors SHOULD cause the
        // transport layer to inform the transport user of a failure in sending.
        // Source quench and TTL exceeded ICMP errors SHOULD be ignored.
        //
        // If the transport user asks for a request to be sent over a reliable
        // transport, and the result is a connection failure, the transport
        // layer SHOULD inform the transport user of a failure in sending.
        // https://tools.ietf.org/html/rfc3261#section-18.4
        return this.sendPromise(message).then((result) => {
            if (!result.overrideEvent) {
                this.emit("messageSent", result.msg);
            }
        });
    }
    /**
     * Returns the promise designated by the child layer then emits a
     * disconnected event. Automatically emits an event upon resolution,
     * unless overrideEvent is set. If you override the event in this fashion,
     * you should emit it in your implementation of disconnectPromise
     * @param options - Options bucket
     */
    disconnect(options = {}) {
        return this.disconnectPromise(options).then((data) => {
            if (!data.overrideEvent) {
                this.emit("disconnected");
            }
        });
    }
    afterConnected(callback) {
        if (this.isConnected()) {
            callback();
        }
        else {
            this.once("connected", callback);
        }
    }
    /**
     * Returns a promise which resolves once the UA is connected. DEPRECATION WARNING: just use afterConnected()
     */
    waitForConnected() {
        // tslint:disable-next-line:no-console
        console.warn("DEPRECATION WARNING Transport.waitForConnected(): use afterConnected() instead");
        return new Promise((resolve) => {
            this.afterConnected(resolve);
        });
    }
}
