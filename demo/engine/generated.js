// **********************************************************************
//
// Copyright (c) 2003-present ZeroC, Inc. All rights reserved.
//
// **********************************************************************
import { Ice } from 'ice';

//
const _ModuleRegistry = Ice._ModuleRegistry;
const Slice = Ice.Slice;

let Dispatcher = _ModuleRegistry.module("Dispatcher");

Dispatcher.ECode = Slice.defineEnum([
    ['ECodeNone', 0], ['ECodeRegister', 1000], ['ECodeRegisterKickout', 1001], ['ECodeRegisterTimeout', 1002], ['ECodeRegisterNotRegister', 1003],
    ['ECodeRegisterDisConnect', 1004], ['ECodeRegisterUserIsLogin', 1005], ['ECodeRegisterErrorPwd', 1006], ['ECodeCalling', 1100], ['ECodeCallingCaller', 1101],
    ['ECodeCallingCallee', 1102], ['ECodeCallingType', 1103], ['ECodeCallingSessionNotFound', 1104], ['ECodeCallingTerminalNotFound', 1105], ['ECodeCallingNumberNotRegistered', 1106],
    ['ECodeCallingUserNotExist', 1107], ['ECodeCallingNoAuth', 1108], ['ECodeCallingOprFailed', 1109], ['ECodeCallingUserNotInGroup', 1110], ['ECodeCallingGroupNotFound', 1111],
    ['ECodeCallingCallTypeError', 1112], ['ECodeCallingSessionCreateFailed', 1113], ['ECodeOpFaxFailured', 1114], ['ECodeFileNotFound', 1115], ['ECodeNoCid', 1116],
    ['ECodeNumberBusy', 1117], ['ECodeCallingOperateFailed', 1118], ['ECodeCallingNotHaveFitCall', 1119], ['ECodeNotDTPUser', 1120], ['ECodeSessionStateError', 1121],
    ['ECodeCanNotCallIntercomGroup', 1122], ['ECodeCallingOperateNotConn', 1123], ['ECodeConsole', 1200], ['ECodeConsoleBind', 1201], ['ECodeErrLicense', 1202],
    ['ECodeErrCanNotUse', 1203], ['ECodeConsoleBindErrorType', 1204], ['ECodeConsoleBindFristRegist', 1205], ['ECodeNotMCUSession', 1300], ['ECodeIsBinded', 1301],
    ['ECodeMsgGroupExist', 1400], ['ECodeMsgGroupNotExist', 1401], ['ECodeVideoBugCalledIsVoice', 1500]]);

Object.defineProperty(Dispatcher, 'ECodeNoneDis', {
    value: "\u672a\u5b9a\u4e49\u9519\u8bef"
});

Object.defineProperty(Dispatcher, 'ECodeRegisterKickoutDis', {
    value: "\u5f02\u5730\u767b\u9646"
});

Object.defineProperty(Dispatcher, 'ECodeRegisterTimeoutDis', {
    value: "\u767b\u9646\u8d85\u65f6"
});

Object.defineProperty(Dispatcher, 'ECodeRegisterNotRegisterDis', {
    value: "\u53f7\u7801\u672a\u6ce8\u518c"
});

Object.defineProperty(Dispatcher, 'ECodeRegisterDisConnectDis', {
    value: "\u8fde\u63a5\u5df2\u65ad\u5f00"
});

Object.defineProperty(Dispatcher, 'ECodeRegisterUserIsLoginDis', {
    value: "\u53f7\u7801\u5df2\u5728\u5176\u5b83\u7ec8\u7aef\u767b\u5f55"
});

Object.defineProperty(Dispatcher, 'ECodeRegisterErrorPwdDis', {
    value: "\u5bc6\u7801\u9519\u8bef"
});

Object.defineProperty(Dispatcher, 'ECodeCallingCallerDis', {
    value: "\u4e3b\u53eb\u53f7\u7801\u9519\u8bef"
});

Object.defineProperty(Dispatcher, 'ECodeCallingCalleeDis', {
    value: "\u88ab\u53eb\u53f7\u7801\u9519\u8bef"
});

Object.defineProperty(Dispatcher, 'ECodeCallingTypeDis', {
    value: "\u547c\u53eb\u7c7b\u578b\u9519\u8bef"
});

Object.defineProperty(Dispatcher, 'ECodeCallingSessionNotFoundDis', {
    value: "\u627e\u4e0d\u5230\u547c\u53ebID"
});

Object.defineProperty(Dispatcher, 'ECodeConsoleBindDis', {
    value: "\u7ed1\u5b9a\u53f7\u7801\u9519\u8bef,\u53f7\u7801\u672a\u6ce8\u518c"
});

Object.defineProperty(Dispatcher, 'ECodeConsoleBindErrorTypeDis', {
    value: "\u7ed1\u5b9a\u53f7\u7801\u9519\u8bef,\u53f7\u7801\u7c7b\u578b\u9519\u8bef"
});

Object.defineProperty(Dispatcher, 'ECodeConsoleBindFristRegistDis', {
    value: "\u8bf7\u5148\u6ce8\u518c\u518d\u7ed1\u5b9a\u53f7\u7801"
});

Object.defineProperty(Dispatcher, 'ECodeCallingTerminalNotFoundDis', {
    value: "\u53f7\u7801\u4e0d\u5b58\u5728"
});

Object.defineProperty(Dispatcher, 'ECodeCallingNumberNotRegisteredDis', {
    value: "\u53f7\u7801\u672a\u6ce8\u518c"
});

Object.defineProperty(Dispatcher, 'ECodeCallingUserNotExistDis', {
    value: "\u7528\u6237\u4e0d\u5b58\u5728"
});

Object.defineProperty(Dispatcher, 'ECodeCallingNoAuthDis', {
    value: "\u6ca1\u6709\u6743\u9650"
});

Object.defineProperty(Dispatcher, 'ECodeCallingOprFailedDis', {
    value: "\u64cd\u4f5c\u6267\u884c\u5931\u8d25"
});

Object.defineProperty(Dispatcher, 'ECodeCallingUserNotInGroupDis', {
    value: "\u7528\u6237\u5728\u8be5\u7ec4\u4e2d\u4e0d\u5b58\u5728"
});

Object.defineProperty(Dispatcher, 'ECodeCallingGroupNotFoundDis', {
    value: "\u7ec4\u53f7\u4e0d\u5b58\u5728"
});

Object.defineProperty(Dispatcher, 'ECodeCallingCallTypeErrorDis', {
    value: "\u547c\u53eb\u7c7b\u578b\u9519\u8bef"
});

Object.defineProperty(Dispatcher, 'ECodeCallingSessionCreateFailedDis', {
    value: "\u547c\u53eb\u521b\u5efa\u5931\u8d25"
});

Object.defineProperty(Dispatcher, 'ECodeCallingOperateFailedDis', {
    value: "\u64cd\u4f5c\u5931\u8d25"
});

Object.defineProperty(Dispatcher, 'ECodeCallingNotHaveFitCallDis', {
    value: "\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u547c\u53eb"
});

Object.defineProperty(Dispatcher, 'ECodeSessionStateErrorDis', {
    value: "\u547c\u53eb\u72b6\u6001\u9519\u8bef"
});

Object.defineProperty(Dispatcher, 'ECodeCanNotCallIntercomGroupDis', {
    value: "\u4e0d\u80fd\u547c\u53eb\u5bf9\u8bb2\u7ec4"
});

Object.defineProperty(Dispatcher, 'ECodeCallingOperateNotConnDis', {
    value: "\u4ec5\u53ef\u5bf9\u901a\u8bdd\u4e2d\u7684\u7528\u6237\u8fdb\u884c\u64cd\u4f5c"
});

Object.defineProperty(Dispatcher, 'ECodeOpFaxFailuredDis', {
    value: "\u53d1\u9001\u4f20\u771f\u5931\u8d25"
});

Object.defineProperty(Dispatcher, 'ECodeFileNotFoundDis', {
    value: "\u627e\u4e0d\u5230\u6587\u4ef6"
});

Object.defineProperty(Dispatcher, 'ECodeNoCidDis', {
    value: "\u547c\u53ebID\u4e3a\u7a7a"
});

Object.defineProperty(Dispatcher, 'ECodeNumberBusyDis', {
    value: "\u6307\u5b9a\u53f7\u7801\u5fd9"
});

Object.defineProperty(Dispatcher, 'ECodeErrLicenseDis', {
    value: "\u8d85\u51falicense\u9650\u5236"
});

Object.defineProperty(Dispatcher, 'ECodeErrCanNotUseDis', {
    value: "\u529f\u80fd\u672a\u5f00\u901a"
});

Object.defineProperty(Dispatcher, 'ECodeNotDTPUserDis', {
    value: "\u975e\u8c03\u5ea6\u7528\u6237"
});

Object.defineProperty(Dispatcher, 'ECodeNotMCUSessionDis', {
    value: "\u975eMCU\u547c\u53eb"
});

Object.defineProperty(Dispatcher, 'ECodeIsBindedDis', {
    value: "\u53f7\u7801\u5df2\u88ab\u7ed1\u5b9a\uff0c\u7ed1\u5b9a\u4eba:"
});

Object.defineProperty(Dispatcher, 'ECodeMsgGroupExistDis', {
    value: "\u5f53\u524d\u7fa4\u5df2\u5b58\u5728"
});

Object.defineProperty(Dispatcher, 'ECodeMsgGroupNotExistDis', {
    value: "\u6307\u5b9a\u7684\u7fa4\u4e0d\u5b58\u5728"
});

Object.defineProperty(Dispatcher, 'ECodeVideoBugCalledIsVoiceDis', {
    value: "\u6307\u5b9a\u53f7\u7801\u5728\u97f3\u9891\u901a\u8bdd\u4e2d"
});

Dispatcher.Error = class extends Ice.UserException
{
    constructor(code = Dispatcher.ECode.ECodeNone, desc = "", _cause = "")
    {
        super(_cause);
        this.code = code;
        this.desc = desc;
    }

    static get _parent()
    {
        return Ice.UserException;
    }

    static get _id()
    {
        return "::Dispatcher::Error";
    }

    _mostDerivedType()
    {
        return Dispatcher.Error;
    }

    _writeMemberImpl(ostr)
    {
        Dispatcher.ECode._write(ostr, this.code);
        ostr.writeString(this.desc);
    }

    _readMemberImpl(istr)
    {
        this.code = Dispatcher.ECode._read(istr);
        this.desc = istr.readString();
    }
};

Object.defineProperty(Dispatcher, 'SYSMessageDiskUsed', {
    value: "\u8c03\u5ea6\u670d\u52a1\u5668\u5b58\u50a8\u5feb\u6ee1\uff0c\u8bf7\u53ca\u65f6\u5907\u4efd\u6216\u6e05\u9664\u6570\u636e"
});

Object.defineProperty(Dispatcher, 'SYSMessageDiskClear', {
    value: "\u8c03\u5ea6\u670d\u52a1\u5668\u5b58\u50a8\u7a7a\u95f4\u6e05\u7406\u5b8c\u6bd5"
});

//
const _ModuleRegistry$1 = Ice._ModuleRegistry;
const Slice$1 = Ice.Slice;

let Dispatcher$1 = _ModuleRegistry$1.module("Dispatcher");

Dispatcher$1.CallType = Slice$1.defineEnum([
    ['CallTypeNone', 0], ['CallTypeSingle', 1], ['CallTypeTmpgroup', 2], ['CallTypeReport', 3], ['CallTypeBroadcast', 4],
    ['CallTypeTemporary', 5], ['CallTypeInterpose', 6], ['CallTypeForceremove', 7], ['CallTypeMonitor', 8], ['CallTypeIntercom', 9],
    ['CallTypeSwitch', 10], ['CallTypeUrgent', 11], ['CallTypeSingle2', 12], ['CallTypeTmpintercom', 13], ['CallTypeVideobug', 14],
    ['CallTypeMCUMetting', 15], ['CallTypeSOS', 16], ['CallTypeTransferVideo', 17], ['CallTypeTransferVideoToMcu', 18], ['CallTypeUploadVideo', 19],
    ['CallTypePlayFile', 20]]);

Dispatcher$1.RegisterState = Slice$1.defineEnum([
    ['RegisterStateNone', 0], ['RegisterStateLogin', 1], ['RegisterStateLogout', 2]]);

Dispatcher$1.CallState = Slice$1.defineEnum([
    ['CallStateNone', 0], ['CallStateInit', 1], ['CallStateNormal', 2], ['CallStateCallout', 3], ['CallStateIncoming', 4],
    ['CallStateRinging', 5], ['CallStateConnect', 6], ['CallStateHold', 7], ['CallStateBusy', 8], ['CallStateOffhook', 9],
    ['CallStateRelease', 10], ['CallStateUnspeak', 11], ['CallStateSpeak', 12], ['CallStateQueue', 13], ['CallStateUnhold', 14],
    ['CallStateZombie', 15]]);

Dispatcher$1.MediaType = Slice$1.defineEnum([
    ['MediaTypeNone', 0], ['MediaTypeAudio', 1], ['MediaTypeVideo', 2]]);

Dispatcher$1.GroupType = Slice$1.defineEnum([
    ['GroupTypeIntercomgroup', 0], ['GroupTypeOther', 1], ['GroupTypeNone', 2]]);

Dispatcher$1.UserType = Slice$1.defineEnum([
    ['UserTypeDispatch', 0], ['UserTypeHandheld', 1], ['UserTypeCommonuser', 2], ['UserTypeOutlineuser', 3], ['UserTypeMonitoruser', 4],
    ['UserTypeSsu', 5], ['UserType3ghandheld', 6], ['UserTypeMonitordevice', 7], ['UserTypeNone', 8], ['UserType323', 9],
    ['UserTypeStationGroup', 10], ['UserTypeStationUser', 11], ['UserTypeRelayUser', 12], ['UserTypeBroadRelayUser', 13], ['UserTypeRelayGW', 14],
    ['UserTypeMCUReg', 15]]);

Dispatcher$1.FileType = Slice$1.defineEnum([
    ['FileTypeNone', 0], ['FileTypeText', 1], ['FileTypePic', 2], ['FileTypeVoice', 3], ['FileTypeVideo', 4],
    ['FileTypeGisinfo', 5], ['FileTypePlayAudio', 6], ['FileTypeFax', 7], ['FileTypeOther', 8], ['FileTypePlayVideo', 9],
    ['FileTypeUploadVideo', 10]]);

Dispatcher$1.FileState = Slice$1.defineEnum([
    ['FileStateNone', 0], ['FileStateUploading', 1], ['FileStateUploaded', 2]]);

Dispatcher$1.SpeakType = Slice$1.defineEnum([
    ['SpeakTypeNone', 0], ['SpeakTypeMute', 1], ['SpeakTypeUnmute', 2]]);

Dispatcher$1.UserOrGroup = Slice$1.defineEnum([
    ['UOGNone', 0], ['UOGEmployee', 1], ['UOGGroup', 2]]);

Dispatcher$1.HearType = Slice$1.defineEnum([
    ['HearTypeNone', 0], ['HearTypeMute', 1], ['HearTypeUnmute', 2]]);

Dispatcher$1.PushVideoType = Slice$1.defineEnum([
    ['PushVideoTypeNone', 0], ['PushVideoTypePush', 1], ['PushVideoTypeUnpush', 2]]);

Dispatcher$1.PlayAudioType = Slice$1.defineEnum([
    ['PlayAudioTypeNone', 0], ['PlayAudioTypeStart', 1], ['PlayAudioTypeStop', 2]]);

Dispatcher$1.PlayVideoType = Slice$1.defineEnum([
    ['PlayVideoTypeNone', 0], ['PlayVideoTypeStart', 1], ['PlayVideoTypeStop', 2]]);

Dispatcher$1.AudioFileType = Slice$1.defineEnum([
    ['AudioFileTypeNone', 0], ['AudioFileTypeEcho', 1]]);

Dispatcher$1.AnswerType = Slice$1.defineEnum([
    ['AnswerTypeNone', 0], ['AnswerTypeAuto', 1], ['AnswerTypeMan', 2]]);

Dispatcher$1.HoldType = Slice$1.defineEnum([
    ['HoldTypeNone', 0], ['HoldTypeHold', 1], ['HoldTypeUnhold', 2]]);

Dispatcher$1.GisTraceType = Slice$1.defineEnum([
    ['GisTraceTypeNone', 0], ['GisTraceTypeSub', 1], ['GisTraceTypeUnsub', 2]]);

Dispatcher$1.PrePlanState = Slice$1.defineEnum([
    ['PrePlanStateNone', 0], ['PrePlanStateRuning', 1], ['PrePlanStateEnd', 2]]);

Dispatcher$1.VBugStateType = Slice$1.defineEnum([
    ['VBugStateTypeNone', 0], ['VBugStateTypeOk', 1], ['VBugStateTypeFailure', 2], ['VBugStateTypeRelease', 3]]);

Dispatcher$1.PrePlanInstType = Slice$1.defineEnum([
    ['PrePlanTypeInstMessage', 1], ['PrePlanTypeInstBroadCast', 2], ['PrePlanTypeInstMeeting', 3], ['PrePlanTypeInstVideoMeeting', 4]]);

Dispatcher$1.FaxStateSend = Slice$1.defineEnum([
    ['FaxStateSendNone', 0], ['FaxStateSending', 1], ['FaxStateSended', 2], ['FaxStateSendFailure', 3]]);

Dispatcher$1.FaxStateRecv = Slice$1.defineEnum([
    ['FaxStateRecvNone', 0], ['FaxStateRecving', 1], ['FaxStateRecved', 2], ['FaxStateRecvedFailure', 3]]);

Dispatcher$1.emCalledType = Slice$1.defineEnum([
    ['CalledTypeNONE', 0], ['CalledTypeTDNSFreeswitch', 1], ['CalledTypeMCU', 2], ['CalledTypePlayVideo', 3], ['CalledTypeMCUDevice', 4],
    ['CalledType28181', 5], ['CalledTypeMonitorDeivce', 6], ['CalledTypePlayHisVideo', 7]]);

Dispatcher$1.emVideoDeviceType = Slice$1.defineEnum([
    ['VDTNONE', 0], ['VDTHKIPC', 1], ['VDTOTHER', 2], ['VDTHKDVR', 3], ['VDTHKVIDEOSERVER', 4],
    ['VDTHKDECOMPILER', 5], ['VDTDHIPC', 10], ['VDTDHDVR', 11], ['VDTDHVIDEOSERVER', 12], ['VDTDHDECOMPILER', 13]]);

Dispatcher$1.emCodecType = Slice$1.defineEnum([
    ['CDTNONE', 0], ['CDTH264', 1], ['CDTH265', 2], ['CDT264265', 3]]);

