/**
 * {@link UserAgent} state.
 * @remarks
 * Valid state transitions:
 * ```
 * 1. "initial" --> "starting"
 * 2. "starting" --> "started"
 * 3. "starting" --> "stopped"
 * 4. "started" --> "stopping"
 * 5. "started" --> "stopped"
 * 6. "stopped" --> "starting"
 * ```
 * @public
 */
export var UserAgentState;
(function (UserAgentState) {
    UserAgentState["Initial"] = "Initial";
    UserAgentState["Starting"] = "Starting";
    UserAgentState["Started"] = "Started";
    UserAgentState["Stopping"] = "Stopping";
    UserAgentState["Stopped"] = "Stopped";
})(UserAgentState || (UserAgentState = {}));
