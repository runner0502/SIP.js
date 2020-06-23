/* -*- C++ -*- */  


#include "Error.ice"
#include "Header.ice"

#ifndef FAXH_ICE
#define FAXH_ICE
[["js:es6-module"]]

module Dispatcher
{
    struct FaxT {
        string fid;
        string fname;
        string srcnum;
        string dstnum;
    };

    struct FaxRT {
        string fid;
        string fname;
        string fpath;
    };

    struct FaxEvT
    {
        string fid;
        FileState code = FileStateNone;
    };

    struct FaxEv2T
    {
        string fid;
        FaxStateSend code = FaxStateSendNone;
    };

    struct NewFaxEvT {
        string fid;
    };
};

#endif
