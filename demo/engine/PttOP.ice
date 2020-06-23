/* -*- C++ -*- */  
/**
 * @file Ptt.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef PTTOP_ICE
#define PTTOP_ICE
[["js:es6-module"]]

module Dispatcher {


    struct PttReqRightT {
	string groupnum;
	string caller;
	string messageinfo;
    };

//PTT组信息
    struct PttReqGroupInfoT {
        string employeeid;
        string type;
    };

    struct PttReqMemberInfoT {
        string employeeid;
        string groupnum;
    };

    struct PttReqMemberInfoRElem {
        string num;
        string name;
        CallState state = CallStateNone;
    };
    sequence<PttReqMemberInfoRElem> PttReqMemberInfoRSeq;

    struct PttReqMemberInfoRT {
        string groupnum;
        string employeeid;
        PttReqMemberInfoRSeq memberinfo;
    };
	struct PttReqMemberInfoT1 {
        string sid;
        string groupnum;
		string employeeid; 
    };
    struct PttReqMemberInfoRElem1 {
        string employeeid;
        string name;
        int type = 8;
		int level=10;
        CallState state = CallStateNone;
        string stateDecorate;
    };
    sequence<PttReqMemberInfoRElem1> PttReqMemberInfoRSeq1;

    struct PttReqMemberInfoRT1 {
        string groupnum;
        string employeeid;
        PttReqMemberInfoRSeq1 memberinfo;
    };
	struct PttTimeOutT {
        string cid;
		string MaxQueue;
        string IdelTimeout;
		string SpeakTimeout;
		string RefreshStateSpace;
    };
    // operate
    interface PttOP {
        // ["ami"] ApplyTalkingRT opApplyTalking(Identity in0, ApplyTalkingT in1) throws Error;
        // ["ami"] ReleaseTalkingRT opReleaseTalking(Identity in0, ReleaseTalkingT in1) throws Error;
        // 对讲获取组成员信息接口
        ["ami"] PttReqMemberInfoRT opPttReqMemberInfo(Identity in0, PttReqMemberInfoT in1) throws Error;
		["ami"] PttReqMemberInfoRT1 opPttReqMemberInfo1(Identity id, PttReqMemberInfoT1 in) throws Error;
        // 申请话权接口
		["ami"] CommonRequestT opPttReqRight(Identity in0, PttReqRightT in1) throws Error;
		["ami"] int opSetIntercomTimeOutInfo(Identity in0, PttTimeOutT in1) throws Error;
		["ami"] PttTimeOutT opGetIntercomTimeOutInfo(Identity in0, string cid) throws Error;
        // 获取组信息接口
        idempotent void opPttReqGroupInfo(Identity in0, PttReqGroupInfoT in1);
    };
    // subscribe
    interface PttSB {
    };
};

#endif
