/* -*- C++ -*- */  
/**
 * @file CallingVOP.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "CallingVH.ice"

#ifndef CALLINGVOP_ICE
#define CALLINGVOP_ICE
[["js:es6-module"]]

module Dispatcher {
	struct GetMemberVideoRT {
        string sid="";
		string cid="";
		string fsip="";
		string fsport="";
    };
	sequence<string> ReceiveNumSeq;
struct MCUPushMemberToOtherT{
		string cid="";
		string pushednum="";
		ReceiveNumSeq ReceiveNumbers;
	};
struct StopMCUPushMemberToOtherT{
		string cid="";
	};

    struct SendVideoRT1 {
        string sid;
		string ip;
		string port;
		string agentid;
		string codec;
    };
    interface CallingVOP {
        // 发送视频
	["ami"] SendVideoRT opSendVideo(Identity id, SendVideoT in) throws Error;
	["ami"] SendVideoRT1 opSendVideo1(Identity id, SendVideoT in) throws Error;
        // 接收视频
	["ami"] GetVideoRT opGetVideo(Identity id, GetVideoT in) throws Error;
        // 更改视频
	["ami"] ChangeVideoRT opChangeVideo(Identity id, ChangeVideoT in) throws Error;
        // 释放视频
	["ami"] ReleaseVideoRT opReleaseVideo(Identity id, ReleaseVideoT in) throws Error;
        // 推送视频
	["ami"] PushVideoRT opPushVideo(Identity id, PushVideoT in) throws Error;
	//获取I帧
	["ami"] void opGetKeyFrame(Identity id, GetKeyFrameT in) throws Error;
	["ami"] GetMemberVideoRT opGetMemberVideo(Identity id, GetVideoT in) throws Error;
	["ami"] void opMCUPushMemberToOther(Identity id, MCUPushMemberToOtherT in1) throws Error;
	["ami"] void opStopMCUPushMemberToOther(Identity id, StopMCUPushMemberToOtherT in1) throws Error;
	["ami"] string opGetCallVideo(Identity id, string in) throws Error;
	["ami"] string opSendCallVideo(Identity id, string in) throws Error;
    };

};

#endif
