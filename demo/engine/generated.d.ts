// **********************************************************************
//
// Copyright (c) 2003-present ZeroC, Inc. All rights reserved.
//
// **********************************************************************

import * as iceNS0 from "ice"

export namespace Dispatcher {
    class BusinessTypeRT {
        constructor(id?: number, WTGroupID?: number, WorkTypeName?: string, TheValue?: number, description?: string, TheState?: number, IsDefault?: number, WTGroupName?: string);
        clone(): BusinessTypeRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        id: number;
        WTGroupID: number;
        WorkTypeName: string;
        TheValue: number;
        description: string;
        TheState: number;
        IsDefault: number;
        WTGroupName: string;
        static write(outs: iceNS0.Ice.OutputStream, value: BusinessTypeRT): void;
        static read(ins: iceNS0.Ice.InputStream): BusinessTypeRT;
    }

    type BusinessTypeRTSeq = BusinessTypeRT[];

    class BusinessTypeRTSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: BusinessTypeRTSeq): void;
        static read(ins: iceNS0.Ice.InputStream): BusinessTypeRTSeq;
    }

    class SendBusFileReceiveT {
        constructor(MsgUUID?: string, Receiver?: string, ReceiverName?: string, Remark?: string, ModifyEmployee?: string);
        clone(): SendBusFileReceiveT;
        equals(rhs: any): boolean;
        hashCode(): number;
        MsgUUID: string;
        Receiver: string;
        ReceiverName: string;
        Remark: string;
        ModifyEmployee: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SendBusFileReceiveT): void;
        static read(ins: iceNS0.Ice.InputStream): SendBusFileReceiveT;
    }

    type SendBusFileReceiveSeq = SendBusFileReceiveT[];

    class SendBusFileReceiveSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: SendBusFileReceiveSeq): void;
        static read(ins: iceNS0.Ice.InputStream): SendBusFileReceiveSeq;
    }

    class StartSendBusFileT {
        constructor(MsgUUID?: string, FileUUID?: string, FileType?: number, FileName?: string, Remark?: string);
        clone(): StartSendBusFileT;
        equals(rhs: any): boolean;
        hashCode(): number;
        MsgUUID: string;
        FileUUID: string;
        FileType: number;
        FileName: string;
        Remark: string;
        static write(outs: iceNS0.Ice.OutputStream, value: StartSendBusFileT): void;
        static read(ins: iceNS0.Ice.InputStream): StartSendBusFileT;
    }

    type StartSendBusFileSeq = StartSendBusFileT[];

    class StartSendBusFileSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: StartSendBusFileSeq): void;
        static read(ins: iceNS0.Ice.InputStream): StartSendBusFileSeq;
    }

    class StartSendBusInfoT {
        constructor(MsgUUID?: string, KeyStationID?: number, KeyLineID?: number, KeyRailNum?: string, Sender?: string, senderName?: string, WorkTypeValue?: number, ParentID?: string, Descrip?: string, SendState?: number, Files?: StartSendBusFileSeq, Receivers?: SendBusFileReceiveSeq);
        clone(): StartSendBusInfoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        MsgUUID: string;
        KeyStationID: number;
        KeyLineID: number;
        KeyRailNum: string;
        Sender: string;
        senderName: string;
        WorkTypeValue: number;
        ParentID: string;
        Descrip: string;
        SendState: number;
        Files: StartSendBusFileSeq;
        Receivers: SendBusFileReceiveSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: StartSendBusInfoT): void;
        static read(ins: iceNS0.Ice.InputStream): StartSendBusInfoT;
    }

    class StartSendBusFileRT {
        constructor(MsgUUID?: string, FileUUID?: string, FileName?: string, FilePath?: string);
        clone(): StartSendBusFileRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        MsgUUID: string;
        FileUUID: string;
        FileName: string;
        FilePath: string;
        static write(outs: iceNS0.Ice.OutputStream, value: StartSendBusFileRT): void;
        static read(ins: iceNS0.Ice.InputStream): StartSendBusFileRT;
    }

    type StartSendBusFileRTSeq = StartSendBusFileRT[];

    class StartSendBusFileRTSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: StartSendBusFileRTSeq): void;
        static read(ins: iceNS0.Ice.InputStream): StartSendBusFileRTSeq;
    }

    class SendBusInfoRT {
        constructor(MsgUUID?: string, Sender?: string, Files?: StartSendBusFileRTSeq);
        clone(): SendBusInfoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        MsgUUID: string;
        Sender: string;
        Files: StartSendBusFileRTSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: SendBusInfoRT): void;
        static read(ins: iceNS0.Ice.InputStream): SendBusInfoRT;
    }

    class SendBusInfoEndT {
        constructor(MsgUUID?: string, SendState?: number);
        clone(): SendBusInfoEndT;
        equals(rhs: any): boolean;
        hashCode(): number;
        MsgUUID: string;
        SendState: number;
        static write(outs: iceNS0.Ice.OutputStream, value: SendBusInfoEndT): void;
        static read(ins: iceNS0.Ice.InputStream): SendBusInfoEndT;
    }

    class SendBusFileEndT {
        constructor(FileUUID?: string, SendState?: number);
        clone(): SendBusFileEndT;
        equals(rhs: any): boolean;
        hashCode(): number;
        FileUUID: string;
        SendState: number;
        static write(outs: iceNS0.Ice.OutputStream, value: SendBusFileEndT): void;
        static read(ins: iceNS0.Ice.InputStream): SendBusFileEndT;
    }

    class BusFileReceivedT {
        constructor(MsgUUID?: string, receiver?: string);
        clone(): BusFileReceivedT;
        equals(rhs: any): boolean;
        hashCode(): number;
        MsgUUID: string;
        receiver: string;
        static write(outs: iceNS0.Ice.OutputStream, value: BusFileReceivedT): void;
        static read(ins: iceNS0.Ice.InputStream): BusFileReceivedT;
    }

    class GetNotReceivedInfoT {
        constructor(maxnum?: number, receiver?: string);
        clone(): GetNotReceivedInfoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        maxnum: number;
        receiver: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetNotReceivedInfoT): void;
        static read(ins: iceNS0.Ice.InputStream): GetNotReceivedInfoT;
    }

    class GetNotReceivedInfoRT {
        constructor(Sendnum?: number, HaveOther?: boolean);
        clone(): GetNotReceivedInfoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        Sendnum: number;
        HaveOther: boolean;
        static write(outs: iceNS0.Ice.OutputStream, value: GetNotReceivedInfoRT): void;
        static read(ins: iceNS0.Ice.InputStream): GetNotReceivedInfoRT;
    }

    abstract class BusinessOPPrx extends iceNS0.Ice.ObjectPrx {
        opGetBusinessTypes(id: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<BusinessTypeRTSeq>;
        opStartSendBusinessInfo(id: Dispatcher.Identity, in1: StartSendBusInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<SendBusInfoRT>;
        opStartSendFile(id: Dispatcher.Identity, in1: StartSendBusFileT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<StartSendBusFileRT>;
        opSendBusinessInfoEnd(id: Dispatcher.Identity, in1: SendBusInfoEndT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opSendBusinessFileEnd(id: Dispatcher.Identity, in1: SendBusFileEndT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opChangeBusFileReceive(id: Dispatcher.Identity, in1: SendBusFileReceiveT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opBusFileReceived(id: Dispatcher.Identity, in1: BusFileReceivedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetNotReceivedInfo(id: Dispatcher.Identity, in1: GetNotReceivedInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<GetNotReceivedInfoRT>;
        opDeleteBusInfo(id: Dispatcher.Identity, msgid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): BusinessOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<BusinessOPPrx>;
    }

    abstract class BusinessOP extends iceNS0.Ice.Object {
        abstract opGetBusinessTypes(id: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<BusinessTypeRTSeq> | BusinessTypeRTSeq;
        abstract opStartSendBusinessInfo(id: Dispatcher.Identity, in1: StartSendBusInfoT, current: iceNS0.Ice.Current): PromiseLike<SendBusInfoRT> | SendBusInfoRT;
        abstract opStartSendFile(id: Dispatcher.Identity, in1: StartSendBusFileT, current: iceNS0.Ice.Current): PromiseLike<StartSendBusFileRT> | StartSendBusFileRT;
        abstract opSendBusinessInfoEnd(id: Dispatcher.Identity, in1: SendBusInfoEndT, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opSendBusinessFileEnd(id: Dispatcher.Identity, in1: SendBusFileEndT, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opChangeBusFileReceive(id: Dispatcher.Identity, in1: SendBusFileReceiveT, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opBusFileReceived(id: Dispatcher.Identity, in1: BusFileReceivedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetNotReceivedInfo(id: Dispatcher.Identity, in1: GetNotReceivedInfoT, current: iceNS0.Ice.Current): PromiseLike<GetNotReceivedInfoRT> | GetNotReceivedInfoRT;
        abstract opDeleteBusInfo(id: Dispatcher.Identity, msgid: string, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::BusinessOP".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class CMStateChangeT {
        constructor(cid?: string, employeeid?: string, state?: Dispatcher.CallState, stateDecorate?: string, name?: string, type?: number);
        clone(): CMStateChangeT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        employeeid: string;
        state: Dispatcher.CallState;
        stateDecorate: string;
        name: string;
        type: number;
        static write(outs: iceNS0.Ice.OutputStream, value: CMStateChangeT): void;
        static read(ins: iceNS0.Ice.InputStream): CMStateChangeT;
    }

    class CallChangeT {
        constructor(employeeid?: string, state?: Dispatcher.CallState, othername?: string, othernumber?: string, DNSprefix?: string, islocal?: number);
        clone(): CallChangeT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        state: Dispatcher.CallState;
        othername: string;
        othernumber: string;
        DNSprefix: string;
        islocal: number;
        static write(outs: iceNS0.Ice.OutputStream, value: CallChangeT): void;
        static read(ins: iceNS0.Ice.InputStream): CallChangeT;
    }

    class SessionChange1T {
        constructor(cid?: string, callingnum?: string, callingname?: string, othernum?: string, othername?: string, direction?: Dispatcher.CallDirect, state?: Dispatcher.CallState, type?: Dispatcher.CallType, level?: number, isVideo?: Dispatcher.MediaType, RoadParameters?: string, othermsg?: string);
        clone(): SessionChange1T;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        callingnum: string;
        callingname: string;
        othernum: string;
        othername: string;
        direction: Dispatcher.CallDirect;
        state: Dispatcher.CallState;
        type: Dispatcher.CallType;
        level: number;
        isVideo: Dispatcher.MediaType;
        RoadParameters: string;
        othermsg: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SessionChange1T): void;
        static read(ins: iceNS0.Ice.InputStream): SessionChange1T;
    }

    abstract class CallingCBPrx extends iceNS0.Ice.ObjectPrx {
        onSessionChange(in0: Dispatcher.SessionChangeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onSessionChange1(in0: SessionChange1T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onCMStateChange(in0: CMStateChangeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onCallChange(in0: CallChangeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onPlayAudioEv(in0: Dispatcher.PlayAudioEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): CallingCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<CallingCBPrx>;
    }

    abstract class CallingCB extends iceNS0.Ice.Object {
        abstract onSessionChange(in0: Dispatcher.SessionChangeT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onSessionChange1(in0: SessionChange1T, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onCMStateChange(in0: CMStateChangeT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onCallChange(in0: CallChangeT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onPlayAudioEv(in0: Dispatcher.PlayAudioEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::CallingCB".
         */
        static ice_staticId(): string;
    }

    abstract class CallingCBSubPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): CallingCBSubPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<CallingCBSubPrx>;
    }

    abstract class CallingCBSub extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::CallingCBSub".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class PlayAudioEvT {
        constructor(cid?: string, uuid?: string, type?: Dispatcher.PlayAudioType);
        clone(): PlayAudioEvT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        uuid: string;
        type: Dispatcher.PlayAudioType;
        static write(outs: iceNS0.Ice.OutputStream, value: PlayAudioEvT): void;
        static read(ins: iceNS0.Ice.InputStream): PlayAudioEvT;
    }

    class CallDirect {
        static readonly CallDirectNone: CallDirect;
        static readonly CallDirectOut: CallDirect;
        static readonly CallDirectIn: CallDirect;

        static valueOf(value: number): CallDirect;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class SessionChangeT {
        constructor(cid?: string, callingnum?: string, callingname?: string, othernum?: string, othername?: string, direction?: CallDirect, state?: Dispatcher.CallState, type?: Dispatcher.CallType, level?: number, isVideo?: Dispatcher.MediaType, RoadParameters?: string);
        clone(): SessionChangeT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        callingnum: string;
        callingname: string;
        othernum: string;
        othername: string;
        direction: CallDirect;
        state: Dispatcher.CallState;
        type: Dispatcher.CallType;
        level: number;
        isVideo: Dispatcher.MediaType;
        RoadParameters: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SessionChangeT): void;
        static read(ins: iceNS0.Ice.InputStream): SessionChangeT;
    }

    type SessionChangeTSeq = SessionChangeT[];

    class SessionChangeTSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: SessionChangeTSeq): void;
        static read(ins: iceNS0.Ice.InputStream): SessionChangeTSeq;
    }
}

export namespace Dispatcher {
    class NegoTransferT {
        constructor(number?: string, call1?: string, call2?: string, cid1?: string, cid2?: string);
        clone(): NegoTransferT;
        equals(rhs: any): boolean;
        hashCode(): number;
        number: string;
        call1: string;
        call2: string;
        cid1: string;
        cid2: string;
        static write(outs: iceNS0.Ice.OutputStream, value: NegoTransferT): void;
        static read(ins: iceNS0.Ice.InputStream): NegoTransferT;
    }

    class NegoTransferRT {
        constructor(cid?: string);
        clone(): NegoTransferRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: NegoTransferRT): void;
        static read(ins: iceNS0.Ice.InputStream): NegoTransferRT;
    }

    class PlayAudioT {
        constructor(fname?: string, empid?: string, cid?: string, state?: Dispatcher.PlayAudioType, uuid?: string);
        clone(): PlayAudioT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fname: string;
        empid: string;
        cid: string;
        state: Dispatcher.PlayAudioType;
        uuid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PlayAudioT): void;
        static read(ins: iceNS0.Ice.InputStream): PlayAudioT;
    }

    class PlayAudioRT {
        constructor(code?: number);
        clone(): PlayAudioRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        code: number;
        static write(outs: iceNS0.Ice.OutputStream, value: PlayAudioRT): void;
        static read(ins: iceNS0.Ice.InputStream): PlayAudioRT;
    }

    class CallCommonT {
        constructor(cid?: string, caller?: string, called?: string);
        clone(): CallCommonT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        caller: string;
        called: string;
        static write(outs: iceNS0.Ice.OutputStream, value: CallCommonT): void;
        static read(ins: iceNS0.Ice.InputStream): CallCommonT;
    }

    class CallCommonRET {
        constructor(cid?: string, caller?: string, callee?: string);
        clone(): CallCommonRET;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        caller: string;
        callee: string;
        static write(outs: iceNS0.Ice.OutputStream, value: CallCommonRET): void;
        static read(ins: iceNS0.Ice.InputStream): CallCommonRET;
    }

    type CallCommonRESeq = CallCommonRET[];

    class CallCommonRESeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: CallCommonRESeq): void;
        static read(ins: iceNS0.Ice.InputStream): CallCommonRESeq;
    }

    class CallCommonRT {
        constructor(seq?: CallCommonRESeq);
        clone(): CallCommonRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        seq: CallCommonRESeq;
        static write(outs: iceNS0.Ice.OutputStream, value: CallCommonRT): void;
        static read(ins: iceNS0.Ice.InputStream): CallCommonRT;
    }

    class SpeakerT {
        constructor(cid?: string, employeeid?: string, speakertypea?: Dispatcher.SpeakType);
        clone(): SpeakerT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        employeeid: string;
        speakertypea: Dispatcher.SpeakType;
        static write(outs: iceNS0.Ice.OutputStream, value: SpeakerT): void;
        static read(ins: iceNS0.Ice.InputStream): SpeakerT;
    }

    class SpeakerRT {
        constructor(code?: number);
        clone(): SpeakerRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        code: number;
        static write(outs: iceNS0.Ice.OutputStream, value: SpeakerRT): void;
        static read(ins: iceNS0.Ice.InputStream): SpeakerRT;
    }

    class HearT {
        constructor(cid?: string, number?: string, hear?: Dispatcher.HearType);
        clone(): HearT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        number: string;
        hear: Dispatcher.HearType;
        static write(outs: iceNS0.Ice.OutputStream, value: HearT): void;
        static read(ins: iceNS0.Ice.InputStream): HearT;
    }

    class HearRT {
        constructor(code?: number);
        clone(): HearRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        code: number;
        static write(outs: iceNS0.Ice.OutputStream, value: HearRT): void;
        static read(ins: iceNS0.Ice.InputStream): HearRT;
    }

    class ForceEndConfeT {
        constructor(cid?: string, employeeid?: string);
        clone(): ForceEndConfeT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ForceEndConfeT): void;
        static read(ins: iceNS0.Ice.InputStream): ForceEndConfeT;
    }

    class HoldT {
        constructor(cid?: string, htype?: Dispatcher.HoldType);
        clone(): HoldT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        htype: Dispatcher.HoldType;
        static write(outs: iceNS0.Ice.OutputStream, value: HoldT): void;
        static read(ins: iceNS0.Ice.InputStream): HoldT;
    }

    class HoldRT {
        constructor(cid?: string);
        clone(): HoldRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: HoldRT): void;
        static read(ins: iceNS0.Ice.InputStream): HoldRT;
    }

    class HangupT {
        constructor(cid?: string);
        clone(): HangupT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: HangupT): void;
        static read(ins: iceNS0.Ice.InputStream): HangupT;
    }

    class HangupT1 {
        constructor(cid?: string, member?: string);
        clone(): HangupT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        member: string;
        static write(outs: iceNS0.Ice.OutputStream, value: HangupT1): void;
        static read(ins: iceNS0.Ice.InputStream): HangupT1;
    }

    class HangupRT {
        constructor(cid?: string);
        clone(): HangupRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: HangupRT): void;
        static read(ins: iceNS0.Ice.InputStream): HangupRT;
    }

    class CalleeT {
        constructor(employeeid?: string);
        clone(): CalleeT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: CalleeT): void;
        static read(ins: iceNS0.Ice.InputStream): CalleeT;
    }

    type CalleeSeq = CalleeT[];

    class CalleeSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: CalleeSeq): void;
        static read(ins: iceNS0.Ice.InputStream): CalleeSeq;
    }

    class CreateConfT {
        constructor(member?: CalleeSeq, sessname?: string, sessnum?: string, caller?: string, ctype?: Dispatcher.CallType, isVideo?: Dispatcher.MediaType);
        clone(): CreateConfT;
        equals(rhs: any): boolean;
        hashCode(): number;
        member: CalleeSeq;
        sessname: string;
        sessnum: string;
        caller: string;
        ctype: Dispatcher.CallType;
        isVideo: Dispatcher.MediaType;
        static write(outs: iceNS0.Ice.OutputStream, value: CreateConfT): void;
        static read(ins: iceNS0.Ice.InputStream): CreateConfT;
    }

    class CreateMcuConfT {
        constructor(member?: CalleeSeq, sessname?: string, sessnum?: string, caller?: string, ctype?: Dispatcher.CallType, isVideo?: Dispatcher.MediaType, isMcuCall?: boolean);
        clone(): CreateMcuConfT;
        equals(rhs: any): boolean;
        hashCode(): number;
        member: CalleeSeq;
        sessname: string;
        sessnum: string;
        caller: string;
        ctype: Dispatcher.CallType;
        isVideo: Dispatcher.MediaType;
        isMcuCall: boolean;
        static write(outs: iceNS0.Ice.OutputStream, value: CreateMcuConfT): void;
        static read(ins: iceNS0.Ice.InputStream): CreateMcuConfT;
    }

    class CreateMcuConf1T {
        constructor(member?: CalleeSeq, sessname?: string, sessnum?: string, caller?: string, ctype?: Dispatcher.CallType, isVideo?: Dispatcher.MediaType, isMcuCall?: boolean, defaultsdp?: string);
        clone(): CreateMcuConf1T;
        equals(rhs: any): boolean;
        hashCode(): number;
        member: CalleeSeq;
        sessname: string;
        sessnum: string;
        caller: string;
        ctype: Dispatcher.CallType;
        isVideo: Dispatcher.MediaType;
        isMcuCall: boolean;
        defaultsdp: string;
        static write(outs: iceNS0.Ice.OutputStream, value: CreateMcuConf1T): void;
        static read(ins: iceNS0.Ice.InputStream): CreateMcuConf1T;
    }

    class CreateConf1T {
        constructor(member?: CalleeSeq, sessname?: string, sessnum?: string, caller?: string, ctype?: Dispatcher.CallType, isVideo?: Dispatcher.MediaType, isMcuCall?: boolean, defaultsdp?: string);
        clone(): CreateConf1T;
        equals(rhs: any): boolean;
        hashCode(): number;
        member: CalleeSeq;
        sessname: string;
        sessnum: string;
        caller: string;
        ctype: Dispatcher.CallType;
        isVideo: Dispatcher.MediaType;
        isMcuCall: boolean;
        defaultsdp: string;
        static write(outs: iceNS0.Ice.OutputStream, value: CreateConf1T): void;
        static read(ins: iceNS0.Ice.InputStream): CreateConf1T;
    }

    class CreateConfRT {
        constructor(sessnum?: string, cid?: string, empid?: string);
        clone(): CreateConfRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sessnum: string;
        cid: string;
        empid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: CreateConfRT): void;
        static read(ins: iceNS0.Ice.InputStream): CreateConfRT;
    }

    class AddMemberT {
        constructor(cid?: string, number?: string, astype?: Dispatcher.AnswerType);
        clone(): AddMemberT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        number: string;
        astype: Dispatcher.AnswerType;
        static write(outs: iceNS0.Ice.OutputStream, value: AddMemberT): void;
        static read(ins: iceNS0.Ice.InputStream): AddMemberT;
    }

    class AddMemberRT {
        constructor(cid?: string, empid?: string);
        clone(): AddMemberRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        empid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: AddMemberRT): void;
        static read(ins: iceNS0.Ice.InputStream): AddMemberRT;
    }

    class DelMemberT {
        constructor(cid?: string, number?: string);
        clone(): DelMemberT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        number: string;
        static write(outs: iceNS0.Ice.OutputStream, value: DelMemberT): void;
        static read(ins: iceNS0.Ice.InputStream): DelMemberT;
    }

    class DelMemberRT {
        constructor(cid?: string, empid?: string);
        clone(): DelMemberRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        empid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: DelMemberRT): void;
        static read(ins: iceNS0.Ice.InputStream): DelMemberRT;
    }

    class AllCallMemberT {
        constructor(sid?: string, cid?: string);
        clone(): AllCallMemberT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        cid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: AllCallMemberT): void;
        static read(ins: iceNS0.Ice.InputStream): AllCallMemberT;
    }

    class AllCallMemberRT {
        constructor(cid?: string, employeeid?: string, name?: string, type?: number, state?: Dispatcher.CallState, stateDecorate?: string);
        clone(): AllCallMemberRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        employeeid: string;
        name: string;
        type: number;
        state: Dispatcher.CallState;
        stateDecorate: string;
        static write(outs: iceNS0.Ice.OutputStream, value: AllCallMemberRT): void;
        static read(ins: iceNS0.Ice.InputStream): AllCallMemberRT;
    }

    type AllCallMemberRSeq = AllCallMemberRT[];

    class AllCallMemberRSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: AllCallMemberRSeq): void;
        static read(ins: iceNS0.Ice.InputStream): AllCallMemberRSeq;
    }

    class PullQueueCallT {
        constructor(cid?: string, caller?: string);
        clone(): PullQueueCallT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        caller: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PullQueueCallT): void;
        static read(ins: iceNS0.Ice.InputStream): PullQueueCallT;
    }

    class PushCallToQueueT {
        constructor(cid?: string, RoadParameters?: string);
        clone(): PushCallToQueueT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        RoadParameters: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PushCallToQueueT): void;
        static read(ins: iceNS0.Ice.InputStream): PushCallToQueueT;
    }

    class PushCallToQueueT1 {
        constructor(cid?: string, member?: string, RoadParameters?: string);
        clone(): PushCallToQueueT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        member: string;
        RoadParameters: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PushCallToQueueT1): void;
        static read(ins: iceNS0.Ice.InputStream): PushCallToQueueT1;
    }

    class GetAllSessionT {
        constructor(employeeid?: string);
        clone(): GetAllSessionT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetAllSessionT): void;
        static read(ins: iceNS0.Ice.InputStream): GetAllSessionT;
    }

    class GetAllSession1T {
        constructor(employeeid?: string, cType?: Dispatcher.CallType);
        clone(): GetAllSession1T;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        cType: Dispatcher.CallType;
        static write(outs: iceNS0.Ice.OutputStream, value: GetAllSession1T): void;
        static read(ins: iceNS0.Ice.InputStream): GetAllSession1T;
    }

    class SendDTMFbyCidT {
        constructor(cid?: string, member?: string, strdtmf?: string);
        clone(): SendDTMFbyCidT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        member: string;
        strdtmf: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SendDTMFbyCidT): void;
        static read(ins: iceNS0.Ice.InputStream): SendDTMFbyCidT;
    }

    class OrderDetailT {
        constructor(number?: string, index?: number, ringtime?: number);
        clone(): OrderDetailT;
        equals(rhs: any): boolean;
        hashCode(): number;
        number: string;
        index: number;
        ringtime: number;
        static write(outs: iceNS0.Ice.OutputStream, value: OrderDetailT): void;
        static read(ins: iceNS0.Ice.InputStream): OrderDetailT;
    }

    type OrderDetailSeq = OrderDetailT[];

    class OrderDetailSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: OrderDetailSeq): void;
        static read(ins: iceNS0.Ice.InputStream): OrderDetailSeq;
    }

    class OrderCalledT {
        constructor(called?: string, details?: OrderDetailSeq);
        clone(): OrderCalledT;
        equals(rhs: any): boolean;
        hashCode(): number;
        called: string;
        details: OrderDetailSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: OrderCalledT): void;
        static read(ins: iceNS0.Ice.InputStream): OrderCalledT;
    }

    type OrderCalledSeq = OrderCalledT[];

    class OrderCalledSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: OrderCalledSeq): void;
        static read(ins: iceNS0.Ice.InputStream): OrderCalledSeq;
    }

    class CalledOrderT {
        constructor(calleds?: OrderCalledSeq, sessname?: string, sessnum?: string, caller?: string, ctype?: Dispatcher.CallType, isVideo?: Dispatcher.MediaType);
        clone(): CalledOrderT;
        equals(rhs: any): boolean;
        hashCode(): number;
        calleds: OrderCalledSeq;
        sessname: string;
        sessnum: string;
        caller: string;
        ctype: Dispatcher.CallType;
        isVideo: Dispatcher.MediaType;
        static write(outs: iceNS0.Ice.OutputStream, value: CalledOrderT): void;
        static read(ins: iceNS0.Ice.InputStream): CalledOrderT;
    }

    class CalledOrderRT {
        constructor(sessnum?: string, cid?: string, empid?: string);
        clone(): CalledOrderRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sessnum: string;
        cid: string;
        empid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: CalledOrderRT): void;
        static read(ins: iceNS0.Ice.InputStream): CalledOrderRT;
    }

    class AddMemberByCallOrderT {
        constructor(cid?: string, number?: string, astype?: Dispatcher.AnswerType, details?: OrderDetailSeq);
        clone(): AddMemberByCallOrderT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        number: string;
        astype: Dispatcher.AnswerType;
        details: OrderDetailSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: AddMemberByCallOrderT): void;
        static read(ins: iceNS0.Ice.InputStream): AddMemberByCallOrderT;
    }

    class ReCallDetailT {
        constructor(number?: string, callnum?: number);
        clone(): ReCallDetailT;
        equals(rhs: any): boolean;
        hashCode(): number;
        number: string;
        callnum: number;
        static write(outs: iceNS0.Ice.OutputStream, value: ReCallDetailT): void;
        static read(ins: iceNS0.Ice.InputStream): ReCallDetailT;
    }

    type ReCallDetailSeq = ReCallDetailT[];

    class ReCallDetailSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: ReCallDetailSeq): void;
        static read(ins: iceNS0.Ice.InputStream): ReCallDetailSeq;
    }

    class SetReCallNumberT {
        constructor(cid?: string, details?: ReCallDetailSeq);
        clone(): SetReCallNumberT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        details: ReCallDetailSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: SetReCallNumberT): void;
        static read(ins: iceNS0.Ice.InputStream): SetReCallNumberT;
    }

    class AllCallMemberRT1 {
        constructor(cid?: string, employeeid?: string, name?: string, type?: number, state?: Dispatcher.CallState, stateDecorate?: string, level?: number, IsReCall?: boolean, ReCallNum?: number);
        clone(): AllCallMemberRT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        employeeid: string;
        name: string;
        type: number;
        state: Dispatcher.CallState;
        stateDecorate: string;
        level: number;
        IsReCall: boolean;
        ReCallNum: number;
        static write(outs: iceNS0.Ice.OutputStream, value: AllCallMemberRT1): void;
        static read(ins: iceNS0.Ice.InputStream): AllCallMemberRT1;
    }

    type AllCallMemberRSeq1 = AllCallMemberRT1[];

    class AllCallMemberRSeq1Helper {
        static write(outs: iceNS0.Ice.OutputStream, value: AllCallMemberRSeq1): void;
        static read(ins: iceNS0.Ice.InputStream): AllCallMemberRSeq1;
    }

    class SessionJoinT {
        constructor(cid?: string);
        clone(): SessionJoinT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SessionJoinT): void;
        static read(ins: iceNS0.Ice.InputStream): SessionJoinT;
    }

    type SessionJoinSeq = SessionJoinT[];

    class SessionJoinSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: SessionJoinSeq): void;
        static read(ins: iceNS0.Ice.InputStream): SessionJoinSeq;
    }

    class CreateSOSCallT {
        constructor(member?: CalleeSeq, sessname?: string, sessnum?: string, caller?: string, isVideo?: Dispatcher.MediaType);
        clone(): CreateSOSCallT;
        equals(rhs: any): boolean;
        hashCode(): number;
        member: CalleeSeq;
        sessname: string;
        sessnum: string;
        caller: string;
        isVideo: Dispatcher.MediaType;
        static write(outs: iceNS0.Ice.OutputStream, value: CreateSOSCallT): void;
        static read(ins: iceNS0.Ice.InputStream): CreateSOSCallT;
    }

    class UploadVideoCallT {
        constructor(member?: CalleeSeq, sessname?: string, sessnum?: string, caller?: string, isVideo?: Dispatcher.MediaType);
        clone(): UploadVideoCallT;
        equals(rhs: any): boolean;
        hashCode(): number;
        member: CalleeSeq;
        sessname: string;
        sessnum: string;
        caller: string;
        isVideo: Dispatcher.MediaType;
        static write(outs: iceNS0.Ice.OutputStream, value: UploadVideoCallT): void;
        static read(ins: iceNS0.Ice.InputStream): UploadVideoCallT;
    }

    class TransferVideoT {
        constructor(sessname?: string, sessnum?: string, srccid?: string, srcnumber?: string, calleds?: OrderCalledSeq);
        clone(): TransferVideoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sessname: string;
        sessnum: string;
        srccid: string;
        srcnumber: string;
        calleds: OrderCalledSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: TransferVideoT): void;
        static read(ins: iceNS0.Ice.InputStream): TransferVideoT;
    }

    class TransferVideoToMCUT {
        constructor(sessname?: string, sessnum?: string, srccid?: string, srcnumber?: string, defaultcode?: string, calleds?: OrderCalledSeq);
        clone(): TransferVideoToMCUT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sessname: string;
        sessnum: string;
        srccid: string;
        srcnumber: string;
        defaultcode: string;
        calleds: OrderCalledSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: TransferVideoToMCUT): void;
        static read(ins: iceNS0.Ice.InputStream): TransferVideoToMCUT;
    }

    class TransferVideoRT {
        constructor(newcid?: string);
        clone(): TransferVideoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        newcid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: TransferVideoRT): void;
        static read(ins: iceNS0.Ice.InputStream): TransferVideoRT;
    }

    class AddMemberT1 {
        constructor(cid?: string, number?: string, astype?: Dispatcher.AnswerType, speakertypea?: Dispatcher.SpeakType, hear?: Dispatcher.HearType, RoadParameters?: string, details?: OrderDetailSeq);
        clone(): AddMemberT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        number: string;
        astype: Dispatcher.AnswerType;
        speakertypea: Dispatcher.SpeakType;
        hear: Dispatcher.HearType;
        RoadParameters: string;
        details: OrderDetailSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: AddMemberT1): void;
        static read(ins: iceNS0.Ice.InputStream): AddMemberT1;
    }

    abstract class CallingOPPrx extends iceNS0.Ice.ObjectPrx {
        opNegoTransfer(id: Dispatcher.Identity, _in: NegoTransferT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<NegoTransferRT>;
        opPlayAudio(id: Dispatcher.Identity, _in: PlayAudioT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<PlayAudioRT>;
        opSubstitute(id: Dispatcher.Identity, _in: CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CallCommonRT>;
        opSpeaker(id: Dispatcher.Identity, _in: SpeakerT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<SpeakerRT>;
        opHear(id: Dispatcher.Identity, _in: HearT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<HearRT>;
        opForceEndConfe(id: Dispatcher.Identity, _in: ForceEndConfeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CommonRequestT>;
        opRemove(id: Dispatcher.Identity, _in: CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CallCommonRT>;
        opRemoveOther(id: Dispatcher.Identity, _in: CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CallCommonRT>;
        opInterpose(id: Dispatcher.Identity, _in: CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CallCommonRT>;
        opMonitor(id: Dispatcher.Identity, _in: CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CallCommonRT>;
        opSwitch(id: Dispatcher.Identity, _in: CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CallCommonRT>;
        opHold(id: Dispatcher.Identity, _in: HoldT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<HoldRT>;
        opHangup(id: Dispatcher.Identity, _in: HangupT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<HangupRT>;
        opHangup1(id: Dispatcher.Identity, _in: HangupT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<HangupRT>;
        opCreateConf(id: Dispatcher.Identity, _in: CreateConfT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CreateConfRT>;
        opCreateMcuConf(id: Dispatcher.Identity, _in: CreateMcuConfT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CreateConfRT>;
        opCreateMcuConf1(id: Dispatcher.Identity, _in: CreateMcuConf1T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CreateConfRT>;
        opCreateConf1(id: Dispatcher.Identity, _in: CreateConf1T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CreateConfRT>;
        opAddMember(id: Dispatcher.Identity, _in: AddMemberT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<AddMemberRT>;
        opDelMember(id: Dispatcher.Identity, _in: DelMemberT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<DelMemberRT>;
        opAllCallMember(id: Dispatcher.Identity, _in: AllCallMemberT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<AllCallMemberRSeq>;
        opPullQueueCall(id: Dispatcher.Identity, _in: PullQueueCallT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CommonRequestT>;
        opPushCallToQueue(id: Dispatcher.Identity, _in: PushCallToQueueT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CommonRequestT>;
        opPushCallToQueue1(id: Dispatcher.Identity, _in: PushCallToQueueT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CommonRequestT>;
        opGetAllSession(id: Dispatcher.Identity, _in: GetAllSessionT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SessionChangeTSeq>;
        opGetAllSession1(id: Dispatcher.Identity, _in: GetAllSession1T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SessionChangeTSeq>;
        opSendDTMFbyCid(id: Dispatcher.Identity, _in: SendDTMFbyCidT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opCreateByCallOrder(id: Dispatcher.Identity, _in: CalledOrderT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CalledOrderRT>;
        opAddMemberByCallOrder(id: Dispatcher.Identity, _in: AddMemberByCallOrderT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opSetReCallNumber(id: Dispatcher.Identity, _in: SetReCallNumberT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opAllCallMember1(id: Dispatcher.Identity, _in: AllCallMemberT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<AllCallMemberRSeq1>;
        opSessionJoin(id: Dispatcher.Identity, in1: SessionJoinSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CreateConfRT>;
        opCreateSOSCall(id: Dispatcher.Identity, in1: CreateSOSCallT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CreateConfRT>;
        opTransferVideo(id: Dispatcher.Identity, in1: TransferVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<TransferVideoRT>;
        opTransferVideoToMcu(id: Dispatcher.Identity, in1: TransferVideoToMCUT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<TransferVideoRT>;
        opCreateUpLoadVideoCall(id: Dispatcher.Identity, in1: UploadVideoCallT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<CreateConfRT>;
        opTempSessionJoin(id: Dispatcher.Identity, in1: SessionJoinSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<SessionJoinSeq>;
        opAddMember1(id: Dispatcher.Identity, _in: AddMemberT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<AddMemberRT>;
        opIntercomRecall(id: Dispatcher.Identity, _in: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opAllCallMember2(id: Dispatcher.Identity, cid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opCreatePlayFileMetting(id: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): CallingOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<CallingOPPrx>;
    }

    abstract class CallingOP extends iceNS0.Ice.Object {
        abstract opNegoTransfer(id: Dispatcher.Identity, _in: NegoTransferT, current: iceNS0.Ice.Current): PromiseLike<NegoTransferRT> | NegoTransferRT;
        abstract opPlayAudio(id: Dispatcher.Identity, _in: PlayAudioT, current: iceNS0.Ice.Current): PromiseLike<PlayAudioRT> | PlayAudioRT;
        abstract opSubstitute(id: Dispatcher.Identity, _in: CallCommonT, current: iceNS0.Ice.Current): PromiseLike<CallCommonRT> | CallCommonRT;
        abstract opSpeaker(id: Dispatcher.Identity, _in: SpeakerT, current: iceNS0.Ice.Current): PromiseLike<SpeakerRT> | SpeakerRT;
        abstract opHear(id: Dispatcher.Identity, _in: HearT, current: iceNS0.Ice.Current): PromiseLike<HearRT> | HearRT;
        abstract opForceEndConfe(id: Dispatcher.Identity, _in: ForceEndConfeT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CommonRequestT> | Dispatcher.CommonRequestT;
        abstract opRemove(id: Dispatcher.Identity, _in: CallCommonT, current: iceNS0.Ice.Current): PromiseLike<CallCommonRT> | CallCommonRT;
        abstract opRemoveOther(id: Dispatcher.Identity, _in: CallCommonT, current: iceNS0.Ice.Current): PromiseLike<CallCommonRT> | CallCommonRT;
        abstract opInterpose(id: Dispatcher.Identity, _in: CallCommonT, current: iceNS0.Ice.Current): PromiseLike<CallCommonRT> | CallCommonRT;
        abstract opMonitor(id: Dispatcher.Identity, _in: CallCommonT, current: iceNS0.Ice.Current): PromiseLike<CallCommonRT> | CallCommonRT;
        abstract opSwitch(id: Dispatcher.Identity, _in: CallCommonT, current: iceNS0.Ice.Current): PromiseLike<CallCommonRT> | CallCommonRT;
        abstract opHold(id: Dispatcher.Identity, _in: HoldT, current: iceNS0.Ice.Current): PromiseLike<HoldRT> | HoldRT;
        abstract opHangup(id: Dispatcher.Identity, _in: HangupT, current: iceNS0.Ice.Current): PromiseLike<HangupRT> | HangupRT;
        abstract opHangup1(id: Dispatcher.Identity, _in: HangupT1, current: iceNS0.Ice.Current): PromiseLike<HangupRT> | HangupRT;
        abstract opCreateConf(id: Dispatcher.Identity, _in: CreateConfT, current: iceNS0.Ice.Current): PromiseLike<CreateConfRT> | CreateConfRT;
        abstract opCreateMcuConf(id: Dispatcher.Identity, _in: CreateMcuConfT, current: iceNS0.Ice.Current): PromiseLike<CreateConfRT> | CreateConfRT;
        abstract opCreateMcuConf1(id: Dispatcher.Identity, _in: CreateMcuConf1T, current: iceNS0.Ice.Current): PromiseLike<CreateConfRT> | CreateConfRT;
        abstract opCreateConf1(id: Dispatcher.Identity, _in: CreateConf1T, current: iceNS0.Ice.Current): PromiseLike<CreateConfRT> | CreateConfRT;
        abstract opAddMember(id: Dispatcher.Identity, _in: AddMemberT, current: iceNS0.Ice.Current): PromiseLike<AddMemberRT> | AddMemberRT;
        abstract opDelMember(id: Dispatcher.Identity, _in: DelMemberT, current: iceNS0.Ice.Current): PromiseLike<DelMemberRT> | DelMemberRT;
        abstract opAllCallMember(id: Dispatcher.Identity, _in: AllCallMemberT, current: iceNS0.Ice.Current): PromiseLike<AllCallMemberRSeq> | AllCallMemberRSeq;
        abstract opPullQueueCall(id: Dispatcher.Identity, _in: PullQueueCallT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CommonRequestT> | Dispatcher.CommonRequestT;
        abstract opPushCallToQueue(id: Dispatcher.Identity, _in: PushCallToQueueT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CommonRequestT> | Dispatcher.CommonRequestT;
        abstract opPushCallToQueue1(id: Dispatcher.Identity, _in: PushCallToQueueT1, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CommonRequestT> | Dispatcher.CommonRequestT;
        abstract opGetAllSession(id: Dispatcher.Identity, _in: GetAllSessionT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SessionChangeTSeq> | Dispatcher.SessionChangeTSeq;
        abstract opGetAllSession1(id: Dispatcher.Identity, _in: GetAllSession1T, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SessionChangeTSeq> | Dispatcher.SessionChangeTSeq;
        abstract opSendDTMFbyCid(id: Dispatcher.Identity, _in: SendDTMFbyCidT, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opCreateByCallOrder(id: Dispatcher.Identity, _in: CalledOrderT, current: iceNS0.Ice.Current): PromiseLike<CalledOrderRT> | CalledOrderRT;
        abstract opAddMemberByCallOrder(id: Dispatcher.Identity, _in: AddMemberByCallOrderT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opSetReCallNumber(id: Dispatcher.Identity, _in: SetReCallNumberT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opAllCallMember1(id: Dispatcher.Identity, _in: AllCallMemberT, current: iceNS0.Ice.Current): PromiseLike<AllCallMemberRSeq1> | AllCallMemberRSeq1;
        abstract opSessionJoin(id: Dispatcher.Identity, in1: SessionJoinSeq, current: iceNS0.Ice.Current): PromiseLike<CreateConfRT> | CreateConfRT;
        abstract opCreateSOSCall(id: Dispatcher.Identity, in1: CreateSOSCallT, current: iceNS0.Ice.Current): PromiseLike<CreateConfRT> | CreateConfRT;
        abstract opTransferVideo(id: Dispatcher.Identity, in1: TransferVideoT, current: iceNS0.Ice.Current): PromiseLike<TransferVideoRT> | TransferVideoRT;
        abstract opTransferVideoToMcu(id: Dispatcher.Identity, in1: TransferVideoToMCUT, current: iceNS0.Ice.Current): PromiseLike<TransferVideoRT> | TransferVideoRT;
        abstract opCreateUpLoadVideoCall(id: Dispatcher.Identity, in1: UploadVideoCallT, current: iceNS0.Ice.Current): PromiseLike<CreateConfRT> | CreateConfRT;
        abstract opTempSessionJoin(id: Dispatcher.Identity, in1: SessionJoinSeq, current: iceNS0.Ice.Current): PromiseLike<SessionJoinSeq> | SessionJoinSeq;
        abstract opAddMember1(id: Dispatcher.Identity, _in: AddMemberT1, current: iceNS0.Ice.Current): PromiseLike<AddMemberRT> | AddMemberRT;
        abstract opIntercomRecall(id: Dispatcher.Identity, _in: string, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opAllCallMember2(id: Dispatcher.Identity, cid: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opCreatePlayFileMetting(id: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::CallingOP".
         */
        static ice_staticId(): string;
    }

    abstract class CallingSBPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): CallingSBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<CallingSBPrx>;
    }

    abstract class CallingSB extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::CallingSB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    abstract class CallingVCBPrx extends iceNS0.Ice.ObjectPrx {
        onSendVideoEv(_in: Dispatcher.SendVideoEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onGetVideoEv(_in: Dispatcher.GetVideoEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): CallingVCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<CallingVCBPrx>;
    }

    abstract class CallingVCB extends iceNS0.Ice.Object {
        abstract onSendVideoEv(_in: Dispatcher.SendVideoEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onGetVideoEv(_in: Dispatcher.GetVideoEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::CallingVCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class SendVideoT {
        constructor(sid?: string, cid?: string, employeeid?: string, ip?: string, port?: string, codec?: string, stream?: string, framerate?: string, agentid?: string);
        clone(): SendVideoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        cid: string;
        employeeid: string;
        ip: string;
        port: string;
        codec: string;
        stream: string;
        framerate: string;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SendVideoT): void;
        static read(ins: iceNS0.Ice.InputStream): SendVideoT;
    }

    class SendVideoRT {
        constructor(sid?: string, ip?: string, port?: string, agentid?: string);
        clone(): SendVideoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        ip: string;
        port: string;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SendVideoRT): void;
        static read(ins: iceNS0.Ice.InputStream): SendVideoRT;
    }

    class GetVideoT {
        constructor(sid?: string, cid?: string, employeeid?: string, ip?: string, port?: string, employeeiddst?: string, codec?: string, stream?: string, framerate?: string, agentid?: string);
        clone(): GetVideoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        cid: string;
        employeeid: string;
        ip: string;
        port: string;
        employeeiddst: string;
        codec: string;
        stream: string;
        framerate: string;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetVideoT): void;
        static read(ins: iceNS0.Ice.InputStream): GetVideoT;
    }

    class GetVideoRT {
        constructor(sid?: string, cid?: string);
        clone(): GetVideoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        cid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetVideoRT): void;
        static read(ins: iceNS0.Ice.InputStream): GetVideoRT;
    }

    class ChangeVideoT {
        constructor(sid?: string, cid?: string, employeeid?: string, ip?: string, port?: string, employeeiddst?: string, codec?: string, stream?: string, framerate?: string, agentid?: string);
        clone(): ChangeVideoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        cid: string;
        employeeid: string;
        ip: string;
        port: string;
        employeeiddst: string;
        codec: string;
        stream: string;
        framerate: string;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ChangeVideoT): void;
        static read(ins: iceNS0.Ice.InputStream): ChangeVideoT;
    }

    class ChangeVideoRT {
        constructor(sid?: string, streamid?: string, ip?: string, port?: string, codec?: string, stream?: string, framerate?: string, agentid?: string);
        clone(): ChangeVideoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        streamid: string;
        ip: string;
        port: string;
        codec: string;
        stream: string;
        framerate: string;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ChangeVideoRT): void;
        static read(ins: iceNS0.Ice.InputStream): ChangeVideoRT;
    }

    class ReleaseVideoT {
        constructor(sid?: string, cid?: string, employeeid?: string, ip?: string, port?: string, streamid?: string, employeeiddst?: string, agentid?: string);
        clone(): ReleaseVideoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        cid: string;
        employeeid: string;
        ip: string;
        port: string;
        streamid: string;
        employeeiddst: string;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ReleaseVideoT): void;
        static read(ins: iceNS0.Ice.InputStream): ReleaseVideoT;
    }

    class ReleaseVideoRT {
        constructor(sid?: string, agentid?: string);
        clone(): ReleaseVideoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ReleaseVideoRT): void;
        static read(ins: iceNS0.Ice.InputStream): ReleaseVideoRT;
    }

    class PushVideoT {
        constructor(sid?: string, cid?: string, employeeid?: string, streamid?: string, revid?: string, IsPush?: Dispatcher.PushVideoType, agentid?: string);
        clone(): PushVideoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        cid: string;
        employeeid: string;
        streamid: string;
        revid: string;
        IsPush: Dispatcher.PushVideoType;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PushVideoT): void;
        static read(ins: iceNS0.Ice.InputStream): PushVideoT;
    }

    class PushVideoRT {
        constructor(sid?: string, agentid?: string);
        clone(): PushVideoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PushVideoRT): void;
        static read(ins: iceNS0.Ice.InputStream): PushVideoRT;
    }

    class SendVideoEvT {
        constructor(sid?: string, ip?: string, port?: string, agentid?: string);
        clone(): SendVideoEvT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        ip: string;
        port: string;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SendVideoEvT): void;
        static read(ins: iceNS0.Ice.InputStream): SendVideoEvT;
    }

    class GetVideoEvT {
        constructor(sid?: string, streamid?: string, ip?: string, port?: string, codec?: string, stream?: string, framerate?: string, employeeid?: string, cid?: string, agentid?: string);
        clone(): GetVideoEvT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        streamid: string;
        ip: string;
        port: string;
        codec: string;
        stream: string;
        framerate: string;
        employeeid: string;
        cid: string;
        agentid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetVideoEvT): void;
        static read(ins: iceNS0.Ice.InputStream): GetVideoEvT;
    }

    class GetKeyFrameT {
        constructor(cid?: string, employeeid?: string, deviceid?: string);
        clone(): GetKeyFrameT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        employeeid: string;
        deviceid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetKeyFrameT): void;
        static read(ins: iceNS0.Ice.InputStream): GetKeyFrameT;
    }
}

export namespace Dispatcher {
    class GetMemberVideoRT {
        constructor(sid?: string, cid?: string, fsip?: string, fsport?: string);
        clone(): GetMemberVideoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        cid: string;
        fsip: string;
        fsport: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetMemberVideoRT): void;
        static read(ins: iceNS0.Ice.InputStream): GetMemberVideoRT;
    }

    type ReceiveNumSeq = string[];

    class ReceiveNumSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: ReceiveNumSeq): void;
        static read(ins: iceNS0.Ice.InputStream): ReceiveNumSeq;
    }

    class MCUPushMemberToOtherT {
        constructor(cid?: string, pushednum?: string, ReceiveNumbers?: ReceiveNumSeq);
        clone(): MCUPushMemberToOtherT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        pushednum: string;
        ReceiveNumbers: ReceiveNumSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: MCUPushMemberToOtherT): void;
        static read(ins: iceNS0.Ice.InputStream): MCUPushMemberToOtherT;
    }

    class StopMCUPushMemberToOtherT {
        constructor(cid?: string);
        clone(): StopMCUPushMemberToOtherT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: StopMCUPushMemberToOtherT): void;
        static read(ins: iceNS0.Ice.InputStream): StopMCUPushMemberToOtherT;
    }

    class SendVideoRT1 {
        constructor(sid?: string, ip?: string, port?: string, agentid?: string, codec?: string);
        clone(): SendVideoRT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        ip: string;
        port: string;
        agentid: string;
        codec: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SendVideoRT1): void;
        static read(ins: iceNS0.Ice.InputStream): SendVideoRT1;
    }

    abstract class CallingVOPPrx extends iceNS0.Ice.ObjectPrx {
        opSendVideo(id: Dispatcher.Identity, _in: Dispatcher.SendVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SendVideoRT>;
        opSendVideo1(id: Dispatcher.Identity, _in: Dispatcher.SendVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<SendVideoRT1>;
        opGetVideo(id: Dispatcher.Identity, _in: Dispatcher.GetVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GetVideoRT>;
        opChangeVideo(id: Dispatcher.Identity, _in: Dispatcher.ChangeVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.ChangeVideoRT>;
        opReleaseVideo(id: Dispatcher.Identity, _in: Dispatcher.ReleaseVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.ReleaseVideoRT>;
        opPushVideo(id: Dispatcher.Identity, _in: Dispatcher.PushVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PushVideoRT>;
        opGetKeyFrame(id: Dispatcher.Identity, _in: Dispatcher.GetKeyFrameT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetMemberVideo(id: Dispatcher.Identity, _in: Dispatcher.GetVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<GetMemberVideoRT>;
        opMCUPushMemberToOther(id: Dispatcher.Identity, in1: MCUPushMemberToOtherT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opStopMCUPushMemberToOther(id: Dispatcher.Identity, in1: StopMCUPushMemberToOtherT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetCallVideo(id: Dispatcher.Identity, _in: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSendCallVideo(id: Dispatcher.Identity, _in: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): CallingVOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<CallingVOPPrx>;
    }

    abstract class CallingVOP extends iceNS0.Ice.Object {
        abstract opSendVideo(id: Dispatcher.Identity, _in: Dispatcher.SendVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SendVideoRT> | Dispatcher.SendVideoRT;
        abstract opSendVideo1(id: Dispatcher.Identity, _in: Dispatcher.SendVideoT, current: iceNS0.Ice.Current): PromiseLike<SendVideoRT1> | SendVideoRT1;
        abstract opGetVideo(id: Dispatcher.Identity, _in: Dispatcher.GetVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GetVideoRT> | Dispatcher.GetVideoRT;
        abstract opChangeVideo(id: Dispatcher.Identity, _in: Dispatcher.ChangeVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.ChangeVideoRT> | Dispatcher.ChangeVideoRT;
        abstract opReleaseVideo(id: Dispatcher.Identity, _in: Dispatcher.ReleaseVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.ReleaseVideoRT> | Dispatcher.ReleaseVideoRT;
        abstract opPushVideo(id: Dispatcher.Identity, _in: Dispatcher.PushVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PushVideoRT> | Dispatcher.PushVideoRT;
        abstract opGetKeyFrame(id: Dispatcher.Identity, _in: Dispatcher.GetKeyFrameT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetMemberVideo(id: Dispatcher.Identity, _in: Dispatcher.GetVideoT, current: iceNS0.Ice.Current): PromiseLike<GetMemberVideoRT> | GetMemberVideoRT;
        abstract opMCUPushMemberToOther(id: Dispatcher.Identity, in1: MCUPushMemberToOtherT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opStopMCUPushMemberToOther(id: Dispatcher.Identity, in1: StopMCUPushMemberToOtherT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetCallVideo(id: Dispatcher.Identity, _in: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSendCallVideo(id: Dispatcher.Identity, _in: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::CallingVOP".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    abstract class CommSrvPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): CommSrvPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<CommSrvPrx>;
    }

    abstract class CommSrv extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::CommSrv".
         */
        static ice_staticId(): string;
    }

    abstract class CommCliPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): CommCliPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<CommCliPrx>;
    }

    abstract class CommCli extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::CommCli".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    abstract class ConfigureCBPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): ConfigureCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<ConfigureCBPrx>;
    }

    abstract class ConfigureCB extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::ConfigureCB".
         */
        static ice_staticId(): string;
    }

    abstract class ConfigureCBSubPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): ConfigureCBSubPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<ConfigureCBSubPrx>;
    }

    abstract class ConfigureCBSub extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::ConfigureCBSub".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class TreeT {
        constructor(userId?: string, groupnum?: string, dnsprefix?: string, type?: number);
        clone(): TreeT;
        equals(rhs: any): boolean;
        hashCode(): number;
        userId: string;
        groupnum: string;
        dnsprefix: string;
        type: number;
        static write(outs: iceNS0.Ice.OutputStream, value: TreeT): void;
        static read(ins: iceNS0.Ice.InputStream): TreeT;
    }

    class UserT extends iceNS0.Ice.Value {
        /**
         * One-shot constructor to initialize all data members.
         */
        constructor(userid?: string, username?: string, type?: number, dnsprefix?: string, islocal?: number, rstate?: Dispatcher.RegisterState, cstate?: Dispatcher.CallState, othernumber?: string, othername?: string);
        userid: string;
        username: string;
        type: number;
        dnsprefix: string;
        islocal: number;
        rstate: Dispatcher.RegisterState;
        cstate: Dispatcher.CallState;
        othernumber: string;
        othername: string;
    }

    type UserSeq = Dispatcher.UserT[];

    class UserSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: UserSeq): void;
        static read(ins: iceNS0.Ice.InputStream): UserSeq;
    }

    type GroupSeq = Dispatcher.GroupT[];

    class GroupSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: GroupSeq): void;
        static read(ins: iceNS0.Ice.InputStream): GroupSeq;
    }

    class GroupT extends iceNS0.Ice.Value {
        /**
         * One-shot constructor to initialize all data members.
         */
        constructor(id?: number, groupnum?: string, groupname?: string, type?: Dispatcher.GroupType, user?: UserSeq, group?: GroupSeq, dnsprefix?: string, islocal?: number, canshowall?: number);
        id: number;
        groupnum: string;
        groupname: string;
        type: Dispatcher.GroupType;
        user: UserSeq;
        group: GroupSeq;
        dnsprefix: string;
        islocal: number;
        canshowall: number;
    }

    class TreeRT extends iceNS0.Ice.Value {
        /**
         * One-shot constructor to initialize all data members.
         */
        constructor(roots?: GroupSeq);
        roots: GroupSeq;
    }

    class VersionElem {
        constructor(name?: string, type?: string, version?: string, time?: string);
        clone(): VersionElem;
        equals(rhs: any): boolean;
        hashCode(): number;
        name: string;
        type: string;
        version: string;
        time: string;
        static write(outs: iceNS0.Ice.OutputStream, value: VersionElem): void;
        static read(ins: iceNS0.Ice.InputStream): VersionElem;
    }

    type VersionSeq = VersionElem[];

    class VersionSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: VersionSeq): void;
        static read(ins: iceNS0.Ice.InputStream): VersionSeq;
    }

    class VersionEventT {
        constructor(vseq?: VersionSeq);
        clone(): VersionEventT;
        equals(rhs: any): boolean;
        hashCode(): number;
        vseq: VersionSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: VersionEventT): void;
        static read(ins: iceNS0.Ice.InputStream): VersionEventT;
    }

    class GetVersionT {
        constructor(dummy?: string);
        clone(): GetVersionT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dummy: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetVersionT): void;
        static read(ins: iceNS0.Ice.InputStream): GetVersionT;
    }

    class GetVersionRT {
        constructor(vseq?: VersionSeq);
        clone(): GetVersionRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        vseq: VersionSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: GetVersionRT): void;
        static read(ins: iceNS0.Ice.InputStream): GetVersionRT;
    }
}

export namespace Dispatcher {
    class FXDeviceNumberRT extends iceNS0.Ice.Value {
        /**
         * One-shot constructor to initialize all data members.
         */
        constructor(dev?: string, num?: string, name?: string, orgid?: string, domain?: string, latitude?: string, longitude?: string, remarks?: string);
        dev: string;
        num: string;
        name: string;
        orgid: string;
        domain: string;
        latitude: string;
        longitude: string;
        remarks: string;
    }

    type NumbersRT = Dispatcher.FXDeviceNumberRT[];

    class NumbersRTHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: NumbersRT): void;
        static read(ins: iceNS0.Ice.InputStream): NumbersRT;
    }

    type OrgsRT = Dispatcher.FXOrgRT[];

    class OrgsRTHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: OrgsRT): void;
        static read(ins: iceNS0.Ice.InputStream): OrgsRT;
    }

    class FXOrgRT extends iceNS0.Ice.Value {
        /**
         * One-shot constructor to initialize all data members.
         */
        constructor(id?: string, name?: string, parentid?: string, ldap?: string, domain?: string, remarks?: string, ordernum?: string, Orgs?: OrgsRT, Numbers?: NumbersRT);
        id: string;
        name: string;
        parentid: string;
        ldap: string;
        domain: string;
        remarks: string;
        ordernum: string;
        Orgs: OrgsRT;
        Numbers: NumbersRT;
    }

    class FXDeviceRT extends iceNS0.Ice.Value {
        /**
         * One-shot constructor to initialize all data members.
         */
        constructor(id?: string, name?: string, remarks?: string, Orgs?: OrgsRT);
        id: string;
        name: string;
        remarks: string;
        Orgs: OrgsRT;
    }

    class LocalDNSPrefixRT {
        constructor(prefix?: string);
        clone(): LocalDNSPrefixRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        prefix: string;
        static write(outs: iceNS0.Ice.OutputStream, value: LocalDNSPrefixRT): void;
        static read(ins: iceNS0.Ice.InputStream): LocalDNSPrefixRT;
    }

    type FXDeviceSeq = Dispatcher.FXDeviceRT[];

    class FXDeviceSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: FXDeviceSeq): void;
        static read(ins: iceNS0.Ice.InputStream): FXDeviceSeq;
    }

    class GetFXDeviceT {
        constructor(getdetail?: boolean, remarks?: string);
        clone(): GetFXDeviceT;
        equals(rhs: any): boolean;
        hashCode(): number;
        getdetail: boolean;
        remarks: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetFXDeviceT): void;
        static read(ins: iceNS0.Ice.InputStream): GetFXDeviceT;
    }

    class GetFXDeviceDetailT {
        constructor(fxDeviceid?: string, orgid?: string, remarks?: string);
        clone(): GetFXDeviceDetailT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fxDeviceid: string;
        orgid: string;
        remarks: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetFXDeviceDetailT): void;
        static read(ins: iceNS0.Ice.InputStream): GetFXDeviceDetailT;
    }

    class KeyConfig {
        constructor(Key?: string, Value1?: string);
        clone(): KeyConfig;
        equals(rhs: any): boolean;
        hashCode(): number;
        Key: string;
        Value1: string;
        static write(outs: iceNS0.Ice.OutputStream, value: KeyConfig): void;
        static read(ins: iceNS0.Ice.InputStream): KeyConfig;
    }

    type KeyConfigSeq = KeyConfig[];

    class KeyConfigSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: KeyConfigSeq): void;
        static read(ins: iceNS0.Ice.InputStream): KeyConfigSeq;
    }

    class MealConfig {
        constructor(id?: number, SetMealName?: string, SetMealState?: number, Details?: KeyConfigSeq);
        clone(): MealConfig;
        equals(rhs: any): boolean;
        hashCode(): number;
        id: number;
        SetMealName: string;
        SetMealState: number;
        Details: KeyConfigSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: MealConfig): void;
        static read(ins: iceNS0.Ice.InputStream): MealConfig;
    }

    class KeyConfig1 {
        constructor(TheKey?: string, TheValue?: string);
        clone(): KeyConfig1;
        equals(rhs: any): boolean;
        hashCode(): number;
        TheKey: string;
        TheValue: string;
        static write(outs: iceNS0.Ice.OutputStream, value: KeyConfig1): void;
        static read(ins: iceNS0.Ice.InputStream): KeyConfig1;
    }

    type KeyConfigSeq1 = KeyConfig1[];

    class KeyConfigSeq1Helper {
        static write(outs: iceNS0.Ice.OutputStream, value: KeyConfigSeq1): void;
        static read(ins: iceNS0.Ice.InputStream): KeyConfigSeq1;
    }

    class MealConfig1 {
        constructor(id?: number, SetMealName?: string, SetMealState?: number, Details?: KeyConfigSeq1);
        clone(): MealConfig1;
        equals(rhs: any): boolean;
        hashCode(): number;
        id: number;
        SetMealName: string;
        SetMealState: number;
        Details: KeyConfigSeq1;
        static write(outs: iceNS0.Ice.OutputStream, value: MealConfig1): void;
        static read(ins: iceNS0.Ice.InputStream): MealConfig1;
    }

    abstract class ConfigureOPPrx extends iceNS0.Ice.ObjectPrx {
        opTree(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.TreeRT>;
        opGetVersion(in0: Dispatcher.Identity, in1: Dispatcher.GetVersionT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GetVersionRT>;
        opGetLocalEmployeeByType(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.TreeRT>;
        opGetFXDevices(in0: Dispatcher.Identity, in1: GetFXDeviceT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<FXDeviceSeq>;
        opGetFXDevicesDetail(in0: Dispatcher.Identity, in1: GetFXDeviceDetailT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<FXDeviceSeq>;
        opGetConfigByKey(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opLocalPrefix(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<LocalDNSPrefixRT>;
        opGetConfigByKeys(in0: Dispatcher.Identity, in1: KeyConfigSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<KeyConfigSeq>;
        opGetMealConfig(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<MealConfig>;
        opGetConfigByKeys1(in0: Dispatcher.Identity, in1: KeyConfigSeq1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<KeyConfigSeq1>;
        opGetMealConfig1(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<MealConfig1>;
        opGetJsonTree(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetGroupDetail(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSetDeviceChannel(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetBSServerInfo(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetServiceLicenseInfo(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetOtherProgramInfo(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): ConfigureOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<ConfigureOPPrx>;
    }

    abstract class ConfigureOP extends iceNS0.Ice.Object {
        abstract opTree(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.TreeRT> | Dispatcher.TreeRT;
        abstract opGetVersion(in0: Dispatcher.Identity, in1: Dispatcher.GetVersionT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GetVersionRT> | Dispatcher.GetVersionRT;
        abstract opGetLocalEmployeeByType(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.TreeRT> | Dispatcher.TreeRT;
        abstract opGetFXDevices(in0: Dispatcher.Identity, in1: GetFXDeviceT, current: iceNS0.Ice.Current): PromiseLike<FXDeviceSeq> | FXDeviceSeq;
        abstract opGetFXDevicesDetail(in0: Dispatcher.Identity, in1: GetFXDeviceDetailT, current: iceNS0.Ice.Current): PromiseLike<FXDeviceSeq> | FXDeviceSeq;
        abstract opGetConfigByKey(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opLocalPrefix(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<LocalDNSPrefixRT> | LocalDNSPrefixRT;
        abstract opGetConfigByKeys(in0: Dispatcher.Identity, in1: KeyConfigSeq, current: iceNS0.Ice.Current): PromiseLike<KeyConfigSeq> | KeyConfigSeq;
        abstract opGetMealConfig(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<MealConfig> | MealConfig;
        abstract opGetConfigByKeys1(in0: Dispatcher.Identity, in1: KeyConfigSeq1, current: iceNS0.Ice.Current): PromiseLike<KeyConfigSeq1> | KeyConfigSeq1;
        abstract opGetMealConfig1(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<MealConfig1> | MealConfig1;
        abstract opGetJsonTree(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetGroupDetail(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSetDeviceChannel(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetBSServerInfo(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetServiceLicenseInfo(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetOtherProgramInfo(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::ConfigureOP".
         */
        static ice_staticId(): string;
    }

    abstract class ConfigureSBPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): ConfigureSBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<ConfigureSBPrx>;
    }

    abstract class ConfigureSB extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::ConfigureSB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    abstract class DecoderCBPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): DecoderCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<DecoderCBPrx>;
    }

    abstract class DecoderCB extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::DecoderCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class DecoderDeviceInfo {
        constructor(id?: string, videoip?: string, videoport?: string, user?: string, Password?: string, showname?: string, thetype?: number);
        clone(): DecoderDeviceInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        id: string;
        videoip: string;
        videoport: string;
        user: string;
        Password: string;
        showname: string;
        thetype: number;
        static write(outs: iceNS0.Ice.OutputStream, value: DecoderDeviceInfo): void;
        static read(ins: iceNS0.Ice.InputStream): DecoderDeviceInfo;
    }

    type DecoderDeviceInfoSeq = DecoderDeviceInfo[];

    class DecoderDeviceInfoSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: DecoderDeviceInfoSeq): void;
        static read(ins: iceNS0.Ice.InputStream): DecoderDeviceInfoSeq;
    }

    class DecoderDisplayChan {
        constructor(byChan?: number);
        clone(): DecoderDisplayChan;
        equals(rhs: any): boolean;
        hashCode(): number;
        byChan: number;
        static write(outs: iceNS0.Ice.OutputStream, value: DecoderDisplayChan): void;
        static read(ins: iceNS0.Ice.InputStream): DecoderDisplayChan;
    }

    type DecoderDisplayChanSeq = DecoderDisplayChan[];

    class DecoderDisplayChanSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: DecoderDisplayChanSeq): void;
        static read(ins: iceNS0.Ice.InputStream): DecoderDisplayChanSeq;
    }

    class DecoderDisplayCfg {
        constructor(Channelid?: number, dwWindowMode?: number, byAudio?: number, byVedioFormat?: number, dwResolution?: number, byJoinDecChans?: DecoderDisplayChanSeq, byDispChanType?: number);
        clone(): DecoderDisplayCfg;
        equals(rhs: any): boolean;
        hashCode(): number;
        Channelid: number;
        dwWindowMode: number;
        byAudio: number;
        byVedioFormat: number;
        dwResolution: number;
        byJoinDecChans: DecoderDisplayChanSeq;
        byDispChanType: number;
        static write(outs: iceNS0.Ice.OutputStream, value: DecoderDisplayCfg): void;
        static read(ins: iceNS0.Ice.InputStream): DecoderDisplayCfg;
    }

    type DecoderDisplayCfgSeq = DecoderDisplayCfg[];

    class DecoderDisplayCfgSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: DecoderDisplayCfgSeq): void;
        static read(ins: iceNS0.Ice.InputStream): DecoderDisplayCfgSeq;
    }
}

export namespace Dispatcher {
    class GetDisplayCfg {
        constructor(Decoderid?: string);
        clone(): GetDisplayCfg;
        equals(rhs: any): boolean;
        hashCode(): number;
        Decoderid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetDisplayCfg): void;
        static read(ins: iceNS0.Ice.InputStream): GetDisplayCfg;
    }

    class SetDecoderCfg {
        constructor(Decoderid?: string, Cfg?: Dispatcher.DecoderDisplayCfg);
        clone(): SetDecoderCfg;
        equals(rhs: any): boolean;
        hashCode(): number;
        Decoderid: string;
        Cfg: Dispatcher.DecoderDisplayCfg;
        static write(outs: iceNS0.Ice.OutputStream, value: SetDecoderCfg): void;
        static read(ins: iceNS0.Ice.InputStream): SetDecoderCfg;
    }

    class RetDecoderAllCfg {
        constructor(Decoderid?: string, Cfgs?: Dispatcher.DecoderDisplayCfgSeq);
        clone(): RetDecoderAllCfg;
        equals(rhs: any): boolean;
        hashCode(): number;
        Decoderid: string;
        Cfgs: Dispatcher.DecoderDisplayCfgSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: RetDecoderAllCfg): void;
        static read(ins: iceNS0.Ice.InputStream): RetDecoderAllCfg;
    }

    class opDecoderInfo {
        constructor(Decoderid?: string, Channel?: string, cid?: string, disNumber?: string);
        clone(): opDecoderInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        Decoderid: string;
        Channel: string;
        cid: string;
        disNumber: string;
        static write(outs: iceNS0.Ice.OutputStream, value: opDecoderInfo): void;
        static read(ins: iceNS0.Ice.InputStream): opDecoderInfo;
    }

    class opTransferRTPInfo {
        constructor(cid?: string, Number?: string, disip?: string, disport?: number);
        clone(): opTransferRTPInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        Number: string;
        disip: string;
        disport: number;
        static write(outs: iceNS0.Ice.OutputStream, value: opTransferRTPInfo): void;
        static read(ins: iceNS0.Ice.InputStream): opTransferRTPInfo;
    }

    class opDecoderByUrlInfo {
        constructor(Decoderid?: string, Channel?: string, url?: string);
        clone(): opDecoderByUrlInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        Decoderid: string;
        Channel: string;
        url: string;
        static write(outs: iceNS0.Ice.OutputStream, value: opDecoderByUrlInfo): void;
        static read(ins: iceNS0.Ice.InputStream): opDecoderByUrlInfo;
    }

    class opDecoderByVideoInfo {
        constructor(Decoderid?: string, Channel?: string, VideoUser?: string, VideoPwd?: string, VideoIP?: string, VideoPort?: string, VideoChannel?: string, VideoType?: Dispatcher.emVideoDeviceType);
        clone(): opDecoderByVideoInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        Decoderid: string;
        Channel: string;
        VideoUser: string;
        VideoPwd: string;
        VideoIP: string;
        VideoPort: string;
        VideoChannel: string;
        VideoType: Dispatcher.emVideoDeviceType;
        static write(outs: iceNS0.Ice.OutputStream, value: opDecoderByVideoInfo): void;
        static read(ins: iceNS0.Ice.InputStream): opDecoderByVideoInfo;
    }

    class opChannelStatus {
        constructor(Decoderid?: string, Channel?: string);
        clone(): opChannelStatus;
        equals(rhs: any): boolean;
        hashCode(): number;
        Decoderid: string;
        Channel: string;
        static write(outs: iceNS0.Ice.OutputStream, value: opChannelStatus): void;
        static read(ins: iceNS0.Ice.InputStream): opChannelStatus;
    }

    class RetDecoderAbility {
        constructor(Decoderid?: string, VideoType?: Dispatcher.emVideoDeviceType, InChannelsNum?: number);
        clone(): RetDecoderAbility;
        equals(rhs: any): boolean;
        hashCode(): number;
        Decoderid: string;
        VideoType: Dispatcher.emVideoDeviceType;
        InChannelsNum: number;
        static write(outs: iceNS0.Ice.OutputStream, value: RetDecoderAbility): void;
        static read(ins: iceNS0.Ice.InputStream): RetDecoderAbility;
    }

    abstract class DecoderOPPrx extends iceNS0.Ice.ObjectPrx {
        opGetDecoderDevice(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.DecoderDeviceInfoSeq>;
        opGetDisplayCfg(in0: Dispatcher.Identity, in1: GetDisplayCfg, context?: Map<string, string>): iceNS0.Ice.AsyncResult<RetDecoderAllCfg>;
        opGetDecoderAbility(in0: Dispatcher.Identity, in1: GetDisplayCfg, context?: Map<string, string>): iceNS0.Ice.AsyncResult<RetDecoderAbility>;
        opGetChannelDecoderState(in0: Dispatcher.Identity, in1: opChannelStatus, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opSetDisplayCfg(in0: Dispatcher.Identity, in1: SetDecoderCfg, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStartDecoder(in0: Dispatcher.Identity, in1: opDecoderInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStartDecoderByUrl(in0: Dispatcher.Identity, in1: opDecoderByUrlInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStopDecoder(in0: Dispatcher.Identity, in1: opDecoderInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStopDecoderByUrl(in0: Dispatcher.Identity, in1: opDecoderByUrlInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opTransferRTP(in0: Dispatcher.Identity, in1: opTransferRTPInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opTransferStopRTP(in0: Dispatcher.Identity, in1: opTransferRTPInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStartDecoderByVideoInfo(in0: Dispatcher.Identity, in1: opDecoderByVideoInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStopDecoderByVideoInfo(in0: Dispatcher.Identity, in1: opDecoderByVideoInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opGetDisplayCfg1(in0: Dispatcher.Identity, in1: GetDisplayCfg, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSetWindows(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetSubWindowsStatus(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSetDisplayPosition(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opSetScreenMode(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): DecoderOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<DecoderOPPrx>;
    }

    abstract class DecoderOP extends iceNS0.Ice.Object {
        abstract opGetDecoderDevice(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.DecoderDeviceInfoSeq> | Dispatcher.DecoderDeviceInfoSeq;
        abstract opGetDisplayCfg(in0: Dispatcher.Identity, in1: GetDisplayCfg, current: iceNS0.Ice.Current): PromiseLike<RetDecoderAllCfg> | RetDecoderAllCfg;
        abstract opGetDecoderAbility(in0: Dispatcher.Identity, in1: GetDisplayCfg, current: iceNS0.Ice.Current): PromiseLike<RetDecoderAbility> | RetDecoderAbility;
        abstract opGetChannelDecoderState(in0: Dispatcher.Identity, in1: opChannelStatus, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opSetDisplayCfg(in0: Dispatcher.Identity, in1: SetDecoderCfg, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStartDecoder(in0: Dispatcher.Identity, in1: opDecoderInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStartDecoderByUrl(in0: Dispatcher.Identity, in1: opDecoderByUrlInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStopDecoder(in0: Dispatcher.Identity, in1: opDecoderInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStopDecoderByUrl(in0: Dispatcher.Identity, in1: opDecoderByUrlInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opTransferRTP(in0: Dispatcher.Identity, in1: opTransferRTPInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opTransferStopRTP(in0: Dispatcher.Identity, in1: opTransferRTPInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStartDecoderByVideoInfo(in0: Dispatcher.Identity, in1: opDecoderByVideoInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStopDecoderByVideoInfo(in0: Dispatcher.Identity, in1: opDecoderByVideoInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opGetDisplayCfg1(in0: Dispatcher.Identity, in1: GetDisplayCfg, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSetWindows(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetSubWindowsStatus(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSetDisplayPosition(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opSetScreenMode(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::DecoderOP".
         */
        static ice_staticId(): string;
    }
}

export namespace DispatcherDB {
    class EMPLOYEEINFO {
        constructor(mID?: number, mEmployeeID?: string, mPassword?: string, mEmployeeLevel?: number, mDepartID?: number, mRoleID?: number, mName?: string, mAddTime?: string, mModifyTime?: string, mTheState?: number, mTheType?: number, mRemark?: string, mLatitude?: number, mLongitude?: number, mIsRecord?: number, mMonName?: string, mMonPasswd?: string, mMonIP?: string, mMonPort?: number, mMonFlag?: string, mIsVideo?: number);
        clone(): EMPLOYEEINFO;
        equals(rhs: any): boolean;
        mID: number;
        mEmployeeID: string;
        mPassword: string;
        mEmployeeLevel: number;
        mDepartID: number;
        mRoleID: number;
        mName: string;
        mAddTime: string;
        mModifyTime: string;
        mTheState: number;
        mTheType: number;
        mRemark: string;
        mLatitude: number;
        mLongitude: number;
        mIsRecord: number;
        mMonName: string;
        mMonPasswd: string;
        mMonIP: string;
        mMonPort: number;
        mMonFlag: string;
        mIsVideo: number;
        static write(outs: iceNS0.Ice.OutputStream, value: EMPLOYEEINFO): void;
        static read(ins: iceNS0.Ice.InputStream): EMPLOYEEINFO;
    }

    type EMPLOYEEINFOSeq = EMPLOYEEINFO[];

    class EMPLOYEEINFOSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: EMPLOYEEINFOSeq): void;
        static read(ins: iceNS0.Ice.InputStream): EMPLOYEEINFOSeq;
    }

    class GROUPEMPLOYEE {
        constructor(mID?: number, mGroupID?: number, mEmployeeID?: string, mAddTime?: string);
        clone(): GROUPEMPLOYEE;
        equals(rhs: any): boolean;
        hashCode(): number;
        mID: number;
        mGroupID: number;
        mEmployeeID: string;
        mAddTime: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GROUPEMPLOYEE): void;
        static read(ins: iceNS0.Ice.InputStream): GROUPEMPLOYEE;
    }

    type GROUPEMPLOYEESeq = GROUPEMPLOYEE[];

    class GROUPEMPLOYEESeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: GROUPEMPLOYEESeq): void;
        static read(ins: iceNS0.Ice.InputStream): GROUPEMPLOYEESeq;
    }

    class EmployeeRelatedAll {
        constructor(mID?: number, mEmployeeID?: string, mPassword?: string, mEmployeeLevel?: number, mDepartID?: number, mRoleID?: number, mName?: string, mAddTime?: string, mModifyTime?: string, mTheState?: number, mTheType?: number, mRemark?: string, mGroupID?: number, mGroupName?: string, mGroupParentID?: number, mGroupNum?: string, mGroupType?: number, mRoleName?: string);
        clone(): EmployeeRelatedAll;
        equals(rhs: any): boolean;
        hashCode(): number;
        mID: number;
        mEmployeeID: string;
        mPassword: string;
        mEmployeeLevel: number;
        mDepartID: number;
        mRoleID: number;
        mName: string;
        mAddTime: string;
        mModifyTime: string;
        mTheState: number;
        mTheType: number;
        mRemark: string;
        mGroupID: number;
        mGroupName: string;
        mGroupParentID: number;
        mGroupNum: string;
        mGroupType: number;
        mRoleName: string;
        static write(outs: iceNS0.Ice.OutputStream, value: EmployeeRelatedAll): void;
        static read(ins: iceNS0.Ice.InputStream): EmployeeRelatedAll;
    }

    type EmployeeRelatedAllSeq = EmployeeRelatedAll[];

    class EmployeeRelatedAllSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: EmployeeRelatedAllSeq): void;
        static read(ins: iceNS0.Ice.InputStream): EmployeeRelatedAllSeq;
    }

    class DEVICECONFIG {
        constructor(mID?: number, mStartDevice?: string, mSumDevice?: number, mServerIP?: string, mServerPort?: number, mTheState?: number, mModifyTime?: string, mAddTime?: string, mTheType?: number, mUserName?: string, mUserPWD?: string);
        clone(): DEVICECONFIG;
        equals(rhs: any): boolean;
        hashCode(): number;
        mID: number;
        mStartDevice: string;
        mSumDevice: number;
        mServerIP: string;
        mServerPort: number;
        mTheState: number;
        mModifyTime: string;
        mAddTime: string;
        mTheType: number;
        mUserName: string;
        mUserPWD: string;
        static write(outs: iceNS0.Ice.OutputStream, value: DEVICECONFIG): void;
        static read(ins: iceNS0.Ice.InputStream): DEVICECONFIG;
    }

    type DEVICECONFIGSeq = DEVICECONFIG[];

    class DEVICECONFIGSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: DEVICECONFIGSeq): void;
        static read(ins: iceNS0.Ice.InputStream): DEVICECONFIGSeq;
    }

    class SYSPARAMETER {
        constructor(mTheKey?: string, mTheValue?: string, mTheState?: number);
        clone(): SYSPARAMETER;
        equals(rhs: any): boolean;
        hashCode(): number;
        mTheKey: string;
        mTheValue: string;
        mTheState: number;
        static write(outs: iceNS0.Ice.OutputStream, value: SYSPARAMETER): void;
        static read(ins: iceNS0.Ice.InputStream): SYSPARAMETER;
    }

    type SYSPARAMETERSeq = SYSPARAMETER[];

    class SYSPARAMETERSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: SYSPARAMETERSeq): void;
        static read(ins: iceNS0.Ice.InputStream): SYSPARAMETERSeq;
    }

    class SYSCONFIGREAD {
        constructor(mTableName?: string, mAddTime?: string, mReadTime?: string, mState?: number, mValue1?: string);
        clone(): SYSCONFIGREAD;
        equals(rhs: any): boolean;
        hashCode(): number;
        mTableName: string;
        mAddTime: string;
        mReadTime: string;
        mState: number;
        mValue1: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SYSCONFIGREAD): void;
        static read(ins: iceNS0.Ice.InputStream): SYSCONFIGREAD;
    }

    type SYSCONFIGREADSeq = SYSCONFIGREAD[];

    class SYSCONFIGREADSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: SYSCONFIGREADSeq): void;
        static read(ins: iceNS0.Ice.InputStream): SYSCONFIGREADSeq;
    }

    class CALLCALLLOGType {
        constructor(mCid?: string, mCaller?: string, mCalled?: string, mCreateTime?: string, mReleaseTime?: string, mTimeLength?: number, mCallType?: number, mCallResult?: number, mReleaseReason?: number);
        clone(): CALLCALLLOGType;
        equals(rhs: any): boolean;
        hashCode(): number;
        mCid: string;
        mCaller: string;
        mCalled: string;
        mCreateTime: string;
        mReleaseTime: string;
        mTimeLength: number;
        mCallType: number;
        mCallResult: number;
        mReleaseReason: number;
        static write(outs: iceNS0.Ice.OutputStream, value: CALLCALLLOGType): void;
        static read(ins: iceNS0.Ice.InputStream): CALLCALLLOGType;
    }

    type CALLCALLLOGSeq = CALLCALLLOGType[];

    class CALLCALLLOGSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: CALLCALLLOGSeq): void;
        static read(ins: iceNS0.Ice.InputStream): CALLCALLLOGSeq;
    }

    class CALLRECORDType {
        constructor(mCid?: string, mRecordName?: string, mSubPath?: string, mReadTimes?: number, mRecordServerID?: number, mCreateTime?: string, mReleaseTime?: string, mTimeLength?: number, mRecordType?: number, mWebPath?: string);
        clone(): CALLRECORDType;
        equals(rhs: any): boolean;
        hashCode(): number;
        mCid: string;
        mRecordName: string;
        mSubPath: string;
        mReadTimes: number;
        mRecordServerID: number;
        mCreateTime: string;
        mReleaseTime: string;
        mTimeLength: number;
        mRecordType: number;
        mWebPath: string;
        static write(outs: iceNS0.Ice.OutputStream, value: CALLRECORDType): void;
        static read(ins: iceNS0.Ice.InputStream): CALLRECORDType;
    }

    type CALLRECORDSeq = CALLRECORDType[];

    class CALLRECORDSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: CALLRECORDSeq): void;
        static read(ins: iceNS0.Ice.InputStream): CALLRECORDSeq;
    }

    class VIDEO {
        constructor(mID?: number, mVideoIP?: string, mVideoPort?: string, mUser?: string, mPassWord?: string, mShowName?: string, mTheType?: number, mBindEmployeeID?: string);
        clone(): VIDEO;
        equals(rhs: any): boolean;
        hashCode(): number;
        mID: number;
        mVideoIP: string;
        mVideoPort: string;
        mUser: string;
        mPassWord: string;
        mShowName: string;
        mTheType: number;
        mBindEmployeeID: string;
        static write(outs: iceNS0.Ice.OutputStream, value: VIDEO): void;
        static read(ins: iceNS0.Ice.InputStream): VIDEO;
    }

    type VIDEOSeq = VIDEO[];

    class VIDEOSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: VIDEOSeq): void;
        static read(ins: iceNS0.Ice.InputStream): VIDEOSeq;
    }

    class VIDEORECORDType {
        constructor(mCid?: string, mRecordName?: string, mSubPath?: string, mReadTimes?: number, mRecordServerID?: number, mCreateTime?: string, mReleaseTime?: string, mTimeLength?: number, mRecordType?: number, mWebPath?: string);
        clone(): VIDEORECORDType;
        equals(rhs: any): boolean;
        hashCode(): number;
        mCid: string;
        mRecordName: string;
        mSubPath: string;
        mReadTimes: number;
        mRecordServerID: number;
        mCreateTime: string;
        mReleaseTime: string;
        mTimeLength: number;
        mRecordType: number;
        mWebPath: string;
        static write(outs: iceNS0.Ice.OutputStream, value: VIDEORECORDType): void;
        static read(ins: iceNS0.Ice.InputStream): VIDEORECORDType;
    }

    type VIDEORECORDSeq = VIDEORECORDType[];

    class VIDEORECORDSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: VIDEORECORDSeq): void;
        static read(ins: iceNS0.Ice.InputStream): VIDEORECORDSeq;
    }

    class MSGINFO {
        constructor(mID?: number, mMsgID?: string, mSendID?: string, mSendName?: string, mMsgBody?: string, mSendTime?: string, mIsUpload?: number, mMsgType?: number);
        clone(): MSGINFO;
        equals(rhs: any): boolean;
        hashCode(): number;
        mID: number;
        mMsgID: string;
        mSendID: string;
        mSendName: string;
        mMsgBody: string;
        mSendTime: string;
        mIsUpload: number;
        mMsgType: number;
        static write(outs: iceNS0.Ice.OutputStream, value: MSGINFO): void;
        static read(ins: iceNS0.Ice.InputStream): MSGINFO;
    }

    type MSGINFOSeq = MSGINFO[];

    class MSGINFOSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: MSGINFOSeq): void;
        static read(ins: iceNS0.Ice.InputStream): MSGINFOSeq;
    }

    class MSGSENDRS {
        constructor(mID?: number, mMsgID?: string, mReceiverID?: string, mReceiverName?: string, mIsFinish?: string, mRecvTime?: string);
        clone(): MSGSENDRS;
        equals(rhs: any): boolean;
        hashCode(): number;
        mID: number;
        mMsgID: string;
        mReceiverID: string;
        mReceiverName: string;
        mIsFinish: string;
        mRecvTime: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MSGSENDRS): void;
        static read(ins: iceNS0.Ice.InputStream): MSGSENDRS;
    }

    type MSGSENDRSSeq = MSGSENDRS[];

    class MSGSENDRSSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: MSGSENDRSSeq): void;
        static read(ins: iceNS0.Ice.InputStream): MSGSENDRSSeq;
    }

    class ROUTECFG {
        constructor(mID?: number, mRouteNum?: string, mIP?: string);
        clone(): ROUTECFG;
        equals(rhs: any): boolean;
        hashCode(): number;
        mID: number;
        mRouteNum: string;
        mIP: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ROUTECFG): void;
        static read(ins: iceNS0.Ice.InputStream): ROUTECFG;
    }

    type ROUTECFGSeq = ROUTECFG[];

    class ROUTECFGSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: ROUTECFGSeq): void;
        static read(ins: iceNS0.Ice.InputStream): ROUTECFGSeq;
    }

    class IVRCFG {
        constructor(mID?: number, mIvrName?: string, mIvrNum?: string);
        clone(): IVRCFG;
        equals(rhs: any): boolean;
        hashCode(): number;
        mID: number;
        mIvrName: string;
        mIvrNum: string;
        static write(outs: iceNS0.Ice.OutputStream, value: IVRCFG): void;
        static read(ins: iceNS0.Ice.InputStream): IVRCFG;
    }

    type IVRCFGSeq = IVRCFG[];

    class IVRCFGSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: IVRCFGSeq): void;
        static read(ins: iceNS0.Ice.InputStream): IVRCFGSeq;
    }

    class MDVSCFG {
        constructor(mID?: number, mMdvsName?: string, mIP?: string);
        clone(): MDVSCFG;
        equals(rhs: any): boolean;
        hashCode(): number;
        mID: number;
        mMdvsName: string;
        mIP: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MDVSCFG): void;
        static read(ins: iceNS0.Ice.InputStream): MDVSCFG;
    }

    type MDVSCFGSeq = MDVSCFG[];

    class MDVSCFGSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: MDVSCFGSeq): void;
        static read(ins: iceNS0.Ice.InputStream): MDVSCFGSeq;
    }

    class GISDETAIL {
        constructor(mEmployeeid?: string, mLatitude?: number, mLongitude?: number, mPositionTime?: string, mMessage?: string, type?: number);
        clone(): GISDETAIL;
        equals(rhs: any): boolean;
        mEmployeeid: string;
        mLatitude: number;
        mLongitude: number;
        mPositionTime: string;
        mMessage: string;
        type: number;
        static write(outs: iceNS0.Ice.OutputStream, value: GISDETAIL): void;
        static read(ins: iceNS0.Ice.InputStream): GISDETAIL;
    }

    type GISDETAILSeq = GISDETAIL[];

    class GISDETAILSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: GISDETAILSeq): void;
        static read(ins: iceNS0.Ice.InputStream): GISDETAILSeq;
    }

    class PREPLANINFO {
        constructor(mPlanName?: string, mPlanID?: number, mPlanPasswd?: string, mPlanType?: number, mPlanAddr?: string, mPlanAlloc?: string);
        clone(): PREPLANINFO;
        equals(rhs: any): boolean;
        hashCode(): number;
        mPlanName: string;
        mPlanID: number;
        mPlanPasswd: string;
        mPlanType: number;
        mPlanAddr: string;
        mPlanAlloc: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PREPLANINFO): void;
        static read(ins: iceNS0.Ice.InputStream): PREPLANINFO;
    }

    type PREPLANINFOSeq = PREPLANINFO[];

    class PREPLANINFOSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: PREPLANINFOSeq): void;
        static read(ins: iceNS0.Ice.InputStream): PREPLANINFOSeq;
    }

    class PREPLANINSTRUMENT {
        constructor(mPlanInstID?: number, mPlanInstName?: string, mPlanInstType?: number);
        clone(): PREPLANINSTRUMENT;
        equals(rhs: any): boolean;
        hashCode(): number;
        mPlanInstID: number;
        mPlanInstName: string;
        mPlanInstType: number;
        static write(outs: iceNS0.Ice.OutputStream, value: PREPLANINSTRUMENT): void;
        static read(ins: iceNS0.Ice.InputStream): PREPLANINSTRUMENT;
    }

    type PREPLANINSTRUMENTSeq = PREPLANINSTRUMENT[];

    class PREPLANINSTRUMENTSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: PREPLANINSTRUMENTSeq): void;
        static read(ins: iceNS0.Ice.InputStream): PREPLANINSTRUMENTSeq;
    }

    class PREPLANINSTRUREF {
        constructor(mPlanID?: number, mPlanInstID?: number);
        clone(): PREPLANINSTRUREF;
        equals(rhs: any): boolean;
        hashCode(): number;
        mPlanID: number;
        mPlanInstID: number;
        static write(outs: iceNS0.Ice.OutputStream, value: PREPLANINSTRUREF): void;
        static read(ins: iceNS0.Ice.InputStream): PREPLANINSTRUREF;
    }

    type PREPLANINSTRUREFSeq = PREPLANINSTRUREF[];

    class PREPLANINSTRUREFSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: PREPLANINSTRUREFSeq): void;
        static read(ins: iceNS0.Ice.InputStream): PREPLANINSTRUREFSeq;
    }

    class PREPLANMEMBER {
        constructor(mPlanInstID?: number, mEmployeeID?: string);
        clone(): PREPLANMEMBER;
        equals(rhs: any): boolean;
        hashCode(): number;
        mPlanInstID: number;
        mEmployeeID: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PREPLANMEMBER): void;
        static read(ins: iceNS0.Ice.InputStream): PREPLANMEMBER;
    }

    type PREPLANMEMBERSeq = PREPLANMEMBER[];

    class PREPLANMEMBERSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: PREPLANMEMBERSeq): void;
        static read(ins: iceNS0.Ice.InputStream): PREPLANMEMBERSeq;
    }
}

export namespace Dispatcher {
    class ECode {
        static readonly ECodeNone: ECode;
        static readonly ECodeRegister: ECode;
        static readonly ECodeRegisterKickout: ECode;
        static readonly ECodeRegisterTimeout: ECode;
        static readonly ECodeRegisterNotRegister: ECode;
        static readonly ECodeRegisterDisConnect: ECode;
        static readonly ECodeRegisterUserIsLogin: ECode;
        static readonly ECodeRegisterErrorPwd: ECode;
        static readonly ECodeCalling: ECode;
        static readonly ECodeCallingCaller: ECode;
        static readonly ECodeCallingCallee: ECode;
        static readonly ECodeCallingType: ECode;
        static readonly ECodeCallingSessionNotFound: ECode;
        static readonly ECodeCallingTerminalNotFound: ECode;
        static readonly ECodeCallingNumberNotRegistered: ECode;
        static readonly ECodeCallingUserNotExist: ECode;
        static readonly ECodeCallingNoAuth: ECode;
        static readonly ECodeCallingOprFailed: ECode;
        static readonly ECodeCallingUserNotInGroup: ECode;
        static readonly ECodeCallingGroupNotFound: ECode;
        static readonly ECodeCallingCallTypeError: ECode;
        static readonly ECodeCallingSessionCreateFailed: ECode;
        static readonly ECodeOpFaxFailured: ECode;
        static readonly ECodeFileNotFound: ECode;
        static readonly ECodeNoCid: ECode;
        static readonly ECodeNumberBusy: ECode;
        static readonly ECodeCallingOperateFailed: ECode;
        static readonly ECodeCallingNotHaveFitCall: ECode;
        static readonly ECodeNotDTPUser: ECode;
        static readonly ECodeSessionStateError: ECode;
        static readonly ECodeCanNotCallIntercomGroup: ECode;
        static readonly ECodeCallingOperateNotConn: ECode;
        static readonly ECodeConsole: ECode;
        static readonly ECodeConsoleBind: ECode;
        static readonly ECodeErrLicense: ECode;
        static readonly ECodeErrCanNotUse: ECode;
        static readonly ECodeConsoleBindErrorType: ECode;
        static readonly ECodeConsoleBindFristRegist: ECode;
        static readonly ECodeNotMCUSession: ECode;
        static readonly ECodeIsBinded: ECode;
        static readonly ECodeMsgGroupExist: ECode;
        static readonly ECodeMsgGroupNotExist: ECode;
        static readonly ECodeVideoBugCalledIsVoice: ECode;

        static valueOf(value: number): ECode;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    const ECodeNoneDis: string;

    const ECodeRegisterKickoutDis: string;

    const ECodeRegisterTimeoutDis: string;

    const ECodeRegisterNotRegisterDis: string;

    const ECodeRegisterDisConnectDis: string;

    const ECodeRegisterUserIsLoginDis: string;

    const ECodeRegisterErrorPwdDis: string;

    const ECodeCallingCallerDis: string;

    const ECodeCallingCalleeDis: string;

    const ECodeCallingTypeDis: string;

    const ECodeCallingSessionNotFoundDis: string;

    const ECodeConsoleBindDis: string;

    const ECodeConsoleBindErrorTypeDis: string;

    const ECodeConsoleBindFristRegistDis: string;

    const ECodeCallingTerminalNotFoundDis: string;

    const ECodeCallingNumberNotRegisteredDis: string;

    const ECodeCallingUserNotExistDis: string;

    const ECodeCallingNoAuthDis: string;

    const ECodeCallingOprFailedDis: string;

    const ECodeCallingUserNotInGroupDis: string;

    const ECodeCallingGroupNotFoundDis: string;

    const ECodeCallingCallTypeErrorDis: string;

    const ECodeCallingSessionCreateFailedDis: string;

    const ECodeCallingOperateFailedDis: string;

    const ECodeCallingNotHaveFitCallDis: string;

    const ECodeSessionStateErrorDis: string;

    const ECodeCanNotCallIntercomGroupDis: string;

    const ECodeCallingOperateNotConnDis: string;

    const ECodeOpFaxFailuredDis: string;

    const ECodeFileNotFoundDis: string;

    const ECodeNoCidDis: string;

    const ECodeNumberBusyDis: string;

    const ECodeErrLicenseDis: string;

    const ECodeErrCanNotUseDis: string;

    const ECodeNotDTPUserDis: string;

    const ECodeNotMCUSessionDis: string;

    const ECodeIsBindedDis: string;

    const ECodeMsgGroupExistDis: string;

    const ECodeMsgGroupNotExistDis: string;

    const ECodeVideoBugCalledIsVoiceDis: string;

    class Error extends iceNS0.Ice.UserException {
        /**
         * One-shot constructor to initialize all data members.
         * @param ice_cause The error that cause this exception.
         */
        constructor(code?: ECode, desc?: string, ice_cause?: string | Error);
        code: ECode;
        desc: string;
    }

    const SYSMessageDiskUsed: string;

    const SYSMessageDiskClear: string;
}

export namespace Dispatcher {
    const EventEmployeeStateReg: string;

    const EventEmployeeStateCall: string;

    const EventPttState: string;

    const EventPttStateSpeaker: string;

    const EventPttWaiting: string;

    const EventPttReject: string;

    const EventHistoryVideoInfo: string;

    const EventSessionStateChange: string;

    const EventSessionMemberChange: string;

    const EventSessionSendToCreater: string;

    const EventSessionSendToAllDTP: string;

    const EventSessionMemberToAllDTP: string;

    const EventCallVideoGetVideoEvent: string;

    const EventBusFileOnReceive: string;

    const EventCALLPLAYAUDIOCB: string;

    const EventGisPositionChange: string;

    const EventFileMsgOnReceive: string;

    const EventMsgOnReceive: string;

    const EventEmployeeChannelChange: string;

    const EventDBChangeGroupChange: string;

    const EventGroupMsgGroupChange: string;

    const EventGroupMsgGroupEmployeeChange: string;

    const EventPlanTypeChange: string;

    const EventPlanInfoChange: string;
}

export namespace Dispatcher {
    abstract class FaxCBPrx extends iceNS0.Ice.ObjectPrx {
        onFaxEv(_in: Dispatcher.FaxEv2T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onNewFaxEv(_in: Dispatcher.NewFaxEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): FaxCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<FaxCBPrx>;
    }

    abstract class FaxCB extends iceNS0.Ice.Object {
        abstract onFaxEv(_in: Dispatcher.FaxEv2T, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onNewFaxEv(_in: Dispatcher.NewFaxEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::FaxCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class FaxT {
        constructor(fid?: string, fname?: string, srcnum?: string, dstnum?: string);
        clone(): FaxT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        fname: string;
        srcnum: string;
        dstnum: string;
        static write(outs: iceNS0.Ice.OutputStream, value: FaxT): void;
        static read(ins: iceNS0.Ice.InputStream): FaxT;
    }

    class FaxRT {
        constructor(fid?: string, fname?: string, fpath?: string);
        clone(): FaxRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        fname: string;
        fpath: string;
        static write(outs: iceNS0.Ice.OutputStream, value: FaxRT): void;
        static read(ins: iceNS0.Ice.InputStream): FaxRT;
    }

    class FaxEvT {
        constructor(fid?: string, code?: Dispatcher.FileState);
        clone(): FaxEvT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        code: Dispatcher.FileState;
        static write(outs: iceNS0.Ice.OutputStream, value: FaxEvT): void;
        static read(ins: iceNS0.Ice.InputStream): FaxEvT;
    }

    class FaxEv2T {
        constructor(fid?: string, code?: Dispatcher.FaxStateSend);
        clone(): FaxEv2T;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        code: Dispatcher.FaxStateSend;
        static write(outs: iceNS0.Ice.OutputStream, value: FaxEv2T): void;
        static read(ins: iceNS0.Ice.InputStream): FaxEv2T;
    }

    class NewFaxEvT {
        constructor(fid?: string);
        clone(): NewFaxEvT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: NewFaxEvT): void;
        static read(ins: iceNS0.Ice.InputStream): NewFaxEvT;
    }
}

export namespace Dispatcher {
    abstract class FaxOPPrx extends iceNS0.Ice.ObjectPrx {
        opFax(id: Dispatcher.Identity, _in: Dispatcher.FaxT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.FaxRT>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): FaxOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<FaxOPPrx>;
    }

    abstract class FaxOP extends iceNS0.Ice.Object {
        abstract opFax(id: Dispatcher.Identity, _in: Dispatcher.FaxT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.FaxRT> | Dispatcher.FaxRT;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::FaxOP".
         */
        static ice_staticId(): string;
    }
}

export namespace Fax {
    class FaxDirectType {
        static readonly FaxDirectTypeSend: FaxDirectType;
        static readonly FaxDirectTypeRecv: FaxDirectType;

        static valueOf(value: number): FaxDirectType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class Error extends iceNS0.Ice.UserException {
        /**
         * One-shot constructor to initialize all data members.
         * @param ice_cause The error that cause this exception.
         */
        constructor(fid?: string, code?: number, desc?: string, ice_cause?: string | Error);
        fid: string;
        code: number;
        desc: string;
    }

    class FaxOriginateT {
        constructor(fid?: string, srcip?: string, srcport?: number, srcpath?: string, srcuser?: string, dstip?: string, dstport?: number, dstpath?: string, dstuser?: string, direct?: FaxDirectType);
        clone(): FaxOriginateT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        srcip: string;
        srcport: number;
        srcpath: string;
        srcuser: string;
        dstip: string;
        dstport: number;
        dstpath: string;
        dstuser: string;
        direct: FaxDirectType;
        static write(outs: iceNS0.Ice.OutputStream, value: FaxOriginateT): void;
        static read(ins: iceNS0.Ice.InputStream): FaxOriginateT;
    }

    class FaxFeedbackT {
        constructor(fid?: string, direct?: number, code?: number, msg?: string, tiffname?: string, tiffpath?: string);
        clone(): FaxFeedbackT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        direct: number;
        code: number;
        msg: string;
        tiffname: string;
        tiffpath: string;
        static write(outs: iceNS0.Ice.OutputStream, value: FaxFeedbackT): void;
        static read(ins: iceNS0.Ice.InputStream): FaxFeedbackT;
    }

    abstract class FaxServerPrx extends iceNS0.Ice.ObjectPrx {
        faxOriginate(data: FaxOriginateT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<FaxFeedbackT>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): FaxServerPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<FaxServerPrx>;
    }

    abstract class FaxServer extends iceNS0.Ice.Object {
        abstract faxOriginate(data: FaxOriginateT, current: iceNS0.Ice.Current): PromiseLike<FaxFeedbackT> | FaxFeedbackT;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Fax::FaxServer".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    abstract class FileCBPrx extends iceNS0.Ice.ObjectPrx {
        onUploadEvent2(in0: Dispatcher.UploadEvent2T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onDelFileEvent(fid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): FileCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<FileCBPrx>;
    }

    abstract class FileCB extends iceNS0.Ice.Object {
        abstract onUploadEvent2(in0: Dispatcher.UploadEvent2T, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onDelFileEvent(fid: string, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::FileCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class UploadEvent2T {
        constructor(snum?: string, dnum?: iceNS0.Ice.StringSeq, fname?: string, fid?: string, fpath?: string, state?: Dispatcher.FileState, ftype?: Dispatcher.FileType, sendtime?: string);
        clone(): UploadEvent2T;
        equals(rhs: any): boolean;
        hashCode(): number;
        snum: string;
        dnum: iceNS0.Ice.StringSeq;
        fname: string;
        fid: string;
        fpath: string;
        state: Dispatcher.FileState;
        ftype: Dispatcher.FileType;
        sendtime: string;
        static write(outs: iceNS0.Ice.OutputStream, value: UploadEvent2T): void;
        static read(ins: iceNS0.Ice.InputStream): UploadEvent2T;
    }

    type UploadEvent2Seq = UploadEvent2T[];

    class UploadEvent2SeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: UploadEvent2Seq): void;
        static read(ins: iceNS0.Ice.InputStream): UploadEvent2Seq;
    }
}

export namespace Dispatcher {
    class ApplyUploadET {
        constructor(fid?: string, fname?: string, ftype?: Dispatcher.FileType);
        clone(): ApplyUploadET;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        fname: string;
        ftype: Dispatcher.FileType;
        static write(outs: iceNS0.Ice.OutputStream, value: ApplyUploadET): void;
        static read(ins: iceNS0.Ice.InputStream): ApplyUploadET;
    }

    type ApplyUploadESeq = ApplyUploadET[];

    class ApplyUploadESeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: ApplyUploadESeq): void;
        static read(ins: iceNS0.Ice.InputStream): ApplyUploadESeq;
    }

    class ApplyUploadT {
        constructor(recv?: iceNS0.Ice.StringSeq, file?: ApplyUploadET);
        clone(): ApplyUploadT;
        equals(rhs: any): boolean;
        hashCode(): number;
        recv: iceNS0.Ice.StringSeq;
        file: ApplyUploadET;
        static write(outs: iceNS0.Ice.OutputStream, value: ApplyUploadT): void;
        static read(ins: iceNS0.Ice.InputStream): ApplyUploadT;
    }

    class ApplyUploadRT {
        constructor(fid?: string, fname?: string, fpath?: string);
        clone(): ApplyUploadRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        fname: string;
        fpath: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ApplyUploadRT): void;
        static read(ins: iceNS0.Ice.InputStream): ApplyUploadRT;
    }

    type ApplyUploadRSeq = ApplyUploadRT[];

    class ApplyUploadRSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: ApplyUploadRSeq): void;
        static read(ins: iceNS0.Ice.InputStream): ApplyUploadRSeq;
    }

    class UploadEventT {
        constructor(fid?: string, state?: Dispatcher.FileState);
        clone(): UploadEventT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        state: Dispatcher.FileState;
        static write(outs: iceNS0.Ice.OutputStream, value: UploadEventT): void;
        static read(ins: iceNS0.Ice.InputStream): UploadEventT;
    }

    class FlistT {
        constructor(sendid?: string, recvid?: string, isfinish?: string, begtime?: string, endtime?: string, ftype?: Dispatcher.FileType);
        clone(): FlistT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sendid: string;
        recvid: string;
        isfinish: string;
        begtime: string;
        endtime: string;
        ftype: Dispatcher.FileType;
        static write(outs: iceNS0.Ice.OutputStream, value: FlistT): void;
        static read(ins: iceNS0.Ice.InputStream): FlistT;
    }

    type FlistSeq = FlistT[];

    class FlistSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: FlistSeq): void;
        static read(ins: iceNS0.Ice.InputStream): FlistSeq;
    }

    class FlistRT {
        constructor(fid?: string, sendid?: string, sendname?: string, msgbody?: string, sendtime?: string, isupload?: number, type?: Dispatcher.FileType, recvid?: string, recvname?: string, isfinish?: number, recvtime?: string);
        clone(): FlistRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        sendid: string;
        sendname: string;
        msgbody: string;
        sendtime: string;
        isupload: number;
        type: Dispatcher.FileType;
        recvid: string;
        recvname: string;
        isfinish: number;
        recvtime: string;
        static write(outs: iceNS0.Ice.OutputStream, value: FlistRT): void;
        static read(ins: iceNS0.Ice.InputStream): FlistRT;
    }

    type FlistRSeq = FlistRT[];

    class FlistRSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: FlistRSeq): void;
        static read(ins: iceNS0.Ice.InputStream): FlistRSeq;
    }

    class FileReceivedT {
        constructor(fid?: string, employeeid?: string);
        clone(): FileReceivedT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: FileReceivedT): void;
        static read(ins: iceNS0.Ice.InputStream): FileReceivedT;
    }

    class FileDeleteT {
        constructor(fid?: string);
        clone(): FileDeleteT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: FileDeleteT): void;
        static read(ins: iceNS0.Ice.InputStream): FileDeleteT;
    }

    type FileDeleteTSeq = FileDeleteT[];

    class FileDeleteTSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: FileDeleteTSeq): void;
        static read(ins: iceNS0.Ice.InputStream): FileDeleteTSeq;
    }

    abstract class FileOPPrx extends iceNS0.Ice.ObjectPrx {
        opApplyUpload(in0: Dispatcher.Identity, in1: ApplyUploadT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<ApplyUploadRT>;
        opUploadEvent(in0: Dispatcher.Identity, in1: UploadEventT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opFlist(in0: Dispatcher.Identity, in1: FlistSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<FlistRSeq>;
        opFileReceived(in0: Dispatcher.Identity, in1: FileReceivedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opDeleteFile(in0: Dispatcher.Identity, in1: FileDeleteTSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opUploadFile(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSetUploadFileState(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetFileInfoByCondition(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): FileOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<FileOPPrx>;
    }

    abstract class FileOP extends iceNS0.Ice.Object {
        abstract opApplyUpload(in0: Dispatcher.Identity, in1: ApplyUploadT, current: iceNS0.Ice.Current): PromiseLike<ApplyUploadRT> | ApplyUploadRT;
        abstract opUploadEvent(in0: Dispatcher.Identity, in1: UploadEventT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opFlist(in0: Dispatcher.Identity, in1: FlistSeq, current: iceNS0.Ice.Current): PromiseLike<FlistRSeq> | FlistRSeq;
        abstract opFileReceived(in0: Dispatcher.Identity, in1: FileReceivedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opDeleteFile(in0: Dispatcher.Identity, in1: FileDeleteTSeq, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opUploadFile(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSetUploadFileState(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetFileInfoByCondition(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::FileOP".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class GisInfoEventT {
        constructor(mEmployeeid?: string, mLatitude?: number, mLongitude?: number, mPositionTime?: string, mMessage?: string, disid?: string, type?: number);
        clone(): GisInfoEventT;
        equals(rhs: any): boolean;
        mEmployeeid: string;
        mLatitude: number;
        mLongitude: number;
        mPositionTime: string;
        mMessage: string;
        disid: string;
        type: number;
        static write(outs: iceNS0.Ice.OutputStream, value: GisInfoEventT): void;
        static read(ins: iceNS0.Ice.InputStream): GisInfoEventT;
    }

    class GisInfoEventT1 {
        constructor(mEmployeeid?: string, mLatitude?: number, mLongitude?: number, mPositionTime?: string, mMessage?: string, disid?: string, type?: number, dnsprefix?: string);
        clone(): GisInfoEventT1;
        equals(rhs: any): boolean;
        mEmployeeid: string;
        mLatitude: number;
        mLongitude: number;
        mPositionTime: string;
        mMessage: string;
        disid: string;
        type: number;
        dnsprefix: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GisInfoEventT1): void;
        static read(ins: iceNS0.Ice.InputStream): GisInfoEventT1;
    }

    abstract class GisCBPrx extends iceNS0.Ice.ObjectPrx {
        onGisInfoEvent(in0: GisInfoEventT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onGisInfoEvent1(in0: GisInfoEventT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): GisCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<GisCBPrx>;
    }

    abstract class GisCB extends iceNS0.Ice.Object {
        abstract onGisInfoEvent(in0: GisInfoEventT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onGisInfoEvent1(in0: GisInfoEventT1, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::GisCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class GisInfoByTimeT {
        constructor(employeeid?: string, begin?: string, end?: string, type?: number);
        clone(): GisInfoByTimeT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        begin: string;
        end: string;
        type: number;
        static write(outs: iceNS0.Ice.OutputStream, value: GisInfoByTimeT): void;
        static read(ins: iceNS0.Ice.InputStream): GisInfoByTimeT;
    }

    class GisInfoByEllipseT {
        constructor(sid?: string, a?: number, b?: number, c?: number, d?: number, type?: string);
        clone(): GisInfoByEllipseT;
        equals(rhs: any): boolean;
        sid: string;
        a: number;
        b: number;
        c: number;
        d: number;
        type: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GisInfoByEllipseT): void;
        static read(ins: iceNS0.Ice.InputStream): GisInfoByEllipseT;
    }

    class GisInfoByRectangleT {
        constructor(a?: number, b?: number, c?: number, d?: number, type?: string);
        clone(): GisInfoByRectangleT;
        equals(rhs: any): boolean;
        a: number;
        b: number;
        c: number;
        d: number;
        type: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GisInfoByRectangleT): void;
        static read(ins: iceNS0.Ice.InputStream): GisInfoByRectangleT;
    }

    class GetPositionT {
        constructor(employeeid?: string);
        clone(): GetPositionT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetPositionT): void;
        static read(ins: iceNS0.Ice.InputStream): GetPositionT;
    }

    class GetPositionElem {
        constructor(employeeid?: string, name?: string, longitude?: string, latitude?: string, message?: string, type?: number, dnsprefix?: string, regstate?: Dispatcher.RegisterState, positiontime?: string);
        clone(): GetPositionElem;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        name: string;
        longitude: string;
        latitude: string;
        message: string;
        type: number;
        dnsprefix: string;
        regstate: Dispatcher.RegisterState;
        positiontime: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetPositionElem): void;
        static read(ins: iceNS0.Ice.InputStream): GetPositionElem;
    }

    type GetPositionSeq = GetPositionElem[];

    class GetPositionSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: GetPositionSeq): void;
        static read(ins: iceNS0.Ice.InputStream): GetPositionSeq;
    }

    class GetPositionRT {
        constructor(pseq?: GetPositionSeq);
        clone(): GetPositionRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        pseq: GetPositionSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: GetPositionRT): void;
        static read(ins: iceNS0.Ice.InputStream): GetPositionRT;
    }

    class GetPositionT1 {
        constructor(employeeid?: string);
        clone(): GetPositionT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetPositionT1): void;
        static read(ins: iceNS0.Ice.InputStream): GetPositionT1;
    }

    class GetPositionElem1 {
        constructor(employeeid?: string, name?: string, longitude?: string, latitude?: string, message?: string, type?: number, dnsprefix?: string, regstate?: Dispatcher.RegisterState);
        clone(): GetPositionElem1;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        name: string;
        longitude: string;
        latitude: string;
        message: string;
        type: number;
        dnsprefix: string;
        regstate: Dispatcher.RegisterState;
        static write(outs: iceNS0.Ice.OutputStream, value: GetPositionElem1): void;
        static read(ins: iceNS0.Ice.InputStream): GetPositionElem1;
    }

    type GetPositionSeq1 = GetPositionElem1[];

    class GetPositionSeq1Helper {
        static write(outs: iceNS0.Ice.OutputStream, value: GetPositionSeq1): void;
        static read(ins: iceNS0.Ice.InputStream): GetPositionSeq1;
    }

    class GetPositionRT1 {
        constructor(pseq?: GetPositionSeq1);
        clone(): GetPositionRT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        pseq: GetPositionSeq1;
        static write(outs: iceNS0.Ice.OutputStream, value: GetPositionRT1): void;
        static read(ins: iceNS0.Ice.InputStream): GetPositionRT1;
    }

    class GisTraceT {
        constructor(dstid?: string, space?: string, flag?: Dispatcher.GisTraceType);
        clone(): GisTraceT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dstid: string;
        space: string;
        flag: Dispatcher.GisTraceType;
        static write(outs: iceNS0.Ice.OutputStream, value: GisTraceT): void;
        static read(ins: iceNS0.Ice.InputStream): GisTraceT;
    }

    type GisTraceSeq = GisTraceT[];

    class GisTraceSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: GisTraceSeq): void;
        static read(ins: iceNS0.Ice.InputStream): GisTraceSeq;
    }

    class GisTraceRT {
        constructor(employeeid?: string);
        clone(): GisTraceRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GisTraceRT): void;
        static read(ins: iceNS0.Ice.InputStream): GisTraceRT;
    }

    type GisTraceRSeq = GisTraceRT[];

    class GisTraceRSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: GisTraceRSeq): void;
        static read(ins: iceNS0.Ice.InputStream): GisTraceRSeq;
    }

    class GisInfoT {
        constructor(latitude?: number, longitude?: number, time?: string, grmc?: string);
        clone(): GisInfoT;
        equals(rhs: any): boolean;
        latitude: number;
        longitude: number;
        time: string;
        grmc: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GisInfoT): void;
        static read(ins: iceNS0.Ice.InputStream): GisInfoT;
    }

    class GISDETAIL1 {
        constructor(mEmployeeid?: string, mLatitude?: number, mLongitude?: number, mPositionTime?: string, mMessage?: string, type?: number, dnsprefix?: string, regstate?: Dispatcher.RegisterState);
        clone(): GISDETAIL1;
        equals(rhs: any): boolean;
        mEmployeeid: string;
        mLatitude: number;
        mLongitude: number;
        mPositionTime: string;
        mMessage: string;
        type: number;
        dnsprefix: string;
        regstate: Dispatcher.RegisterState;
        static write(outs: iceNS0.Ice.OutputStream, value: GISDETAIL1): void;
        static read(ins: iceNS0.Ice.InputStream): GISDETAIL1;
    }

    type GISDETAILSeq1 = GISDETAIL1[];

    class GISDETAILSeq1Helper {
        static write(outs: iceNS0.Ice.OutputStream, value: GISDETAILSeq1): void;
        static read(ins: iceNS0.Ice.InputStream): GISDETAILSeq1;
    }

    abstract class GisOPPrx extends iceNS0.Ice.ObjectPrx {
        opGisInfoByTime(in0: Dispatcher.Identity, in1: GisInfoByTimeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<DispatcherDB.GISDETAILSeq>;
        opGisInfoByTime1(in0: Dispatcher.Identity, in1: GisInfoByTimeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<GISDETAILSeq1>;
        opGisInfoByEllipse(in0: Dispatcher.Identity, in1: GisInfoByEllipseT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<DispatcherDB.GISDETAILSeq>;
        opGisInfoByEllipse1(in0: Dispatcher.Identity, in1: GisInfoByEllipseT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<GISDETAILSeq1>;
        opGisInfoByRectangle(in0: Dispatcher.Identity, in1: GisInfoByRectangleT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<DispatcherDB.GISDETAILSeq>;
        opGisInfoByRectangle1(in0: Dispatcher.Identity, in1: GisInfoByRectangleT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<GISDETAILSeq1>;
        opGetPosition(in0: Dispatcher.Identity, in1: GetPositionT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<GetPositionRT>;
        opGetPosition1(in0: Dispatcher.Identity, in1: GetPositionT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<GetPositionRT1>;
        opGisTrace(in0: Dispatcher.Identity, in1: GisTraceSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<GisTraceRSeq>;
        opGisInfo(in0: Dispatcher.Identity, in1: GisInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetGisInfos(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opReportGisInfo(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetGisInfoByEllipse(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): GisOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<GisOPPrx>;
    }

    abstract class GisOP extends iceNS0.Ice.Object {
        abstract opGisInfoByTime(in0: Dispatcher.Identity, in1: GisInfoByTimeT, current: iceNS0.Ice.Current): PromiseLike<DispatcherDB.GISDETAILSeq> | DispatcherDB.GISDETAILSeq;
        abstract opGisInfoByTime1(in0: Dispatcher.Identity, in1: GisInfoByTimeT, current: iceNS0.Ice.Current): PromiseLike<GISDETAILSeq1> | GISDETAILSeq1;
        abstract opGisInfoByEllipse(in0: Dispatcher.Identity, in1: GisInfoByEllipseT, current: iceNS0.Ice.Current): PromiseLike<DispatcherDB.GISDETAILSeq> | DispatcherDB.GISDETAILSeq;
        abstract opGisInfoByEllipse1(in0: Dispatcher.Identity, in1: GisInfoByEllipseT, current: iceNS0.Ice.Current): PromiseLike<GISDETAILSeq1> | GISDETAILSeq1;
        abstract opGisInfoByRectangle(in0: Dispatcher.Identity, in1: GisInfoByRectangleT, current: iceNS0.Ice.Current): PromiseLike<DispatcherDB.GISDETAILSeq> | DispatcherDB.GISDETAILSeq;
        abstract opGisInfoByRectangle1(in0: Dispatcher.Identity, in1: GisInfoByRectangleT, current: iceNS0.Ice.Current): PromiseLike<GISDETAILSeq1> | GISDETAILSeq1;
        abstract opGetPosition(in0: Dispatcher.Identity, in1: GetPositionT, current: iceNS0.Ice.Current): PromiseLike<GetPositionRT> | GetPositionRT;
        abstract opGetPosition1(in0: Dispatcher.Identity, in1: GetPositionT1, current: iceNS0.Ice.Current): PromiseLike<GetPositionRT1> | GetPositionRT1;
        abstract opGisTrace(in0: Dispatcher.Identity, in1: GisTraceSeq, current: iceNS0.Ice.Current): PromiseLike<GisTraceRSeq> | GisTraceRSeq;
        abstract opGisInfo(in0: Dispatcher.Identity, in1: GisInfoT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetGisInfos(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opReportGisInfo(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetGisInfoByEllipse(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::GisOP".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class CallType {
        static readonly CallTypeNone: CallType;
        static readonly CallTypeSingle: CallType;
        static readonly CallTypeTmpgroup: CallType;
        static readonly CallTypeReport: CallType;
        static readonly CallTypeBroadcast: CallType;
        static readonly CallTypeTemporary: CallType;
        static readonly CallTypeInterpose: CallType;
        static readonly CallTypeForceremove: CallType;
        static readonly CallTypeMonitor: CallType;
        static readonly CallTypeIntercom: CallType;
        static readonly CallTypeSwitch: CallType;
        static readonly CallTypeUrgent: CallType;
        static readonly CallTypeSingle2: CallType;
        static readonly CallTypeTmpintercom: CallType;
        static readonly CallTypeVideobug: CallType;
        static readonly CallTypeMCUMetting: CallType;
        static readonly CallTypeSOS: CallType;
        static readonly CallTypeTransferVideo: CallType;
        static readonly CallTypeTransferVideoToMcu: CallType;
        static readonly CallTypeUploadVideo: CallType;
        static readonly CallTypePlayFile: CallType;

        static valueOf(value: number): CallType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class RegisterState {
        static readonly RegisterStateNone: RegisterState;
        static readonly RegisterStateLogin: RegisterState;
        static readonly RegisterStateLogout: RegisterState;

        static valueOf(value: number): RegisterState;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class CallState {
        static readonly CallStateNone: CallState;
        static readonly CallStateInit: CallState;
        static readonly CallStateNormal: CallState;
        static readonly CallStateCallout: CallState;
        static readonly CallStateIncoming: CallState;
        static readonly CallStateRinging: CallState;
        static readonly CallStateConnect: CallState;
        static readonly CallStateHold: CallState;
        static readonly CallStateBusy: CallState;
        static readonly CallStateOffhook: CallState;
        static readonly CallStateRelease: CallState;
        static readonly CallStateUnspeak: CallState;
        static readonly CallStateSpeak: CallState;
        static readonly CallStateQueue: CallState;
        static readonly CallStateUnhold: CallState;
        static readonly CallStateZombie: CallState;

        static valueOf(value: number): CallState;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class MediaType {
        static readonly MediaTypeNone: MediaType;
        static readonly MediaTypeAudio: MediaType;
        static readonly MediaTypeVideo: MediaType;

        static valueOf(value: number): MediaType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class GroupType {
        static readonly GroupTypeIntercomgroup: GroupType;
        static readonly GroupTypeOther: GroupType;
        static readonly GroupTypeNone: GroupType;

        static valueOf(value: number): GroupType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class UserType {
        static readonly UserTypeDispatch: UserType;
        static readonly UserTypeHandheld: UserType;
        static readonly UserTypeCommonuser: UserType;
        static readonly UserTypeOutlineuser: UserType;
        static readonly UserTypeMonitoruser: UserType;
        static readonly UserTypeSsu: UserType;
        static readonly UserType3ghandheld: UserType;
        static readonly UserTypeMonitordevice: UserType;
        static readonly UserTypeNone: UserType;
        static readonly UserType323: UserType;
        static readonly UserTypeStationGroup: UserType;
        static readonly UserTypeStationUser: UserType;
        static readonly UserTypeRelayUser: UserType;
        static readonly UserTypeBroadRelayUser: UserType;
        static readonly UserTypeRelayGW: UserType;
        static readonly UserTypeMCUReg: UserType;

        static valueOf(value: number): UserType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class FileType {
        static readonly FileTypeNone: FileType;
        static readonly FileTypeText: FileType;
        static readonly FileTypePic: FileType;
        static readonly FileTypeVoice: FileType;
        static readonly FileTypeVideo: FileType;
        static readonly FileTypeGisinfo: FileType;
        static readonly FileTypePlayAudio: FileType;
        static readonly FileTypeFax: FileType;
        static readonly FileTypeOther: FileType;
        static readonly FileTypePlayVideo: FileType;
        static readonly FileTypeUploadVideo: FileType;

        static valueOf(value: number): FileType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class FileState {
        static readonly FileStateNone: FileState;
        static readonly FileStateUploading: FileState;
        static readonly FileStateUploaded: FileState;

        static valueOf(value: number): FileState;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class SpeakType {
        static readonly SpeakTypeNone: SpeakType;
        static readonly SpeakTypeMute: SpeakType;
        static readonly SpeakTypeUnmute: SpeakType;

        static valueOf(value: number): SpeakType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class UserOrGroup {
        static readonly UOGNone: UserOrGroup;
        static readonly UOGEmployee: UserOrGroup;
        static readonly UOGGroup: UserOrGroup;

        static valueOf(value: number): UserOrGroup;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class HearType {
        static readonly HearTypeNone: HearType;
        static readonly HearTypeMute: HearType;
        static readonly HearTypeUnmute: HearType;

        static valueOf(value: number): HearType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class PushVideoType {
        static readonly PushVideoTypeNone: PushVideoType;
        static readonly PushVideoTypePush: PushVideoType;
        static readonly PushVideoTypeUnpush: PushVideoType;

        static valueOf(value: number): PushVideoType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class PlayAudioType {
        static readonly PlayAudioTypeNone: PlayAudioType;
        static readonly PlayAudioTypeStart: PlayAudioType;
        static readonly PlayAudioTypeStop: PlayAudioType;

        static valueOf(value: number): PlayAudioType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class PlayVideoType {
        static readonly PlayVideoTypeNone: PlayVideoType;
        static readonly PlayVideoTypeStart: PlayVideoType;
        static readonly PlayVideoTypeStop: PlayVideoType;

        static valueOf(value: number): PlayVideoType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class AudioFileType {
        static readonly AudioFileTypeNone: AudioFileType;
        static readonly AudioFileTypeEcho: AudioFileType;

        static valueOf(value: number): AudioFileType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class AnswerType {
        static readonly AnswerTypeNone: AnswerType;
        static readonly AnswerTypeAuto: AnswerType;
        static readonly AnswerTypeMan: AnswerType;

        static valueOf(value: number): AnswerType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class HoldType {
        static readonly HoldTypeNone: HoldType;
        static readonly HoldTypeHold: HoldType;
        static readonly HoldTypeUnhold: HoldType;

        static valueOf(value: number): HoldType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class GisTraceType {
        static readonly GisTraceTypeNone: GisTraceType;
        static readonly GisTraceTypeSub: GisTraceType;
        static readonly GisTraceTypeUnsub: GisTraceType;

        static valueOf(value: number): GisTraceType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class PrePlanState {
        static readonly PrePlanStateNone: PrePlanState;
        static readonly PrePlanStateRuning: PrePlanState;
        static readonly PrePlanStateEnd: PrePlanState;

        static valueOf(value: number): PrePlanState;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class VBugStateType {
        static readonly VBugStateTypeNone: VBugStateType;
        static readonly VBugStateTypeOk: VBugStateType;
        static readonly VBugStateTypeFailure: VBugStateType;
        static readonly VBugStateTypeRelease: VBugStateType;

        static valueOf(value: number): VBugStateType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class PrePlanInstType {
        static readonly PrePlanTypeInstMessage: PrePlanInstType;
        static readonly PrePlanTypeInstBroadCast: PrePlanInstType;
        static readonly PrePlanTypeInstMeeting: PrePlanInstType;
        static readonly PrePlanTypeInstVideoMeeting: PrePlanInstType;

        static valueOf(value: number): PrePlanInstType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class FaxStateSend {
        static readonly FaxStateSendNone: FaxStateSend;
        static readonly FaxStateSending: FaxStateSend;
        static readonly FaxStateSended: FaxStateSend;
        static readonly FaxStateSendFailure: FaxStateSend;

        static valueOf(value: number): FaxStateSend;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class FaxStateRecv {
        static readonly FaxStateRecvNone: FaxStateRecv;
        static readonly FaxStateRecving: FaxStateRecv;
        static readonly FaxStateRecved: FaxStateRecv;
        static readonly FaxStateRecvedFailure: FaxStateRecv;

        static valueOf(value: number): FaxStateRecv;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class emCalledType {
        static readonly CalledTypeNONE: emCalledType;
        static readonly CalledTypeTDNSFreeswitch: emCalledType;
        static readonly CalledTypeMCU: emCalledType;
        static readonly CalledTypePlayVideo: emCalledType;
        static readonly CalledTypeMCUDevice: emCalledType;
        static readonly CalledType28181: emCalledType;
        static readonly CalledTypeMonitorDeivce: emCalledType;
        static readonly CalledTypePlayHisVideo: emCalledType;

        static valueOf(value: number): emCalledType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class emVideoDeviceType {
        static readonly VDTNONE: emVideoDeviceType;
        static readonly VDTHKIPC: emVideoDeviceType;
        static readonly VDTOTHER: emVideoDeviceType;
        static readonly VDTHKDVR: emVideoDeviceType;
        static readonly VDTHKVIDEOSERVER: emVideoDeviceType;
        static readonly VDTHKDECOMPILER: emVideoDeviceType;
        static readonly VDTDHIPC: emVideoDeviceType;
        static readonly VDTDHDVR: emVideoDeviceType;
        static readonly VDTDHVIDEOSERVER: emVideoDeviceType;
        static readonly VDTDHDECOMPILER: emVideoDeviceType;

        static valueOf(value: number): emVideoDeviceType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class emCodecType {
        static readonly CDTNONE: emCodecType;
        static readonly CDTH264: emCodecType;
        static readonly CDTH265: emCodecType;
        static readonly CDT264265: emCodecType;

        static valueOf(value: number): emCodecType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class Identity {
        constructor(user?: string);
        clone(): Identity;
        equals(rhs: any): boolean;
        hashCode(): number;
        user: string;
        static write(outs: iceNS0.Ice.OutputStream, value: Identity): void;
        static read(ins: iceNS0.Ice.InputStream): Identity;
    }

    class CommonRequestT {
        constructor(cid?: string);
        clone(): CommonRequestT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: CommonRequestT): void;
        static read(ins: iceNS0.Ice.InputStream): CommonRequestT;
    }

    const CALLREMARKENGOTRANSFER: string;

    const CALLREMARKMOINTOR: string;

    const CALLREMARKSUBSTITUTE: string;

    const CALLREMARKINTERPOSE: string;

    const CALLREMARKREMOVE: string;

    const CALLREMARKSWITCH: string;

    const CALLREMARKADDMEMBER: string;

    const CALLREMARKPLAYFILE: string;

    const CALLREMARKREMOVEOTHER: string;

    const STRYMSDISPATCHERGROUP: string;

    const SYSMSGLISERENCEERR: string;
}

export namespace Dispatcher {
    abstract class McuCBPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): McuCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<McuCBPrx>;
    }

    abstract class McuCB extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::McuCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
}

export namespace Dispatcher {
    class ScreenDisPlay {
        constructor(index?: number, showmember?: string, hasstream?: boolean);
        clone(): ScreenDisPlay;
        equals(rhs: any): boolean;
        hashCode(): number;
        index: number;
        showmember: string;
        hasstream: boolean;
        static write(outs: iceNS0.Ice.OutputStream, value: ScreenDisPlay): void;
        static read(ins: iceNS0.Ice.InputStream): ScreenDisPlay;
    }

    class ScreenInfo {
        constructor(type?: string, stream?: number, role?: number);
        clone(): ScreenInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        type: string;
        stream: number;
        role: number;
        static write(outs: iceNS0.Ice.OutputStream, value: ScreenInfo): void;
        static read(ins: iceNS0.Ice.InputStream): ScreenInfo;
    }

    type ScreenDisPlaySeq = ScreenDisPlay[];

    class ScreenDisPlaySeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: ScreenDisPlaySeq): void;
        static read(ins: iceNS0.Ice.InputStream): ScreenDisPlaySeq;
    }

    class SetScreenT {
        constructor(cid?: string, screen?: ScreenInfo, DisplaySeq?: ScreenDisPlaySeq);
        clone(): SetScreenT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        screen: ScreenInfo;
        DisplaySeq: ScreenDisPlaySeq;
        static write(outs: iceNS0.Ice.OutputStream, value: SetScreenT): void;
        static read(ins: iceNS0.Ice.InputStream): SetScreenT;
    }

    class SetScreenRT {
        constructor(cid?: string, reslut?: number);
        clone(): SetScreenRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        reslut: number;
        static write(outs: iceNS0.Ice.OutputStream, value: SetScreenRT): void;
        static read(ins: iceNS0.Ice.InputStream): SetScreenRT;
    }

    class SetMemberRoleT {
        constructor(cid?: string, member?: string, role?: number);
        clone(): SetMemberRoleT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        member: string;
        role: number;
        static write(outs: iceNS0.Ice.OutputStream, value: SetMemberRoleT): void;
        static read(ins: iceNS0.Ice.InputStream): SetMemberRoleT;
    }

    class SetMemberRoleRT {
        constructor(cid?: string, reslut?: number);
        clone(): SetMemberRoleRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        reslut: number;
        static write(outs: iceNS0.Ice.OutputStream, value: SetMemberRoleRT): void;
        static read(ins: iceNS0.Ice.InputStream): SetMemberRoleRT;
    }

    class MCUDevice {
        constructor(id?: number, ip?: string, thetype?: number, defaultbandwidth?: number, thename?: string);
        clone(): MCUDevice;
        equals(rhs: any): boolean;
        hashCode(): number;
        id: number;
        ip: string;
        thetype: number;
        defaultbandwidth: number;
        thename: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MCUDevice): void;
        static read(ins: iceNS0.Ice.InputStream): MCUDevice;
    }

    class MCUMettingOP {
        constructor(cid?: string, number?: string);
        clone(): MCUMettingOP;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        number: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MCUMettingOP): void;
        static read(ins: iceNS0.Ice.InputStream): MCUMettingOP;
    }

    type MCUDeviceSeq = MCUDevice[];

    class MCUDeviceSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: MCUDeviceSeq): void;
        static read(ins: iceNS0.Ice.InputStream): MCUDeviceSeq;
    }

    abstract class McuOPPrx extends iceNS0.Ice.ObjectPrx {
        opSetScreen(in0: Dispatcher.Identity, in1: SetScreenT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<SetScreenRT>;
        opSetMemberRole(in0: Dispatcher.Identity, in1: SetMemberRoleT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<SetMemberRoleRT>;
        opGetMCUDevice(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<MCUDeviceSeq>;
        opMCUMettingAddDevice(in0: Dispatcher.Identity, in1: MCUMettingOP, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opMCUMettingDelDevice(in0: Dispatcher.Identity, in1: MCUMettingOP, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): McuOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<McuOPPrx>;
    }

    abstract class McuOP extends iceNS0.Ice.Object {
        abstract opSetScreen(in0: Dispatcher.Identity, in1: SetScreenT, current: iceNS0.Ice.Current): PromiseLike<SetScreenRT> | SetScreenRT;
        abstract opSetMemberRole(in0: Dispatcher.Identity, in1: SetMemberRoleT, current: iceNS0.Ice.Current): PromiseLike<SetMemberRoleRT> | SetMemberRoleRT;
        abstract opGetMCUDevice(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<MCUDeviceSeq> | MCUDeviceSeq;
        abstract opMCUMettingAddDevice(in0: Dispatcher.Identity, in1: MCUMettingOP, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opMCUMettingDelDevice(in0: Dispatcher.Identity, in1: MCUMettingOP, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::McuOP".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class MdsStateAgentMonitorSessionType {
        constructor(sid?: string, employeeid?: string);
        clone(): MdsStateAgentMonitorSessionType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsStateAgentMonitorSessionType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsStateAgentMonitorSessionType;
    }

    class MdsStateAgentMonitorSessionElem {
        constructor(cid?: string, caller?: string, called?: string, type?: number, time?: string, level?: number, state?: string);
        clone(): MdsStateAgentMonitorSessionElem;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        caller: string;
        called: string;
        type: number;
        time: string;
        level: number;
        state: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsStateAgentMonitorSessionElem): void;
        static read(ins: iceNS0.Ice.InputStream): MdsStateAgentMonitorSessionElem;
    }

    type MdsStateAgentMonitorSessionSeq = MdsStateAgentMonitorSessionElem[];

    class MdsStateAgentMonitorSessionSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: MdsStateAgentMonitorSessionSeq): void;
        static read(ins: iceNS0.Ice.InputStream): MdsStateAgentMonitorSessionSeq;
    }

    class MdsStateAgentMonitorSessionRType {
        constructor(sid?: string, sseq?: MdsStateAgentMonitorSessionSeq);
        clone(): MdsStateAgentMonitorSessionRType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        sseq: MdsStateAgentMonitorSessionSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsStateAgentMonitorSessionRType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsStateAgentMonitorSessionRType;
    }

    class MdsStateAgentMonitorDeviceType {
        constructor(sid?: string, employeeid?: string, employeename?: string, type?: number);
        clone(): MdsStateAgentMonitorDeviceType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        employeeid: string;
        employeename: string;
        type: number;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsStateAgentMonitorDeviceType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsStateAgentMonitorDeviceType;
    }

    class MdsStateAgentMonitorDeviceElem {
        constructor(employeename?: string, employeeid?: string, type?: number);
        clone(): MdsStateAgentMonitorDeviceElem;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeename: string;
        employeeid: string;
        type: number;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsStateAgentMonitorDeviceElem): void;
        static read(ins: iceNS0.Ice.InputStream): MdsStateAgentMonitorDeviceElem;
    }

    type MdsStateAgentMonitorDeviceSeq = MdsStateAgentMonitorDeviceElem[];

    class MdsStateAgentMonitorDeviceSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: MdsStateAgentMonitorDeviceSeq): void;
        static read(ins: iceNS0.Ice.InputStream): MdsStateAgentMonitorDeviceSeq;
    }

    class MdsStateAgentMonitorDeviceRType {
        constructor(sid?: string, dseq?: MdsStateAgentMonitorDeviceSeq);
        clone(): MdsStateAgentMonitorDeviceRType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        dseq: MdsStateAgentMonitorDeviceSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsStateAgentMonitorDeviceRType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsStateAgentMonitorDeviceRType;
    }

    class MdsSessionAgentSetNightServiceType {
        constructor(sid?: string, employeeid?: string, nightnumber?: string, starttime?: string, endtime?: string);
        clone(): MdsSessionAgentSetNightServiceType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        employeeid: string;
        nightnumber: string;
        starttime: string;
        endtime: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsSessionAgentSetNightServiceType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsSessionAgentSetNightServiceType;
    }

    class MdsSessionAgentSetNightServiceRsType {
        constructor(sid?: string);
        clone(): MdsSessionAgentSetNightServiceRsType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsSessionAgentSetNightServiceRsType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsSessionAgentSetNightServiceRsType;
    }

    class MdsSessionAgentSetNightServiceReType {
        constructor(sid?: string, errid?: number, dis?: string);
        clone(): MdsSessionAgentSetNightServiceReType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        errid: number;
        dis: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsSessionAgentSetNightServiceReType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsSessionAgentSetNightServiceReType;
    }

    class MdsDataAgentGetConfigType {
        constructor(sid?: string, employeeid?: string);
        clone(): MdsDataAgentGetConfigType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsDataAgentGetConfigType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsDataAgentGetConfigType;
    }

    class MdsDataAgentGetConfigRType {
        constructor(sid?: string, databasetype?: string, databasename?: string, databaseuser?: string, databasepwd?: string, databaseip?: string, databaseport?: string);
        clone(): MdsDataAgentGetConfigRType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        databasetype: string;
        databasename: string;
        databaseuser: string;
        databasepwd: string;
        databaseip: string;
        databaseport: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsDataAgentGetConfigRType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsDataAgentGetConfigRType;
    }

    class MdsDataAgentDatachangeType {
        constructor(a?: number);
        clone(): MdsDataAgentDatachangeType;
        equals(rhs: any): boolean;
        hashCode(): number;
        a: number;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsDataAgentDatachangeType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsDataAgentDatachangeType;
    }

    class MdsDataAgentGetDataType {
        constructor(sid?: string, tablename?: string);
        clone(): MdsDataAgentGetDataType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        tablename: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsDataAgentGetDataType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsDataAgentGetDataType;
    }

    class MdsDataAgentGetTerminalVideoIpType {
        constructor(sid?: string, employeeid?: string);
        clone(): MdsDataAgentGetTerminalVideoIpType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsDataAgentGetTerminalVideoIpType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsDataAgentGetTerminalVideoIpType;
    }

    class MdsDataAgentGetTerminalVideoIpRType {
        constructor(sid?: string, employeeid?: string, videoip?: string);
        clone(): MdsDataAgentGetTerminalVideoIpRType;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        employeeid: string;
        videoip: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MdsDataAgentGetTerminalVideoIpRType): void;
        static read(ins: iceNS0.Ice.InputStream): MdsDataAgentGetTerminalVideoIpRType;
    }

    class BindTerminalT {
        constructor(number?: string, type?: number);
        clone(): BindTerminalT;
        equals(rhs: any): boolean;
        hashCode(): number;
        number: string;
        type: number;
        static write(outs: iceNS0.Ice.OutputStream, value: BindTerminalT): void;
        static read(ins: iceNS0.Ice.InputStream): BindTerminalT;
    }

    type BindTerminalSeq = BindTerminalT[];

    class BindTerminalSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: BindTerminalSeq): void;
        static read(ins: iceNS0.Ice.InputStream): BindTerminalSeq;
    }

    class BindTerminalRT {
        constructor(ret?: string);
        clone(): BindTerminalRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        ret: string;
        static write(outs: iceNS0.Ice.OutputStream, value: BindTerminalRT): void;
        static read(ins: iceNS0.Ice.InputStream): BindTerminalRT;
    }

    class AllStateT {
        constructor(type?: string, group?: string, employeeid?: string);
        clone(): AllStateT;
        equals(rhs: any): boolean;
        hashCode(): number;
        type: string;
        group: string;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: AllStateT): void;
        static read(ins: iceNS0.Ice.InputStream): AllStateT;
    }

    class AllStateRT {
        constructor(employeeid?: string, rstate?: Dispatcher.RegisterState, cstate?: Dispatcher.CallState, othernumber?: string, othername?: string);
        clone(): AllStateRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        rstate: Dispatcher.RegisterState;
        cstate: Dispatcher.CallState;
        othernumber: string;
        othername: string;
        static write(outs: iceNS0.Ice.OutputStream, value: AllStateRT): void;
        static read(ins: iceNS0.Ice.InputStream): AllStateRT;
    }

    type AllStateRSeq = AllStateRT[];

    class AllStateRSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: AllStateRSeq): void;
        static read(ins: iceNS0.Ice.InputStream): AllStateRSeq;
    }

    class SetNightServiceT {
        constructor(nightnumber?: string, starttime?: string, endtime?: string);
        clone(): SetNightServiceT;
        equals(rhs: any): boolean;
        hashCode(): number;
        nightnumber: string;
        starttime: string;
        endtime: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SetNightServiceT): void;
        static read(ins: iceNS0.Ice.InputStream): SetNightServiceT;
    }

    class SetNightServiceRT {
        constructor(dummy?: string);
        clone(): SetNightServiceRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dummy: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SetNightServiceRT): void;
        static read(ins: iceNS0.Ice.InputStream): SetNightServiceRT;
    }

    class TerminalDetailT {
        constructor(number?: string);
        clone(): TerminalDetailT;
        equals(rhs: any): boolean;
        hashCode(): number;
        number: string;
        static write(outs: iceNS0.Ice.OutputStream, value: TerminalDetailT): void;
        static read(ins: iceNS0.Ice.InputStream): TerminalDetailT;
    }

    class TerminalDetailRT {
        constructor(id?: number, employeeId?: string, password?: string, employeeLevel?: number, departId?: number, roleId?: number, name?: string, addTime?: string, modifyTime?: string, theState?: number, theType?: number, remark?: string, latitude?: number, longitude?: number, isRecord?: number, monName?: string, monPasswd?: string, monIp?: string, monPort?: number, monFlag?: string, isVideo?: number);
        clone(): TerminalDetailRT;
        equals(rhs: any): boolean;
        id: number;
        employeeId: string;
        password: string;
        employeeLevel: number;
        departId: number;
        roleId: number;
        name: string;
        addTime: string;
        modifyTime: string;
        theState: number;
        theType: number;
        remark: string;
        latitude: number;
        longitude: number;
        isRecord: number;
        monName: string;
        monPasswd: string;
        monIp: string;
        monPort: number;
        monFlag: string;
        isVideo: number;
        static write(outs: iceNS0.Ice.OutputStream, value: TerminalDetailRT): void;
        static read(ins: iceNS0.Ice.InputStream): TerminalDetailRT;
    }

    class GetSessionEventT {
        constructor(dummy?: string);
        clone(): GetSessionEventT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dummy: string;
        static write(outs: iceNS0.Ice.OutputStream, value: GetSessionEventT): void;
        static read(ins: iceNS0.Ice.InputStream): GetSessionEventT;
    }

    abstract class MDCSrvPrx extends iceNS0.Ice.ObjectPrx {
        opLogin(in0: Dispatcher.Identity, in1: Dispatcher.LoginT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.LoginRT>;
        opLogout(in0: Dispatcher.Identity, in1: Dispatcher.LogoutT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.LogoutRT>;
        opRelogin(in0: Dispatcher.Identity, in1: Dispatcher.ReloginT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opHeartbeat(in0: Dispatcher.Identity, in1: number, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.HeartbeatRT>;
        opChangePassWord(in0: Dispatcher.Identity, in1: Dispatcher.ChangePassWordT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.ChangePassWordRT>;
        opForceKickOut(in0: Dispatcher.Identity, in1: Dispatcher.ForceKickOutT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opNegoTransfer(id: Dispatcher.Identity, _in: Dispatcher.NegoTransferT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.NegoTransferRT>;
        opPlayAudio(id: Dispatcher.Identity, _in: Dispatcher.PlayAudioT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PlayAudioRT>;
        opSubstitute(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CallCommonRT>;
        opSpeaker(id: Dispatcher.Identity, _in: Dispatcher.SpeakerT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SpeakerRT>;
        opHear(id: Dispatcher.Identity, _in: Dispatcher.HearT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.HearRT>;
        opForceEndConfe(id: Dispatcher.Identity, _in: Dispatcher.ForceEndConfeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CommonRequestT>;
        opRemove(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CallCommonRT>;
        opRemoveOther(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CallCommonRT>;
        opInterpose(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CallCommonRT>;
        opMonitor(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CallCommonRT>;
        opSwitch(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CallCommonRT>;
        opHold(id: Dispatcher.Identity, _in: Dispatcher.HoldT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.HoldRT>;
        opHangup(id: Dispatcher.Identity, _in: Dispatcher.HangupT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.HangupRT>;
        opHangup1(id: Dispatcher.Identity, _in: Dispatcher.HangupT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.HangupRT>;
        opCreateConf(id: Dispatcher.Identity, _in: Dispatcher.CreateConfT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CreateConfRT>;
        opCreateMcuConf(id: Dispatcher.Identity, _in: Dispatcher.CreateMcuConfT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CreateConfRT>;
        opCreateMcuConf1(id: Dispatcher.Identity, _in: Dispatcher.CreateMcuConf1T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CreateConfRT>;
        opCreateConf1(id: Dispatcher.Identity, _in: Dispatcher.CreateConf1T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CreateConfRT>;
        opAddMember(id: Dispatcher.Identity, _in: Dispatcher.AddMemberT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.AddMemberRT>;
        opDelMember(id: Dispatcher.Identity, _in: Dispatcher.DelMemberT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.DelMemberRT>;
        opAllCallMember(id: Dispatcher.Identity, _in: Dispatcher.AllCallMemberT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.AllCallMemberRSeq>;
        opPullQueueCall(id: Dispatcher.Identity, _in: Dispatcher.PullQueueCallT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CommonRequestT>;
        opPushCallToQueue(id: Dispatcher.Identity, _in: Dispatcher.PushCallToQueueT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CommonRequestT>;
        opPushCallToQueue1(id: Dispatcher.Identity, _in: Dispatcher.PushCallToQueueT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CommonRequestT>;
        opGetAllSession(id: Dispatcher.Identity, _in: Dispatcher.GetAllSessionT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SessionChangeTSeq>;
        opGetAllSession1(id: Dispatcher.Identity, _in: Dispatcher.GetAllSession1T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SessionChangeTSeq>;
        opSendDTMFbyCid(id: Dispatcher.Identity, _in: Dispatcher.SendDTMFbyCidT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opCreateByCallOrder(id: Dispatcher.Identity, _in: Dispatcher.CalledOrderT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CalledOrderRT>;
        opAddMemberByCallOrder(id: Dispatcher.Identity, _in: Dispatcher.AddMemberByCallOrderT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opSetReCallNumber(id: Dispatcher.Identity, _in: Dispatcher.SetReCallNumberT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opAllCallMember1(id: Dispatcher.Identity, _in: Dispatcher.AllCallMemberT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.AllCallMemberRSeq1>;
        opSessionJoin(id: Dispatcher.Identity, in1: Dispatcher.SessionJoinSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CreateConfRT>;
        opCreateSOSCall(id: Dispatcher.Identity, in1: Dispatcher.CreateSOSCallT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CreateConfRT>;
        opTransferVideo(id: Dispatcher.Identity, in1: Dispatcher.TransferVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.TransferVideoRT>;
        opTransferVideoToMcu(id: Dispatcher.Identity, in1: Dispatcher.TransferVideoToMCUT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.TransferVideoRT>;
        opCreateUpLoadVideoCall(id: Dispatcher.Identity, in1: Dispatcher.UploadVideoCallT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CreateConfRT>;
        opTempSessionJoin(id: Dispatcher.Identity, in1: Dispatcher.SessionJoinSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SessionJoinSeq>;
        opAddMember1(id: Dispatcher.Identity, _in: Dispatcher.AddMemberT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.AddMemberRT>;
        opIntercomRecall(id: Dispatcher.Identity, _in: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opAllCallMember2(id: Dispatcher.Identity, cid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opCreatePlayFileMetting(id: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opTree(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.TreeRT>;
        opGetVersion(in0: Dispatcher.Identity, in1: Dispatcher.GetVersionT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GetVersionRT>;
        opGetLocalEmployeeByType(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.TreeRT>;
        opGetFXDevices(in0: Dispatcher.Identity, in1: Dispatcher.GetFXDeviceT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.FXDeviceSeq>;
        opGetFXDevicesDetail(in0: Dispatcher.Identity, in1: Dispatcher.GetFXDeviceDetailT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.FXDeviceSeq>;
        opGetConfigByKey(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opLocalPrefix(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.LocalDNSPrefixRT>;
        opGetConfigByKeys(in0: Dispatcher.Identity, in1: Dispatcher.KeyConfigSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.KeyConfigSeq>;
        opGetMealConfig(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.MealConfig>;
        opGetConfigByKeys1(in0: Dispatcher.Identity, in1: Dispatcher.KeyConfigSeq1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.KeyConfigSeq1>;
        opGetMealConfig1(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.MealConfig1>;
        opGetJsonTree(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetGroupDetail(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSetDeviceChannel(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetBSServerInfo(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetServiceLicenseInfo(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetOtherProgramInfo(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opVideoBugStart(in0: Dispatcher.Identity, in1: Dispatcher.VideoBugStartT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.VideoBugStartRT>;
        opVideoBugEnd(in0: Dispatcher.Identity, in1: Dispatcher.VideoBugEndT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.VideoBugEndRT>;
        opPlayVideo(in0: Dispatcher.Identity, in1: Dispatcher.PlayVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PlayVideoRT>;
        opVideoInfo(in0: Dispatcher.Identity, in1: Dispatcher.VideoInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.VideoInfoRT>;
        opVideoInfo1(in0: Dispatcher.Identity, in1: Dispatcher.VideoInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.VideoInfoRT1>;
        opCameraNumberControl(in0: Dispatcher.Identity, in1: Dispatcher.CameraNumberControl, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opCameraIPControl(in0: Dispatcher.Identity, in1: Dispatcher.CameraIPControl, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetHistoryVideo(in0: Dispatcher.Identity, in1: Dispatcher.HistoryVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opPlayHistoryVideo(in0: Dispatcher.Identity, in1: Dispatcher.HistoryVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PlayHistoryVideoRT>;
        opHistoryVideoPlay(in0: Dispatcher.Identity, in1: Dispatcher.HistoryVideoOperateT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opHistoryVideoPause(in0: Dispatcher.Identity, in1: Dispatcher.HistoryVideoOperateT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opHistoryVideoSpeed(in0: Dispatcher.Identity, in1: Dispatcher.HistoryVSpeedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opSipPhoneVideoBug(in0: Dispatcher.Identity, in1: Dispatcher.SipPhoneVideoBugT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SipPhoneVideoBugRT>;
        opGisInfoByTime(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByTimeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<DispatcherDB.GISDETAILSeq>;
        opGisInfoByTime1(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByTimeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GISDETAILSeq1>;
        opGisInfoByEllipse(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByEllipseT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<DispatcherDB.GISDETAILSeq>;
        opGisInfoByEllipse1(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByEllipseT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GISDETAILSeq1>;
        opGisInfoByRectangle(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByRectangleT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<DispatcherDB.GISDETAILSeq>;
        opGisInfoByRectangle1(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByRectangleT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GISDETAILSeq1>;
        opGetPosition(in0: Dispatcher.Identity, in1: Dispatcher.GetPositionT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GetPositionRT>;
        opGetPosition1(in0: Dispatcher.Identity, in1: Dispatcher.GetPositionT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GetPositionRT1>;
        opGisTrace(in0: Dispatcher.Identity, in1: Dispatcher.GisTraceSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GisTraceRSeq>;
        opGisInfo(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetGisInfos(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opReportGisInfo(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetGisInfoByEllipse(in0: Dispatcher.Identity, in1: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opPttReqMemberInfo(in0: Dispatcher.Identity, in1: Dispatcher.PttReqMemberInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PttReqMemberInfoRT>;
        opPttReqMemberInfo1(id: Dispatcher.Identity, _in: Dispatcher.PttReqMemberInfoT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PttReqMemberInfoRT1>;
        opPttReqRight(in0: Dispatcher.Identity, in1: Dispatcher.PttReqRightT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CommonRequestT>;
        opSetIntercomTimeOutInfo(in0: Dispatcher.Identity, in1: Dispatcher.PttTimeOutT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<number>;
        opGetIntercomTimeOutInfo(in0: Dispatcher.Identity, cid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PttTimeOutT>;
        opPttReqGroupInfo(in0: Dispatcher.Identity, in1: Dispatcher.PttReqGroupInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opApplyUpload(in0: Dispatcher.Identity, in1: Dispatcher.ApplyUploadT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.ApplyUploadRT>;
        opUploadEvent(in0: Dispatcher.Identity, in1: Dispatcher.UploadEventT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opFlist(in0: Dispatcher.Identity, in1: Dispatcher.FlistSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.FlistRSeq>;
        opFileReceived(in0: Dispatcher.Identity, in1: Dispatcher.FileReceivedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opDeleteFile(in0: Dispatcher.Identity, in1: Dispatcher.FileDeleteTSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opUploadFile(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSetUploadFileState(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetFileInfoByCondition(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opMessage(in0: Dispatcher.Identity, in1: Dispatcher.MessageT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.MessageRT>;
        opMessageReceived(in0: Dispatcher.Identity, in1: Dispatcher.MessageReceivedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetOldMsgFile(in0: Dispatcher.Identity, in1: Dispatcher.GetOldMsgFileT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GetOldMsgFileRT>;
        opDelMessage(in0: Dispatcher.Identity, msgid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetGroupMsgByEmployeeid(in0: Dispatcher.Identity, employeeid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opAddGroupMsg(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opUpdateGroupMsg(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opDeleteGroupMsg(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSendMessage(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetOldMessage(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGroupMsgAddEmployee(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGroupMsgDelEmployee(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetGroupMsg(in0: Dispatcher.Identity, employeeid: string, groupid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSendVideo(id: Dispatcher.Identity, _in: Dispatcher.SendVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SendVideoRT>;
        opSendVideo1(id: Dispatcher.Identity, _in: Dispatcher.SendVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SendVideoRT1>;
        opGetVideo(id: Dispatcher.Identity, _in: Dispatcher.GetVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GetVideoRT>;
        opChangeVideo(id: Dispatcher.Identity, _in: Dispatcher.ChangeVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.ChangeVideoRT>;
        opReleaseVideo(id: Dispatcher.Identity, _in: Dispatcher.ReleaseVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.ReleaseVideoRT>;
        opPushVideo(id: Dispatcher.Identity, _in: Dispatcher.PushVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PushVideoRT>;
        opGetKeyFrame(id: Dispatcher.Identity, _in: Dispatcher.GetKeyFrameT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetMemberVideo(id: Dispatcher.Identity, _in: Dispatcher.GetVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GetMemberVideoRT>;
        opMCUPushMemberToOther(id: Dispatcher.Identity, in1: Dispatcher.MCUPushMemberToOtherT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opStopMCUPushMemberToOther(id: Dispatcher.Identity, in1: Dispatcher.StopMCUPushMemberToOtherT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetCallVideo(id: Dispatcher.Identity, _in: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSendCallVideo(id: Dispatcher.Identity, _in: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opPrePlan(id: Dispatcher.Identity, _in: Dispatcher.PrePlanT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PrePlanRSeq>;
        opPrePlanStart(id: Dispatcher.Identity, _in: Dispatcher.PrePlanStartT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PrePlanStartRT>;
        opPrePlanStop(id: Dispatcher.Identity, _in: Dispatcher.PrePlanStopT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PrePlanStopRT>;
        opGetPlan(id: Dispatcher.Identity, _in: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetPlanType(id: Dispatcher.Identity, _in: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opFax(id: Dispatcher.Identity, _in: Dispatcher.FaxT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.FaxRT>;
        opGetDecoderDevice(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.DecoderDeviceInfoSeq>;
        opGetDisplayCfg(in0: Dispatcher.Identity, in1: Dispatcher.GetDisplayCfg, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.RetDecoderAllCfg>;
        opGetDecoderAbility(in0: Dispatcher.Identity, in1: Dispatcher.GetDisplayCfg, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.RetDecoderAbility>;
        opGetChannelDecoderState(in0: Dispatcher.Identity, in1: Dispatcher.opChannelStatus, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opSetDisplayCfg(in0: Dispatcher.Identity, in1: Dispatcher.SetDecoderCfg, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStartDecoder(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStartDecoderByUrl(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderByUrlInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStopDecoder(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStopDecoderByUrl(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderByUrlInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opTransferRTP(in0: Dispatcher.Identity, in1: Dispatcher.opTransferRTPInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opTransferStopRTP(in0: Dispatcher.Identity, in1: Dispatcher.opTransferRTPInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStartDecoderByVideoInfo(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderByVideoInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opStopDecoderByVideoInfo(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderByVideoInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opGetDisplayCfg1(in0: Dispatcher.Identity, in1: Dispatcher.GetDisplayCfg, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSetWindows(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetSubWindowsStatus(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSetDisplayPosition(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opSetScreenMode(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opSetScreen(in0: Dispatcher.Identity, in1: Dispatcher.SetScreenT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SetScreenRT>;
        opSetMemberRole(in0: Dispatcher.Identity, in1: Dispatcher.SetMemberRoleT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SetMemberRoleRT>;
        opGetMCUDevice(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.MCUDeviceSeq>;
        opMCUMettingAddDevice(in0: Dispatcher.Identity, in1: Dispatcher.MCUMettingOP, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opMCUMettingDelDevice(in0: Dispatcher.Identity, in1: Dispatcher.MCUMettingOP, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opPublishInfo(in0: Dispatcher.Identity, in1: Dispatcher.SubInfos, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opUnPublishInfo(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opPublishHB(in0: Dispatcher.Identity, in1: number, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opGetBusinessTypes(id: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.BusinessTypeRTSeq>;
        opStartSendBusinessInfo(id: Dispatcher.Identity, in1: Dispatcher.StartSendBusInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.SendBusInfoRT>;
        opStartSendFile(id: Dispatcher.Identity, in1: Dispatcher.StartSendBusFileT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.StartSendBusFileRT>;
        opSendBusinessInfoEnd(id: Dispatcher.Identity, in1: Dispatcher.SendBusInfoEndT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opSendBusinessFileEnd(id: Dispatcher.Identity, in1: Dispatcher.SendBusFileEndT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opChangeBusFileReceive(id: Dispatcher.Identity, in1: Dispatcher.SendBusFileReceiveT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opBusFileReceived(id: Dispatcher.Identity, in1: Dispatcher.BusFileReceivedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetNotReceivedInfo(id: Dispatcher.Identity, in1: Dispatcher.GetNotReceivedInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GetNotReceivedInfoRT>;
        opDeleteBusInfo(id: Dispatcher.Identity, msgid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;
        opGetStationLine(id: Dispatcher.Identity, _in: Dispatcher.StationLineT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.StationLineRTSeq>;
        opGetStation(id: Dispatcher.Identity, _in: Dispatcher.StationT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.StationRT>;
        opGetAllStation(id: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.StationRTSeq>;
        opBindTerminal(in0: Dispatcher.Identity, in1: BindTerminalSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<BindTerminalRT>;
        opAllState(in0: Dispatcher.Identity, in1: AllStateT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<AllStateRSeq>;
        opSetNightService(in0: Dispatcher.Identity, in1: SetNightServiceT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<SetNightServiceRT>;
        opTerminalDetail(in0: Dispatcher.Identity, in1: TerminalDetailT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<TerminalDetailRT>;
        opGetSessionEvent(id: Dispatcher.Identity, _in: GetSessionEventT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        /**
         * 函数调用
         * @param context The Context map to send with the invocation.
         * @return The asynchronous result object for the invocation.
         */
        MdsDataAgentGetConfig(id: string, v0: MdsDataAgentGetConfigType, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        MdsDataAgentDatachange(id: string, v0: MdsDataAgentDatachangeType, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        MdsStateAgentMonitorSession(id: string, v0: MdsStateAgentMonitorSessionType, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        MdsStateAgentMonitorDevice(id: string, v0: MdsStateAgentMonitorDeviceType, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        MdsDataAgentGetTerminalVideoIp(id: string, v0: MdsDataAgentGetTerminalVideoIpType, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): MDCSrvPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<MDCSrvPrx>;
    }

    abstract class MDCSrv extends iceNS0.Ice.Object {
        abstract opLogin(in0: Dispatcher.Identity, in1: Dispatcher.LoginT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.LoginRT> | Dispatcher.LoginRT;
        abstract opLogout(in0: Dispatcher.Identity, in1: Dispatcher.LogoutT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.LogoutRT> | Dispatcher.LogoutRT;
        abstract opRelogin(in0: Dispatcher.Identity, in1: Dispatcher.ReloginT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opHeartbeat(in0: Dispatcher.Identity, in1: number, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.HeartbeatRT> | Dispatcher.HeartbeatRT;
        abstract opChangePassWord(in0: Dispatcher.Identity, in1: Dispatcher.ChangePassWordT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.ChangePassWordRT> | Dispatcher.ChangePassWordRT;
        abstract opForceKickOut(in0: Dispatcher.Identity, in1: Dispatcher.ForceKickOutT, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opNegoTransfer(id: Dispatcher.Identity, _in: Dispatcher.NegoTransferT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.NegoTransferRT> | Dispatcher.NegoTransferRT;
        abstract opPlayAudio(id: Dispatcher.Identity, _in: Dispatcher.PlayAudioT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PlayAudioRT> | Dispatcher.PlayAudioRT;
        abstract opSubstitute(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CallCommonRT> | Dispatcher.CallCommonRT;
        abstract opSpeaker(id: Dispatcher.Identity, _in: Dispatcher.SpeakerT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SpeakerRT> | Dispatcher.SpeakerRT;
        abstract opHear(id: Dispatcher.Identity, _in: Dispatcher.HearT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.HearRT> | Dispatcher.HearRT;
        abstract opForceEndConfe(id: Dispatcher.Identity, _in: Dispatcher.ForceEndConfeT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CommonRequestT> | Dispatcher.CommonRequestT;
        abstract opRemove(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CallCommonRT> | Dispatcher.CallCommonRT;
        abstract opRemoveOther(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CallCommonRT> | Dispatcher.CallCommonRT;
        abstract opInterpose(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CallCommonRT> | Dispatcher.CallCommonRT;
        abstract opMonitor(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CallCommonRT> | Dispatcher.CallCommonRT;
        abstract opSwitch(id: Dispatcher.Identity, _in: Dispatcher.CallCommonT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CallCommonRT> | Dispatcher.CallCommonRT;
        abstract opHold(id: Dispatcher.Identity, _in: Dispatcher.HoldT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.HoldRT> | Dispatcher.HoldRT;
        abstract opHangup(id: Dispatcher.Identity, _in: Dispatcher.HangupT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.HangupRT> | Dispatcher.HangupRT;
        abstract opHangup1(id: Dispatcher.Identity, _in: Dispatcher.HangupT1, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.HangupRT> | Dispatcher.HangupRT;
        abstract opCreateConf(id: Dispatcher.Identity, _in: Dispatcher.CreateConfT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CreateConfRT> | Dispatcher.CreateConfRT;
        abstract opCreateMcuConf(id: Dispatcher.Identity, _in: Dispatcher.CreateMcuConfT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CreateConfRT> | Dispatcher.CreateConfRT;
        abstract opCreateMcuConf1(id: Dispatcher.Identity, _in: Dispatcher.CreateMcuConf1T, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CreateConfRT> | Dispatcher.CreateConfRT;
        abstract opCreateConf1(id: Dispatcher.Identity, _in: Dispatcher.CreateConf1T, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CreateConfRT> | Dispatcher.CreateConfRT;
        abstract opAddMember(id: Dispatcher.Identity, _in: Dispatcher.AddMemberT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.AddMemberRT> | Dispatcher.AddMemberRT;
        abstract opDelMember(id: Dispatcher.Identity, _in: Dispatcher.DelMemberT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.DelMemberRT> | Dispatcher.DelMemberRT;
        abstract opAllCallMember(id: Dispatcher.Identity, _in: Dispatcher.AllCallMemberT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.AllCallMemberRSeq> | Dispatcher.AllCallMemberRSeq;
        abstract opPullQueueCall(id: Dispatcher.Identity, _in: Dispatcher.PullQueueCallT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CommonRequestT> | Dispatcher.CommonRequestT;
        abstract opPushCallToQueue(id: Dispatcher.Identity, _in: Dispatcher.PushCallToQueueT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CommonRequestT> | Dispatcher.CommonRequestT;
        abstract opPushCallToQueue1(id: Dispatcher.Identity, _in: Dispatcher.PushCallToQueueT1, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CommonRequestT> | Dispatcher.CommonRequestT;
        abstract opGetAllSession(id: Dispatcher.Identity, _in: Dispatcher.GetAllSessionT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SessionChangeTSeq> | Dispatcher.SessionChangeTSeq;
        abstract opGetAllSession1(id: Dispatcher.Identity, _in: Dispatcher.GetAllSession1T, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SessionChangeTSeq> | Dispatcher.SessionChangeTSeq;
        abstract opSendDTMFbyCid(id: Dispatcher.Identity, _in: Dispatcher.SendDTMFbyCidT, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opCreateByCallOrder(id: Dispatcher.Identity, _in: Dispatcher.CalledOrderT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CalledOrderRT> | Dispatcher.CalledOrderRT;
        abstract opAddMemberByCallOrder(id: Dispatcher.Identity, _in: Dispatcher.AddMemberByCallOrderT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opSetReCallNumber(id: Dispatcher.Identity, _in: Dispatcher.SetReCallNumberT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opAllCallMember1(id: Dispatcher.Identity, _in: Dispatcher.AllCallMemberT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.AllCallMemberRSeq1> | Dispatcher.AllCallMemberRSeq1;
        abstract opSessionJoin(id: Dispatcher.Identity, in1: Dispatcher.SessionJoinSeq, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CreateConfRT> | Dispatcher.CreateConfRT;
        abstract opCreateSOSCall(id: Dispatcher.Identity, in1: Dispatcher.CreateSOSCallT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CreateConfRT> | Dispatcher.CreateConfRT;
        abstract opTransferVideo(id: Dispatcher.Identity, in1: Dispatcher.TransferVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.TransferVideoRT> | Dispatcher.TransferVideoRT;
        abstract opTransferVideoToMcu(id: Dispatcher.Identity, in1: Dispatcher.TransferVideoToMCUT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.TransferVideoRT> | Dispatcher.TransferVideoRT;
        abstract opCreateUpLoadVideoCall(id: Dispatcher.Identity, in1: Dispatcher.UploadVideoCallT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CreateConfRT> | Dispatcher.CreateConfRT;
        abstract opTempSessionJoin(id: Dispatcher.Identity, in1: Dispatcher.SessionJoinSeq, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SessionJoinSeq> | Dispatcher.SessionJoinSeq;
        abstract opAddMember1(id: Dispatcher.Identity, _in: Dispatcher.AddMemberT1, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.AddMemberRT> | Dispatcher.AddMemberRT;
        abstract opIntercomRecall(id: Dispatcher.Identity, _in: string, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opAllCallMember2(id: Dispatcher.Identity, cid: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opCreatePlayFileMetting(id: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opTree(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.TreeRT> | Dispatcher.TreeRT;
        abstract opGetVersion(in0: Dispatcher.Identity, in1: Dispatcher.GetVersionT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GetVersionRT> | Dispatcher.GetVersionRT;
        abstract opGetLocalEmployeeByType(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.TreeRT> | Dispatcher.TreeRT;
        abstract opGetFXDevices(in0: Dispatcher.Identity, in1: Dispatcher.GetFXDeviceT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.FXDeviceSeq> | Dispatcher.FXDeviceSeq;
        abstract opGetFXDevicesDetail(in0: Dispatcher.Identity, in1: Dispatcher.GetFXDeviceDetailT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.FXDeviceSeq> | Dispatcher.FXDeviceSeq;
        abstract opGetConfigByKey(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opLocalPrefix(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.LocalDNSPrefixRT> | Dispatcher.LocalDNSPrefixRT;
        abstract opGetConfigByKeys(in0: Dispatcher.Identity, in1: Dispatcher.KeyConfigSeq, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.KeyConfigSeq> | Dispatcher.KeyConfigSeq;
        abstract opGetMealConfig(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.MealConfig> | Dispatcher.MealConfig;
        abstract opGetConfigByKeys1(in0: Dispatcher.Identity, in1: Dispatcher.KeyConfigSeq1, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.KeyConfigSeq1> | Dispatcher.KeyConfigSeq1;
        abstract opGetMealConfig1(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.MealConfig1> | Dispatcher.MealConfig1;
        abstract opGetJsonTree(in0: Dispatcher.Identity, in1: Dispatcher.TreeT, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetGroupDetail(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSetDeviceChannel(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetBSServerInfo(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetServiceLicenseInfo(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetOtherProgramInfo(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opVideoBugStart(in0: Dispatcher.Identity, in1: Dispatcher.VideoBugStartT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.VideoBugStartRT> | Dispatcher.VideoBugStartRT;
        abstract opVideoBugEnd(in0: Dispatcher.Identity, in1: Dispatcher.VideoBugEndT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.VideoBugEndRT> | Dispatcher.VideoBugEndRT;
        abstract opPlayVideo(in0: Dispatcher.Identity, in1: Dispatcher.PlayVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PlayVideoRT> | Dispatcher.PlayVideoRT;
        abstract opVideoInfo(in0: Dispatcher.Identity, in1: Dispatcher.VideoInfoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.VideoInfoRT> | Dispatcher.VideoInfoRT;
        abstract opVideoInfo1(in0: Dispatcher.Identity, in1: Dispatcher.VideoInfoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.VideoInfoRT1> | Dispatcher.VideoInfoRT1;
        abstract opCameraNumberControl(in0: Dispatcher.Identity, in1: Dispatcher.CameraNumberControl, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opCameraIPControl(in0: Dispatcher.Identity, in1: Dispatcher.CameraIPControl, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetHistoryVideo(in0: Dispatcher.Identity, in1: Dispatcher.HistoryVideoT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opPlayHistoryVideo(in0: Dispatcher.Identity, in1: Dispatcher.HistoryVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PlayHistoryVideoRT> | Dispatcher.PlayHistoryVideoRT;
        abstract opHistoryVideoPlay(in0: Dispatcher.Identity, in1: Dispatcher.HistoryVideoOperateT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opHistoryVideoPause(in0: Dispatcher.Identity, in1: Dispatcher.HistoryVideoOperateT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opHistoryVideoSpeed(in0: Dispatcher.Identity, in1: Dispatcher.HistoryVSpeedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opSipPhoneVideoBug(in0: Dispatcher.Identity, in1: Dispatcher.SipPhoneVideoBugT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SipPhoneVideoBugRT> | Dispatcher.SipPhoneVideoBugRT;
        abstract opGisInfoByTime(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByTimeT, current: iceNS0.Ice.Current): PromiseLike<DispatcherDB.GISDETAILSeq> | DispatcherDB.GISDETAILSeq;
        abstract opGisInfoByTime1(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByTimeT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GISDETAILSeq1> | Dispatcher.GISDETAILSeq1;
        abstract opGisInfoByEllipse(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByEllipseT, current: iceNS0.Ice.Current): PromiseLike<DispatcherDB.GISDETAILSeq> | DispatcherDB.GISDETAILSeq;
        abstract opGisInfoByEllipse1(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByEllipseT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GISDETAILSeq1> | Dispatcher.GISDETAILSeq1;
        abstract opGisInfoByRectangle(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByRectangleT, current: iceNS0.Ice.Current): PromiseLike<DispatcherDB.GISDETAILSeq> | DispatcherDB.GISDETAILSeq;
        abstract opGisInfoByRectangle1(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoByRectangleT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GISDETAILSeq1> | Dispatcher.GISDETAILSeq1;
        abstract opGetPosition(in0: Dispatcher.Identity, in1: Dispatcher.GetPositionT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GetPositionRT> | Dispatcher.GetPositionRT;
        abstract opGetPosition1(in0: Dispatcher.Identity, in1: Dispatcher.GetPositionT1, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GetPositionRT1> | Dispatcher.GetPositionRT1;
        abstract opGisTrace(in0: Dispatcher.Identity, in1: Dispatcher.GisTraceSeq, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GisTraceRSeq> | Dispatcher.GisTraceRSeq;
        abstract opGisInfo(in0: Dispatcher.Identity, in1: Dispatcher.GisInfoT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetGisInfos(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opReportGisInfo(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetGisInfoByEllipse(in0: Dispatcher.Identity, in1: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opPttReqMemberInfo(in0: Dispatcher.Identity, in1: Dispatcher.PttReqMemberInfoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PttReqMemberInfoRT> | Dispatcher.PttReqMemberInfoRT;
        abstract opPttReqMemberInfo1(id: Dispatcher.Identity, _in: Dispatcher.PttReqMemberInfoT1, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PttReqMemberInfoRT1> | Dispatcher.PttReqMemberInfoRT1;
        abstract opPttReqRight(in0: Dispatcher.Identity, in1: Dispatcher.PttReqRightT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CommonRequestT> | Dispatcher.CommonRequestT;
        abstract opSetIntercomTimeOutInfo(in0: Dispatcher.Identity, in1: Dispatcher.PttTimeOutT, current: iceNS0.Ice.Current): PromiseLike<number> | number;
        abstract opGetIntercomTimeOutInfo(in0: Dispatcher.Identity, cid: string, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PttTimeOutT> | Dispatcher.PttTimeOutT;
        abstract opPttReqGroupInfo(in0: Dispatcher.Identity, in1: Dispatcher.PttReqGroupInfoT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opApplyUpload(in0: Dispatcher.Identity, in1: Dispatcher.ApplyUploadT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.ApplyUploadRT> | Dispatcher.ApplyUploadRT;
        abstract opUploadEvent(in0: Dispatcher.Identity, in1: Dispatcher.UploadEventT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opFlist(in0: Dispatcher.Identity, in1: Dispatcher.FlistSeq, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.FlistRSeq> | Dispatcher.FlistRSeq;
        abstract opFileReceived(in0: Dispatcher.Identity, in1: Dispatcher.FileReceivedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opDeleteFile(in0: Dispatcher.Identity, in1: Dispatcher.FileDeleteTSeq, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opUploadFile(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSetUploadFileState(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetFileInfoByCondition(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opMessage(in0: Dispatcher.Identity, in1: Dispatcher.MessageT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.MessageRT> | Dispatcher.MessageRT;
        abstract opMessageReceived(in0: Dispatcher.Identity, in1: Dispatcher.MessageReceivedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetOldMsgFile(in0: Dispatcher.Identity, in1: Dispatcher.GetOldMsgFileT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GetOldMsgFileRT> | Dispatcher.GetOldMsgFileRT;
        abstract opDelMessage(in0: Dispatcher.Identity, msgid: string, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetGroupMsgByEmployeeid(in0: Dispatcher.Identity, employeeid: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opAddGroupMsg(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opUpdateGroupMsg(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opDeleteGroupMsg(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSendMessage(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetOldMessage(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGroupMsgAddEmployee(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGroupMsgDelEmployee(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetGroupMsg(in0: Dispatcher.Identity, employeeid: string, groupid: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSendVideo(id: Dispatcher.Identity, _in: Dispatcher.SendVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SendVideoRT> | Dispatcher.SendVideoRT;
        abstract opSendVideo1(id: Dispatcher.Identity, _in: Dispatcher.SendVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SendVideoRT1> | Dispatcher.SendVideoRT1;
        abstract opGetVideo(id: Dispatcher.Identity, _in: Dispatcher.GetVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GetVideoRT> | Dispatcher.GetVideoRT;
        abstract opChangeVideo(id: Dispatcher.Identity, _in: Dispatcher.ChangeVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.ChangeVideoRT> | Dispatcher.ChangeVideoRT;
        abstract opReleaseVideo(id: Dispatcher.Identity, _in: Dispatcher.ReleaseVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.ReleaseVideoRT> | Dispatcher.ReleaseVideoRT;
        abstract opPushVideo(id: Dispatcher.Identity, _in: Dispatcher.PushVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PushVideoRT> | Dispatcher.PushVideoRT;
        abstract opGetKeyFrame(id: Dispatcher.Identity, _in: Dispatcher.GetKeyFrameT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetMemberVideo(id: Dispatcher.Identity, _in: Dispatcher.GetVideoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GetMemberVideoRT> | Dispatcher.GetMemberVideoRT;
        abstract opMCUPushMemberToOther(id: Dispatcher.Identity, in1: Dispatcher.MCUPushMemberToOtherT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opStopMCUPushMemberToOther(id: Dispatcher.Identity, in1: Dispatcher.StopMCUPushMemberToOtherT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetCallVideo(id: Dispatcher.Identity, _in: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSendCallVideo(id: Dispatcher.Identity, _in: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opPrePlan(id: Dispatcher.Identity, _in: Dispatcher.PrePlanT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PrePlanRSeq> | Dispatcher.PrePlanRSeq;
        abstract opPrePlanStart(id: Dispatcher.Identity, _in: Dispatcher.PrePlanStartT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PrePlanStartRT> | Dispatcher.PrePlanStartRT;
        abstract opPrePlanStop(id: Dispatcher.Identity, _in: Dispatcher.PrePlanStopT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PrePlanStopRT> | Dispatcher.PrePlanStopRT;
        abstract opGetPlan(id: Dispatcher.Identity, _in: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetPlanType(id: Dispatcher.Identity, _in: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opFax(id: Dispatcher.Identity, _in: Dispatcher.FaxT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.FaxRT> | Dispatcher.FaxRT;
        abstract opGetDecoderDevice(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.DecoderDeviceInfoSeq> | Dispatcher.DecoderDeviceInfoSeq;
        abstract opGetDisplayCfg(in0: Dispatcher.Identity, in1: Dispatcher.GetDisplayCfg, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.RetDecoderAllCfg> | Dispatcher.RetDecoderAllCfg;
        abstract opGetDecoderAbility(in0: Dispatcher.Identity, in1: Dispatcher.GetDisplayCfg, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.RetDecoderAbility> | Dispatcher.RetDecoderAbility;
        abstract opGetChannelDecoderState(in0: Dispatcher.Identity, in1: Dispatcher.opChannelStatus, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opSetDisplayCfg(in0: Dispatcher.Identity, in1: Dispatcher.SetDecoderCfg, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStartDecoder(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStartDecoderByUrl(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderByUrlInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStopDecoder(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStopDecoderByUrl(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderByUrlInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opTransferRTP(in0: Dispatcher.Identity, in1: Dispatcher.opTransferRTPInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opTransferStopRTP(in0: Dispatcher.Identity, in1: Dispatcher.opTransferRTPInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStartDecoderByVideoInfo(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderByVideoInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opStopDecoderByVideoInfo(in0: Dispatcher.Identity, in1: Dispatcher.opDecoderByVideoInfo, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opGetDisplayCfg1(in0: Dispatcher.Identity, in1: Dispatcher.GetDisplayCfg, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSetWindows(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetSubWindowsStatus(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSetDisplayPosition(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opSetScreenMode(in0: Dispatcher.Identity, decoderid: string, jsonvalue: string, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opSetScreen(in0: Dispatcher.Identity, in1: Dispatcher.SetScreenT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SetScreenRT> | Dispatcher.SetScreenRT;
        abstract opSetMemberRole(in0: Dispatcher.Identity, in1: Dispatcher.SetMemberRoleT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SetMemberRoleRT> | Dispatcher.SetMemberRoleRT;
        abstract opGetMCUDevice(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.MCUDeviceSeq> | Dispatcher.MCUDeviceSeq;
        abstract opMCUMettingAddDevice(in0: Dispatcher.Identity, in1: Dispatcher.MCUMettingOP, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opMCUMettingDelDevice(in0: Dispatcher.Identity, in1: Dispatcher.MCUMettingOP, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opPublishInfo(in0: Dispatcher.Identity, in1: Dispatcher.SubInfos, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opUnPublishInfo(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opPublishHB(in0: Dispatcher.Identity, in1: number, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opGetBusinessTypes(id: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.BusinessTypeRTSeq> | Dispatcher.BusinessTypeRTSeq;
        abstract opStartSendBusinessInfo(id: Dispatcher.Identity, in1: Dispatcher.StartSendBusInfoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.SendBusInfoRT> | Dispatcher.SendBusInfoRT;
        abstract opStartSendFile(id: Dispatcher.Identity, in1: Dispatcher.StartSendBusFileT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.StartSendBusFileRT> | Dispatcher.StartSendBusFileRT;
        abstract opSendBusinessInfoEnd(id: Dispatcher.Identity, in1: Dispatcher.SendBusInfoEndT, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opSendBusinessFileEnd(id: Dispatcher.Identity, in1: Dispatcher.SendBusFileEndT, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opChangeBusFileReceive(id: Dispatcher.Identity, in1: Dispatcher.SendBusFileReceiveT, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opBusFileReceived(id: Dispatcher.Identity, in1: Dispatcher.BusFileReceivedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetNotReceivedInfo(id: Dispatcher.Identity, in1: Dispatcher.GetNotReceivedInfoT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GetNotReceivedInfoRT> | Dispatcher.GetNotReceivedInfoRT;
        abstract opDeleteBusInfo(id: Dispatcher.Identity, msgid: string, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        abstract opGetStationLine(id: Dispatcher.Identity, _in: Dispatcher.StationLineT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.StationLineRTSeq> | Dispatcher.StationLineRTSeq;
        abstract opGetStation(id: Dispatcher.Identity, _in: Dispatcher.StationT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.StationRT> | Dispatcher.StationRT;
        abstract opGetAllStation(id: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.StationRTSeq> | Dispatcher.StationRTSeq;
        abstract opBindTerminal(in0: Dispatcher.Identity, in1: BindTerminalSeq, current: iceNS0.Ice.Current): PromiseLike<BindTerminalRT> | BindTerminalRT;
        abstract opAllState(in0: Dispatcher.Identity, in1: AllStateT, current: iceNS0.Ice.Current): PromiseLike<AllStateRSeq> | AllStateRSeq;
        abstract opSetNightService(in0: Dispatcher.Identity, in1: SetNightServiceT, current: iceNS0.Ice.Current): PromiseLike<SetNightServiceRT> | SetNightServiceRT;
        abstract opTerminalDetail(in0: Dispatcher.Identity, in1: TerminalDetailT, current: iceNS0.Ice.Current): PromiseLike<TerminalDetailRT> | TerminalDetailRT;
        abstract opGetSessionEvent(id: Dispatcher.Identity, _in: GetSessionEventT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract MdsDataAgentGetConfig(id: string, v0: MdsDataAgentGetConfigType, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract MdsDataAgentDatachange(id: string, v0: MdsDataAgentDatachangeType, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract MdsStateAgentMonitorSession(id: string, v0: MdsStateAgentMonitorSessionType, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract MdsStateAgentMonitorDevice(id: string, v0: MdsStateAgentMonitorDeviceType, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract MdsDataAgentGetTerminalVideoIp(id: string, v0: MdsDataAgentGetTerminalVideoIpType, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::MDCSrv".
         */
        static ice_staticId(): string;
    }

    abstract class MDCCliPrx extends iceNS0.Ice.ObjectPrx {
        onForceLogout(in0: Dispatcher.ForceLogoutT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onSessionChange(in0: Dispatcher.SessionChangeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onSessionChange1(in0: Dispatcher.SessionChange1T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onCMStateChange(in0: Dispatcher.CMStateChangeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onCallChange(in0: Dispatcher.CallChangeT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onPlayAudioEv(in0: Dispatcher.PlayAudioEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onVideoBug(in0: Dispatcher.VideoBugT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onVideoBug1(in0: Dispatcher.VideoBugT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onPlayVideoEv(in0: Dispatcher.PlayVideoEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onGisInfoEvent(in0: Dispatcher.GisInfoEventT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onGisInfoEvent1(in0: Dispatcher.GisInfoEventT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onG3Message(in0: Dispatcher.G3MessageT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onPttIndGroupInfo(in0: Dispatcher.PttIndGroupInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onPttReqRightR(in0: Dispatcher.PttReqRightRT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onUploadEvent2(in0: Dispatcher.UploadEvent2T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onDelFileEvent(fid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onMessage(in0: Dispatcher.Message2T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onDelMessage(msgid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onSendVideoEv(_in: Dispatcher.SendVideoEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onGetVideoEv(_in: Dispatcher.GetVideoEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onPrePlanEv(_in: Dispatcher.PrePlanEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onFaxEv(_in: Dispatcher.FaxEv2T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onNewFaxEv(_in: Dispatcher.NewFaxEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onAgentState(aseq: Dispatcher.AgentSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onReceivePublishMsg(info: Dispatcher.PubInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onReceiveFixReceiveMsg(info: Dispatcher.FixReceiveInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onReceiveHB(info: Dispatcher.OnReceiveHeartBeat, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): MDCCliPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<MDCCliPrx>;
    }

    abstract class MDCCli extends iceNS0.Ice.Object {
        abstract onForceLogout(in0: Dispatcher.ForceLogoutT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onSessionChange(in0: Dispatcher.SessionChangeT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onSessionChange1(in0: Dispatcher.SessionChange1T, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onCMStateChange(in0: Dispatcher.CMStateChangeT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onCallChange(in0: Dispatcher.CallChangeT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onPlayAudioEv(in0: Dispatcher.PlayAudioEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onVideoBug(in0: Dispatcher.VideoBugT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onVideoBug1(in0: Dispatcher.VideoBugT1, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onPlayVideoEv(in0: Dispatcher.PlayVideoEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onGisInfoEvent(in0: Dispatcher.GisInfoEventT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onGisInfoEvent1(in0: Dispatcher.GisInfoEventT1, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onG3Message(in0: Dispatcher.G3MessageT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onPttIndGroupInfo(in0: Dispatcher.PttIndGroupInfoT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onPttReqRightR(in0: Dispatcher.PttReqRightRT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onUploadEvent2(in0: Dispatcher.UploadEvent2T, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onDelFileEvent(fid: string, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onMessage(in0: Dispatcher.Message2T, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onDelMessage(msgid: string, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onSendVideoEv(_in: Dispatcher.SendVideoEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onGetVideoEv(_in: Dispatcher.GetVideoEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onPrePlanEv(_in: Dispatcher.PrePlanEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onFaxEv(_in: Dispatcher.FaxEv2T, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onNewFaxEv(_in: Dispatcher.NewFaxEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onAgentState(aseq: Dispatcher.AgentSeq, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onReceivePublishMsg(info: Dispatcher.PubInfo, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onReceiveFixReceiveMsg(info: Dispatcher.FixReceiveInfo, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onReceiveHB(info: Dispatcher.OnReceiveHeartBeat, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::MDCCli".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    abstract class MessageCBPrx extends iceNS0.Ice.ObjectPrx {
        onUploadEvent2(in0: Dispatcher.UploadEvent2T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onDelFileEvent(fid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onMessage(in0: Dispatcher.Message2T, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onDelMessage(msgid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): MessageCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<MessageCBPrx>;
    }

    abstract class MessageCB extends iceNS0.Ice.Object {
        abstract onUploadEvent2(in0: Dispatcher.UploadEvent2T, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onDelFileEvent(fid: string, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onMessage(in0: Dispatcher.Message2T, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onDelMessage(msgid: string, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::MessageCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class Message2T {
        constructor(msgid?: string, body?: string, sendid?: string, time?: string, receiver?: iceNS0.Ice.StringSeq, attach?: Dispatcher.UploadEvent2Seq, utype?: Dispatcher.UserType);
        clone(): Message2T;
        equals(rhs: any): boolean;
        hashCode(): number;
        msgid: string;
        body: string;
        sendid: string;
        time: string;
        receiver: iceNS0.Ice.StringSeq;
        attach: Dispatcher.UploadEvent2Seq;
        utype: Dispatcher.UserType;
        static write(outs: iceNS0.Ice.OutputStream, value: Message2T): void;
        static read(ins: iceNS0.Ice.InputStream): Message2T;
    }

    type Message2Seq = Message2T[];

    class Message2SeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: Message2Seq): void;
        static read(ins: iceNS0.Ice.InputStream): Message2Seq;
    }
}

export namespace Dispatcher {
    class MessageET {
        constructor(body?: string, attach?: Dispatcher.ApplyUploadESeq);
        clone(): MessageET;
        equals(rhs: any): boolean;
        hashCode(): number;
        body: string;
        attach: Dispatcher.ApplyUploadESeq;
        static write(outs: iceNS0.Ice.OutputStream, value: MessageET): void;
        static read(ins: iceNS0.Ice.InputStream): MessageET;
    }

    class MessageT {
        constructor(receiver?: iceNS0.Ice.StringSeq, message?: MessageET);
        clone(): MessageT;
        equals(rhs: any): boolean;
        hashCode(): number;
        receiver: iceNS0.Ice.StringSeq;
        message: MessageET;
        static write(outs: iceNS0.Ice.OutputStream, value: MessageT): void;
        static read(ins: iceNS0.Ice.InputStream): MessageT;
    }

    class MessageRT {
        constructor(msgid?: string, attach?: Dispatcher.ApplyUploadRSeq);
        clone(): MessageRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        msgid: string;
        attach: Dispatcher.ApplyUploadRSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: MessageRT): void;
        static read(ins: iceNS0.Ice.InputStream): MessageRT;
    }

    class MessageReceivedT {
        constructor(msgid?: string, employeeid?: string);
        clone(): MessageReceivedT;
        equals(rhs: any): boolean;
        hashCode(): number;
        msgid: string;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: MessageReceivedT): void;
        static read(ins: iceNS0.Ice.InputStream): MessageReceivedT;
    }

    class GetOldMsgFileT {
        constructor(employeeid?: string, getnum?: number);
        clone(): GetOldMsgFileT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        getnum: number;
        static write(outs: iceNS0.Ice.OutputStream, value: GetOldMsgFileT): void;
        static read(ins: iceNS0.Ice.InputStream): GetOldMsgFileT;
    }

    class GetOldMsgFileRT {
        constructor(fileinfos?: Dispatcher.UploadEvent2Seq, msginfos?: Dispatcher.Message2Seq);
        clone(): GetOldMsgFileRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        fileinfos: Dispatcher.UploadEvent2Seq;
        msginfos: Dispatcher.Message2Seq;
        static write(outs: iceNS0.Ice.OutputStream, value: GetOldMsgFileRT): void;
        static read(ins: iceNS0.Ice.InputStream): GetOldMsgFileRT;
    }

    abstract class MessageOPPrx extends iceNS0.Ice.ObjectPrx {
        opApplyUpload(in0: Dispatcher.Identity, in1: Dispatcher.ApplyUploadT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.ApplyUploadRT>;
        opUploadEvent(in0: Dispatcher.Identity, in1: Dispatcher.UploadEventT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opFlist(in0: Dispatcher.Identity, in1: Dispatcher.FlistSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.FlistRSeq>;
        opFileReceived(in0: Dispatcher.Identity, in1: Dispatcher.FileReceivedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opDeleteFile(in0: Dispatcher.Identity, in1: Dispatcher.FileDeleteTSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opUploadFile(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSetUploadFileState(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetFileInfoByCondition(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opMessage(in0: Dispatcher.Identity, in1: MessageT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<MessageRT>;
        opMessageReceived(in0: Dispatcher.Identity, in1: MessageReceivedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetOldMsgFile(in0: Dispatcher.Identity, in1: GetOldMsgFileT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<GetOldMsgFileRT>;
        opDelMessage(in0: Dispatcher.Identity, msgid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetGroupMsgByEmployeeid(in0: Dispatcher.Identity, employeeid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opAddGroupMsg(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opUpdateGroupMsg(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opDeleteGroupMsg(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSendMessage(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetOldMessage(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGroupMsgAddEmployee(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGroupMsgDelEmployee(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetGroupMsg(in0: Dispatcher.Identity, employeeid: string, groupid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): MessageOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<MessageOPPrx>;
    }

    abstract class MessageOP extends iceNS0.Ice.Object {
        abstract opApplyUpload(in0: Dispatcher.Identity, in1: Dispatcher.ApplyUploadT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.ApplyUploadRT> | Dispatcher.ApplyUploadRT;
        abstract opUploadEvent(in0: Dispatcher.Identity, in1: Dispatcher.UploadEventT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opFlist(in0: Dispatcher.Identity, in1: Dispatcher.FlistSeq, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.FlistRSeq> | Dispatcher.FlistRSeq;
        abstract opFileReceived(in0: Dispatcher.Identity, in1: Dispatcher.FileReceivedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opDeleteFile(in0: Dispatcher.Identity, in1: Dispatcher.FileDeleteTSeq, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opUploadFile(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSetUploadFileState(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetFileInfoByCondition(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opMessage(in0: Dispatcher.Identity, in1: MessageT, current: iceNS0.Ice.Current): PromiseLike<MessageRT> | MessageRT;
        abstract opMessageReceived(in0: Dispatcher.Identity, in1: MessageReceivedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetOldMsgFile(in0: Dispatcher.Identity, in1: GetOldMsgFileT, current: iceNS0.Ice.Current): PromiseLike<GetOldMsgFileRT> | GetOldMsgFileRT;
        abstract opDelMessage(in0: Dispatcher.Identity, msgid: string, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetGroupMsgByEmployeeid(in0: Dispatcher.Identity, employeeid: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opAddGroupMsg(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opUpdateGroupMsg(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opDeleteGroupMsg(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSendMessage(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetOldMessage(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGroupMsgAddEmployee(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGroupMsgDelEmployee(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetGroupMsg(in0: Dispatcher.Identity, employeeid: string, groupid: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::MessageOP".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    abstract class PrePlanCBPrx extends iceNS0.Ice.ObjectPrx {
        onPrePlanEv(_in: Dispatcher.PrePlanEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): PrePlanCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<PrePlanCBPrx>;
    }

    abstract class PrePlanCB extends iceNS0.Ice.Object {
        abstract onPrePlanEv(_in: Dispatcher.PrePlanEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::PrePlanCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class PrePlanT {
        constructor(dummy?: string);
        clone(): PrePlanT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dummy: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PrePlanT): void;
        static read(ins: iceNS0.Ice.InputStream): PrePlanT;
    }

    class PrePlanRT {
        constructor(planId?: number, planName?: string, planAddr?: string, planMeans?: string, planNumber?: string, planType?: number, dis?: string);
        clone(): PrePlanRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        planId: number;
        planName: string;
        planAddr: string;
        planMeans: string;
        planNumber: string;
        planType: number;
        dis: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PrePlanRT): void;
        static read(ins: iceNS0.Ice.InputStream): PrePlanRT;
    }

    type PrePlanRSeq = PrePlanRT[];

    class PrePlanRSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: PrePlanRSeq): void;
        static read(ins: iceNS0.Ice.InputStream): PrePlanRSeq;
    }

    class PrePlanStartT {
        constructor(planId?: number, passwd?: string, caller?: string);
        clone(): PrePlanStartT;
        equals(rhs: any): boolean;
        hashCode(): number;
        planId: number;
        passwd: string;
        caller: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PrePlanStartT): void;
        static read(ins: iceNS0.Ice.InputStream): PrePlanStartT;
    }

    class PrePlanStartRT {
        constructor(dummy?: string);
        clone(): PrePlanStartRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dummy: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PrePlanStartRT): void;
        static read(ins: iceNS0.Ice.InputStream): PrePlanStartRT;
    }

    class PrePlanEvT {
        constructor(planId?: number, state?: Dispatcher.PrePlanState);
        clone(): PrePlanEvT;
        equals(rhs: any): boolean;
        hashCode(): number;
        planId: number;
        state: Dispatcher.PrePlanState;
        static write(outs: iceNS0.Ice.OutputStream, value: PrePlanEvT): void;
        static read(ins: iceNS0.Ice.InputStream): PrePlanEvT;
    }

    class PrePlanStopT {
        constructor(planId?: number, passwd?: string);
        clone(): PrePlanStopT;
        equals(rhs: any): boolean;
        hashCode(): number;
        planId: number;
        passwd: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PrePlanStopT): void;
        static read(ins: iceNS0.Ice.InputStream): PrePlanStopT;
    }

    class PrePlanStopRT {
        constructor(dummy?: string);
        clone(): PrePlanStopRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dummy: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PrePlanStopRT): void;
        static read(ins: iceNS0.Ice.InputStream): PrePlanStopRT;
    }
}

export namespace Dispatcher {
    abstract class PrePlanOPPrx extends iceNS0.Ice.ObjectPrx {
        opApplyUpload(in0: Dispatcher.Identity, in1: Dispatcher.ApplyUploadT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.ApplyUploadRT>;
        opUploadEvent(in0: Dispatcher.Identity, in1: Dispatcher.UploadEventT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opFlist(in0: Dispatcher.Identity, in1: Dispatcher.FlistSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.FlistRSeq>;
        opFileReceived(in0: Dispatcher.Identity, in1: Dispatcher.FileReceivedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opDeleteFile(in0: Dispatcher.Identity, in1: Dispatcher.FileDeleteTSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opUploadFile(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSetUploadFileState(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetFileInfoByCondition(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opMessage(in0: Dispatcher.Identity, in1: Dispatcher.MessageT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.MessageRT>;
        opMessageReceived(in0: Dispatcher.Identity, in1: Dispatcher.MessageReceivedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetOldMsgFile(in0: Dispatcher.Identity, in1: Dispatcher.GetOldMsgFileT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.GetOldMsgFileRT>;
        opDelMessage(in0: Dispatcher.Identity, msgid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetGroupMsgByEmployeeid(in0: Dispatcher.Identity, employeeid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opAddGroupMsg(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opUpdateGroupMsg(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opDeleteGroupMsg(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opSendMessage(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetOldMessage(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGroupMsgAddEmployee(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGroupMsgDelEmployee(in0: Dispatcher.Identity, json: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetGroupMsg(in0: Dispatcher.Identity, employeeid: string, groupid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opPrePlan(id: Dispatcher.Identity, _in: Dispatcher.PrePlanT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PrePlanRSeq>;
        opPrePlanStart(id: Dispatcher.Identity, _in: Dispatcher.PrePlanStartT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PrePlanStartRT>;
        opPrePlanStop(id: Dispatcher.Identity, _in: Dispatcher.PrePlanStopT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.PrePlanStopRT>;
        opGetPlan(id: Dispatcher.Identity, _in: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;
        opGetPlanType(id: Dispatcher.Identity, _in: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<string>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): PrePlanOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<PrePlanOPPrx>;
    }

    abstract class PrePlanOP extends iceNS0.Ice.Object {
        abstract opApplyUpload(in0: Dispatcher.Identity, in1: Dispatcher.ApplyUploadT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.ApplyUploadRT> | Dispatcher.ApplyUploadRT;
        abstract opUploadEvent(in0: Dispatcher.Identity, in1: Dispatcher.UploadEventT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opFlist(in0: Dispatcher.Identity, in1: Dispatcher.FlistSeq, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.FlistRSeq> | Dispatcher.FlistRSeq;
        abstract opFileReceived(in0: Dispatcher.Identity, in1: Dispatcher.FileReceivedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opDeleteFile(in0: Dispatcher.Identity, in1: Dispatcher.FileDeleteTSeq, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opUploadFile(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSetUploadFileState(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetFileInfoByCondition(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opMessage(in0: Dispatcher.Identity, in1: Dispatcher.MessageT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.MessageRT> | Dispatcher.MessageRT;
        abstract opMessageReceived(in0: Dispatcher.Identity, in1: Dispatcher.MessageReceivedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetOldMsgFile(in0: Dispatcher.Identity, in1: Dispatcher.GetOldMsgFileT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.GetOldMsgFileRT> | Dispatcher.GetOldMsgFileRT;
        abstract opDelMessage(in0: Dispatcher.Identity, msgid: string, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetGroupMsgByEmployeeid(in0: Dispatcher.Identity, employeeid: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opAddGroupMsg(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opUpdateGroupMsg(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opDeleteGroupMsg(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opSendMessage(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetOldMessage(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGroupMsgAddEmployee(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGroupMsgDelEmployee(in0: Dispatcher.Identity, json: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetGroupMsg(in0: Dispatcher.Identity, employeeid: string, groupid: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opPrePlan(id: Dispatcher.Identity, _in: Dispatcher.PrePlanT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PrePlanRSeq> | Dispatcher.PrePlanRSeq;
        abstract opPrePlanStart(id: Dispatcher.Identity, _in: Dispatcher.PrePlanStartT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PrePlanStartRT> | Dispatcher.PrePlanStartRT;
        abstract opPrePlanStop(id: Dispatcher.Identity, _in: Dispatcher.PrePlanStopT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.PrePlanStopRT> | Dispatcher.PrePlanStopRT;
        abstract opGetPlan(id: Dispatcher.Identity, _in: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        abstract opGetPlanType(id: Dispatcher.Identity, _in: string, current: iceNS0.Ice.Current): PromiseLike<string> | string;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::PrePlanOP".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    abstract class PttCBPrx extends iceNS0.Ice.ObjectPrx {
        onG3Message(in0: Dispatcher.G3MessageT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onPttIndGroupInfo(in0: Dispatcher.PttIndGroupInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onPttReqRightR(in0: Dispatcher.PttReqRightRT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): PttCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<PttCBPrx>;
    }

    abstract class PttCB extends iceNS0.Ice.Object {
        abstract onG3Message(in0: Dispatcher.G3MessageT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onPttIndGroupInfo(in0: Dispatcher.PttIndGroupInfoT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onPttReqRightR(in0: Dispatcher.PttReqRightRT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::PttCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class PttIndCallInfoElem {
        constructor(group?: string, speaker?: string, callid?: string);
        clone(): PttIndCallInfoElem;
        equals(rhs: any): boolean;
        hashCode(): number;
        group: string;
        speaker: string;
        callid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PttIndCallInfoElem): void;
        static read(ins: iceNS0.Ice.InputStream): PttIndCallInfoElem;
    }

    type PttIndCallInfoSeq = PttIndCallInfoElem[];

    class PttIndCallInfoSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: PttIndCallInfoSeq): void;
        static read(ins: iceNS0.Ice.InputStream): PttIndCallInfoSeq;
    }

    class G3MessageT {
        constructor(sid?: string, employeeid?: string, callinfo?: PttIndCallInfoSeq, ip?: string, port?: number);
        clone(): G3MessageT;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        employeeid: string;
        callinfo: PttIndCallInfoSeq;
        ip: string;
        port: number;
        static write(outs: iceNS0.Ice.OutputStream, value: G3MessageT): void;
        static read(ins: iceNS0.Ice.InputStream): G3MessageT;
    }

    class PttIndGroupInfoElem {
        constructor(groupname?: string, groupnum?: string, grouplevel?: number, ipstatespace?: number, ipheartbeatspace?: number, ip?: string, port?: number, thetype?: Dispatcher.GroupType);
        clone(): PttIndGroupInfoElem;
        equals(rhs: any): boolean;
        hashCode(): number;
        groupname: string;
        groupnum: string;
        grouplevel: number;
        ipstatespace: number;
        ipheartbeatspace: number;
        ip: string;
        port: number;
        thetype: Dispatcher.GroupType;
        static write(outs: iceNS0.Ice.OutputStream, value: PttIndGroupInfoElem): void;
        static read(ins: iceNS0.Ice.InputStream): PttIndGroupInfoElem;
    }

    type PttIndGroupInfoSeq = PttIndGroupInfoElem[];

    class PttIndGroupInfoSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: PttIndGroupInfoSeq): void;
        static read(ins: iceNS0.Ice.InputStream): PttIndGroupInfoSeq;
    }

    class PttIndGroupInfoT {
        constructor(seq?: PttIndGroupInfoSeq, employeeid?: string, ip?: string, port?: number, type?: string);
        clone(): PttIndGroupInfoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        seq: PttIndGroupInfoSeq;
        employeeid: string;
        ip: string;
        port: number;
        type: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PttIndGroupInfoT): void;
        static read(ins: iceNS0.Ice.InputStream): PttIndGroupInfoT;
    }

    class PttReqRightRT {
        constructor(employeeid?: string, result?: string, reason?: string);
        clone(): PttReqRightRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        result: string;
        reason: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqRightRT): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqRightRT;
    }
}

export namespace Dispatcher {
    class PttReqRightT {
        constructor(groupnum?: string, caller?: string, messageinfo?: string);
        clone(): PttReqRightT;
        equals(rhs: any): boolean;
        hashCode(): number;
        groupnum: string;
        caller: string;
        messageinfo: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqRightT): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqRightT;
    }

    class PttReqGroupInfoT {
        constructor(employeeid?: string, type?: string);
        clone(): PttReqGroupInfoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        type: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqGroupInfoT): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqGroupInfoT;
    }

    class PttReqMemberInfoT {
        constructor(employeeid?: string, groupnum?: string);
        clone(): PttReqMemberInfoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        groupnum: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqMemberInfoT): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqMemberInfoT;
    }

    class PttReqMemberInfoRElem {
        constructor(num?: string, name?: string, state?: Dispatcher.CallState);
        clone(): PttReqMemberInfoRElem;
        equals(rhs: any): boolean;
        hashCode(): number;
        num: string;
        name: string;
        state: Dispatcher.CallState;
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqMemberInfoRElem): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqMemberInfoRElem;
    }

    type PttReqMemberInfoRSeq = PttReqMemberInfoRElem[];

    class PttReqMemberInfoRSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqMemberInfoRSeq): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqMemberInfoRSeq;
    }

    class PttReqMemberInfoRT {
        constructor(groupnum?: string, employeeid?: string, memberinfo?: PttReqMemberInfoRSeq);
        clone(): PttReqMemberInfoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        groupnum: string;
        employeeid: string;
        memberinfo: PttReqMemberInfoRSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqMemberInfoRT): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqMemberInfoRT;
    }

    class PttReqMemberInfoT1 {
        constructor(sid?: string, groupnum?: string, employeeid?: string);
        clone(): PttReqMemberInfoT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        sid: string;
        groupnum: string;
        employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqMemberInfoT1): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqMemberInfoT1;
    }

    class PttReqMemberInfoRElem1 {
        constructor(employeeid?: string, name?: string, type?: number, level?: number, state?: Dispatcher.CallState, stateDecorate?: string);
        clone(): PttReqMemberInfoRElem1;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        name: string;
        type: number;
        level: number;
        state: Dispatcher.CallState;
        stateDecorate: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqMemberInfoRElem1): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqMemberInfoRElem1;
    }

    type PttReqMemberInfoRSeq1 = PttReqMemberInfoRElem1[];

    class PttReqMemberInfoRSeq1Helper {
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqMemberInfoRSeq1): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqMemberInfoRSeq1;
    }

    class PttReqMemberInfoRT1 {
        constructor(groupnum?: string, employeeid?: string, memberinfo?: PttReqMemberInfoRSeq1);
        clone(): PttReqMemberInfoRT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        groupnum: string;
        employeeid: string;
        memberinfo: PttReqMemberInfoRSeq1;
        static write(outs: iceNS0.Ice.OutputStream, value: PttReqMemberInfoRT1): void;
        static read(ins: iceNS0.Ice.InputStream): PttReqMemberInfoRT1;
    }

    class PttTimeOutT {
        constructor(cid?: string, MaxQueue?: string, IdelTimeout?: string, SpeakTimeout?: string, RefreshStateSpace?: string);
        clone(): PttTimeOutT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        MaxQueue: string;
        IdelTimeout: string;
        SpeakTimeout: string;
        RefreshStateSpace: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PttTimeOutT): void;
        static read(ins: iceNS0.Ice.InputStream): PttTimeOutT;
    }

    abstract class PttOPPrx extends iceNS0.Ice.ObjectPrx {
        opPttReqMemberInfo(in0: Dispatcher.Identity, in1: PttReqMemberInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<PttReqMemberInfoRT>;
        opPttReqMemberInfo1(id: Dispatcher.Identity, _in: PttReqMemberInfoT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<PttReqMemberInfoRT1>;
        opPttReqRight(in0: Dispatcher.Identity, in1: PttReqRightT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<Dispatcher.CommonRequestT>;
        opSetIntercomTimeOutInfo(in0: Dispatcher.Identity, in1: PttTimeOutT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<number>;
        opGetIntercomTimeOutInfo(in0: Dispatcher.Identity, cid: string, context?: Map<string, string>): iceNS0.Ice.AsyncResult<PttTimeOutT>;
        opPttReqGroupInfo(in0: Dispatcher.Identity, in1: PttReqGroupInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): PttOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<PttOPPrx>;
    }

    abstract class PttOP extends iceNS0.Ice.Object {
        abstract opPttReqMemberInfo(in0: Dispatcher.Identity, in1: PttReqMemberInfoT, current: iceNS0.Ice.Current): PromiseLike<PttReqMemberInfoRT> | PttReqMemberInfoRT;
        abstract opPttReqMemberInfo1(id: Dispatcher.Identity, _in: PttReqMemberInfoT1, current: iceNS0.Ice.Current): PromiseLike<PttReqMemberInfoRT1> | PttReqMemberInfoRT1;
        abstract opPttReqRight(in0: Dispatcher.Identity, in1: PttReqRightT, current: iceNS0.Ice.Current): PromiseLike<Dispatcher.CommonRequestT> | Dispatcher.CommonRequestT;
        abstract opSetIntercomTimeOutInfo(in0: Dispatcher.Identity, in1: PttTimeOutT, current: iceNS0.Ice.Current): PromiseLike<number> | number;
        abstract opGetIntercomTimeOutInfo(in0: Dispatcher.Identity, cid: string, current: iceNS0.Ice.Current): PromiseLike<PttTimeOutT> | PttTimeOutT;
        abstract opPttReqGroupInfo(in0: Dispatcher.Identity, in1: PttReqGroupInfoT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::PttOP".
         */
        static ice_staticId(): string;
    }

    abstract class PttSBPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): PttSBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<PttSBPrx>;
    }

    abstract class PttSB extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::PttSB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    abstract class PublishCBPrx extends iceNS0.Ice.ObjectPrx {
        onReceivePublishMsg(info: Dispatcher.PubInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onReceiveFixReceiveMsg(info: Dispatcher.FixReceiveInfo, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onReceiveHB(info: Dispatcher.OnReceiveHeartBeat, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): PublishCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<PublishCBPrx>;
    }

    abstract class PublishCB extends iceNS0.Ice.Object {
        abstract onReceivePublishMsg(info: Dispatcher.PubInfo, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onReceiveFixReceiveMsg(info: Dispatcher.FixReceiveInfo, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onReceiveHB(info: Dispatcher.OnReceiveHeartBeat, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::PublishCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class ContentInfo {
        constructor(strContent?: string);
        clone(): ContentInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        strContent: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ContentInfo): void;
        static read(ins: iceNS0.Ice.InputStream): ContentInfo;
    }

    type SubContentSeq = ContentInfo[];

    class SubContentSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: SubContentSeq): void;
        static read(ins: iceNS0.Ice.InputStream): SubContentSeq;
    }

    class SubInfo {
        constructor(subHeader?: string, subContents?: SubContentSeq);
        clone(): SubInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        subHeader: string;
        subContents: SubContentSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: SubInfo): void;
        static read(ins: iceNS0.Ice.InputStream): SubInfo;
    }

    type SubInfoSeq = SubInfo[];

    class SubInfoSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: SubInfoSeq): void;
        static read(ins: iceNS0.Ice.InputStream): SubInfoSeq;
    }

    class SubInfos {
        constructor(Infos?: SubInfoSeq);
        clone(): SubInfos;
        equals(rhs: any): boolean;
        hashCode(): number;
        Infos: SubInfoSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: SubInfos): void;
        static read(ins: iceNS0.Ice.InputStream): SubInfos;
    }

    class PubInfo {
        constructor(subHeader?: string, subMsg?: string);
        clone(): PubInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        subHeader: string;
        subMsg: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PubInfo): void;
        static read(ins: iceNS0.Ice.InputStream): PubInfo;
    }

    class FixReceiveInfo {
        constructor(subHeader?: string, subMsg?: string, receive?: string);
        clone(): FixReceiveInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        subHeader: string;
        subMsg: string;
        receive: string;
        static write(outs: iceNS0.Ice.OutputStream, value: FixReceiveInfo): void;
        static read(ins: iceNS0.Ice.InputStream): FixReceiveInfo;
    }

    class OnReceiveHeartBeat {
        constructor(number?: string, issub?: boolean);
        clone(): OnReceiveHeartBeat;
        equals(rhs: any): boolean;
        hashCode(): number;
        number: string;
        issub: boolean;
        static write(outs: iceNS0.Ice.OutputStream, value: OnReceiveHeartBeat): void;
        static read(ins: iceNS0.Ice.InputStream): OnReceiveHeartBeat;
    }
}

export namespace Dispatcher {
    abstract class PublishOPPrx extends iceNS0.Ice.ObjectPrx {
        opPublishInfo(in0: Dispatcher.Identity, in1: Dispatcher.SubInfos, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opUnPublishInfo(in0: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opPublishHB(in0: Dispatcher.Identity, in1: number, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): PublishOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<PublishOPPrx>;
    }

    abstract class PublishOP extends iceNS0.Ice.Object {
        abstract opPublishInfo(in0: Dispatcher.Identity, in1: Dispatcher.SubInfos, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opUnPublishInfo(in0: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opPublishHB(in0: Dispatcher.Identity, in1: number, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::PublishOP".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class StationLineT {
        constructor(stationid?: number, Employeeid?: string);
        clone(): StationLineT;
        equals(rhs: any): boolean;
        hashCode(): number;
        stationid: number;
        Employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: StationLineT): void;
        static read(ins: iceNS0.Ice.InputStream): StationLineT;
    }

    class StationLineRT {
        constructor(LineID?: number, LineName?: string, StationID?: number, Description?: string);
        clone(): StationLineRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        LineID: number;
        LineName: string;
        StationID: number;
        Description: string;
        static write(outs: iceNS0.Ice.OutputStream, value: StationLineRT): void;
        static read(ins: iceNS0.Ice.InputStream): StationLineRT;
    }

    type StationLineRTSeq = StationLineRT[];

    class StationLineRTSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: StationLineRTSeq): void;
        static read(ins: iceNS0.Ice.InputStream): StationLineRTSeq;
    }

    class StationT {
        constructor(Employeeid?: string);
        clone(): StationT;
        equals(rhs: any): boolean;
        hashCode(): number;
        Employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: StationT): void;
        static read(ins: iceNS0.Ice.InputStream): StationT;
    }

    class StationRT {
        constructor(StationID?: number, StationName?: string, StationDes?: string);
        clone(): StationRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        StationID: number;
        StationName: string;
        StationDes: string;
        static write(outs: iceNS0.Ice.OutputStream, value: StationRT): void;
        static read(ins: iceNS0.Ice.InputStream): StationRT;
    }

    type StationRTSeq = StationRT[];

    class StationRTSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: StationRTSeq): void;
        static read(ins: iceNS0.Ice.InputStream): StationRTSeq;
    }

    abstract class RailWayOPPrx extends iceNS0.Ice.ObjectPrx {
        opGetStationLine(id: Dispatcher.Identity, _in: StationLineT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<StationLineRTSeq>;
        opGetStation(id: Dispatcher.Identity, _in: StationT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<StationRT>;
        opGetAllStation(id: Dispatcher.Identity, context?: Map<string, string>): iceNS0.Ice.AsyncResult<StationRTSeq>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): RailWayOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<RailWayOPPrx>;
    }

    abstract class RailWayOP extends iceNS0.Ice.Object {
        abstract opGetStationLine(id: Dispatcher.Identity, _in: StationLineT, current: iceNS0.Ice.Current): PromiseLike<StationLineRTSeq> | StationLineRTSeq;
        abstract opGetStation(id: Dispatcher.Identity, _in: StationT, current: iceNS0.Ice.Current): PromiseLike<StationRT> | StationRT;
        abstract opGetAllStation(id: Dispatcher.Identity, current: iceNS0.Ice.Current): PromiseLike<StationRTSeq> | StationRTSeq;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::RailWayOP".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class ForceLogoutT {
        constructor(code?: Dispatcher.ECode);
        clone(): ForceLogoutT;
        equals(rhs: any): boolean;
        hashCode(): number;
        code: Dispatcher.ECode;
        static write(outs: iceNS0.Ice.OutputStream, value: ForceLogoutT): void;
        static read(ins: iceNS0.Ice.InputStream): ForceLogoutT;
    }

    abstract class RegisterCBPrx extends iceNS0.Ice.ObjectPrx {
        onForceLogout(in0: ForceLogoutT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): RegisterCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<RegisterCBPrx>;
    }

    abstract class RegisterCB extends iceNS0.Ice.Object {
        abstract onForceLogout(in0: ForceLogoutT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::RegisterCB".
         */
        static ice_staticId(): string;
    }

    abstract class RegisterCBSubPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): RegisterCBSubPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<RegisterCBSubPrx>;
    }

    abstract class RegisterCBSub extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::RegisterCBSub".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class LoginT {
        constructor(pass?: string, ip?: string, interval?: number, type?: Dispatcher.UserType);
        clone(): LoginT;
        equals(rhs: any): boolean;
        hashCode(): number;
        pass: string;
        ip: string;
        interval: number;
        type: Dispatcher.UserType;
        static write(outs: iceNS0.Ice.OutputStream, value: LoginT): void;
        static read(ins: iceNS0.Ice.InputStream): LoginT;
    }

    class LoginRT {
        constructor(firstlogin?: boolean, sptpsw?: string, dnsprefix?: string);
        clone(): LoginRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        firstlogin: boolean;
        sptpsw: string;
        dnsprefix: string;
        static write(outs: iceNS0.Ice.OutputStream, value: LoginRT): void;
        static read(ins: iceNS0.Ice.InputStream): LoginRT;
    }

    class LogoutT {
        constructor(dummy?: string);
        clone(): LogoutT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dummy: string;
        static write(outs: iceNS0.Ice.OutputStream, value: LogoutT): void;
        static read(ins: iceNS0.Ice.InputStream): LogoutT;
    }

    class LogoutRT {
        constructor(dummy?: string);
        clone(): LogoutRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dummy: string;
        static write(outs: iceNS0.Ice.OutputStream, value: LogoutRT): void;
        static read(ins: iceNS0.Ice.InputStream): LogoutRT;
    }

    class ReloginT {
        constructor(state?: number, ip?: string);
        clone(): ReloginT;
        equals(rhs: any): boolean;
        hashCode(): number;
        state: number;
        ip: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ReloginT): void;
        static read(ins: iceNS0.Ice.InputStream): ReloginT;
    }

    class HeartbeatRT {
        constructor(dummy?: number);
        clone(): HeartbeatRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dummy: number;
        static write(outs: iceNS0.Ice.OutputStream, value: HeartbeatRT): void;
        static read(ins: iceNS0.Ice.InputStream): HeartbeatRT;
    }

    class ChangePassWordT {
        constructor(Employeeid?: string, oldPassWord?: string, newPassWord?: string);
        clone(): ChangePassWordT;
        equals(rhs: any): boolean;
        hashCode(): number;
        Employeeid: string;
        oldPassWord: string;
        newPassWord: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ChangePassWordT): void;
        static read(ins: iceNS0.Ice.InputStream): ChangePassWordT;
    }

    class ChangePassWordRT {
        constructor(Employeeid?: string, issuccess?: boolean);
        clone(): ChangePassWordRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        Employeeid: string;
        issuccess: boolean;
        static write(outs: iceNS0.Ice.OutputStream, value: ChangePassWordRT): void;
        static read(ins: iceNS0.Ice.InputStream): ChangePassWordRT;
    }

    class ForceKickOutT {
        constructor(Employeeid?: string);
        clone(): ForceKickOutT;
        equals(rhs: any): boolean;
        hashCode(): number;
        Employeeid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: ForceKickOutT): void;
        static read(ins: iceNS0.Ice.InputStream): ForceKickOutT;
    }

    abstract class RegisterOPPrx extends iceNS0.Ice.ObjectPrx {
        opLogin(in0: Dispatcher.Identity, in1: LoginT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<LoginRT>;
        opLogout(in0: Dispatcher.Identity, in1: LogoutT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<LogoutRT>;
        opRelogin(in0: Dispatcher.Identity, in1: ReloginT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opHeartbeat(in0: Dispatcher.Identity, in1: number, context?: Map<string, string>): iceNS0.Ice.AsyncResult<HeartbeatRT>;
        opChangePassWord(in0: Dispatcher.Identity, in1: ChangePassWordT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<ChangePassWordRT>;
        opForceKickOut(in0: Dispatcher.Identity, in1: ForceKickOutT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<boolean>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): RegisterOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<RegisterOPPrx>;
    }

    abstract class RegisterOP extends iceNS0.Ice.Object {
        abstract opLogin(in0: Dispatcher.Identity, in1: LoginT, current: iceNS0.Ice.Current): PromiseLike<LoginRT> | LoginRT;
        abstract opLogout(in0: Dispatcher.Identity, in1: LogoutT, current: iceNS0.Ice.Current): PromiseLike<LogoutRT> | LogoutRT;
        abstract opRelogin(in0: Dispatcher.Identity, in1: ReloginT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opHeartbeat(in0: Dispatcher.Identity, in1: number, current: iceNS0.Ice.Current): PromiseLike<HeartbeatRT> | HeartbeatRT;
        abstract opChangePassWord(in0: Dispatcher.Identity, in1: ChangePassWordT, current: iceNS0.Ice.Current): PromiseLike<ChangePassWordRT> | ChangePassWordRT;
        abstract opForceKickOut(in0: Dispatcher.Identity, in1: ForceKickOutT, current: iceNS0.Ice.Current): PromiseLike<boolean> | boolean;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::RegisterOP".
         */
        static ice_staticId(): string;
    }

    abstract class RegisterSBPrx extends iceNS0.Ice.ObjectPrx {
        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): RegisterSBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<RegisterSBPrx>;
    }

    abstract class RegisterSB extends iceNS0.Ice.Object {
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::RegisterSB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class Agent {
        constructor(employeeid?: string, state?: Dispatcher.RegisterState, othernumber?: string, othername?: string, ip?: string, DNSprefix?: string);
        clone(): Agent;
        equals(rhs: any): boolean;
        hashCode(): number;
        employeeid: string;
        state: Dispatcher.RegisterState;
        othernumber: string;
        othername: string;
        ip: string;
        DNSprefix: string;
        static write(outs: iceNS0.Ice.OutputStream, value: Agent): void;
        static read(ins: iceNS0.Ice.InputStream): Agent;
    }

    type AgentSeq = Agent[];

    class AgentSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: AgentSeq): void;
        static read(ins: iceNS0.Ice.InputStream): AgentSeq;
    }

    abstract class StateCBPrx extends iceNS0.Ice.ObjectPrx {
        onAgentState(aseq: AgentSeq, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): StateCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<StateCBPrx>;
    }

    abstract class StateCB extends iceNS0.Ice.Object {
        abstract onAgentState(aseq: AgentSeq, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::StateCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class VideoBugT {
        constructor(cid?: string, ip?: string, port?: string, srcid?: string, dstid?: string, state?: Dispatcher.VBugStateType);
        clone(): VideoBugT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        ip: string;
        port: string;
        srcid: string;
        dstid: string;
        state: Dispatcher.VBugStateType;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoBugT): void;
        static read(ins: iceNS0.Ice.InputStream): VideoBugT;
    }

    class VideoBugT1 {
        constructor(cid?: string, ip?: string, port?: string, srcid?: string, dstid?: string, audiocodec?: string, videocodec?: string, state?: Dispatcher.VBugStateType);
        clone(): VideoBugT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        ip: string;
        port: string;
        srcid: string;
        dstid: string;
        audiocodec: string;
        videocodec: string;
        state: Dispatcher.VBugStateType;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoBugT1): void;
        static read(ins: iceNS0.Ice.InputStream): VideoBugT1;
    }

    class PlayVideoEvT {
        constructor(cid?: string, uuid?: string, type?: Dispatcher.PlayVideoType);
        clone(): PlayVideoEvT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        uuid: string;
        type: Dispatcher.PlayVideoType;
        static write(outs: iceNS0.Ice.OutputStream, value: PlayVideoEvT): void;
        static read(ins: iceNS0.Ice.InputStream): PlayVideoEvT;
    }

    abstract class VideoCBPrx extends iceNS0.Ice.ObjectPrx {
        onVideoBug(in0: VideoBugT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onVideoBug1(in0: VideoBugT1, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        onPlayVideoEv(in0: PlayVideoEvT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): VideoCBPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<VideoCBPrx>;
    }

    abstract class VideoCB extends iceNS0.Ice.Object {
        abstract onVideoBug(in0: VideoBugT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onVideoBug1(in0: VideoBugT1, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract onPlayVideoEv(in0: PlayVideoEvT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::VideoCB".
         */
        static ice_staticId(): string;
    }
}

export namespace Dispatcher {
    class VideoBugStartT {
        constructor(dstid?: string, ip?: string, port?: string, codec?: string, srcid?: string);
        clone(): VideoBugStartT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dstid: string;
        ip: string;
        port: string;
        codec: string;
        srcid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoBugStartT): void;
        static read(ins: iceNS0.Ice.InputStream): VideoBugStartT;
    }

    class VideoBugStartRT {
        constructor(cid?: string, srcid?: string);
        clone(): VideoBugStartRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        srcid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoBugStartRT): void;
        static read(ins: iceNS0.Ice.InputStream): VideoBugStartRT;
    }

    class VideoBugEndT {
        constructor(cid?: string, srcid?: string);
        clone(): VideoBugEndT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        srcid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoBugEndT): void;
        static read(ins: iceNS0.Ice.InputStream): VideoBugEndT;
    }

    class VideoBugEndRT {
        constructor(srcid?: string);
        clone(): VideoBugEndRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        srcid: string;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoBugEndRT): void;
        static read(ins: iceNS0.Ice.InputStream): VideoBugEndRT;
    }

    class PlayVideoT {
        constructor(cid?: string, fid?: string, state?: Dispatcher.PlayVideoType);
        clone(): PlayVideoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        fid: string;
        state: Dispatcher.PlayVideoType;
        static write(outs: iceNS0.Ice.OutputStream, value: PlayVideoT): void;
        static read(ins: iceNS0.Ice.InputStream): PlayVideoT;
    }

    class PlayVideoRT {
        constructor(code?: number);
        clone(): PlayVideoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        code: number;
        static write(outs: iceNS0.Ice.OutputStream, value: PlayVideoRT): void;
        static read(ins: iceNS0.Ice.InputStream): PlayVideoRT;
    }

    class VideoInfoT {
        constructor(dummy?: string);
        clone(): VideoInfoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        dummy: string;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoInfoT): void;
        static read(ins: iceNS0.Ice.InputStream): VideoInfoT;
    }

    class VideoChannelInfo {
        constructor(ID?: number, ChannelNum?: number, bindEmployeeID?: string, ChannelName?: string);
        clone(): VideoChannelInfo;
        equals(rhs: any): boolean;
        hashCode(): number;
        ID: number;
        ChannelNum: number;
        bindEmployeeID: string;
        ChannelName: string;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoChannelInfo): void;
        static read(ins: iceNS0.Ice.InputStream): VideoChannelInfo;
    }

    type VideoChannels = VideoChannelInfo[];

    class VideoChannelsHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: VideoChannels): void;
        static read(ins: iceNS0.Ice.InputStream): VideoChannels;
    }

    class VideoInfoElem {
        constructor(id?: number, videoIP?: string, videoport?: string, user?: string, password?: string, showname?: string, type?: Dispatcher.emVideoDeviceType, channels?: VideoChannels);
        clone(): VideoInfoElem;
        equals(rhs: any): boolean;
        hashCode(): number;
        id: number;
        videoIP: string;
        videoport: string;
        user: string;
        password: string;
        showname: string;
        type: Dispatcher.emVideoDeviceType;
        channels: VideoChannels;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoInfoElem): void;
        static read(ins: iceNS0.Ice.InputStream): VideoInfoElem;
    }

    type VideoInfoSeq = VideoInfoElem[];

    class VideoInfoSeqHelper {
        static write(outs: iceNS0.Ice.OutputStream, value: VideoInfoSeq): void;
        static read(ins: iceNS0.Ice.InputStream): VideoInfoSeq;
    }

    class VideoInfoRT {
        constructor(vseq?: VideoInfoSeq);
        clone(): VideoInfoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        vseq: VideoInfoSeq;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoInfoRT): void;
        static read(ins: iceNS0.Ice.InputStream): VideoInfoRT;
    }

    class VideoChannelInfo1 {
        constructor(ID?: number, ChannelNum?: number, bindEmployeeID?: string, ChannelName?: string);
        clone(): VideoChannelInfo1;
        equals(rhs: any): boolean;
        hashCode(): number;
        ID: number;
        ChannelNum: number;
        bindEmployeeID: string;
        ChannelName: string;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoChannelInfo1): void;
        static read(ins: iceNS0.Ice.InputStream): VideoChannelInfo1;
    }

    type VideoChannels1 = VideoChannelInfo1[];

    class VideoChannels1Helper {
        static write(outs: iceNS0.Ice.OutputStream, value: VideoChannels1): void;
        static read(ins: iceNS0.Ice.InputStream): VideoChannels1;
    }

    class VideoInfoElem1 {
        constructor(id?: number, videoIP?: string, videoport?: string, user?: string, password?: string, showname?: string, type?: number, channels?: VideoChannels1);
        clone(): VideoInfoElem1;
        equals(rhs: any): boolean;
        hashCode(): number;
        id: number;
        videoIP: string;
        videoport: string;
        user: string;
        password: string;
        showname: string;
        type: number;
        channels: VideoChannels1;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoInfoElem1): void;
        static read(ins: iceNS0.Ice.InputStream): VideoInfoElem1;
    }

    type VideoInfoSeq1 = VideoInfoElem1[];

    class VideoInfoSeq1Helper {
        static write(outs: iceNS0.Ice.OutputStream, value: VideoInfoSeq1): void;
        static read(ins: iceNS0.Ice.InputStream): VideoInfoSeq1;
    }

    class VideoInfoRT1 {
        constructor(vseq?: VideoInfoSeq1);
        clone(): VideoInfoRT1;
        equals(rhs: any): boolean;
        hashCode(): number;
        vseq: VideoInfoSeq1;
        static write(outs: iceNS0.Ice.OutputStream, value: VideoInfoRT1): void;
        static read(ins: iceNS0.Ice.InputStream): VideoInfoRT1;
    }

    class VideoControlType {
        static readonly VideoControlTypeX: VideoControlType;
        static readonly VideoControlTypeY: VideoControlType;
        static readonly VideoControlTypeZoom: VideoControlType;
        static readonly VideoControlTypeLR: VideoControlType;
        static readonly VideoControlTypeFocus: VideoControlType;

        static valueOf(value: number): VideoControlType;
        equals(other: any): boolean;
        hashCode(): number;
        toString(): string;

        readonly name: string;
        readonly value: number;
    }

    class CameraNumberControl {
        constructor(number?: string, ctype?: VideoControlType, IsStart?: boolean, TimeOut?: number, step?: number);
        clone(): CameraNumberControl;
        equals(rhs: any): boolean;
        number: string;
        ctype: VideoControlType;
        IsStart: boolean;
        TimeOut: number;
        step: number;
        static write(outs: iceNS0.Ice.OutputStream, value: CameraNumberControl): void;
        static read(ins: iceNS0.Ice.InputStream): CameraNumberControl;
    }

    class CameraIPControl {
        constructor(strip?: string, strport?: string, struser?: string, strpwd?: string, channel?: number, ctype?: VideoControlType, IsStart?: boolean, TimeOut?: number, step?: number);
        clone(): CameraIPControl;
        equals(rhs: any): boolean;
        strip: string;
        strport: string;
        struser: string;
        strpwd: string;
        channel: number;
        ctype: VideoControlType;
        IsStart: boolean;
        TimeOut: number;
        step: number;
        static write(outs: iceNS0.Ice.OutputStream, value: CameraIPControl): void;
        static read(ins: iceNS0.Ice.InputStream): CameraIPControl;
    }

    class HistoryVideoT {
        constructor(srcnumber?: string, caramnumber?: string, timestart?: string, timeend?: string);
        clone(): HistoryVideoT;
        equals(rhs: any): boolean;
        hashCode(): number;
        srcnumber: string;
        caramnumber: string;
        timestart: string;
        timeend: string;
        static write(outs: iceNS0.Ice.OutputStream, value: HistoryVideoT): void;
        static read(ins: iceNS0.Ice.InputStream): HistoryVideoT;
    }

    class HistoryVideoOperateT {
        constructor(cid?: string, caramnumber?: string, second?: number);
        clone(): HistoryVideoOperateT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        caramnumber: string;
        second: number;
        static write(outs: iceNS0.Ice.OutputStream, value: HistoryVideoOperateT): void;
        static read(ins: iceNS0.Ice.InputStream): HistoryVideoOperateT;
    }

    class HistoryVSpeedT {
        constructor(cid?: string, caramnumber?: string, speed?: number);
        clone(): HistoryVSpeedT;
        equals(rhs: any): boolean;
        cid: string;
        caramnumber: string;
        speed: number;
        static write(outs: iceNS0.Ice.OutputStream, value: HistoryVSpeedT): void;
        static read(ins: iceNS0.Ice.InputStream): HistoryVSpeedT;
    }

    class PlayHistoryVideoRT {
        constructor(cid?: string, caramnumber?: string, msg?: string);
        clone(): PlayHistoryVideoRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        caramnumber: string;
        msg: string;
        static write(outs: iceNS0.Ice.OutputStream, value: PlayHistoryVideoRT): void;
        static read(ins: iceNS0.Ice.InputStream): PlayHistoryVideoRT;
    }

    class SipPhoneVideoBugT {
        constructor(called?: string, caller?: string, codec?: string);
        clone(): SipPhoneVideoBugT;
        equals(rhs: any): boolean;
        hashCode(): number;
        called: string;
        caller: string;
        codec: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SipPhoneVideoBugT): void;
        static read(ins: iceNS0.Ice.InputStream): SipPhoneVideoBugT;
    }

    class SipPhoneVideoBugRT {
        constructor(cid?: string, empid?: string, sessnum?: string);
        clone(): SipPhoneVideoBugRT;
        equals(rhs: any): boolean;
        hashCode(): number;
        cid: string;
        empid: string;
        sessnum: string;
        static write(outs: iceNS0.Ice.OutputStream, value: SipPhoneVideoBugRT): void;
        static read(ins: iceNS0.Ice.InputStream): SipPhoneVideoBugRT;
    }

    abstract class VideoOPPrx extends iceNS0.Ice.ObjectPrx {
        opVideoBugStart(in0: Dispatcher.Identity, in1: VideoBugStartT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<VideoBugStartRT>;
        opVideoBugEnd(in0: Dispatcher.Identity, in1: VideoBugEndT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<VideoBugEndRT>;
        opPlayVideo(in0: Dispatcher.Identity, in1: PlayVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<PlayVideoRT>;
        opVideoInfo(in0: Dispatcher.Identity, in1: VideoInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<VideoInfoRT>;
        opVideoInfo1(in0: Dispatcher.Identity, in1: VideoInfoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<VideoInfoRT1>;
        opCameraNumberControl(in0: Dispatcher.Identity, in1: CameraNumberControl, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opCameraIPControl(in0: Dispatcher.Identity, in1: CameraIPControl, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opGetHistoryVideo(in0: Dispatcher.Identity, in1: HistoryVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opPlayHistoryVideo(in0: Dispatcher.Identity, in1: HistoryVideoT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<PlayHistoryVideoRT>;
        opHistoryVideoPlay(in0: Dispatcher.Identity, in1: HistoryVideoOperateT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opHistoryVideoPause(in0: Dispatcher.Identity, in1: HistoryVideoOperateT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opHistoryVideoSpeed(in0: Dispatcher.Identity, in1: HistoryVSpeedT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<void>;
        opSipPhoneVideoBug(in0: Dispatcher.Identity, in1: SipPhoneVideoBugT, context?: Map<string, string>): iceNS0.Ice.AsyncResult<SipPhoneVideoBugRT>;

        /**
         * Downcasts a proxy without confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @return A proxy with the requested type.
         */
        static uncheckedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string): VideoOPPrx;
        /**
         * Downcasts a proxy after confirming the target object's type via a remote invocation.
         * @param prx The target proxy.
         * @param facet A facet name.
         * @param context The context map for the invocation.
         * @return A proxy with the requested type and facet, or nil if the target proxy is nil or the target
         * object does not support the requested type.
         */
        static checkedCast(prx: iceNS0.Ice.ObjectPrx, facet?: string, contex?: Map<string, string>): iceNS0.Ice.AsyncResult<VideoOPPrx>;
    }

    abstract class VideoOP extends iceNS0.Ice.Object {
        abstract opVideoBugStart(in0: Dispatcher.Identity, in1: VideoBugStartT, current: iceNS0.Ice.Current): PromiseLike<VideoBugStartRT> | VideoBugStartRT;
        abstract opVideoBugEnd(in0: Dispatcher.Identity, in1: VideoBugEndT, current: iceNS0.Ice.Current): PromiseLike<VideoBugEndRT> | VideoBugEndRT;
        abstract opPlayVideo(in0: Dispatcher.Identity, in1: PlayVideoT, current: iceNS0.Ice.Current): PromiseLike<PlayVideoRT> | PlayVideoRT;
        abstract opVideoInfo(in0: Dispatcher.Identity, in1: VideoInfoT, current: iceNS0.Ice.Current): PromiseLike<VideoInfoRT> | VideoInfoRT;
        abstract opVideoInfo1(in0: Dispatcher.Identity, in1: VideoInfoT, current: iceNS0.Ice.Current): PromiseLike<VideoInfoRT1> | VideoInfoRT1;
        abstract opCameraNumberControl(in0: Dispatcher.Identity, in1: CameraNumberControl, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opCameraIPControl(in0: Dispatcher.Identity, in1: CameraIPControl, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opGetHistoryVideo(in0: Dispatcher.Identity, in1: HistoryVideoT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opPlayHistoryVideo(in0: Dispatcher.Identity, in1: HistoryVideoT, current: iceNS0.Ice.Current): PromiseLike<PlayHistoryVideoRT> | PlayHistoryVideoRT;
        abstract opHistoryVideoPlay(in0: Dispatcher.Identity, in1: HistoryVideoOperateT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opHistoryVideoPause(in0: Dispatcher.Identity, in1: HistoryVideoOperateT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opHistoryVideoSpeed(in0: Dispatcher.Identity, in1: HistoryVSpeedT, current: iceNS0.Ice.Current): PromiseLike<void> | void;
        abstract opSipPhoneVideoBug(in0: Dispatcher.Identity, in1: SipPhoneVideoBugT, current: iceNS0.Ice.Current): PromiseLike<SipPhoneVideoBugRT> | SipPhoneVideoBugRT;
        /**
         * Obtains the Slice type ID of this type.
         * @return The return value is always "::Dispatcher::VideoOP".
         */
        static ice_staticId(): string;
    }
}
