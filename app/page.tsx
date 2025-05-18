"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Intro from "@/components/Intro";
import GenerateImage from "@/components/GenerateImage";
import abi from "./abi.json";
import config from "../config.json";

export default function Home() {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [nft, setNft] = useState(null);
  const loadBlockChainData = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();
    const nft = new ethers.Contract(config[network.chainId].nft.address, abi, provider);
    setNft(nft);
  }
  useEffect(() => {
    loadBlockChainData();
  }, []);

  const mint = async (tokenUri) => {
    const signer = await provider?.getSigner();
    const transaction = await nft.connect(signer).mint(tokenUri, { value: ethers.parseUnits("1", "ether")});
    await transaction.wait();
  }


  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <Intro nft={nft}/>
      <GenerateImage mint={mint} />
    </div>
  );
}
