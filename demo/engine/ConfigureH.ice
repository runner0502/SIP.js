/* -*- C++ -*- */
/**
 * @file ConfigureH.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef CONFIGUREH_ICE
#define CONFIGUREH_ICE
[["js:es6-module"]]

module Dispatcher {

    struct TreeT {
        string userId;
		string groupnum;
		string dnsprefix;
        int type;
    };

    class UserT {
        string userid;
        string username;
        int type = 8;
		string dnsprefix;
		int islocal;
		RegisterState rstate = RegisterStateNone; // 注册状态
        CallState cstate = CallStateNone;         // 呼叫状态
        string othernumber;                       // 其他号码
        string othername;                         // 其他状态
    };
    sequence<UserT> UserSeq;

    class GroupT;
    sequence<GroupT> GroupSeq;

    class GroupT {
        int id;
        string groupnum;
        string groupname;
        GroupType type = GroupTypeNone;
        UserSeq user;
        GroupSeq group;
		string dnsprefix;
		int islocal;
		int canshowall;
    };

    class TreeRT {
        GroupSeq roots;
    };

    //版本信息
    struct VersionElem {
	string name;
	string type;
	string version;
	string time;
    };
    sequence<VersionElem> VersionSeq;

    struct VersionEventT {
	VersionSeq vseq;
    };

    struct GetVersionT {
	string dummy;
    };
	
    struct GetVersionRT
    {
	VersionSeq vseq;
    };

};

#endif
