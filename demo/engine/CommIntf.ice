/* -*- C++ -*- */  

#ifndef COMMINTF_ICE
#define COMMINTF_ICE

#include "DispatcherDB.ice"
#include "Header.ice"
[["js:es6-module"]]

module Dispatcher
{
    // exception DSError
    // {
    //     int error;
    //     string desc;
    // };

    // struct OpLoginType
    // {
    //     string employeeid;
    //     string pass;
    //     string ip;
    //     int interval;
    //     int type;
    //     string clientid;
    // };

    // struct OpLogoutType
    // {
    //     string id;
    //     string clientid;
    // };

    // sequence<string> stringSeq;
    // sequence<int> intSeq;
    //版本信息
    // struct MdsCommonVersionElem
    // {
    //     string name;
    //     string type;
    //     string version;
    //     string time;
    // };
    // sequence<MdsCommonVersionElem> MdsCommonVersionSeq;

    // struct MdsCommonVersionEventType
    // {
    //     MdsCommonVersionSeq vseq;
    // };
	
    // struct MdsCommonGetVersionType
    // {
    //     string sid;
    //     string employeeid;
    // };
	
    // struct MdsCommonGetVersionRType
    // {
    //     string sid;
    //     MdsCommonVersionSeq vseq;
    // };

    // struct MdsCommonDataApplyUploadType
    // {
    //     string sid;
    //     string snum;
    //     stringSeq dnum;
    //     string fname;
    //     int ftype;
    // };

    // struct MdsCommonDataApplyUploadRsType
    // {
    //     string sid;
    //     string snum;
    //     string fname;
    //     string fpath;
    //     string fid;
    // };

    // exception MdsCommonDataApplyUploadExcp
    // {
    //     string sid;
    //     string snum;
    //     string fname;
    //     string errid;
    //     string dis;
    // };

    // struct MdsCommonDataUploadEventType
    // {
    //     string snum;
    //     string fid;
    //     int type;
    // };

    // struct MdsCommonDataFaxType
    // {
    //     string fid;
    //     string srcnum;
    //     string dstnum;
    // };

    // struct MdsCommonDataFaxRsType
    // {
    //     string dummy;
    // };

    // exception MdsCommonDataFaxExcp
    // {
    //     string dummy;
    // };

    // struct MdsCommonDataFaxRspType
    // {
    //     string fid;
    //     int code;
    // };

    // struct MdsCommonDataApsuUploadEventType
    // {
    //     string snum;
    //     string dnum;
    //     string fname;
    //     string fid;
    //     string fpath;
    //     int type;
    //     int ftype;
    // };

    // struct MdsCommonDataGetFlistType
    // {
    //     string sid;
    //     string empid;
    //     string sendid;
    //     string recvid;
    //     string isfinish;
    //     string begtime;
    //     string endtime;
    //     Ice::IntSeq msgtype;
    // };

    // struct fileMsg
    // {
    //     string msgid;
    //     string sendid;
    //     string sendname;
    //     string msgbody;
    //     string sendtime;
    //     int    isupload;
    //     int    msgtype;
    //     string recvid;
    //     string recvname;
    //     string isfinish;
    //     string recvtime;
    // };
    // sequence<fileMsg> fileSeq;

    // struct MdsCommonDataGetFlistRType
    // {
    //     string sid;
    //     string empid;
    //     fileSeq fseq;
    // };

    // struct MemberType
    // {
    //     string employeeid;
    // };
    // sequence<MemberType> MemberTypeSeq;

    // struct MdsSessionAgentCreateConfType
    // {
    //     string sid;
    //     string employeeid;
    //     MemberTypeSeq member;
    //     string sessname;
    //     string sessnum;
    //     string calltype;
    //     int isVideo;
    // };

    // struct MdsSessionAgentCreateConfRsType
    // {
    //     string sid;
    //     string sessnum;
    //     string cid;
    //     string empid;
    // };

    // exception MdsSessionAgentCreateConfExcp
    // {
    //     string sid;
    //     string empid;
    //     int errid;
    //     string dis;
    // };

    // struct MdsSessionAgentCreateConfReType
    // {
    //     string sid;
    //     int errid;
    //     string dis;
    // };

    // struct MdsSessionAgentAddMemberType
    // {
    //     string sid;
    //     string cid;
    //     string employeeid;
    //     int answertype;
    //     string originate;
    // };

