/* -*- C++ -*- */  
/**
 * @file PrePlanOP.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "PrePlanH.ice"
#include "MessageOP.ice"

#ifndef PREPLANOP_ICE
#define PREPLANOP_ICE
[["js:es6-module"]]

module Dispatcher {
	
    interface PrePlanOP extends MessageOP{
        // 预案查询接口
        ["ami"] PrePlanRSeq opPrePlan(Identity id, PrePlanT in) throws Error;
        // 预案开始
        ["ami"] PrePlanStartRT opPrePlanStart(Identity id, PrePlanStartT in) throws Error;
        // 预案结束
        ["ami"] PrePlanStopRT opPrePlanStop(Identity id, PrePlanStopT in) throws Error;
		["ami"] string opGetPlan(Identity id, string in) throws Error;
		["ami"] string opGetPlanType(Identity id, string in) throws Error;
    };
};

#endif
