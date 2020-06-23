/* -*- C++ -*- */  


#include "Error.ice"
#include "Header.ice"
#include "FaxH.ice"

#ifndef FAXOP_ICE
#define FAXOP_ICE
[["js:es6-module"]]

module Dispatcher {

    interface FaxOP {
        // 发送传真接口
        ["ami"] FaxRT opFax(Identity id, FaxT in) throws Error;
    };
};

#endif
