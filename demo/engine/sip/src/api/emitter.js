/**
 * Creates an {@link Emitter}.
 * @param eventEmitter - An event emitter.
 * @param eventName - Event name.
 * @internal
 */
export function makeEmitter(eventEmitter, eventName = "event") {
    return {
        on: (listener) => {
            eventEmitter.on(eventName, listener);
        },
        off: (listener) => {
            eventEmitter.removeListener(eventName, listener);
        },
        once: (listener) => {
            eventEmitter.once(eventName, listener);
        }
    };
}
