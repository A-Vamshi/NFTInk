import React from 'react'
import { ethers } from "ethers";


const ConnectWallet = ({ account, setAccount }: WalletArguments) => {
    const connectAccount = async () => {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts", params: []});
        const account = ethers.getAddress(accounts[0]);
        setAccount(account);
    }
  return (
    <button className="p-[3px] relative" onClick={connectAccount}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            {account ? ((account.slice(0, 6)) + "xxxx" + (account.slice(38, 42))) : "Connect to wallet"}
        </div>
    </button>
  )
}

export default ConnectWallet