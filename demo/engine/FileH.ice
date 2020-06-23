/* -*- C++ -*- */

#include "Error.ice"
#include "Header.ice"


#ifndef FILEH_ICE
#define FILEH_ICE
[["js:es6-module"]]

module Dispatcher {
    struct UploadEvent2T 
	{
		string snum;
		Ice::StringSeq dnum;
		string fname;
		string fid;
		string fpath;
		FileState state = FileStateNone;
		FileType ftype = FileTypeNone;
		string sendtime;
    };
    sequence<UploadEvent2T> UploadEvent2Seq;
};

#endif
