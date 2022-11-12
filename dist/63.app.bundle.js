"use strict";(self.webpackChunkLiquid_Collections_x_Overpriced_Jin=self.webpackChunkLiquid_Collections_x_Overpriced_Jin||[]).push([[63],{33063:(t,a,e)=>{e.r(a),e.d(a,{Split:()=>o});var r=e(2508),s=e(81749),i=e(49242),n=e(2593),c=e(96519);e(13550),e(25025),e(70332),e(8455),e(26729),e(54098),e(62555),e(26219),e(61303),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(54730),e(36250),e(85725),e(38730),e(237),e(65609),e(77208),e(86841),e(49561),e(40553),e(26),e(69392),e(62822),e(40571),e(82037),e(2162),e(64063),e(34161),e(50266),e(98839),e(51375),e(43320),e(65815),e(59189),e(40721),e(24601),e(46878),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435);class o{get chainId(){return this._chainId}constructor(t,a,e){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.cm(t,a,n,i);(0,r._)(this,"contractWrapper",void 0),(0,r._)(this,"storage",void 0),(0,r._)(this,"abi",void 0),(0,r._)(this,"metadata",void 0),(0,r._)(this,"encoder",void 0),(0,r._)(this,"estimator",void 0),(0,r._)(this,"events",void 0),(0,r._)(this,"roles",void 0),(0,r._)(this,"interceptor",void 0),(0,r._)(this,"_chainId",void 0),this._chainId=c,this.abi=n,this.contractWrapper=d,this.storage=e,this.metadata=new s.ag(this.contractWrapper,s.cH,this.storage),this.roles=new s.ah(this.contractWrapper,o.contractRoles),this.encoder=new s.af(this.contractWrapper),this.estimator=new s.aQ(this.contractWrapper),this.events=new s.aR(this.contractWrapper),this.interceptor=new s.aS(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAllRecipients(){const t=[];let a=n.O$.from(0);const e=await this.contractWrapper.readContract.payeeCount();for(;a.lt(e);)try{const e=await this.contractWrapper.readContract.payee(a);t.push(await this.getRecipientSplitPercentage(e)),a=a.add(1)}catch(t){if("method"in t&&t.method.toLowerCase().includes("payee(uint256)"))break;throw t}return t}async balanceOfAllRecipients(){const t=await this.getAllRecipients(),a={};for(const e of t)a[e.address]=await this.balanceOf(e.address);return a}async balanceOfTokenAllRecipients(t){const a=await this.getAllRecipients(),e={};for(const r of a)e[r.address]=await this.balanceOfToken(r.address,t);return e}async balanceOf(t){const a=await this.contractWrapper.readContract.provider.getBalance(this.getAddress()),e=await this.contractWrapper.readContract["totalReleased()"](),r=a.add(e);return this._pendingPayment(t,r,await this.contractWrapper.readContract["released(address)"](t))}async balanceOfToken(t,a){const e=new c.CH(a,i,this.contractWrapper.getProvider()),r=await e.balanceOf(this.getAddress()),n=await this.contractWrapper.readContract["totalReleased(address)"](a),o=r.add(n),d=await this._pendingPayment(t,o,await this.contractWrapper.readContract["released(address,address)"](a,t));return await(0,s.cI)(this.contractWrapper.getProvider(),a,d)}async getRecipientSplitPercentage(t){const[a,e]=await Promise.all([this.contractWrapper.readContract.totalShares(),this.contractWrapper.readContract.shares(t)]);return{address:t,splitPercentage:e.mul(n.O$.from(1e7)).div(a).toNumber()/1e5}}async withdraw(t){return{receipt:await this.contractWrapper.sendTransaction("release(address)",[t])}}async withdrawToken(t,a){return{receipt:await this.contractWrapper.sendTransaction("release(address,address)",[a,t])}}async distribute(){return{receipt:await this.contractWrapper.sendTransaction("distribute()",[])}}async distributeToken(t){return{receipt:await this.contractWrapper.sendTransaction("distribute(address)",[t])}}async _pendingPayment(t,a,e){return a.mul(await this.contractWrapper.readContract.shares(t)).div(await this.contractWrapper.readContract.totalShares()).sub(e)}async call(t){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];return this.contractWrapper.call(t,...e)}}(0,r._)(o,"contractRoles",["admin"])}}]);