"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Intro from "@/components/Intro";
export default function Home() {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const loadBlockChainData = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    setProvider(provider);
  }
  console.log("Provider: ", provider);
  useEffect(() => {
    loadBlockChainData();
  }, []);


  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      <Intro />
    </div>
  );
}
