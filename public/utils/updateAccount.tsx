import { getBalance } from "./getBalance";

export const updateAccount =  (setUserAccount: (a: any) => void) => {
    window.ethereum
    .request({method: 'eth_requestAccounts'})
          .then((accounts: Array<number | string>) => {
              setUserAccount({ accounts});
              getBalance(accounts, setUserAccount)
          })
  };