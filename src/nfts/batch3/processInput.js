const fs = require("fs");
const { stringify } = require("csv-stringify");
const writableStream = fs.createWriteStream("./src/nfts/batch3/output.csv");

const columns = [
  "name",
  "description",
  `Spirit`,
  `Provenance`,
  `Proof`,
  `Size`,
  `Distilled`,
  `Batch`,
  `Style`,
  "image",
  "animation_url"
];

const stringifier = stringify({ header: true, columns: columns });

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

const lastIndex = 799;
const total = 500;
for (let i = 1; i < total + 1; i++) {
  const actualIndex = i + lastIndex;
  const fancyIndex = actualIndex + 1;


  fs.copyFileSync(`./src/nfts/batch3/pre/${fancyIndex}.jpg`, `./src/nfts/batch3/${fancyIndex}.jpg`);


  stringifier.write([
    `OPJ Gin #${pad(fancyIndex, 3)}`,
    `Gm gm and THANK YOU for being a part of Overpriced JPEGs Year One. Hosting this podcast means the world to me and I owe so much to each of you who helped make it possible. 

This NFT is a collaboration between myself, the amazing Amber Vittoria, and Liquid Collections. 

Wen utility?! Very soon. This NFT entitles you to one bottle of Overpriced Jin which you can redeem at https://liquidcollections.com/collections/opj-gin-redeem in February 2023. 

It’s been a wild year in web3, so pour one out for all of us who are still here. 

xoxo Carly
`,

    `Gin`,
    `Oregon`,
    `86`,
    `750ml`,
    `2022`,
    `One`,
    `American Gin`,
    `${fancyIndex}.jpg`,
    `https://chromapdx.github.io/Liquid-Collections-x-Overpriced-Jin/animation-prod.html?nftid=${actualIndex}`,
  ]);
}
stringifier.pipe(writableStream);
