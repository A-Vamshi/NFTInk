import React from 'react'
import { ethers } from "ethers";
import Button from './Button';


const ConnectWallet = ({ account, setAccount, nft }: WalletArguments) => {
    const connectAccount = async () => {
        if (!account) {
          const accounts = await window.ethereum.request({method: "eth_requestAccounts", params: []});
          const account = ethers.getAddress(accounts[0]);
          setAccount(account);
        } else {
          window.alert(nft ? "Contract successfully deployed" : "Contract isn't deployed");
        }
    }
  return (
    <Button handleClick={connectAccount} text={
      account ? ((account.slice(0, 6)) + "xxxx" + (account.slice(38, 42))) : "Connect to wallet"
    } />
  )
}

export default ConnectWallet