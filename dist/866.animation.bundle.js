"use strict";(self.webpackChunkliquidCollectionXChroma=self.webpackChunkliquidCollectionXChroma||[]).push([[866],{21866:(t,e,r)=>{r.r(e),r.d(e,{Marketplace:()=>c});var i=r(2508),a=r(942),n=r(9279),s=r(2593),o=r(92600);r(13550),r(25025),r(70332),r(8455),r(26729),r(54098),r(62555),r(26219),r(61303),r(49242),r(94317),r(13670),r(79120),r(97604),r(8187),r(19362),r(54730),r(36250),r(85725),r(38730),r(237),r(65609),r(77208),r(86841),r(49561),r(40553),r(26),r(69392),r(62822),r(40571),r(82037),r(2162),r(64063),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(59189),r(40721),r(24601),r(46878),r(20583),r(92355),r(84194),r(51121),r(32484),r(78435);class c{get chainId(){return this._chainId}constructor(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new a.cm(t,e,s,n);(0,i._)(this,"abi",void 0),(0,i._)(this,"contractWrapper",void 0),(0,i._)(this,"storage",void 0),(0,i._)(this,"encoder",void 0),(0,i._)(this,"events",void 0),(0,i._)(this,"estimator",void 0),(0,i._)(this,"platformFees",void 0),(0,i._)(this,"metadata",void 0),(0,i._)(this,"roles",void 0),(0,i._)(this,"interceptor",void 0),(0,i._)(this,"direct",void 0),(0,i._)(this,"auction",void 0),(0,i._)(this,"_chainId",void 0),(0,i._)(this,"getAll",this.getAllListings),this._chainId=o,this.abi=s,this.contractWrapper=d,this.storage=r,this.metadata=new a.ag(this.contractWrapper,a.cp,this.storage),this.roles=new a.ah(this.contractWrapper,c.contractRoles),this.encoder=new a.af(this.contractWrapper),this.estimator=new a.aQ(this.contractWrapper),this.direct=new a.aN(this.contractWrapper,this.storage),this.auction=new a.aO(this.contractWrapper,this.storage),this.events=new a.aR(this.contractWrapper),this.platformFees=new a.aT(this.contractWrapper),this.interceptor=new a.aS(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getListing(t){const e=await this.contractWrapper.readContract.listings(t);if(e.assetContract===n.d)throw new a.bf(this.getAddress(),t.toString());switch(e.listingType){case a.aZ.Auction:return await this.auction.mapListing(e);case a.aZ.Direct:return await this.direct.mapListing(e);default:throw new Error(`Unknown listing type: ${e.listingType}`)}}async getActiveListings(t){const e=await this.getAllListingsNoFilter(!0),r=this.applyFilter(e,t),i=s.O$.from(Math.floor(Date.now()/1e3));return r.filter((t=>t.type===a.aZ.Auction&&s.O$.from(t.endTimeInEpochSeconds).gt(i)&&s.O$.from(t.startTimeInEpochSeconds).lte(i)||t.type===a.aZ.Direct&&t.quantity>0))}async getAllListings(t){const e=await this.getAllListingsNoFilter(!1);return this.applyFilter(e,t)}async getTotalCount(){return await this.contractWrapper.readContract.totalListings()}async isRestrictedToListerRoleOnly(){return!await this.contractWrapper.readContract.hasRole((0,a.br)("lister"),n.d)}async getBidBufferBps(){return this.contractWrapper.readContract.bidBufferBps()}async getTimeBufferInSeconds(){return this.contractWrapper.readContract.timeBuffer()}async getOffers(t){const e=(await this.events.getEvents("NewOffer")).filter((e=>e.data.listingId.eq(t)));return await Promise.all(e.map((async e=>await(0,a.cq)(this.contractWrapper.getProvider(),s.O$.from(t),{quantityWanted:e.data.quantityWanted,pricePerToken:e.data.quantityWanted.gt(0)?e.data.totalOfferAmount.div(e.data.quantityWanted):e.data.totalOfferAmount,currency:e.data.currency,offeror:e.data.offeror}))))}async buyoutListing(t,e,r){const i=await this.contractWrapper.readContract.listings(t);if(i.listingId.toString()!==t.toString())throw new a.bf(this.getAddress(),t.toString());switch(i.listingType){case a.aZ.Direct:return(0,o.Z)(void 0!==e,"quantityDesired is required when buying out a direct listing"),await this.direct.buyoutListing(t,e,r);case a.aZ.Auction:return await this.auction.buyoutListing(t);default:throw Error(`Unknown listing type: ${i.listingType}`)}}async makeOffer(t,e,r){const i=await this.contractWrapper.readContract.listings(t);if(i.listingId.toString()!==t.toString())throw new a.bf(this.getAddress(),t.toString());const n=await this.contractWrapper.getChainID();switch(i.listingType){case a.aZ.Direct:return(0,o.Z)(r,"quantity is required when making an offer on a direct listing"),await this.direct.makeOffer(t,r,(0,a.cr)(i.currency)?a.bV[n].wrapped.address:i.currency,e);case a.aZ.Auction:return await this.auction.makeBid(t,e);default:throw Error(`Unknown listing type: ${i.listingType}`)}}async setBidBufferBps(t){await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const e=await this.getTimeBufferInSeconds();await this.contractWrapper.sendTransaction("setAuctionBuffers",[e,s.O$.from(t)])}async setTimeBufferInSeconds(t){await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const e=await this.getBidBufferBps();await this.contractWrapper.sendTransaction("setAuctionBuffers",[s.O$.from(t),e])}async allowListingFromSpecificAssetOnly(t){const e=[];(await this.roles.get("asset")).includes(n.d)&&e.push(this.encoder.encode("revokeRole",[(0,a.br)("asset"),n.d])),e.push(this.encoder.encode("grantRole",[(0,a.br)("asset"),t])),await this.contractWrapper.multiCall(e)}async allowListingFromAnyAsset(){const t=[],e=await this.roles.get("asset");for(const r in e)t.push(this.encoder.encode("revokeRole",[(0,a.br)("asset"),r]));t.push(this.encoder.encode("grantRole",[(0,a.br)("asset"),n.d])),await this.contractWrapper.multiCall(t)}async getAllListingsNoFilter(t){return(await Promise.all(Array.from(Array((await this.contractWrapper.readContract.totalListings()).toNumber()).keys()).map((async e=>{let r;try{r=await this.getListing(e)}catch(t){return t instanceof a.bf?void 0:void console.warn(`Failed to get listing ${e}' - skipping. Try 'marketplace.getListing(${e})' to get the underlying error.`)}if(r.type===a.aZ.Auction)return r;if(t){const{valid:t}=await this.direct.isStillValidListing(r);if(!t)return}return r})))).filter((t=>void 0!==t))}applyFilter(t,e){let r=[...t];const a=s.O$.from((null==e?void 0:e.start)||0).toNumber(),n=s.O$.from((null==e?void 0:e.count)||i.D).toNumber();return e&&(e.seller&&(r=r.filter((t=>{var r;return t.sellerAddress.toString().toLowerCase()===(null==e||null===(r=e.seller)||void 0===r?void 0:r.toString().toLowerCase())}))),e.tokenContract&&(r=r.filter((t=>{var r;return t.assetContractAddress.toString().toLowerCase()===(null==e||null===(r=e.tokenContract)||void 0===r?void 0:r.toString().toLowerCase())}))),void 0!==e.tokenId&&(r=r.filter((t=>{var r;return t.tokenId.toString()===(null==e||null===(r=e.tokenId)||void 0===r?void 0:r.toString())}))),r=r.filter(((t,e)=>e>=a)),r=r.slice(0,n)),r}async call(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return this.contractWrapper.call(t,...r)}}(0,i._)(c,"contractRoles",["admin","lister","asset"])}}]);