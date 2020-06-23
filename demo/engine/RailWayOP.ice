/* -*- C++ -*- */  
/**
 * @file CallingOP.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"

#ifndef RAILWAYOP_ICE
#define RAILWAYOP_ICE
[["js:es6-module"]]

module Dispatcher {

	struct StationLineT
	{
		int stationid=-1;
		string Employeeid=""; 
	};
	struct StationLineRT
	{
		int LineID=0;
		string LineName="";
		int StationID=0;
		string Description="";
	};
	sequence <StationLineRT> StationLineRTSeq;
	struct StationT
	{
		string Employeeid=""; 
	};
	struct StationRT
	{
		int StationID=0; 
		string StationName="";
		string StationDes="";
	};
	sequence <StationRT> StationRTSeq;
    // operate
    interface RailWayOP {
		["ami"] StationLineRTSeq opGetStationLine(Identity id, StationLineT in) throws Error;
		["ami"] StationRT opGetStation(Identity id, StationT in) throws Error;
		["ami"] StationRTSeq opGetAllStation(Identity id) throws Error;
    };

};

#endif
