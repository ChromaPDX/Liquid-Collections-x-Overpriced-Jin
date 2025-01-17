const chain = require("wagmi").chain;

// 5000000000000000
module.exports = {
  numberOfNftsMintableAtOnce: null, // unlimited

  // _pricePerToken: "0.005",
  // _pricePerTokenInWei: "5000000000000000",
  // paper link smoketest (0.005) https://paper.xyz/checkout/54120ec3-a856-4f36-ab9d-bdda30ab8c17


  // _pricePerToken: "0.05",
  // _pricePerTokenInWei: "50000000000000000",
  // paper link 0         (0.05)  https://paper.xyz/checkout/36ae33af-ab50-4196-bec2-ede8ef29b84b


  // _pricePerToken: "0.06",
  // _pricePerTokenInWei: "60000000000000000",

  // _pricePerToken: "0.001",
  // _pricePerTokenInWei: "1000000000000000",

  _pricePerToken: "0.065",
  _pricePerTokenInWei: "65000000000000000",

  paperCheckoutLink: "https://paper.xyz/checkout/f1282701-776b-44f2-909e-0e20b758608c",

  currency: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",

  // contractAddress: "0xA8a4764FD41b036D4B00795bE31E0eba92ef869d",
  // contractAddress: "0xb449Ae0520278B6170186c910D68505a4DDA4C12",
  // contractAddress: "0x83D70B516D691e2518bebcc4825ccf98f5a08d7C",
  
  // OPJ
  contractAddress: "0x2205CbFf651e7C092f33f9e2d175CD22246e24a3",

  // owner: "0xB1e03503AB2C0159a4CeF0f9b4703292C221eF45",

  // Kit
  owner: "0x0A58e58ECb0dD36E0e56975b86F9d76Dd9e4272e",

  allowListProof: [
    '0xeafac40d278a20912dad05fa5ea3b0c8489d4b9e382f8925e343ea6d7986b376',
    '0x8f91e3c7e7c77e442ed2c098c63df34523c5cc25f1e7cc7c1b426485b79092e5'
  ],

  // development
  // alchemyKey: "yxZEOqdqzCNCExJZEwY4iPEeu6jZpyMi",
  // chain: chain.goerli,

  // production
  alchemyKey: "577rlGmGIdps3j2owCjazI3jPeYrgvNt",
  chain: chain.mainnet,

  stripeCheckoutLink: "https://buy.stripe.com/5kA8xs4Tp4SkehafYY",

  nullProof: {
    "proof": ["0x0000000000000000000000000000000000000000000000000000000000000000"],
    "maxQuantityInAllowlist": 0
  }
}


// { "proof": ["0x97533c02110e6573027c4c00710b22618e3b039a5a99f419e86c29e537c4b59c", "0xeafac40d278a20912dad05fa5ea3b0c8489d4b9e382f8925e343ea6d7986b376"], "maxQuantityInAllowlist": 0 }
// {
//   "proof": [
//     "0x97533c02110e6573027c4c00710b22618e3b039a5a99f419e86c29e537c4b59c",
//     "0xeafac40d278a20912dad05fa5ea3b0c8489d4b9e382f8925e343ea6d7986b376"
//   ],
//     "maxQuantityInAllowlist": 0
// }

