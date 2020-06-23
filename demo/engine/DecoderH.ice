/* -*- C++ -*- */

#include "Error.ice"
#include "Header.ice"


#ifndef DECODERH_ICE
#define DECODERH_ICE
[["js:es6-module"]]

module Dispatcher {
    struct DecoderDeviceInfo 
	{
		string id;
		string videoip;
		string videoport;
		string user;
		string Password;
		string showname;
		int thetype;
    };
    sequence<DecoderDeviceInfo> DecoderDeviceInfoSeq;
	struct DecoderDisplayChan
	{
		byte byChan;
	};
	sequence<DecoderDisplayChan> DecoderDisplayChanSeq;
	struct DecoderDisplayCfg
	{
		int Channelid;
		int dwWindowMode;
		byte byAudio;
		byte byVedioFormat;
		int dwResolution;
		DecoderDisplayChanSeq byJoinDecChans;
		byte byDispChanType;
    };
    sequence<DecoderDisplayCfg> DecoderDisplayCfgSeq;
};

#endif
