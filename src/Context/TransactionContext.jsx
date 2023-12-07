//Importing modules
import { ethers } from "ethers";
import { useState, useEffect, createContext } from "react";
import { contractAddress, contractAbi } from "../utils/constance";
import { toast } from "sonner";



//createing context
export const TransactionContext = createContext();

//Destructuring window object
const { ethereum } = window;

//get ethereum Transaction Contract function 
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();

  const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer);
  //returning Transaction contarct
  return transactionContract;
}


//context provider
export const TransactionContextProvider = ({ children }) => {

  //assigning states
  const [connectedWallet, setConnectedWallet] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
  const [transactions, setTransactions] = useState([]);

  //wallet connection function 
  const ConnectWallet = async () => {
    try {
      if (!ethereum) {
        return toast.info("Please install metamask to continue.")

      }
      const account = await ethereum.request({ method: "eth_requestAccounts" });
      setConnectedWallet(account[0]);
      toast.success("Wallet Connected.");
    } catch (error) {
      console.log(error);
      toast.error("Unable to connect wallet.");
      throw new Error('No ethereum object.')

    }
  }


  //getting all transaction details

  const getAllAvailableTransactions = async () => {
    try {
      if (!ethereum) {
        return toast.info("Please install metamask to continue.")

      }
      const transactionContract = getEthereumContract();
      //getting all transactions from blockchain
      const Availabletransactions = await transactionContract.getAllTransactions();
      //Fomattting transcation details
      const formattedTranscation = Availabletransactions.map(data => ({
        addressTo: data.receiver,
        addressFrom: data.sender,
        timestamp: new Date(data.timestamp.toNumber() * 1000).toLocaleString(),
        message: data.message,
        keyword: data.keyword,
        amount: parseInt(data.amount._hex) / (10 ** 18)
      }))
      //setting transactions to state variable
      setTransactions(formattedTranscation);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch transactions.");

    }
  }
  //Checking If Wallet Is Already Connected
  const checkIfWalletIsConnected = async () => {
    if (!ethereum) {
      return alert("Please Install MetaMask To Continue.")
    }
    if (connectedWallet === '') {
      ConnectWallet();
      getAllAvailableTransactions();

    }

  }

  //Checking If Transaction Exists
  const checkIfTransactionExists = async () => {
    try {
      //Instanciating Ethereum contract 
      const transtactionContract = getEthereumContract();

      const transactionCount = await transtactionContract.getTransactionCount();
      localStorage.setItem('transactionCount', transactionCount)

    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch transaction count.");


    }
  }

  //Main Ethereum Sending Function 

  const sendTransaction = async (data) => {
    try {
      console.log("sendTransaction function invocked");
      const { addressTo, amount, keyword, message } = data;
      if (!ethereum) {
        return toast.info("Please install metamask to continue.")

      }
      //Instanciating Ethereum contract 
      const transtactionContract = getEthereumContract();


      //Parsing Ethereum value 
      const parsedAmount = ethers.utils.parseEther(amount);
      toast.loading("Sending Transaction...");
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
      toast.loading(`Loading ${tnxHash.hash}`);
      //waiting for transaction to complete
      await tnxHash.wait();
      toast.success(`Success ${tnxHash.hash}`);

      setIsLoading(false);
      console.log(`Success ${tnxHash.hash}`);
      toast.success("Transaction Completed.");

      checkIfTransactionExists();

    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }


  // UseEffect to run function at startup 
  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionExists();
  }, [])

  return (

    <TransactionContext.Provider value={{ connectedWallet, transactions, transactionCount, sendTransaction, ConnectWallet, isLoading }
    }>
      {children}
    </TransactionContext.Provider >
  )
}