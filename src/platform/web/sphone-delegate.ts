/**
 * Delegate for {@link Sphone}.
 * @public
 */
export interface SphoneDelegate {
    /**
     * Called when a call is answered.
     * Callback for handling establishment of a new Session.
     */
    onCallAnswered?(SessionId: string | undefined): void;
    /**
     * Called when a call is created.
     * Callback for handling the creation of a new Session.
     */
    onCallCreated?(): void;
    /**
     * Called when a call is received.
     * Callback for handling incoming INVITE requests.
     * The callback must either accept or reject the incoming call by calling `answer()` or `decline()` respectively.
     */
    onCallReceived?(): void;
    /**
     * Called when a call is hungup.
     * Callback for handling termination of a Session.
     */
    onCallHangup?(SessionId: string | undefined): void;
    /**
     * Called upon receiving a message.
     * Callback for handling incoming MESSAGE requests.
     * @param message - The message received.
     */
    onMessageReceived?(message: string): void;
    /**
     * Called when user is registered to received calls.
     */
    onRegistered?(): void;
    /**
     * Called when user is no longer registered to received calls.
     */
    onUnregistered?(): void;
}
