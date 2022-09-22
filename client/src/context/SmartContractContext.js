import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractAddress, contractABI } from "src/utils/constants";

export const SmartContractContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};

export const SmartContractProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addOrganization = async (name, email) => {
    try {
      if (ethereum) {
        const contract = createEthereumContract();
        const hash = await contract.addOrganization(currentAccount, name, email);

        setIsLoading(true);
        console.log(`Loading - ${hash}`);
        await hash.wait();
        console.log(`Success - ${hash.hash}`);
        setIsLoading(false);

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (name, email) => {
    try {
      if (ethereum) {
        const contract = createEthereumContract();
        const hash = await contract.addUser(currentAccount, name, email);

        setIsLoading(true);
        console.log(`Loading - ${hash}`);
        await hash.wait();
        console.log(`Success - ${hash.hash}`);
        setIsLoading(false);

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addEvent = async (name, email) => {
    try {
      if (ethereum) {
        const contract = createEthereumContract();
        const hash = await contract.addEvent(currentAccount, name, email);

        setIsLoading(true);
        console.log(`Loading - ${hash}`);
        await hash.wait();
        console.log(`Success - ${hash.hash}`);
        setIsLoading(false);

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        isLoading,
        currentAccount,
        connectWallet,
        addOrganization,
        addUser,
        addEvent
      }}
    >
      {children}
    </SmartContractContext.Provider>
  );
};