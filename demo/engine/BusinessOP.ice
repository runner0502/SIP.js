/* -*- C++ -*- */  
/**
 * @file CallingOP.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef BUSIONESSOP_ICE
#define BUSIONESSOP_ICE
[["js:es6-module"]]

module Dispatcher {

	struct BusinessTypeRT
	{
		int    id=0;
		int WTGroupID=0;
		string WorkTypeName="";
		int TheValue=0;
		string description="";
		int TheState=0;
		int IsDefault=0;
		string WTGroupName="";
	};
	sequence <BusinessTypeRT> BusinessTypeRTSeq;
	struct SendBusFileReceiveT
	{
		string MsgUUID="";
		string Receiver="";
		string ReceiverName="";
		string Remark="";
		string ModifyEmployee="";
	};
	sequence <SendBusFileReceiveT> SendBusFileReceiveSeq;
	struct StartSendBusFileT
	{
		string MsgUUID="";
		string FileUUID="";
		int FileType=0;
		string FileName="";
		string Remark="";
	};
	sequence <StartSendBusFileT> StartSendBusFileSeq;
	struct StartSendBusInfoT
	{
		string MsgUUID="";
		int KeyStationID=0;
		int KeyLineID=0;
		string KeyRailNum="";
		string Sender="";
		string senderName="";
		int WorkTypeValue=0;
		string ParentID="";
		string Descrip="";
		int SendState=0;
		StartSendBusFileSeq Files;
		SendBusFileReceiveSeq Receivers;
	};
	struct StartSendBusFileRT
	{
		string MsgUUID="";
		string FileUUID="";
		string FileName="";
		string FilePath="";
	};
	sequence <StartSendBusFileRT> StartSendBusFileRTSeq;
	struct SendBusInfoRT
	{
		string MsgUUID="";
		string Sender="";
		StartSendBusFileRTSeq Files;
	};
	struct SendBusInfoEndT
	{
		string MsgUUID="";
		int SendState=1;
	};
	struct SendBusFileEndT
	{
		string FileUUID="";
		int SendState=1;
	};
	struct BusFileReceivedT
	{
		string MsgUUID="";
		string receiver="";
	};
	struct GetNotReceivedInfoT
	{
		int maxnum=10;
		string receiver="";
	};
	struct GetNotReceivedInfoRT
	{
		int Sendnum=0;
		bool HaveOther=false;
	};
    // operate
    interface BusinessOP {
		["ami"] BusinessTypeRTSeq opGetBusinessTypes(Identity id) throws Error;
		["ami"] SendBusInfoRT opStartSendBusinessInfo(Identity id,StartSendBusInfoT in1) throws Error;
		["ami"] StartSendBusFileRT opStartSendFile(Identity id,StartSendBusFileT in1) throws Error;
		["ami"] bool opSendBusinessInfoEnd(Identity id,SendBusInfoEndT in1) throws Error;
		["ami"] bool opSendBusinessFileEnd(Identity id,SendBusFileEndT in1) throws Error;
		["ami"] bool opChangeBusFileReceive(Identity id,SendBusFileReceiveT in1) throws Error;
		["ami"] void opBusFileReceived(Identity id,BusFileReceivedT in1) throws Error;
		["ami"] GetNotReceivedInfoRT opGetNotReceivedInfo(Identity id,GetNotReceivedInfoT in1) throws Error;
		["ami"] bool opDeleteBusInfo(Identity id,string msgid) throws Error;
    };

};

#endif
