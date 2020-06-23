/* -*- C++ -*- */  
/**
 * @file GisCB.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef GISCB_ICE
#define GISCB_ICE

#include "DispatcherDB.ice"
[["js:es6-module"]]

module Dispatcher {


    struct GisInfoEventT {
        string mEmployeeid;
        double mLatitude;
        double mLongitude;
        string mPositionTime;
        string mMessage;
        string disid;
		int type;
    };
	struct GisInfoEventT1 {
        string mEmployeeid;
        double mLatitude;
        double mLongitude;
        string mPositionTime;
        string mMessage;
        string disid;
		int type;
		string dnsprefix;
    };
    interface GisCB {
        // 下发gis订阅信息
	idempotent void onGisInfoEvent(GisInfoEventT in0);
	idempotent void onGisInfoEvent1(GisInfoEventT1 in0);
    };
};

#endif
