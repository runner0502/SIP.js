/* -*- C++ -*- */
/**
 * @file File.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"


#ifndef FILEOP_ICE
#define FILEOP_ICE
[["js:es6-module"]]

module Dispatcher {

    struct ApplyUploadET {
        string fid;
	string fname;
	FileType ftype = FileTypeNone;
    };
    sequence<ApplyUploadET> ApplyUploadESeq;

    struct ApplyUploadT {
        Ice::StringSeq recv;
        ApplyUploadET file;
    };

    struct ApplyUploadRT {
	string fid;
	string fname;
	string fpath;
    };
    sequence<ApplyUploadRT> ApplyUploadRSeq;

    struct UploadEventT {
	string fid;
	FileState state = FileStateNone;
    };

    struct FlistT {
	string sendid;
	string recvid;
	string isfinish;
	string begtime;
	string endtime;
        FileType ftype = FileTypeNone;
    };
    sequence<FlistT> FlistSeq;

    struct FlistRT {
        string fid;
        string sendid;
        string sendname;
        string msgbody;
        string sendtime;
        int isupload;
        FileType type = FileTypeNone;
        string recvid;
        string recvname;
        int isfinish;
        string recvtime;
    };
    sequence<FlistRT> FlistRSeq;
	struct FileReceivedT {
        string fid;
        string employeeid;
    };
	struct FileDeleteT {
        string fid;
    };
	sequence<FileDeleteT> FileDeleteTSeq;
    interface FileOP {
        // 文件上传接口
        ["ami"] ApplyUploadRT opApplyUpload(Identity in0, ApplyUploadT in1) throws Error;
        // 文件上传状态通知接口
		idempotent void opUploadEvent(Identity in0, UploadEventT in1) throws Error;
			// 获取文件列表接口
		["ami"] FlistRSeq opFlist(Identity in0, FlistSeq in1) throws Error;
		["ami"] void opFileReceived(Identity in0, FileReceivedT in1) throws Error;  
		["ami"] void opDeleteFile(Identity in0, FileDeleteTSeq in1) throws Error;  
		["ami"] string opUploadFile(Identity in0, string json) throws Error;
		["ami"] string opSetUploadFileState(Identity in0, string json) throws Error;
		["ami"] string opGetFileInfoByCondition(Identity in0, string json) throws Error;
    };
};

#endif
