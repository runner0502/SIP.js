/* -*- C++ -*- */  
/**
 * @file EventH.ice
 * @author ygh
 */


#ifndef EVENTH_ICE
#define EVENTH_ICE
[["js:es6-module"]]

module Dispatcher {
	const string EventEmployeeStateReg="Employee.State.Reg";
	const string EventEmployeeStateCall="Employee.State.Call";

    const string EventPttState="Ptt.State";
	const string EventPttStateSpeaker="Ptt.State.Speaker";
	const string EventPttWaiting="Ptt.Waiting";
	const string EventPttReject="Ptt.Reject";

	const string EventHistoryVideoInfo="Video.Role.History.Info";

	const string EventSessionStateChange="Session.State.Change";
	const string EventSessionMemberChange="Session.Member.Change";
	const string EventSessionSendToCreater="Session.SendToCreater.State";
	const string EventSessionSendToAllDTP="Session.SendToAllDTP.State";
	const string EventSessionMemberToAllDTP="Session.SendMemberToAllDTP.State";

	const string EventCallVideoGetVideoEvent="CallVideo.GetVideo.Event";

	const string EventBusFileOnReceive="BusFile.OnReceive";

	const string EventCALLPLAYAUDIOCB="CallPlay.Audio.CB";

	const string EventGisPositionChange="GIS.Position.Change";

	const string EventFileMsgOnReceive="FileMsg.OnReceive";

	const string EventMsgOnReceive="Msg.OnReceive";

	const string EventEmployeeChannelChange="Employee.Relay.ChannelChange";

	const string EventDBChangeGroupChange="DB.Group.Change";

	const string EventGroupMsgGroupChange="GroupMsg.Group.Change";
	const string EventGroupMsgGroupEmployeeChange="GroupMsg.GroupEmp.Change";

	const string EventPlanTypeChange="Plan.TypeChange";
	const string EventPlanInfoChange="Plan.InfoChange";

};

#endif
