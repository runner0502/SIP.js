/* -*- C++ -*- */  
/**
 * @file MessageOP.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "FileOP.ice"
#include "MessageH.ice"
#include "FileH.ice"

#ifndef MESSAGEOP_ICE
#define MESSAGEOP_ICE
[["js:es6-module"]]

module Dispatcher {

    struct MessageET {
        string body;
        ApplyUploadESeq attach;
    };

    struct MessageT {
        Ice::StringSeq receiver;
        MessageET message;
    };

    struct MessageRT {
        string msgid;
        ApplyUploadRSeq attach;
    };
	struct MessageReceivedT {
        string msgid;
        string employeeid;
    };
	struct GetOldMsgFileT
	{
		string employeeid;
		int getnum;
	};
	struct GetOldMsgFileRT
	{
		UploadEvent2Seq fileinfos;
		Message2Seq msginfos;
	};
  
    interface MessageOP extends FileOP {
        // 短信发送接口
        ["ami"] MessageRT opMessage(Identity in0, MessageT in1) throws Error;
		["ami"] void opMessageReceived(Identity in0, MessageReceivedT in1) throws Error;
		["ami"] GetOldMsgFileRT opGetOldMsgFile(Identity in0, GetOldMsgFileT in1) throws Error;
		["ami"] void opDelMessage(Identity in0, string msgid) throws Error;  
		["ami"] string opGetGroupMsgByEmployeeid(Identity in0, string employeeid) throws Error;  
		["ami"] string opAddGroupMsg(Identity in0, string json) throws Error;  
		["ami"] string opUpdateGroupMsg(Identity in0, string json) throws Error;  
		["ami"] string opDeleteGroupMsg(Identity in0, string json) throws Error;
		["ami"] string opSendMessage(Identity in0, string json) throws Error; 
		["ami"] string opGetOldMessage(Identity in0, string json) throws Error; 
		["ami"] string opGroupMsgAddEmployee(Identity in0, string json) throws Error;  
		["ami"] string opGroupMsgDelEmployee(Identity in0, string json) throws Error;  
		["ami"] string opGetGroupMsg(Identity in0, string employeeid,string groupid) throws Error;
    };
};

#endif
