/* -*- C++ -*- */  


#include "Error.ice"
#include "Header.ice"
#include "FaxH.ice"

#ifndef FAXCB_ICE
#define FAXCB_ICE
[["js:es6-module"]]

module Dispatcher {

    interface FaxCB {
        // 传真时间变更接口
	idempotent void onFaxEv(FaxEv2T in);
        idempotent void onNewFaxEv(NewFaxEvT in);
    };
};

#endif
