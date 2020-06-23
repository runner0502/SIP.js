/**
 * {@link Registerer} state.
 * @remarks
 * Valid state transitions:
 * ```
 * 1. "initial" --> "registered"
 * 2. "initial" --> "unregistered"
 * 3. "initial" --> "terminated"
 * 4. "registered" --> "unregistered"
 * 5. "registered" --> "terminated"
 * 6. "unregistered" --> "registered"
 * 7. "unregistered" --> "terminated"
 * ```
 * @public
 */
export var RegistererState;
(function (RegistererState) {
    RegistererState["Initial"] = "Initial";
    RegistererState["Registered"] = "Registered";
    RegistererState["Unregistered"] = "Unregistered";
    RegistererState["Terminated"] = "Terminated";
})(RegistererState || (RegistererState = {}));
