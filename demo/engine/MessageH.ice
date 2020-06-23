/* -*- C++ -*- */  


#include "Error.ice"
#include "Header.ice"
#include "FileH.ice"

#ifndef MESSAGEH_ICE
#define MESSAGEH_ICE
[["js:es6-module"]]

module Dispatcher {

    struct Message2T {
        string msgid;
        string body;
        string sendid;
        string time;
        Ice::StringSeq receiver;
        UploadEvent2Seq attach;
		UserType utype=UserTypeDispatch;
    };
    sequence<Message2T> Message2Seq;

  
};

#endif
