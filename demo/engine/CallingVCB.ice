/* -*- C++ -*- */  
/**
 * @file CallingVCB.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "CallingVH.ice"

#ifndef CALLINGVCB_ICE
#define CALLINGVCB_ICE
[["js:es6-module"]]

module Dispatcher {

    interface CallingVCB {
        // 发送视频通知
        idempotent void onSendVideoEv(SendVideoEvT in);
        // 获取视频通知
        idempotent void onGetVideoEv(GetVideoEvT in);
    };
};

#endif
