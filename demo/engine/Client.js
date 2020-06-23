export { init, makecall };
//
// Copyright (c) ZeroC, Inc. All rights reserved.
//
// import {Ice} from "ice";
// import {Dispatcher} from "./generated";
// import { Info } from "./sip/api";
// import {Sphone} from "./sip/platform/web"
import { iceAPI } from "./iceAPI";
import { Sphone } from "./sip/src/platform/web/index";
// import{Testcx} from "../src/platform/web/Testcx"
// (() =>
// {
let batch = 0;
let _iceServer;
// let _sphone:Sphone;
function registClick() {
    _iceServer.regist($("#txtServerIP").text(), Number.parseInt($("#txtServerPort").text()), $("#txtUsername").text());
}
//  function getVideo(id: string): HTMLVideoElement {
//     const el = document.getElementById(id);
//     if (!(el instanceof HTMLVideoElement)) {
//       throw new Error(`Element "${id}" not found or not a video element.`);
//     }
//     return el;
//   }
//    function getAudio(id: string): HTMLAudioElement {
//     const el = document.getElementById(id);
//     if (!(el instanceof HTMLAudioElement)) {
//       throw new Error(`Element "${id}" not found or not an audio element.`);
//     }
//     return el;
//   }
//   const videoLocalAlice = getVideo("videoLocalAlice");
// const videoRemoteAlice = getVideo("videoRemoteAlice");
// const audioElement = getAudio("remoteAudio");
const domain = "119.57.44.172:5060";
function makeCallCreatedCallback1(user) {
    return () => {
        console.log(`[${user.id}] call created`);
        //beginButton.disabled = true;
        //endButton.disabled = false;
    };
}
function makeRegisteredCallback1(user) {
    return () => {
        console.log(`[${user.id}] registered`);
        //registerButton.disabled = true;
        //unregisterButton.disabled = false;
    };
}
function makeUnregisteredCallback1(user) {
    return () => {
        console.log(`[${user.id}] unregistered`);
        //registerButton.disabled = false;
        //unregisterButton.disabled = true;
    };
}
function makeCallReceivedCallback(user) {
    return () => {
        console.log(`[${user.id}] call received`);
        user.answer()
            .catch((error) => {
            console.error(`[${user.id}] failed to answer call`);
            console.error(error);
            alert("Failed to answer call.\n" + error);
        });
    };
}
function buildUser1(webSocketServer, aor, displayName, videoLocalElement, videoRemoteElement) {
    console.log(`Creating "${name}" <${aor}>...`);
    // SimpleUser options
    const options = {
        aor,
        media: {
            constraints: {
                audio: true,
                video: true
            },
            local: {
                video: videoLocalElement
            },
            remote: {
                video: videoRemoteElement,
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
    const delegate = {
        onCallCreated: makeCallCreatedCallback1(user),
        onCallReceived: makeCallReceivedCallback(user),
        onCallHangup: (SessionId) => {
            return 0;
        },
        // onCallHangup: makeCallHangupCallback1(user, beginButton, endButton),
        onRegistered: makeRegisteredCallback1(user),
        onUnregistered: makeUnregisteredCallback1(user)
    };
    user.delegate = delegate;
    // Setup start button click listeners
    // startButton.addEventListener(
    //   "click", makeStartButtonClickListener(user, startButton, stopButton, registerButton, beginButton)
    // );
    // // Setup stop button click listeners
    // stopButton.addEventListener(
    //   "click", makeStopButtonClickListener(user, startButton, stopButton, registerButton, beginButton)
    // );
    // // Setup register button click listeners
    // registerButton.addEventListener("click", makeRegisterButtonClickListener(user, registerButton));
    // // Setup unregister button click listeners
    // unregisterButton.addEventListener("click", makeUnregisterButtonClickListener(user, unregisterButton));
    // // Setup begin button click listeners
    //beginButton.addEventListener("click", makeBeginButtonClickListener(user, targetAOR, targetName));
    // // Setup end button click listeners
    // endButton.addEventListener("click", makeEndButtonClickListener(user));
    // Enable start button
    //startButton.disabled = false;
    //beginBob.addEventListener("click", makeBeginButtonClickListener1(user, targetAOR, targetName));
    return user;
}
const webSocketServerAlice = "wss://119.57.44.172:7443";
let alice;
function init(localVideo, remoteVideo, remoteAudio) {
    _iceServer = iceAPI.getInstance();
    //let aaa = new Testcx();
    //let ts = new Transport(null, null);
    // _sphone = Sphone.getInstance();
    //_sphone = new Sphone("11", null);
    // if( _sphone !== null )
    // {
    //     _sphone.answer();
    // }
    //
    // The batch requests associated to the proxy are lost when we
    // update the proxy.
    //
    batch = 0;
    $("#flush").addClass("disabled").off("click");
    $("#btnApplySpeak").click(applySpeakClick);
    $("#btnReleaseSpeak").click(releaseSpeakClick);
    $("#btnCreateConference").click(createConferenceClick);
    $("#btnEndConference").click(endConferenceClick);
    $("#btnConfereceAddMember").click(conferenceAddMemberClick);
    // $("#btnConfereceDeleteMember").click(conferenceDeleteMemberClick);
    $("#btnRegist").click(registClick);
    // $("#btnCall").click(makecallClick);
    //$("#btnGetGroupTree").click(_iceServer.getGroupTree);
    alice = buildUser1(webSocketServerAlice, "sip:1002@" + domain, "1002", localVideo, remoteVideo);
    alice.connect()
        .then(() => {
        // startButton.disabled = true;
        // stopButton.disabled = false;
        // registerButton.disabled = false;
        //beginAlice.disabled = false;
        alice.register(undefined, {
            requestDelegate: {
                onReject: (response) => {
                    console.warn(`[${alice.id}] REGISTER rejected`);
                    let message = `Registration of "${response.message.to.uri.aor}" rejected.\n`;
                    message += `Reason: ${response.message.reasonPhrase}\n`;
                    alert(message);
                }
            }
        })
            .then(() => {
            // registerButton.disabled = true;
        })
            .catch((error) => {
            console.error(`[${alice.id}] failed to register`);
            console.error(error);
            alert("Failed to register.\n" + error);
        });
    })
        .catch((error) => {
        console.error(`[${alice.id}] failed to connect`);
        console.error(error);
        alert("Failed to connect.\n" + error);
    });
}
// enum State
// {
//     Idle,
//     SendRequest,
//     FlushBatchRequests
// }
//
// Invoke sayHello.
//
// async function sayHello()
// {
//     try
//     {
//         setState(State.SendRequest);
//         // if(helloPrx.ice_isBatchOneway())
//         // {
//         //     batch++;
//         // }
//         // await helloPrx.sayHello(Number($("#delay").val()));
//     }
//     catch(ex)
//     {
//         $("#output").val(ex.toString());
//     }
//     finally
//     {
//         setState(State.Idle);
//     }
// }
//
// Flush batch requests.
//
// async function flush()
// {
//     try
//     {
//         setState(State.SendRequest);
//         batch = 0;
//         setState(State.FlushBatchRequests);
//         // await helloPrx.ice_flushBatchRequests();
//     }
//     catch(ex)
//     {
//         $("#output").val(ex.toString());
//     }
//     finally
//     {
//         setState(State.Idle);
//     }
// }
//
// Shutdown the server.
//
// async function shutdown()
// {
//     try
//     {
//         setState(State.SendRequest);
//         // if(helloPrx.ice_isBatchOneway())
//         // {
//         //     batch++;
//         // }
//         // await helloPrx.shutdown();
//     }
//     catch(ex)
//     {
//         $("#output").val(ex.toString());
//     }
//     finally
//     {
//         setState(State.Idle);
//     }
// }
function makecall(localVideo, remoteVideo, remoteAudio) {
    //_iceServer.makecall("20001", true);
    const nameBob1 = "1000";
    const uriBob1 = "sip:" + nameBob1 + "@" + domain;
    alice.call1(uriBob1, localVideo, remoteVideo, remoteAudio, undefined, {
        requestDelegate: {
            onReject: (response) => {
                // console.warn(`[${user.id}] INVITE rejected`);
                // let message = `Session invitation to "${targetDisplay}" rejected.\n`;
                // message += `Reason: ${response.message.reasonPhrase}\n`;
                // message += `Perhaps "${targetDisplay}" is not connected or registered?\n`;
                // message += `Or perhaps "${targetDisplay}" did not grant access to video?\n`;
                // alert(message);
            }
        }
    })
        .catch((error) => {
        // console.error(`[${user.id}] failed to begin session`);
        console.error(error);
        alert("Failed to begin session.\n" + error);
    });
}
async function applySpeakClick() {
    _iceServer.applySpeak("20001");
}
async function releaseSpeakClick() {
    _iceServer.releaseSpeak("20001");
}
async function createConferenceClick() {
    _iceServer.createConference("20001", true);
}
async function endConferenceClick() {
    _iceServer.endConference("20001");
}
async function conferenceAddMemberClick() {
    _iceServer.conferenceAddMember("cid", "20001");
}
async function conferenceDeleteMemberClick() {
    _iceServer.conferenceDeleteMember("cid", "20001");
}
//
// Handle the client state.
//
// let state:State;
// function setState(newState:State)
// {
//     // return;
//     if(state === newState)
//     {
//         //
//         // This event was queued before the event handler has time
//         // to disable the button, just ignore it.
//         //
//         return;
//     }
//     switch(newState)
//     {
//         case State.Idle:
//         {
//             //
//             // Hide the progress indicator.
//             //
//             $("#progress").hide();
//             $("body").removeClass("waiting");
//             //
//             // Enable buttons.
//             //
//             $("#hello").removeClass("disabled").click(makecallClick);
//             $("#shutdown").removeClass("disabled").click(shutdown);
//             if(batch > 0)
//             {
//                 $("#flush").removeClass("disabled").click(flush);
//             }
//             break;
//         }
//         case State.SendRequest:
//         case State.FlushBatchRequests:
//         {
//             //
//             // Reset the output.
//             //
//             $("#output").val("");
//             //
//             // Disable buttons.
//             //
//             $("#hello").addClass("disabled").off("click");
//             $("#shutdown").addClass("disabled").off("click");
//             $("#flush").addClass("disabled").off("click");
//             //
//             // Display the progress indicator and set the wait cursor.
//             //
//             $("#progress .message").text(
//                 newState === State.SendRequest ? "Sending Request..." : "Flush Batch Requests...");
//             $("#progress").show();
//             $("body").addClass("waiting");
//             break;
//         }
//         default:
//         {
//             break;
//         }
//     }
//     state = newState;
// }
// //
// // Start in the idle state
// //
// setState(State.Idle);
//
// Extract the url GET variables and intialize the mode
//
if (window.location.search.length > 1) {
    for (let arg of window.location.search.substr(1).split("&")) {
        if (arg.includes("mode=")) {
            $("#mode").val(arg.split("=")[1]);
        }
    }
}
//
// If the user selects a secure mode, ensure that the page is loaded over HTTPS
// so the web server SSL certificate is obtained.
//
// $("#mode").on("change", e =>
//     {
//         const newMode = $(e.currentTarget).val();
//         if(document.location.protocol === "http:" &&
//            (newMode === "twoway-secure" || newMode === "oneway-secure" || newMode === "oneway-batch-secure"))
//         {
//             let href = document.location.protocol + "//" + document.location.host +
//                        document.location.pathname + "?mode=" + newMode;
//             href = href.replace("http", "https");
//             href = href.replace("8080", "9090");
//             document.location.assign(href);
//         }
//         else if (document.location.protocol === "https:" &&
//                  (newMode === "twoway" || newMode === "oneway" || newMode === "oneway-batch"))
//         {
//             let href = document.location.protocol + "//" + document.location.host +
//                        document.location.pathname + "?mode=" + newMode;
//             href = href.replace("https", "http");
//             href = href.replace("9090", "8080");
//             document.location.assign(href);
//         }
//         updateProxy();
//     });
//     $("#timeout").on("change", () => updateProxy());
// init();
// })();
