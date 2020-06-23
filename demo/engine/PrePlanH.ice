/* -*- C++ -*- */  
/**
 * @file PrePlanH.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef PREPLANH_ICE
#define PREPLANH_ICE
[["js:es6-module"]]

module Dispatcher {
    // 获取预案
    struct PrePlanT {
        string dummy;
    };
    // 取预案返回
    struct PrePlanRT {
        int planId;
        string planName;
	string planAddr;
	string planMeans;//手段
	string planNumber;
        int planType;
        string dis;
    };
    sequence<PrePlanRT> PrePlanRSeq;
    // 执行预案
    struct PrePlanStartT {
        int planId;
        string passwd;
		string caller;
    };
    // 执行预案返回
    struct PrePlanStartRT {
        string dummy;
    };
    // 执行预案
    struct PrePlanEvT {
        int planId;
        PrePlanState state = PrePlanStateNone;
    };
    // 停止预案
    struct PrePlanStopT {
        int planId;
        string passwd;
    };
    // 停止预案返回
    struct PrePlanStopRT {
        string dummy;
    };
};

#endif
