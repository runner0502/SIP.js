/* -*- C++ -*- */
/**
 * @file File.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "FileH.ice"


#ifndef FILECB_ICE
#define FILECB_ICE
[["js:es6-module"]]

module Dispatcher {
    interface FileCB 
	{
        // 文件上传状态通知接口
		idempotent void onUploadEvent2(UploadEvent2T in0);
		idempotent void onDelFileEvent(string fid);
    };
};

#endif
