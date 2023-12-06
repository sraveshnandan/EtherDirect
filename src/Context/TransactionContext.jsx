//Importing modules
import { ethers } from "ethers";
import { useState, useEffect, createContext } from "react";
import { contractAddress, contractAbi } from "../utils/constance";



//createing context
export const TransactionContext = createContext();


//Destructuring window object
const { ethereum } = window;

//get ethereum Transaction Contract function 
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();

  const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer);

  console.log(transactionContract)
  //returning Transaction contarct
  return transactionContract;
}


//context provider
export const TransactionContextProvider = ({ children }) => {

  //assigning states
  const [connectedWallet, setConnectedWallet] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

  //wallet connection function 
  const ConnectWallet = async () => {
    try {
      const account = await ethereum.request({ method: "eth_requestAccounts" });
      setConnectedWallet(account[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object.')

    }
  }

  //Checking If Wallet Is Already Connected
  const checkIfWalletIsConnected = async () => {
    if (!ethereum) {
      return alert("Please Install MetaMask To Continue.")
    }
    if (connectedWallet === '') {
      ConnectWallet()

    }

  }

  //Main Ethereum Sending Function 

  const sendTransaction = async (data) => {
    try {
      console.log("sendTransaction function invocked");
      const { addressTo, amount, keyword, message } = data;
      if (!ethereum) {
        return alert("Please Install MetaMask To Continue.")
      }
      //Instanciating Ethereum contract 
      const transtactionContract = getEthereumContract();


      //Parsing Ethereum value 
      const parsedAmount = ethers.utils.parseEther(amount);
      setIsLoading(true);
      //making transaction request
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: connectedWallet,
          to: addressTo,
          gas: "0x5208", // 2100 Gwei Coin equal to 0.0 $
          value: parsedAmount._hex
        }]

      })


      //Generating Transaction Hash
      let tnxHash = await transtactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
      //setting loading state to true
      console.log(`Loading ${tnxHash.hash}`);
      //waiting for transaction to complete
      await tnxHash.wait();
      setIsLoading(false);
      console.log(`Success ${tnxHash.hash}`);


      // //Getting all transaction count
      const transactionCount = await transtactionContract.getTransactionCount();
      //setting transation count
      setTransactionCount(transactionCount.toNumber());

    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }


  // UseEffect to run function at startup 
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (

    <TransactionContext.Provider value={{ connectedWallet, sendTransaction, ConnectWallet, isLoading }
    }>
      {children}
    </TransactionContext.Provider >
  )
}