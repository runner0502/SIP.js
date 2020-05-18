// tslint:disable: no-console
import { SimpleUser, SimpleUserDelegate, SimpleUserOptions, Sphone, SphoneDelegate } from "../src/platform/web";
import { getAudio, getButton, getInput, getVideo } from "./demo-utils";
// import { nameAlice, nameBob, uriAlice, uriBob, webSocketServerAlice, webSocketServerBob } from "./demo-users";

const btnInit = getButton("init");
const startAlice = getButton("startAlice");
const startBob = getButton("startBob");
const stopAlice = getButton("stopAlice");
const stopBob = getButton("stopBob");
const registerAlice = getButton("registerAlice");
const registerBob = getButton("registerBob");
const unregisterAlice = getButton("unregisterAlice");
const unregisterBob = getButton("unregisterBob");
const beginAlice = getButton("beginAlice");
const beginBob = getButton("beginBob");
const endAlice = getButton("endAlice");
const endBob = getButton("endBob");
const videoLocalAlice = getVideo("videoLocalAlice");
const videoLocalBob = getVideo("videoLocalBob");
const videoRemoteAlice = getVideo("videoRemoteAlice");
const videoRemoteBob = getVideo("videoRemoteBob");
const txtServer = getInput("sipServer");
const txtUsername = getInput("username");
const txtPassword = getInput("password");
const txtCallee = getInput("callee");
const audioElement = getAudio("remoteAudio");

// const domain = "192.168.10.205:50601";
const domain = "119.57.44.172:5060";

// export const nameAlice = "1000";
export const nameAlice = txtUsername.value;
export const uriAlice = "sip:" + nameAlice + "@" + domain;
// export const webSocketServerAlice = "wss://192.168.10.205:7443";
export const webSocketServerAlice = "wss://119.57.44.172:7443";

// export const nameBob = "1003";
// export const uriBob = "sip:1003@" + domain;

export const nameBob = txtCallee.value;
export const uriBob = "sip:" + nameBob + "@" + domain;
// export const webSocketServerBob = "wss://192.168.10.205:7443";
export const webSocketServerBob = "wss://119.57.44.172:7443";
btnInit.addEventListener( "click", initButtonClickListener() );

// New SimpleUser for Alice
let alice;

// New SimpleUser for Bob
// const bob = buildUser(
//   webSocketServerBob,
//   uriBob,
//   nameBob,
//   uriAlice,
//   nameAlice,
//   startBob,
//   stopBob,
//   registerBob,
//   unregisterBob,
//   beginBob,
//   endBob,
//   videoLocalBob,
//   videoRemoteBob
// );

function buildUser(
  webSocketServer: string,
  aor: string,
  displayName: string,
  targetAOR: string,
  targetName: string,
  startButton: HTMLButtonElement,
  stopButton: HTMLButtonElement,
  registerButton: HTMLButtonElement,
  unregisterButton: HTMLButtonElement,
  beginButton: HTMLButtonElement,
  endButton: HTMLButtonElement,
  videoLocalElement: HTMLVideoElement,
  videoRemoteElement: HTMLVideoElement
): Sphone {
  console.log(`Creating "${name}" <${aor}>...`);

  // SimpleUser options
  const options: SimpleUserOptions = {
    aor,
    media: {
      constraints: { // This demo is making "video only" calls
        audio: true,
        video: true
      },
      local: {
        video: videoLocalElement
      },
      remote: {
        video: videoRemoteElement,
        // audio: videoRemoteElement
      }
    },
    userAgentOptions: {
      displayName,
      authorizationPassword: "123456",
          sessionDescriptionHandlerFactoryOptions: {
        //       constraints: {
        //         audio: true,  video: false
        //       }
                // RTCOfferOptions: {
                //     offerToReceiveAudio: false, offerToReceiveVideo : false
                // }
            }
    }
  };

  // Create SimpleUser
  // const user = new SimpleUser(webSocketServer, options);
  const user = new Sphone(webSocketServer, options);

  // SimpleUser delegate
  const delegate: SphoneDelegate = {
    onCallCreated: makeCallCreatedCallback(user, beginButton, endButton),
    onCallReceived: makeCallReceivedCallback(user),
    onCallHangup: (SessionId: string | undefined) => {
      return makeCallHangupCallback(user, beginButton, endButton, SessionId);
    },
    // onCallHangup: makeCallHangupCallback1(user, beginButton, endButton),
    onRegistered: makeRegisteredCallback(user, registerButton, unregisterButton),
    onUnregistered: makeUnregisteredCallback(user, registerButton, unregisterButton)
  };
  user.delegate = delegate;

  // Setup start button click listeners
  startButton.addEventListener(
    "click", makeStartButtonClickListener(user, startButton, stopButton, registerButton, beginButton)
  );

  // Setup stop button click listeners
  stopButton.addEventListener(
    "click", makeStopButtonClickListener(user, startButton, stopButton, registerButton, beginButton)
  );

  // Setup register button click listeners
  registerButton.addEventListener("click", makeRegisterButtonClickListener(user, registerButton));

  // Setup unregister button click listeners
  unregisterButton.addEventListener("click", makeUnregisterButtonClickListener(user, unregisterButton));

  // Setup begin button click listeners
  beginButton.addEventListener("click", makeBeginButtonClickListener(user, targetAOR, targetName));

  // Setup end button click listeners
  endButton.addEventListener("click", makeEndButtonClickListener(user));

  // Enable start button
  startButton.disabled = false;

  beginBob.addEventListener("click", makeBeginButtonClickListener1(user, targetAOR, targetName));

  return user;
}

