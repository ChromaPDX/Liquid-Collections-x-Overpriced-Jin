import configs from "./config";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers"

function importAll(r) {
  return r.keys().map(r);
}


const postImages1 = importAll(
  /* @ts-ignore:next-line */
  require.context('./src/nfts/Carly/Redeemed\ NFTs/', false, /opj.redeemed_\d{3}.jpg$/)
);
const postImages2 = importAll(
  /* @ts-ignore:next-line */
  require.context('./src/nfts/batch2/SoldNFTs/', false, /opj.redeemed_\d{3}.jpg$/),
);

const postImages = [...postImages1, ...postImages2];

/* @ts-ignore:next-line */
const preContextBatch1 = require.context('./src/nfts/Carly/GiftNFTs/', false, /\.(png|jpe?g|svg)$/);
const preImagesImport2Batch1 = importAll(preContextBatch1)
/* @ts-ignore:next-line */
const preContextBatch2 = require.context('./src/nfts/batch2/ForSaleNFTs/', false, /(\d{1,3}).jpg$/);
const preImagesImport2Batch2 = importAll(preContextBatch2)

const preContextKeys = [...preContextBatch1.keys(), ...preContextBatch2.keys()];

const preImagesImport2 = [
  ...preImagesImport2Batch1,
  ...preImagesImport2Batch2,
  
]

// console.log(preImagesImport2);
const unbundledFiles = preContextKeys;  //preContext.keys();

const preImages3 = [];
for (let i = 0; i < preImagesImport2.length; i++) {
  const matches = unbundledFiles[i].match(/(\d{1,3}).jpg$/)

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
  // console.log(sortedPreImages[nftid].output)
  // console.log(postImages[nftid])

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