/* -*- C++ -*- */  
/**
 * @file Register.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef REGISTERCB_ICE
#define REGISTERCB_ICE
[["js:es6-module"]]

module Dispatcher {

    struct ForceLogoutT {
        ECode code;
    };

    // callback
    interface RegisterCB {
        // 强制下线接口
	idempotent void onForceLogout(ForceLogoutT in0);
    };
    interface RegisterCBSub {
    };
};

#endif