    // struct MdsSessionAgentAddMemberRsType
    // {
    //     string sid;
    //     string cid;
    //     string empid;
    // };

    // exception MdsSessionAgentAddMemberExcp
    // {
    //     string sid;
    //     int errid;
    //     string dis;
    //     string empid;
    // };

    // struct MdsSessionAgentAddMemberReType
    // {
    //     string sid;
    //     int errid;
    //     string dis;
    //     string empid;
    // };

    // struct MdsSessionAgentDelMemberType
    // {
    //     string sid;
    //     string cid;
    //     string employeeid;
    //     string originate;
    // };

    // struct MdsSessionAgentDelMemberRsType
    // {
    //     string sid;
    //     string cid;
    //     string empid;
    // };

    // exception MdsSessionAgentDelMemberExcp
    // {
    //     string sid;
    //     int errid;
    //     string dis;
    //     string empid;
    // };

    // struct MdsSessionAgentDelMemberReType
    // {
    //     string sid;
    //     int errid;
    //     string dis;
    // };

    // //dpt申请话权
    // struct MdsSessionAgentApplyTalkingType
    // {
    //     string sid;
    //     string cid;
    //     string employeeid;
    // };

    // struct MdsSessionAgentApplyTalkingRsType
    // {
    //     string sid;
    //     string cid;
    // };

    // exception MdsSessionAgentApplyTalkingExcp
    // {
    //     string sid;
    //     int errid;
    //     string dis;
    // };

    // struct MdsSessionAgentApplyTalkingReType
    // {
    //     string sid;
    //     int errid;
    //     string dis;
    // };

    // //用户,部门关系
    // class UserRelationType;
    // sequence<UserRelationType> UserChilds;
	
    // class UserRelationType
    // {
    //     string userid;
    //     string username;
    //     int type;
    //     UserChilds childs;
    // };
    
    // //获取用户关系的返回值
    // class GetUserRelationRType
    // {
    // 	string sid;
    // 	string userId;
    // 	UserRelationType root;
    // };
    
    // //获取用户关系的输入参数
    // struct GetUserRelationType
    // {
    // 	string sid;
    // 	string userId;
    // 	int type;
    // };

    // struct MdsSessionAgentGetVideoRsType
    // {
    //     string sid;
    //     string streamid;
    //     string ip;
    //     string port;
    //     string codec;
    //     string stream;
    //     string framerate;

    //     string agentid;
    //     string employeeid;
    //     string cid;
    // };

    // struct MdsSessionAgentGetVideoReType
    // {
    //     string sid;
    //     string errid;
    //     string dis;

    //     string agentid;
    //     string employeeid;
    //     string cid;
    // };

    // struct MdsCommonPlayVideoType
    // {
    //     string cid;
    //     string fid;
    //     int state;
    // };

    // struct MdsCommonPlayVideoRType
    // {
    //     int code;
    // };

    // exception MdsCommonPlayVideoExcp
    // {
    //     int code;
    // };

    // struct MdsSessionApsuGetVideoRsType
    // {
    //     string sid;
    //     string streamid;
    //     string ip;
    //     string port;
    //     string codec;
    //     string stream;
    //     string framerate;

    //     string agentid;
    //     string employeeid;
    //     string cid;
    // };

    // struct MdsSessionApsuGetVideoReType
    // {
    //     string sid;
    //     string errid;
    //     string dis;

    //     string agentid;
    //     string employeeid;
    //     string cid;
    // };

    // struct MdsCommonGisTraceType
    // {
    //     string sid;
    //     string employeeid;
    //     string dstid;
    //     string space;           // not used
    //     string flag;
    // };

    // struct MdsCommonGisTraceRsType
    // {
    //     string sid;
    //     string employeeid;
    // };

    // exception MdsCommonGisTraceExcp
    // {
    //     string sid;
    //     string errid;
    //     string dis;
    //     string employeeid;
    // };

    // struct MdsGisApsuSendInfoEventType
    // {
    //     string mEmployeeid;
    //     double mLatitude;
    //     double mLongitude;
    //     string mPositionTime;
    //     string mMessage;
    //     string disid;
    // };

    // struct MdsVideoBugStartType
    // {
    //     string sid;
    //     string dstid;
    //     string ip;
    //     string port;
    //     string codec;
    //     string srcid;
    // };

