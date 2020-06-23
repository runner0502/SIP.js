/* -*- C++ -*- */  
/**
 * @file CallingOP.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "CallingH.ice"

#ifndef CALLINGOP_ICE
#define CALLINGOP_ICE
[["js:es6-module"]]

module Dispatcher {

    struct NegoTransferT {
	string number;          // 
	string call1;           // 
	string call2;           // 
	string cid1;            // 
	string cid2;            // 
    };

    struct NegoTransferRT {
	string cid;             // 转接成功后的会话ID
    };

    struct PlayAudioT {
        string fname;
	string empid;
	string cid;
	PlayAudioType state = PlayAudioTypeNone;
	string uuid;
    };

    struct PlayAudioRT {
        int code;
    };

    struct CallCommonT {
	string cid;
	string caller;
	string called;
    };

    struct CallCommonRET {
        string cid;
        string caller;
        string callee;
    };
    sequence<CallCommonRET> CallCommonRESeq;

    struct CallCommonRT {
        CallCommonRESeq seq;
    };

    struct SpeakerT {
	string cid;
	string employeeid;
	SpeakType speakertypea = SpeakTypeNone;
    };

    struct SpeakerRT {
        int code;
    };

    struct HearT {
	string cid;
	string number;
	HearType hear = HearTypeNone;
    };

    struct HearRT {
        int code;
    };

    struct ForceEndConfeT {
	string cid;
	string employeeid;
    };
	

    struct HoldT {
	string cid;
	HoldType htype = HoldTypeNone;
    };

    struct HoldRT {
	string cid;
    };

    struct HangupT {
	string cid;
    };
	struct HangupT1 {
	string cid;
	string member;
    };

    struct HangupRT {
	string cid;
    };

    struct CalleeT {
	string employeeid;
    };    
    sequence <CalleeT> CalleeSeq;

    struct CreateConfT {
	CalleeSeq member;
	string sessname;
	string sessnum;
	string caller;
	CallType ctype = CallTypeNone;
	MediaType isVideo = MediaTypeNone;
    };
	struct CreateMcuConfT {
		CalleeSeq member;
		string sessname;
		string sessnum;
		string caller;
		CallType ctype = CallTypeNone;
		MediaType isVideo = MediaTypeNone;
		bool isMcuCall=false;
    };
	struct CreateMcuConf1T {
		CalleeSeq member;
		string sessname;
		string sessnum;
		string caller;
		CallType ctype = CallTypeNone;
		MediaType isVideo = MediaTypeNone;
		bool isMcuCall=false;
		string defaultsdp;
    };
	struct CreateConf1T {
		CalleeSeq member;
		string sessname;
		string sessnum;
		string caller;
		CallType ctype = CallTypeNone;
		MediaType isVideo = MediaTypeNone;
		bool isMcuCall=false;
		string defaultsdp;
    };
    struct CreateConfRT {
	string sessnum;
	string cid;
	string empid;
    };

    struct AddMemberT {
	string cid;
	string number;
	AnswerType astype = AnswerTypeNone;
    };

    struct AddMemberRT {
	string cid;
	string empid;
    };

    struct DelMemberT {
	string cid;
	string number;
    };

    struct DelMemberRT {
	string cid;
	string empid;
    };

    struct AllCallMemberT {
        string sid;
        string cid; 
    };
    struct AllCallMemberRT {
        string cid;
        string employeeid;
        string name;
        int type = 8;
        CallState state = CallStateNone;
        string stateDecorate;
    };
	 sequence<AllCallMemberRT> AllCallMemberRSeq;
	
	struct PullQueueCallT {
        string cid;
		string caller; 
    };
	struct PushCallToQueueT{
		string cid;
		string RoadParameters;
	};
	struct PushCallToQueueT1{
		string cid;
		string member;
		string RoadParameters;
	};
	struct GetAllSessionT{
		string employeeid;
	};
	struct GetAllSession1T{
		string employeeid;
		CallType cType=CallTypeNone;
	};
	struct SendDTMFbyCidT{
		string cid;
		string member;
		string strdtmf;
	};
	struct OrderDetailT {
		string number="";
		int index=0;
		int ringtime=30;
    };    
	 sequence <OrderDetailT> OrderDetailSeq;
	struct OrderCalledT {
		string called="";
		OrderDetailSeq details;
    };    
    sequence <OrderCalledT> OrderCalledSeq;
	struct CalledOrderT{
		OrderCalledSeq calleds;
		string sessname="";
		string sessnum="";
		string caller="";
		CallType ctype = CallTypeNone;
		MediaType isVideo = MediaTypeNone;
	};

	struct CalledOrderRT {
		string sessnum;
		string cid;
		string empid;
    };
	struct AddMemberByCallOrderT {
		string cid;
		string number;
		AnswerType astype = AnswerTypeNone;
		OrderDetailSeq details;
	};
	struct ReCallDetailT
	{
		string number="";
		int callnum=0;
	};
	sequence <ReCallDetailT> ReCallDetailSeq;
	struct SetReCallNumberT
	{
		string cid;
		ReCallDetailSeq details;
	};
	struct AllCallMemberRT1 {
        string cid;
        string employeeid;
        string name;
        int type = 8;
        CallState state = CallStateNone;
        string stateDecorate;
		int level=10;
		bool IsReCall=false;
		int ReCallNum=-1;
    };
	 sequence<AllCallMemberRT1> AllCallMemberRSeq1;
	struct SessionJoinT
	{
		string cid="";
	};
	sequence <SessionJoinT> SessionJoinSeq;
	struct CreateSOSCallT
	{
		CalleeSeq member;
		string sessname;
		string sessnum;
		string caller;
		MediaType isVideo = MediaTypeNone;
	};
	struct UploadVideoCallT
	{
		CalleeSeq member;
		string sessname;
		string sessnum;
		string caller;
		MediaType isVideo = MediaTypeNone;
	};
	struct TransferVideoT{
		string sessname="";
		string sessnum="";
		string srccid="";
		string srcnumber="";
		OrderCalledSeq calleds;
	};
	struct TransferVideoToMCUT{
		string sessname="";
		string sessnum="";
		string srccid="";
		string srcnumber="";
		string defaultcode="";
		OrderCalledSeq calleds;
	};
	struct TransferVideoRT{
		string newcid="";
	};
	struct AddMemberT1 {
	string cid="";
	string number="";
	AnswerType astype = AnswerTypeNone;
	SpeakType speakertypea = SpeakTypeNone;
	HearType hear = HearTypeNone;
	string RoadParameters="";
	OrderDetailSeq details;
    };
    // operate
    interface CallingOP {
        // 协商转接接口
	["ami"] NegoTransferRT opNegoTransfer(Identity id, NegoTransferT in) throws Error;
        // 播放视频文件接口
	["ami"] PlayAudioRT opPlayAudio(Identity id, PlayAudioT in) throws Error;
        // 代接接口
	["ami"] CallCommonRT opSubstitute(Identity id, CallCommonT in) throws Error;
        // 禁言接口
	["ami"] SpeakerRT opSpeaker(Identity id, SpeakerT in) throws Error;
        // 禁听接口
	["ami"] HearRT opHear(Identity id, HearT in) throws Error;
        // 强制关闭会议接口
        ["ami"] CommonRequestT opForceEndConfe(Identity id, ForceEndConfeT in) throws Error;
        // 强断接口
        ["ami"] CallCommonRT opRemove(Identity id, CallCommonT in) throws Error;
		// 强拆接口
        ["ami"] CallCommonRT opRemoveOther(Identity id, CallCommonT in) throws Error;
        // 强插接口
        ["ami"] CallCommonRT opInterpose(Identity id, CallCommonT in) throws Error;
        // 监听接口
        ["ami"] CallCommonRT opMonitor(Identity id, CallCommonT in) throws Error;
        // 转接接口
        ["ami"] CallCommonRT opSwitch(Identity id, CallCommonT in) throws Error;
        // 保持接口
        ["ami"] HoldRT opHold(Identity id, HoldT in) throws Error;
        // 挂断接口
        ["ami"] HangupRT opHangup(Identity id, HangupT in) throws Error;
		["ami"] HangupRT opHangup1(Identity id, HangupT1 in) throws Error;
        // 创建会话话接口
        ["ami"] CreateConfRT opCreateConf(Identity id, CreateConfT in) throws Error;
		["ami"] CreateConfRT opCreateMcuConf(Identity id, CreateMcuConfT in) throws Error;
		["ami"] CreateConfRT opCreateMcuConf1(Identity id, CreateMcuConf1T in) throws Error;
		["ami"] CreateConfRT opCreateConf1(Identity id, CreateConf1T in) throws Error;
        // 添加成员接口
        ["ami"] AddMemberRT opAddMember(Identity id, AddMemberT in) throws Error;
        // 删除成员接口
        ["ami"] DelMemberRT opDelMember(Identity id, DelMemberT in) throws Error;
        // 获取会议成员状态接口
        ["ami"] AllCallMemberRSeq opAllCallMember(Identity id, AllCallMemberT in) throws Error;
		
		 // 取话从队列中取出呼叫
        ["ami"] CommonRequestT opPullQueueCall(Identity id, PullQueueCallT in) throws Error;
		// 将呼叫推入队列
        ["ami"] CommonRequestT opPushCallToQueue(Identity id, PushCallToQueueT in) throws Error;
		["ami"] CommonRequestT opPushCallToQueue1(Identity id, PushCallToQueueT1 in) throws Error;
		//获取所有session
		["ami"] SessionChangeTSeq opGetAllSession(Identity id, GetAllSessionT in) throws Error;
		["ami"] SessionChangeTSeq opGetAllSession1(Identity id, GetAllSession1T in)  throws Error;
		["ami"] bool opSendDTMFbyCid(Identity id, SendDTMFbyCidT in)  throws Error;
		["ami"] CalledOrderRT opCreateByCallOrder(Identity id, CalledOrderT in)  throws Error;
		["ami"] void opAddMemberByCallOrder(Identity id, AddMemberByCallOrderT in) throws Error;
		["ami"] void opSetReCallNumber(Identity id, SetReCallNumberT in) throws Error;
		// 获取会议成员状态接口
        ["ami"] AllCallMemberRSeq1 opAllCallMember1(Identity id, AllCallMemberT in) throws Error;
		["ami"] CreateConfRT opSessionJoin(Identity id, SessionJoinSeq in1) throws Error;
		["ami"] CreateConfRT opCreateSOSCall(Identity id, CreateSOSCallT in1) throws Error;
		["ami"] TransferVideoRT opTransferVideo(Identity id, TransferVideoT in1) throws Error;
		["ami"] TransferVideoRT opTransferVideoToMcu(Identity id, TransferVideoToMCUT in1) throws Error;
		["ami"] CreateConfRT opCreateUpLoadVideoCall(Identity id, UploadVideoCallT in1) throws Error;
		["ami"] SessionJoinSeq opTempSessionJoin(Identity id, SessionJoinSeq in1) throws Error;
		["ami"] AddMemberRT opAddMember1(Identity id, AddMemberT1 in) throws Error;
		["ami"] void opIntercomRecall(Identity id, string in) throws Error;
		["ami"] string opAllCallMember2(Identity id, string cid) throws Error;
		["ami"] string opCreatePlayFileMetting(Identity id, string json) throws Error;
    };
    // subscribe
    interface CallingSB {
    };
};

#endif
