/* -*- C++ -*- */  
/**
 * @file MessageCB.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "FileCB.ice"
#include "MessageH.ice"

#ifndef MESSAGECB_ICE
#define MESSAGECB_ICE
[["js:es6-module"]]

module Dispatcher {

    interface MessageCB extends FileCB {
// 短信通知接口
        idempotent void onMessage(Message2T in0);  //调度台发出短信
		idempotent void onDelMessage(string msgid);  //删除短信事件
    };
};

#endif
