import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

import configs from "./config";

import "./src/OPJ/item/css/styles.css"

/* @ts-ignore:next-line */
import image from "./src/OPJ/images/image.jpeg";

import { Checkout } from "./src/Checkout";
import { Redeem } from "./src/Redeem";
import AppFrame from "./src/AppFrame";

import {
  useContract,
  useContractRead,
  useContractWrite,
  ChainId, ThirdwebProvider, ConnectWallet,
  useAddress,
  ThirdwebNftMedia, useNFTs, useAccount
} from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";

const maxNfts = 300;

function Home() {
  const { contract, isLoading: contractIsLoading } = useContract(configs.contractAddress);
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);
  const account = useAccount();

  const myAddress = account[0].data?.address;

  const [state, setState] = useState<{ quantity: number, stage: number, myNfts: NFT[] }>({
    quantity: 1,
    stage: 0,
    myNfts: []
  });

  // useEffect(() => {
  //   if (myAddress && state.stage === 0) {
  //     contract?.erc721.getOwned(myAddress).then((nfts) => {
  //       setState({
  //         ...state,
  //         stage: 1,
  //         myNfts: nfts,
  //       });
  //     })
  //   }
  // })

  return (
    <div>

      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0"

                src={image}

                alt="..." />
            </div>
            <div className="col-md-6">

              <h1 className="display-5 fw-bolder">Liquid Collections x OPJ gin</h1>
              <div className="fs-5 mb-5">
                <span>{configs._pricePerToken} ETH</span>
              </div>
              <p className="lead">This is a wholesale depot for 300 custom-made Liquid Collections x OPJ gin NFTs. The mint button below will allow the purchase of the whole lot of 300. Hope you brought your truck.</p>
              <div className="d-flex">

                <input
                  style={
                    {
                      width: '4rem'
                    }
                  }
                  type="number"
                  min="1"
                  max="maxNfts"
                  value={state.quantity}
                  onChange={(e) => {
                    setState({
                      ...state,
                      quantity: Math.min(Number.parseInt(e.target.value), maxNfts)
                    })
                  }} />


                <button
                  className="btn btn-outline-dark flex-shrink-0" type="button"
                  onClick={(e) => {
                    contract?.erc721.claim(state.quantity)
                  }}
                >

                  <i className="bi-cart-fill me-1"></i>
                  Mint {state.quantity}
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

const YourApp = () => {
  const address = useAddress();
  return (
    <div>
      <ConnectWallet />
      <Home />
    </div>
  );
};

const LiquidCollectionReactApp = (props: any) => {
  return (<ThirdwebProvider desiredChainId={configs.chain.id}>
    <YourApp />

    {/* <AppFrame >
      {
        (contract, signer, address): React.ReactNode => <>
          <Checkout contract={contract} signer={signer} address={address} />
          <hr />
          <Redeem contract={contract} signer={signer} address={address} />
        </>
      }
    </AppFrame> */}

  </ThirdwebProvider>);
  // return <AppFrame >
  //   {
  //     (contract, signer, address): React.ReactNode => <>
  //       <Checkout contract={contract} signer={signer} address={address} />
  //       <hr />
  //       <Redeem contract={contract} signer={signer} address={address} />
  //     </>
  //   }
  // </AppFrame>
};
document.addEventListener("DOMContentLoaded", (event) =>
  ReactDom.render(<LiquidCollectionReactApp />, document.getElementById('root')));