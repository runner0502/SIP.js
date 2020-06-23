/* -*- C++ -*- */  
/**
 * @file Calling.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "CallingH.ice"

#ifndef CALLINGCB_ICE
#define CALLINGCB_ICE
[["js:es6-module"]]

module Dispatcher {


    struct CMStateChangeT {
	string cid;
	string employeeid;
	CallState state = CallStateNone;
	string stateDecorate;
	string name;
	int type = 8;		
    };

    struct CallChangeT {
	string employeeid;
	CallState state = CallStateNone;
	string othername;
	string othernumber;
	string DNSprefix;
	int islocal;
    };
	struct SessionChange1T {
	string cid="";
	string callingnum="";
	string callingname="";
	string othernum="";
	string othername="";
	CallDirect direction = CallDirectNone;
	CallState state = CallStateNone;
	CallType type = CallTypeNone;
	int level;
	MediaType isVideo = MediaTypeNone;
	string RoadParameters="";
	string othermsg="";
    };
    // callback
    interface CallingCB {
        // 会话状态变更接口
	idempotent void onSessionChange(SessionChangeT in0);
	  // 会话状态变更接口
	idempotent void onSessionChange1(SessionChange1T in0);
        // 会话成员状态变化接口
	idempotent void onCMStateChange(CMStateChangeT in0);
        // 呼叫状态变化接口
	idempotent void onCallChange(CallChangeT in0);
        // 播放音频状态变化接口
        idempotent void onPlayAudioEv(PlayAudioEvT in0);
    };
    // callback
    interface CallingCBSub {
    };
};

#endif
