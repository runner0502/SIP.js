/* -*- C++ -*- */  
/**
 * @file Register.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef STATECB_ICE
#define STATECB_ICE
[["js:es6-module"]]

module Dispatcher {

    struct Agent
    {
        string employeeid;
        RegisterState state;
        string othernumber;
        string othername;
        string ip;
		string DNSprefix;
    };
    sequence<Agent> AgentSeq;

    interface StateCB {
        // 成员状态改变通知接口
        idempotent void onAgentState(AgentSeq aseq);
    };
};

#endif
