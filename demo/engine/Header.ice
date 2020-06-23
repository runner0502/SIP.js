/* -*- C++ -*- */  
/**
 * @file Header.ice
 * @author Liming Yang
 */

#ifndef HEADER_ICE
#define HEADER_ICE

#include "Ice/BuiltinSequences.ice"
[["js:es6-module"]]

module Dispatcher {

    // 呼叫类型
    enum CallType {
        CallTypeNone,
        CallTypeSingle,
        CallTypeTmpgroup,     
        CallTypeReport,       
        CallTypeBroadcast,    
        CallTypeTemporary,    
        CallTypeInterpose,    
        CallTypeForceremove,  
        CallTypeMonitor,      
        CallTypeIntercom,     
        CallTypeSwitch,       
        CallTypeUrgent,       
        CallTypeSingle2,      
        CallTypeTmpintercom,	
        CallTypeVideobug,
		CallTypeMCUMetting,
		CallTypeSOS,
		CallTypeTransferVideo,
		CallTypeTransferVideoToMcu,
		CallTypeUploadVideo,
		CallTypePlayFile
    }; 


    // 注册状态
    enum RegisterState {
        RegisterStateNone,
        RegisterStateLogin,
        RegisterStateLogout,
    };
    // 呼叫状态
    enum CallState {
        CallStateNone,          // 未知类型
        CallStateInit,          // 初始状态
        CallStateNormal,        // 在线状态
        CallStateCallout,       // 呼出状态
        CallStateIncoming,      // 呼入状态
        CallStateRinging,       // 振铃状态
        CallStateConnect,       // 通话状态
        CallStateHold,          // 通话保持
        CallStateBusy,          // 通话忙
        CallStateOffhook,       // 摘机
        CallStateRelease,       // 通话结束
        CallStateUnspeak,       // 释放话权
        CallStateSpeak,         // 申请话权
        CallStateQueue,         // 排队状态
        CallStateUnhold,        // 取消保持
        CallStateZombie,        // 退出会议
    };
    // 媒体类型
    enum MediaType {
        MediaTypeNone,          // 未知媒体类型
        MediaTypeAudio,         // 音频
        MediaTypeVideo,         // 视频
    };
    // 组类型
    enum GroupType {
	GroupTypeIntercomgroup,	//对讲组
	GroupTypeOther,		//非对讲组
        GroupTypeNone,
    };
    // 用户类型
    enum UserType {
	UserTypeDispatch,	//调度台
	UserTypeHandheld,	//手持终端
	UserTypeCommonuser,	//普通用户
	UserTypeOutlineuser,	//外线用户
	UserTypeMonitoruser,	//监控用户
	UserTypeSsu,		//SSU
	UserType3ghandheld,	//3G对讲
	UserTypeMonitordevice,	//监控设备
	UserTypeNone,
	UserType323,   //H323视频会议终端
	UserTypeStationGroup,  //基站组
	UserTypeStationUser,    //基站成员
	UserTypeRelayUser,		//集群网关
	UserTypeBroadRelayUser,	//音频广播网关
	UserTypeRelayGW,   //中继台
	UserTypeMCUReg    //MCU用户
    };
    // 文件类型
    enum FileType {
        FileTypeNone,
	FileTypeText,           //文本
	FileTypePic,		//图片
	FileTypeVoice,		//音频
	FileTypeVideo,		//视频
	FileTypeGisinfo,	//位置信息
	FileTypePlayAudio,	//放音
	FileTypeFax,		//传真
	FileTypeOther,		//普通文件
	FileTypePlayVideo,  //播放视频
	FileTypeUploadVideo, //视频上传
    };
    // 文件状态
    enum FileState {
        FileStateNone,
        FileStateUploading,
        FileStateUploaded,
    };

    enum SpeakType {
        SpeakTypeNone,
        SpeakTypeMute,
        SpeakTypeUnmute,
    };
	enum UserOrGroup
	{
		UOGNone,
		UOGEmployee,
		UOGGroup,
	};
    enum HearType {
        HearTypeNone,
        HearTypeMute,
        HearTypeUnmute,
    };

    enum PushVideoType {
        PushVideoTypeNone,
        PushVideoTypePush,
        PushVideoTypeUnpush,
    };

    enum PlayAudioType {
        PlayAudioTypeNone,
        PlayAudioTypeStart,
        PlayAudioTypeStop,
    };
	enum PlayVideoType {
        PlayVideoTypeNone,
        PlayVideoTypeStart,
        PlayVideoTypeStop,
    };

    enum AudioFileType {
        AudioFileTypeNone,
        AudioFileTypeEcho,
    };

    enum AnswerType {
        AnswerTypeNone,
        AnswerTypeAuto,
        AnswerTypeMan,
    };

    enum HoldType {
        HoldTypeNone,
        HoldTypeHold,
        HoldTypeUnhold,
    };

    enum GisTraceType {
        GisTraceTypeNone,
        GisTraceTypeSub,
        GisTraceTypeUnsub,
    };

    enum PrePlanState {
        PrePlanStateNone,
        PrePlanStateRuning,
        PrePlanStateEnd,
    };

    enum VBugStateType {
        VBugStateTypeNone,
        VBugStateTypeOk,
        VBugStateTypeFailure,
        VBugStateTypeRelease,
    };

    enum PrePlanInstType {
	PrePlanTypeInstMessage=1, 
	PrePlanTypeInstBroadCast,
	PrePlanTypeInstMeeting,
	PrePlanTypeInstVideoMeeting
    };

    enum FaxStateSend {
        FaxStateSendNone,
        FaxStateSending,
        FaxStateSended,
        FaxStateSendFailure,
    };

    enum FaxStateRecv {
        FaxStateRecvNone,
        FaxStateRecving,
        FaxStateRecved,
        FaxStateRecvedFailure,
    };
	enum emCalledType {
		CalledTypeNONE,
		CalledTypeTDNSFreeswitch,
		CalledTypeMCU,
		CalledTypePlayVideo,
		CalledTypeMCUDevice,
		CalledType28181,
		CalledTypeMonitorDeivce,
		CalledTypePlayHisVideo,
	};
	enum emVideoDeviceType{
		VDTNONE=0,
		VDTHKIPC=1,
		VDTOTHER,
		VDTHKDVR,
		VDTHKVIDEOSERVER,
		VDTHKDECOMPILER,
		VDTDHIPC=10,
		VDTDHDVR,
		VDTDHVIDEOSERVER,
		VDTDHDECOMPILER,
	};
	enum emCodecType{
		CDTNONE=0,
		CDTH264=1,
		CDTH265,
		CDT264265,
	};
// identity which represent the user
    struct Identity {
        string user;
    };
	struct CommonRequestT {
		string cid;
    };
// common header
// #define DECL_HEADER
	const string CALLREMARKENGOTRANSFER = "协商转接";
	const string CALLREMARKMOINTOR = "监听";
	const string CALLREMARKSUBSTITUTE = "代接";
	const string CALLREMARKINTERPOSE = "强插";
	const string CALLREMARKREMOVE = "强断";
	const string CALLREMARKSWITCH = "转接";
	const string CALLREMARKADDMEMBER = "邀请成员";
	const string CALLREMARKPLAYFILE = "播放文件";
	const string CALLREMARKREMOVEOTHER = "强拆";
	const string STRYMSDISPATCHERGROUP = "调度服务器专用";

	const string SYSMSGLISERENCEERR = "您好!\r\nIDS融合通信服务器许可还剩%day%天过期，请及时联系厂家更换许可。";
};

#endif
