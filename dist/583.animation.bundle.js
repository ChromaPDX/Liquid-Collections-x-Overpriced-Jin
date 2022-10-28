"use strict";(self.webpackChunkliquidCollectionXChroma=self.webpackChunkliquidCollectionXChroma||[]).push([[583],{1583:(t,a,r)=>{r.r(a),r.d(a,{Vote:()=>d});var e=r(2508),o=r(942),s=r(9242),n=r(2593),i=r(2046),c=r(7616),p=r(6519);r(3550),r(5025),r(332),r(8455),r(6729),r(4098),r(2555),r(6219),r(1303),r(4317),r(3670),r(9120),r(7604),r(8187),r(9362),r(4730),r(6250),r(5725),r(8730),r(237),r(5609),r(7208),r(6841),r(9561),r(553),r(26),r(9392),r(2822),r(571),r(2037),r(2162),r(4063),r(4161),r(266),r(8839),r(1375),r(3320),r(5815),r(9189),r(721),r(4601),r(6878),r(583),r(2355),r(4194),r(1121),r(2484),r(8435);class d{get chainId(){return this._chainId}constructor(t,a,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new o.cm(t,a,n,s);(0,e._)(this,"contractWrapper",void 0),(0,e._)(this,"storage",void 0),(0,e._)(this,"abi",void 0),(0,e._)(this,"metadata",void 0),(0,e._)(this,"encoder",void 0),(0,e._)(this,"estimator",void 0),(0,e._)(this,"events",void 0),(0,e._)(this,"interceptor",void 0),(0,e._)(this,"_chainId",void 0),this._chainId=i,this.abi=n,this.contractWrapper=c,this.storage=r,this.metadata=new o.ag(this.contractWrapper,o.cL,this.storage),this.encoder=new o.af(this.contractWrapper),this.estimator=new o.aQ(this.contractWrapper),this.events=new o.aR(this.contractWrapper),this.interceptor=new o.aS(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){const a=(await this.getAll()).filter((a=>a.proposalId.eq(n.O$.from(t))));if(0===a.length)throw new Error("proposal not found");return a[0]}async getAll(){return Promise.all((await this.contractWrapper.readContract.getAllProposals()).map((async t=>({proposalId:t.proposalId,proposer:t.proposer,description:t.description,startBlock:t.startBlock,endBlock:t.endBlock,state:await this.contractWrapper.readContract.state(t.proposalId),votes:await this.getProposalVotes(t.proposalId),executions:t[3].map(((a,r)=>({toAddress:t.targets[r],nativeTokenValue:a,transactionData:t.calldatas[r]})))}))))}async getProposalVotes(t){const a=await this.contractWrapper.readContract.proposalVotes(t);return[{type:o.a$.Against,label:"Against",count:a.againstVotes},{type:o.a$.For,label:"For",count:a.forVotes},{type:o.a$.Abstain,label:"Abstain",count:a.abstainVotes}]}async hasVoted(t,a){return a||(a=await this.contractWrapper.getSignerAddress()),this.contractWrapper.readContract.hasVoted(t,a)}async canExecute(t){await this.ensureExists(t);const a=await this.get(t),r=a.executions.map((t=>t.toAddress)),e=a.executions.map((t=>t.nativeTokenValue)),o=a.executions.map((t=>t.transactionData)),s=i.id(a.description);try{return await this.contractWrapper.callStatic().execute(r,e,o,s),!0}catch(t){return!1}}async balance(){const t=await this.contractWrapper.readContract.provider.getBalance(this.contractWrapper.readContract.address);return{name:"",symbol:"",decimals:18,value:t,displayValue:c.bM(t,18)}}async balanceOfToken(t){const a=new p.CH(t,s,this.contractWrapper.getProvider());return await(0,o.cI)(this.contractWrapper.getProvider(),t,await a.balanceOf(this.contractWrapper.readContract.address))}async ensureExists(t){try{await this.contractWrapper.readContract.state(t)}catch(a){throw Error(`Proposal ${t} not found`)}}async settings(){const[t,a,r,e,s]=await Promise.all([this.contractWrapper.readContract.votingDelay(),this.contractWrapper.readContract.votingPeriod(),this.contractWrapper.readContract.token(),this.contractWrapper.readContract.quorumNumerator(),this.contractWrapper.readContract.proposalThreshold()]),n=await(0,o.ct)(this.contractWrapper.getProvider(),r);return{votingDelay:t.toString(),votingPeriod:a.toString(),votingTokenAddress:r,votingTokenMetadata:n,votingQuorumFraction:e.toString(),proposalTokenThreshold:s.toString()}}async propose(t,a){a||(a=[{toAddress:this.contractWrapper.readContract.address,nativeTokenValue:0,transactionData:"0x"}]);const r=a.map((t=>t.toAddress)),e=a.map((t=>t.nativeTokenValue)),o=a.map((t=>t.transactionData)),s=await this.contractWrapper.sendTransaction("propose",[r,e,o,t]);return{id:this.contractWrapper.parseLogs("ProposalCreated",null==s?void 0:s.logs)[0].args.proposalId,receipt:s}}async vote(t,a){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return await this.ensureExists(t),{receipt:await this.contractWrapper.sendTransaction("castVoteWithReason",[t,a,r])}}async execute(t){await this.ensureExists(t);const a=await this.get(t),r=a.executions.map((t=>t.toAddress)),e=a.executions.map((t=>t.nativeTokenValue)),o=a.executions.map((t=>t.transactionData)),s=i.id(a.description);return{receipt:await this.contractWrapper.sendTransaction("execute",[r,e,o,s])}}async call(t){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];return this.contractWrapper.call(t,...r)}}}}]);