// Helper function to create call received callback
function makeCallReceivedCallback(
  user: Sphone,
): () => void {
  return () => {
    console.log(`[${user.id}] call received`);
    user.answer()
      .catch((error: Error) => {
        console.error(`[${user.id}] failed to answer call`);
        console.error(error);
        alert("Failed to answer call.\n" + error);
      });
  };
}

// Helper function to create call created callback
function makeCallCreatedCallback(
  user: Sphone,
  beginButton: HTMLButtonElement,
  endButton: HTMLButtonElement
): () => void {
  return () => {
    console.log(`[${user.id}] call created`);
    beginButton.disabled = true;
    endButton.disabled = false;
  };
}

// Helper function to create call hangup callback
function makeCallHangupCallback(
  user: Sphone,
  beginButton: HTMLButtonElement,
  endButton: HTMLButtonElement,
  sessionId: string | undefined
) {
    console.log(`[${user.id}] call hangup`);
    // console.log( sessionId );
    beginButton.disabled = false;
    endButton.disabled = true;
}

function makeCallHangupCallback1(
  user: Sphone,
  beginButton: HTMLButtonElement,
  endButton: HTMLButtonElement,
): () => void {
  return () => {
    console.log(`[${user.id}] call hangup`);
    // console.log( sessionId );
    beginButton.disabled = false;
    endButton.disabled = true;
  };
}

// Helper function to create registered callback
function makeRegisteredCallback(
  user: Sphone,
  registerButton: HTMLButtonElement,
  unregisterButton: HTMLButtonElement
): () => void {
  return () => {
    console.log(`[${user.id}] registered`);
    registerButton.disabled = true;
    unregisterButton.disabled = false;
  };
}

// Helper function to create unregistered callback
function makeUnregisteredCallback(
  user: Sphone,
  registerButton: HTMLButtonElement,
  unregisterButton: HTMLButtonElement
): () => void {
  return () => {
    console.log(`[${user.id}] unregistered`);
    registerButton.disabled = false;
    unregisterButton.disabled = true;
  };
}

// Helper function to setup click handler for start button
function makeStartButtonClickListener(
  user: Sphone,
  startButton: HTMLButtonElement,
  stopButton: HTMLButtonElement,
  registerButton: HTMLButtonElement,
  beginButton: HTMLButtonElement
): () => void {
  return () => {
    user.connect()
      .then(() => {
        startButton.disabled = true;
        stopButton.disabled = false;
        registerButton.disabled = false;
        beginButton.disabled = false;
      })
      .catch((error: Error) => {
        console.error(`[${user.id}] failed to connect`);
        console.error(error);
        alert("Failed to connect.\n" + error);
      });
  };
}

// Helper function to setup click handler for stop button
function makeStopButtonClickListener(
  user: Sphone,
  startButton: HTMLButtonElement,
  stopButton: HTMLButtonElement,
  registerButton: HTMLButtonElement,
  beginButton: HTMLButtonElement
): () => void {
  return () => {
    user.disconnect()
      .then(() => {
        startButton.disabled = false;
        stopButton.disabled = true;
        registerButton.disabled = true;
        beginButton.disabled = true;
      })
      .catch((error: Error) => {
        console.error(`[${user.id}] failed to disconnect`);
        console.error(error);
        alert("Failed to disconnect.\n" + error);
      });
  };
}

