/* eslint-disable @typescript-eslint/no-explicit-any */
interface WalletArguments {
  account: string,
  setAccount: (arg : string) => void,
}

interface Window {
    ethereum: {
        isMetamask?: boolean,
        request: (args: {method: string; params: any[]}) => Promise<any>,
    }
}

interface InputProps {
    type: string,
    placeholder: string,
    className?: string,
}

interface ButtonProps {
    handleClick: () => void,
    text: string,
    className?: string,
}