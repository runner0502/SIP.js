/* -*- C++ -*- */  
/**
 * @file EventH.ice
 * @author ygh
 */
 #include "Error.ice"
#include "Header.ice"
#include "PublishH.ice"

#ifndef PUBLISHOP_ICE
#define PUBLISHOP_ICE
[["js:es6-module"]]

module Dispatcher {
    interface PublishOP {
        ["ami"] void opPublishInfo(Identity in0, SubInfos in1);  
		["ami"] void opUnPublishInfo(Identity in0);  
		["ami"] bool opPublishHB(Identity in0, int in1) throws Error;
    };
};

#endif
