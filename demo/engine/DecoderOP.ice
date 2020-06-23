/* -*- C++ -*- */
/**
 * @file File.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "DecoderH.ice"

#ifndef DECODEROP_ICE
#define DECODEROP_ICE
[["js:es6-module"]]

module Dispatcher {

    struct GetDisplayCfg {
        string Decoderid;
    };
	struct SetDecoderCfg{
		string Decoderid;
		DecoderDisplayCfg Cfg;
	};
	struct RetDecoderAllCfg{
		string Decoderid;
		DecoderDisplayCfgSeq Cfgs;
	};
	struct opDecoderInfo{
		string Decoderid;
		string Channel;
		string cid;
		string disNumber;
	};
	struct opTransferRTPInfo{
		string cid;
		string Number;
		string disip;
		int disport;
	};
	struct opDecoderByUrlInfo{
		string Decoderid;
		string Channel;
		string url;
	};
	struct opDecoderByVideoInfo{
		string Decoderid;
		string Channel;
		string VideoUser;
		string VideoPwd;
		string VideoIP;
		string VideoPort;
		string VideoChannel;
		emVideoDeviceType VideoType;
	};
	struct opChannelStatus{
		string Decoderid;
		string Channel;
	};
	struct RetDecoderAbility
	{
		string Decoderid="";
		emVideoDeviceType VideoType=VDTNONE;
		int InChannelsNum=0;
	};
    interface DecoderOP 
	{
		["ami"] DecoderDeviceInfoSeq opGetDecoderDevice(Identity in0) throws Error;
		["ami"] RetDecoderAllCfg opGetDisplayCfg(Identity in0, GetDisplayCfg in1);
		["ami"] RetDecoderAbility opGetDecoderAbility(Identity in0, GetDisplayCfg in1);
		["ami"] bool opGetChannelDecoderState(Identity in0, opChannelStatus in1);
		["ami"] bool opSetDisplayCfg(Identity in0, SetDecoderCfg in1);
		["ami"] bool opStartDecoder(Identity in0, opDecoderInfo in1);
		["ami"] bool opStartDecoderByUrl(Identity in0, opDecoderByUrlInfo in1);
		["ami"] bool opStopDecoder(Identity in0, opDecoderInfo in1);
		["ami"] bool opStopDecoderByUrl(Identity in0, opDecoderByUrlInfo in1);
		["ami"] bool opTransferRTP(Identity in0, opTransferRTPInfo in1);
		["ami"] bool opTransferStopRTP(Identity in0, opTransferRTPInfo in1);
		["ami"] bool opStartDecoderByVideoInfo(Identity in0, opDecoderByVideoInfo in1);
		["ami"] bool opStopDecoderByVideoInfo(Identity in0, opDecoderByVideoInfo in1);
		["ami"] string opGetDisplayCfg1(Identity in0, GetDisplayCfg in1);
		["ami"] string opSetWindows(Identity in0, string decoderid,string jsonvalue);
		["ami"] string opGetSubWindowsStatus(Identity in0, string decoderid,string jsonvalue);
		["ami"] bool opSetDisplayPosition(Identity in0, string decoderid,string jsonvalue);
		["ami"] bool opSetScreenMode(Identity in0, string decoderid,string jsonvalue);
    };
};

#endif
