/* -*- C++ -*- */  
/**
 * @file GisOP.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "DispatcherDB.ice"

#ifndef GISOP_ICE
#define GISOP_ICE
[["js:es6-module"]]

module Dispatcher {

    struct GisInfoByTimeT {
        string employeeid;
        string begin;
        string end;
        int type;
    };

    struct GisInfoByEllipseT {
        string sid;
        double a;
        double b;
        double c;
        double d;
        string type;
    };

    struct GisInfoByRectangleT {
        double a;
        double b;
        double c;
        double d;
        string type;
    };

    struct GetPositionT {
        string employeeid;
    };
  
    struct GetPositionElem
    {
		string employeeid="";
        string name="";
        string longitude="";
        string latitude="";
        string message="";
		int type=-1;
		string dnsprefix="";
		RegisterState regstate=RegisterStateLogout;
		string positiontime="";
    };
    sequence<GetPositionElem> GetPositionSeq;
  
    struct GetPositionRT {
        GetPositionSeq pseq;
    };
	
	struct GetPositionT1 {
        string employeeid;
    };
  
    struct GetPositionElem1
    {
        string employeeid;
        string name;
        string longitude;
        string latitude;
        string message;
		int type;
		string dnsprefix;
		RegisterState regstate=RegisterStateLogout;
    };
    sequence<GetPositionElem1> GetPositionSeq1;
  
    struct GetPositionRT1 {
        GetPositionSeq1 pseq;
    };
    struct GisTraceT {
        string dstid;
        string space;           // not used
        GisTraceType flag = GisTraceTypeNone;
    };
    sequence<GisTraceT> GisTraceSeq;

    struct GisTraceRT {
        string employeeid;
    };
    sequence<GisTraceRT> GisTraceRSeq;

    struct GisInfoT {
        double latitude;
        double longitude;
        string time;
        string grmc;
    };

	struct GISDETAIL1
    {
		string mEmployeeid;
		double mLatitude;
		double mLongitude;
		string mPositionTime;
		string mMessage;
        int type;
		string dnsprefix;
		RegisterState regstate=RegisterStateLogout;
    };
    sequence<GISDETAIL1> GISDETAILSeq1;
    interface GisOP {
        // 按时间获取gis信息
        ["ami"] DispatcherDB::GISDETAILSeq opGisInfoByTime(Identity in0, GisInfoByTimeT in1) throws Error;
		["ami"] GISDETAILSeq1 opGisInfoByTime1(Identity in0, GisInfoByTimeT in1) throws Error;
        // 按照椭圆获取gis信息
        ["ami"] DispatcherDB::GISDETAILSeq opGisInfoByEllipse(Identity in0, GisInfoByEllipseT in1) throws Error;
		["ami"] GISDETAILSeq1 opGisInfoByEllipse1(Identity in0, GisInfoByEllipseT in1) throws Error;
        // 按照矩形型获取gis信息
        ["ami"] DispatcherDB::GISDETAILSeq opGisInfoByRectangle(Identity in0, GisInfoByRectangleT in1) throws Error;
		["ami"] GISDETAILSeq1 opGisInfoByRectangle1(Identity in0, GisInfoByRectangleT in1) throws Error;
        // 获取当前gis信息
        ["ami"] GetPositionRT opGetPosition(Identity in0, GetPositionT in1) throws Error;
		["ami"] GetPositionRT1 opGetPosition1(Identity in0, GetPositionT1 in1) throws Error;
        // 订阅gis信息
        ["ami"] GisTraceRSeq opGisTrace(Identity in0, GisTraceSeq in1) throws Error;
        // 终端上报gis信息
        idempotent void opGisInfo(Identity in0, GisInfoT in1);
		//按时间分页查询
		["ami"] string opGetGisInfos(Identity in0, string in1) throws Error;
		//上报Gis信息
		["ami"] string opReportGisInfo(Identity in0, string in1) throws Error;
		["ami"] string opGetGisInfoByEllipse(Identity in0, string in1) throws Error;
    };
};

#endif
