/* -*- C++ -*- */  
/**
 * @file Register.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef REGISTEROP_ICE
#define REGISTEROP_ICE
[["js:es6-module"]]

module Dispatcher {

    struct LoginT {
	string pass;
	string ip;
	int interval;
	UserType type = UserTypeNone;
    };

    struct LoginRT {
        bool firstlogin;
        string sptpsw;
		string dnsprefix;
    };

    struct LogoutT {
	string dummy;
    };

    struct LogoutRT {
	string dummy;
    };

    struct ReloginT {
        int state;
        string ip;
    };

    struct HeartbeatRT {
        int dummy;
    };
	struct ChangePassWordT {
        string Employeeid;
        string oldPassWord;
		string newPassWord;
    };
	struct ChangePassWordRT {
        string Employeeid;
        bool	issuccess;
    };
	struct ForceKickOutT
	{
		string Employeeid;
	};
    // operate
    interface RegisterOP {
        // 登陆接口
        ["ami"] LoginRT opLogin(Identity in0, LoginT in1) throws Error;
        // 注销接口
	["ami"] LogoutRT opLogout(Identity in0, LogoutT in1) throws Error;
        // 重新登陆接口
        idempotent void opRelogin(Identity in0, ReloginT in1);
        // 在线状态心跳接口
        ["ami"] HeartbeatRT opHeartbeat(Identity in0, int in1) throws Error;
		["ami"] ChangePassWordRT opChangePassWord(Identity in0, ChangePassWordT in1) throws Error;
		["ami"] bool opForceKickOut(Identity in0, ForceKickOutT in1) throws Error;
    };
    // subscribe
    interface RegisterSB {
    };
};

#endif
