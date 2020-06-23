/* -*- C++ -*- */  
/**
 * @file Ptt.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef PTTH_ICE
#define PTTH_ICE
[["js:es6-module"]]

module Dispatcher {

    //PTT状态信息
    struct PttIndCallInfoElem
    {
	string group;
	string speaker;
	string callid;
    };
    sequence<PttIndCallInfoElem> PttIndCallInfoSeq;

    struct G3MessageT
    {
        string sid;
        string employeeid;
        PttIndCallInfoSeq callinfo;
        string ip;
        int port;
    };

    struct PttIndGroupInfoElem
    {
        string groupname;
        string groupnum;
        int grouplevel;
        int ipstatespace;
        int ipheartbeatspace;
        string ip;
        int port;
		GroupType thetype=GroupTypeNone;
    };
    sequence<PttIndGroupInfoElem> PttIndGroupInfoSeq;

    struct PttIndGroupInfoT
    {
        PttIndGroupInfoSeq seq;
        string employeeid;
        string ip;
        int port;
        string type;
    };

    struct PttReqRightRT {
	string employeeid;
	string result;
	string reason;
    };
};

#endif
