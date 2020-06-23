import {Ice} from "ice";
import {Dispatcher} from "./generated";

enum e_Status{nUnavailable, nDisconnect, nConnected, nPublished}

class iceClientCallback extends Dispatcher.MDCCli
{
     _lasthbTime:number = 0;

     
     public get lasthbTime() : number {
         if(this._lasthbTime == 0)
         {
             this._lasthbTime = Date.now();
         }
         return this._lasthbTime;
     }
     
    onForceLogout(in0: Dispatcher.ForceLogoutT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }    onSessionChange(in0: Dispatcher.SessionChangeT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onSessionChange1(in0: Dispatcher.SessionChange1T, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onCMStateChange(in0: Dispatcher.CMStateChangeT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onCallChange(in0: Dispatcher.CallChangeT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onPlayAudioEv(in0: Dispatcher.PlayAudioEvT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onVideoBug(in0: Dispatcher.VideoBugT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onVideoBug1(in0: Dispatcher.VideoBugT1, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onPlayVideoEv(in0: Dispatcher.PlayVideoEvT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onGisInfoEvent(in0: Dispatcher.GisInfoEventT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onGisInfoEvent1(in0: Dispatcher.GisInfoEventT1, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onG3Message(in0: Dispatcher.G3MessageT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onPttIndGroupInfo(in0: Dispatcher.PttIndGroupInfoT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onPttReqRightR(in0: Dispatcher.PttReqRightRT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onUploadEvent2(in0: Dispatcher.UploadEvent2T, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onDelFileEvent(fid: string, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onMessage(in0: Dispatcher.Message2T, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onDelMessage(msgid: string, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onSendVideoEv(_in: Dispatcher.SendVideoEvT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onGetVideoEv(_in: Dispatcher.GetVideoEvT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onPrePlanEv(_in: Dispatcher.PrePlanEvT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onFaxEv(_in: Dispatcher.FaxEv2T, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onNewFaxEv(_in: Dispatcher.NewFaxEvT, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onAgentState(aseq: Dispatcher.AgentSeq, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onReceivePublishMsg(info: Dispatcher.PubInfo, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onReceiveFixReceiveMsg(info: Dispatcher.FixReceiveInfo, current: Ice.Current): void | PromiseLike<void> {
        throw new Error("Method not implemented.");
    }
    onReceiveHB(info: Dispatcher.OnReceiveHeartBeat, current: Ice.Current): void | PromiseLike<void> {
        // throw new Error("Method not implemented.");
        this._lasthbTime = Date.now();
        console.log("onReceiveHB " + this._lasthbTime);
    }  
}

export class iceAPI {
_dispatcherPrx:Dispatcher.MDCSrvPrx = null;
 _caller:string = "20000";
 _myid: Dispatcher.Identity;

 _iceStatus:e_Status = e_Status.nUnavailable;
 _iceCommunicator:Ice.Communicator;
 _serverIP:string;
 _serverPort:number;
 _username:string;
 _isCheckIceNetworck:boolean = false;
 _hbCount:number = 0;
 _myReceiver: iceClientCallback;

    constructor() {
        
    }

    static instance:iceAPI = null;
    static getInstance():iceAPI
    {
        if(iceAPI.instance == null)
        {
            iceAPI.instance = new iceAPI();
        }
        return iceAPI.instance;
    }

    static hellow(){}

    iceInit()
    {
        const properties = Ice.createProperties();
        properties.setProperty("Ice.ACM.Close", "0");
        const id = new Ice.InitializationData();
        id.properties = properties;
        this._iceCommunicator = Ice.initialize( id );
        this._iceStatus = e_Status.nDisconnect; 
    }
    
    async connect()
    {
    // const hostname = document.location.hostname || "127.0.0.1";
    let proxy = this._iceCommunicator.stringToProxy("MDCSrv" +
    ":ws -h " + this._serverIP + " -p " + this._serverPort);
    
    this._caller = this._username;
    
    proxy.ice_timeout( 1000 );
    
    //
    // Set or clear the timeout.
    //
    // const timeout:number = Number($("#timeout").val());
    const timeout:number = 1000;
    proxy = proxy.ice_invocationTimeout(timeout > 0 ? timeout : -1);
    
    //
    // Set the mode and protocol
    //
    // const mode = $("#mode").val();
    // if(mode == "twoway")
    // {
    proxy = proxy.ice_twoway();
    // }
    // else if(mode == "twoway-secure")
    // {
    //     proxy = proxy.ice_twoway().ice_secure(true);
    // }
    // else if(mode == "oneway")
    // {
    //     proxy = proxy.ice_oneway();
    // }
    // else if(mode == "oneway-secure")
    // {
    //     proxy = proxy.ice_oneway().ice_secure(true);
    // }
    // else if(mode == "oneway-batch")
    // {
    //     proxy = proxy.ice_batchOneway();
    // }
    // else if(mode == "oneway-batch-secure")
    // {
    //     proxy = proxy.ice_batchOneway().ice_secure(true);
    // }
    
    this._dispatcherPrx = Dispatcher.MDCSrvPrx.uncheckedCast(proxy);
    
    const myadapter = await this._iceCommunicator.createObjectAdapter("");
    const identity1 : Ice.Identity = new Ice.Identity( this._caller, "MDCCli" );
    
    this._myid = new Dispatcher.Identity( this._caller );
    
    // myReceiver: Ice.IceClient;
    this._myReceiver = new iceClientCallback();
    
    myadapter.add( this._myReceiver , identity1 );
    
    const connection = await this._dispatcherPrx.ice_getConnection();
    connection.setAdapter( myadapter );
    this._iceStatus = e_Status.nConnected;
    }
    
    sendHeartBeat()
    {
        this._hbCount++;
        if( this._hbCount<3 )
        {
            return;
        }
        this._hbCount = 0;
    
        if( this._dispatcherPrx != null && this._iceStatus == e_Status.nPublished )
        {
            console.log("sendhb");
            
            this._dispatcherPrx.opPublishHB( this._myid, 30 );
        }
    }
    
     publishInfo()
    {
        const subinfos:Dispatcher.SubInfos = new Dispatcher.SubInfos();
        subinfos.Infos = new Array<Dispatcher.SubInfo>();
        const subinfo:Dispatcher.SubInfo = new Dispatcher.SubInfo();
        subinfo.subHeader = Dispatcher.EventPttStateSpeaker;
        subinfos.Infos.push(subinfo);
        const subinfoEmployeeState:Dispatcher.SubInfo = new Dispatcher.SubInfo();
        subinfoEmployeeState.subHeader = Dispatcher.EventEmployeeStateReg;
        subinfos.Infos.push(subinfoEmployeeState);
        const subinfoEmployeeCall:Dispatcher.SubInfo = new Dispatcher.SubInfo();
        subinfoEmployeeCall.subHeader = Dispatcher.EventEmployeeStateCall;
        subinfos.Infos.push(subinfoEmployeeCall);
        this._dispatcherPrx.opPublishInfo( this._myid, subinfos );
        this._iceStatus = e_Status.nPublished;
    }
    
    checkIceNetwork()
    {
        console.log( "checkIceNetwork " + iceAPI.getInstance()._iceStatus );
        if( iceAPI.getInstance()._myReceiver != null && (Date.now() - iceAPI.getInstance()._myReceiver.lasthbTime) > 20000 )
        {
            console.error("hbTimeout!!!")
            iceAPI.getInstance()._iceStatus = e_Status.nDisconnect;
        }
        if( iceAPI.getInstance()._iceStatus == e_Status.nUnavailable )
        {
            iceAPI.getInstance().iceInit();
        }    
        if(iceAPI.getInstance()._iceStatus == e_Status.nDisconnect)
        {
            iceAPI.getInstance().connect();
        }
        if( iceAPI.getInstance()._iceStatus == e_Status.nConnected )
        {
            iceAPI.getInstance().publishInfo();
        }
    
        iceAPI.getInstance().sendHeartBeat();
        // iceAPI.hellow();
    
        if( iceAPI.getInstance()._isCheckIceNetworck )
        {
            setTimeout(iceAPI.getInstance().checkIceNetwork, 1000);
            // setInterval(iceAPI.getInstance().checkIceNetwork, 1000);
        }
    }

    
regist(serverip:string, serverport:number, username:string)
{
    this._serverIP = serverip;
    this._serverPort = serverport;
    this._username = username;
    this._isCheckIceNetworck = true;
    this.checkIceNetwork();
}

    async getGroupTree()
{
    const info1: Dispatcher.TreeT = new Dispatcher.TreeT();
    info1.groupnum = "";
    info1.userId = this._caller;
    const result = await this._dispatcherPrx.opTree( this._myid, info1 );
    result.roots.length;
    console.log();

    // $("#output").val( result.roots[0].groupname);

    result.roots.forEach(element => {
        console.log( " groupname = " + element.groupname);
    });
    $("#output").val(result.roots.length);
    
}
async  makecall(calleeStr:string, isVideo:boolean)
{
    try
    {
        // setState(State.SendRequest);
        

        // if(helloPrx.ice_isBatchOneway())
        // {
        //     batch++;
        // }
        const info:Dispatcher.CreateConfT = new Dispatcher.CreateConfT();
        info.caller = this._caller;
        const callee:Dispatcher.CalleeT = new Dispatcher.CalleeT(calleeStr);
        const callees:Dispatcher.CalleeT[] = new Array<Dispatcher.CalleeT>();
        info.member = callees;
        info.member.push(callee);
        info.ctype=Dispatcher.CallType.CallTypeSingle2;
        if(isVideo){
            info.isVideo = Dispatcher.MediaType.MediaTypeVideo;
        }else{
            info.isVideo = Dispatcher.MediaType.MediaTypeAudio;
        }
        await this._dispatcherPrx.opCreateConf(this._myid, info);
    }
    catch(ex)
    {
        $("#output").val(ex.toString());
    }
    finally
    {
        // setState(State.Idle);
    }
}
   
async  applySpeak(groupnum:string)
{
    try
    {
        // setState(State.SendRequest);
        
        const info:Dispatcher.PttReqRightT = new Dispatcher.PttReqRightT();
        info.caller = this._caller;
        info.groupnum = groupnum;
        info.messageinfo = "req:ptt-request";
        await this._dispatcherPrx.opPttReqRight(this._myid, info);
    }
    catch(ex)
    {
        $("#output").val(ex.toString());
    }
    finally
    {
        // setState(State.Idle);
    }
}

async releaseSpeak(groupnum:string)
{
    try
    {
        // setState(State.SendRequest);
        
        const info:Dispatcher.PttReqRightT = new Dispatcher.PttReqRightT();
        info.caller = this._caller;
        info.groupnum = groupnum;
        info.messageinfo = "req:ptt-cancel";
        await this._dispatcherPrx.opPttReqRight(this._myid, info);
    }
    catch(ex)
    {
        $("#output").val(ex.toString());
    }
    finally
    {
        // setState(State.Idle);
    }
}

async  createConference(calleds:string, isVideo:boolean)
{
    try
    {
        const info:Dispatcher.CreateConfT = new Dispatcher.CreateConfT();
        info.caller = this._caller;
        const callee:Dispatcher.CalleeT = new Dispatcher.CalleeT(calleds);
        const callees:Dispatcher.CalleeT[] = new Array<Dispatcher.CalleeT>();
        info.member = callees;
        info.member.push(callee);
        info.ctype=Dispatcher.CallType.CallTypeSingle2;
        if(isVideo){
            info.isVideo = Dispatcher.MediaType.MediaTypeVideo;
        }else{
            info.isVideo = Dispatcher.MediaType.MediaTypeAudio;
        }
        info.sessname = "MT" + Date.parse(new Date().toString());
        info.sessnum = this._caller + Date.parse(new Date().toString());
        await this._dispatcherPrx.opCreateConf(this._myid, info);
    }
    catch(ex)
    {
        $("#output").val(ex.toString());
    }
    finally
    {
        // setState(State.Idle);
    }
}

async conferenceAddMember(cid:string, member:string)
{
    try
    {
        const info:Dispatcher.AddMemberT = new Dispatcher.AddMemberT();
        info.cid = cid;
        info.number = member;
        info.astype = Dispatcher.AnswerType.AnswerTypeMan;
        await this._dispatcherPrx.opAddMember(this._myid, info);
    }
    catch(ex)
    {
        $("#output").val(ex.toString());
    }
    finally
    {
        // setState(State.Idle);
    }
}

async conferenceDeleteMember(cid:string, member:string)
{
    try
    {
        const info:Dispatcher.DelMemberT = new Dispatcher.DelMemberT();
        info.cid = cid;
        info.number = member;
        await this._dispatcherPrx.opDelMember(this._myid, info);
    }
    catch(ex)
    {
        $("#output").val(ex.toString());
    }
    finally
    {
        // setState(State.Idle);
    }
}

async  endConference(cid:string)
{
    try
    {
        const info:Dispatcher.ForceEndConfeT = new Dispatcher.ForceEndConfeT();
        info.cid = cid;
        await this._dispatcherPrx.opForceEndConfe(this._myid, info);
    }
    catch(ex)
    {
        $("#output").val(ex.toString());
    }
    finally
    {
        // setState(State.Idle);
    }
}


}