Dispatcher$1.Identity = class
{
    constructor(user = "")
    {
        this.user = user;
    }

    _write(ostr)
    {
        ostr.writeString(this.user);
    }

    _read(istr)
    {
        this.user = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$1.defineStruct(Dispatcher$1.Identity, true, true);

Dispatcher$1.CommonRequestT = class
{
    constructor(cid = "")
    {
        this.cid = cid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$1.defineStruct(Dispatcher$1.CommonRequestT, true, true);

Object.defineProperty(Dispatcher$1, 'CALLREMARKENGOTRANSFER', {
    value: "\u534f\u5546\u8f6c\u63a5"
});

Object.defineProperty(Dispatcher$1, 'CALLREMARKMOINTOR', {
    value: "\u76d1\u542c"
});

Object.defineProperty(Dispatcher$1, 'CALLREMARKSUBSTITUTE', {
    value: "\u4ee3\u63a5"
});

Object.defineProperty(Dispatcher$1, 'CALLREMARKINTERPOSE', {
    value: "\u5f3a\u63d2"
});

Object.defineProperty(Dispatcher$1, 'CALLREMARKREMOVE', {
    value: "\u5f3a\u65ad"
});

Object.defineProperty(Dispatcher$1, 'CALLREMARKSWITCH', {
    value: "\u8f6c\u63a5"
});

Object.defineProperty(Dispatcher$1, 'CALLREMARKADDMEMBER', {
    value: "\u9080\u8bf7\u6210\u5458"
});

Object.defineProperty(Dispatcher$1, 'CALLREMARKPLAYFILE', {
    value: "\u64ad\u653e\u6587\u4ef6"
});

Object.defineProperty(Dispatcher$1, 'CALLREMARKREMOVEOTHER', {
    value: "\u5f3a\u62c6"
});

Object.defineProperty(Dispatcher$1, 'STRYMSDISPATCHERGROUP', {
    value: "\u8c03\u5ea6\u670d\u52a1\u5668\u4e13\u7528"
});

Object.defineProperty(Dispatcher$1, 'SYSMSGLISERENCEERR', {
    value: "\u60a8\u597d!\r\nIDS\u878d\u5408\u901a\u4fe1\u670d\u52a1\u5668\u8bb8\u53ef\u8fd8\u5269%day%\u5929\u8fc7\u671f\uff0c\u8bf7\u53ca\u65f6\u8054\u7cfb\u5382\u5bb6\u66f4\u6362\u8bb8\u53ef\u3002"
});

//
const _ModuleRegistry$2 = Ice._ModuleRegistry;
const Slice$2 = Ice.Slice;

Dispatcher.BusinessTypeRT = class
{
    constructor(id = 0, WTGroupID = 0, WorkTypeName = "", TheValue = 0, description = "", TheState = 0, IsDefault = 0, WTGroupName = "")
    {
        this.id = id;
        this.WTGroupID = WTGroupID;
        this.WorkTypeName = WorkTypeName;
        this.TheValue = TheValue;
        this.description = description;
        this.TheState = TheState;
        this.IsDefault = IsDefault;
        this.WTGroupName = WTGroupName;
    }

    _write(ostr)
    {
        ostr.writeInt(this.id);
        ostr.writeInt(this.WTGroupID);
        ostr.writeString(this.WorkTypeName);
        ostr.writeInt(this.TheValue);
        ostr.writeString(this.description);
        ostr.writeInt(this.TheState);
        ostr.writeInt(this.IsDefault);
        ostr.writeString(this.WTGroupName);
    }

    _read(istr)
    {
        this.id = istr.readInt();
        this.WTGroupID = istr.readInt();
        this.WorkTypeName = istr.readString();
        this.TheValue = istr.readInt();
        this.description = istr.readString();
        this.TheState = istr.readInt();
        this.IsDefault = istr.readInt();
        this.WTGroupName = istr.readString();
    }

    static get minWireSize()
    {
        return  23;
    }
};

Slice$2.defineStruct(Dispatcher.BusinessTypeRT, true, true);

Slice$2.defineSequence(Dispatcher, "BusinessTypeRTSeqHelper", "Dispatcher.BusinessTypeRT", false);

Dispatcher.SendBusFileReceiveT = class
{
    constructor(MsgUUID = "", Receiver = "", ReceiverName = "", Remark = "", ModifyEmployee = "")
    {
        this.MsgUUID = MsgUUID;
        this.Receiver = Receiver;
        this.ReceiverName = ReceiverName;
        this.Remark = Remark;
        this.ModifyEmployee = ModifyEmployee;
    }

    _write(ostr)
    {
        ostr.writeString(this.MsgUUID);
        ostr.writeString(this.Receiver);
        ostr.writeString(this.ReceiverName);
        ostr.writeString(this.Remark);
        ostr.writeString(this.ModifyEmployee);
    }

    _read(istr)
    {
        this.MsgUUID = istr.readString();
        this.Receiver = istr.readString();
        this.ReceiverName = istr.readString();
        this.Remark = istr.readString();
        this.ModifyEmployee = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$2.defineStruct(Dispatcher.SendBusFileReceiveT, true, true);

Slice$2.defineSequence(Dispatcher, "SendBusFileReceiveSeqHelper", "Dispatcher.SendBusFileReceiveT", false);

Dispatcher.StartSendBusFileT = class
{
    constructor(MsgUUID = "", FileUUID = "", FileType = 0, FileName = "", Remark = "")
    {
        this.MsgUUID = MsgUUID;
        this.FileUUID = FileUUID;
        this.FileType = FileType;
        this.FileName = FileName;
        this.Remark = Remark;
    }

    _write(ostr)
    {
        ostr.writeString(this.MsgUUID);
        ostr.writeString(this.FileUUID);
        ostr.writeInt(this.FileType);
        ostr.writeString(this.FileName);
        ostr.writeString(this.Remark);
    }

    _read(istr)
    {
        this.MsgUUID = istr.readString();
        this.FileUUID = istr.readString();
        this.FileType = istr.readInt();
        this.FileName = istr.readString();
        this.Remark = istr.readString();
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$2.defineStruct(Dispatcher.StartSendBusFileT, true, true);

Slice$2.defineSequence(Dispatcher, "StartSendBusFileSeqHelper", "Dispatcher.StartSendBusFileT", false);

Dispatcher.StartSendBusInfoT = class
{
    constructor(MsgUUID = "", KeyStationID = 0, KeyLineID = 0, KeyRailNum = "", Sender = "", senderName = "", WorkTypeValue = 0, ParentID = "", Descrip = "", SendState = 0, Files = null, Receivers = null)
    {
        this.MsgUUID = MsgUUID;
        this.KeyStationID = KeyStationID;
        this.KeyLineID = KeyLineID;
        this.KeyRailNum = KeyRailNum;
        this.Sender = Sender;
        this.senderName = senderName;
        this.WorkTypeValue = WorkTypeValue;
        this.ParentID = ParentID;
        this.Descrip = Descrip;
        this.SendState = SendState;
        this.Files = Files;
        this.Receivers = Receivers;
    }

    _write(ostr)
    {
        ostr.writeString(this.MsgUUID);
        ostr.writeInt(this.KeyStationID);
        ostr.writeInt(this.KeyLineID);
        ostr.writeString(this.KeyRailNum);
        ostr.writeString(this.Sender);
        ostr.writeString(this.senderName);
        ostr.writeInt(this.WorkTypeValue);
        ostr.writeString(this.ParentID);
        ostr.writeString(this.Descrip);
        ostr.writeInt(this.SendState);
        Dispatcher.StartSendBusFileSeqHelper.write(ostr, this.Files);
        Dispatcher.SendBusFileReceiveSeqHelper.write(ostr, this.Receivers);
    }

    _read(istr)
    {
        this.MsgUUID = istr.readString();
        this.KeyStationID = istr.readInt();
        this.KeyLineID = istr.readInt();
        this.KeyRailNum = istr.readString();
        this.Sender = istr.readString();
        this.senderName = istr.readString();
        this.WorkTypeValue = istr.readInt();
        this.ParentID = istr.readString();
        this.Descrip = istr.readString();
        this.SendState = istr.readInt();
        this.Files = Dispatcher.StartSendBusFileSeqHelper.read(istr);
        this.Receivers = Dispatcher.SendBusFileReceiveSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  24;
    }
};

Slice$2.defineStruct(Dispatcher.StartSendBusInfoT, true, true);

Dispatcher.StartSendBusFileRT = class
{
    constructor(MsgUUID = "", FileUUID = "", FileName = "", FilePath = "")
    {
        this.MsgUUID = MsgUUID;
        this.FileUUID = FileUUID;
        this.FileName = FileName;
        this.FilePath = FilePath;
    }

    _write(ostr)
    {
        ostr.writeString(this.MsgUUID);
        ostr.writeString(this.FileUUID);
        ostr.writeString(this.FileName);
        ostr.writeString(this.FilePath);
    }

    _read(istr)
    {
        this.MsgUUID = istr.readString();
        this.FileUUID = istr.readString();
        this.FileName = istr.readString();
        this.FilePath = istr.readString();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$2.defineStruct(Dispatcher.StartSendBusFileRT, true, true);

Slice$2.defineSequence(Dispatcher, "StartSendBusFileRTSeqHelper", "Dispatcher.StartSendBusFileRT", false);

Dispatcher.SendBusInfoRT = class
{
    constructor(MsgUUID = "", Sender = "", Files = null)
    {
        this.MsgUUID = MsgUUID;
        this.Sender = Sender;
        this.Files = Files;
    }

    _write(ostr)
    {
        ostr.writeString(this.MsgUUID);
        ostr.writeString(this.Sender);
        Dispatcher.StartSendBusFileRTSeqHelper.write(ostr, this.Files);
    }

    _read(istr)
    {
        this.MsgUUID = istr.readString();
        this.Sender = istr.readString();
        this.Files = Dispatcher.StartSendBusFileRTSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$2.defineStruct(Dispatcher.SendBusInfoRT, true, true);

Dispatcher.SendBusInfoEndT = class
{
    constructor(MsgUUID = "", SendState = 1)
    {
        this.MsgUUID = MsgUUID;
        this.SendState = SendState;
    }

    _write(ostr)
    {
        ostr.writeString(this.MsgUUID);
        ostr.writeInt(this.SendState);
    }

    _read(istr)
    {
        this.MsgUUID = istr.readString();
        this.SendState = istr.readInt();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$2.defineStruct(Dispatcher.SendBusInfoEndT, true, true);

Dispatcher.SendBusFileEndT = class
{
    constructor(FileUUID = "", SendState = 1)
    {
        this.FileUUID = FileUUID;
        this.SendState = SendState;
    }

    _write(ostr)
    {
        ostr.writeString(this.FileUUID);
        ostr.writeInt(this.SendState);
    }

    _read(istr)
    {
        this.FileUUID = istr.readString();
        this.SendState = istr.readInt();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$2.defineStruct(Dispatcher.SendBusFileEndT, true, true);

Dispatcher.BusFileReceivedT = class
{
    constructor(MsgUUID = "", receiver = "")
    {
        this.MsgUUID = MsgUUID;
        this.receiver = receiver;
    }

    _write(ostr)
    {
        ostr.writeString(this.MsgUUID);
        ostr.writeString(this.receiver);
    }

    _read(istr)
    {
        this.MsgUUID = istr.readString();
        this.receiver = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$2.defineStruct(Dispatcher.BusFileReceivedT, true, true);

Dispatcher.GetNotReceivedInfoT = class
{
    constructor(maxnum = 10, receiver = "")
    {
        this.maxnum = maxnum;
        this.receiver = receiver;
    }

    _write(ostr)
    {
        ostr.writeInt(this.maxnum);
        ostr.writeString(this.receiver);
    }

    _read(istr)
    {
        this.maxnum = istr.readInt();
        this.receiver = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$2.defineStruct(Dispatcher.GetNotReceivedInfoT, true, true);

Dispatcher.GetNotReceivedInfoRT = class
{
    constructor(Sendnum = 0, HaveOther = false)
    {
        this.Sendnum = Sendnum;
        this.HaveOther = HaveOther;
    }

    _write(ostr)
    {
        ostr.writeInt(this.Sendnum);
        ostr.writeBool(this.HaveOther);
    }

    _read(istr)
    {
        this.Sendnum = istr.readInt();
        this.HaveOther = istr.readBool();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$2.defineStruct(Dispatcher.GetNotReceivedInfoRT, true, false);

const iceC_Dispatcher_BusinessOP_ids = [
    "::Dispatcher::BusinessOP",
    "::Ice::Object"
];

Dispatcher.BusinessOP = class extends Ice.Object
{
};

Dispatcher.BusinessOPPrx = class extends Ice.ObjectPrx
{
};

Slice$2.defineOperations(Dispatcher.BusinessOP, Dispatcher.BusinessOPPrx, iceC_Dispatcher_BusinessOP_ids, 0,
{
    "opGetBusinessTypes": [, , , , ["Dispatcher.BusinessTypeRTSeqHelper"], [[Dispatcher.Identity]], ,
    [
        Dispatcher.Error
    ], , ],
    "opStartSendBusinessInfo": [, , , , [Dispatcher.SendBusInfoRT], [[Dispatcher.Identity], [Dispatcher.StartSendBusInfoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opStartSendFile": [, , , , [Dispatcher.StartSendBusFileRT], [[Dispatcher.Identity], [Dispatcher.StartSendBusFileT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSendBusinessInfoEnd": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.SendBusInfoEndT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSendBusinessFileEnd": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.SendBusFileEndT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opChangeBusFileReceive": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.SendBusFileReceiveT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opBusFileReceived": [, , , , , [[Dispatcher.Identity], [Dispatcher.BusFileReceivedT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetNotReceivedInfo": [, , , , [Dispatcher.GetNotReceivedInfoRT], [[Dispatcher.Identity], [Dispatcher.GetNotReceivedInfoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opDeleteBusInfo": [, , , , [1], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$3 = Ice._ModuleRegistry;
const Slice$3 = Ice.Slice;

Dispatcher.PlayAudioEvT = class
{
    constructor(cid = "", uuid = "", type = Dispatcher.PlayAudioType.PlayAudioTypeNone)
    {
        this.cid = cid;
        this.uuid = uuid;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.uuid);
        Dispatcher.PlayAudioType._write(ostr, this.type);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.uuid = istr.readString();
        this.type = Dispatcher.PlayAudioType._read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$3.defineStruct(Dispatcher.PlayAudioEvT, true, true);

Dispatcher.CallDirect = Slice$3.defineEnum([
    ['CallDirectNone', 0], ['CallDirectOut', 1], ['CallDirectIn', 2]]);

Dispatcher.SessionChangeT = class
{
    constructor(cid = "", callingnum = "", callingname = "", othernum = "", othername = "", direction = Dispatcher.CallDirect.CallDirectNone, state = Dispatcher.CallState.CallStateNone, type = Dispatcher.CallType.CallTypeNone, level = 0, isVideo = Dispatcher.MediaType.MediaTypeNone, RoadParameters = "")
    {
        this.cid = cid;
        this.callingnum = callingnum;
        this.callingname = callingname;
        this.othernum = othernum;
        this.othername = othername;
        this.direction = direction;
        this.state = state;
        this.type = type;
        this.level = level;
        this.isVideo = isVideo;
        this.RoadParameters = RoadParameters;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.callingnum);
        ostr.writeString(this.callingname);
        ostr.writeString(this.othernum);
        ostr.writeString(this.othername);
        Dispatcher.CallDirect._write(ostr, this.direction);
        Dispatcher.CallState._write(ostr, this.state);
        Dispatcher.CallType._write(ostr, this.type);
        ostr.writeInt(this.level);
        Dispatcher.MediaType._write(ostr, this.isVideo);
        ostr.writeString(this.RoadParameters);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.callingnum = istr.readString();
        this.callingname = istr.readString();
        this.othernum = istr.readString();
        this.othername = istr.readString();
        this.direction = Dispatcher.CallDirect._read(istr);
        this.state = Dispatcher.CallState._read(istr);
        this.type = Dispatcher.CallType._read(istr);
        this.level = istr.readInt();
        this.isVideo = Dispatcher.MediaType._read(istr);
        this.RoadParameters = istr.readString();
    }

    static get minWireSize()
    {
        return  14;
    }
};

Slice$3.defineStruct(Dispatcher.SessionChangeT, true, true);

Slice$3.defineSequence(Dispatcher, "SessionChangeTSeqHelper", "Dispatcher.SessionChangeT", false);

//
const _ModuleRegistry$4 = Ice._ModuleRegistry;
const Slice$4 = Ice.Slice;

Dispatcher.CMStateChangeT = class
{
    constructor(cid = "", employeeid = "", state = Dispatcher.CallState.CallStateNone, stateDecorate = "", name = "", type = 8)
    {
        this.cid = cid;
        this.employeeid = employeeid;
        this.state = state;
        this.stateDecorate = stateDecorate;
        this.name = name;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
        Dispatcher.CallState._write(ostr, this.state);
        ostr.writeString(this.stateDecorate);
        ostr.writeString(this.name);
        ostr.writeInt(this.type);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.employeeid = istr.readString();
        this.state = Dispatcher.CallState._read(istr);
        this.stateDecorate = istr.readString();
        this.name = istr.readString();
        this.type = istr.readInt();
    }

    static get minWireSize()
    {
        return  9;
    }
};

Slice$4.defineStruct(Dispatcher.CMStateChangeT, true, true);

Dispatcher.CallChangeT = class
{
    constructor(employeeid = "", state = Dispatcher.CallState.CallStateNone, othername = "", othernumber = "", DNSprefix = "", islocal = 0)
    {
        this.employeeid = employeeid;
        this.state = state;
        this.othername = othername;
        this.othernumber = othernumber;
        this.DNSprefix = DNSprefix;
        this.islocal = islocal;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        Dispatcher.CallState._write(ostr, this.state);
        ostr.writeString(this.othername);
        ostr.writeString(this.othernumber);
        ostr.writeString(this.DNSprefix);
        ostr.writeInt(this.islocal);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.state = Dispatcher.CallState._read(istr);
        this.othername = istr.readString();
        this.othernumber = istr.readString();
        this.DNSprefix = istr.readString();
        this.islocal = istr.readInt();
    }

    static get minWireSize()
    {
        return  9;
    }
};

Slice$4.defineStruct(Dispatcher.CallChangeT, true, true);

Dispatcher.SessionChange1T = class
{
    constructor(cid = "", callingnum = "", callingname = "", othernum = "", othername = "", direction = Dispatcher.CallDirect.CallDirectNone, state = Dispatcher.CallState.CallStateNone, type = Dispatcher.CallType.CallTypeNone, level = 0, isVideo = Dispatcher.MediaType.MediaTypeNone, RoadParameters = "", othermsg = "")
    {
        this.cid = cid;
        this.callingnum = callingnum;
        this.callingname = callingname;
        this.othernum = othernum;
        this.othername = othername;
        this.direction = direction;
        this.state = state;
        this.type = type;
        this.level = level;
        this.isVideo = isVideo;
        this.RoadParameters = RoadParameters;
        this.othermsg = othermsg;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.callingnum);
        ostr.writeString(this.callingname);
        ostr.writeString(this.othernum);
        ostr.writeString(this.othername);
        Dispatcher.CallDirect._write(ostr, this.direction);
        Dispatcher.CallState._write(ostr, this.state);
        Dispatcher.CallType._write(ostr, this.type);
        ostr.writeInt(this.level);
        Dispatcher.MediaType._write(ostr, this.isVideo);
        ostr.writeString(this.RoadParameters);
        ostr.writeString(this.othermsg);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.callingnum = istr.readString();
        this.callingname = istr.readString();
        this.othernum = istr.readString();
        this.othername = istr.readString();
        this.direction = Dispatcher.CallDirect._read(istr);
        this.state = Dispatcher.CallState._read(istr);
        this.type = Dispatcher.CallType._read(istr);
        this.level = istr.readInt();
        this.isVideo = Dispatcher.MediaType._read(istr);
        this.RoadParameters = istr.readString();
        this.othermsg = istr.readString();
    }

    static get minWireSize()
    {
        return  15;
    }
};

Slice$4.defineStruct(Dispatcher.SessionChange1T, true, true);

const iceC_Dispatcher_CallingCB_ids = [
    "::Dispatcher::CallingCB",
    "::Ice::Object"
];

Dispatcher.CallingCB = class extends Ice.Object
{
};

Dispatcher.CallingCBPrx = class extends Ice.ObjectPrx
{
};

Slice$4.defineOperations(Dispatcher.CallingCB, Dispatcher.CallingCBPrx, iceC_Dispatcher_CallingCB_ids, 0,
{
    "onSessionChange": [, 2, 2, , , [[Dispatcher.SessionChangeT]], , , , ],
    "onSessionChange1": [, 2, 2, , , [[Dispatcher.SessionChange1T]], , , , ],
    "onCMStateChange": [, 2, 2, , , [[Dispatcher.CMStateChangeT]], , , , ],
    "onCallChange": [, 2, 2, , , [[Dispatcher.CallChangeT]], , , , ],
    "onPlayAudioEv": [, 2, 2, , , [[Dispatcher.PlayAudioEvT]], , , , ]
});

const iceC_Dispatcher_CallingCBSub_ids = [
    "::Dispatcher::CallingCBSub",
    "::Ice::Object"
];

Dispatcher.CallingCBSub = class extends Ice.Object
{
};

Dispatcher.CallingCBSubPrx = class extends Ice.ObjectPrx
{
};

Slice$4.defineOperations(Dispatcher.CallingCBSub, Dispatcher.CallingCBSubPrx, iceC_Dispatcher_CallingCBSub_ids, 0);

//
const _ModuleRegistry$5 = Ice._ModuleRegistry;
const Slice$5 = Ice.Slice;

Dispatcher.NegoTransferT = class
{
    constructor(number = "", call1 = "", call2 = "", cid1 = "", cid2 = "")
    {
        this.number = number;
        this.call1 = call1;
        this.call2 = call2;
        this.cid1 = cid1;
        this.cid2 = cid2;
    }

    _write(ostr)
    {
        ostr.writeString(this.number);
        ostr.writeString(this.call1);
        ostr.writeString(this.call2);
        ostr.writeString(this.cid1);
        ostr.writeString(this.cid2);
    }

    _read(istr)
    {
        this.number = istr.readString();
        this.call1 = istr.readString();
        this.call2 = istr.readString();
        this.cid1 = istr.readString();
        this.cid2 = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$5.defineStruct(Dispatcher.NegoTransferT, true, true);

Dispatcher.NegoTransferRT = class
{
    constructor(cid = "")
    {
        this.cid = cid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$5.defineStruct(Dispatcher.NegoTransferRT, true, true);

Dispatcher.PlayAudioT = class
{
    constructor(fname = "", empid = "", cid = "", state = Dispatcher.PlayAudioType.PlayAudioTypeNone, uuid = "")
    {
        this.fname = fname;
        this.empid = empid;
        this.cid = cid;
        this.state = state;
        this.uuid = uuid;
    }

    _write(ostr)
    {
        ostr.writeString(this.fname);
        ostr.writeString(this.empid);
        ostr.writeString(this.cid);
        Dispatcher.PlayAudioType._write(ostr, this.state);
        ostr.writeString(this.uuid);
    }

    _read(istr)
    {
        this.fname = istr.readString();
        this.empid = istr.readString();
        this.cid = istr.readString();
        this.state = Dispatcher.PlayAudioType._read(istr);
        this.uuid = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$5.defineStruct(Dispatcher.PlayAudioT, true, true);

Dispatcher.PlayAudioRT = class
{
    constructor(code = 0)
    {
        this.code = code;
    }

    _write(ostr)
    {
        ostr.writeInt(this.code);
    }

    _read(istr)
    {
        this.code = istr.readInt();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$5.defineStruct(Dispatcher.PlayAudioRT, true, false);

Dispatcher.CallCommonT = class
{
    constructor(cid = "", caller = "", called = "")
    {
        this.cid = cid;
        this.caller = caller;
        this.called = called;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.caller);
        ostr.writeString(this.called);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.caller = istr.readString();
        this.called = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$5.defineStruct(Dispatcher.CallCommonT, true, true);

Dispatcher.CallCommonRET = class
{
    constructor(cid = "", caller = "", callee = "")
    {
        this.cid = cid;
        this.caller = caller;
        this.callee = callee;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.caller);
        ostr.writeString(this.callee);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.caller = istr.readString();
        this.callee = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$5.defineStruct(Dispatcher.CallCommonRET, true, true);

Slice$5.defineSequence(Dispatcher, "CallCommonRESeqHelper", "Dispatcher.CallCommonRET", false);

Dispatcher.CallCommonRT = class
{
    constructor(seq = null)
    {
        this.seq = seq;
    }

    _write(ostr)
    {
        Dispatcher.CallCommonRESeqHelper.write(ostr, this.seq);
    }

    _read(istr)
    {
        this.seq = Dispatcher.CallCommonRESeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$5.defineStruct(Dispatcher.CallCommonRT, true, true);

Dispatcher.SpeakerT = class
{
    constructor(cid = "", employeeid = "", speakertypea = Dispatcher.SpeakType.SpeakTypeNone)
    {
        this.cid = cid;
        this.employeeid = employeeid;
        this.speakertypea = speakertypea;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
        Dispatcher.SpeakType._write(ostr, this.speakertypea);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.employeeid = istr.readString();
        this.speakertypea = Dispatcher.SpeakType._read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$5.defineStruct(Dispatcher.SpeakerT, true, true);

Dispatcher.SpeakerRT = class
{
    constructor(code = 0)
    {
        this.code = code;
    }

    _write(ostr)
    {
        ostr.writeInt(this.code);
    }

    _read(istr)
    {
        this.code = istr.readInt();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$5.defineStruct(Dispatcher.SpeakerRT, true, false);

Dispatcher.HearT = class
{
    constructor(cid = "", number = "", hear = Dispatcher.HearType.HearTypeNone)
    {
        this.cid = cid;
        this.number = number;
        this.hear = hear;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.number);
        Dispatcher.HearType._write(ostr, this.hear);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.number = istr.readString();
        this.hear = Dispatcher.HearType._read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$5.defineStruct(Dispatcher.HearT, true, true);

Dispatcher.HearRT = class
{
    constructor(code = 0)
    {
        this.code = code;
    }

    _write(ostr)
    {
        ostr.writeInt(this.code);
    }

    _read(istr)
    {
        this.code = istr.readInt();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$5.defineStruct(Dispatcher.HearRT, true, false);

Dispatcher.ForceEndConfeT = class
{
    constructor(cid = "", employeeid = "")
    {
        this.cid = cid;
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.ForceEndConfeT, true, true);

Dispatcher.HoldT = class
{
    constructor(cid = "", htype = Dispatcher.HoldType.HoldTypeNone)
    {
        this.cid = cid;
        this.htype = htype;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        Dispatcher.HoldType._write(ostr, this.htype);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.htype = Dispatcher.HoldType._read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.HoldT, true, true);

Dispatcher.HoldRT = class
{
    constructor(cid = "")
    {
        this.cid = cid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$5.defineStruct(Dispatcher.HoldRT, true, true);

Dispatcher.HangupT = class
{
    constructor(cid = "")
    {
        this.cid = cid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$5.defineStruct(Dispatcher.HangupT, true, true);

Dispatcher.HangupT1 = class
{
    constructor(cid = "", member = "")
    {
        this.cid = cid;
        this.member = member;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.member);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.member = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.HangupT1, true, true);

Dispatcher.HangupRT = class
{
    constructor(cid = "")
    {
        this.cid = cid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$5.defineStruct(Dispatcher.HangupRT, true, true);

Dispatcher.CalleeT = class
{
    constructor(employeeid = "")
    {
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$5.defineStruct(Dispatcher.CalleeT, true, true);

Slice$5.defineSequence(Dispatcher, "CalleeSeqHelper", "Dispatcher.CalleeT", false);

Dispatcher.CreateConfT = class
{
    constructor(member = null, sessname = "", sessnum = "", caller = "", ctype = Dispatcher.CallType.CallTypeNone, isVideo = Dispatcher.MediaType.MediaTypeNone)
    {
        this.member = member;
        this.sessname = sessname;
        this.sessnum = sessnum;
        this.caller = caller;
        this.ctype = ctype;
        this.isVideo = isVideo;
    }

    _write(ostr)
    {
        Dispatcher.CalleeSeqHelper.write(ostr, this.member);
        ostr.writeString(this.sessname);
        ostr.writeString(this.sessnum);
        ostr.writeString(this.caller);
        Dispatcher.CallType._write(ostr, this.ctype);
        Dispatcher.MediaType._write(ostr, this.isVideo);
    }

    _read(istr)
    {
        this.member = Dispatcher.CalleeSeqHelper.read(istr);
        this.sessname = istr.readString();
        this.sessnum = istr.readString();
        this.caller = istr.readString();
        this.ctype = Dispatcher.CallType._read(istr);
        this.isVideo = Dispatcher.MediaType._read(istr);
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$5.defineStruct(Dispatcher.CreateConfT, true, true);

Dispatcher.CreateMcuConfT = class
{
    constructor(member = null, sessname = "", sessnum = "", caller = "", ctype = Dispatcher.CallType.CallTypeNone, isVideo = Dispatcher.MediaType.MediaTypeNone, isMcuCall = false)
    {
        this.member = member;
        this.sessname = sessname;
        this.sessnum = sessnum;
        this.caller = caller;
        this.ctype = ctype;
        this.isVideo = isVideo;
        this.isMcuCall = isMcuCall;
    }

    _write(ostr)
    {
        Dispatcher.CalleeSeqHelper.write(ostr, this.member);
        ostr.writeString(this.sessname);
        ostr.writeString(this.sessnum);
        ostr.writeString(this.caller);
        Dispatcher.CallType._write(ostr, this.ctype);
        Dispatcher.MediaType._write(ostr, this.isVideo);
        ostr.writeBool(this.isMcuCall);
    }

    _read(istr)
    {
        this.member = Dispatcher.CalleeSeqHelper.read(istr);
        this.sessname = istr.readString();
        this.sessnum = istr.readString();
        this.caller = istr.readString();
        this.ctype = Dispatcher.CallType._read(istr);
        this.isVideo = Dispatcher.MediaType._read(istr);
        this.isMcuCall = istr.readBool();
    }

    static get minWireSize()
    {
        return  7;
    }
};

Slice$5.defineStruct(Dispatcher.CreateMcuConfT, true, true);

Dispatcher.CreateMcuConf1T = class
{
    constructor(member = null, sessname = "", sessnum = "", caller = "", ctype = Dispatcher.CallType.CallTypeNone, isVideo = Dispatcher.MediaType.MediaTypeNone, isMcuCall = false, defaultsdp = "")
    {
        this.member = member;
        this.sessname = sessname;
        this.sessnum = sessnum;
        this.caller = caller;
        this.ctype = ctype;
        this.isVideo = isVideo;
        this.isMcuCall = isMcuCall;
        this.defaultsdp = defaultsdp;
    }

    _write(ostr)
    {
        Dispatcher.CalleeSeqHelper.write(ostr, this.member);
        ostr.writeString(this.sessname);
        ostr.writeString(this.sessnum);
        ostr.writeString(this.caller);
        Dispatcher.CallType._write(ostr, this.ctype);
        Dispatcher.MediaType._write(ostr, this.isVideo);
        ostr.writeBool(this.isMcuCall);
        ostr.writeString(this.defaultsdp);
    }

    _read(istr)
    {
        this.member = Dispatcher.CalleeSeqHelper.read(istr);
        this.sessname = istr.readString();
        this.sessnum = istr.readString();
        this.caller = istr.readString();
        this.ctype = Dispatcher.CallType._read(istr);
        this.isVideo = Dispatcher.MediaType._read(istr);
        this.isMcuCall = istr.readBool();
        this.defaultsdp = istr.readString();
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$5.defineStruct(Dispatcher.CreateMcuConf1T, true, true);

Dispatcher.CreateConf1T = class
{
    constructor(member = null, sessname = "", sessnum = "", caller = "", ctype = Dispatcher.CallType.CallTypeNone, isVideo = Dispatcher.MediaType.MediaTypeNone, isMcuCall = false, defaultsdp = "")
    {
        this.member = member;
        this.sessname = sessname;
        this.sessnum = sessnum;
        this.caller = caller;
        this.ctype = ctype;
        this.isVideo = isVideo;
        this.isMcuCall = isMcuCall;
        this.defaultsdp = defaultsdp;
    }

    _write(ostr)
    {
        Dispatcher.CalleeSeqHelper.write(ostr, this.member);
        ostr.writeString(this.sessname);
        ostr.writeString(this.sessnum);
        ostr.writeString(this.caller);
        Dispatcher.CallType._write(ostr, this.ctype);
        Dispatcher.MediaType._write(ostr, this.isVideo);
        ostr.writeBool(this.isMcuCall);
        ostr.writeString(this.defaultsdp);
    }

    _read(istr)
    {
        this.member = Dispatcher.CalleeSeqHelper.read(istr);
        this.sessname = istr.readString();
        this.sessnum = istr.readString();
        this.caller = istr.readString();
        this.ctype = Dispatcher.CallType._read(istr);
        this.isVideo = Dispatcher.MediaType._read(istr);
        this.isMcuCall = istr.readBool();
        this.defaultsdp = istr.readString();
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$5.defineStruct(Dispatcher.CreateConf1T, true, true);

Dispatcher.CreateConfRT = class
{
    constructor(sessnum = "", cid = "", empid = "")
    {
        this.sessnum = sessnum;
        this.cid = cid;
        this.empid = empid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sessnum);
        ostr.writeString(this.cid);
        ostr.writeString(this.empid);
    }

    _read(istr)
    {
        this.sessnum = istr.readString();
        this.cid = istr.readString();
        this.empid = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$5.defineStruct(Dispatcher.CreateConfRT, true, true);

Dispatcher.AddMemberT = class
{
    constructor(cid = "", number = "", astype = Dispatcher.AnswerType.AnswerTypeNone)
    {
        this.cid = cid;
        this.number = number;
        this.astype = astype;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.number);
        Dispatcher.AnswerType._write(ostr, this.astype);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.number = istr.readString();
        this.astype = Dispatcher.AnswerType._read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$5.defineStruct(Dispatcher.AddMemberT, true, true);

Dispatcher.AddMemberRT = class
{
    constructor(cid = "", empid = "")
    {
        this.cid = cid;
        this.empid = empid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.empid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.empid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.AddMemberRT, true, true);

Dispatcher.DelMemberT = class
{
    constructor(cid = "", number = "")
    {
        this.cid = cid;
        this.number = number;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.number);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.number = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.DelMemberT, true, true);

Dispatcher.DelMemberRT = class
{
    constructor(cid = "", empid = "")
    {
        this.cid = cid;
        this.empid = empid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.empid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.empid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.DelMemberRT, true, true);

Dispatcher.AllCallMemberT = class
{
    constructor(sid = "", cid = "")
    {
        this.sid = sid;
        this.cid = cid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.cid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.cid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.AllCallMemberT, true, true);

Dispatcher.AllCallMemberRT = class
{
    constructor(cid = "", employeeid = "", name = "", type = 8, state = Dispatcher.CallState.CallStateNone, stateDecorate = "")
    {
        this.cid = cid;
        this.employeeid = employeeid;
        this.name = name;
        this.type = type;
        this.state = state;
        this.stateDecorate = stateDecorate;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.name);
        ostr.writeInt(this.type);
        Dispatcher.CallState._write(ostr, this.state);
        ostr.writeString(this.stateDecorate);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.employeeid = istr.readString();
        this.name = istr.readString();
        this.type = istr.readInt();
        this.state = Dispatcher.CallState._read(istr);
        this.stateDecorate = istr.readString();
    }

    static get minWireSize()
    {
        return  9;
    }
};

Slice$5.defineStruct(Dispatcher.AllCallMemberRT, true, true);

Slice$5.defineSequence(Dispatcher, "AllCallMemberRSeqHelper", "Dispatcher.AllCallMemberRT", false);

Dispatcher.PullQueueCallT = class
{
    constructor(cid = "", caller = "")
    {
        this.cid = cid;
        this.caller = caller;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.caller);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.caller = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.PullQueueCallT, true, true);

Dispatcher.PushCallToQueueT = class
{
    constructor(cid = "", RoadParameters = "")
    {
        this.cid = cid;
        this.RoadParameters = RoadParameters;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.RoadParameters);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.RoadParameters = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.PushCallToQueueT, true, true);

Dispatcher.PushCallToQueueT1 = class
{
    constructor(cid = "", member = "", RoadParameters = "")
    {
        this.cid = cid;
        this.member = member;
        this.RoadParameters = RoadParameters;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.member);
        ostr.writeString(this.RoadParameters);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.member = istr.readString();
        this.RoadParameters = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$5.defineStruct(Dispatcher.PushCallToQueueT1, true, true);

Dispatcher.GetAllSessionT = class
{
    constructor(employeeid = "")
    {
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$5.defineStruct(Dispatcher.GetAllSessionT, true, true);

Dispatcher.GetAllSession1T = class
{
    constructor(employeeid = "", cType = Dispatcher.CallType.CallTypeNone)
    {
        this.employeeid = employeeid;
        this.cType = cType;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        Dispatcher.CallType._write(ostr, this.cType);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.cType = Dispatcher.CallType._read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.GetAllSession1T, true, true);

Dispatcher.SendDTMFbyCidT = class
{
    constructor(cid = "", member = "", strdtmf = "")
    {
        this.cid = cid;
        this.member = member;
        this.strdtmf = strdtmf;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.member);
        ostr.writeString(this.strdtmf);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.member = istr.readString();
        this.strdtmf = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$5.defineStruct(Dispatcher.SendDTMFbyCidT, true, true);

Dispatcher.OrderDetailT = class
{
    constructor(number = "", index = 0, ringtime = 30)
    {
        this.number = number;
        this.index = index;
        this.ringtime = ringtime;
    }

    _write(ostr)
    {
        ostr.writeString(this.number);
        ostr.writeInt(this.index);
        ostr.writeInt(this.ringtime);
    }

    _read(istr)
    {
        this.number = istr.readString();
        this.index = istr.readInt();
        this.ringtime = istr.readInt();
    }

    static get minWireSize()
    {
        return  9;
    }
};

Slice$5.defineStruct(Dispatcher.OrderDetailT, true, true);

Slice$5.defineSequence(Dispatcher, "OrderDetailSeqHelper", "Dispatcher.OrderDetailT", false);

Dispatcher.OrderCalledT = class
{
    constructor(called = "", details = null)
    {
        this.called = called;
        this.details = details;
    }

    _write(ostr)
    {
        ostr.writeString(this.called);
        Dispatcher.OrderDetailSeqHelper.write(ostr, this.details);
    }

    _read(istr)
    {
        this.called = istr.readString();
        this.details = Dispatcher.OrderDetailSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.OrderCalledT, true, true);

Slice$5.defineSequence(Dispatcher, "OrderCalledSeqHelper", "Dispatcher.OrderCalledT", false);

Dispatcher.CalledOrderT = class
{
    constructor(calleds = null, sessname = "", sessnum = "", caller = "", ctype = Dispatcher.CallType.CallTypeNone, isVideo = Dispatcher.MediaType.MediaTypeNone)
    {
        this.calleds = calleds;
        this.sessname = sessname;
        this.sessnum = sessnum;
        this.caller = caller;
        this.ctype = ctype;
        this.isVideo = isVideo;
    }

    _write(ostr)
    {
        Dispatcher.OrderCalledSeqHelper.write(ostr, this.calleds);
        ostr.writeString(this.sessname);
        ostr.writeString(this.sessnum);
        ostr.writeString(this.caller);
        Dispatcher.CallType._write(ostr, this.ctype);
        Dispatcher.MediaType._write(ostr, this.isVideo);
    }

    _read(istr)
    {
        this.calleds = Dispatcher.OrderCalledSeqHelper.read(istr);
        this.sessname = istr.readString();
        this.sessnum = istr.readString();
        this.caller = istr.readString();
        this.ctype = Dispatcher.CallType._read(istr);
        this.isVideo = Dispatcher.MediaType._read(istr);
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$5.defineStruct(Dispatcher.CalledOrderT, true, true);

Dispatcher.CalledOrderRT = class
{
    constructor(sessnum = "", cid = "", empid = "")
    {
        this.sessnum = sessnum;
        this.cid = cid;
        this.empid = empid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sessnum);
        ostr.writeString(this.cid);
        ostr.writeString(this.empid);
    }

    _read(istr)
    {
        this.sessnum = istr.readString();
        this.cid = istr.readString();
        this.empid = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$5.defineStruct(Dispatcher.CalledOrderRT, true, true);

Dispatcher.AddMemberByCallOrderT = class
{
    constructor(cid = "", number = "", astype = Dispatcher.AnswerType.AnswerTypeNone, details = null)
    {
        this.cid = cid;
        this.number = number;
        this.astype = astype;
        this.details = details;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.number);
        Dispatcher.AnswerType._write(ostr, this.astype);
        Dispatcher.OrderDetailSeqHelper.write(ostr, this.details);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.number = istr.readString();
        this.astype = Dispatcher.AnswerType._read(istr);
        this.details = Dispatcher.OrderDetailSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$5.defineStruct(Dispatcher.AddMemberByCallOrderT, true, true);

Dispatcher.ReCallDetailT = class
{
    constructor(number = "", callnum = 0)
    {
        this.number = number;
        this.callnum = callnum;
    }

    _write(ostr)
    {
        ostr.writeString(this.number);
        ostr.writeInt(this.callnum);
    }

    _read(istr)
    {
        this.number = istr.readString();
        this.callnum = istr.readInt();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$5.defineStruct(Dispatcher.ReCallDetailT, true, true);

Slice$5.defineSequence(Dispatcher, "ReCallDetailSeqHelper", "Dispatcher.ReCallDetailT", false);

Dispatcher.SetReCallNumberT = class
{
    constructor(cid = "", details = null)
    {
        this.cid = cid;
        this.details = details;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        Dispatcher.ReCallDetailSeqHelper.write(ostr, this.details);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.details = Dispatcher.ReCallDetailSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$5.defineStruct(Dispatcher.SetReCallNumberT, true, true);

Dispatcher.AllCallMemberRT1 = class
{
    constructor(cid = "", employeeid = "", name = "", type = 8, state = Dispatcher.CallState.CallStateNone, stateDecorate = "", level = 10, IsReCall = false, ReCallNum = -1)
    {
        this.cid = cid;
        this.employeeid = employeeid;
        this.name = name;
        this.type = type;
        this.state = state;
        this.stateDecorate = stateDecorate;
        this.level = level;
        this.IsReCall = IsReCall;
        this.ReCallNum = ReCallNum;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.name);
        ostr.writeInt(this.type);
        Dispatcher.CallState._write(ostr, this.state);
        ostr.writeString(this.stateDecorate);
        ostr.writeInt(this.level);
        ostr.writeBool(this.IsReCall);
        ostr.writeInt(this.ReCallNum);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.employeeid = istr.readString();
        this.name = istr.readString();
        this.type = istr.readInt();
        this.state = Dispatcher.CallState._read(istr);
        this.stateDecorate = istr.readString();
        this.level = istr.readInt();
        this.IsReCall = istr.readBool();
        this.ReCallNum = istr.readInt();
    }

    static get minWireSize()
    {
        return  18;
    }
};

Slice$5.defineStruct(Dispatcher.AllCallMemberRT1, true, true);

Slice$5.defineSequence(Dispatcher, "AllCallMemberRSeq1Helper", "Dispatcher.AllCallMemberRT1", false);

Dispatcher.SessionJoinT = class
{
    constructor(cid = "")
    {
        this.cid = cid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$5.defineStruct(Dispatcher.SessionJoinT, true, true);

Slice$5.defineSequence(Dispatcher, "SessionJoinSeqHelper", "Dispatcher.SessionJoinT", false);

Dispatcher.CreateSOSCallT = class
{
    constructor(member = null, sessname = "", sessnum = "", caller = "", isVideo = Dispatcher.MediaType.MediaTypeNone)
    {
        this.member = member;
        this.sessname = sessname;
        this.sessnum = sessnum;
        this.caller = caller;
        this.isVideo = isVideo;
    }

    _write(ostr)
    {
        Dispatcher.CalleeSeqHelper.write(ostr, this.member);
        ostr.writeString(this.sessname);
        ostr.writeString(this.sessnum);
        ostr.writeString(this.caller);
        Dispatcher.MediaType._write(ostr, this.isVideo);
    }

    _read(istr)
    {
        this.member = Dispatcher.CalleeSeqHelper.read(istr);
        this.sessname = istr.readString();
        this.sessnum = istr.readString();
        this.caller = istr.readString();
        this.isVideo = Dispatcher.MediaType._read(istr);
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$5.defineStruct(Dispatcher.CreateSOSCallT, true, true);

Dispatcher.UploadVideoCallT = class
{
    constructor(member = null, sessname = "", sessnum = "", caller = "", isVideo = Dispatcher.MediaType.MediaTypeNone)
    {
        this.member = member;
        this.sessname = sessname;
        this.sessnum = sessnum;
        this.caller = caller;
        this.isVideo = isVideo;
    }

    _write(ostr)
    {
        Dispatcher.CalleeSeqHelper.write(ostr, this.member);
        ostr.writeString(this.sessname);
        ostr.writeString(this.sessnum);
        ostr.writeString(this.caller);
        Dispatcher.MediaType._write(ostr, this.isVideo);
    }

    _read(istr)
    {
        this.member = Dispatcher.CalleeSeqHelper.read(istr);
        this.sessname = istr.readString();
        this.sessnum = istr.readString();
        this.caller = istr.readString();
        this.isVideo = Dispatcher.MediaType._read(istr);
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$5.defineStruct(Dispatcher.UploadVideoCallT, true, true);

Dispatcher.TransferVideoT = class
{
    constructor(sessname = "", sessnum = "", srccid = "", srcnumber = "", calleds = null)
    {
        this.sessname = sessname;
        this.sessnum = sessnum;
        this.srccid = srccid;
        this.srcnumber = srcnumber;
        this.calleds = calleds;
    }

    _write(ostr)
    {
        ostr.writeString(this.sessname);
        ostr.writeString(this.sessnum);
        ostr.writeString(this.srccid);
        ostr.writeString(this.srcnumber);
        Dispatcher.OrderCalledSeqHelper.write(ostr, this.calleds);
    }

    _read(istr)
    {
        this.sessname = istr.readString();
        this.sessnum = istr.readString();
        this.srccid = istr.readString();
        this.srcnumber = istr.readString();
        this.calleds = Dispatcher.OrderCalledSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$5.defineStruct(Dispatcher.TransferVideoT, true, true);

Dispatcher.TransferVideoToMCUT = class
{
    constructor(sessname = "", sessnum = "", srccid = "", srcnumber = "", defaultcode = "", calleds = null)
    {
        this.sessname = sessname;
        this.sessnum = sessnum;
        this.srccid = srccid;
        this.srcnumber = srcnumber;
        this.defaultcode = defaultcode;
        this.calleds = calleds;
    }

    _write(ostr)
    {
        ostr.writeString(this.sessname);
        ostr.writeString(this.sessnum);
        ostr.writeString(this.srccid);
        ostr.writeString(this.srcnumber);
        ostr.writeString(this.defaultcode);
        Dispatcher.OrderCalledSeqHelper.write(ostr, this.calleds);
    }

    _read(istr)
    {
        this.sessname = istr.readString();
        this.sessnum = istr.readString();
        this.srccid = istr.readString();
        this.srcnumber = istr.readString();
        this.defaultcode = istr.readString();
        this.calleds = Dispatcher.OrderCalledSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$5.defineStruct(Dispatcher.TransferVideoToMCUT, true, true);

Dispatcher.TransferVideoRT = class
{
    constructor(newcid = "")
    {
        this.newcid = newcid;
    }

    _write(ostr)
    {
        ostr.writeString(this.newcid);
    }

    _read(istr)
    {
        this.newcid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$5.defineStruct(Dispatcher.TransferVideoRT, true, true);

Dispatcher.AddMemberT1 = class
{
    constructor(cid = "", number = "", astype = Dispatcher.AnswerType.AnswerTypeNone, speakertypea = Dispatcher.SpeakType.SpeakTypeNone, hear = Dispatcher.HearType.HearTypeNone, RoadParameters = "", details = null)
    {
        this.cid = cid;
        this.number = number;
        this.astype = astype;
        this.speakertypea = speakertypea;
        this.hear = hear;
        this.RoadParameters = RoadParameters;
        this.details = details;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.number);
        Dispatcher.AnswerType._write(ostr, this.astype);
        Dispatcher.SpeakType._write(ostr, this.speakertypea);
        Dispatcher.HearType._write(ostr, this.hear);
        ostr.writeString(this.RoadParameters);
        Dispatcher.OrderDetailSeqHelper.write(ostr, this.details);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.number = istr.readString();
        this.astype = Dispatcher.AnswerType._read(istr);
        this.speakertypea = Dispatcher.SpeakType._read(istr);
        this.hear = Dispatcher.HearType._read(istr);
        this.RoadParameters = istr.readString();
        this.details = Dispatcher.OrderDetailSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  7;
    }
};

Slice$5.defineStruct(Dispatcher.AddMemberT1, true, true);

const iceC_Dispatcher_CallingOP_ids = [
    "::Dispatcher::CallingOP",
    "::Ice::Object"
];

Dispatcher.CallingOP = class extends Ice.Object
{
};

Dispatcher.CallingOPPrx = class extends Ice.ObjectPrx
{
};

Slice$5.defineOperations(Dispatcher.CallingOP, Dispatcher.CallingOPPrx, iceC_Dispatcher_CallingOP_ids, 0,
{
    "opNegoTransfer": [, , , , [Dispatcher.NegoTransferRT], [[Dispatcher.Identity], [Dispatcher.NegoTransferT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPlayAudio": [, , , , [Dispatcher.PlayAudioRT], [[Dispatcher.Identity], [Dispatcher.PlayAudioT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSubstitute": [, , , , [Dispatcher.CallCommonRT], [[Dispatcher.Identity], [Dispatcher.CallCommonT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSpeaker": [, , , , [Dispatcher.SpeakerRT], [[Dispatcher.Identity], [Dispatcher.SpeakerT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opHear": [, , , , [Dispatcher.HearRT], [[Dispatcher.Identity], [Dispatcher.HearT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opForceEndConfe": [, , , , [Dispatcher.CommonRequestT], [[Dispatcher.Identity], [Dispatcher.ForceEndConfeT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opRemove": [, , , , [Dispatcher.CallCommonRT], [[Dispatcher.Identity], [Dispatcher.CallCommonT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opRemoveOther": [, , , , [Dispatcher.CallCommonRT], [[Dispatcher.Identity], [Dispatcher.CallCommonT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opInterpose": [, , , , [Dispatcher.CallCommonRT], [[Dispatcher.Identity], [Dispatcher.CallCommonT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opMonitor": [, , , , [Dispatcher.CallCommonRT], [[Dispatcher.Identity], [Dispatcher.CallCommonT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSwitch": [, , , , [Dispatcher.CallCommonRT], [[Dispatcher.Identity], [Dispatcher.CallCommonT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opHold": [, , , , [Dispatcher.HoldRT], [[Dispatcher.Identity], [Dispatcher.HoldT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opHangup": [, , , , [Dispatcher.HangupRT], [[Dispatcher.Identity], [Dispatcher.HangupT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opHangup1": [, , , , [Dispatcher.HangupRT], [[Dispatcher.Identity], [Dispatcher.HangupT1]], ,
    [
        Dispatcher.Error
    ], , ],
    "opCreateConf": [, , , , [Dispatcher.CreateConfRT], [[Dispatcher.Identity], [Dispatcher.CreateConfT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opCreateMcuConf": [, , , , [Dispatcher.CreateConfRT], [[Dispatcher.Identity], [Dispatcher.CreateMcuConfT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opCreateMcuConf1": [, , , , [Dispatcher.CreateConfRT], [[Dispatcher.Identity], [Dispatcher.CreateMcuConf1T]], ,
    [
        Dispatcher.Error
    ], , ],
    "opCreateConf1": [, , , , [Dispatcher.CreateConfRT], [[Dispatcher.Identity], [Dispatcher.CreateConf1T]], ,
    [
        Dispatcher.Error
    ], , ],
    "opAddMember": [, , , , [Dispatcher.AddMemberRT], [[Dispatcher.Identity], [Dispatcher.AddMemberT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opDelMember": [, , , , [Dispatcher.DelMemberRT], [[Dispatcher.Identity], [Dispatcher.DelMemberT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opAllCallMember": [, , , , ["Dispatcher.AllCallMemberRSeqHelper"], [[Dispatcher.Identity], [Dispatcher.AllCallMemberT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPullQueueCall": [, , , , [Dispatcher.CommonRequestT], [[Dispatcher.Identity], [Dispatcher.PullQueueCallT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPushCallToQueue": [, , , , [Dispatcher.CommonRequestT], [[Dispatcher.Identity], [Dispatcher.PushCallToQueueT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPushCallToQueue1": [, , , , [Dispatcher.CommonRequestT], [[Dispatcher.Identity], [Dispatcher.PushCallToQueueT1]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetAllSession": [, , , , ["Dispatcher.SessionChangeTSeqHelper"], [[Dispatcher.Identity], [Dispatcher.GetAllSessionT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetAllSession1": [, , , , ["Dispatcher.SessionChangeTSeqHelper"], [[Dispatcher.Identity], [Dispatcher.GetAllSession1T]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSendDTMFbyCid": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.SendDTMFbyCidT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opCreateByCallOrder": [, , , , [Dispatcher.CalledOrderRT], [[Dispatcher.Identity], [Dispatcher.CalledOrderT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opAddMemberByCallOrder": [, , , , , [[Dispatcher.Identity], [Dispatcher.AddMemberByCallOrderT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSetReCallNumber": [, , , , , [[Dispatcher.Identity], [Dispatcher.SetReCallNumberT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opAllCallMember1": [, , , , ["Dispatcher.AllCallMemberRSeq1Helper"], [[Dispatcher.Identity], [Dispatcher.AllCallMemberT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSessionJoin": [, , , , [Dispatcher.CreateConfRT], [[Dispatcher.Identity], ["Dispatcher.SessionJoinSeqHelper"]], ,
    [
        Dispatcher.Error
    ], , ],
    "opCreateSOSCall": [, , , , [Dispatcher.CreateConfRT], [[Dispatcher.Identity], [Dispatcher.CreateSOSCallT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opTransferVideo": [, , , , [Dispatcher.TransferVideoRT], [[Dispatcher.Identity], [Dispatcher.TransferVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opTransferVideoToMcu": [, , , , [Dispatcher.TransferVideoRT], [[Dispatcher.Identity], [Dispatcher.TransferVideoToMCUT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opCreateUpLoadVideoCall": [, , , , [Dispatcher.CreateConfRT], [[Dispatcher.Identity], [Dispatcher.UploadVideoCallT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opTempSessionJoin": [, , , , ["Dispatcher.SessionJoinSeqHelper"], [[Dispatcher.Identity], ["Dispatcher.SessionJoinSeqHelper"]], ,
    [
        Dispatcher.Error
    ], , ],
    "opAddMember1": [, , , , [Dispatcher.AddMemberRT], [[Dispatcher.Identity], [Dispatcher.AddMemberT1]], ,
    [
        Dispatcher.Error
    ], , ],
    "opIntercomRecall": [, , , , , [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opAllCallMember2": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opCreatePlayFileMetting": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ]
});

const iceC_Dispatcher_CallingSB_ids = [
    "::Dispatcher::CallingSB",
    "::Ice::Object"
];

Dispatcher.CallingSB = class extends Ice.Object
{
};

Dispatcher.CallingSBPrx = class extends Ice.ObjectPrx
{
};

Slice$5.defineOperations(Dispatcher.CallingSB, Dispatcher.CallingSBPrx, iceC_Dispatcher_CallingSB_ids, 0);

//
const _ModuleRegistry$6 = Ice._ModuleRegistry;
const Slice$6 = Ice.Slice;

Dispatcher.SendVideoT = class
{
    constructor(sid = "", cid = "", employeeid = "", ip = "", port = "", codec = "", stream = "", framerate = "", agentid = "")
    {
        this.sid = sid;
        this.cid = cid;
        this.employeeid = employeeid;
        this.ip = ip;
        this.port = port;
        this.codec = codec;
        this.stream = stream;
        this.framerate = framerate;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.codec);
        ostr.writeString(this.stream);
        ostr.writeString(this.framerate);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.cid = istr.readString();
        this.employeeid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.codec = istr.readString();
        this.stream = istr.readString();
        this.framerate = istr.readString();
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  9;
    }
};

Slice$6.defineStruct(Dispatcher.SendVideoT, true, true);

Dispatcher.SendVideoRT = class
{
    constructor(sid = "", ip = "", port = "", agentid = "")
    {
        this.sid = sid;
        this.ip = ip;
        this.port = port;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$6.defineStruct(Dispatcher.SendVideoRT, true, true);

Dispatcher.GetVideoT = class
{
    constructor(sid = "", cid = "", employeeid = "", ip = "", port = "", employeeiddst = "", codec = "", stream = "", framerate = "", agentid = "")
    {
        this.sid = sid;
        this.cid = cid;
        this.employeeid = employeeid;
        this.ip = ip;
        this.port = port;
        this.employeeiddst = employeeiddst;
        this.codec = codec;
        this.stream = stream;
        this.framerate = framerate;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.employeeiddst);
        ostr.writeString(this.codec);
        ostr.writeString(this.stream);
        ostr.writeString(this.framerate);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.cid = istr.readString();
        this.employeeid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.employeeiddst = istr.readString();
        this.codec = istr.readString();
        this.stream = istr.readString();
        this.framerate = istr.readString();
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  10;
    }
};

Slice$6.defineStruct(Dispatcher.GetVideoT, true, true);

Dispatcher.GetVideoRT = class
{
    constructor(sid = "", cid = "")
    {
        this.sid = sid;
        this.cid = cid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.cid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.cid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$6.defineStruct(Dispatcher.GetVideoRT, true, true);

Dispatcher.ChangeVideoT = class
{
    constructor(sid = "", cid = "", employeeid = "", ip = "", port = "", employeeiddst = "", codec = "", stream = "", framerate = "", agentid = "")
    {
        this.sid = sid;
        this.cid = cid;
        this.employeeid = employeeid;
        this.ip = ip;
        this.port = port;
        this.employeeiddst = employeeiddst;
        this.codec = codec;
        this.stream = stream;
        this.framerate = framerate;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.employeeiddst);
        ostr.writeString(this.codec);
        ostr.writeString(this.stream);
        ostr.writeString(this.framerate);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.cid = istr.readString();
        this.employeeid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.employeeiddst = istr.readString();
        this.codec = istr.readString();
        this.stream = istr.readString();
        this.framerate = istr.readString();
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  10;
    }
};

Slice$6.defineStruct(Dispatcher.ChangeVideoT, true, true);

Dispatcher.ChangeVideoRT = class
{
    constructor(sid = "", streamid = "", ip = "", port = "", codec = "", stream = "", framerate = "", agentid = "")
    {
        this.sid = sid;
        this.streamid = streamid;
        this.ip = ip;
        this.port = port;
        this.codec = codec;
        this.stream = stream;
        this.framerate = framerate;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.streamid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.codec);
        ostr.writeString(this.stream);
        ostr.writeString(this.framerate);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.streamid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.codec = istr.readString();
        this.stream = istr.readString();
        this.framerate = istr.readString();
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$6.defineStruct(Dispatcher.ChangeVideoRT, true, true);

Dispatcher.ReleaseVideoT = class
{
    constructor(sid = "", cid = "", employeeid = "", ip = "", port = "", streamid = "", employeeiddst = "", agentid = "")
    {
        this.sid = sid;
        this.cid = cid;
        this.employeeid = employeeid;
        this.ip = ip;
        this.port = port;
        this.streamid = streamid;
        this.employeeiddst = employeeiddst;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.streamid);
        ostr.writeString(this.employeeiddst);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.cid = istr.readString();
        this.employeeid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.streamid = istr.readString();
        this.employeeiddst = istr.readString();
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$6.defineStruct(Dispatcher.ReleaseVideoT, true, true);

Dispatcher.ReleaseVideoRT = class
{
    constructor(sid = "", agentid = "")
    {
        this.sid = sid;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$6.defineStruct(Dispatcher.ReleaseVideoRT, true, true);

Dispatcher.PushVideoT = class
{
    constructor(sid = "", cid = "", employeeid = "", streamid = "", revid = "", IsPush = Dispatcher.PushVideoType.PushVideoTypeNone, agentid = "")
    {
        this.sid = sid;
        this.cid = cid;
        this.employeeid = employeeid;
        this.streamid = streamid;
        this.revid = revid;
        this.IsPush = IsPush;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.streamid);
        ostr.writeString(this.revid);
        Dispatcher.PushVideoType._write(ostr, this.IsPush);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.cid = istr.readString();
        this.employeeid = istr.readString();
        this.streamid = istr.readString();
        this.revid = istr.readString();
        this.IsPush = Dispatcher.PushVideoType._read(istr);
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  7;
    }
};

Slice$6.defineStruct(Dispatcher.PushVideoT, true, true);

Dispatcher.PushVideoRT = class
{
    constructor(sid = "", agentid = "")
    {
        this.sid = sid;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$6.defineStruct(Dispatcher.PushVideoRT, true, true);

Dispatcher.SendVideoEvT = class
{
    constructor(sid = "", ip = "", port = "", agentid = "")
    {
        this.sid = sid;
        this.ip = ip;
        this.port = port;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$6.defineStruct(Dispatcher.SendVideoEvT, true, true);

Dispatcher.GetVideoEvT = class
{
    constructor(sid = "", streamid = "", ip = "", port = "", codec = "", stream = "", framerate = "", employeeid = "", cid = "", agentid = "")
    {
        this.sid = sid;
        this.streamid = streamid;
        this.ip = ip;
        this.port = port;
        this.codec = codec;
        this.stream = stream;
        this.framerate = framerate;
        this.employeeid = employeeid;
        this.cid = cid;
        this.agentid = agentid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.streamid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.codec);
        ostr.writeString(this.stream);
        ostr.writeString(this.framerate);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.cid);
        ostr.writeString(this.agentid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.streamid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.codec = istr.readString();
        this.stream = istr.readString();
        this.framerate = istr.readString();
        this.employeeid = istr.readString();
        this.cid = istr.readString();
        this.agentid = istr.readString();
    }

    static get minWireSize()
    {
        return  10;
    }
};

Slice$6.defineStruct(Dispatcher.GetVideoEvT, true, true);

Dispatcher.GetKeyFrameT = class
{
    constructor(cid = "", employeeid = "", deviceid = "")
    {
        this.cid = cid;
        this.employeeid = employeeid;
        this.deviceid = deviceid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.deviceid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.employeeid = istr.readString();
        this.deviceid = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$6.defineStruct(Dispatcher.GetKeyFrameT, true, true);

//
const _ModuleRegistry$7 = Ice._ModuleRegistry;
const Slice$7 = Ice.Slice;

const iceC_Dispatcher_CallingVCB_ids = [
    "::Dispatcher::CallingVCB",
    "::Ice::Object"
];

Dispatcher.CallingVCB = class extends Ice.Object
{
};

Dispatcher.CallingVCBPrx = class extends Ice.ObjectPrx
{
};

Slice$7.defineOperations(Dispatcher.CallingVCB, Dispatcher.CallingVCBPrx, iceC_Dispatcher_CallingVCB_ids, 0,
{
    "onSendVideoEv": [, 2, 2, , , [[Dispatcher.SendVideoEvT]], , , , ],
    "onGetVideoEv": [, 2, 2, , , [[Dispatcher.GetVideoEvT]], , , , ]
});

//
const _ModuleRegistry$8 = Ice._ModuleRegistry;
const Slice$8 = Ice.Slice;

Dispatcher.GetMemberVideoRT = class
{
    constructor(sid = "", cid = "", fsip = "", fsport = "")
    {
        this.sid = sid;
        this.cid = cid;
        this.fsip = fsip;
        this.fsport = fsport;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.cid);
        ostr.writeString(this.fsip);
        ostr.writeString(this.fsport);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.cid = istr.readString();
        this.fsip = istr.readString();
        this.fsport = istr.readString();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$8.defineStruct(Dispatcher.GetMemberVideoRT, true, true);

Slice$8.defineSequence(Dispatcher, "ReceiveNumSeqHelper", "Ice.StringHelper", false);

Dispatcher.MCUPushMemberToOtherT = class
{
    constructor(cid = "", pushednum = "", ReceiveNumbers = null)
    {
        this.cid = cid;
        this.pushednum = pushednum;
        this.ReceiveNumbers = ReceiveNumbers;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.pushednum);
        Dispatcher.ReceiveNumSeqHelper.write(ostr, this.ReceiveNumbers);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.pushednum = istr.readString();
        this.ReceiveNumbers = Dispatcher.ReceiveNumSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$8.defineStruct(Dispatcher.MCUPushMemberToOtherT, true, true);

Dispatcher.StopMCUPushMemberToOtherT = class
{
    constructor(cid = "")
    {
        this.cid = cid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$8.defineStruct(Dispatcher.StopMCUPushMemberToOtherT, true, true);

Dispatcher.SendVideoRT1 = class
{
    constructor(sid = "", ip = "", port = "", agentid = "", codec = "")
    {
        this.sid = sid;
        this.ip = ip;
        this.port = port;
        this.agentid = agentid;
        this.codec = codec;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.agentid);
        ostr.writeString(this.codec);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.agentid = istr.readString();
        this.codec = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$8.defineStruct(Dispatcher.SendVideoRT1, true, true);

const iceC_Dispatcher_CallingVOP_ids = [
    "::Dispatcher::CallingVOP",
    "::Ice::Object"
];

Dispatcher.CallingVOP = class extends Ice.Object
{
};

Dispatcher.CallingVOPPrx = class extends Ice.ObjectPrx
{
};

Slice$8.defineOperations(Dispatcher.CallingVOP, Dispatcher.CallingVOPPrx, iceC_Dispatcher_CallingVOP_ids, 0,
{
    "opSendVideo": [, , , , [Dispatcher.SendVideoRT], [[Dispatcher.Identity], [Dispatcher.SendVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSendVideo1": [, , , , [Dispatcher.SendVideoRT1], [[Dispatcher.Identity], [Dispatcher.SendVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetVideo": [, , , , [Dispatcher.GetVideoRT], [[Dispatcher.Identity], [Dispatcher.GetVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opChangeVideo": [, , , , [Dispatcher.ChangeVideoRT], [[Dispatcher.Identity], [Dispatcher.ChangeVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opReleaseVideo": [, , , , [Dispatcher.ReleaseVideoRT], [[Dispatcher.Identity], [Dispatcher.ReleaseVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPushVideo": [, , , , [Dispatcher.PushVideoRT], [[Dispatcher.Identity], [Dispatcher.PushVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetKeyFrame": [, , , , , [[Dispatcher.Identity], [Dispatcher.GetKeyFrameT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetMemberVideo": [, , , , [Dispatcher.GetMemberVideoRT], [[Dispatcher.Identity], [Dispatcher.GetVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opMCUPushMemberToOther": [, , , , , [[Dispatcher.Identity], [Dispatcher.MCUPushMemberToOtherT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opStopMCUPushMemberToOther": [, , , , , [[Dispatcher.Identity], [Dispatcher.StopMCUPushMemberToOtherT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetCallVideo": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSendCallVideo": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$9 = Ice._ModuleRegistry;
const Slice$9 = Ice.Slice;

let DispatcherDB = _ModuleRegistry$9.module("DispatcherDB");

DispatcherDB.EMPLOYEEINFO = class
{
    constructor(mID = 0, mEmployeeID = "", mPassword = "", mEmployeeLevel = 0, mDepartID = 0, mRoleID = 0, mName = "", mAddTime = "", mModifyTime = "", mTheState = 0, mTheType = 0, mRemark = "", mLatitude = 0.0, mLongitude = 0.0, mIsRecord = 0, mMonName = "", mMonPasswd = "", mMonIP = "", mMonPort = 0, mMonFlag = "", mIsVideo = 0)
    {
        this.mID = mID;
        this.mEmployeeID = mEmployeeID;
        this.mPassword = mPassword;
        this.mEmployeeLevel = mEmployeeLevel;
        this.mDepartID = mDepartID;
        this.mRoleID = mRoleID;
        this.mName = mName;
        this.mAddTime = mAddTime;
        this.mModifyTime = mModifyTime;
        this.mTheState = mTheState;
        this.mTheType = mTheType;
        this.mRemark = mRemark;
        this.mLatitude = mLatitude;
        this.mLongitude = mLongitude;
        this.mIsRecord = mIsRecord;
        this.mMonName = mMonName;
        this.mMonPasswd = mMonPasswd;
        this.mMonIP = mMonIP;
        this.mMonPort = mMonPort;
        this.mMonFlag = mMonFlag;
        this.mIsVideo = mIsVideo;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mID);
        ostr.writeString(this.mEmployeeID);
        ostr.writeString(this.mPassword);
        ostr.writeInt(this.mEmployeeLevel);
        ostr.writeInt(this.mDepartID);
        ostr.writeInt(this.mRoleID);
        ostr.writeString(this.mName);
        ostr.writeString(this.mAddTime);
        ostr.writeString(this.mModifyTime);
        ostr.writeInt(this.mTheState);
        ostr.writeInt(this.mTheType);
        ostr.writeString(this.mRemark);
        ostr.writeFloat(this.mLatitude);
        ostr.writeFloat(this.mLongitude);
        ostr.writeInt(this.mIsRecord);
        ostr.writeString(this.mMonName);
        ostr.writeString(this.mMonPasswd);
        ostr.writeString(this.mMonIP);
        ostr.writeInt(this.mMonPort);
        ostr.writeString(this.mMonFlag);
        ostr.writeInt(this.mIsVideo);
    }

    _read(istr)
    {
        this.mID = istr.readInt();
        this.mEmployeeID = istr.readString();
        this.mPassword = istr.readString();
        this.mEmployeeLevel = istr.readInt();
        this.mDepartID = istr.readInt();
        this.mRoleID = istr.readInt();
        this.mName = istr.readString();
        this.mAddTime = istr.readString();
        this.mModifyTime = istr.readString();
        this.mTheState = istr.readInt();
        this.mTheType = istr.readInt();
        this.mRemark = istr.readString();
        this.mLatitude = istr.readFloat();
        this.mLongitude = istr.readFloat();
        this.mIsRecord = istr.readInt();
        this.mMonName = istr.readString();
        this.mMonPasswd = istr.readString();
        this.mMonIP = istr.readString();
        this.mMonPort = istr.readInt();
        this.mMonFlag = istr.readString();
        this.mIsVideo = istr.readInt();
    }

    static get minWireSize()
    {
        return  54;
    }
};

Slice$9.defineStruct(DispatcherDB.EMPLOYEEINFO, false, true);

Slice$9.defineSequence(DispatcherDB, "EMPLOYEEINFOSeqHelper", "DispatcherDB.EMPLOYEEINFO", false);

DispatcherDB.GROUPEMPLOYEE = class
{
    constructor(mID = 0, mGroupID = 0, mEmployeeID = "", mAddTime = "")
    {
        this.mID = mID;
        this.mGroupID = mGroupID;
        this.mEmployeeID = mEmployeeID;
        this.mAddTime = mAddTime;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mID);
        ostr.writeInt(this.mGroupID);
        ostr.writeString(this.mEmployeeID);
        ostr.writeString(this.mAddTime);
    }

    _read(istr)
    {
        this.mID = istr.readInt();
        this.mGroupID = istr.readInt();
        this.mEmployeeID = istr.readString();
        this.mAddTime = istr.readString();
    }

    static get minWireSize()
    {
        return  10;
    }
};

Slice$9.defineStruct(DispatcherDB.GROUPEMPLOYEE, true, true);

Slice$9.defineSequence(DispatcherDB, "GROUPEMPLOYEESeqHelper", "DispatcherDB.GROUPEMPLOYEE", false);

DispatcherDB.EmployeeRelatedAll = class
{
    constructor(mID = 0, mEmployeeID = "", mPassword = "", mEmployeeLevel = 0, mDepartID = 0, mRoleID = 0, mName = "", mAddTime = "", mModifyTime = "", mTheState = 0, mTheType = 0, mRemark = "", mGroupID = 0, mGroupName = "", mGroupParentID = 0, mGroupNum = "", mGroupType = 0, mRoleName = "")
    {
        this.mID = mID;
        this.mEmployeeID = mEmployeeID;
        this.mPassword = mPassword;
        this.mEmployeeLevel = mEmployeeLevel;
        this.mDepartID = mDepartID;
        this.mRoleID = mRoleID;
        this.mName = mName;
        this.mAddTime = mAddTime;
        this.mModifyTime = mModifyTime;
        this.mTheState = mTheState;
        this.mTheType = mTheType;
        this.mRemark = mRemark;
        this.mGroupID = mGroupID;
        this.mGroupName = mGroupName;
        this.mGroupParentID = mGroupParentID;
        this.mGroupNum = mGroupNum;
        this.mGroupType = mGroupType;
        this.mRoleName = mRoleName;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mID);
        ostr.writeString(this.mEmployeeID);
        ostr.writeString(this.mPassword);
        ostr.writeInt(this.mEmployeeLevel);
        ostr.writeInt(this.mDepartID);
        ostr.writeInt(this.mRoleID);
        ostr.writeString(this.mName);
        ostr.writeString(this.mAddTime);
        ostr.writeString(this.mModifyTime);
        ostr.writeInt(this.mTheState);
        ostr.writeInt(this.mTheType);
        ostr.writeString(this.mRemark);
        ostr.writeInt(this.mGroupID);
        ostr.writeString(this.mGroupName);
        ostr.writeInt(this.mGroupParentID);
        ostr.writeString(this.mGroupNum);
        ostr.writeInt(this.mGroupType);
        ostr.writeString(this.mRoleName);
    }

    _read(istr)
    {
        this.mID = istr.readInt();
        this.mEmployeeID = istr.readString();
        this.mPassword = istr.readString();
        this.mEmployeeLevel = istr.readInt();
        this.mDepartID = istr.readInt();
        this.mRoleID = istr.readInt();
        this.mName = istr.readString();
        this.mAddTime = istr.readString();
        this.mModifyTime = istr.readString();
        this.mTheState = istr.readInt();
        this.mTheType = istr.readInt();
        this.mRemark = istr.readString();
        this.mGroupID = istr.readInt();
        this.mGroupName = istr.readString();
        this.mGroupParentID = istr.readInt();
        this.mGroupNum = istr.readString();
        this.mGroupType = istr.readInt();
        this.mRoleName = istr.readString();
    }

    static get minWireSize()
    {
        return  45;
    }
};

Slice$9.defineStruct(DispatcherDB.EmployeeRelatedAll, true, true);

Slice$9.defineSequence(DispatcherDB, "EmployeeRelatedAllSeqHelper", "DispatcherDB.EmployeeRelatedAll", false);

DispatcherDB.DEVICECONFIG = class
{
    constructor(mID = 0, mStartDevice = "", mSumDevice = 0, mServerIP = "", mServerPort = 0, mTheState = 0, mModifyTime = "", mAddTime = "", mTheType = 0, mUserName = "", mUserPWD = "")
    {
        this.mID = mID;
        this.mStartDevice = mStartDevice;
        this.mSumDevice = mSumDevice;
        this.mServerIP = mServerIP;
        this.mServerPort = mServerPort;
        this.mTheState = mTheState;
        this.mModifyTime = mModifyTime;
        this.mAddTime = mAddTime;
        this.mTheType = mTheType;
        this.mUserName = mUserName;
        this.mUserPWD = mUserPWD;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mID);
        ostr.writeString(this.mStartDevice);
        ostr.writeInt(this.mSumDevice);
        ostr.writeString(this.mServerIP);
        ostr.writeInt(this.mServerPort);
        ostr.writeInt(this.mTheState);
        ostr.writeString(this.mModifyTime);
        ostr.writeString(this.mAddTime);
        ostr.writeInt(this.mTheType);
        ostr.writeString(this.mUserName);
        ostr.writeString(this.mUserPWD);
    }

    _read(istr)
    {
        this.mID = istr.readInt();
        this.mStartDevice = istr.readString();
        this.mSumDevice = istr.readInt();
        this.mServerIP = istr.readString();
        this.mServerPort = istr.readInt();
        this.mTheState = istr.readInt();
        this.mModifyTime = istr.readString();
        this.mAddTime = istr.readString();
        this.mTheType = istr.readInt();
        this.mUserName = istr.readString();
        this.mUserPWD = istr.readString();
    }

    static get minWireSize()
    {
        return  26;
    }
};

Slice$9.defineStruct(DispatcherDB.DEVICECONFIG, true, true);

Slice$9.defineSequence(DispatcherDB, "DEVICECONFIGSeqHelper", "DispatcherDB.DEVICECONFIG", false);

DispatcherDB.SYSPARAMETER = class
{
    constructor(mTheKey = "", mTheValue = "", mTheState = 0)
    {
        this.mTheKey = mTheKey;
        this.mTheValue = mTheValue;
        this.mTheState = mTheState;
    }

    _write(ostr)
    {
        ostr.writeString(this.mTheKey);
        ostr.writeString(this.mTheValue);
        ostr.writeInt(this.mTheState);
    }

    _read(istr)
    {
        this.mTheKey = istr.readString();
        this.mTheValue = istr.readString();
        this.mTheState = istr.readInt();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$9.defineStruct(DispatcherDB.SYSPARAMETER, true, true);

Slice$9.defineSequence(DispatcherDB, "SYSPARAMETERSeqHelper", "DispatcherDB.SYSPARAMETER", false);

DispatcherDB.SYSCONFIGREAD = class
{
    constructor(mTableName = "", mAddTime = "", mReadTime = "", mState = 0, mValue1 = "")
    {
        this.mTableName = mTableName;
        this.mAddTime = mAddTime;
        this.mReadTime = mReadTime;
        this.mState = mState;
        this.mValue1 = mValue1;
    }

    _write(ostr)
    {
        ostr.writeString(this.mTableName);
        ostr.writeString(this.mAddTime);
        ostr.writeString(this.mReadTime);
        ostr.writeInt(this.mState);
        ostr.writeString(this.mValue1);
    }

    _read(istr)
    {
        this.mTableName = istr.readString();
        this.mAddTime = istr.readString();
        this.mReadTime = istr.readString();
        this.mState = istr.readInt();
        this.mValue1 = istr.readString();
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$9.defineStruct(DispatcherDB.SYSCONFIGREAD, true, true);

Slice$9.defineSequence(DispatcherDB, "SYSCONFIGREADSeqHelper", "DispatcherDB.SYSCONFIGREAD", false);

DispatcherDB.CALLCALLLOGType = class
{
    constructor(mCid = "", mCaller = "", mCalled = "", mCreateTime = "", mReleaseTime = "", mTimeLength = 0, mCallType = 0, mCallResult = 0, mReleaseReason = 0)
    {
        this.mCid = mCid;
        this.mCaller = mCaller;
        this.mCalled = mCalled;
        this.mCreateTime = mCreateTime;
        this.mReleaseTime = mReleaseTime;
        this.mTimeLength = mTimeLength;
        this.mCallType = mCallType;
        this.mCallResult = mCallResult;
        this.mReleaseReason = mReleaseReason;
    }

    _write(ostr)
    {
        ostr.writeString(this.mCid);
        ostr.writeString(this.mCaller);
        ostr.writeString(this.mCalled);
        ostr.writeString(this.mCreateTime);
        ostr.writeString(this.mReleaseTime);
        ostr.writeInt(this.mTimeLength);
        ostr.writeInt(this.mCallType);
        ostr.writeInt(this.mCallResult);
        ostr.writeInt(this.mReleaseReason);
    }

    _read(istr)
    {
        this.mCid = istr.readString();
        this.mCaller = istr.readString();
        this.mCalled = istr.readString();
        this.mCreateTime = istr.readString();
        this.mReleaseTime = istr.readString();
        this.mTimeLength = istr.readInt();
        this.mCallType = istr.readInt();
        this.mCallResult = istr.readInt();
        this.mReleaseReason = istr.readInt();
    }

    static get minWireSize()
    {
        return  21;
    }
};

Slice$9.defineStruct(DispatcherDB.CALLCALLLOGType, true, true);

Slice$9.defineSequence(DispatcherDB, "CALLCALLLOGSeqHelper", "DispatcherDB.CALLCALLLOGType", false);

DispatcherDB.CALLRECORDType = class
{
    constructor(mCid = "", mRecordName = "", mSubPath = "", mReadTimes = 0, mRecordServerID = 0, mCreateTime = "", mReleaseTime = "", mTimeLength = 0, mRecordType = 0, mWebPath = "")
    {
        this.mCid = mCid;
        this.mRecordName = mRecordName;
        this.mSubPath = mSubPath;
        this.mReadTimes = mReadTimes;
        this.mRecordServerID = mRecordServerID;
        this.mCreateTime = mCreateTime;
        this.mReleaseTime = mReleaseTime;
        this.mTimeLength = mTimeLength;
        this.mRecordType = mRecordType;
        this.mWebPath = mWebPath;
    }

    _write(ostr)
    {
        ostr.writeString(this.mCid);
        ostr.writeString(this.mRecordName);
        ostr.writeString(this.mSubPath);
        ostr.writeInt(this.mReadTimes);
        ostr.writeInt(this.mRecordServerID);
        ostr.writeString(this.mCreateTime);
        ostr.writeString(this.mReleaseTime);
        ostr.writeInt(this.mTimeLength);
        ostr.writeInt(this.mRecordType);
        ostr.writeString(this.mWebPath);
    }

    _read(istr)
    {
        this.mCid = istr.readString();
        this.mRecordName = istr.readString();
        this.mSubPath = istr.readString();
        this.mReadTimes = istr.readInt();
        this.mRecordServerID = istr.readInt();
        this.mCreateTime = istr.readString();
        this.mReleaseTime = istr.readString();
        this.mTimeLength = istr.readInt();
        this.mRecordType = istr.readInt();
        this.mWebPath = istr.readString();
    }

    static get minWireSize()
    {
        return  22;
    }
};

Slice$9.defineStruct(DispatcherDB.CALLRECORDType, true, true);

Slice$9.defineSequence(DispatcherDB, "CALLRECORDSeqHelper", "DispatcherDB.CALLRECORDType", false);

DispatcherDB.VIDEO = class
{
    constructor(mID = 0, mVideoIP = "", mVideoPort = "", mUser = "", mPassWord = "", mShowName = "", mTheType = 0, mBindEmployeeID = "")
    {
        this.mID = mID;
        this.mVideoIP = mVideoIP;
        this.mVideoPort = mVideoPort;
        this.mUser = mUser;
        this.mPassWord = mPassWord;
        this.mShowName = mShowName;
        this.mTheType = mTheType;
        this.mBindEmployeeID = mBindEmployeeID;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mID);
        ostr.writeString(this.mVideoIP);
        ostr.writeString(this.mVideoPort);
        ostr.writeString(this.mUser);
        ostr.writeString(this.mPassWord);
        ostr.writeString(this.mShowName);
        ostr.writeInt(this.mTheType);
        ostr.writeString(this.mBindEmployeeID);
    }

    _read(istr)
    {
        this.mID = istr.readInt();
        this.mVideoIP = istr.readString();
        this.mVideoPort = istr.readString();
        this.mUser = istr.readString();
        this.mPassWord = istr.readString();
        this.mShowName = istr.readString();
        this.mTheType = istr.readInt();
        this.mBindEmployeeID = istr.readString();
    }

    static get minWireSize()
    {
        return  14;
    }
};

Slice$9.defineStruct(DispatcherDB.VIDEO, true, true);

Slice$9.defineSequence(DispatcherDB, "VIDEOSeqHelper", "DispatcherDB.VIDEO", false);

DispatcherDB.VIDEORECORDType = class
{
    constructor(mCid = "", mRecordName = "", mSubPath = "", mReadTimes = 0, mRecordServerID = 0, mCreateTime = "", mReleaseTime = "", mTimeLength = 0, mRecordType = 0, mWebPath = "")
    {
        this.mCid = mCid;
        this.mRecordName = mRecordName;
        this.mSubPath = mSubPath;
        this.mReadTimes = mReadTimes;
        this.mRecordServerID = mRecordServerID;
        this.mCreateTime = mCreateTime;
        this.mReleaseTime = mReleaseTime;
        this.mTimeLength = mTimeLength;
        this.mRecordType = mRecordType;
        this.mWebPath = mWebPath;
    }

    _write(ostr)
    {
        ostr.writeString(this.mCid);
        ostr.writeString(this.mRecordName);
        ostr.writeString(this.mSubPath);
        ostr.writeInt(this.mReadTimes);
        ostr.writeInt(this.mRecordServerID);
        ostr.writeString(this.mCreateTime);
        ostr.writeString(this.mReleaseTime);
        ostr.writeInt(this.mTimeLength);
        ostr.writeInt(this.mRecordType);
        ostr.writeString(this.mWebPath);
    }

    _read(istr)
    {
        this.mCid = istr.readString();
        this.mRecordName = istr.readString();
        this.mSubPath = istr.readString();
        this.mReadTimes = istr.readInt();
        this.mRecordServerID = istr.readInt();
        this.mCreateTime = istr.readString();
        this.mReleaseTime = istr.readString();
        this.mTimeLength = istr.readInt();
        this.mRecordType = istr.readInt();
        this.mWebPath = istr.readString();
    }

    static get minWireSize()
    {
        return  22;
    }
};

Slice$9.defineStruct(DispatcherDB.VIDEORECORDType, true, true);

Slice$9.defineSequence(DispatcherDB, "VIDEORECORDSeqHelper", "DispatcherDB.VIDEORECORDType", false);

DispatcherDB.MSGINFO = class
{
    constructor(mID = 0, mMsgID = "", mSendID = "", mSendName = "", mMsgBody = "", mSendTime = "", mIsUpload = 0, mMsgType = 0)
    {
        this.mID = mID;
        this.mMsgID = mMsgID;
        this.mSendID = mSendID;
        this.mSendName = mSendName;
        this.mMsgBody = mMsgBody;
        this.mSendTime = mSendTime;
        this.mIsUpload = mIsUpload;
        this.mMsgType = mMsgType;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mID);
        ostr.writeString(this.mMsgID);
        ostr.writeString(this.mSendID);
        ostr.writeString(this.mSendName);
        ostr.writeString(this.mMsgBody);
        ostr.writeString(this.mSendTime);
        ostr.writeInt(this.mIsUpload);
        ostr.writeInt(this.mMsgType);
    }

    _read(istr)
    {
        this.mID = istr.readInt();
        this.mMsgID = istr.readString();
        this.mSendID = istr.readString();
        this.mSendName = istr.readString();
        this.mMsgBody = istr.readString();
        this.mSendTime = istr.readString();
        this.mIsUpload = istr.readInt();
        this.mMsgType = istr.readInt();
    }

    static get minWireSize()
    {
        return  17;
    }
};

Slice$9.defineStruct(DispatcherDB.MSGINFO, true, true);

Slice$9.defineSequence(DispatcherDB, "MSGINFOSeqHelper", "DispatcherDB.MSGINFO", false);

DispatcherDB.MSGSENDRS = class
{
    constructor(mID = 0, mMsgID = "", mReceiverID = "", mReceiverName = "", mIsFinish = "", mRecvTime = "")
    {
        this.mID = mID;
        this.mMsgID = mMsgID;
        this.mReceiverID = mReceiverID;
        this.mReceiverName = mReceiverName;
        this.mIsFinish = mIsFinish;
        this.mRecvTime = mRecvTime;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mID);
        ostr.writeString(this.mMsgID);
        ostr.writeString(this.mReceiverID);
        ostr.writeString(this.mReceiverName);
        ostr.writeString(this.mIsFinish);
        ostr.writeString(this.mRecvTime);
    }

    _read(istr)
    {
        this.mID = istr.readInt();
        this.mMsgID = istr.readString();
        this.mReceiverID = istr.readString();
        this.mReceiverName = istr.readString();
        this.mIsFinish = istr.readString();
        this.mRecvTime = istr.readString();
    }

    static get minWireSize()
    {
        return  9;
    }
};

Slice$9.defineStruct(DispatcherDB.MSGSENDRS, true, true);

Slice$9.defineSequence(DispatcherDB, "MSGSENDRSSeqHelper", "DispatcherDB.MSGSENDRS", false);

DispatcherDB.ROUTECFG = class
{
    constructor(mID = 0, mRouteNum = "", mIP = "")
    {
        this.mID = mID;
        this.mRouteNum = mRouteNum;
        this.mIP = mIP;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mID);
        ostr.writeString(this.mRouteNum);
        ostr.writeString(this.mIP);
    }

    _read(istr)
    {
        this.mID = istr.readInt();
        this.mRouteNum = istr.readString();
        this.mIP = istr.readString();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$9.defineStruct(DispatcherDB.ROUTECFG, true, true);

Slice$9.defineSequence(DispatcherDB, "ROUTECFGSeqHelper", "DispatcherDB.ROUTECFG", false);

DispatcherDB.IVRCFG = class
{
    constructor(mID = 0, mIvrName = "", mIvrNum = "")
    {
        this.mID = mID;
        this.mIvrName = mIvrName;
        this.mIvrNum = mIvrNum;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mID);
        ostr.writeString(this.mIvrName);
        ostr.writeString(this.mIvrNum);
    }

    _read(istr)
    {
        this.mID = istr.readInt();
        this.mIvrName = istr.readString();
        this.mIvrNum = istr.readString();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$9.defineStruct(DispatcherDB.IVRCFG, true, true);

Slice$9.defineSequence(DispatcherDB, "IVRCFGSeqHelper", "DispatcherDB.IVRCFG", false);

DispatcherDB.MDVSCFG = class
{
    constructor(mID = 0, mMdvsName = "", mIP = "")
    {
        this.mID = mID;
        this.mMdvsName = mMdvsName;
        this.mIP = mIP;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mID);
        ostr.writeString(this.mMdvsName);
        ostr.writeString(this.mIP);
    }

    _read(istr)
    {
        this.mID = istr.readInt();
        this.mMdvsName = istr.readString();
        this.mIP = istr.readString();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$9.defineStruct(DispatcherDB.MDVSCFG, true, true);

Slice$9.defineSequence(DispatcherDB, "MDVSCFGSeqHelper", "DispatcherDB.MDVSCFG", false);

DispatcherDB.GISDETAIL = class
{
    constructor(mEmployeeid = "", mLatitude = 0.0, mLongitude = 0.0, mPositionTime = "", mMessage = "", type = 0)
    {
        this.mEmployeeid = mEmployeeid;
        this.mLatitude = mLatitude;
        this.mLongitude = mLongitude;
        this.mPositionTime = mPositionTime;
        this.mMessage = mMessage;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.mEmployeeid);
        ostr.writeDouble(this.mLatitude);
        ostr.writeDouble(this.mLongitude);
        ostr.writeString(this.mPositionTime);
        ostr.writeString(this.mMessage);
        ostr.writeInt(this.type);
    }

    _read(istr)
    {
        this.mEmployeeid = istr.readString();
        this.mLatitude = istr.readDouble();
        this.mLongitude = istr.readDouble();
        this.mPositionTime = istr.readString();
        this.mMessage = istr.readString();
        this.type = istr.readInt();
    }

    static get minWireSize()
    {
        return  23;
    }
};

Slice$9.defineStruct(DispatcherDB.GISDETAIL, false, true);

Slice$9.defineSequence(DispatcherDB, "GISDETAILSeqHelper", "DispatcherDB.GISDETAIL", false);

DispatcherDB.PREPLANINFO = class
{
    constructor(mPlanName = "", mPlanID = 0, mPlanPasswd = "", mPlanType = 0, mPlanAddr = "", mPlanAlloc = "")
    {
        this.mPlanName = mPlanName;
        this.mPlanID = mPlanID;
        this.mPlanPasswd = mPlanPasswd;
        this.mPlanType = mPlanType;
        this.mPlanAddr = mPlanAddr;
        this.mPlanAlloc = mPlanAlloc;
    }

    _write(ostr)
    {
        ostr.writeString(this.mPlanName);
        ostr.writeInt(this.mPlanID);
        ostr.writeString(this.mPlanPasswd);
        ostr.writeInt(this.mPlanType);
        ostr.writeString(this.mPlanAddr);
        ostr.writeString(this.mPlanAlloc);
    }

    _read(istr)
    {
        this.mPlanName = istr.readString();
        this.mPlanID = istr.readInt();
        this.mPlanPasswd = istr.readString();
        this.mPlanType = istr.readInt();
        this.mPlanAddr = istr.readString();
        this.mPlanAlloc = istr.readString();
    }

    static get minWireSize()
    {
        return  12;
    }
};

Slice$9.defineStruct(DispatcherDB.PREPLANINFO, true, true);

Slice$9.defineSequence(DispatcherDB, "PREPLANINFOSeqHelper", "DispatcherDB.PREPLANINFO", false);

DispatcherDB.PREPLANINSTRUMENT = class
{
    constructor(mPlanInstID = 0, mPlanInstName = "", mPlanInstType = 0)
    {
        this.mPlanInstID = mPlanInstID;
        this.mPlanInstName = mPlanInstName;
        this.mPlanInstType = mPlanInstType;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mPlanInstID);
        ostr.writeString(this.mPlanInstName);
        ostr.writeInt(this.mPlanInstType);
    }

    _read(istr)
    {
        this.mPlanInstID = istr.readInt();
        this.mPlanInstName = istr.readString();
        this.mPlanInstType = istr.readInt();
    }

    static get minWireSize()
    {
        return  9;
    }
};

Slice$9.defineStruct(DispatcherDB.PREPLANINSTRUMENT, true, true);

Slice$9.defineSequence(DispatcherDB, "PREPLANINSTRUMENTSeqHelper", "DispatcherDB.PREPLANINSTRUMENT", false);

DispatcherDB.PREPLANINSTRUREF = class
{
    constructor(mPlanID = 0, mPlanInstID = 0)
    {
        this.mPlanID = mPlanID;
        this.mPlanInstID = mPlanInstID;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mPlanID);
        ostr.writeInt(this.mPlanInstID);
    }

    _read(istr)
    {
        this.mPlanID = istr.readInt();
        this.mPlanInstID = istr.readInt();
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$9.defineStruct(DispatcherDB.PREPLANINSTRUREF, true, false);

Slice$9.defineSequence(DispatcherDB, "PREPLANINSTRUREFSeqHelper", "DispatcherDB.PREPLANINSTRUREF", true);

DispatcherDB.PREPLANMEMBER = class
{
    constructor(mPlanInstID = 0, mEmployeeID = "")
    {
        this.mPlanInstID = mPlanInstID;
        this.mEmployeeID = mEmployeeID;
    }

    _write(ostr)
    {
        ostr.writeInt(this.mPlanInstID);
        ostr.writeString(this.mEmployeeID);
    }

    _read(istr)
    {
        this.mPlanInstID = istr.readInt();
        this.mEmployeeID = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$9.defineStruct(DispatcherDB.PREPLANMEMBER, true, true);

Slice$9.defineSequence(DispatcherDB, "PREPLANMEMBERSeqHelper", "DispatcherDB.PREPLANMEMBER", false);

//
const _ModuleRegistry$a = Ice._ModuleRegistry;
const Slice$a = Ice.Slice;

const iceC_Dispatcher_CommSrv_ids = [
    "::Dispatcher::CommSrv",
    "::Ice::Object"
];

Dispatcher$1.CommSrv = class extends Ice.Object
{
};

Dispatcher$1.CommSrvPrx = class extends Ice.ObjectPrx
{
};

Slice$a.defineOperations(Dispatcher$1.CommSrv, Dispatcher$1.CommSrvPrx, iceC_Dispatcher_CommSrv_ids, 0);

const iceC_Dispatcher_CommCli_ids = [
    "::Dispatcher::CommCli",
    "::Ice::Object"
];

/**
 * 事件类型
 *
 **/
Dispatcher$1.CommCli = class extends Ice.Object
{
};

Dispatcher$1.CommCliPrx = class extends Ice.ObjectPrx
{
};

Slice$a.defineOperations(Dispatcher$1.CommCli, Dispatcher$1.CommCliPrx, iceC_Dispatcher_CommCli_ids, 0);

//
const _ModuleRegistry$b = Ice._ModuleRegistry;
const Slice$b = Ice.Slice;

Dispatcher.TreeT = class
{
    constructor(userId = "", groupnum = "", dnsprefix = "", type = 0)
    {
        this.userId = userId;
        this.groupnum = groupnum;
        this.dnsprefix = dnsprefix;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.userId);
        ostr.writeString(this.groupnum);
        ostr.writeString(this.dnsprefix);
        ostr.writeInt(this.type);
    }

    _read(istr)
    {
        this.userId = istr.readString();
        this.groupnum = istr.readString();
        this.dnsprefix = istr.readString();
        this.type = istr.readInt();
    }

    static get minWireSize()
    {
        return  7;
    }
};

Slice$b.defineStruct(Dispatcher.TreeT, true, true);

const iceC_Dispatcher_UserT_ids = [
    "::Dispatcher::UserT",
    "::Ice::Object"
];

Dispatcher.UserT = class extends Ice.Value
{
    constructor(userid = "", username = "", type = 8, dnsprefix = "", islocal = 0, rstate = Dispatcher.RegisterState.RegisterStateNone, cstate = Dispatcher.CallState.CallStateNone, othernumber = "", othername = "")
    {
        super();
        this.userid = userid;
        this.username = username;
        this.type = type;
        this.dnsprefix = dnsprefix;
        this.islocal = islocal;
        this.rstate = rstate;
        this.cstate = cstate;
        this.othernumber = othernumber;
        this.othername = othername;
    }

    _iceWriteMemberImpl(ostr)
    {
        ostr.writeString(this.userid);
        ostr.writeString(this.username);
        ostr.writeInt(this.type);
        ostr.writeString(this.dnsprefix);
        ostr.writeInt(this.islocal);
        Dispatcher.RegisterState._write(ostr, this.rstate);
        Dispatcher.CallState._write(ostr, this.cstate);
        ostr.writeString(this.othernumber);
        ostr.writeString(this.othername);
    }

    _iceReadMemberImpl(istr)
    {
        this.userid = istr.readString();
        this.username = istr.readString();
        this.type = istr.readInt();
        this.dnsprefix = istr.readString();
        this.islocal = istr.readInt();
        this.rstate = Dispatcher.RegisterState._read(istr);
        this.cstate = Dispatcher.CallState._read(istr);
        this.othernumber = istr.readString();
        this.othername = istr.readString();
    }
};

Slice$b.defineValue(Dispatcher.UserT, iceC_Dispatcher_UserT_ids[0], false);

Slice$b.defineSequence(Dispatcher, "UserSeqHelper", "Ice.ObjectHelper", false, "Dispatcher.UserT");

Slice$b.defineSequence(Dispatcher, "GroupSeqHelper", "Ice.ObjectHelper", false, "Dispatcher.GroupT");

const iceC_Dispatcher_GroupT_ids = [
    "::Dispatcher::GroupT",
    "::Ice::Object"
];

Dispatcher.GroupT = class extends Ice.Value
{
    constructor(id = 0, groupnum = "", groupname = "", type = Dispatcher.GroupType.GroupTypeNone, user = null, group = null, dnsprefix = "", islocal = 0, canshowall = 0)
    {
        super();
        this.id = id;
        this.groupnum = groupnum;
        this.groupname = groupname;
        this.type = type;
        this.user = user;
        this.group = group;
        this.dnsprefix = dnsprefix;
        this.islocal = islocal;
        this.canshowall = canshowall;
    }

    _iceWriteMemberImpl(ostr)
    {
        ostr.writeInt(this.id);
        ostr.writeString(this.groupnum);
        ostr.writeString(this.groupname);
        Dispatcher.GroupType._write(ostr, this.type);
        Dispatcher.UserSeqHelper.write(ostr, this.user);
        Dispatcher.GroupSeqHelper.write(ostr, this.group);
        ostr.writeString(this.dnsprefix);
        ostr.writeInt(this.islocal);
        ostr.writeInt(this.canshowall);
    }

    _iceReadMemberImpl(istr)
    {
        this.id = istr.readInt();
        this.groupnum = istr.readString();
        this.groupname = istr.readString();
        this.type = Dispatcher.GroupType._read(istr);
        this.user = Dispatcher.UserSeqHelper.read(istr);
        this.group = Dispatcher.GroupSeqHelper.read(istr);
        this.dnsprefix = istr.readString();
        this.islocal = istr.readInt();
        this.canshowall = istr.readInt();
    }
};

Slice$b.defineValue(Dispatcher.GroupT, iceC_Dispatcher_GroupT_ids[0], false);

const iceC_Dispatcher_TreeRT_ids = [
    "::Dispatcher::TreeRT",
    "::Ice::Object"
];

Dispatcher.TreeRT = class extends Ice.Value
{
    constructor(roots = null)
    {
        super();
        this.roots = roots;
    }

    _iceWriteMemberImpl(ostr)
    {
        Dispatcher.GroupSeqHelper.write(ostr, this.roots);
    }

    _iceReadMemberImpl(istr)
    {
        this.roots = Dispatcher.GroupSeqHelper.read(istr);
    }
};

Slice$b.defineValue(Dispatcher.TreeRT, iceC_Dispatcher_TreeRT_ids[0], false);

Dispatcher.VersionElem = class
{
    constructor(name = "", type = "", version = "", time = "")
    {
        this.name = name;
        this.type = type;
        this.version = version;
        this.time = time;
    }

    _write(ostr)
    {
        ostr.writeString(this.name);
        ostr.writeString(this.type);
        ostr.writeString(this.version);
        ostr.writeString(this.time);
    }

    _read(istr)
    {
        this.name = istr.readString();
        this.type = istr.readString();
        this.version = istr.readString();
        this.time = istr.readString();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$b.defineStruct(Dispatcher.VersionElem, true, true);

Slice$b.defineSequence(Dispatcher, "VersionSeqHelper", "Dispatcher.VersionElem", false);

Dispatcher.VersionEventT = class
{
    constructor(vseq = null)
    {
        this.vseq = vseq;
    }

    _write(ostr)
    {
        Dispatcher.VersionSeqHelper.write(ostr, this.vseq);
    }

    _read(istr)
    {
        this.vseq = Dispatcher.VersionSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$b.defineStruct(Dispatcher.VersionEventT, true, true);

Dispatcher.GetVersionT = class
{
    constructor(dummy = "")
    {
        this.dummy = dummy;
    }

    _write(ostr)
    {
        ostr.writeString(this.dummy);
    }

    _read(istr)
    {
        this.dummy = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$b.defineStruct(Dispatcher.GetVersionT, true, true);

Dispatcher.GetVersionRT = class
{
    constructor(vseq = null)
    {
        this.vseq = vseq;
    }

    _write(ostr)
    {
        Dispatcher.VersionSeqHelper.write(ostr, this.vseq);
    }

    _read(istr)
    {
        this.vseq = Dispatcher.VersionSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$b.defineStruct(Dispatcher.GetVersionRT, true, true);

//
const _ModuleRegistry$c = Ice._ModuleRegistry;
const Slice$c = Ice.Slice;

const iceC_Dispatcher_ConfigureCB_ids = [
    "::Dispatcher::ConfigureCB",
    "::Ice::Object"
];

Dispatcher.ConfigureCB = class extends Ice.Object
{
};

Dispatcher.ConfigureCBPrx = class extends Ice.ObjectPrx
{
};

Slice$c.defineOperations(Dispatcher.ConfigureCB, Dispatcher.ConfigureCBPrx, iceC_Dispatcher_ConfigureCB_ids, 0);

const iceC_Dispatcher_ConfigureCBSub_ids = [
    "::Dispatcher::ConfigureCBSub",
    "::Ice::Object"
];

Dispatcher.ConfigureCBSub = class extends Ice.Object
{
};

Dispatcher.ConfigureCBSubPrx = class extends Ice.ObjectPrx
{
};

Slice$c.defineOperations(Dispatcher.ConfigureCBSub, Dispatcher.ConfigureCBSubPrx, iceC_Dispatcher_ConfigureCBSub_ids, 0);

//
const _ModuleRegistry$d = Ice._ModuleRegistry;
const Slice$d = Ice.Slice;

const iceC_Dispatcher_FXDeviceNumberRT_ids = [
    "::Dispatcher::FXDeviceNumberRT",
    "::Ice::Object"
];

Dispatcher.FXDeviceNumberRT = class extends Ice.Value
{
    constructor(dev = "", num = "", name = "", orgid = "", domain = "", latitude = "", longitude = "", remarks = "")
    {
        super();
        this.dev = dev;
        this.num = num;
        this.name = name;
        this.orgid = orgid;
        this.domain = domain;
        this.latitude = latitude;
        this.longitude = longitude;
        this.remarks = remarks;
    }

    _iceWriteMemberImpl(ostr)
    {
        ostr.writeString(this.dev);
        ostr.writeString(this.num);
        ostr.writeString(this.name);
        ostr.writeString(this.orgid);
        ostr.writeString(this.domain);
        ostr.writeString(this.latitude);
        ostr.writeString(this.longitude);
        ostr.writeString(this.remarks);
    }

    _iceReadMemberImpl(istr)
    {
        this.dev = istr.readString();
        this.num = istr.readString();
        this.name = istr.readString();
        this.orgid = istr.readString();
        this.domain = istr.readString();
        this.latitude = istr.readString();
        this.longitude = istr.readString();
        this.remarks = istr.readString();
    }
};

Slice$d.defineValue(Dispatcher.FXDeviceNumberRT, iceC_Dispatcher_FXDeviceNumberRT_ids[0], false);

Slice$d.defineSequence(Dispatcher, "NumbersRTHelper", "Ice.ObjectHelper", false, "Dispatcher.FXDeviceNumberRT");

Slice$d.defineSequence(Dispatcher, "OrgsRTHelper", "Ice.ObjectHelper", false, "Dispatcher.FXOrgRT");

const iceC_Dispatcher_FXOrgRT_ids = [
    "::Dispatcher::FXOrgRT",
    "::Ice::Object"
];

Dispatcher.FXOrgRT = class extends Ice.Value
{
    constructor(id = "", name = "", parentid = "", ldap = "", domain = "", remarks = "", ordernum = "", Orgs = null, Numbers = null)
    {
        super();
        this.id = id;
        this.name = name;
        this.parentid = parentid;
        this.ldap = ldap;
        this.domain = domain;
        this.remarks = remarks;
        this.ordernum = ordernum;
        this.Orgs = Orgs;
        this.Numbers = Numbers;
    }

    _iceWriteMemberImpl(ostr)
    {
        ostr.writeString(this.id);
        ostr.writeString(this.name);
        ostr.writeString(this.parentid);
        ostr.writeString(this.ldap);
        ostr.writeString(this.domain);
        ostr.writeString(this.remarks);
        ostr.writeString(this.ordernum);
        Dispatcher.OrgsRTHelper.write(ostr, this.Orgs);
        Dispatcher.NumbersRTHelper.write(ostr, this.Numbers);
    }

    _iceReadMemberImpl(istr)
    {
        this.id = istr.readString();
        this.name = istr.readString();
        this.parentid = istr.readString();
        this.ldap = istr.readString();
        this.domain = istr.readString();
        this.remarks = istr.readString();
        this.ordernum = istr.readString();
        this.Orgs = Dispatcher.OrgsRTHelper.read(istr);
        this.Numbers = Dispatcher.NumbersRTHelper.read(istr);
    }
};

Slice$d.defineValue(Dispatcher.FXOrgRT, iceC_Dispatcher_FXOrgRT_ids[0], false);

const iceC_Dispatcher_FXDeviceRT_ids = [
    "::Dispatcher::FXDeviceRT",
    "::Ice::Object"
];

Dispatcher.FXDeviceRT = class extends Ice.Value
{
    constructor(id = "", name = "", remarks = "", Orgs = null)
    {
        super();
        this.id = id;
        this.name = name;
        this.remarks = remarks;
        this.Orgs = Orgs;
    }

    _iceWriteMemberImpl(ostr)
    {
        ostr.writeString(this.id);
        ostr.writeString(this.name);
        ostr.writeString(this.remarks);
        Dispatcher.OrgsRTHelper.write(ostr, this.Orgs);
    }

    _iceReadMemberImpl(istr)
    {
        this.id = istr.readString();
        this.name = istr.readString();
        this.remarks = istr.readString();
        this.Orgs = Dispatcher.OrgsRTHelper.read(istr);
    }
};

Slice$d.defineValue(Dispatcher.FXDeviceRT, iceC_Dispatcher_FXDeviceRT_ids[0], false);

Dispatcher.LocalDNSPrefixRT = class
{
    constructor(prefix = "")
    {
        this.prefix = prefix;
    }

    _write(ostr)
    {
        ostr.writeString(this.prefix);
    }

    _read(istr)
    {
        this.prefix = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$d.defineStruct(Dispatcher.LocalDNSPrefixRT, true, true);

Slice$d.defineSequence(Dispatcher, "FXDeviceSeqHelper", "Ice.ObjectHelper", false, "Dispatcher.FXDeviceRT");

Dispatcher.GetFXDeviceT = class
{
    constructor(getdetail = true, remarks = "")
    {
        this.getdetail = getdetail;
        this.remarks = remarks;
    }

    _write(ostr)
    {
        ostr.writeBool(this.getdetail);
        ostr.writeString(this.remarks);
    }

    _read(istr)
    {
        this.getdetail = istr.readBool();
        this.remarks = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$d.defineStruct(Dispatcher.GetFXDeviceT, true, true);

Dispatcher.GetFXDeviceDetailT = class
{
    constructor(fxDeviceid = "", orgid = "", remarks = "")
    {
        this.fxDeviceid = fxDeviceid;
        this.orgid = orgid;
        this.remarks = remarks;
    }

    _write(ostr)
    {
        ostr.writeString(this.fxDeviceid);
        ostr.writeString(this.orgid);
        ostr.writeString(this.remarks);
    }

    _read(istr)
    {
        this.fxDeviceid = istr.readString();
        this.orgid = istr.readString();
        this.remarks = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$d.defineStruct(Dispatcher.GetFXDeviceDetailT, true, true);

Dispatcher.KeyConfig = class
{
    constructor(Key = "", Value1 = "")
    {
        this.Key = Key;
        this.Value1 = Value1;
    }

    _write(ostr)
    {
        ostr.writeString(this.Key);
        ostr.writeString(this.Value1);
    }

    _read(istr)
    {
        this.Key = istr.readString();
        this.Value1 = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$d.defineStruct(Dispatcher.KeyConfig, true, true);

Slice$d.defineSequence(Dispatcher, "KeyConfigSeqHelper", "Dispatcher.KeyConfig", false);

Dispatcher.MealConfig = class
{
    constructor(id = 0, SetMealName = "", SetMealState = 0, Details = null)
    {
        this.id = id;
        this.SetMealName = SetMealName;
        this.SetMealState = SetMealState;
        this.Details = Details;
    }

    _write(ostr)
    {
        ostr.writeInt(this.id);
        ostr.writeString(this.SetMealName);
        ostr.writeInt(this.SetMealState);
        Dispatcher.KeyConfigSeqHelper.write(ostr, this.Details);
    }

    _read(istr)
    {
        this.id = istr.readInt();
        this.SetMealName = istr.readString();
        this.SetMealState = istr.readInt();
        this.Details = Dispatcher.KeyConfigSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  10;
    }
};

Slice$d.defineStruct(Dispatcher.MealConfig, true, true);

Dispatcher.KeyConfig1 = class
{
    constructor(TheKey = "", TheValue = "")
    {
        this.TheKey = TheKey;
        this.TheValue = TheValue;
    }

    _write(ostr)
    {
        ostr.writeString(this.TheKey);
        ostr.writeString(this.TheValue);
    }

    _read(istr)
    {
        this.TheKey = istr.readString();
        this.TheValue = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$d.defineStruct(Dispatcher.KeyConfig1, true, true);

Slice$d.defineSequence(Dispatcher, "KeyConfigSeq1Helper", "Dispatcher.KeyConfig1", false);

Dispatcher.MealConfig1 = class
{
    constructor(id = 0, SetMealName = "", SetMealState = 0, Details = null)
    {
        this.id = id;
        this.SetMealName = SetMealName;
        this.SetMealState = SetMealState;
        this.Details = Details;
    }

    _write(ostr)
    {
        ostr.writeInt(this.id);
        ostr.writeString(this.SetMealName);
        ostr.writeInt(this.SetMealState);
        Dispatcher.KeyConfigSeq1Helper.write(ostr, this.Details);
    }

    _read(istr)
    {
        this.id = istr.readInt();
        this.SetMealName = istr.readString();
        this.SetMealState = istr.readInt();
        this.Details = Dispatcher.KeyConfigSeq1Helper.read(istr);
    }

    static get minWireSize()
    {
        return  10;
    }
};

Slice$d.defineStruct(Dispatcher.MealConfig1, true, true);

const iceC_Dispatcher_ConfigureOP_ids = [
    "::Dispatcher::ConfigureOP",
    "::Ice::Object"
];

Dispatcher.ConfigureOP = class extends Ice.Object
{
};

Dispatcher.ConfigureOPPrx = class extends Ice.ObjectPrx
{
};

Slice$d.defineOperations(Dispatcher.ConfigureOP, Dispatcher.ConfigureOPPrx, iceC_Dispatcher_ConfigureOP_ids, 0,
{
    "opTree": [, , , , ["Dispatcher.TreeRT", true], [[Dispatcher.Identity], [Dispatcher.TreeT]], ,
    [
        Dispatcher.Error
    ], , true],
    "opGetVersion": [, , , , [Dispatcher.GetVersionRT], [[Dispatcher.Identity], [Dispatcher.GetVersionT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetLocalEmployeeByType": [, , , , ["Dispatcher.TreeRT", true], [[Dispatcher.Identity], [Dispatcher.TreeT]], ,
    [
        Dispatcher.Error
    ], , true],
    "opGetFXDevices": [, , , , ["Dispatcher.FXDeviceSeqHelper"], [[Dispatcher.Identity], [Dispatcher.GetFXDeviceT]], ,
    [
        Dispatcher.Error
    ], , true],
    "opGetFXDevicesDetail": [, , , , ["Dispatcher.FXDeviceSeqHelper"], [[Dispatcher.Identity], [Dispatcher.GetFXDeviceDetailT]], ,
    [
        Dispatcher.Error
    ], , true],
    "opGetConfigByKey": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opLocalPrefix": [, , , , [Dispatcher.LocalDNSPrefixRT], [[Dispatcher.Identity]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetConfigByKeys": [, , , , ["Dispatcher.KeyConfigSeqHelper"], [[Dispatcher.Identity], ["Dispatcher.KeyConfigSeqHelper"]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetMealConfig": [, , , , [Dispatcher.MealConfig], [[Dispatcher.Identity]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetConfigByKeys1": [, , , , ["Dispatcher.KeyConfigSeq1Helper"], [[Dispatcher.Identity], ["Dispatcher.KeyConfigSeq1Helper"]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetMealConfig1": [, , , , [Dispatcher.MealConfig1], [[Dispatcher.Identity]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetJsonTree": [, , , , [7], [[Dispatcher.Identity], [Dispatcher.TreeT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetGroupDetail": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSetDeviceChannel": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetBSServerInfo": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetServiceLicenseInfo": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetOtherProgramInfo": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ]
});

const iceC_Dispatcher_ConfigureSB_ids = [
    "::Dispatcher::ConfigureSB",
    "::Ice::Object"
];

Dispatcher.ConfigureSB = class extends Ice.Object
{
};

Dispatcher.ConfigureSBPrx = class extends Ice.ObjectPrx
{
};

Slice$d.defineOperations(Dispatcher.ConfigureSB, Dispatcher.ConfigureSBPrx, iceC_Dispatcher_ConfigureSB_ids, 0);

//
const _ModuleRegistry$e = Ice._ModuleRegistry;
const Slice$e = Ice.Slice;

Dispatcher.DecoderDeviceInfo = class
{
    constructor(id = "", videoip = "", videoport = "", user = "", Password = "", showname = "", thetype = 0)
    {
        this.id = id;
        this.videoip = videoip;
        this.videoport = videoport;
        this.user = user;
        this.Password = Password;
        this.showname = showname;
        this.thetype = thetype;
    }

    _write(ostr)
    {
        ostr.writeString(this.id);
        ostr.writeString(this.videoip);
        ostr.writeString(this.videoport);
        ostr.writeString(this.user);
        ostr.writeString(this.Password);
        ostr.writeString(this.showname);
        ostr.writeInt(this.thetype);
    }

    _read(istr)
    {
        this.id = istr.readString();
        this.videoip = istr.readString();
        this.videoport = istr.readString();
        this.user = istr.readString();
        this.Password = istr.readString();
        this.showname = istr.readString();
        this.thetype = istr.readInt();
    }

    static get minWireSize()
    {
        return  10;
    }
};

Slice$e.defineStruct(Dispatcher.DecoderDeviceInfo, true, true);

Slice$e.defineSequence(Dispatcher, "DecoderDeviceInfoSeqHelper", "Dispatcher.DecoderDeviceInfo", false);

Dispatcher.DecoderDisplayChan = class
{
    constructor(byChan = 0)
    {
        this.byChan = byChan;
    }

    _write(ostr)
    {
        ostr.writeByte(this.byChan);
    }

    _read(istr)
    {
        this.byChan = istr.readByte();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$e.defineStruct(Dispatcher.DecoderDisplayChan, true, false);

Slice$e.defineSequence(Dispatcher, "DecoderDisplayChanSeqHelper", "Dispatcher.DecoderDisplayChan", true);

Dispatcher.DecoderDisplayCfg = class
{
    constructor(Channelid = 0, dwWindowMode = 0, byAudio = 0, byVedioFormat = 0, dwResolution = 0, byJoinDecChans = null, byDispChanType = 0)
    {
        this.Channelid = Channelid;
        this.dwWindowMode = dwWindowMode;
        this.byAudio = byAudio;
        this.byVedioFormat = byVedioFormat;
        this.dwResolution = dwResolution;
        this.byJoinDecChans = byJoinDecChans;
        this.byDispChanType = byDispChanType;
    }

    _write(ostr)
    {
        ostr.writeInt(this.Channelid);
        ostr.writeInt(this.dwWindowMode);
        ostr.writeByte(this.byAudio);
        ostr.writeByte(this.byVedioFormat);
        ostr.writeInt(this.dwResolution);
        Dispatcher.DecoderDisplayChanSeqHelper.write(ostr, this.byJoinDecChans);
        ostr.writeByte(this.byDispChanType);
    }

    _read(istr)
    {
        this.Channelid = istr.readInt();
        this.dwWindowMode = istr.readInt();
        this.byAudio = istr.readByte();
        this.byVedioFormat = istr.readByte();
        this.dwResolution = istr.readInt();
        this.byJoinDecChans = Dispatcher.DecoderDisplayChanSeqHelper.read(istr);
        this.byDispChanType = istr.readByte();
    }

    static get minWireSize()
    {
        return  16;
    }
};

Slice$e.defineStruct(Dispatcher.DecoderDisplayCfg, true, true);

Slice$e.defineSequence(Dispatcher, "DecoderDisplayCfgSeqHelper", "Dispatcher.DecoderDisplayCfg", false);

//
const _ModuleRegistry$f = Ice._ModuleRegistry;
const Slice$f = Ice.Slice;

const iceC_Dispatcher_DecoderCB_ids = [
    "::Dispatcher::DecoderCB",
    "::Ice::Object"
];

Dispatcher.DecoderCB = class extends Ice.Object
{
};

Dispatcher.DecoderCBPrx = class extends Ice.ObjectPrx
{
};

Slice$f.defineOperations(Dispatcher.DecoderCB, Dispatcher.DecoderCBPrx, iceC_Dispatcher_DecoderCB_ids, 0);

//
const _ModuleRegistry$g = Ice._ModuleRegistry;
const Slice$g = Ice.Slice;

Dispatcher.GetDisplayCfg = class
{
    constructor(Decoderid = "")
    {
        this.Decoderid = Decoderid;
    }

    _write(ostr)
    {
        ostr.writeString(this.Decoderid);
    }

    _read(istr)
    {
        this.Decoderid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$g.defineStruct(Dispatcher.GetDisplayCfg, true, true);

Dispatcher.SetDecoderCfg = class
{
    constructor(Decoderid = "", Cfg = new Dispatcher.DecoderDisplayCfg())
    {
        this.Decoderid = Decoderid;
        this.Cfg = Cfg;
    }

    _write(ostr)
    {
        ostr.writeString(this.Decoderid);
        Dispatcher.DecoderDisplayCfg.write(ostr, this.Cfg);
    }

    _read(istr)
    {
        this.Decoderid = istr.readString();
        this.Cfg = Dispatcher.DecoderDisplayCfg.read(istr, this.Cfg);
    }

    static get minWireSize()
    {
        return  17;
    }
};

Slice$g.defineStruct(Dispatcher.SetDecoderCfg, true, true);

Dispatcher.RetDecoderAllCfg = class
{
    constructor(Decoderid = "", Cfgs = null)
    {
        this.Decoderid = Decoderid;
        this.Cfgs = Cfgs;
    }

    _write(ostr)
    {
        ostr.writeString(this.Decoderid);
        Dispatcher.DecoderDisplayCfgSeqHelper.write(ostr, this.Cfgs);
    }

    _read(istr)
    {
        this.Decoderid = istr.readString();
        this.Cfgs = Dispatcher.DecoderDisplayCfgSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$g.defineStruct(Dispatcher.RetDecoderAllCfg, true, true);

Dispatcher.opDecoderInfo = class
{
    constructor(Decoderid = "", Channel = "", cid = "", disNumber = "")
    {
        this.Decoderid = Decoderid;
        this.Channel = Channel;
        this.cid = cid;
        this.disNumber = disNumber;
    }

    _write(ostr)
    {
        ostr.writeString(this.Decoderid);
        ostr.writeString(this.Channel);
        ostr.writeString(this.cid);
        ostr.writeString(this.disNumber);
    }

    _read(istr)
    {
        this.Decoderid = istr.readString();
        this.Channel = istr.readString();
        this.cid = istr.readString();
        this.disNumber = istr.readString();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$g.defineStruct(Dispatcher.opDecoderInfo, true, true);

Dispatcher.opTransferRTPInfo = class
{
    constructor(cid = "", Number = "", disip = "", disport = 0)
    {
        this.cid = cid;
        this.Number = Number;
        this.disip = disip;
        this.disport = disport;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.Number);
        ostr.writeString(this.disip);
        ostr.writeInt(this.disport);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.Number = istr.readString();
        this.disip = istr.readString();
        this.disport = istr.readInt();
    }

    static get minWireSize()
    {
        return  7;
    }
};

Slice$g.defineStruct(Dispatcher.opTransferRTPInfo, true, true);

Dispatcher.opDecoderByUrlInfo = class
{
    constructor(Decoderid = "", Channel = "", url = "")
    {
        this.Decoderid = Decoderid;
        this.Channel = Channel;
        this.url = url;
    }

    _write(ostr)
    {
        ostr.writeString(this.Decoderid);
        ostr.writeString(this.Channel);
        ostr.writeString(this.url);
    }

    _read(istr)
    {
        this.Decoderid = istr.readString();
        this.Channel = istr.readString();
        this.url = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$g.defineStruct(Dispatcher.opDecoderByUrlInfo, true, true);

Dispatcher.opDecoderByVideoInfo = class
{
    constructor(Decoderid = "", Channel = "", VideoUser = "", VideoPwd = "", VideoIP = "", VideoPort = "", VideoChannel = "", VideoType = Dispatcher.emVideoDeviceType.VDTNONE)
    {
        this.Decoderid = Decoderid;
        this.Channel = Channel;
        this.VideoUser = VideoUser;
        this.VideoPwd = VideoPwd;
        this.VideoIP = VideoIP;
        this.VideoPort = VideoPort;
        this.VideoChannel = VideoChannel;
        this.VideoType = VideoType;
    }

    _write(ostr)
    {
        ostr.writeString(this.Decoderid);
        ostr.writeString(this.Channel);
        ostr.writeString(this.VideoUser);
        ostr.writeString(this.VideoPwd);
        ostr.writeString(this.VideoIP);
        ostr.writeString(this.VideoPort);
        ostr.writeString(this.VideoChannel);
        Dispatcher.emVideoDeviceType._write(ostr, this.VideoType);
    }

    _read(istr)
    {
        this.Decoderid = istr.readString();
        this.Channel = istr.readString();
        this.VideoUser = istr.readString();
        this.VideoPwd = istr.readString();
        this.VideoIP = istr.readString();
        this.VideoPort = istr.readString();
        this.VideoChannel = istr.readString();
        this.VideoType = Dispatcher.emVideoDeviceType._read(istr);
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$g.defineStruct(Dispatcher.opDecoderByVideoInfo, true, true);

Dispatcher.opChannelStatus = class
{
    constructor(Decoderid = "", Channel = "")
    {
        this.Decoderid = Decoderid;
        this.Channel = Channel;
    }

    _write(ostr)
    {
        ostr.writeString(this.Decoderid);
        ostr.writeString(this.Channel);
    }

    _read(istr)
    {
        this.Decoderid = istr.readString();
        this.Channel = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$g.defineStruct(Dispatcher.opChannelStatus, true, true);

Dispatcher.RetDecoderAbility = class
{
    constructor(Decoderid = "", VideoType = Dispatcher.emVideoDeviceType.VDTNONE, InChannelsNum = 0)
    {
        this.Decoderid = Decoderid;
        this.VideoType = VideoType;
        this.InChannelsNum = InChannelsNum;
    }

    _write(ostr)
    {
        ostr.writeString(this.Decoderid);
        Dispatcher.emVideoDeviceType._write(ostr, this.VideoType);
        ostr.writeInt(this.InChannelsNum);
    }

    _read(istr)
    {
        this.Decoderid = istr.readString();
        this.VideoType = Dispatcher.emVideoDeviceType._read(istr);
        this.InChannelsNum = istr.readInt();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$g.defineStruct(Dispatcher.RetDecoderAbility, true, true);

const iceC_Dispatcher_DecoderOP_ids = [
    "::Dispatcher::DecoderOP",
    "::Ice::Object"
];

Dispatcher.DecoderOP = class extends Ice.Object
{
};

Dispatcher.DecoderOPPrx = class extends Ice.ObjectPrx
{
};

Slice$g.defineOperations(Dispatcher.DecoderOP, Dispatcher.DecoderOPPrx, iceC_Dispatcher_DecoderOP_ids, 0,
{
    "opGetDecoderDevice": [, , , , ["Dispatcher.DecoderDeviceInfoSeqHelper"], [[Dispatcher.Identity]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetDisplayCfg": [, , , , [Dispatcher.RetDecoderAllCfg], [[Dispatcher.Identity], [Dispatcher.GetDisplayCfg]], , , , ],
    "opGetDecoderAbility": [, , , , [Dispatcher.RetDecoderAbility], [[Dispatcher.Identity], [Dispatcher.GetDisplayCfg]], , , , ],
    "opGetChannelDecoderState": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.opChannelStatus]], , , , ],
    "opSetDisplayCfg": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.SetDecoderCfg]], , , , ],
    "opStartDecoder": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.opDecoderInfo]], , , , ],
    "opStartDecoderByUrl": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.opDecoderByUrlInfo]], , , , ],
    "opStopDecoder": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.opDecoderInfo]], , , , ],
    "opStopDecoderByUrl": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.opDecoderByUrlInfo]], , , , ],
    "opTransferRTP": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.opTransferRTPInfo]], , , , ],
    "opTransferStopRTP": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.opTransferRTPInfo]], , , , ],
    "opStartDecoderByVideoInfo": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.opDecoderByVideoInfo]], , , , ],
    "opStopDecoderByVideoInfo": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.opDecoderByVideoInfo]], , , , ],
    "opGetDisplayCfg1": [, , , , [7], [[Dispatcher.Identity], [Dispatcher.GetDisplayCfg]], , , , ],
    "opSetWindows": [, , , , [7], [[Dispatcher.Identity], [7], [7]], , , , ],
    "opGetSubWindowsStatus": [, , , , [7], [[Dispatcher.Identity], [7], [7]], , , , ],
    "opSetDisplayPosition": [, , , , [1], [[Dispatcher.Identity], [7], [7]], , , , ],
    "opSetScreenMode": [, , , , [1], [[Dispatcher.Identity], [7], [7]], , , , ]
});

//
const _ModuleRegistry$h = Ice._ModuleRegistry;
const Slice$h = Ice.Slice;

let Dispatcher$2 = _ModuleRegistry$h.module("Dispatcher");

Object.defineProperty(Dispatcher$2, 'EventEmployeeStateReg', {
    value: "Employee.State.Reg"
});

Object.defineProperty(Dispatcher$2, 'EventEmployeeStateCall', {
    value: "Employee.State.Call"
});

Object.defineProperty(Dispatcher$2, 'EventPttState', {
    value: "Ptt.State"
});

Object.defineProperty(Dispatcher$2, 'EventPttStateSpeaker', {
    value: "Ptt.State.Speaker"
});

Object.defineProperty(Dispatcher$2, 'EventPttWaiting', {
    value: "Ptt.Waiting"
});

Object.defineProperty(Dispatcher$2, 'EventPttReject', {
    value: "Ptt.Reject"
});

Object.defineProperty(Dispatcher$2, 'EventHistoryVideoInfo', {
    value: "Video.Role.History.Info"
});

Object.defineProperty(Dispatcher$2, 'EventSessionStateChange', {
    value: "Session.State.Change"
});

Object.defineProperty(Dispatcher$2, 'EventSessionMemberChange', {
    value: "Session.Member.Change"
});

Object.defineProperty(Dispatcher$2, 'EventSessionSendToCreater', {
    value: "Session.SendToCreater.State"
});

Object.defineProperty(Dispatcher$2, 'EventSessionSendToAllDTP', {
    value: "Session.SendToAllDTP.State"
});

Object.defineProperty(Dispatcher$2, 'EventSessionMemberToAllDTP', {
    value: "Session.SendMemberToAllDTP.State"
});

Object.defineProperty(Dispatcher$2, 'EventCallVideoGetVideoEvent', {
    value: "CallVideo.GetVideo.Event"
});

Object.defineProperty(Dispatcher$2, 'EventBusFileOnReceive', {
    value: "BusFile.OnReceive"
});

Object.defineProperty(Dispatcher$2, 'EventCALLPLAYAUDIOCB', {
    value: "CallPlay.Audio.CB"
});

Object.defineProperty(Dispatcher$2, 'EventGisPositionChange', {
    value: "GIS.Position.Change"
});

Object.defineProperty(Dispatcher$2, 'EventFileMsgOnReceive', {
    value: "FileMsg.OnReceive"
});

Object.defineProperty(Dispatcher$2, 'EventMsgOnReceive', {
    value: "Msg.OnReceive"
});

Object.defineProperty(Dispatcher$2, 'EventEmployeeChannelChange', {
    value: "Employee.Relay.ChannelChange"
});

Object.defineProperty(Dispatcher$2, 'EventDBChangeGroupChange', {
    value: "DB.Group.Change"
});

Object.defineProperty(Dispatcher$2, 'EventGroupMsgGroupChange', {
    value: "GroupMsg.Group.Change"
});

Object.defineProperty(Dispatcher$2, 'EventGroupMsgGroupEmployeeChange', {
    value: "GroupMsg.GroupEmp.Change"
});

Object.defineProperty(Dispatcher$2, 'EventPlanTypeChange', {
    value: "Plan.TypeChange"
});

Object.defineProperty(Dispatcher$2, 'EventPlanInfoChange', {
    value: "Plan.InfoChange"
});

//
const _ModuleRegistry$i = Ice._ModuleRegistry;
const Slice$i = Ice.Slice;

Dispatcher.FaxT = class
{
    constructor(fid = "", fname = "", srcnum = "", dstnum = "")
    {
        this.fid = fid;
        this.fname = fname;
        this.srcnum = srcnum;
        this.dstnum = dstnum;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        ostr.writeString(this.fname);
        ostr.writeString(this.srcnum);
        ostr.writeString(this.dstnum);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.fname = istr.readString();
        this.srcnum = istr.readString();
        this.dstnum = istr.readString();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$i.defineStruct(Dispatcher.FaxT, true, true);

Dispatcher.FaxRT = class
{
    constructor(fid = "", fname = "", fpath = "")
    {
        this.fid = fid;
        this.fname = fname;
        this.fpath = fpath;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        ostr.writeString(this.fname);
        ostr.writeString(this.fpath);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.fname = istr.readString();
        this.fpath = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$i.defineStruct(Dispatcher.FaxRT, true, true);

Dispatcher.FaxEvT = class
{
    constructor(fid = "", code = Dispatcher.FileState.FileStateNone)
    {
        this.fid = fid;
        this.code = code;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        Dispatcher.FileState._write(ostr, this.code);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.code = Dispatcher.FileState._read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$i.defineStruct(Dispatcher.FaxEvT, true, true);

Dispatcher.FaxEv2T = class
{
    constructor(fid = "", code = Dispatcher.FaxStateSend.FaxStateSendNone)
    {
        this.fid = fid;
        this.code = code;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        Dispatcher.FaxStateSend._write(ostr, this.code);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.code = Dispatcher.FaxStateSend._read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$i.defineStruct(Dispatcher.FaxEv2T, true, true);

Dispatcher.NewFaxEvT = class
{
    constructor(fid = "")
    {
        this.fid = fid;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
    }

    _read(istr)
    {
        this.fid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$i.defineStruct(Dispatcher.NewFaxEvT, true, true);

//
const _ModuleRegistry$j = Ice._ModuleRegistry;
const Slice$j = Ice.Slice;

const iceC_Dispatcher_FaxCB_ids = [
    "::Dispatcher::FaxCB",
    "::Ice::Object"
];

Dispatcher.FaxCB = class extends Ice.Object
{
};

Dispatcher.FaxCBPrx = class extends Ice.ObjectPrx
{
};

Slice$j.defineOperations(Dispatcher.FaxCB, Dispatcher.FaxCBPrx, iceC_Dispatcher_FaxCB_ids, 0,
{
    "onFaxEv": [, 2, 2, , , [[Dispatcher.FaxEv2T]], , , , ],
    "onNewFaxEv": [, 2, 2, , , [[Dispatcher.NewFaxEvT]], , , , ]
});

//
const _ModuleRegistry$k = Ice._ModuleRegistry;
const Slice$k = Ice.Slice;

const iceC_Dispatcher_FaxOP_ids = [
    "::Dispatcher::FaxOP",
    "::Ice::Object"
];

Dispatcher.FaxOP = class extends Ice.Object
{
};

Dispatcher.FaxOPPrx = class extends Ice.ObjectPrx
{
};

Slice$k.defineOperations(Dispatcher.FaxOP, Dispatcher.FaxOPPrx, iceC_Dispatcher_FaxOP_ids, 0,
{
    "opFax": [, , , , [Dispatcher.FaxRT], [[Dispatcher.Identity], [Dispatcher.FaxT]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$l = Ice._ModuleRegistry;
const Slice$l = Ice.Slice;

let Fax = _ModuleRegistry$l.module("Fax");

Fax.FaxDirectType = Slice$l.defineEnum([
    ['FaxDirectTypeSend', 0], ['FaxDirectTypeRecv', 1]]);

Fax.Error = class extends Ice.UserException
{
    constructor(fid = "", code = 0, desc = "", _cause = "")
    {
        super(_cause);
        this.fid = fid;
        this.code = code;
        this.desc = desc;
    }

    static get _parent()
    {
        return Ice.UserException;
    }

    static get _id()
    {
        return "::Fax::Error";
    }

    _mostDerivedType()
    {
        return Fax.Error;
    }

    _writeMemberImpl(ostr)
    {
        ostr.writeString(this.fid);
        ostr.writeInt(this.code);
        ostr.writeString(this.desc);
    }

    _readMemberImpl(istr)
    {
        this.fid = istr.readString();
        this.code = istr.readInt();
        this.desc = istr.readString();
    }
};

Fax.FaxOriginateT = class
{
    constructor(fid = "", srcip = "", srcport = 0, srcpath = "", srcuser = "", dstip = "", dstport = 0, dstpath = "", dstuser = "", direct = Fax.FaxDirectType.FaxDirectTypeSend)
    {
        this.fid = fid;
        this.srcip = srcip;
        this.srcport = srcport;
        this.srcpath = srcpath;
        this.srcuser = srcuser;
        this.dstip = dstip;
        this.dstport = dstport;
        this.dstpath = dstpath;
        this.dstuser = dstuser;
        this.direct = direct;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        ostr.writeString(this.srcip);
        ostr.writeInt(this.srcport);
        ostr.writeString(this.srcpath);
        ostr.writeString(this.srcuser);
        ostr.writeString(this.dstip);
        ostr.writeInt(this.dstport);
        ostr.writeString(this.dstpath);
        ostr.writeString(this.dstuser);
        Fax.FaxDirectType._write(ostr, this.direct);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.srcip = istr.readString();
        this.srcport = istr.readInt();
        this.srcpath = istr.readString();
        this.srcuser = istr.readString();
        this.dstip = istr.readString();
        this.dstport = istr.readInt();
        this.dstpath = istr.readString();
        this.dstuser = istr.readString();
        this.direct = Fax.FaxDirectType._read(istr);
    }

    static get minWireSize()
    {
        return  16;
    }
};

Slice$l.defineStruct(Fax.FaxOriginateT, true, true);

Fax.FaxFeedbackT = class
{
    constructor(fid = "", direct = 0, code = 0, msg = "", tiffname = "", tiffpath = "")
    {
        this.fid = fid;
        this.direct = direct;
        this.code = code;
        this.msg = msg;
        this.tiffname = tiffname;
        this.tiffpath = tiffpath;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        ostr.writeInt(this.direct);
        ostr.writeInt(this.code);
        ostr.writeString(this.msg);
        ostr.writeString(this.tiffname);
        ostr.writeString(this.tiffpath);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.direct = istr.readInt();
        this.code = istr.readInt();
        this.msg = istr.readString();
        this.tiffname = istr.readString();
        this.tiffpath = istr.readString();
    }

    static get minWireSize()
    {
        return  12;
    }
};

Slice$l.defineStruct(Fax.FaxFeedbackT, true, true);

const iceC_Fax_FaxServer_ids = [
    "::Fax::FaxServer",
    "::Ice::Object"
];

Fax.FaxServer = class extends Ice.Object
{
};

Fax.FaxServerPrx = class extends Ice.ObjectPrx
{
};

Slice$l.defineOperations(Fax.FaxServer, Fax.FaxServerPrx, iceC_Fax_FaxServer_ids, 0,
{
    "faxOriginate": [, , , , [Fax.FaxFeedbackT], [[Fax.FaxOriginateT]], ,
    [
        Fax.Error
    ], , ]
});

//
const _ModuleRegistry$m = Ice._ModuleRegistry;
const Slice$m = Ice.Slice;

Dispatcher.UploadEvent2T = class
{
    constructor(snum = "", dnum = null, fname = "", fid = "", fpath = "", state = Dispatcher.FileState.FileStateNone, ftype = Dispatcher.FileType.FileTypeNone, sendtime = "")
    {
        this.snum = snum;
        this.dnum = dnum;
        this.fname = fname;
        this.fid = fid;
        this.fpath = fpath;
        this.state = state;
        this.ftype = ftype;
        this.sendtime = sendtime;
    }

    _write(ostr)
    {
        ostr.writeString(this.snum);
        Ice.StringSeqHelper.write(ostr, this.dnum);
        ostr.writeString(this.fname);
        ostr.writeString(this.fid);
        ostr.writeString(this.fpath);
        Dispatcher.FileState._write(ostr, this.state);
        Dispatcher.FileType._write(ostr, this.ftype);
        ostr.writeString(this.sendtime);
    }

    _read(istr)
    {
        this.snum = istr.readString();
        this.dnum = Ice.StringSeqHelper.read(istr);
        this.fname = istr.readString();
        this.fid = istr.readString();
        this.fpath = istr.readString();
        this.state = Dispatcher.FileState._read(istr);
        this.ftype = Dispatcher.FileType._read(istr);
        this.sendtime = istr.readString();
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$m.defineStruct(Dispatcher.UploadEvent2T, true, true);

Slice$m.defineSequence(Dispatcher, "UploadEvent2SeqHelper", "Dispatcher.UploadEvent2T", false);

//
const _ModuleRegistry$n = Ice._ModuleRegistry;
const Slice$n = Ice.Slice;

const iceC_Dispatcher_FileCB_ids = [
    "::Dispatcher::FileCB",
    "::Ice::Object"
];

Dispatcher.FileCB = class extends Ice.Object
{
};

Dispatcher.FileCBPrx = class extends Ice.ObjectPrx
{
};

Slice$n.defineOperations(Dispatcher.FileCB, Dispatcher.FileCBPrx, iceC_Dispatcher_FileCB_ids, 0,
{
    "onUploadEvent2": [, 2, 2, , , [[Dispatcher.UploadEvent2T]], , , , ],
    "onDelFileEvent": [, 2, 2, , , [[7]], , , , ]
});

//
const _ModuleRegistry$o = Ice._ModuleRegistry;
const Slice$o = Ice.Slice;

Dispatcher.ApplyUploadET = class
{
    constructor(fid = "", fname = "", ftype = Dispatcher.FileType.FileTypeNone)
    {
        this.fid = fid;
        this.fname = fname;
        this.ftype = ftype;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        ostr.writeString(this.fname);
        Dispatcher.FileType._write(ostr, this.ftype);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.fname = istr.readString();
        this.ftype = Dispatcher.FileType._read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$o.defineStruct(Dispatcher.ApplyUploadET, true, true);

Slice$o.defineSequence(Dispatcher, "ApplyUploadESeqHelper", "Dispatcher.ApplyUploadET", false);

Dispatcher.ApplyUploadT = class
{
    constructor(recv = null, file = new Dispatcher.ApplyUploadET())
    {
        this.recv = recv;
        this.file = file;
    }

    _write(ostr)
    {
        Ice.StringSeqHelper.write(ostr, this.recv);
        Dispatcher.ApplyUploadET.write(ostr, this.file);
    }

    _read(istr)
    {
        this.recv = Ice.StringSeqHelper.read(istr);
        this.file = Dispatcher.ApplyUploadET.read(istr, this.file);
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$o.defineStruct(Dispatcher.ApplyUploadT, true, true);

Dispatcher.ApplyUploadRT = class
{
    constructor(fid = "", fname = "", fpath = "")
    {
        this.fid = fid;
        this.fname = fname;
        this.fpath = fpath;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        ostr.writeString(this.fname);
        ostr.writeString(this.fpath);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.fname = istr.readString();
        this.fpath = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$o.defineStruct(Dispatcher.ApplyUploadRT, true, true);

Slice$o.defineSequence(Dispatcher, "ApplyUploadRSeqHelper", "Dispatcher.ApplyUploadRT", false);

Dispatcher.UploadEventT = class
{
    constructor(fid = "", state = Dispatcher.FileState.FileStateNone)
    {
        this.fid = fid;
        this.state = state;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        Dispatcher.FileState._write(ostr, this.state);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.state = Dispatcher.FileState._read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$o.defineStruct(Dispatcher.UploadEventT, true, true);

Dispatcher.FlistT = class
{
    constructor(sendid = "", recvid = "", isfinish = "", begtime = "", endtime = "", ftype = Dispatcher.FileType.FileTypeNone)
    {
        this.sendid = sendid;
        this.recvid = recvid;
        this.isfinish = isfinish;
        this.begtime = begtime;
        this.endtime = endtime;
        this.ftype = ftype;
    }

    _write(ostr)
    {
        ostr.writeString(this.sendid);
        ostr.writeString(this.recvid);
        ostr.writeString(this.isfinish);
        ostr.writeString(this.begtime);
        ostr.writeString(this.endtime);
        Dispatcher.FileType._write(ostr, this.ftype);
    }

    _read(istr)
    {
        this.sendid = istr.readString();
        this.recvid = istr.readString();
        this.isfinish = istr.readString();
        this.begtime = istr.readString();
        this.endtime = istr.readString();
        this.ftype = Dispatcher.FileType._read(istr);
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$o.defineStruct(Dispatcher.FlistT, true, true);

Slice$o.defineSequence(Dispatcher, "FlistSeqHelper", "Dispatcher.FlistT", false);

Dispatcher.FlistRT = class
{
    constructor(fid = "", sendid = "", sendname = "", msgbody = "", sendtime = "", isupload = 0, type = Dispatcher.FileType.FileTypeNone, recvid = "", recvname = "", isfinish = 0, recvtime = "")
    {
        this.fid = fid;
        this.sendid = sendid;
        this.sendname = sendname;
        this.msgbody = msgbody;
        this.sendtime = sendtime;
        this.isupload = isupload;
        this.type = type;
        this.recvid = recvid;
        this.recvname = recvname;
        this.isfinish = isfinish;
        this.recvtime = recvtime;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        ostr.writeString(this.sendid);
        ostr.writeString(this.sendname);
        ostr.writeString(this.msgbody);
        ostr.writeString(this.sendtime);
        ostr.writeInt(this.isupload);
        Dispatcher.FileType._write(ostr, this.type);
        ostr.writeString(this.recvid);
        ostr.writeString(this.recvname);
        ostr.writeInt(this.isfinish);
        ostr.writeString(this.recvtime);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.sendid = istr.readString();
        this.sendname = istr.readString();
        this.msgbody = istr.readString();
        this.sendtime = istr.readString();
        this.isupload = istr.readInt();
        this.type = Dispatcher.FileType._read(istr);
        this.recvid = istr.readString();
        this.recvname = istr.readString();
        this.isfinish = istr.readInt();
        this.recvtime = istr.readString();
    }

    static get minWireSize()
    {
        return  17;
    }
};

Slice$o.defineStruct(Dispatcher.FlistRT, true, true);

Slice$o.defineSequence(Dispatcher, "FlistRSeqHelper", "Dispatcher.FlistRT", false);

Dispatcher.FileReceivedT = class
{
    constructor(fid = "", employeeid = "")
    {
        this.fid = fid;
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.fid = istr.readString();
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$o.defineStruct(Dispatcher.FileReceivedT, true, true);

Dispatcher.FileDeleteT = class
{
    constructor(fid = "")
    {
        this.fid = fid;
    }

    _write(ostr)
    {
        ostr.writeString(this.fid);
    }

    _read(istr)
    {
        this.fid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$o.defineStruct(Dispatcher.FileDeleteT, true, true);

Slice$o.defineSequence(Dispatcher, "FileDeleteTSeqHelper", "Dispatcher.FileDeleteT", false);

const iceC_Dispatcher_FileOP_ids = [
    "::Dispatcher::FileOP",
    "::Ice::Object"
];

Dispatcher.FileOP = class extends Ice.Object
{
};

Dispatcher.FileOPPrx = class extends Ice.ObjectPrx
{
};

Slice$o.defineOperations(Dispatcher.FileOP, Dispatcher.FileOPPrx, iceC_Dispatcher_FileOP_ids, 0,
{
    "opApplyUpload": [, , , , [Dispatcher.ApplyUploadRT], [[Dispatcher.Identity], [Dispatcher.ApplyUploadT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opUploadEvent": [, 2, 2, , , [[Dispatcher.Identity], [Dispatcher.UploadEventT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opFlist": [, , , , ["Dispatcher.FlistRSeqHelper"], [[Dispatcher.Identity], ["Dispatcher.FlistSeqHelper"]], ,
    [
        Dispatcher.Error
    ], , ],
    "opFileReceived": [, , , , , [[Dispatcher.Identity], [Dispatcher.FileReceivedT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opDeleteFile": [, , , , , [[Dispatcher.Identity], ["Dispatcher.FileDeleteTSeqHelper"]], ,
    [
        Dispatcher.Error
    ], , ],
    "opUploadFile": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSetUploadFileState": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetFileInfoByCondition": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$p = Ice._ModuleRegistry;
const Slice$p = Ice.Slice;

Dispatcher.GisInfoEventT = class
{
    constructor(mEmployeeid = "", mLatitude = 0.0, mLongitude = 0.0, mPositionTime = "", mMessage = "", disid = "", type = 0)
    {
        this.mEmployeeid = mEmployeeid;
        this.mLatitude = mLatitude;
        this.mLongitude = mLongitude;
        this.mPositionTime = mPositionTime;
        this.mMessage = mMessage;
        this.disid = disid;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.mEmployeeid);
        ostr.writeDouble(this.mLatitude);
        ostr.writeDouble(this.mLongitude);
        ostr.writeString(this.mPositionTime);
        ostr.writeString(this.mMessage);
        ostr.writeString(this.disid);
        ostr.writeInt(this.type);
    }

    _read(istr)
    {
        this.mEmployeeid = istr.readString();
        this.mLatitude = istr.readDouble();
        this.mLongitude = istr.readDouble();
        this.mPositionTime = istr.readString();
        this.mMessage = istr.readString();
        this.disid = istr.readString();
        this.type = istr.readInt();
    }

    static get minWireSize()
    {
        return  24;
    }
};

Slice$p.defineStruct(Dispatcher.GisInfoEventT, false, true);

Dispatcher.GisInfoEventT1 = class
{
    constructor(mEmployeeid = "", mLatitude = 0.0, mLongitude = 0.0, mPositionTime = "", mMessage = "", disid = "", type = 0, dnsprefix = "")
    {
        this.mEmployeeid = mEmployeeid;
        this.mLatitude = mLatitude;
        this.mLongitude = mLongitude;
        this.mPositionTime = mPositionTime;
        this.mMessage = mMessage;
        this.disid = disid;
        this.type = type;
        this.dnsprefix = dnsprefix;
    }

    _write(ostr)
    {
        ostr.writeString(this.mEmployeeid);
        ostr.writeDouble(this.mLatitude);
        ostr.writeDouble(this.mLongitude);
        ostr.writeString(this.mPositionTime);
        ostr.writeString(this.mMessage);
        ostr.writeString(this.disid);
        ostr.writeInt(this.type);
        ostr.writeString(this.dnsprefix);
    }

    _read(istr)
    {
        this.mEmployeeid = istr.readString();
        this.mLatitude = istr.readDouble();
        this.mLongitude = istr.readDouble();
        this.mPositionTime = istr.readString();
        this.mMessage = istr.readString();
        this.disid = istr.readString();
        this.type = istr.readInt();
        this.dnsprefix = istr.readString();
    }

    static get minWireSize()
    {
        return  25;
    }
};

Slice$p.defineStruct(Dispatcher.GisInfoEventT1, false, true);

const iceC_Dispatcher_GisCB_ids = [
    "::Dispatcher::GisCB",
    "::Ice::Object"
];

Dispatcher.GisCB = class extends Ice.Object
{
};

Dispatcher.GisCBPrx = class extends Ice.ObjectPrx
{
};

Slice$p.defineOperations(Dispatcher.GisCB, Dispatcher.GisCBPrx, iceC_Dispatcher_GisCB_ids, 0,
{
    "onGisInfoEvent": [, 2, 2, , , [[Dispatcher.GisInfoEventT]], , , , ],
    "onGisInfoEvent1": [, 2, 2, , , [[Dispatcher.GisInfoEventT1]], , , , ]
});

//
const _ModuleRegistry$q = Ice._ModuleRegistry;
const Slice$q = Ice.Slice;

Dispatcher.GisInfoByTimeT = class
{
    constructor(employeeid = "", begin = "", end = "", type = 0)
    {
        this.employeeid = employeeid;
        this.begin = begin;
        this.end = end;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        ostr.writeString(this.begin);
        ostr.writeString(this.end);
        ostr.writeInt(this.type);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.begin = istr.readString();
        this.end = istr.readString();
        this.type = istr.readInt();
    }

    static get minWireSize()
    {
        return  7;
    }
};

Slice$q.defineStruct(Dispatcher.GisInfoByTimeT, true, true);

Dispatcher.GisInfoByEllipseT = class
{
    constructor(sid = "", a = 0.0, b = 0.0, c = 0.0, d = 0.0, type = "")
    {
        this.sid = sid;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeDouble(this.a);
        ostr.writeDouble(this.b);
        ostr.writeDouble(this.c);
        ostr.writeDouble(this.d);
        ostr.writeString(this.type);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.a = istr.readDouble();
        this.b = istr.readDouble();
        this.c = istr.readDouble();
        this.d = istr.readDouble();
        this.type = istr.readString();
    }

    static get minWireSize()
    {
        return  34;
    }
};

Slice$q.defineStruct(Dispatcher.GisInfoByEllipseT, false, true);

Dispatcher.GisInfoByRectangleT = class
{
    constructor(a = 0.0, b = 0.0, c = 0.0, d = 0.0, type = "")
    {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeDouble(this.a);
        ostr.writeDouble(this.b);
        ostr.writeDouble(this.c);
        ostr.writeDouble(this.d);
        ostr.writeString(this.type);
    }

    _read(istr)
    {
        this.a = istr.readDouble();
        this.b = istr.readDouble();
        this.c = istr.readDouble();
        this.d = istr.readDouble();
        this.type = istr.readString();
    }

    static get minWireSize()
    {
        return  33;
    }
};

Slice$q.defineStruct(Dispatcher.GisInfoByRectangleT, false, true);

Dispatcher.GetPositionT = class
{
    constructor(employeeid = "")
    {
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$q.defineStruct(Dispatcher.GetPositionT, true, true);

Dispatcher.GetPositionElem = class
{
    constructor(employeeid = "", name = "", longitude = "", latitude = "", message = "", type = -1, dnsprefix = "", regstate = Dispatcher.RegisterState.RegisterStateLogout, positiontime = "")
    {
        this.employeeid = employeeid;
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
        this.message = message;
        this.type = type;
        this.dnsprefix = dnsprefix;
        this.regstate = regstate;
        this.positiontime = positiontime;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        ostr.writeString(this.name);
        ostr.writeString(this.longitude);
        ostr.writeString(this.latitude);
        ostr.writeString(this.message);
        ostr.writeInt(this.type);
        ostr.writeString(this.dnsprefix);
        Dispatcher.RegisterState._write(ostr, this.regstate);
        ostr.writeString(this.positiontime);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.name = istr.readString();
        this.longitude = istr.readString();
        this.latitude = istr.readString();
        this.message = istr.readString();
        this.type = istr.readInt();
        this.dnsprefix = istr.readString();
        this.regstate = Dispatcher.RegisterState._read(istr);
        this.positiontime = istr.readString();
    }

    static get minWireSize()
    {
        return  12;
    }
};

Slice$q.defineStruct(Dispatcher.GetPositionElem, true, true);

Slice$q.defineSequence(Dispatcher, "GetPositionSeqHelper", "Dispatcher.GetPositionElem", false);

Dispatcher.GetPositionRT = class
{
    constructor(pseq = null)
    {
        this.pseq = pseq;
    }

    _write(ostr)
    {
        Dispatcher.GetPositionSeqHelper.write(ostr, this.pseq);
    }

    _read(istr)
    {
        this.pseq = Dispatcher.GetPositionSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$q.defineStruct(Dispatcher.GetPositionRT, true, true);

Dispatcher.GetPositionT1 = class
{
    constructor(employeeid = "")
    {
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$q.defineStruct(Dispatcher.GetPositionT1, true, true);

Dispatcher.GetPositionElem1 = class
{
    constructor(employeeid = "", name = "", longitude = "", latitude = "", message = "", type = 0, dnsprefix = "", regstate = Dispatcher.RegisterState.RegisterStateLogout)
    {
        this.employeeid = employeeid;
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
        this.message = message;
        this.type = type;
        this.dnsprefix = dnsprefix;
        this.regstate = regstate;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        ostr.writeString(this.name);
        ostr.writeString(this.longitude);
        ostr.writeString(this.latitude);
        ostr.writeString(this.message);
        ostr.writeInt(this.type);
        ostr.writeString(this.dnsprefix);
        Dispatcher.RegisterState._write(ostr, this.regstate);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.name = istr.readString();
        this.longitude = istr.readString();
        this.latitude = istr.readString();
        this.message = istr.readString();
        this.type = istr.readInt();
        this.dnsprefix = istr.readString();
        this.regstate = Dispatcher.RegisterState._read(istr);
    }

    static get minWireSize()
    {
        return  11;
    }
};

Slice$q.defineStruct(Dispatcher.GetPositionElem1, true, true);

Slice$q.defineSequence(Dispatcher, "GetPositionSeq1Helper", "Dispatcher.GetPositionElem1", false);

Dispatcher.GetPositionRT1 = class
{
    constructor(pseq = null)
    {
        this.pseq = pseq;
    }

    _write(ostr)
    {
        Dispatcher.GetPositionSeq1Helper.write(ostr, this.pseq);
    }

    _read(istr)
    {
        this.pseq = Dispatcher.GetPositionSeq1Helper.read(istr);
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$q.defineStruct(Dispatcher.GetPositionRT1, true, true);

Dispatcher.GisTraceT = class
{
    constructor(dstid = "", space = "", flag = Dispatcher.GisTraceType.GisTraceTypeNone)
    {
        this.dstid = dstid;
        this.space = space;
        this.flag = flag;
    }

    _write(ostr)
    {
        ostr.writeString(this.dstid);
        ostr.writeString(this.space);
        Dispatcher.GisTraceType._write(ostr, this.flag);
    }

    _read(istr)
    {
        this.dstid = istr.readString();
        this.space = istr.readString();
        this.flag = Dispatcher.GisTraceType._read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$q.defineStruct(Dispatcher.GisTraceT, true, true);

Slice$q.defineSequence(Dispatcher, "GisTraceSeqHelper", "Dispatcher.GisTraceT", false);

Dispatcher.GisTraceRT = class
{
    constructor(employeeid = "")
    {
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$q.defineStruct(Dispatcher.GisTraceRT, true, true);

Slice$q.defineSequence(Dispatcher, "GisTraceRSeqHelper", "Dispatcher.GisTraceRT", false);

Dispatcher.GisInfoT = class
{
    constructor(latitude = 0.0, longitude = 0.0, time = "", grmc = "")
    {
        this.latitude = latitude;
        this.longitude = longitude;
        this.time = time;
        this.grmc = grmc;
    }

    _write(ostr)
    {
        ostr.writeDouble(this.latitude);
        ostr.writeDouble(this.longitude);
        ostr.writeString(this.time);
        ostr.writeString(this.grmc);
    }

    _read(istr)
    {
        this.latitude = istr.readDouble();
        this.longitude = istr.readDouble();
        this.time = istr.readString();
        this.grmc = istr.readString();
    }

    static get minWireSize()
    {
        return  18;
    }
};

Slice$q.defineStruct(Dispatcher.GisInfoT, false, true);

Dispatcher.GISDETAIL1 = class
{
    constructor(mEmployeeid = "", mLatitude = 0.0, mLongitude = 0.0, mPositionTime = "", mMessage = "", type = 0, dnsprefix = "", regstate = Dispatcher.RegisterState.RegisterStateLogout)
    {
        this.mEmployeeid = mEmployeeid;
        this.mLatitude = mLatitude;
        this.mLongitude = mLongitude;
        this.mPositionTime = mPositionTime;
        this.mMessage = mMessage;
        this.type = type;
        this.dnsprefix = dnsprefix;
        this.regstate = regstate;
    }

    _write(ostr)
    {
        ostr.writeString(this.mEmployeeid);
        ostr.writeDouble(this.mLatitude);
        ostr.writeDouble(this.mLongitude);
        ostr.writeString(this.mPositionTime);
        ostr.writeString(this.mMessage);
        ostr.writeInt(this.type);
        ostr.writeString(this.dnsprefix);
        Dispatcher.RegisterState._write(ostr, this.regstate);
    }

    _read(istr)
    {
        this.mEmployeeid = istr.readString();
        this.mLatitude = istr.readDouble();
        this.mLongitude = istr.readDouble();
        this.mPositionTime = istr.readString();
        this.mMessage = istr.readString();
        this.type = istr.readInt();
        this.dnsprefix = istr.readString();
        this.regstate = Dispatcher.RegisterState._read(istr);
    }

    static get minWireSize()
    {
        return  25;
    }
};

Slice$q.defineStruct(Dispatcher.GISDETAIL1, false, true);

Slice$q.defineSequence(Dispatcher, "GISDETAILSeq1Helper", "Dispatcher.GISDETAIL1", false);

const iceC_Dispatcher_GisOP_ids = [
    "::Dispatcher::GisOP",
    "::Ice::Object"
];

Dispatcher.GisOP = class extends Ice.Object
{
};

Dispatcher.GisOPPrx = class extends Ice.ObjectPrx
{
};

Slice$q.defineOperations(Dispatcher.GisOP, Dispatcher.GisOPPrx, iceC_Dispatcher_GisOP_ids, 0,
{
    "opGisInfoByTime": [, , , , ["DispatcherDB.GISDETAILSeqHelper"], [[Dispatcher.Identity], [Dispatcher.GisInfoByTimeT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGisInfoByTime1": [, , , , ["Dispatcher.GISDETAILSeq1Helper"], [[Dispatcher.Identity], [Dispatcher.GisInfoByTimeT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGisInfoByEllipse": [, , , , ["DispatcherDB.GISDETAILSeqHelper"], [[Dispatcher.Identity], [Dispatcher.GisInfoByEllipseT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGisInfoByEllipse1": [, , , , ["Dispatcher.GISDETAILSeq1Helper"], [[Dispatcher.Identity], [Dispatcher.GisInfoByEllipseT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGisInfoByRectangle": [, , , , ["DispatcherDB.GISDETAILSeqHelper"], [[Dispatcher.Identity], [Dispatcher.GisInfoByRectangleT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGisInfoByRectangle1": [, , , , ["Dispatcher.GISDETAILSeq1Helper"], [[Dispatcher.Identity], [Dispatcher.GisInfoByRectangleT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetPosition": [, , , , [Dispatcher.GetPositionRT], [[Dispatcher.Identity], [Dispatcher.GetPositionT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetPosition1": [, , , , [Dispatcher.GetPositionRT1], [[Dispatcher.Identity], [Dispatcher.GetPositionT1]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGisTrace": [, , , , ["Dispatcher.GisTraceRSeqHelper"], [[Dispatcher.Identity], ["Dispatcher.GisTraceSeqHelper"]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGisInfo": [, 2, 2, , , [[Dispatcher.Identity], [Dispatcher.GisInfoT]], , , , ],
    "opGetGisInfos": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opReportGisInfo": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetGisInfoByEllipse": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$r = Ice._ModuleRegistry;
const Slice$r = Ice.Slice;

//
const _ModuleRegistry$s = Ice._ModuleRegistry;
const Slice$s = Ice.Slice;

const iceC_Dispatcher_McuCB_ids = [
    "::Dispatcher::McuCB",
    "::Ice::Object"
];

Dispatcher.McuCB = class extends Ice.Object
{
};

Dispatcher.McuCBPrx = class extends Ice.ObjectPrx
{
};

Slice$s.defineOperations(Dispatcher.McuCB, Dispatcher.McuCBPrx, iceC_Dispatcher_McuCB_ids, 0);

//
const _ModuleRegistry$t = Ice._ModuleRegistry;
const Slice$t = Ice.Slice;

Dispatcher.ScreenDisPlay = class
{
    constructor(index = -1, showmember = "", hasstream = true)
    {
        this.index = index;
        this.showmember = showmember;
        this.hasstream = hasstream;
    }

    _write(ostr)
    {
        ostr.writeInt(this.index);
        ostr.writeString(this.showmember);
        ostr.writeBool(this.hasstream);
    }

    _read(istr)
    {
        this.index = istr.readInt();
        this.showmember = istr.readString();
        this.hasstream = istr.readBool();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$t.defineStruct(Dispatcher.ScreenDisPlay, true, true);

Dispatcher.ScreenInfo = class
{
    constructor(type = "", stream = 1, role = 2)
    {
        this.type = type;
        this.stream = stream;
        this.role = role;
    }

    _write(ostr)
    {
        ostr.writeString(this.type);
        ostr.writeInt(this.stream);
        ostr.writeInt(this.role);
    }

    _read(istr)
    {
        this.type = istr.readString();
        this.stream = istr.readInt();
        this.role = istr.readInt();
    }

    static get minWireSize()
    {
        return  9;
    }
};

Slice$t.defineStruct(Dispatcher.ScreenInfo, true, true);

Slice$t.defineSequence(Dispatcher, "ScreenDisPlaySeqHelper", "Dispatcher.ScreenDisPlay", false);

Dispatcher.SetScreenT = class
{
    constructor(cid = "", screen = new Dispatcher.ScreenInfo(), DisplaySeq = null)
    {
        this.cid = cid;
        this.screen = screen;
        this.DisplaySeq = DisplaySeq;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        Dispatcher.ScreenInfo.write(ostr, this.screen);
        Dispatcher.ScreenDisPlaySeqHelper.write(ostr, this.DisplaySeq);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.screen = Dispatcher.ScreenInfo.read(istr, this.screen);
        this.DisplaySeq = Dispatcher.ScreenDisPlaySeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  11;
    }
};

Slice$t.defineStruct(Dispatcher.SetScreenT, true, true);

Dispatcher.SetScreenRT = class
{
    constructor(cid = "", reslut = 0)
    {
        this.cid = cid;
        this.reslut = reslut;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeInt(this.reslut);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.reslut = istr.readInt();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$t.defineStruct(Dispatcher.SetScreenRT, true, true);

Dispatcher.SetMemberRoleT = class
{
    constructor(cid = "", member = "", role = 0)
    {
        this.cid = cid;
        this.member = member;
        this.role = role;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.member);
        ostr.writeInt(this.role);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.member = istr.readString();
        this.role = istr.readInt();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$t.defineStruct(Dispatcher.SetMemberRoleT, true, true);

Dispatcher.SetMemberRoleRT = class
{
    constructor(cid = "", reslut = 0)
    {
        this.cid = cid;
        this.reslut = reslut;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeInt(this.reslut);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.reslut = istr.readInt();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$t.defineStruct(Dispatcher.SetMemberRoleRT, true, true);

Dispatcher.MCUDevice = class
{
    constructor(id = 0, ip = "", thetype = 0, defaultbandwidth = 0, thename = "")
    {
        this.id = id;
        this.ip = ip;
        this.thetype = thetype;
        this.defaultbandwidth = defaultbandwidth;
        this.thename = thename;
    }

    _write(ostr)
    {
        ostr.writeInt(this.id);
        ostr.writeString(this.ip);
        ostr.writeInt(this.thetype);
        ostr.writeInt(this.defaultbandwidth);
        ostr.writeString(this.thename);
    }

    _read(istr)
    {
        this.id = istr.readInt();
        this.ip = istr.readString();
        this.thetype = istr.readInt();
        this.defaultbandwidth = istr.readInt();
        this.thename = istr.readString();
    }

    static get minWireSize()
    {
        return  14;
    }
};

Slice$t.defineStruct(Dispatcher.MCUDevice, true, true);

Dispatcher.MCUMettingOP = class
{
    constructor(cid = "", number = "")
    {
        this.cid = cid;
        this.number = number;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.number);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.number = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$t.defineStruct(Dispatcher.MCUMettingOP, true, true);

Slice$t.defineSequence(Dispatcher, "MCUDeviceSeqHelper", "Dispatcher.MCUDevice", false);

const iceC_Dispatcher_McuOP_ids = [
    "::Dispatcher::McuOP",
    "::Ice::Object"
];

Dispatcher.McuOP = class extends Ice.Object
{
};

Dispatcher.McuOPPrx = class extends Ice.ObjectPrx
{
};

Slice$t.defineOperations(Dispatcher.McuOP, Dispatcher.McuOPPrx, iceC_Dispatcher_McuOP_ids, 0,
{
    "opSetScreen": [, , , , [Dispatcher.SetScreenRT], [[Dispatcher.Identity], [Dispatcher.SetScreenT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSetMemberRole": [, , , , [Dispatcher.SetMemberRoleRT], [[Dispatcher.Identity], [Dispatcher.SetMemberRoleT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetMCUDevice": [, , , , ["Dispatcher.MCUDeviceSeqHelper"], [[Dispatcher.Identity]], ,
    [
        Dispatcher.Error
    ], , ],
    "opMCUMettingAddDevice": [, , , , , [[Dispatcher.Identity], [Dispatcher.MCUMettingOP]], ,
    [
        Dispatcher.Error
    ], , ],
    "opMCUMettingDelDevice": [, , , , , [[Dispatcher.Identity], [Dispatcher.MCUMettingOP]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$u = Ice._ModuleRegistry;
const Slice$u = Ice.Slice;

Dispatcher.Message2T = class
{
    constructor(msgid = "", body = "", sendid = "", time = "", receiver = null, attach = null, utype = Dispatcher.UserType.UserTypeDispatch)
    {
        this.msgid = msgid;
        this.body = body;
        this.sendid = sendid;
        this.time = time;
        this.receiver = receiver;
        this.attach = attach;
        this.utype = utype;
    }

    _write(ostr)
    {
        ostr.writeString(this.msgid);
        ostr.writeString(this.body);
        ostr.writeString(this.sendid);
        ostr.writeString(this.time);
        Ice.StringSeqHelper.write(ostr, this.receiver);
        Dispatcher.UploadEvent2SeqHelper.write(ostr, this.attach);
        Dispatcher.UserType._write(ostr, this.utype);
    }

    _read(istr)
    {
        this.msgid = istr.readString();
        this.body = istr.readString();
        this.sendid = istr.readString();
        this.time = istr.readString();
        this.receiver = Ice.StringSeqHelper.read(istr);
        this.attach = Dispatcher.UploadEvent2SeqHelper.read(istr);
        this.utype = Dispatcher.UserType._read(istr);
    }

    static get minWireSize()
    {
        return  7;
    }
};

Slice$u.defineStruct(Dispatcher.Message2T, true, true);

Slice$u.defineSequence(Dispatcher, "Message2SeqHelper", "Dispatcher.Message2T", false);

//
const _ModuleRegistry$v = Ice._ModuleRegistry;
const Slice$v = Ice.Slice;

const iceC_Dispatcher_MessageCB_ids = [
    "::Dispatcher::FileCB",
    "::Dispatcher::MessageCB",
    "::Ice::Object"
];

Dispatcher.MessageCB = class extends Ice.Object
{
    static get _iceImplements()
    {
        return [
            Dispatcher.FileCB
        ];
    }
};

Dispatcher.MessageCBPrx = class extends Ice.ObjectPrx
{
    static get _implements()
    {
        return [
            Dispatcher.FileCBPrx];
    }
};

Slice$v.defineOperations(Dispatcher.MessageCB, Dispatcher.MessageCBPrx, iceC_Dispatcher_MessageCB_ids, 1,
{
    "onMessage": [, 2, 2, , , [[Dispatcher.Message2T]], , , , ],
    "onDelMessage": [, 2, 2, , , [[7]], , , , ]
});

//
const _ModuleRegistry$w = Ice._ModuleRegistry;
const Slice$w = Ice.Slice;

Dispatcher.MessageET = class
{
    constructor(body = "", attach = null)
    {
        this.body = body;
        this.attach = attach;
    }

    _write(ostr)
    {
        ostr.writeString(this.body);
        Dispatcher.ApplyUploadESeqHelper.write(ostr, this.attach);
    }

    _read(istr)
    {
        this.body = istr.readString();
        this.attach = Dispatcher.ApplyUploadESeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$w.defineStruct(Dispatcher.MessageET, true, true);

Dispatcher.MessageT = class
{
    constructor(receiver = null, message = new Dispatcher.MessageET())
    {
        this.receiver = receiver;
        this.message = message;
    }

    _write(ostr)
    {
        Ice.StringSeqHelper.write(ostr, this.receiver);
        Dispatcher.MessageET.write(ostr, this.message);
    }

    _read(istr)
    {
        this.receiver = Ice.StringSeqHelper.read(istr);
        this.message = Dispatcher.MessageET.read(istr, this.message);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$w.defineStruct(Dispatcher.MessageT, true, true);

Dispatcher.MessageRT = class
{
    constructor(msgid = "", attach = null)
    {
        this.msgid = msgid;
        this.attach = attach;
    }

    _write(ostr)
    {
        ostr.writeString(this.msgid);
        Dispatcher.ApplyUploadRSeqHelper.write(ostr, this.attach);
    }

    _read(istr)
    {
        this.msgid = istr.readString();
        this.attach = Dispatcher.ApplyUploadRSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$w.defineStruct(Dispatcher.MessageRT, true, true);

Dispatcher.MessageReceivedT = class
{
    constructor(msgid = "", employeeid = "")
    {
        this.msgid = msgid;
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.msgid);
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.msgid = istr.readString();
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$w.defineStruct(Dispatcher.MessageReceivedT, true, true);

Dispatcher.GetOldMsgFileT = class
{
    constructor(employeeid = "", getnum = 0)
    {
        this.employeeid = employeeid;
        this.getnum = getnum;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        ostr.writeInt(this.getnum);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.getnum = istr.readInt();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$w.defineStruct(Dispatcher.GetOldMsgFileT, true, true);

Dispatcher.GetOldMsgFileRT = class
{
    constructor(fileinfos = null, msginfos = null)
    {
        this.fileinfos = fileinfos;
        this.msginfos = msginfos;
    }

    _write(ostr)
    {
        Dispatcher.UploadEvent2SeqHelper.write(ostr, this.fileinfos);
        Dispatcher.Message2SeqHelper.write(ostr, this.msginfos);
    }

    _read(istr)
    {
        this.fileinfos = Dispatcher.UploadEvent2SeqHelper.read(istr);
        this.msginfos = Dispatcher.Message2SeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$w.defineStruct(Dispatcher.GetOldMsgFileRT, true, true);

const iceC_Dispatcher_MessageOP_ids = [
    "::Dispatcher::FileOP",
    "::Dispatcher::MessageOP",
    "::Ice::Object"
];

Dispatcher.MessageOP = class extends Ice.Object
{
    static get _iceImplements()
    {
        return [
            Dispatcher.FileOP
        ];
    }
};

Dispatcher.MessageOPPrx = class extends Ice.ObjectPrx
{
    static get _implements()
    {
        return [
            Dispatcher.FileOPPrx];
    }
};

Slice$w.defineOperations(Dispatcher.MessageOP, Dispatcher.MessageOPPrx, iceC_Dispatcher_MessageOP_ids, 1,
{
    "opMessage": [, , , , [Dispatcher.MessageRT], [[Dispatcher.Identity], [Dispatcher.MessageT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opMessageReceived": [, , , , , [[Dispatcher.Identity], [Dispatcher.MessageReceivedT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetOldMsgFile": [, , , , [Dispatcher.GetOldMsgFileRT], [[Dispatcher.Identity], [Dispatcher.GetOldMsgFileT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opDelMessage": [, , , , , [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetGroupMsgByEmployeeid": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opAddGroupMsg": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opUpdateGroupMsg": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opDeleteGroupMsg": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSendMessage": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetOldMessage": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGroupMsgAddEmployee": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGroupMsgDelEmployee": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetGroupMsg": [, , , , [7], [[Dispatcher.Identity], [7], [7]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$x = Ice._ModuleRegistry;
const Slice$x = Ice.Slice;

Dispatcher.PrePlanT = class
{
    constructor(dummy = "")
    {
        this.dummy = dummy;
    }

    _write(ostr)
    {
        ostr.writeString(this.dummy);
    }

    _read(istr)
    {
        this.dummy = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$x.defineStruct(Dispatcher.PrePlanT, true, true);

Dispatcher.PrePlanRT = class
{
    constructor(planId = 0, planName = "", planAddr = "", planMeans = "", planNumber = "", planType = 0, dis = "")
    {
        this.planId = planId;
        this.planName = planName;
        this.planAddr = planAddr;
        this.planMeans = planMeans;
        this.planNumber = planNumber;
        this.planType = planType;
        this.dis = dis;
    }

    _write(ostr)
    {
        ostr.writeInt(this.planId);
        ostr.writeString(this.planName);
        ostr.writeString(this.planAddr);
        ostr.writeString(this.planMeans);
        ostr.writeString(this.planNumber);
        ostr.writeInt(this.planType);
        ostr.writeString(this.dis);
    }

    _read(istr)
    {
        this.planId = istr.readInt();
        this.planName = istr.readString();
        this.planAddr = istr.readString();
        this.planMeans = istr.readString();
        this.planNumber = istr.readString();
        this.planType = istr.readInt();
        this.dis = istr.readString();
    }

    static get minWireSize()
    {
        return  13;
    }
};

Slice$x.defineStruct(Dispatcher.PrePlanRT, true, true);

Slice$x.defineSequence(Dispatcher, "PrePlanRSeqHelper", "Dispatcher.PrePlanRT", false);

Dispatcher.PrePlanStartT = class
{
    constructor(planId = 0, passwd = "", caller = "")
    {
        this.planId = planId;
        this.passwd = passwd;
        this.caller = caller;
    }

    _write(ostr)
    {
        ostr.writeInt(this.planId);
        ostr.writeString(this.passwd);
        ostr.writeString(this.caller);
    }

    _read(istr)
    {
        this.planId = istr.readInt();
        this.passwd = istr.readString();
        this.caller = istr.readString();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$x.defineStruct(Dispatcher.PrePlanStartT, true, true);

Dispatcher.PrePlanStartRT = class
{
    constructor(dummy = "")
    {
        this.dummy = dummy;
    }

    _write(ostr)
    {
        ostr.writeString(this.dummy);
    }

    _read(istr)
    {
        this.dummy = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$x.defineStruct(Dispatcher.PrePlanStartRT, true, true);

Dispatcher.PrePlanEvT = class
{
    constructor(planId = 0, state = Dispatcher.PrePlanState.PrePlanStateNone)
    {
        this.planId = planId;
        this.state = state;
    }

    _write(ostr)
    {
        ostr.writeInt(this.planId);
        Dispatcher.PrePlanState._write(ostr, this.state);
    }

    _read(istr)
    {
        this.planId = istr.readInt();
        this.state = Dispatcher.PrePlanState._read(istr);
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$x.defineStruct(Dispatcher.PrePlanEvT, true, true);

Dispatcher.PrePlanStopT = class
{
    constructor(planId = 0, passwd = "")
    {
        this.planId = planId;
        this.passwd = passwd;
    }

    _write(ostr)
    {
        ostr.writeInt(this.planId);
        ostr.writeString(this.passwd);
    }

    _read(istr)
    {
        this.planId = istr.readInt();
        this.passwd = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$x.defineStruct(Dispatcher.PrePlanStopT, true, true);

Dispatcher.PrePlanStopRT = class
{
    constructor(dummy = "")
    {
        this.dummy = dummy;
    }

    _write(ostr)
    {
        ostr.writeString(this.dummy);
    }

    _read(istr)
    {
        this.dummy = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$x.defineStruct(Dispatcher.PrePlanStopRT, true, true);

//
const _ModuleRegistry$y = Ice._ModuleRegistry;
const Slice$y = Ice.Slice;

const iceC_Dispatcher_PrePlanCB_ids = [
    "::Dispatcher::PrePlanCB",
    "::Ice::Object"
];

Dispatcher.PrePlanCB = class extends Ice.Object
{
};

Dispatcher.PrePlanCBPrx = class extends Ice.ObjectPrx
{
};

Slice$y.defineOperations(Dispatcher.PrePlanCB, Dispatcher.PrePlanCBPrx, iceC_Dispatcher_PrePlanCB_ids, 0,
{
    "onPrePlanEv": [, 2, 2, , , [[Dispatcher.PrePlanEvT]], , , , ]
});

//
const _ModuleRegistry$z = Ice._ModuleRegistry;
const Slice$z = Ice.Slice;

const iceC_Dispatcher_PrePlanOP_ids = [
    "::Dispatcher::FileOP",
    "::Dispatcher::MessageOP",
    "::Dispatcher::PrePlanOP",
    "::Ice::Object"
];

Dispatcher.PrePlanOP = class extends Ice.Object
{
    static get _iceImplements()
    {
        return [
            Dispatcher.MessageOP
        ];
    }
};

Dispatcher.PrePlanOPPrx = class extends Ice.ObjectPrx
{
    static get _implements()
    {
        return [
            Dispatcher.MessageOPPrx];
    }
};

Slice$z.defineOperations(Dispatcher.PrePlanOP, Dispatcher.PrePlanOPPrx, iceC_Dispatcher_PrePlanOP_ids, 2,
{
    "opPrePlan": [, , , , ["Dispatcher.PrePlanRSeqHelper"], [[Dispatcher.Identity], [Dispatcher.PrePlanT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPrePlanStart": [, , , , [Dispatcher.PrePlanStartRT], [[Dispatcher.Identity], [Dispatcher.PrePlanStartT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPrePlanStop": [, , , , [Dispatcher.PrePlanStopRT], [[Dispatcher.Identity], [Dispatcher.PrePlanStopT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetPlan": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetPlanType": [, , , , [7], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$A = Ice._ModuleRegistry;
const Slice$A = Ice.Slice;

Dispatcher.PttIndCallInfoElem = class
{
    constructor(group = "", speaker = "", callid = "")
    {
        this.group = group;
        this.speaker = speaker;
        this.callid = callid;
    }

    _write(ostr)
    {
        ostr.writeString(this.group);
        ostr.writeString(this.speaker);
        ostr.writeString(this.callid);
    }

    _read(istr)
    {
        this.group = istr.readString();
        this.speaker = istr.readString();
        this.callid = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$A.defineStruct(Dispatcher.PttIndCallInfoElem, true, true);

Slice$A.defineSequence(Dispatcher, "PttIndCallInfoSeqHelper", "Dispatcher.PttIndCallInfoElem", false);

Dispatcher.G3MessageT = class
{
    constructor(sid = "", employeeid = "", callinfo = null, ip = "", port = 0)
    {
        this.sid = sid;
        this.employeeid = employeeid;
        this.callinfo = callinfo;
        this.ip = ip;
        this.port = port;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.employeeid);
        Dispatcher.PttIndCallInfoSeqHelper.write(ostr, this.callinfo);
        ostr.writeString(this.ip);
        ostr.writeInt(this.port);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.employeeid = istr.readString();
        this.callinfo = Dispatcher.PttIndCallInfoSeqHelper.read(istr);
        this.ip = istr.readString();
        this.port = istr.readInt();
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$A.defineStruct(Dispatcher.G3MessageT, true, true);

Dispatcher.PttIndGroupInfoElem = class
{
    constructor(groupname = "", groupnum = "", grouplevel = 0, ipstatespace = 0, ipheartbeatspace = 0, ip = "", port = 0, thetype = Dispatcher.GroupType.GroupTypeNone)
    {
        this.groupname = groupname;
        this.groupnum = groupnum;
        this.grouplevel = grouplevel;
        this.ipstatespace = ipstatespace;
        this.ipheartbeatspace = ipheartbeatspace;
        this.ip = ip;
        this.port = port;
        this.thetype = thetype;
    }

    _write(ostr)
    {
        ostr.writeString(this.groupname);
        ostr.writeString(this.groupnum);
        ostr.writeInt(this.grouplevel);
        ostr.writeInt(this.ipstatespace);
        ostr.writeInt(this.ipheartbeatspace);
        ostr.writeString(this.ip);
        ostr.writeInt(this.port);
        Dispatcher.GroupType._write(ostr, this.thetype);
    }

    _read(istr)
    {
        this.groupname = istr.readString();
        this.groupnum = istr.readString();
        this.grouplevel = istr.readInt();
        this.ipstatespace = istr.readInt();
        this.ipheartbeatspace = istr.readInt();
        this.ip = istr.readString();
        this.port = istr.readInt();
        this.thetype = Dispatcher.GroupType._read(istr);
    }

    static get minWireSize()
    {
        return  20;
    }
};

Slice$A.defineStruct(Dispatcher.PttIndGroupInfoElem, true, true);

Slice$A.defineSequence(Dispatcher, "PttIndGroupInfoSeqHelper", "Dispatcher.PttIndGroupInfoElem", false);

Dispatcher.PttIndGroupInfoT = class
{
    constructor(seq = null, employeeid = "", ip = "", port = 0, type = "")
    {
        this.seq = seq;
        this.employeeid = employeeid;
        this.ip = ip;
        this.port = port;
        this.type = type;
    }

    _write(ostr)
    {
        Dispatcher.PttIndGroupInfoSeqHelper.write(ostr, this.seq);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.ip);
        ostr.writeInt(this.port);
        ostr.writeString(this.type);
    }

    _read(istr)
    {
        this.seq = Dispatcher.PttIndGroupInfoSeqHelper.read(istr);
        this.employeeid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readInt();
        this.type = istr.readString();
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$A.defineStruct(Dispatcher.PttIndGroupInfoT, true, true);

Dispatcher.PttReqRightRT = class
{
    constructor(employeeid = "", result = "", reason = "")
    {
        this.employeeid = employeeid;
        this.result = result;
        this.reason = reason;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        ostr.writeString(this.result);
        ostr.writeString(this.reason);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.result = istr.readString();
        this.reason = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$A.defineStruct(Dispatcher.PttReqRightRT, true, true);

//
const _ModuleRegistry$B = Ice._ModuleRegistry;
const Slice$B = Ice.Slice;

const iceC_Dispatcher_PttCB_ids = [
    "::Dispatcher::PttCB",
    "::Ice::Object"
];

Dispatcher.PttCB = class extends Ice.Object
{
};

Dispatcher.PttCBPrx = class extends Ice.ObjectPrx
{
};

Slice$B.defineOperations(Dispatcher.PttCB, Dispatcher.PttCBPrx, iceC_Dispatcher_PttCB_ids, 0,
{
    "onG3Message": [, 2, 2, , , [[Dispatcher.G3MessageT]], , , , ],
    "onPttIndGroupInfo": [, 2, 2, , , [[Dispatcher.PttIndGroupInfoT]], , , , ],
    "onPttReqRightR": [, 2, 2, , , [[Dispatcher.PttReqRightRT]], , , , ]
});

//
const _ModuleRegistry$C = Ice._ModuleRegistry;
const Slice$C = Ice.Slice;

Dispatcher.PttReqRightT = class
{
    constructor(groupnum = "", caller = "", messageinfo = "")
    {
        this.groupnum = groupnum;
        this.caller = caller;
        this.messageinfo = messageinfo;
    }

    _write(ostr)
    {
        ostr.writeString(this.groupnum);
        ostr.writeString(this.caller);
        ostr.writeString(this.messageinfo);
    }

    _read(istr)
    {
        this.groupnum = istr.readString();
        this.caller = istr.readString();
        this.messageinfo = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$C.defineStruct(Dispatcher.PttReqRightT, true, true);

Dispatcher.PttReqGroupInfoT = class
{
    constructor(employeeid = "", type = "")
    {
        this.employeeid = employeeid;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        ostr.writeString(this.type);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.type = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$C.defineStruct(Dispatcher.PttReqGroupInfoT, true, true);

Dispatcher.PttReqMemberInfoT = class
{
    constructor(employeeid = "", groupnum = "")
    {
        this.employeeid = employeeid;
        this.groupnum = groupnum;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        ostr.writeString(this.groupnum);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.groupnum = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$C.defineStruct(Dispatcher.PttReqMemberInfoT, true, true);

Dispatcher.PttReqMemberInfoRElem = class
{
    constructor(num = "", name = "", state = Dispatcher.CallState.CallStateNone)
    {
        this.num = num;
        this.name = name;
        this.state = state;
    }

    _write(ostr)
    {
        ostr.writeString(this.num);
        ostr.writeString(this.name);
        Dispatcher.CallState._write(ostr, this.state);
    }

    _read(istr)
    {
        this.num = istr.readString();
        this.name = istr.readString();
        this.state = Dispatcher.CallState._read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$C.defineStruct(Dispatcher.PttReqMemberInfoRElem, true, true);

Slice$C.defineSequence(Dispatcher, "PttReqMemberInfoRSeqHelper", "Dispatcher.PttReqMemberInfoRElem", false);

Dispatcher.PttReqMemberInfoRT = class
{
    constructor(groupnum = "", employeeid = "", memberinfo = null)
    {
        this.groupnum = groupnum;
        this.employeeid = employeeid;
        this.memberinfo = memberinfo;
    }

    _write(ostr)
    {
        ostr.writeString(this.groupnum);
        ostr.writeString(this.employeeid);
        Dispatcher.PttReqMemberInfoRSeqHelper.write(ostr, this.memberinfo);
    }

    _read(istr)
    {
        this.groupnum = istr.readString();
        this.employeeid = istr.readString();
        this.memberinfo = Dispatcher.PttReqMemberInfoRSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$C.defineStruct(Dispatcher.PttReqMemberInfoRT, true, true);

Dispatcher.PttReqMemberInfoT1 = class
{
    constructor(sid = "", groupnum = "", employeeid = "")
    {
        this.sid = sid;
        this.groupnum = groupnum;
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.groupnum);
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.groupnum = istr.readString();
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$C.defineStruct(Dispatcher.PttReqMemberInfoT1, true, true);

Dispatcher.PttReqMemberInfoRElem1 = class
{
    constructor(employeeid = "", name = "", type = 8, level = 10, state = Dispatcher.CallState.CallStateNone, stateDecorate = "")
    {
        this.employeeid = employeeid;
        this.name = name;
        this.type = type;
        this.level = level;
        this.state = state;
        this.stateDecorate = stateDecorate;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        ostr.writeString(this.name);
        ostr.writeInt(this.type);
        ostr.writeInt(this.level);
        Dispatcher.CallState._write(ostr, this.state);
        ostr.writeString(this.stateDecorate);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.name = istr.readString();
        this.type = istr.readInt();
        this.level = istr.readInt();
        this.state = Dispatcher.CallState._read(istr);
        this.stateDecorate = istr.readString();
    }

    static get minWireSize()
    {
        return  12;
    }
};

Slice$C.defineStruct(Dispatcher.PttReqMemberInfoRElem1, true, true);

Slice$C.defineSequence(Dispatcher, "PttReqMemberInfoRSeq1Helper", "Dispatcher.PttReqMemberInfoRElem1", false);

Dispatcher.PttReqMemberInfoRT1 = class
{
    constructor(groupnum = "", employeeid = "", memberinfo = null)
    {
        this.groupnum = groupnum;
        this.employeeid = employeeid;
        this.memberinfo = memberinfo;
    }

    _write(ostr)
    {
        ostr.writeString(this.groupnum);
        ostr.writeString(this.employeeid);
        Dispatcher.PttReqMemberInfoRSeq1Helper.write(ostr, this.memberinfo);
    }

    _read(istr)
    {
        this.groupnum = istr.readString();
        this.employeeid = istr.readString();
        this.memberinfo = Dispatcher.PttReqMemberInfoRSeq1Helper.read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$C.defineStruct(Dispatcher.PttReqMemberInfoRT1, true, true);

Dispatcher.PttTimeOutT = class
{
    constructor(cid = "", MaxQueue = "", IdelTimeout = "", SpeakTimeout = "", RefreshStateSpace = "")
    {
        this.cid = cid;
        this.MaxQueue = MaxQueue;
        this.IdelTimeout = IdelTimeout;
        this.SpeakTimeout = SpeakTimeout;
        this.RefreshStateSpace = RefreshStateSpace;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.MaxQueue);
        ostr.writeString(this.IdelTimeout);
        ostr.writeString(this.SpeakTimeout);
        ostr.writeString(this.RefreshStateSpace);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.MaxQueue = istr.readString();
        this.IdelTimeout = istr.readString();
        this.SpeakTimeout = istr.readString();
        this.RefreshStateSpace = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$C.defineStruct(Dispatcher.PttTimeOutT, true, true);

const iceC_Dispatcher_PttOP_ids = [
    "::Dispatcher::PttOP",
    "::Ice::Object"
];

Dispatcher.PttOP = class extends Ice.Object
{
};

Dispatcher.PttOPPrx = class extends Ice.ObjectPrx
{
};

Slice$C.defineOperations(Dispatcher.PttOP, Dispatcher.PttOPPrx, iceC_Dispatcher_PttOP_ids, 0,
{
    "opPttReqMemberInfo": [, , , , [Dispatcher.PttReqMemberInfoRT], [[Dispatcher.Identity], [Dispatcher.PttReqMemberInfoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPttReqMemberInfo1": [, , , , [Dispatcher.PttReqMemberInfoRT1], [[Dispatcher.Identity], [Dispatcher.PttReqMemberInfoT1]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPttReqRight": [, , , , [Dispatcher.CommonRequestT], [[Dispatcher.Identity], [Dispatcher.PttReqRightT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSetIntercomTimeOutInfo": [, , , , [3], [[Dispatcher.Identity], [Dispatcher.PttTimeOutT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetIntercomTimeOutInfo": [, , , , [Dispatcher.PttTimeOutT], [[Dispatcher.Identity], [7]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPttReqGroupInfo": [, 2, 2, , , [[Dispatcher.Identity], [Dispatcher.PttReqGroupInfoT]], , , , ]
});

const iceC_Dispatcher_PttSB_ids = [
    "::Dispatcher::PttSB",
    "::Ice::Object"
];

Dispatcher.PttSB = class extends Ice.Object
{
};

Dispatcher.PttSBPrx = class extends Ice.ObjectPrx
{
};

Slice$C.defineOperations(Dispatcher.PttSB, Dispatcher.PttSBPrx, iceC_Dispatcher_PttSB_ids, 0);

//
const _ModuleRegistry$D = Ice._ModuleRegistry;
const Slice$D = Ice.Slice;

let Dispatcher$3 = _ModuleRegistry$D.module("Dispatcher");

Dispatcher$3.ContentInfo = class
{
    constructor(strContent = "")
    {
        this.strContent = strContent;
    }

    _write(ostr)
    {
        ostr.writeString(this.strContent);
    }

    _read(istr)
    {
        this.strContent = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$D.defineStruct(Dispatcher$3.ContentInfo, true, true);

Slice$D.defineSequence(Dispatcher$3, "SubContentSeqHelper", "Dispatcher.ContentInfo", false);

Dispatcher$3.SubInfo = class
{
    constructor(subHeader = "", subContents = null)
    {
        this.subHeader = subHeader;
        this.subContents = subContents;
    }

    _write(ostr)
    {
        ostr.writeString(this.subHeader);
        Dispatcher$3.SubContentSeqHelper.write(ostr, this.subContents);
    }

    _read(istr)
    {
        this.subHeader = istr.readString();
        this.subContents = Dispatcher$3.SubContentSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$D.defineStruct(Dispatcher$3.SubInfo, true, true);

Slice$D.defineSequence(Dispatcher$3, "SubInfoSeqHelper", "Dispatcher.SubInfo", false);

Dispatcher$3.SubInfos = class
{
    constructor(Infos = null)
    {
        this.Infos = Infos;
    }

    _write(ostr)
    {
        Dispatcher$3.SubInfoSeqHelper.write(ostr, this.Infos);
    }

    _read(istr)
    {
        this.Infos = Dispatcher$3.SubInfoSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$D.defineStruct(Dispatcher$3.SubInfos, true, true);

Dispatcher$3.PubInfo = class
{
    constructor(subHeader = "", subMsg = "")
    {
        this.subHeader = subHeader;
        this.subMsg = subMsg;
    }

    _write(ostr)
    {
        ostr.writeString(this.subHeader);
        ostr.writeString(this.subMsg);
    }

    _read(istr)
    {
        this.subHeader = istr.readString();
        this.subMsg = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$D.defineStruct(Dispatcher$3.PubInfo, true, true);

Dispatcher$3.FixReceiveInfo = class
{
    constructor(subHeader = "", subMsg = "", receive = "")
    {
        this.subHeader = subHeader;
        this.subMsg = subMsg;
        this.receive = receive;
    }

    _write(ostr)
    {
        ostr.writeString(this.subHeader);
        ostr.writeString(this.subMsg);
        ostr.writeString(this.receive);
    }

    _read(istr)
    {
        this.subHeader = istr.readString();
        this.subMsg = istr.readString();
        this.receive = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$D.defineStruct(Dispatcher$3.FixReceiveInfo, true, true);

Dispatcher$3.OnReceiveHeartBeat = class
{
    constructor(number = "", issub = false)
    {
        this.number = number;
        this.issub = issub;
    }

    _write(ostr)
    {
        ostr.writeString(this.number);
        ostr.writeBool(this.issub);
    }

    _read(istr)
    {
        this.number = istr.readString();
        this.issub = istr.readBool();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$D.defineStruct(Dispatcher$3.OnReceiveHeartBeat, true, true);

//
const _ModuleRegistry$E = Ice._ModuleRegistry;
const Slice$E = Ice.Slice;

const iceC_Dispatcher_PublishCB_ids = [
    "::Dispatcher::PublishCB",
    "::Ice::Object"
];

Dispatcher.PublishCB = class extends Ice.Object
{
};

Dispatcher.PublishCBPrx = class extends Ice.ObjectPrx
{
};

Slice$E.defineOperations(Dispatcher.PublishCB, Dispatcher.PublishCBPrx, iceC_Dispatcher_PublishCB_ids, 0,
{
    "onReceivePublishMsg": [, 2, 2, , , [[Dispatcher.PubInfo]], , , , ],
    "onReceiveFixReceiveMsg": [, 2, 2, , , [[Dispatcher.FixReceiveInfo]], , , , ],
    "onReceiveHB": [, 2, 2, , , [[Dispatcher.OnReceiveHeartBeat]], , , , ]
});

//
const _ModuleRegistry$F = Ice._ModuleRegistry;
const Slice$F = Ice.Slice;

const iceC_Dispatcher_PublishOP_ids = [
    "::Dispatcher::PublishOP",
    "::Ice::Object"
];

Dispatcher.PublishOP = class extends Ice.Object
{
};

Dispatcher.PublishOPPrx = class extends Ice.ObjectPrx
{
};

Slice$F.defineOperations(Dispatcher.PublishOP, Dispatcher.PublishOPPrx, iceC_Dispatcher_PublishOP_ids, 0,
{
    "opPublishInfo": [, , , , , [[Dispatcher.Identity], [Dispatcher.SubInfos]], , , , ],
    "opUnPublishInfo": [, , , , , [[Dispatcher.Identity]], , , , ],
    "opPublishHB": [, , , , [1], [[Dispatcher.Identity], [3]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$G = Ice._ModuleRegistry;
const Slice$G = Ice.Slice;

Dispatcher.StationLineT = class
{
    constructor(stationid = -1, Employeeid = "")
    {
        this.stationid = stationid;
        this.Employeeid = Employeeid;
    }

    _write(ostr)
    {
        ostr.writeInt(this.stationid);
        ostr.writeString(this.Employeeid);
    }

    _read(istr)
    {
        this.stationid = istr.readInt();
        this.Employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$G.defineStruct(Dispatcher.StationLineT, true, true);

Dispatcher.StationLineRT = class
{
    constructor(LineID = 0, LineName = "", StationID = 0, Description = "")
    {
        this.LineID = LineID;
        this.LineName = LineName;
        this.StationID = StationID;
        this.Description = Description;
    }

    _write(ostr)
    {
        ostr.writeInt(this.LineID);
        ostr.writeString(this.LineName);
        ostr.writeInt(this.StationID);
        ostr.writeString(this.Description);
    }

    _read(istr)
    {
        this.LineID = istr.readInt();
        this.LineName = istr.readString();
        this.StationID = istr.readInt();
        this.Description = istr.readString();
    }

    static get minWireSize()
    {
        return  10;
    }
};

Slice$G.defineStruct(Dispatcher.StationLineRT, true, true);

Slice$G.defineSequence(Dispatcher, "StationLineRTSeqHelper", "Dispatcher.StationLineRT", false);

Dispatcher.StationT = class
{
    constructor(Employeeid = "")
    {
        this.Employeeid = Employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.Employeeid);
    }

    _read(istr)
    {
        this.Employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$G.defineStruct(Dispatcher.StationT, true, true);

Dispatcher.StationRT = class
{
    constructor(StationID = 0, StationName = "", StationDes = "")
    {
        this.StationID = StationID;
        this.StationName = StationName;
        this.StationDes = StationDes;
    }

    _write(ostr)
    {
        ostr.writeInt(this.StationID);
        ostr.writeString(this.StationName);
        ostr.writeString(this.StationDes);
    }

    _read(istr)
    {
        this.StationID = istr.readInt();
        this.StationName = istr.readString();
        this.StationDes = istr.readString();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$G.defineStruct(Dispatcher.StationRT, true, true);

Slice$G.defineSequence(Dispatcher, "StationRTSeqHelper", "Dispatcher.StationRT", false);

const iceC_Dispatcher_RailWayOP_ids = [
    "::Dispatcher::RailWayOP",
    "::Ice::Object"
];

Dispatcher.RailWayOP = class extends Ice.Object
{
};

Dispatcher.RailWayOPPrx = class extends Ice.ObjectPrx
{
};

Slice$G.defineOperations(Dispatcher.RailWayOP, Dispatcher.RailWayOPPrx, iceC_Dispatcher_RailWayOP_ids, 0,
{
    "opGetStationLine": [, , , , ["Dispatcher.StationLineRTSeqHelper"], [[Dispatcher.Identity], [Dispatcher.StationLineT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetStation": [, , , , [Dispatcher.StationRT], [[Dispatcher.Identity], [Dispatcher.StationT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetAllStation": [, , , , ["Dispatcher.StationRTSeqHelper"], [[Dispatcher.Identity]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$H = Ice._ModuleRegistry;
const Slice$H = Ice.Slice;

Dispatcher.ForceLogoutT = class
{
    constructor(code = Dispatcher.ECode.ECodeNone)
    {
        this.code = code;
    }

    _write(ostr)
    {
        Dispatcher.ECode._write(ostr, this.code);
    }

    _read(istr)
    {
        this.code = Dispatcher.ECode._read(istr);
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$H.defineStruct(Dispatcher.ForceLogoutT, true, true);

const iceC_Dispatcher_RegisterCB_ids = [
    "::Dispatcher::RegisterCB",
    "::Ice::Object"
];

Dispatcher.RegisterCB = class extends Ice.Object
{
};

Dispatcher.RegisterCBPrx = class extends Ice.ObjectPrx
{
};

Slice$H.defineOperations(Dispatcher.RegisterCB, Dispatcher.RegisterCBPrx, iceC_Dispatcher_RegisterCB_ids, 0,
{
    "onForceLogout": [, 2, 2, , , [[Dispatcher.ForceLogoutT]], , , , ]
});

const iceC_Dispatcher_RegisterCBSub_ids = [
    "::Dispatcher::RegisterCBSub",
    "::Ice::Object"
];

Dispatcher.RegisterCBSub = class extends Ice.Object
{
};

Dispatcher.RegisterCBSubPrx = class extends Ice.ObjectPrx
{
};

Slice$H.defineOperations(Dispatcher.RegisterCBSub, Dispatcher.RegisterCBSubPrx, iceC_Dispatcher_RegisterCBSub_ids, 0);

//
const _ModuleRegistry$I = Ice._ModuleRegistry;
const Slice$I = Ice.Slice;

Dispatcher.LoginT = class
{
    constructor(pass = "", ip = "", interval = 0, type = Dispatcher.UserType.UserTypeNone)
    {
        this.pass = pass;
        this.ip = ip;
        this.interval = interval;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.pass);
        ostr.writeString(this.ip);
        ostr.writeInt(this.interval);
        Dispatcher.UserType._write(ostr, this.type);
    }

    _read(istr)
    {
        this.pass = istr.readString();
        this.ip = istr.readString();
        this.interval = istr.readInt();
        this.type = Dispatcher.UserType._read(istr);
    }

    static get minWireSize()
    {
        return  7;
    }
};

Slice$I.defineStruct(Dispatcher.LoginT, true, true);

Dispatcher.LoginRT = class
{
    constructor(firstlogin = false, sptpsw = "", dnsprefix = "")
    {
        this.firstlogin = firstlogin;
        this.sptpsw = sptpsw;
        this.dnsprefix = dnsprefix;
    }

    _write(ostr)
    {
        ostr.writeBool(this.firstlogin);
        ostr.writeString(this.sptpsw);
        ostr.writeString(this.dnsprefix);
    }

    _read(istr)
    {
        this.firstlogin = istr.readBool();
        this.sptpsw = istr.readString();
        this.dnsprefix = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$I.defineStruct(Dispatcher.LoginRT, true, true);

Dispatcher.LogoutT = class
{
    constructor(dummy = "")
    {
        this.dummy = dummy;
    }

    _write(ostr)
    {
        ostr.writeString(this.dummy);
    }

    _read(istr)
    {
        this.dummy = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$I.defineStruct(Dispatcher.LogoutT, true, true);

Dispatcher.LogoutRT = class
{
    constructor(dummy = "")
    {
        this.dummy = dummy;
    }

    _write(ostr)
    {
        ostr.writeString(this.dummy);
    }

    _read(istr)
    {
        this.dummy = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$I.defineStruct(Dispatcher.LogoutRT, true, true);

Dispatcher.ReloginT = class
{
    constructor(state = 0, ip = "")
    {
        this.state = state;
        this.ip = ip;
    }

    _write(ostr)
    {
        ostr.writeInt(this.state);
        ostr.writeString(this.ip);
    }

    _read(istr)
    {
        this.state = istr.readInt();
        this.ip = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$I.defineStruct(Dispatcher.ReloginT, true, true);

Dispatcher.HeartbeatRT = class
{
    constructor(dummy = 0)
    {
        this.dummy = dummy;
    }

    _write(ostr)
    {
        ostr.writeInt(this.dummy);
    }

    _read(istr)
    {
        this.dummy = istr.readInt();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$I.defineStruct(Dispatcher.HeartbeatRT, true, false);

Dispatcher.ChangePassWordT = class
{
    constructor(Employeeid = "", oldPassWord = "", newPassWord = "")
    {
        this.Employeeid = Employeeid;
        this.oldPassWord = oldPassWord;
        this.newPassWord = newPassWord;
    }

    _write(ostr)
    {
        ostr.writeString(this.Employeeid);
        ostr.writeString(this.oldPassWord);
        ostr.writeString(this.newPassWord);
    }

    _read(istr)
    {
        this.Employeeid = istr.readString();
        this.oldPassWord = istr.readString();
        this.newPassWord = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$I.defineStruct(Dispatcher.ChangePassWordT, true, true);

Dispatcher.ChangePassWordRT = class
{
    constructor(Employeeid = "", issuccess = false)
    {
        this.Employeeid = Employeeid;
        this.issuccess = issuccess;
    }

    _write(ostr)
    {
        ostr.writeString(this.Employeeid);
        ostr.writeBool(this.issuccess);
    }

    _read(istr)
    {
        this.Employeeid = istr.readString();
        this.issuccess = istr.readBool();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$I.defineStruct(Dispatcher.ChangePassWordRT, true, true);

Dispatcher.ForceKickOutT = class
{
    constructor(Employeeid = "")
    {
        this.Employeeid = Employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.Employeeid);
    }

    _read(istr)
    {
        this.Employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$I.defineStruct(Dispatcher.ForceKickOutT, true, true);

const iceC_Dispatcher_RegisterOP_ids = [
    "::Dispatcher::RegisterOP",
    "::Ice::Object"
];

Dispatcher.RegisterOP = class extends Ice.Object
{
};

Dispatcher.RegisterOPPrx = class extends Ice.ObjectPrx
{
};

Slice$I.defineOperations(Dispatcher.RegisterOP, Dispatcher.RegisterOPPrx, iceC_Dispatcher_RegisterOP_ids, 0,
{
    "opLogin": [, , , , [Dispatcher.LoginRT], [[Dispatcher.Identity], [Dispatcher.LoginT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opLogout": [, , , , [Dispatcher.LogoutRT], [[Dispatcher.Identity], [Dispatcher.LogoutT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opRelogin": [, 2, 2, , , [[Dispatcher.Identity], [Dispatcher.ReloginT]], , , , ],
    "opHeartbeat": [, , , , [Dispatcher.HeartbeatRT], [[Dispatcher.Identity], [3]], ,
    [
        Dispatcher.Error
    ], , ],
    "opChangePassWord": [, , , , [Dispatcher.ChangePassWordRT], [[Dispatcher.Identity], [Dispatcher.ChangePassWordT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opForceKickOut": [, , , , [1], [[Dispatcher.Identity], [Dispatcher.ForceKickOutT]], ,
    [
        Dispatcher.Error
    ], , ]
});

const iceC_Dispatcher_RegisterSB_ids = [
    "::Dispatcher::RegisterSB",
    "::Ice::Object"
];

Dispatcher.RegisterSB = class extends Ice.Object
{
};

Dispatcher.RegisterSBPrx = class extends Ice.ObjectPrx
{
};

Slice$I.defineOperations(Dispatcher.RegisterSB, Dispatcher.RegisterSBPrx, iceC_Dispatcher_RegisterSB_ids, 0);

//
const _ModuleRegistry$J = Ice._ModuleRegistry;
const Slice$J = Ice.Slice;

Dispatcher.Agent = class
{
    constructor(employeeid = "", state = Dispatcher.RegisterState.RegisterStateNone, othernumber = "", othername = "", ip = "", DNSprefix = "")
    {
        this.employeeid = employeeid;
        this.state = state;
        this.othernumber = othernumber;
        this.othername = othername;
        this.ip = ip;
        this.DNSprefix = DNSprefix;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        Dispatcher.RegisterState._write(ostr, this.state);
        ostr.writeString(this.othernumber);
        ostr.writeString(this.othername);
        ostr.writeString(this.ip);
        ostr.writeString(this.DNSprefix);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.state = Dispatcher.RegisterState._read(istr);
        this.othernumber = istr.readString();
        this.othername = istr.readString();
        this.ip = istr.readString();
        this.DNSprefix = istr.readString();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$J.defineStruct(Dispatcher.Agent, true, true);

Slice$J.defineSequence(Dispatcher, "AgentSeqHelper", "Dispatcher.Agent", false);

const iceC_Dispatcher_StateCB_ids = [
    "::Dispatcher::StateCB",
    "::Ice::Object"
];

Dispatcher.StateCB = class extends Ice.Object
{
};

Dispatcher.StateCBPrx = class extends Ice.ObjectPrx
{
};

Slice$J.defineOperations(Dispatcher.StateCB, Dispatcher.StateCBPrx, iceC_Dispatcher_StateCB_ids, 0,
{
    "onAgentState": [, 2, 2, , , [["Dispatcher.AgentSeqHelper"]], , , , ]
});

//
const _ModuleRegistry$K = Ice._ModuleRegistry;
const Slice$K = Ice.Slice;

Dispatcher.VideoBugT = class
{
    constructor(cid = "", ip = "", port = "", srcid = "", dstid = "", state = Dispatcher.VBugStateType.VBugStateTypeNone)
    {
        this.cid = cid;
        this.ip = ip;
        this.port = port;
        this.srcid = srcid;
        this.dstid = dstid;
        this.state = state;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.srcid);
        ostr.writeString(this.dstid);
        Dispatcher.VBugStateType._write(ostr, this.state);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.srcid = istr.readString();
        this.dstid = istr.readString();
        this.state = Dispatcher.VBugStateType._read(istr);
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$K.defineStruct(Dispatcher.VideoBugT, true, true);

Dispatcher.VideoBugT1 = class
{
    constructor(cid = "", ip = "", port = "", srcid = "", dstid = "", audiocodec = "", videocodec = "", state = Dispatcher.VBugStateType.VBugStateTypeNone)
    {
        this.cid = cid;
        this.ip = ip;
        this.port = port;
        this.srcid = srcid;
        this.dstid = dstid;
        this.audiocodec = audiocodec;
        this.videocodec = videocodec;
        this.state = state;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.srcid);
        ostr.writeString(this.dstid);
        ostr.writeString(this.audiocodec);
        ostr.writeString(this.videocodec);
        Dispatcher.VBugStateType._write(ostr, this.state);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.srcid = istr.readString();
        this.dstid = istr.readString();
        this.audiocodec = istr.readString();
        this.videocodec = istr.readString();
        this.state = Dispatcher.VBugStateType._read(istr);
    }

    static get minWireSize()
    {
        return  8;
    }
};

Slice$K.defineStruct(Dispatcher.VideoBugT1, true, true);

Dispatcher.PlayVideoEvT = class
{
    constructor(cid = "", uuid = "", type = Dispatcher.PlayVideoType.PlayVideoTypeNone)
    {
        this.cid = cid;
        this.uuid = uuid;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.uuid);
        Dispatcher.PlayVideoType._write(ostr, this.type);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.uuid = istr.readString();
        this.type = Dispatcher.PlayVideoType._read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$K.defineStruct(Dispatcher.PlayVideoEvT, true, true);

const iceC_Dispatcher_VideoCB_ids = [
    "::Dispatcher::VideoCB",
    "::Ice::Object"
];

Dispatcher.VideoCB = class extends Ice.Object
{
};

Dispatcher.VideoCBPrx = class extends Ice.ObjectPrx
{
};

Slice$K.defineOperations(Dispatcher.VideoCB, Dispatcher.VideoCBPrx, iceC_Dispatcher_VideoCB_ids, 0,
{
    "onVideoBug": [, 2, 2, , , [[Dispatcher.VideoBugT]], , , , ],
    "onVideoBug1": [, 2, 2, , , [[Dispatcher.VideoBugT1]], , , , ],
    "onPlayVideoEv": [, 2, 2, , , [[Dispatcher.PlayVideoEvT]], , , , ]
});

//
const _ModuleRegistry$L = Ice._ModuleRegistry;
const Slice$L = Ice.Slice;

Dispatcher.VideoBugStartT = class
{
    constructor(dstid = "", ip = "", port = "", codec = "", srcid = "")
    {
        this.dstid = dstid;
        this.ip = ip;
        this.port = port;
        this.codec = codec;
        this.srcid = srcid;
    }

    _write(ostr)
    {
        ostr.writeString(this.dstid);
        ostr.writeString(this.ip);
        ostr.writeString(this.port);
        ostr.writeString(this.codec);
        ostr.writeString(this.srcid);
    }

    _read(istr)
    {
        this.dstid = istr.readString();
        this.ip = istr.readString();
        this.port = istr.readString();
        this.codec = istr.readString();
        this.srcid = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$L.defineStruct(Dispatcher.VideoBugStartT, true, true);

Dispatcher.VideoBugStartRT = class
{
    constructor(cid = "", srcid = "")
    {
        this.cid = cid;
        this.srcid = srcid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.srcid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.srcid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$L.defineStruct(Dispatcher.VideoBugStartRT, true, true);

Dispatcher.VideoBugEndT = class
{
    constructor(cid = "", srcid = "")
    {
        this.cid = cid;
        this.srcid = srcid;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.srcid);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.srcid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$L.defineStruct(Dispatcher.VideoBugEndT, true, true);

Dispatcher.VideoBugEndRT = class
{
    constructor(srcid = "")
    {
        this.srcid = srcid;
    }

    _write(ostr)
    {
        ostr.writeString(this.srcid);
    }

    _read(istr)
    {
        this.srcid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$L.defineStruct(Dispatcher.VideoBugEndRT, true, true);

Dispatcher.PlayVideoT = class
{
    constructor(cid = "", fid = "", state = Dispatcher.PlayVideoType.PlayVideoTypeNone)
    {
        this.cid = cid;
        this.fid = fid;
        this.state = state;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.fid);
        Dispatcher.PlayVideoType._write(ostr, this.state);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.fid = istr.readString();
        this.state = Dispatcher.PlayVideoType._read(istr);
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$L.defineStruct(Dispatcher.PlayVideoT, true, true);

Dispatcher.PlayVideoRT = class
{
    constructor(code = 0)
    {
        this.code = code;
    }

    _write(ostr)
    {
        ostr.writeInt(this.code);
    }

    _read(istr)
    {
        this.code = istr.readInt();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$L.defineStruct(Dispatcher.PlayVideoRT, true, false);

Dispatcher.VideoInfoT = class
{
    constructor(dummy = "")
    {
        this.dummy = dummy;
    }

    _write(ostr)
    {
        ostr.writeString(this.dummy);
    }

    _read(istr)
    {
        this.dummy = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$L.defineStruct(Dispatcher.VideoInfoT, true, true);

Dispatcher.VideoChannelInfo = class
{
    constructor(ID = 0, ChannelNum = 0, bindEmployeeID = "", ChannelName = "")
    {
        this.ID = ID;
        this.ChannelNum = ChannelNum;
        this.bindEmployeeID = bindEmployeeID;
        this.ChannelName = ChannelName;
    }

    _write(ostr)
    {
        ostr.writeInt(this.ID);
        ostr.writeInt(this.ChannelNum);
        ostr.writeString(this.bindEmployeeID);
        ostr.writeString(this.ChannelName);
    }

    _read(istr)
    {
        this.ID = istr.readInt();
        this.ChannelNum = istr.readInt();
        this.bindEmployeeID = istr.readString();
        this.ChannelName = istr.readString();
    }

    static get minWireSize()
    {
        return  10;
    }
};

Slice$L.defineStruct(Dispatcher.VideoChannelInfo, true, true);

Slice$L.defineSequence(Dispatcher, "VideoChannelsHelper", "Dispatcher.VideoChannelInfo", false);

Dispatcher.VideoInfoElem = class
{
    constructor(id = 0, videoIP = "", videoport = "", user = "", password = "", showname = "", type = Dispatcher.emVideoDeviceType.VDTNONE, channels = null)
    {
        this.id = id;
        this.videoIP = videoIP;
        this.videoport = videoport;
        this.user = user;
        this.password = password;
        this.showname = showname;
        this.type = type;
        this.channels = channels;
    }

    _write(ostr)
    {
        ostr.writeInt(this.id);
        ostr.writeString(this.videoIP);
        ostr.writeString(this.videoport);
        ostr.writeString(this.user);
        ostr.writeString(this.password);
        ostr.writeString(this.showname);
        Dispatcher.emVideoDeviceType._write(ostr, this.type);
        Dispatcher.VideoChannelsHelper.write(ostr, this.channels);
    }

    _read(istr)
    {
        this.id = istr.readInt();
        this.videoIP = istr.readString();
        this.videoport = istr.readString();
        this.user = istr.readString();
        this.password = istr.readString();
        this.showname = istr.readString();
        this.type = Dispatcher.emVideoDeviceType._read(istr);
        this.channels = Dispatcher.VideoChannelsHelper.read(istr);
    }

    static get minWireSize()
    {
        return  11;
    }
};

Slice$L.defineStruct(Dispatcher.VideoInfoElem, true, true);

Slice$L.defineSequence(Dispatcher, "VideoInfoSeqHelper", "Dispatcher.VideoInfoElem", false);

Dispatcher.VideoInfoRT = class
{
    constructor(vseq = null)
    {
        this.vseq = vseq;
    }

    _write(ostr)
    {
        Dispatcher.VideoInfoSeqHelper.write(ostr, this.vseq);
    }

    _read(istr)
    {
        this.vseq = Dispatcher.VideoInfoSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$L.defineStruct(Dispatcher.VideoInfoRT, true, true);

Dispatcher.VideoChannelInfo1 = class
{
    constructor(ID = 0, ChannelNum = 0, bindEmployeeID = "", ChannelName = "")
    {
        this.ID = ID;
        this.ChannelNum = ChannelNum;
        this.bindEmployeeID = bindEmployeeID;
        this.ChannelName = ChannelName;
    }

    _write(ostr)
    {
        ostr.writeInt(this.ID);
        ostr.writeInt(this.ChannelNum);
        ostr.writeString(this.bindEmployeeID);
        ostr.writeString(this.ChannelName);
    }

    _read(istr)
    {
        this.ID = istr.readInt();
        this.ChannelNum = istr.readInt();
        this.bindEmployeeID = istr.readString();
        this.ChannelName = istr.readString();
    }

    static get minWireSize()
    {
        return  10;
    }
};

Slice$L.defineStruct(Dispatcher.VideoChannelInfo1, true, true);

Slice$L.defineSequence(Dispatcher, "VideoChannels1Helper", "Dispatcher.VideoChannelInfo1", false);

Dispatcher.VideoInfoElem1 = class
{
    constructor(id = 0, videoIP = "", videoport = "", user = "", password = "", showname = "", type = 0, channels = null)
    {
        this.id = id;
        this.videoIP = videoIP;
        this.videoport = videoport;
        this.user = user;
        this.password = password;
        this.showname = showname;
        this.type = type;
        this.channels = channels;
    }

    _write(ostr)
    {
        ostr.writeInt(this.id);
        ostr.writeString(this.videoIP);
        ostr.writeString(this.videoport);
        ostr.writeString(this.user);
        ostr.writeString(this.password);
        ostr.writeString(this.showname);
        ostr.writeInt(this.type);
        Dispatcher.VideoChannels1Helper.write(ostr, this.channels);
    }

    _read(istr)
    {
        this.id = istr.readInt();
        this.videoIP = istr.readString();
        this.videoport = istr.readString();
        this.user = istr.readString();
        this.password = istr.readString();
        this.showname = istr.readString();
        this.type = istr.readInt();
        this.channels = Dispatcher.VideoChannels1Helper.read(istr);
    }

    static get minWireSize()
    {
        return  14;
    }
};

Slice$L.defineStruct(Dispatcher.VideoInfoElem1, true, true);

Slice$L.defineSequence(Dispatcher, "VideoInfoSeq1Helper", "Dispatcher.VideoInfoElem1", false);

Dispatcher.VideoInfoRT1 = class
{
    constructor(vseq = null)
    {
        this.vseq = vseq;
    }

    _write(ostr)
    {
        Dispatcher.VideoInfoSeq1Helper.write(ostr, this.vseq);
    }

    _read(istr)
    {
        this.vseq = Dispatcher.VideoInfoSeq1Helper.read(istr);
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$L.defineStruct(Dispatcher.VideoInfoRT1, true, true);

Dispatcher.VideoControlType = Slice$L.defineEnum([
    ['VideoControlTypeX', 0], ['VideoControlTypeY', 1], ['VideoControlTypeZoom', 2], ['VideoControlTypeLR', 3], ['VideoControlTypeFocus', 4]]);

Dispatcher.CameraNumberControl = class
{
    constructor(number = "", ctype = Dispatcher.VideoControlType.VideoControlTypeX, IsStart = true, TimeOut = 0, step = 0.0)
    {
        this.number = number;
        this.ctype = ctype;
        this.IsStart = IsStart;
        this.TimeOut = TimeOut;
        this.step = step;
    }

    _write(ostr)
    {
        ostr.writeString(this.number);
        Dispatcher.VideoControlType._write(ostr, this.ctype);
        ostr.writeBool(this.IsStart);
        ostr.writeInt(this.TimeOut);
        ostr.writeFloat(this.step);
    }

    _read(istr)
    {
        this.number = istr.readString();
        this.ctype = Dispatcher.VideoControlType._read(istr);
        this.IsStart = istr.readBool();
        this.TimeOut = istr.readInt();
        this.step = istr.readFloat();
    }

    static get minWireSize()
    {
        return  11;
    }
};

Slice$L.defineStruct(Dispatcher.CameraNumberControl, false, true);

Dispatcher.CameraIPControl = class
{
    constructor(strip = "", strport = "", struser = "", strpwd = "", channel = -1, ctype = Dispatcher.VideoControlType.VideoControlTypeX, IsStart = true, TimeOut = 0, step = 0.0)
    {
        this.strip = strip;
        this.strport = strport;
        this.struser = struser;
        this.strpwd = strpwd;
        this.channel = channel;
        this.ctype = ctype;
        this.IsStart = IsStart;
        this.TimeOut = TimeOut;
        this.step = step;
    }

    _write(ostr)
    {
        ostr.writeString(this.strip);
        ostr.writeString(this.strport);
        ostr.writeString(this.struser);
        ostr.writeString(this.strpwd);
        ostr.writeInt(this.channel);
        Dispatcher.VideoControlType._write(ostr, this.ctype);
        ostr.writeBool(this.IsStart);
        ostr.writeInt(this.TimeOut);
        ostr.writeFloat(this.step);
    }

    _read(istr)
    {
        this.strip = istr.readString();
        this.strport = istr.readString();
        this.struser = istr.readString();
        this.strpwd = istr.readString();
        this.channel = istr.readInt();
        this.ctype = Dispatcher.VideoControlType._read(istr);
        this.IsStart = istr.readBool();
        this.TimeOut = istr.readInt();
        this.step = istr.readFloat();
    }

    static get minWireSize()
    {
        return  18;
    }
};

Slice$L.defineStruct(Dispatcher.CameraIPControl, false, true);

Dispatcher.HistoryVideoT = class
{
    constructor(srcnumber = "", caramnumber = "", timestart = "", timeend = "")
    {
        this.srcnumber = srcnumber;
        this.caramnumber = caramnumber;
        this.timestart = timestart;
        this.timeend = timeend;
    }

    _write(ostr)
    {
        ostr.writeString(this.srcnumber);
        ostr.writeString(this.caramnumber);
        ostr.writeString(this.timestart);
        ostr.writeString(this.timeend);
    }

    _read(istr)
    {
        this.srcnumber = istr.readString();
        this.caramnumber = istr.readString();
        this.timestart = istr.readString();
        this.timeend = istr.readString();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$L.defineStruct(Dispatcher.HistoryVideoT, true, true);

Dispatcher.HistoryVideoOperateT = class
{
    constructor(cid = "", caramnumber = "", second = 0)
    {
        this.cid = cid;
        this.caramnumber = caramnumber;
        this.second = second;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.caramnumber);
        ostr.writeInt(this.second);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.caramnumber = istr.readString();
        this.second = istr.readInt();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$L.defineStruct(Dispatcher.HistoryVideoOperateT, true, true);

Dispatcher.HistoryVSpeedT = class
{
    constructor(cid = "", caramnumber = "", speed = 1)
    {
        this.cid = cid;
        this.caramnumber = caramnumber;
        this.speed = speed;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.caramnumber);
        ostr.writeFloat(this.speed);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.caramnumber = istr.readString();
        this.speed = istr.readFloat();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$L.defineStruct(Dispatcher.HistoryVSpeedT, false, true);

Dispatcher.PlayHistoryVideoRT = class
{
    constructor(cid = "", caramnumber = "", msg = "")
    {
        this.cid = cid;
        this.caramnumber = caramnumber;
        this.msg = msg;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.caramnumber);
        ostr.writeString(this.msg);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.caramnumber = istr.readString();
        this.msg = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$L.defineStruct(Dispatcher.PlayHistoryVideoRT, true, true);

Dispatcher.SipPhoneVideoBugT = class
{
    constructor(called = "", caller = "", codec = "")
    {
        this.called = called;
        this.caller = caller;
        this.codec = codec;
    }

    _write(ostr)
    {
        ostr.writeString(this.called);
        ostr.writeString(this.caller);
        ostr.writeString(this.codec);
    }

    _read(istr)
    {
        this.called = istr.readString();
        this.caller = istr.readString();
        this.codec = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$L.defineStruct(Dispatcher.SipPhoneVideoBugT, true, true);

Dispatcher.SipPhoneVideoBugRT = class
{
    constructor(cid = "", empid = "", sessnum = "")
    {
        this.cid = cid;
        this.empid = empid;
        this.sessnum = sessnum;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.empid);
        ostr.writeString(this.sessnum);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.empid = istr.readString();
        this.sessnum = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$L.defineStruct(Dispatcher.SipPhoneVideoBugRT, true, true);

const iceC_Dispatcher_VideoOP_ids = [
    "::Dispatcher::VideoOP",
    "::Ice::Object"
];

Dispatcher.VideoOP = class extends Ice.Object
{
};

Dispatcher.VideoOPPrx = class extends Ice.ObjectPrx
{
};

Slice$L.defineOperations(Dispatcher.VideoOP, Dispatcher.VideoOPPrx, iceC_Dispatcher_VideoOP_ids, 0,
{
    "opVideoBugStart": [, , , , [Dispatcher.VideoBugStartRT], [[Dispatcher.Identity], [Dispatcher.VideoBugStartT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opVideoBugEnd": [, , , , [Dispatcher.VideoBugEndRT], [[Dispatcher.Identity], [Dispatcher.VideoBugEndT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPlayVideo": [, , , , [Dispatcher.PlayVideoRT], [[Dispatcher.Identity], [Dispatcher.PlayVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opVideoInfo": [, , , , [Dispatcher.VideoInfoRT], [[Dispatcher.Identity], [Dispatcher.VideoInfoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opVideoInfo1": [, , , , [Dispatcher.VideoInfoRT1], [[Dispatcher.Identity], [Dispatcher.VideoInfoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opCameraNumberControl": [, , , , , [[Dispatcher.Identity], [Dispatcher.CameraNumberControl]], ,
    [
        Dispatcher.Error
    ], , ],
    "opCameraIPControl": [, , , , , [[Dispatcher.Identity], [Dispatcher.CameraIPControl]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetHistoryVideo": [, , , , , [[Dispatcher.Identity], [Dispatcher.HistoryVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opPlayHistoryVideo": [, , , , [Dispatcher.PlayHistoryVideoRT], [[Dispatcher.Identity], [Dispatcher.HistoryVideoT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opHistoryVideoPlay": [, , , , , [[Dispatcher.Identity], [Dispatcher.HistoryVideoOperateT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opHistoryVideoPause": [, , , , , [[Dispatcher.Identity], [Dispatcher.HistoryVideoOperateT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opHistoryVideoSpeed": [, , , , , [[Dispatcher.Identity], [Dispatcher.HistoryVSpeedT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSipPhoneVideoBug": [, , , , [Dispatcher.SipPhoneVideoBugRT], [[Dispatcher.Identity], [Dispatcher.SipPhoneVideoBugT]], ,
    [
        Dispatcher.Error
    ], , ]
});

//
const _ModuleRegistry$M = Ice._ModuleRegistry;
const Slice$M = Ice.Slice;

Dispatcher.MdsStateAgentMonitorSessionType = class
{
    constructor(sid = "", employeeid = "")
    {
        this.sid = sid;
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$M.defineStruct(Dispatcher.MdsStateAgentMonitorSessionType, true, true);

Dispatcher.MdsStateAgentMonitorSessionElem = class
{
    constructor(cid = "", caller = "", called = "", type = 0, time = "", level = 0, state = "")
    {
        this.cid = cid;
        this.caller = caller;
        this.called = called;
        this.type = type;
        this.time = time;
        this.level = level;
        this.state = state;
    }

    _write(ostr)
    {
        ostr.writeString(this.cid);
        ostr.writeString(this.caller);
        ostr.writeString(this.called);
        ostr.writeInt(this.type);
        ostr.writeString(this.time);
        ostr.writeInt(this.level);
        ostr.writeString(this.state);
    }

    _read(istr)
    {
        this.cid = istr.readString();
        this.caller = istr.readString();
        this.called = istr.readString();
        this.type = istr.readInt();
        this.time = istr.readString();
        this.level = istr.readInt();
        this.state = istr.readString();
    }

    static get minWireSize()
    {
        return  13;
    }
};

Slice$M.defineStruct(Dispatcher.MdsStateAgentMonitorSessionElem, true, true);

Slice$M.defineSequence(Dispatcher, "MdsStateAgentMonitorSessionSeqHelper", "Dispatcher.MdsStateAgentMonitorSessionElem", false);

Dispatcher.MdsStateAgentMonitorSessionRType = class
{
    constructor(sid = "", sseq = null)
    {
        this.sid = sid;
        this.sseq = sseq;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        Dispatcher.MdsStateAgentMonitorSessionSeqHelper.write(ostr, this.sseq);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.sseq = Dispatcher.MdsStateAgentMonitorSessionSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$M.defineStruct(Dispatcher.MdsStateAgentMonitorSessionRType, true, true);

Dispatcher.MdsStateAgentMonitorDeviceType = class
{
    constructor(sid = "", employeeid = "", employeename = "", type = 0)
    {
        this.sid = sid;
        this.employeeid = employeeid;
        this.employeename = employeename;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.employeename);
        ostr.writeInt(this.type);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.employeeid = istr.readString();
        this.employeename = istr.readString();
        this.type = istr.readInt();
    }

    static get minWireSize()
    {
        return  7;
    }
};

Slice$M.defineStruct(Dispatcher.MdsStateAgentMonitorDeviceType, true, true);

Dispatcher.MdsStateAgentMonitorDeviceElem = class
{
    constructor(employeename = "", employeeid = "", type = 0)
    {
        this.employeename = employeename;
        this.employeeid = employeeid;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeename);
        ostr.writeString(this.employeeid);
        ostr.writeInt(this.type);
    }

    _read(istr)
    {
        this.employeename = istr.readString();
        this.employeeid = istr.readString();
        this.type = istr.readInt();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$M.defineStruct(Dispatcher.MdsStateAgentMonitorDeviceElem, true, true);

Slice$M.defineSequence(Dispatcher, "MdsStateAgentMonitorDeviceSeqHelper", "Dispatcher.MdsStateAgentMonitorDeviceElem", false);

Dispatcher.MdsStateAgentMonitorDeviceRType = class
{
    constructor(sid = "", dseq = null)
    {
        this.sid = sid;
        this.dseq = dseq;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        Dispatcher.MdsStateAgentMonitorDeviceSeqHelper.write(ostr, this.dseq);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.dseq = Dispatcher.MdsStateAgentMonitorDeviceSeqHelper.read(istr);
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$M.defineStruct(Dispatcher.MdsStateAgentMonitorDeviceRType, true, true);

Dispatcher.MdsSessionAgentSetNightServiceType = class
{
    constructor(sid = "", employeeid = "", nightnumber = "", starttime = "", endtime = "")
    {
        this.sid = sid;
        this.employeeid = employeeid;
        this.nightnumber = nightnumber;
        this.starttime = starttime;
        this.endtime = endtime;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.nightnumber);
        ostr.writeString(this.starttime);
        ostr.writeString(this.endtime);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.employeeid = istr.readString();
        this.nightnumber = istr.readString();
        this.starttime = istr.readString();
        this.endtime = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$M.defineStruct(Dispatcher.MdsSessionAgentSetNightServiceType, true, true);

Dispatcher.MdsSessionAgentSetNightServiceRsType = class
{
    constructor(sid = "")
    {
        this.sid = sid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$M.defineStruct(Dispatcher.MdsSessionAgentSetNightServiceRsType, true, true);

Dispatcher.MdsSessionAgentSetNightServiceReType = class
{
    constructor(sid = "", errid = 0, dis = "")
    {
        this.sid = sid;
        this.errid = errid;
        this.dis = dis;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeInt(this.errid);
        ostr.writeString(this.dis);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.errid = istr.readInt();
        this.dis = istr.readString();
    }

    static get minWireSize()
    {
        return  6;
    }
};

Slice$M.defineStruct(Dispatcher.MdsSessionAgentSetNightServiceReType, true, true);

Dispatcher.MdsDataAgentGetConfigType = class
{
    constructor(sid = "", employeeid = "")
    {
        this.sid = sid;
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$M.defineStruct(Dispatcher.MdsDataAgentGetConfigType, true, true);

Dispatcher.MdsDataAgentGetConfigRType = class
{
    constructor(sid = "", databasetype = "", databasename = "", databaseuser = "", databasepwd = "", databaseip = "", databaseport = "")
    {
        this.sid = sid;
        this.databasetype = databasetype;
        this.databasename = databasename;
        this.databaseuser = databaseuser;
        this.databasepwd = databasepwd;
        this.databaseip = databaseip;
        this.databaseport = databaseport;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.databasetype);
        ostr.writeString(this.databasename);
        ostr.writeString(this.databaseuser);
        ostr.writeString(this.databasepwd);
        ostr.writeString(this.databaseip);
        ostr.writeString(this.databaseport);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.databasetype = istr.readString();
        this.databasename = istr.readString();
        this.databaseuser = istr.readString();
        this.databasepwd = istr.readString();
        this.databaseip = istr.readString();
        this.databaseport = istr.readString();
    }

    static get minWireSize()
    {
        return  7;
    }
};

Slice$M.defineStruct(Dispatcher.MdsDataAgentGetConfigRType, true, true);

Dispatcher.MdsDataAgentDatachangeType = class
{
    constructor(a = 0)
    {
        this.a = a;
    }

    _write(ostr)
    {
        ostr.writeInt(this.a);
    }

    _read(istr)
    {
        this.a = istr.readInt();
    }

    static get minWireSize()
    {
        return  4;
    }
};

Slice$M.defineStruct(Dispatcher.MdsDataAgentDatachangeType, true, false);

Dispatcher.MdsDataAgentGetDataType = class
{
    constructor(sid = "", tablename = "")
    {
        this.sid = sid;
        this.tablename = tablename;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.tablename);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.tablename = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$M.defineStruct(Dispatcher.MdsDataAgentGetDataType, true, true);

Dispatcher.MdsDataAgentGetTerminalVideoIpType = class
{
    constructor(sid = "", employeeid = "")
    {
        this.sid = sid;
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  2;
    }
};

Slice$M.defineStruct(Dispatcher.MdsDataAgentGetTerminalVideoIpType, true, true);

Dispatcher.MdsDataAgentGetTerminalVideoIpRType = class
{
    constructor(sid = "", employeeid = "", videoip = "")
    {
        this.sid = sid;
        this.employeeid = employeeid;
        this.videoip = videoip;
    }

    _write(ostr)
    {
        ostr.writeString(this.sid);
        ostr.writeString(this.employeeid);
        ostr.writeString(this.videoip);
    }

    _read(istr)
    {
        this.sid = istr.readString();
        this.employeeid = istr.readString();
        this.videoip = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$M.defineStruct(Dispatcher.MdsDataAgentGetTerminalVideoIpRType, true, true);

Dispatcher.BindTerminalT = class
{
    constructor(number = "", type = 0)
    {
        this.number = number;
        this.type = type;
    }

    _write(ostr)
    {
        ostr.writeString(this.number);
        ostr.writeInt(this.type);
    }

    _read(istr)
    {
        this.number = istr.readString();
        this.type = istr.readInt();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$M.defineStruct(Dispatcher.BindTerminalT, true, true);

Slice$M.defineSequence(Dispatcher, "BindTerminalSeqHelper", "Dispatcher.BindTerminalT", false);

Dispatcher.BindTerminalRT = class
{
    constructor(ret = "")
    {
        this.ret = ret;
    }

    _write(ostr)
    {
        ostr.writeString(this.ret);
    }

    _read(istr)
    {
        this.ret = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$M.defineStruct(Dispatcher.BindTerminalRT, true, true);

Dispatcher.AllStateT = class
{
    constructor(type = "", group = "", employeeid = "")
    {
        this.type = type;
        this.group = group;
        this.employeeid = employeeid;
    }

    _write(ostr)
    {
        ostr.writeString(this.type);
        ostr.writeString(this.group);
        ostr.writeString(this.employeeid);
    }

    _read(istr)
    {
        this.type = istr.readString();
        this.group = istr.readString();
        this.employeeid = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$M.defineStruct(Dispatcher.AllStateT, true, true);

Dispatcher.AllStateRT = class
{
    constructor(employeeid = "", rstate = Dispatcher.RegisterState.RegisterStateNone, cstate = Dispatcher.CallState.CallStateNone, othernumber = "", othername = "")
    {
        this.employeeid = employeeid;
        this.rstate = rstate;
        this.cstate = cstate;
        this.othernumber = othernumber;
        this.othername = othername;
    }

    _write(ostr)
    {
        ostr.writeString(this.employeeid);
        Dispatcher.RegisterState._write(ostr, this.rstate);
        Dispatcher.CallState._write(ostr, this.cstate);
        ostr.writeString(this.othernumber);
        ostr.writeString(this.othername);
    }

    _read(istr)
    {
        this.employeeid = istr.readString();
        this.rstate = Dispatcher.RegisterState._read(istr);
        this.cstate = Dispatcher.CallState._read(istr);
        this.othernumber = istr.readString();
        this.othername = istr.readString();
    }

    static get minWireSize()
    {
        return  5;
    }
};

Slice$M.defineStruct(Dispatcher.AllStateRT, true, true);

Slice$M.defineSequence(Dispatcher, "AllStateRSeqHelper", "Dispatcher.AllStateRT", false);

Dispatcher.SetNightServiceT = class
{
    constructor(nightnumber = "", starttime = "", endtime = "")
    {
        this.nightnumber = nightnumber;
        this.starttime = starttime;
        this.endtime = endtime;
    }

    _write(ostr)
    {
        ostr.writeString(this.nightnumber);
        ostr.writeString(this.starttime);
        ostr.writeString(this.endtime);
    }

    _read(istr)
    {
        this.nightnumber = istr.readString();
        this.starttime = istr.readString();
        this.endtime = istr.readString();
    }

    static get minWireSize()
    {
        return  3;
    }
};

Slice$M.defineStruct(Dispatcher.SetNightServiceT, true, true);

Dispatcher.SetNightServiceRT = class
{
    constructor(dummy = "")
    {
        this.dummy = dummy;
    }

    _write(ostr)
    {
        ostr.writeString(this.dummy);
    }

    _read(istr)
    {
        this.dummy = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$M.defineStruct(Dispatcher.SetNightServiceRT, true, true);

Dispatcher.TerminalDetailT = class
{
    constructor(number = "")
    {
        this.number = number;
    }

    _write(ostr)
    {
        ostr.writeString(this.number);
    }

    _read(istr)
    {
        this.number = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$M.defineStruct(Dispatcher.TerminalDetailT, true, true);

Dispatcher.TerminalDetailRT = class
{
    constructor(id = 0, employeeId = "", password = "", employeeLevel = 0, departId = 0, roleId = 0, name = "", addTime = "", modifyTime = "", theState = 0, theType = 0, remark = "", latitude = 0.0, longitude = 0.0, isRecord = 0, monName = "", monPasswd = "", monIp = "", monPort = 0, monFlag = "", isVideo = 0)
    {
        this.id = id;
        this.employeeId = employeeId;
        this.password = password;
        this.employeeLevel = employeeLevel;
        this.departId = departId;
        this.roleId = roleId;
        this.name = name;
        this.addTime = addTime;
        this.modifyTime = modifyTime;
        this.theState = theState;
        this.theType = theType;
        this.remark = remark;
        this.latitude = latitude;
        this.longitude = longitude;
        this.isRecord = isRecord;
        this.monName = monName;
        this.monPasswd = monPasswd;
        this.monIp = monIp;
        this.monPort = monPort;
        this.monFlag = monFlag;
        this.isVideo = isVideo;
    }

    _write(ostr)
    {
        ostr.writeInt(this.id);
        ostr.writeString(this.employeeId);
        ostr.writeString(this.password);
        ostr.writeInt(this.employeeLevel);
        ostr.writeInt(this.departId);
        ostr.writeInt(this.roleId);
        ostr.writeString(this.name);
        ostr.writeString(this.addTime);
        ostr.writeString(this.modifyTime);
        ostr.writeInt(this.theState);
        ostr.writeInt(this.theType);
        ostr.writeString(this.remark);
        ostr.writeDouble(this.latitude);
        ostr.writeDouble(this.longitude);
        ostr.writeInt(this.isRecord);
        ostr.writeString(this.monName);
        ostr.writeString(this.monPasswd);
        ostr.writeString(this.monIp);
        ostr.writeInt(this.monPort);
        ostr.writeString(this.monFlag);
        ostr.writeInt(this.isVideo);
    }

    _read(istr)
    {
        this.id = istr.readInt();
        this.employeeId = istr.readString();
        this.password = istr.readString();
        this.employeeLevel = istr.readInt();
        this.departId = istr.readInt();
        this.roleId = istr.readInt();
        this.name = istr.readString();
        this.addTime = istr.readString();
        this.modifyTime = istr.readString();
        this.theState = istr.readInt();
        this.theType = istr.readInt();
        this.remark = istr.readString();
        this.latitude = istr.readDouble();
        this.longitude = istr.readDouble();
        this.isRecord = istr.readInt();
        this.monName = istr.readString();
        this.monPasswd = istr.readString();
        this.monIp = istr.readString();
        this.monPort = istr.readInt();
        this.monFlag = istr.readString();
        this.isVideo = istr.readInt();
    }

    static get minWireSize()
    {
        return  62;
    }
};

Slice$M.defineStruct(Dispatcher.TerminalDetailRT, false, true);

Dispatcher.GetSessionEventT = class
{
    constructor(dummy = "")
    {
        this.dummy = dummy;
    }

    _write(ostr)
    {
        ostr.writeString(this.dummy);
    }

    _read(istr)
    {
        this.dummy = istr.readString();
    }

    static get minWireSize()
    {
        return  1;
    }
};

Slice$M.defineStruct(Dispatcher.GetSessionEventT, true, true);

const iceC_Dispatcher_MDCSrv_ids = [
    "::Dispatcher::BusinessOP",
    "::Dispatcher::CallingOP",
    "::Dispatcher::CallingVOP",
    "::Dispatcher::CommSrv",
    "::Dispatcher::ConfigureOP",
    "::Dispatcher::DecoderOP",
    "::Dispatcher::FaxOP",
    "::Dispatcher::FileOP",
    "::Dispatcher::GisOP",
    "::Dispatcher::MDCSrv",
    "::Dispatcher::McuOP",
    "::Dispatcher::MessageOP",
    "::Dispatcher::PrePlanOP",
    "::Dispatcher::PttOP",
    "::Dispatcher::PublishOP",
    "::Dispatcher::RailWayOP",
    "::Dispatcher::RegisterOP",
    "::Dispatcher::VideoOP",
    "::Ice::Object"
];

Dispatcher.MDCSrv = class extends Ice.Object
{
    static get _iceImplements()
    {
        return [
            Dispatcher.CommSrv,
            Dispatcher.RegisterOP,
            Dispatcher.CallingOP,
            Dispatcher.ConfigureOP,
            Dispatcher.VideoOP,
            Dispatcher.GisOP,
            Dispatcher.PttOP,
            Dispatcher.MessageOP,
            Dispatcher.CallingVOP,
            Dispatcher.PrePlanOP,
            Dispatcher.FaxOP,
            Dispatcher.DecoderOP,
            Dispatcher.McuOP,
            Dispatcher.PublishOP,
            Dispatcher.BusinessOP,
            Dispatcher.RailWayOP
        ];
    }
};

Dispatcher.MDCSrvPrx = class extends Ice.ObjectPrx
{
    static get _implements()
    {
        return [
            Dispatcher.CommSrvPrx,
            Dispatcher.RegisterOPPrx,
            Dispatcher.CallingOPPrx,
            Dispatcher.ConfigureOPPrx,
            Dispatcher.VideoOPPrx,
            Dispatcher.GisOPPrx,
            Dispatcher.PttOPPrx,
            Dispatcher.MessageOPPrx,
            Dispatcher.CallingVOPPrx,
            Dispatcher.PrePlanOPPrx,
            Dispatcher.FaxOPPrx,
            Dispatcher.DecoderOPPrx,
            Dispatcher.McuOPPrx,
            Dispatcher.PublishOPPrx,
            Dispatcher.BusinessOPPrx,
            Dispatcher.RailWayOPPrx];
    }
};

Slice$M.defineOperations(Dispatcher.MDCSrv, Dispatcher.MDCSrvPrx, iceC_Dispatcher_MDCSrv_ids, 9,
{
    "opBindTerminal": [, , , , [Dispatcher.BindTerminalRT], [[Dispatcher.Identity], ["Dispatcher.BindTerminalSeqHelper"]], ,
    [
        Dispatcher.Error
    ], , ],
    "opAllState": [, , , , ["Dispatcher.AllStateRSeqHelper"], [[Dispatcher.Identity], [Dispatcher.AllStateT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opSetNightService": [, , , , [Dispatcher.SetNightServiceRT], [[Dispatcher.Identity], [Dispatcher.SetNightServiceT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opTerminalDetail": [, , , , [Dispatcher.TerminalDetailRT], [[Dispatcher.Identity], [Dispatcher.TerminalDetailT]], ,
    [
        Dispatcher.Error
    ], , ],
    "opGetSessionEvent": [, 2, 2, , , [[Dispatcher.Identity], [Dispatcher.GetSessionEventT]], , , , ],
    "MdsDataAgentGetConfig": [, 2, 2, , , [[7], [Dispatcher.MdsDataAgentGetConfigType]], , , , ],
    "MdsDataAgentDatachange": [, 2, 2, , , [[7], [Dispatcher.MdsDataAgentDatachangeType]], , , , ],
    "MdsStateAgentMonitorSession": [, 2, 2, , , [[7], [Dispatcher.MdsStateAgentMonitorSessionType]], , , , ],
    "MdsStateAgentMonitorDevice": [, 2, 2, , , [[7], [Dispatcher.MdsStateAgentMonitorDeviceType]], , , , ],
    "MdsDataAgentGetTerminalVideoIp": [, 2, 2, , , [[7], [Dispatcher.MdsDataAgentGetTerminalVideoIpType]], , , , ]
});

const iceC_Dispatcher_MDCCli_ids = [
    "::Dispatcher::CallingCB",
    "::Dispatcher::CallingVCB",
    "::Dispatcher::CommCli",
    "::Dispatcher::ConfigureCB",
    "::Dispatcher::DecoderCB",
    "::Dispatcher::FaxCB",
    "::Dispatcher::FileCB",
    "::Dispatcher::GisCB",
    "::Dispatcher::MDCCli",
    "::Dispatcher::McuCB",
    "::Dispatcher::MessageCB",
    "::Dispatcher::PrePlanCB",
    "::Dispatcher::PttCB",
    "::Dispatcher::PublishCB",
    "::Dispatcher::RegisterCB",
    "::Dispatcher::StateCB",
    "::Dispatcher::VideoCB",
    "::Ice::Object"
];

Dispatcher.MDCCli = class extends Ice.Object
{
    static get _iceImplements()
    {
        return [
            Dispatcher.CommCli,
            Dispatcher.RegisterCB,
            Dispatcher.CallingCB,
            Dispatcher.ConfigureCB,
            Dispatcher.VideoCB,
            Dispatcher.GisCB,
            Dispatcher.PttCB,
            Dispatcher.MessageCB,
            Dispatcher.CallingVCB,
            Dispatcher.PrePlanCB,
            Dispatcher.FaxCB,
            Dispatcher.StateCB,
            Dispatcher.DecoderCB,
            Dispatcher.McuCB,
            Dispatcher.PublishCB
        ];
    }
};

Dispatcher.MDCCliPrx = class extends Ice.ObjectPrx
{
    static get _implements()
    {
        return [
            Dispatcher.CommCliPrx,
            Dispatcher.RegisterCBPrx,
            Dispatcher.CallingCBPrx,
            Dispatcher.ConfigureCBPrx,
            Dispatcher.VideoCBPrx,
            Dispatcher.GisCBPrx,
            Dispatcher.PttCBPrx,
            Dispatcher.MessageCBPrx,
            Dispatcher.CallingVCBPrx,
            Dispatcher.PrePlanCBPrx,
            Dispatcher.FaxCBPrx,
            Dispatcher.StateCBPrx,
            Dispatcher.DecoderCBPrx,
            Dispatcher.McuCBPrx,
            Dispatcher.PublishCBPrx];
    }
};

Slice$M.defineOperations(Dispatcher.MDCCli, Dispatcher.MDCCliPrx, iceC_Dispatcher_MDCCli_ids, 8);

export { Dispatcher, DispatcherDB, Fax };
