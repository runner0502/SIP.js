/* -*- C++ -*- */  
/**
 * @file Error.ice
 * @author Liming Yang
 */


#ifndef ERROR_ICE
#define ERROR_ICE
[["js:es6-module"]]

module Dispatcher {

    enum ECode {
        ECodeNone,

        ECodeRegister = 1000,
        ECodeRegisterKickout,
        ECodeRegisterTimeout,
        ECodeRegisterNotRegister,
		ECodeRegisterDisConnect,
		ECodeRegisterUserIsLogin,
		ECodeRegisterErrorPwd,

        ECodeCalling = 1100,
        ECodeCallingCaller,
        ECodeCallingCallee,
        ECodeCallingType,
        ECodeCallingSessionNotFound,
        ECodeCallingTerminalNotFound,
        ECodeCallingNumberNotRegistered,
        ECodeCallingUserNotExist,
        ECodeCallingNoAuth,
        ECodeCallingOprFailed,
        ECodeCallingUserNotInGroup,
        ECodeCallingGroupNotFound,
        ECodeCallingCallTypeError,
        ECodeCallingSessionCreateFailed,
        ECodeOpFaxFailured,
        ECodeFileNotFound,
        ECodeNoCid,
		ECodeNumberBusy,
		ECodeCallingOperateFailed,
		ECodeCallingNotHaveFitCall,
		ECodeNotDTPUser,
		ECodeSessionStateError,
		ECodeCanNotCallIntercomGroup,
		ECodeCallingOperateNotConn,


        ECodeConsole = 1200,
        ECodeConsoleBind,
		ECodeErrLicense,
		ECodeErrCanNotUse,
		ECodeConsoleBindErrorType,
		ECodeConsoleBindFristRegist,

		ECodeNotMCUSession=1300,
		ECodeIsBinded,

		ECodeMsgGroupExist=1400,
		ECodeMsgGroupNotExist,

		ECodeVideoBugCalledIsVoice=1500,
    };

    const string ECodeNoneDis = "未定义错误";

    const string ECodeRegisterKickoutDis = "异地登陆";
    const string ECodeRegisterTimeoutDis = "登陆超时";
    const string ECodeRegisterNotRegisterDis = "号码未注册";
	const string ECodeRegisterDisConnectDis="连接已断开";
	const string ECodeRegisterUserIsLoginDis="号码已在其它终端登录";
	const string ECodeRegisterErrorPwdDis="密码错误";

    const string ECodeCallingCallerDis = "主叫号码错误";
    const string ECodeCallingCalleeDis = "被叫号码错误";
    const string ECodeCallingTypeDis = "呼叫类型错误";
    const string ECodeCallingSessionNotFoundDis = "找不到呼叫ID";
    const string ECodeConsoleBindDis = "绑定号码错误,号码未注册";
	const string ECodeConsoleBindErrorTypeDis = "绑定号码错误,号码类型错误";
	const string ECodeConsoleBindFristRegistDis="请先注册再绑定号码";
    const string ECodeCallingTerminalNotFoundDis = "号码不存在";
    const string ECodeCallingNumberNotRegisteredDis = "号码未注册";
    const string ECodeCallingUserNotExistDis = "用户不存在";
    const string ECodeCallingNoAuthDis = "没有权限";
    const string ECodeCallingOprFailedDis = "操作执行失败";
    const string ECodeCallingUserNotInGroupDis = "用户在该组中不存在";
    const string ECodeCallingGroupNotFoundDis = "组号不存在";
    const string ECodeCallingCallTypeErrorDis = "呼叫类型错误";
    const string ECodeCallingSessionCreateFailedDis = "呼叫创建失败";
	const string ECodeCallingOperateFailedDis = "操作失败";
	const string ECodeCallingNotHaveFitCallDis="没有符合条件呼叫";
	const string ECodeSessionStateErrorDis="呼叫状态错误";
	const string ECodeCanNotCallIntercomGroupDis="不能呼叫对讲组";
	const string ECodeCallingOperateNotConnDis="仅可对通话中的用户进行操作";

    const string ECodeOpFaxFailuredDis = "发送传真失败";
    const string ECodeFileNotFoundDis = "找不到文件";
    const string ECodeNoCidDis = "呼叫ID为空";
	const string ECodeNumberBusyDis = "指定号码忙";
	const string ECodeErrLicenseDis = "超出license限制";
	const string ECodeErrCanNotUseDis="功能未开通";
	const string ECodeNotDTPUserDis="非调度用户";

	const string ECodeNotMCUSessionDis="非MCU呼叫";
	const string ECodeIsBindedDis="号码已被绑定，绑定人:";

	const string ECodeMsgGroupExistDis="当前群已存在";
	const string ECodeMsgGroupNotExistDis="指定的群不存在";

	const string ECodeVideoBugCalledIsVoiceDis="指定号码在音频通话中";
    exception Error {
	ECode code = ECodeNone;
	string desc;
    };

	const string SYSMessageDiskUsed="调度服务器存储快满，请及时备份或清除数据";
	const string SYSMessageDiskClear="调度服务器存储空间清理完毕";
};

#endif
