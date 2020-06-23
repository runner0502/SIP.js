/* -*- C++ -*- */
/**
 * @file File.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"


#ifndef MCUOP_ICE
#define MCUOP_ICE
[["js:es6-module"]]

module Dispatcher {
	struct ScreenDisPlay{
		int index=-1;
		string showmember="";
		bool hasstream=true;
	};
	struct ScreenInfo{
		string type;
		int stream=1;
		int role=2;
	};
	sequence<ScreenDisPlay> ScreenDisPlaySeq;
    struct SetScreenT {
        string cid;
		ScreenInfo screen;
		ScreenDisPlaySeq DisplaySeq;
    };

    struct SetScreenRT {
        string cid;
		int reslut;
    };
	struct SetMemberRoleT {
        string cid;
		string member;
		int role;
    };
	struct SetMemberRoleRT {
        string cid;
		int reslut;
    };
	struct MCUDevice {
        int id;
		string ip;
		int thetype;
		int defaultbandwidth;
		string thename;
    };
	struct MCUMettingOP{
		string cid;
		string number;
	};
	sequence<MCUDevice> MCUDeviceSeq;
    interface McuOP {
        ["ami"] SetScreenRT opSetScreen(Identity in0, SetScreenT in1) throws Error;
		["ami"] SetMemberRoleRT opSetMemberRole(Identity in0, SetMemberRoleT in1) throws Error;
		["ami"] MCUDeviceSeq opGetMCUDevice(Identity in0) throws Error;
		["ami"] void opMCUMettingAddDevice(Identity in0,MCUMettingOP in1) throws Error;
		["ami"] void opMCUMettingDelDevice(Identity in0,MCUMettingOP in1) throws Error;
    };
};

#endif
