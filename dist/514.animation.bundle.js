"use strict";(self.webpackChunkLiquid_Collections_x_Overpriced_Jin=self.webpackChunkLiquid_Collections_x_Overpriced_Jin||[]).push([[514],{26514:(t,e,a)=>{a.r(e),a.d(e,{TokenDrop:()=>n});var r=a(2508),i=a(14935),s=a(9279);a(13550),a(25025),a(70332),a(8455),a(26729),a(54098),a(62555),a(26219),a(61303),a(49242),a(94317),a(13670),a(79120),a(97604),a(8187),a(19362),a(54730),a(36250),a(85725),a(38730),a(237),a(65609),a(77208),a(86841),a(49561),a(40553),a(26),a(69392),a(62822),a(40571),a(82037),a(2162),a(64063),a(34161),a(50266),a(98839),a(51375),a(43320),a(65815),a(59189),a(40721),a(24601),a(46878),a(20583),a(92355),a(84194),a(51121),a(32484),a(78435);class n extends i.au{constructor(t,e,a){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cm(t,e,c,s),a,o),(0,r._)(this,"abi",void 0),(0,r._)(this,"metadata",void 0),(0,r._)(this,"roles",void 0),(0,r._)(this,"encoder",void 0),(0,r._)(this,"estimator",void 0),(0,r._)(this,"sales",void 0),(0,r._)(this,"platformFees",void 0),(0,r._)(this,"events",void 0),(0,r._)(this,"claimConditions",void 0),(0,r._)(this,"interceptor",void 0),this.abi=c,this.metadata=new i.ag(this.contractWrapper,i.cJ,this.storage),this.roles=new i.ah(this.contractWrapper,n.contractRoles),this.encoder=new i.af(this.contractWrapper),this.estimator=new i.aQ(this.contractWrapper),this.events=new i.aR(this.contractWrapper),this.sales=new i.aj(this.contractWrapper),this.platformFees=new i.aT(this.contractWrapper),this.interceptor=new i.aS(this.contractWrapper),this.claimConditions=new i.al(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(t))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(t)}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole((0,i.br)("transfer"),s.d)}async claim(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.claimTo(await this.contractWrapper.getSignerAddress(),t,e)}async claimTo(t,e){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.erc20.claimTo(t,e,a)}async delegateTo(t){return{receipt:await this.contractWrapper.sendTransaction("delegate",[t])}}async burnTokens(t){return this.erc20.burn(t)}async burnFrom(t,e){return this.erc20.burnFrom(t,e)}async call(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];return this.contractWrapper.call(t,...a)}}(0,r._)(n,"contractRoles",["admin","transfer"])}}]);