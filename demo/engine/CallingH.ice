/* -*- C++ -*- */  
/**
 * @file Calling.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef CALLINGH_ICE
#define CALLINGH_ICE
[["js:es6-module"]]

module Dispatcher {

    struct PlayAudioEvT {
	string cid;
        string uuid;
	PlayAudioType type = PlayAudioTypeNone;
    };
	enum CallDirect {
        CallDirectNone,
        CallDirectOut,
        CallDirectIn,
    };

	struct SessionChangeT {
	string cid;
	string callingnum;
	string callingname;
	string othernum;
	string othername;
	CallDirect direction = CallDirectNone;
	CallState state = CallStateNone;
	CallType type = CallTypeNone;
	int level;
	MediaType isVideo = MediaTypeNone;
	string RoadParameters;
    };
	sequence<SessionChangeT> SessionChangeTSeq;
};

#endif
