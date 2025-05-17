"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Intro from "@/components/Intro";
import GenerateImage from "@/components/GenerateImage";
export default function Home() {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const loadBlockChainData = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    setProvider(provider);
  }
  useEffect(() => {
    loadBlockChainData();
  }, []);


  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <Intro />
      <GenerateImage />
    </div>
  );
}
