import React, { useState, useEffect } from "react";

export const SmartContractContext = React.createContext();

const { ethereum } = window;

export const SmartContractProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install metamask!");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        //getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <SmartContractContext.Provider
      value={{
        currentAccount,
        connectWallet
      }}
    >
      {children}
    </SmartContractContext.Provider>
  );
};
