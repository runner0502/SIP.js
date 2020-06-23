/* -*- C++ -*- */  
#ifndef DISPATCHER_DATA_ICE
#define DISPATCHER_DATA_ICE

#include "Header.ice"
// [["cpp:header-ext:h"]]

// #include <Ice/Identity.ice>
[["js:es6-module"]]

module DispatcherDB
{
   

    struct EMPLOYEEINFO
    {
	int	mID;
	string	mEmployeeID;
	string	mPassword;
	int	mEmployeeLevel;	
	int	mDepartID;
	int	mRoleID;
	string	mName;
	string	mAddTime;
	string	mModifyTime;
	int	mTheState;
	int	mTheType;
	string	mRemark;
	float	mLatitude;
	float	mLongitude;
	int     mIsRecord;
	string	mMonName;
	string	mMonPasswd;
	string	mMonIP;
	int	mMonPort;
	string	mMonFlag;
	int mIsVideo;
    };
    sequence<EMPLOYEEINFO> EMPLOYEEINFOSeq;


    struct GROUPEMPLOYEE
    {
	int	mID;
	int	mGroupID;
	string	mEmployeeID;
	string	mAddTime;
    };
    sequence<GROUPEMPLOYEE> GROUPEMPLOYEESeq;

    struct EmployeeRelatedAll
    {
	int 	mID;
	string  mEmployeeID;
	string  mPassword;
	int 	mEmployeeLevel;
	int 	mDepartID;
	int 	mRoleID;
	string 	mName;
	string 	mAddTime;
	string	mModifyTime;
	int     mTheState;
	int     mTheType;
	string  mRemark;
	int 	mGroupID;
	string 	mGroupName;
	int     mGroupParentID;
	string  mGroupNum;
	int     mGroupType;
	string	mRoleName;
    };
    sequence<EmployeeRelatedAll> EmployeeRelatedAllSeq;

    struct DEVICECONFIG
    {
	int     mID;
	string  mStartDevice;
	int     mSumDevice;
	string  mServerIP;
	int     mServerPort;
	int     mTheState;
	string  mModifyTime;	
	string  mAddTime;
	int     mTheType;
	string  mUserName;
	string  mUserPWD;
    };
    sequence<DEVICECONFIG> DEVICECONFIGSeq;

    struct SYSPARAMETER
    {
	string mTheKey;
	string mTheValue;
	int    mTheState;
    };
    sequence<SYSPARAMETER> SYSPARAMETERSeq;

    struct SYSCONFIGREAD
    {
	string mTableName;
	string mAddTime;
	string mReadTime;
	int    mState;
	string mValue1;
    };
    sequence<SYSCONFIGREAD> SYSCONFIGREADSeq;

    struct CALLCALLLOGType
    {
	string mCid;
	string mCaller;
	string mCalled;
	string mCreateTime;
	string mReleaseTime;
	int mTimeLength;
	int mCallType;
	int mCallResult;
	int mReleaseReason;
    };
    sequence<CALLCALLLOGType> CALLCALLLOGSeq;

    struct CALLRECORDType
    {
	string mCid;
	string mRecordName;
	string mSubPath;
	int mReadTimes;
	int mRecordServerID;
	string mCreateTime;
	string mReleaseTime;
	int mTimeLength;
	int mRecordType;
	string mWebPath;
    };
    sequence<CALLRECORDType> CALLRECORDSeq;
  
    struct VIDEO
    {
	int    mID;
	string mVideoIP;
	string mVideoPort;
	string mUser;
	string mPassWord;
	string mShowName;
	int    mTheType;
	string mBindEmployeeID;
    };
    sequence<VIDEO> VIDEOSeq;

    struct VIDEORECORDType
    {
	string mCid;
	string mRecordName;
	string mSubPath;
	int mReadTimes;
	int mRecordServerID;
	string mCreateTime;
	string mReleaseTime;
	int mTimeLength;
	int mRecordType;
	string mWebPath;
    };
    sequence<VIDEORECORDType> VIDEORECORDSeq;

    struct MSGINFO
    {
	int mID;
	string mMsgID;
	string mSendID;
	string mSendName;			
	string mMsgBody;
	string mSendTime;			
	int mIsUpload;
	int mMsgType;
    };
    sequence<MSGINFO> MSGINFOSeq;
    
    struct MSGSENDRS
    {
	int mID;
	string mMsgID;
	string mReceiverID;
	string mReceiverName;
	string mIsFinish;
	string mRecvTime;
    };
    sequence<MSGSENDRS> MSGSENDRSSeq;

    struct ROUTECFG
    {
	int mID;
	string mRouteNum;
	string mIP;
    };
    sequence<ROUTECFG> ROUTECFGSeq;

    struct IVRCFG
    {
	int mID;
	string mIvrName;
	string mIvrNum;
    };
    sequence<IVRCFG> IVRCFGSeq;

    struct MDVSCFG
    {
	int mID;
	string mMdvsName;
	string mIP;
    };
    sequence<MDVSCFG> MDVSCFGSeq;

    struct GISDETAIL
    {
		string mEmployeeid;
		double mLatitude;
		double mLongitude;
		string mPositionTime;
		string mMessage;
        int type;
    };
    sequence<GISDETAIL> GISDETAILSeq;

    struct PREPLANINFO
    {
	string mPlanName;
	int mPlanID;
	string mPlanPasswd;
	int mPlanType;
	string mPlanAddr;
	string mPlanAlloc;
    };
    sequence<PREPLANINFO> PREPLANINFOSeq;

    struct PREPLANINSTRUMENT
    {
	int mPlanInstID;
	string mPlanInstName;
	int mPlanInstType;
    };
    sequence<PREPLANINSTRUMENT> PREPLANINSTRUMENTSeq;

    struct PREPLANINSTRUREF
    {
	int mPlanID;
	int mPlanInstID;
    };
    sequence<PREPLANINSTRUREF> PREPLANINSTRUREFSeq;

    struct PREPLANMEMBER
    {
	int mPlanInstID;
	string mEmployeeID;
    };
    sequence<PREPLANMEMBER> PREPLANMEMBERSeq;
};

#endif
