import { Session } from "../../api";
import { Logger } from "../../core";
import { SphoneDelegate } from "./sphone-delegate";
export declare class Call {
    session: Session;
    localVideoControal: HTMLVideoElement;
    remoteVideoControal: HTMLVideoElement;
    remoteAudioControl?: HTMLAudioElement;
    delegate: SphoneDelegate | undefined;
    id: string | undefined;
    private logger;
    constructor(sessionPara: Session, localVideoControalPara: HTMLVideoElement, remoteVideoControalPara: HTMLVideoElement, logger: Logger, delegate: SphoneDelegate | undefined, remoteAudioControl?: HTMLAudioElement);
    /** Helper function to attach local media to html elements. */
    private setupLocalMedia;
    /** Helper function to attach remote media to html elements. */
    private setupRemoteMedia;
    /** Helper function to remove media from html elements. */
    private cleanupMedia;
    /** The receiver media track, if available. */
    private getReceiverTrack;
    /** The sender media track, if available. */
    private getSenderTrack;
    /** The remote audio track, if available. */
    readonly remoteAudioTrack: MediaStreamTrack | undefined;
    /** The remote video track, if available. */
    readonly remoteVideoTrack: MediaStreamTrack | undefined;
    /** The local audio track, if available. */
    readonly localAudioTrack: MediaStreamTrack | undefined;
    /** The local video track, if available. */
    readonly localVideoTrack: MediaStreamTrack | undefined;
}
//# sourceMappingURL=call.d.ts.map