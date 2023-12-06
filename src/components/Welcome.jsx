import React, { useContext } from "react";
import { MdPrivateConnectivity } from "react-icons/md";
import { FaEthereum, FaInfoCircle } from "react-icons/fa";
import i from "../assets/m.svg";
import SortenAddress from "../utils/ShortenAddress";
import { useState } from "react";
import { TransactionContext } from "../Context/TransactionContext";
import { Loader } from "../components"

const Welcome = () => {

  const { connectedWallet, ConnectWallet, sendTransaction, isLoading } = useContext(TransactionContext);


  //Form state handler 
  const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });

  //Form HandleChange Function 


  //Form submit handler 

  const handleSubmit = (e) => {
    //Preventing form to reload the page 
    e.preventDefault();
    console.log("submit function invocked");
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) {
      return alert("Please Fill All Fields.");
    }
    sendTransaction(formData);
    console.log("send transaction invocked")

    //This is UnSecure Way To submit a form In React 
    // const formDataJson = {
    //   sender: connectedWallet,
    //   reciver: e.target[0].value,
    //   amount: e.target[1].value,
    //   keyword: e.target[2].value,
    //   message: e.target[3].value
    // }

    // SendEth(formData)




  }


  return (
    <>
      {/* wrapper  */}
      <div className="w-full  h-fit  gap-2  md:px-0 px-4 mt-12 md:mt-0 mf:flex-row flex-col py-12 items-center  flex hero">
        {/* Left Section  */}
        <div className="w-full items-center md:items-start  justify-center md:w-2/3 flex flex-col ">
          {/* Headding  */}
          <span className=" md:text-5xl md:text-left text-4xl text-center mb-8 font-[550]   text  ">
            Seamless Ethereum Transactions Made Easy
          </span>

          {/* subheading  */}
          <span className="text-light md:text-left text-center text-sm line-clamp-3 font-semibold my-4">
            Welcome to EtherDirect - Your Gateway to Instant Ethereum
            Transactions. Connect your MetaMask wallet and send ETH securely and
            swiftly to any address, hassle-free.
          </span>

          {/* CTA Buttons  */}
          {
            connectedWallet === '' ? (<button
              type="button"
              onClick={ConnectWallet}
              className="bg-white hover:shadow-lg hover:text-black hover:bg-primary pear  hover:shadow-slate-600 transition-all duration-200 flex gap-2 items-center text-black md:w-fit w-[90%] justify-center  mt-4 px-3 py-1 hover:ring-1 rounded-full font-semibold"
            >
              <MdPrivateConnectivity className="text-4xl hover:text-white text-black" />
              Connect Wallet
            </button>) : (<span className="text-green-500 flex gap-2 my-4 p-2 rounded-full bg-slate-800  w-fit "> <span className="">✅</span>Wallet Connected Successfully.</span>)
          }
        </div>

        {/* Right Section  */}
        {connectedWallet !== '' ? (
          <div className="w-full flex-col h-max mb-12 flex items-center justify-start pt-4 mf:w-1/2  rounded-lg ">
            {/* Etherium Card  */}
            <div className="eth-card hover:scale-105 cursor-pointer duration-500 h-44 w-[60%] rounded-md flex flex-col">
              <div className="h-12 p-4 flex justify-between items-center">
                <FaEthereum className="text-xl w-8 h-8 p-1 border-2 rounded-full cursor-pointer border-white" />
                <FaInfoCircle className=" cursor-pointer text-white" />
              </div>

              <div
                className="grow flex-col justify-end flex items-start p-4
            
            "
              >

                <span className="text-white font-semibold text-sm">
                  {SortenAddress(connectedWallet)}
                </span>
                <span className="text-2xl font-[450] text-white">etereum</span>
              </div>
            </div>

            {/* Transation Form */}
            <div className="white-glassmorphism rounded-lg shadow-md w-[60%] mt-4 p-2  ">
              <div className="flex flex-col bg-transparent">
                <input
                  type="text"
                  name="addressTo"
                  onChange={e => setFormData((prevState) => ({ addressTo: e.target.value }))}
                  placeholder="0xAS4sfgdgf...hghjg6f"
                  className="white-glassmorphism  mt-4 font-semibold rounded-lg text-white outline-none px-3 py-1"
                />

                <input
                  type="number"
                  step="0.0001"
                  name="amount"
                  onChange={e => setFormData((prevState) => ({ ...prevState, amount: e.target.value }))}
                  placeholder="Amount"
                  className="white-glassmorphism mt-4 font-semibold rounded-lg text-white outline-none px-3 py-1"
                />

                <input
                  type="text"
                  name="keyword"
                  onChange={e => setFormData((prevState) => ({ ...prevState, keyword: e.target.value }))}
                  placeholder="Keyword(GIF)"
                  className="white-glassmorphism mt-4 font-semibold rounded-lg text-white outline-none px-3 py-1"
                />
                <input
                  type="text"
                  name="message"
                  onChange={e => setFormData((prevState) => ({ ...prevState, message: e.target.value }))}
                  placeholder="Message"
                  className="white-glassmorphism mt-4 font-semibold rounded-lg text-white outline-none px-3 py-1"
                />

                <hr className="my-2 bg-slate-400" />
                {
                  isLoading === true ? (
                   <div className="w-full flex items-center justify-center">
                     <Loader />
                   </div>

                  ) : <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-white hover:shadow-lg hover:shadow-slate-600 hover:border-2 my-2 rounded-full bg-primary p-1"
                  >
                    Send Now
                  </button>
                }
              </div>
            </div>
          </div>
        ) : (
          <img
            src={i}
            alt="etherium"
            className="md:w-[60%] h-fit  w-full object-cover ethimg cursor-pointer"
          />
        )}
      </div >
    </>
  );
};

export default Welcome;
