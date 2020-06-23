/* -*- C++ -*- */  
// **********************************************************************
//
// Copyright (c) 2003-2010 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************

#ifndef MDCINTF_ICE
#define MDCINTF_ICE

#include "RegisterOP.ice"
#include "RegisterCB.ice"
#include "CallingOP.ice"
#include "CallingCB.ice"
#include "CallingVOP.ice"
#include "CallingVCB.ice"
#include "ConfigureOP.ice"
#include "ConfigureCB.ice"
#include "CommIntf.ice"
#include "GisOP.ice"
#include "GisCB.ice"
#include "VideoOP.ice"
#include "VideoCB.ice"
#include "PttH.ice"
#include "PttOP.ice"
#include "PttCB.ice"
#include "MessageOP.ice"
#include "MessageCB.ice"
#include "PrePlanOP.ice"
#include "PrePlanCB.ice"
#include "FaxOP.ice"
#include "FaxCB.ice"
#include "StateCB.ice"
#include "DecoderOP.ice"
#include "DecoderCB.ice"
#include "McuOP.ice"
#include "McuCB.ice"
#include "PublishOP.ice"
#include "PublishCB.ice"
#include "RailWayOP.ice"
#include "BusinessOP.ice"
[["js:es6-module"]]

module Dispatcher
{
    


//监控用-session
    struct MdsStateAgentMonitorSessionType
    {
        string sid;
        string employeeid;
    };
    
    struct MdsStateAgentMonitorSessionElem
    {
        string cid;
        string caller;
        string called;
        int    type;
        string time;
        int level;
        string state;
    };
    sequence<MdsStateAgentMonitorSessionElem> MdsStateAgentMonitorSessionSeq;
  
    struct MdsStateAgentMonitorSessionRType
    {
        string sid;  	
        MdsStateAgentMonitorSessionSeq sseq;
    };
  
//监控用-设备
    struct MdsStateAgentMonitorDeviceType
    {
        string sid;
        string employeeid;
        string employeename;
        int type;
    };
  
    struct MdsStateAgentMonitorDeviceElem
    {
        string employeename;
        string employeeid;
        int type;  	
    };
    sequence<MdsStateAgentMonitorDeviceElem> MdsStateAgentMonitorDeviceSeq;
  
    struct MdsStateAgentMonitorDeviceRType
    {
        string sid;
        MdsStateAgentMonitorDeviceSeq dseq;
    };

    struct MdsSessionAgentSetNightServiceType
    {
        string sid;
        string employeeid;
        string nightnumber;
        string starttime;
        string endtime;
    };
  
    struct MdsSessionAgentSetNightServiceRsType
    {
        string sid;
    };
	
    struct MdsSessionAgentSetNightServiceReType
    {
        string sid;
        int errid;
        string dis;
    };
  
    struct MdsDataAgentGetConfigType
    {
        string sid;
        string employeeid;
    };
  
    struct MdsDataAgentGetConfigRType
    {
        string sid;  	
        string databasetype;
        string databasename;
        string databaseuser;
        string databasepwd;  	
        string databaseip;
        string databaseport;
    };
  

  
    struct MdsDataAgentDatachangeType
    {
        int a;
    };

    struct MdsDataAgentGetDataType
    {
        string sid;
        string tablename;
    };

  
    struct MdsDataAgentGetTerminalVideoIpType
    {
        string sid;
        string employeeid;
    };

    struct MdsDataAgentGetTerminalVideoIpRType
    {
        string sid;
        string employeeid;
        string videoip;
    };


    struct BindTerminalT {
        string number;          // 绑定号码
        int type;               // 绑定类型
    };
    sequence<BindTerminalT> BindTerminalSeq;
    struct BindTerminalRT {
        string ret;
    };

    struct AllStateT {
        string type;            // 用户类型
        string group;           // 组号
        string employeeid;      // 用户号码
    };
    struct AllStateRT {
        string employeeid;      // 用户号码
        RegisterState rstate = RegisterStateNone; // 注册状态
        CallState cstate = CallStateNone;         // 呼叫状态
        string othernumber;                       // 其他号码
        string othername;                         // 其他状态
    };
    sequence <AllStateRT> AllStateRSeq;

    struct SetNightServiceT {
        string nightnumber;     // 夜服号码
        string starttime;       // 开始时间
        string endtime;         // 结束时间
    };

    struct SetNightServiceRT {
        string dummy;           // 站位符号
    };

    struct TerminalDetailT {
        string number;          // 号码
    };

    struct TerminalDetailRT {
        int      id;
        string   employeeId;    // 用户
        string   password;      // 密码
        int      employeeLevel; // 级别
        int      departId;      // 部门号码
        int      roleId;        // 角色类型
        string   name;          // 姓名
        string   addTime;       // 增加时间
        string   modifyTime;    // 修改时间
        int      theState;      // 状态
        int      theType;       // 类型
        string   remark;        // 注视
        double   latitude;      // 纬度
        double   longitude;     // 精度
        int      isRecord;      // 是否录音
        string   monName;       // 姓名
        string   monPasswd;     // 密码
        string   monIp;         // ip
        int      monPort;       // 端口
        string   monFlag;       // 是否是监控用户
        int      isVideo;       // 是否录像
    };

    struct GetSessionEventT {
        string dummy;
    };

    interface MDCSrv extends CommSrv, RegisterOP, CallingOP, ConfigureOP, VideoOP, GisOP, PttOP, MessageOP, CallingVOP, PrePlanOP, FaxOP,DecoderOP,McuOP,PublishOP,BusinessOP,RailWayOP
    {
        // 调度台绑定号码接口
        ["ami"] BindTerminalRT opBindTerminal(Identity in0, BindTerminalSeq in1) throws Error;
        // 调度台获取所有成员状态接口
        ["ami"] AllStateRSeq opAllState(Identity in0, AllStateT in1) throws Error;
        // 设置夜服接口
        ["ami"] SetNightServiceRT opSetNightService(Identity in0, SetNightServiceT in1) throws Error;
        // 获取单个成员信息
        ["ami"] TerminalDetailRT opTerminalDetail(Identity in0, TerminalDetailT in1) throws Error;
        idempotent void opGetSessionEvent(Identity id, GetSessionEventT in);
/**
 *  函数调用
 * 
 */
        // data
        idempotent void MdsDataAgentGetConfig(string id, MdsDataAgentGetConfigType v0);
        idempotent void MdsDataAgentDatachange(string id, MdsDataAgentDatachangeType v0);


        idempotent void MdsStateAgentMonitorSession(string id, MdsStateAgentMonitorSessionType v0);
        idempotent void MdsStateAgentMonitorDevice(string id, MdsStateAgentMonitorDeviceType v0);
        idempotent void MdsDataAgentGetTerminalVideoIp(string id, MdsDataAgentGetTerminalVideoIpType v0);

    };

    interface MDCCli extends CommCli, RegisterCB, CallingCB, ConfigureCB, VideoCB, GisCB, PttCB, MessageCB, CallingVCB, PrePlanCB, FaxCB,StateCB,DecoderCB,McuCB,PublishCB
    {
        

    };
};

#endif
