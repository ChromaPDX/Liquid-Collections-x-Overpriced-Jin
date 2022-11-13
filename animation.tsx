// import { Alchemy, Network } from "alchemy-sdk";
import configs from "./config";
// const chain = require("wagmi").chain;
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers"
// let network;
// if (configs.chain === chain.goerli) {
//   network = Network.ETH_GOERLI;
// } else {
//   network = Network.ETH_MAINNET
// }
// const alchemy = new Alchemy({ apiKey: configs.alchemyKey, network });

// alchemy.nft.get

// // require("@rainbow-me/rainbowkit/styles.css");

// import React, { useEffect, useState } from "react";
// import ReactDom from "react-dom";



// import {
//   useContract,
//   useContractRead,
//   useContractWrite,
//   ChainId, ThirdwebProvider, ConnectWallet,
//   useAddress,
//   ThirdwebNftMedia, useNFTs, useAccount
// } from "@thirdweb-dev/react";


function importAll(r) {
  return r.keys().map(r);
}

/* @ts-ignore:next-line */
const postImages = importAll(require.context('./src/nfts/Carly/Redeemed\ NFTs/', false, /opj.redeemed_\d{3}.jpg$/));



/* @ts-ignore:next-line */
const preContext = require.context('./src/nfts/Carly/GiftNFTs/', false, /\.(png|jpe?g|svg)$/);

const preImagesImport2 = importAll(preContext)

console.log(preImagesImport2);
const unbundledFiles = preContext.keys();

const preImages3 = [];
for (let i = 0; i < preImagesImport2.length; i++) {
  const matches = unbundledFiles[i].match(/\.(png|jpe?g|svg)$/);

  /* @ts-ignore:next-line */
  preImages3[i] = {
    input: unbundledFiles[i],
    output: preImagesImport2[i],
    num: parseInt(matches[1])
  }
}

/* @ts-ignore:next-line */
const sortedPreImages = preImages3.sort((a, b) => a.num - b.num)





var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? "0" : decodeURIComponent(sParameterName[1]);
    }
  }
  return "0"
  // return false;
};


// console.log(sortedPreImages)
// console.log(postImages)


document.addEventListener("DOMContentLoaded", async (event) => {
  /* @ts-ignore:next-line */
  var nftid: number = parseInt(getUrlParameter('nftid'));

  /* @ts-ignore:next-line */
  console.log(sortedPreImages[nftid].output)
  console.log(postImages[nftid])

  /* @ts-ignore:next-line */
  // const sdk = new ThirdwebSDK(configs.chain.id);

  const provider = ethers.getDefaultProvider(configs.chain.id, {
    alchemy: configs.alchemyKey,
  });

  const sdk = new ThirdwebSDK(provider);

  const contract = await sdk.getContract(configs.contractAddress);
  const isRedeemable = await contract.call("isRedeemable", nftid);

  var DOM_img = document.createElement("img");
  console.log(DOM_img)


  if (isRedeemable) {
    /* @ts-ignore:next-line */
    DOM_img.src = sortedPreImages[nftid].output;
    /* @ts-ignore:next-line */
    document.body.innerHTML = DOM_img.outerHTML;
  } else {
    DOM_img.src = postImages[nftid];
    /* @ts-ignore:next-line */
    document.body.innerHTML = DOM_img.outerHTML;
  }
})