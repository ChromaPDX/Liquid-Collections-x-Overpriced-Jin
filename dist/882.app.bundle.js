"use strict";(self.webpackChunkLiquid_Collections_x_Overpriced_Jin=self.webpackChunkLiquid_Collections_x_Overpriced_Jin||[]).push([[882],{64882:(t,e,r)=>{r.r(e),r.d(e,{EditionDrop:()=>n});var i=r(2508),a=r(81749),s=r(9279);r(13550),r(25025),r(70332),r(8455),r(26729),r(54098),r(62555),r(26219),r(61303),r(49242),r(94317),r(13670),r(79120),r(97604),r(8187),r(19362),r(54730),r(36250),r(85725),r(38730),r(237),r(65609),r(77208),r(86841),r(49561),r(40553),r(26),r(69392),r(62822),r(40571),r(82037),r(2162),r(64063),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(59189),r(40721),r(24601),r(46878),r(20583),r(92355),r(84194),r(51121),r(32484),r(78435);class n extends a.aM{constructor(t,e,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new a.cm(t,e,c,s),r,o),(0,i._)(this,"abi",void 0),(0,i._)(this,"sales",void 0),(0,i._)(this,"platformFees",void 0),(0,i._)(this,"encoder",void 0),(0,i._)(this,"estimator",void 0),(0,i._)(this,"events",void 0),(0,i._)(this,"metadata",void 0),(0,i._)(this,"roles",void 0),(0,i._)(this,"royalties",void 0),(0,i._)(this,"claimConditions",void 0),(0,i._)(this,"checkout",void 0),(0,i._)(this,"history",void 0),(0,i._)(this,"interceptor",void 0),(0,i._)(this,"erc1155",void 0),(0,i._)(this,"owner",void 0),this.abi=c,this.metadata=new a.ag(this.contractWrapper,a.cn,this.storage),this.roles=new a.ah(this.contractWrapper,n.contractRoles),this.royalties=new a.ai(this.contractWrapper,this.metadata),this.sales=new a.aj(this.contractWrapper),this.claimConditions=new a.am(this.contractWrapper,this.metadata,this.storage),this.events=new a.aR(this.contractWrapper),this.history=new a.an(this.events),this.encoder=new a.af(this.contractWrapper),this.estimator=new a.aQ(this.contractWrapper),this.platformFees=new a.aT(this.contractWrapper),this.interceptor=new a.aS(this.contractWrapper),this.erc1155=new a.aF(this.contractWrapper,this.storage,o),this.checkout=new a.cl(this.contractWrapper),this.owner=new a.aV(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole((0,a.br)("transfer"),s.d)}async createBatch(t,e){return this.erc1155.lazyMint(t,e)}async getClaimTransaction(t,e,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.erc1155.getClaimTransaction(t,e,r,{checkERC20Allowance:i})}async claimTo(t,e,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.erc1155.claimTo(t,e,r,{checkERC20Allowance:i})}async claim(t,e){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const i=await this.contractWrapper.getSignerAddress();return this.claimTo(i,t,e,r)}async burnTokens(t,e){return this.erc1155.burn(t,e)}async call(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return this.contractWrapper.call(t,...r)}}(0,i._)(n,"contractRoles",["admin","minter","transfer"])}}]);