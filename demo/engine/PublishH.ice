/* -*- C++ -*- */  
/**
 * @file EventH.ice
 * @author ygh
 */


#ifndef PUBLISHH_ICE
#define PUBLISHH_ICE
[["js:es6-module"]]

module Dispatcher {
	struct ContentInfo
	{
		string strContent="";
	};
	sequence<ContentInfo> SubContentSeq;
	struct SubInfo
	{
		string subHeader="";
		SubContentSeq subContents;
	};
	sequence<SubInfo> SubInfoSeq;
	struct SubInfos {
        SubInfoSeq Infos;
    };
	struct PubInfo
	{
		string subHeader="";
		string subMsg="";
	};
	struct FixReceiveInfo
	{
		string subHeader="";
		string subMsg="";
		string receive="";
	};
	struct OnReceiveHeartBeat
	{
		string number="";
		bool issub=false;
	};
};

#endif
