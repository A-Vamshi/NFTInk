import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
    <div className="flex flex-col items-center justify-center">
        <BackgroundBeamsWithCollision>
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
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Connect your wallet
                </div>
              </button>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
    </div>
  </div>
  );
}
