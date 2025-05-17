"use client";
import React, { useState } from 'react'
import ConnectWallet from './ConnectWallet'

const Intro = () => {
    const [account, setAccount] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-neutral-900">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
              Generate your tatoos using AI{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">And create NFTs.</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span className="">And create NFTs.</span>
                </div>
              </div>
            </h2>
            <div className="flex items-center justify-center mt-10">
              <ConnectWallet account={account} setAccount={setAccount} />
            </div>
          </div>
    </div>
  )
}

export default Intro