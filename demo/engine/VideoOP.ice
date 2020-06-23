/* -*- C++ -*- */  
/**
 * @file VideoOP.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef VIDEOOP_ICE
#define VIDEOOP_ICE
[["js:es6-module"]]

module Dispatcher {

    struct VideoBugStartT {
        string dstid;
        string ip;
        string port;
        string codec;
        string srcid;
    };

    struct VideoBugStartRT {
        string cid;
        string srcid;
    };

    struct VideoBugEndT {
        string cid;
        string srcid;
    };

    struct VideoBugEndRT {
        string srcid;
    };

    struct PlayVideoT {
        string cid;
        string fid;
		PlayVideoType state = PlayVideoTypeNone;
    };

    struct PlayVideoRT {
        int code;
    };

    struct VideoInfoT
    {
        string dummy;
    };
	struct VideoChannelInfo{
		int ID;
		int ChannelNum;
		string bindEmployeeID;
		string ChannelName="";
	};
	sequence<VideoChannelInfo> VideoChannels;
    struct VideoInfoElem {
        int id;
        string videoIP;
        string videoport;
        string user;
        string password;
        string showname;
        emVideoDeviceType type;
        VideoChannels channels;
    };
    sequence<VideoInfoElem> VideoInfoSeq;
  
    struct VideoInfoRT {
        VideoInfoSeq vseq;
    };
	struct VideoChannelInfo1{
		int ID;
		int ChannelNum;
		string bindEmployeeID;
		string ChannelName="";
	};
	sequence<VideoChannelInfo1> VideoChannels1;
    struct VideoInfoElem1 {
        int id;
        string videoIP;
        string videoport;
        string user;
        string password;
        string showname;
        int type;
        VideoChannels1 channels;
    };
    sequence<VideoInfoElem1> VideoInfoSeq1;
	struct VideoInfoRT1 {
        VideoInfoSeq1 vseq;
    };
	enum VideoControlType {
        VideoControlTypeX,
        VideoControlTypeY,
        VideoControlTypeZoom,
		VideoControlTypeLR,
		VideoControlTypeFocus
    }; 
	struct CameraNumberControl
	{
		string number;
		VideoControlType ctype=VideoControlTypeX;
		bool IsStart=true;
		int  TimeOut=0;
		float step;
	};
	struct CameraIPControl
	{
		string strip;
		string strport;
		string struser;
		string strpwd;
		int channel=-1;
		VideoControlType ctype=VideoControlTypeX;
		bool IsStart=true;
		int  TimeOut=0;
		float step;
	};
	struct HistoryVideoT
	{
		string srcnumber;
		string caramnumber;
		string timestart;
		string timeend;
	};
	struct HistoryVideoOperateT
	{
		string cid="";
		string caramnumber="";
		int second=0;
	};
	struct HistoryVSpeedT
	{
		string cid="";
		string caramnumber="";
		float speed=1;
	};
	struct PlayHistoryVideoRT
	{
		string cid;
		string caramnumber;
		string msg;
	};
	struct SipPhoneVideoBugT {
        string called;
		string caller;
        string codec;
    };
	struct SipPhoneVideoBugRT {
        string cid;
		string empid;
        string sessnum;
    };
    interface VideoOP {
        // 视频监控开始
        ["ami"] VideoBugStartRT opVideoBugStart(Identity in0, VideoBugStartT in1) throws Error;
        // 视频监控结束
        ["ami"] VideoBugEndRT opVideoBugEnd(Identity in0, VideoBugEndT in1) throws Error;
        // 播放视频文件
        ["ami"] PlayVideoRT opPlayVideo(Identity in0, PlayVideoT in1) throws Error;
        // 取视频数据
        ["ami"] VideoInfoRT opVideoInfo(Identity in0, VideoInfoT in1) throws Error;
		["ami"] VideoInfoRT1 opVideoInfo1(Identity in0, VideoInfoT in1) throws Error;
		["ami"] void opCameraNumberControl(Identity in0, CameraNumberControl in1) throws Error;
		["ami"] void opCameraIPControl(Identity in0, CameraIPControl in1) throws Error;
		["ami"] void opGetHistoryVideo(Identity in0, HistoryVideoT in1) throws Error;
		["ami"] PlayHistoryVideoRT opPlayHistoryVideo(Identity in0, HistoryVideoT in1) throws Error;
		["ami"] void opHistoryVideoPlay(Identity in0, HistoryVideoOperateT in1) throws Error;
		["ami"] void opHistoryVideoPause(Identity in0, HistoryVideoOperateT in1) throws Error;
		["ami"] void opHistoryVideoSpeed(Identity in0, HistoryVSpeedT in1) throws Error;
		["ami"] SipPhoneVideoBugRT opSipPhoneVideoBug(Identity in0, SipPhoneVideoBugT in1) throws Error;
    };

};

#endif
