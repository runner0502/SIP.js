/* -*- C++ -*- */  

#ifndef FAXSERVER_ICE
#define FAXSERVER_ICE
[["js:es6-module"]]

module Fax
{
    enum FaxDirectType {
        FaxDirectTypeSend,
        FaxDirectTypeRecv,
    };

    exception Error {
        string fid;
        int code;
        string desc;
    };

    struct FaxOriginateT {
        string fid;
        string srcip;
	int srcport;
        string srcpath;
        string srcuser;
        string dstip;
	int dstport;
        string dstpath;
        string dstuser;
        FaxDirectType direct;
    };

    struct FaxFeedbackT {
    	string fid;
        int direct;
        int code;
        string msg;
		string tiffname;
		string tiffpath;
    };

    interface FaxServer {
        // 调用传真服务器发起传真
        ["ami"] FaxFeedbackT faxOriginate(FaxOriginateT data) throws Error;
    };
};
#endif