// Helper function to setup click handler for register button
function makeRegisterButtonClickListener(
  user: Sphone,
  registerButton: HTMLButtonElement,
): () => void {
  return () => {
    user.register(
      undefined,
      { // An example of how to get access to a SIP response message for custom handling
        requestDelegate: {
          onReject: (response) => {
            console.warn(`[${user.id}] REGISTER rejected`);
            let message = `Registration of "${response.message.to.uri.aor}" rejected.\n`;
            message += `Reason: ${response.message.reasonPhrase}\n`;
            alert(message);
          }
        }
      })
      .then(() => {
        registerButton.disabled = true;
      })
      .catch((error: Error) => {
        console.error(`[${user.id}] failed to register`);
        console.error(error);
        alert("Failed to register.\n" + error);
      });
  };
}

// Helper function to setup click handler for unregister button
function makeUnregisterButtonClickListener(
  user: Sphone,
  unregisterButton: HTMLButtonElement
): () => void {
  return () => {
    user.unregister()
      .then(() => {
        unregisterButton.disabled = true;
      })
      .catch((error: Error) => {
        console.error(`[${user.id}] failed to unregister`);
        console.error(error);
        alert("Failed to unregister.\n" + error);
      });
  };
}

// Helper function to setup click handler for begin button
function makeBeginButtonClickListener(
  user: Sphone,
  target: string,
  targetDisplay: string
): () => void {
  return () => {
    const nameBob1 = txtCallee.value;
    const uriBob1 = "sip:" + nameBob1 + "@" + domain;
    user.call1(
      uriBob1,
      videoLocalAlice,
      videoRemoteAlice,
      audioElement,
      undefined,
      { // An example of how to get access to a SIP response message for custom handling
        requestDelegate: {
          onReject: (response) => {
            console.warn(`[${user.id}] INVITE rejected`);
            let message = `Session invitation to "${targetDisplay}" rejected.\n`;
            message += `Reason: ${response.message.reasonPhrase}\n`;
            message += `Perhaps "${targetDisplay}" is not connected or registered?\n`;
            message += `Or perhaps "${targetDisplay}" did not grant access to video?\n`;
            alert(message);
          }
        }
      })
      .catch((error: Error) => {
        console.error(`[${user.id}] failed to begin session`);
        console.error(error);
        alert("Failed to begin session.\n" + error);
      });
  };
}

function makeBeginButtonClickListener1(
  user: Sphone,
  target: string,
  targetDisplay: string
): () => void {
  return () => {
    const nameBob1 = txtCallee.value;
    const uriBob1 = "sip:" + nameBob1 + "@" + domain;
    user.call1(
      uriBob1,
      videoLocalBob,
      videoRemoteBob,
      audioElement,
      undefined,
      { // An example of how to get access to a SIP response message for custom handling
        requestDelegate: {
          onReject: (response) => {
            console.warn(`[${user.id}] INVITE rejected`);
            let message = `Session invitation to "${targetDisplay}" rejected.\n`;
            message += `Reason: ${response.message.reasonPhrase}\n`;
            message += `Perhaps "${targetDisplay}" is not connected or registered?\n`;
            message += `Or perhaps "${targetDisplay}" did not grant access to video?\n`;
            alert(message);
          }
        }
      })
      .catch((error: Error) => {
        console.error(`[${user.id}] failed to begin session`);
        console.error(error);
        alert("Failed to begin session.\n" + error);
      });
  };
}

// Helper function to setup click handler for begin button
function makeEndButtonClickListener(
  user: Sphone
): () => void {
  return () => {
    user.hangup()
      .catch((error: Error) => {
        console.error(`[${user.id}] failed to end session`);
        console.error(error);
        alert("Failed to end session.\n" + error);
      });
  };
}

function initButtonClickListener(
): () => void {
  return () => {
   const nameAlice1 = txtUsername.value;
   const uriAlice1 = "sip:" + nameAlice1 + "@" + domain;
   alice = buildUser(
    webSocketServerAlice,
    uriAlice1,
    nameAlice1,
    uriBob,
    nameBob,
    startAlice,
    stopAlice,
    registerAlice,
    unregisterAlice,
    beginAlice,
    endAlice,
    videoLocalAlice,
    videoRemoteAlice
  );
   };
}
