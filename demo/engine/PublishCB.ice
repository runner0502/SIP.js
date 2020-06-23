/* -*- C++ -*- */  
/**
 * @file PublishCB.ice
 * @author ygh
 */
 #include "Error.ice"
#include "Header.ice"
#include "PublishH.ice"

#ifndef PUBLISHCB_ICE
#define PUBLISHCB_ICE
[["js:es6-module"]]

module Dispatcher {
    interface PublishCB {
		idempotent void onReceivePublishMsg(PubInfo info);
		idempotent void onReceiveFixReceiveMsg(FixReceiveInfo info);
		idempotent void onReceiveHB(OnReceiveHeartBeat info);
    };
};

#endif
