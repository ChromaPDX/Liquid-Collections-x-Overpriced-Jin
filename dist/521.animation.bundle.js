"use strict";(self.webpackChunkLiquid_Collections_x_Overpriced_Jin=self.webpackChunkLiquid_Collections_x_Overpriced_Jin||[]).push([[521],{12521:(t,r,e)=>{e.r(r),e.d(r,{NFTCollection:()=>n});var i=e(2508),a=e(14935),s=e(9279);e(13550),e(25025),e(70332),e(8455),e(26729),e(54098),e(62555),e(26219),e(61303),e(49242),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(54730),e(36250),e(85725),e(38730),e(237),e(65609),e(77208),e(86841),e(49561),e(40553),e(26),e(69392),e(62822),e(40571),e(82037),e(76470),e(64063),e(34161),e(50266),e(98839),e(51375),e(43320),e(65815),e(59189),e(40721),e(24601),e(46878),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435);class n extends a.aE{constructor(t,r,e){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new a.cm(t,r,c,s),e,o),(0,i._)(this,"abi",void 0),(0,i._)(this,"metadata",void 0),(0,i._)(this,"roles",void 0),(0,i._)(this,"encoder",void 0),(0,i._)(this,"estimator",void 0),(0,i._)(this,"events",void 0),(0,i._)(this,"sales",void 0),(0,i._)(this,"platformFees",void 0),(0,i._)(this,"royalties",void 0),(0,i._)(this,"owner",void 0),(0,i._)(this,"signature",void 0),(0,i._)(this,"interceptor",void 0),(0,i._)(this,"erc721",void 0),this.abi=c,this.metadata=new a.ag(this.contractWrapper,a.cy,this.storage),this.roles=new a.ah(this.contractWrapper,n.contractRoles),this.royalties=new a.ai(this.contractWrapper,this.metadata),this.sales=new a.aj(this.contractWrapper),this.encoder=new a.af(this.contractWrapper),this.estimator=new a.aQ(this.contractWrapper),this.events=new a.aR(this.contractWrapper),this.platformFees=new a.aT(this.contractWrapper),this.interceptor=new a.aS(this.contractWrapper),this.erc721=new a.av(this.contractWrapper,this.storage,o),this.signature=new a.ay(this.contractWrapper,this.storage),this.owner=new a.aV(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole((0,a.br)("transfer"),s.d)}async mint(t){return this.erc721.mint(t)}async mintTo(t,r){return this.erc721.mintTo(t,r)}async mintBatch(t){return this.erc721.mintBatch(t)}async mintBatchTo(t,r){return this.erc721.mintBatchTo(t,r)}async burn(t){return this.erc721.burn(t)}async call(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];return this.contractWrapper.call(t,...e)}}(0,i._)(n,"contractRoles",["admin","minter","transfer"])}}]);