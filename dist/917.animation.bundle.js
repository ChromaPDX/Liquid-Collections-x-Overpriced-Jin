"use strict";(self.webpackChunkLiquid_Collections_x_Overpriced_Jin=self.webpackChunkLiquid_Collections_x_Overpriced_Jin||[]).push([[917],{44917:(t,e,r)=>{r.r(e),r.d(e,{Pack:()=>y});var a=r(2508),n=r(11078),s=r(53784),o=r(9279),c=r(77616),d=r(2593);r(13550),r(25025),r(70332),r(8455),r(26729),r(54098),r(62555),r(26219),r(61303),r(49242),r(94317),r(13670),r(79120),r(97604),r(8187),r(19362),r(54730),r(36250),r(85725),r(38730),r(237),r(65609),r(77208),r(86841),r(49561),r(40553),r(26),r(69392),r(62822),r(40571),r(82037),r(2162),r(64063),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(59189),r(40721),r(24601),r(46878),r(20583),r(92355),r(84194),r(51121),r(32484),r(78435);const i=s.z.object({contractAddress:n.cC}),p=i.extend({quantity:n.cD}),h=i.extend({tokenId:n.cE}),w=i.extend({tokenId:n.cE,quantity:n.cE}),l=p.omit({quantity:!0}).extend({quantityPerReward:n.cD}),u=h,g=w.omit({quantity:!0}).extend({quantityPerReward:n.cE}),k=l.extend({totalRewards:n.cE.default("1")}),f=u,A=g.extend({totalRewards:n.cE.default("1")});s.z.object({erc20Rewards:s.z.array(l).default([]),erc721Rewards:s.z.array(u).default([]),erc1155Rewards:s.z.array(g).default([])});const R=s.z.object({erc20Rewards:s.z.array(k).default([]),erc721Rewards:s.z.array(f).default([]),erc1155Rewards:s.z.array(A).default([])}),v=R.extend({packMetadata:a.N,rewardsPerPack:n.cE.default("1"),openStartTime:n.cF.default(new Date)});class y extends n.aM{constructor(t,e,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.cm(t,e,o,s.gasless&&"openzeppelin"in s.gasless?{...s,gasless:{openzeppelin:{...s.gasless.openzeppelin,useEOAForwarder:!0}}}:s),r,c),(0,a._)(this,"abi",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"erc1155",void 0),(0,a._)(this,"owner",void 0),this.abi=o,this.erc1155=new n.aF(this.contractWrapper,this.storage,c),this.metadata=new n.ag(this.contractWrapper,n.cG,this.storage),this.roles=new n.ah(this.contractWrapper,y.contractRoles),this.royalties=new n.ai(this.contractWrapper,this.metadata),this.encoder=new n.af(this.contractWrapper),this.estimator=new n.aQ(this.contractWrapper),this.events=new n.aR(this.contractWrapper),this.interceptor=new n.aS(this.contractWrapper),this.owner=new n.aV(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole((0,n.br)("transfer"),o.d)}async getPackContents(t){const{contents:e,perUnitAmounts:r}=await this.contractWrapper.readContract.getPackContents(t),a=[],s=[],o=[];for(let t=0;t<e.length;t++){const i=e[t],p=r[t];switch(i.tokenType){case 0:{const t=await(0,n.ct)(this.contractWrapper.getProvider(),i.assetContract),e=c.bM(i.totalAmount,t.decimals);a.push({contractAddress:i.assetContract,quantityPerReward:p.toString(),totalRewards:d.O$.from(e).div(p).toString()});break}case 1:s.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString()});break;case 2:o.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString(),quantityPerReward:p.toString(),totalRewards:d.O$.from(i.totalAmount).div(p).toString()})}}return{erc20Rewards:a,erc721Rewards:s,erc1155Rewards:o}}async create(t){const e=await this.contractWrapper.getSignerAddress();return this.createTo(e,t)}async addPackContents(t,e){const r=await this.contractWrapper.getSignerAddress(),a=R.parse(e),{contents:n,numOfRewardUnits:s}=await this.toPackContentArgs(a),o=await this.contractWrapper.sendTransaction("addPackContents",[t,n,s,r]),c=this.contractWrapper.parseLogs("PackUpdated",null==o?void 0:o.logs);if(0===c.length)throw new Error("PackUpdated event not found");const d=c[0].args.packId;return{id:d,receipt:o,data:()=>this.erc1155.get(d)}}async createTo(t,e){const r=await(0,n.cu)(e.packMetadata,this.storage),a=v.parse(e),{erc20Rewards:s,erc721Rewards:o,erc1155Rewards:c}=a,d={erc20Rewards:s,erc721Rewards:o,erc1155Rewards:c},{contents:i,numOfRewardUnits:p}=await this.toPackContentArgs(d),h=await this.contractWrapper.sendTransaction("createPack",[i,p,r,a.openStartTime,a.rewardsPerPack,t]),w=this.contractWrapper.parseLogs("PackCreated",null==h?void 0:h.logs);if(0===w.length)throw new Error("PackCreated event not found");const l=w[0].args.packId;return{id:l,receipt:h,data:()=>this.erc1155.get(l)}}async open(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const r=await this.contractWrapper.sendTransaction("openPack",[t,e]),a=this.contractWrapper.parseLogs("PackOpened",null==r?void 0:r.logs);if(0===a.length)throw new Error("PackOpened event not found");const s=a[0].args.rewardUnitsDistributed,o=[],d=[],i=[];for(const t of s)switch(t.tokenType){case 0:{const e=await(0,n.ct)(this.contractWrapper.getProvider(),t.assetContract);o.push({contractAddress:t.assetContract,quantityPerReward:c.bM(t.totalAmount,e.decimals).toString()});break}case 1:d.push({contractAddress:t.assetContract,tokenId:t.tokenId.toString()});break;case 2:i.push({contractAddress:t.assetContract,tokenId:t.tokenId.toString(),quantityPerReward:t.totalAmount.toString()})}return{erc20Rewards:o,erc721Rewards:d,erc1155Rewards:i}}async toPackContentArgs(t){const e=[],r=[],{erc20Rewards:a,erc721Rewards:s,erc1155Rewards:o}=t,c=this.contractWrapper.getProvider(),i=await this.contractWrapper.getSignerAddress();for(const t of a){const a=(await(0,n.cv)(c,t.quantityPerReward,t.contractAddress)).mul(t.totalRewards);if(!await(0,n.cw)(this.contractWrapper,t.contractAddress,a))throw new Error(`ERC20 token with contract address "${t.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${t.contractAddress}").setAllowance("${this.getAddress()}", ${a});\n\n`);r.push(t.totalRewards),e.push({assetContract:t.contractAddress,tokenType:0,totalAmount:a,tokenId:0})}for(const t of s){if(!await(0,n.cx)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,i))throw new Error(`ERC721 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${t.contractAddress}").setApprovalForToken("${this.getAddress()}", ${t.tokenId});\n\n`);r.push("1"),e.push({assetContract:t.contractAddress,tokenType:1,totalAmount:1,tokenId:t.tokenId})}for(const t of o){if(!await(0,n.cx)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,i))throw new Error(`ERC1155 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${t.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);r.push(t.totalRewards),e.push({assetContract:t.contractAddress,tokenType:2,totalAmount:d.O$.from(t.quantityPerReward).mul(d.O$.from(t.totalRewards)),tokenId:t.tokenId})}return{contents:e,numOfRewardUnits:r}}async call(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return this.contractWrapper.call(t,...r)}}(0,a._)(y,"contractRoles",["admin","minter","asset","transfer"])}}]);