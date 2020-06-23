/* -*- C++ -*- */
/**
 * @file ConfigureOP.ice
 * @author Liming Yang
 */

#include "Error.ice"
#include "Header.ice"
#include "ConfigureH.ice"

#ifndef CONFIGUREOP_ICE
#define CONFIGUREOP_ICE

[["js:es6-module"]]

module Dispatcher {

class FXDeviceNumberRT {
	string dev;
	string num;
	string name="";
	string orgid="";
	string domain="";
	string latitude="";
	string longitude="";
	string remarks="";
};
sequence<FXDeviceNumberRT> NumbersRT;
class FXOrgRT;
sequence<FXOrgRT> OrgsRT;
class FXOrgRT {
	string id;
	string name;
	string parentid;
	string ldap;
	string domain="";
	string remarks="";
	string ordernum="";
	OrgsRT Orgs;
	NumbersRT Numbers;
};

class FXDeviceRT {
	string id;
	string name;
	string remarks="";
	OrgsRT Orgs;
};
struct LocalDNSPrefixRT {
	string prefix;
};

sequence<FXDeviceRT> FXDeviceSeq;
struct GetFXDeviceT
{
	bool getdetail=true;
	string remarks="";
};
struct GetFXDeviceDetailT
{
	string fxDeviceid="";
	string orgid="";
	string remarks="";
};
struct KeyConfig {
	string Key="";
	string Value1="";
};
sequence<KeyConfig> KeyConfigSeq;
struct MealConfig {
	int id;
	string SetMealName="";
	int SetMealState;
	KeyConfigSeq Details;
};
struct KeyConfig1 {
	string TheKey="";
	string TheValue="";
};
sequence<KeyConfig1> KeyConfigSeq1;
struct MealConfig1 {
	int id;
	string SetMealName="";
	int SetMealState;
	KeyConfigSeq1 Details;
};
    // operate
    interface ConfigureOP {
        // 取得组织结构树信息
        ["ami"] TreeRT opTree(Identity in0, TreeT in1) throws Error;
        // 取得版本信息
        ["ami"] GetVersionRT opGetVersion(Identity in0, GetVersionT in1) throws Error; 
		["ami"] TreeRT opGetLocalEmployeeByType(Identity in0, TreeT in1) throws Error;
		["ami"] FXDeviceSeq opGetFXDevices(Identity in0,GetFXDeviceT in1) throws Error;
		["ami"] FXDeviceSeq opGetFXDevicesDetail(Identity in0,GetFXDeviceDetailT in1) throws Error;
		["ami"] string opGetConfigByKey(Identity in0,string in1) throws Error;
		["ami"] LocalDNSPrefixRT opLocalPrefix(Identity in0) throws Error;
		["ami"] KeyConfigSeq opGetConfigByKeys(Identity in0,KeyConfigSeq in1) throws Error;
		["ami"] MealConfig opGetMealConfig(Identity in0) throws Error;
		["ami"] KeyConfigSeq1 opGetConfigByKeys1(Identity in0,KeyConfigSeq1 in1) throws Error;
		["ami"] MealConfig1 opGetMealConfig1(Identity in0) throws Error;
		["ami"] string opGetJsonTree(Identity in0, TreeT in1) throws Error;
		["ami"] string opGetGroupDetail(Identity in0, string in1) throws Error;
		["ami"] string opSetDeviceChannel(Identity in0, string in1) throws Error;
		["ami"] string opGetBSServerInfo(Identity in0, string in1) throws Error;
		["ami"] string opGetServiceLicenseInfo(Identity in0, string in1) throws Error;
		["ami"] string opGetOtherProgramInfo(Identity in0, string in1) throws Error;
    };
    // subscribe
    interface ConfigureSB {
    };
};

#endif
