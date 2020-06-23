/* -*- C++ -*- */  
/**
 * @file PttCB.ice
 * @author ygh
 */

#include "Error.ice"
#include "Header.ice"
#include "PttH.ice"

#ifndef PTTCB_ICE
#define PTTCB_ICE
[["js:es6-module"]]

module Dispatcher {
    // callback
    interface PttCB {
        // 对讲状态变化接口（仅3G对讲）
	idempotent void onG3Message(G3MessageT in0);
        // 组信息变化接口
        idempotent void onPttIndGroupInfo(PttIndGroupInfoT in0);
        // 申请话权状态回复接口
        idempotent void onPttReqRightR(PttReqRightRT in0);
    };

};

#endif
