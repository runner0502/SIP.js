/* -*- C++ -*- */  
/**
 * @file VideoCB.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef VIDEOCB_ICE
#define VIDEOCB_ICE
[["js:es6-module"]]

module Dispatcher {

    struct VideoBugT {
        string cid="";
        string ip="";
        string port="";
        string srcid="";
        string dstid="";
        VBugStateType state = VBugStateTypeNone;
    };
	struct VideoBugT1 {
        string cid="";
        string ip="";
        string port="";
        string srcid="";
        string dstid="";
		string audiocodec="";
		string videocodec="";
        VBugStateType state = VBugStateTypeNone;
    };
	struct PlayVideoEvT {
	string cid;
        string uuid;
	PlayVideoType type = PlayVideoTypeNone;
    };
    interface VideoCB {
        idempotent void onVideoBug(VideoBugT in0);
		idempotent void onVideoBug1(VideoBugT1 in0);
		idempotent void onPlayVideoEv(PlayVideoEvT in0);
    };
};

#endif
