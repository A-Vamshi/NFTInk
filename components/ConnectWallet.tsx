import React from 'react'
import { ethers } from "ethers";
import Button from './Button';


const ConnectWallet = ({ account, setAccount }: WalletArguments) => {
    const connectAccount = async () => {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts", params: []});
        const account = ethers.getAddress(accounts[0]);
        setAccount(account);
    }
  return (
    <Button handleClick={connectAccount} text={
      account ? ((account.slice(0, 6)) + "xxxx" + (account.slice(38, 42))) : "Connect to wallet"
    } />
  )
}

export default ConnectWallet