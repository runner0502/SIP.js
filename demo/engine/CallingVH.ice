/* -*- C++ -*- */  
/**
 * @file CallingVH.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef CALLINGVH_ICE
#define CALLINGVH_ICE
[["js:es6-module"]]

module Dispatcher {

    struct SendVideoT {
        string sid;
	string cid;
	string employeeid;
	string ip;
	string port;
	string codec;
	string stream;
	string framerate;
	string agentid;
    };

    struct SendVideoRT {
        string sid;
	string ip;
	string port;
	string agentid;
    };

    struct GetVideoT {
        string sid;
	string cid;
	string employeeid;
	string ip;
	string port;
	string employeeiddst;
	string codec;
	string stream;
	string framerate;
	string agentid;
    };

    struct GetVideoRT {
        string sid;
	string cid;
    };

    struct ChangeVideoT {
        string sid;
	string cid;
	string employeeid;
	string ip;
	string port;
	string employeeiddst;
	string codec;
	string stream;
	string framerate;
	string agentid;
    };

    struct ChangeVideoRT {
        string sid;
	string streamid;
	string ip;
	string port;
	string codec;
	string stream;
	string framerate;
	string agentid;
    };

    struct ReleaseVideoT {
        string sid;
	string cid;
	string employeeid;
	string ip;
	string port;
	string streamid;
	string employeeiddst;
	string agentid;
    };

    struct ReleaseVideoRT {
	string sid;
	string agentid;
    };

    struct PushVideoT {
        string sid;
	string cid;
	string employeeid;
	string streamid;
	string revid;
        PushVideoType IsPush = PushVideoTypeNone;
	string agentid;
    };

    struct PushVideoRT {
        string sid;
	string agentid;
    };

    struct SendVideoEvT {
	string sid;
	string ip;
	string port;
	string agentid;
    };

    struct GetVideoEvT {
	string sid;
	string streamid;
	string ip;
	string port;
	string codec;
	string stream;
	string framerate;
        string employeeid;
        string cid;
	string agentid;
    };
	struct GetKeyFrameT {
		string cid;
		string employeeid;
		string deviceid;
    };
};

#endif
