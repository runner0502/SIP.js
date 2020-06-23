/* -*- C++ -*- */  
/**
 * @file PrePlanCB.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "PrePlanH.ice"

#ifndef PREPLANCB_ICE
#define PREPLANCB_ICE
[["js:es6-module"]]

module Dispatcher {
    interface PrePlanCB {
        // 预案执行状态接口
        idempotent void onPrePlanEv(PrePlanEvT in);
    };
};

#endif
