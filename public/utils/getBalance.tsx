import { ethers } from "ethers";

export const getBalance =  (accounts: Array<number | string>, setUserAccount: (a: any) => void) => {
    window.ethereum
        .request({
            method: 'eth_getBalance',
            params: [accounts[0], 'latest'],
        })
        .then((balance: number) => {
            setUserAccount({accounts, balance: ethers.formatEther(balance)})
        })
}

