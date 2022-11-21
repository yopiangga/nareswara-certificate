import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { isMobile } from 'react-device-detect';

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

  const addOrganization = async (email) => {
    try {
      if (ethereum) {
        const contract = createEthereumContract();
        const hash = await contract.addOrganization(email);

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

  const addUser = async (email) => {
    try {
      if (ethereum) {
        const contract = createEthereumContract();
        const hash = await contract.addUser(email);

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
      if (!ethereum) {
        
        if(window.confirm("Halaman ini memerlukan Metmask, silahkan install terlebih dahulu")) {
          if (isMobile) {
            window.location.href = "https://play.google.com/store/apps/details?id=io.metamask&hl=id&gl=US";
          } else {
            window.location.href = "https://metamask.io/";
          }
        }
      }

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

  const connectWalletWithId = async (id) => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      accounts.forEach(element => {
        if (element == id) {
          setCurrentAccount(element);
        }
      });

    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  }

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

  const redeemCertificate = async (certificates) => {
    try {
      if (ethereum) {
        const contract = createEthereumContract();
        console.log(certificates);
        //const hash = await contract.redeemCertificate([["a", "0x9fd578d3238Adf079fA9C66CB200203c6FAdAe8a", "0x9fd578d3238Adf079fA9C66CB200203c6FAdAe8a"]]);

        const hash = await contract.addCertificate(certificates);

        console.log(`Loading - ${hash}`);
        await hash.wait();
        console.log(`Success - ${hash.hash}`);

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      connectWallet();
      console.log(error);
    }
  };

  const getNowUser = async () => {
    try {
      if (ethereum) {
        const contract = createEthereumContract();
        const hash = await contract.getNowUser();
        return parseInt(hash._hex, 16);
        console.log(hash);

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getNowOrganization = async (data) => {
    try {
      if (ethereum) {
        const contract = createEthereumContract();
        const hash = await contract.getNowOrganization();
        return parseInt(hash._hex, 16);
        console.log(hash);

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const verifyCertificate = async (metaId, cid) => {
    try {
      if (ethereum) {
        const contract = createEthereumContract();
        const hash = await contract.verifyCertificate(metaId, cid);
        console.log(hash);
        return hash
        

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getAllCertificate = async () => {
    try {
      if (ethereum) {
        const contract = createEthereumContract();
        const hash = await contract.getNowOrganization();
        console.log(parseInt(hash._hex, 16));

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnect();
    getAllCertificate();
  }, []);

  return (
    <SmartContractContext.Provider
      value={{
        isLoading,
        currentAccount,
        connectWallet,
        addOrganization,
        addUser,
        verifyCertificate,
        redeemCertificate,
        getNowUser,
        getNowOrganization,
        connectWalletWithId
      }}
    >
      {children}
    </SmartContractContext.Provider>
  );
};