    // struct MdsVideoBugStartRsType
    // {
    //     string sid;
    //     string cid;
    //     string srcid;
    // };

    // exception MdsVideoBugStartExcp
    // {
    //     string sid;
    //     string srcid;
    // };

    // struct MdsVideoBugEndType
    // {
    //     string sid;
    //     string cid;
    //     string srcid;
    // };

    // struct MdsVideoBugEndRsType
    // {
    //     string sid;
    //     string srcid;
    // };

    // exception MdsVideoBugEndExcp
    // {
    //     string sid;
    //     string srcid;
    // };

    // struct MdsVideoBugEventType
    // {
    //     string cid;
    //     string ip;
    //     string port;
    //     string srcid;
    // };

    interface CommSrv
    {
/**
 *      函数调用
 * 
 */
	// idempotent int opLogin(string id, OpLoginType v0, out string sptpsw, out string firstlogin) throws DSError;
	// idempotent int opLogout(string id, OpLogoutType v0) throws DSError;
	// idempotent void opHeatbeat(string id, int interval);

	// ["ami"] MdsCommonDataApplyUploadRsType MdsCommonDataApplyUpload(string id, MdsCommonDataApplyUploadType v0) throws MdsCommonDataApplyUploadExcp;
	// ["ami"] MdsCommonDataGetFlistRType MdsCommonDataGetFlist(string id, MdsCommonDataGetFlistType v0);
	// ["ami"] MdsSessionAgentCreateConfRsType MdsSessionAgentCreateConf(string id, MdsSessionAgentCreateConfType v0) throws MdsSessionAgentCreateConfExcp;
	// ["ami"] MdsSessionAgentAddMemberRsType MdsSessionAgentAddMember(string id, MdsSessionAgentAddMemberType v0) throws MdsSessionAgentAddMemberExcp;
	// ["ami"] MdsSessionAgentDelMemberRsType MdsSessionAgentDelMember(string id, MdsSessionAgentDelMemberType v0) throws MdsSessionAgentDelMemberExcp;
	// ["ami"] MdsSessionAgentApplyTalkingRsType MdsSessionAgentApplyTalking(string id, MdsSessionAgentApplyTalkingType v0) throws MdsSessionAgentApplyTalkingExcp;
	// ["ami"] GetUserRelationRType GetUserRelation(string id, GetUserRelationType inparm);
        // ["ami"] MdsCommonDataFaxRsType MdsCommonDataFax(string id, MdsCommonDataFaxType v0) throws MdsCommonDataFaxExcp;
        // ["ami"] MdsCommonPlayVideoRType MdsCommonPlayVideo(string id, MdsCommonPlayVideoType v0) throws MdsCommonPlayVideoExcp;
        // ["ami"] MdsCommonGisTraceRsType MdsCommonGisTrace(string id, MdsCommonGisTraceType v0) throws MdsCommonGisTraceExcp;
        // 废弃
	// idempotent void MdsSessionApsuGetVideoRs(string id, MdsSessionApsuGetVideoRsType v0);
	// idempotent void MdsSessionApsuGetVideoRe(string id, MdsSessionApsuGetVideoReType v0);

/**
 *      事件类型
 * 
 */
	// idempotent void MdsCommonVersionEvent(string id, MdsCommonVersionEventType v0);
	// idempotent void MdsCommonDataUploadEvent(string id, MdsCommonDataUploadEventType v0);
	// idempotent void MdsCommonDataFaxRspEvent(string id, MdsCommonDataFaxRspType v0);
    };

    interface CommCli
    {

/**
 *      事件类型
 * 
 */
	// idempotent void onForceLogout(string id, int error, string desc);
	// idempotent void MdsCommonDataApsuUploadEvent(MdsCommonDataApsuUploadEventType v0);
	// idempotent void MdsCommonDataApsuFaxRspEvent(MdsCommonDataFaxRspType v0);
	// idempotent void MdsGisApusSendInfoEvent(MdsGisApsuSendInfoEventType v0);
        // idempotent void MdsVideoBugApsuEvent(MdsVideoBugEventType v0);

        // 废弃
	// idempotent void MdsSessionAgentGetVideoRs(MdsSessionAgentGetVideoRsType v0);
	// idempotent void MdsSessionAgentGetVideoRe(MdsSessionAgentGetVideoReType v0);

    };
};

#endif
