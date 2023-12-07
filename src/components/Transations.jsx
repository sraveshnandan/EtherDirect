import React, { useContext, useState } from 'react';
import { TransactionContext } from "../Context/TransactionContext";
import SortenAddress from "../utils/ShortenAddress";
import { FaEthereum, FaPlug } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Transations = () => {
  const [toggle, setToggle] = useState(false);
  const { connectedWallet, transactions, ConnectWallet } = useContext(TransactionContext);


  // Making a Transaction Card 

  const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount }) => {
    return (
      <div className='w-[70%] hover:shadow-lg hover:shadow-primary cursor-pointer  md:w-1/4 m-1 p-2 rounded-md flex flex-col white-glassmorphism
      '>
        <div className='w-full  rounded-md flex flex-col items-start gap-2  blue-glassmorphism justify-center px-3 py-2  '>
          <span className='font-semibold'> From : <Link target='_blank' rel='noopner norefrer' to={`https://sepolia.etherscan.io/address/${addressTo}`} className=' cursor-pointer hover:text-primary  test-sm font-semibold '>{SortenAddress(addressTo)}</Link></span>


          <span className='font-semibold'> To: <Link to={`https://sepolia.etherscan.io/address/${addressFrom}`} target='_blank' rel='noopner norefrer' className='  cursor-pointer hover:text-primary  test-sm font-semibold '>To:{SortenAddress(addressFrom)}</Link></span>
          <span className='flex items-center  gap-1 '>Amount : <span className='bg-[#414160] flex gap-2 items-center px-1 rounded-md font-semibold'><FaEthereum />{amount}</span>ETH</span>
          <span className='text-sm line-clamp-1'> Message : {message}</span>
        </div>

        <div className='w-[70%] mx-auto  p-1 text-sm font-semibold my-2 blue-glassmorphism text-center '>
          {timestamp}
        </div>
        <span className='text-sm text-center bg-green-600 rounded-full font-semibold hover:scale-95 p-2 '>Compleated.</span>


      </div>

    )

  }
  return (
    // wrapper 
    <div className='w-full flex-col md:flex-row flex items-center  text-stone-300'>

      {
        connectedWallet ? (
          <>
            <div className={`w-full flex ${toggle ? 'h-full' : 'md:h-[580px] h-[600px]'}   overflow-hidden items-center relative flex-col`}>
              <button type='button' className=' rounded-md  px-5 py-2 hover:bg-primary hover:shadow-2xl hover:shadow-purple-500 text-black font-semibold bg-white duration-500 mb-4 -bottom-1 z-20 absolute cursour-pointer' onClick={() => setToggle(!toggle)}>{toggle ? 'Show Less' : 'Show More'}{toggle ? '▲' : '▼'}</button>

              {/* //Heading  */}
              <span className='text text-5xl my-12'>Latest Transactions</span>
              {/* //Transaction Container  */}
              <div className='w-full  flex items-center flex-col  justify-center flex-wrap md:flex-row '>


                {transactions.reverse().map((data, i) => (
                  <TransactionCard key={i} {...data} />
                ))}


              </div>
            </div>
          </>

        ) : (
          <> <div className='w-full  flex items-center justify-center text-center flex-col '>
            <span className='text-5xl text my-12'>Connect Your Wallet to See Latest Transactions.</span>

            <div className='w-full flex-col md:flex-row flex items-center blue-glassmorphism py-16 md:py-4 justify-between md:px-8 '>
              <span className='text-3xl font-smibold '>Connect Your Wallet.</span>

              <button onClick={ConnectWallet} type='button' className=' my-8 px-5 py-2 bg-white text-black font-semibold hover:shadow-lg hover:shadow-purple-400 flex gap-2 hover:bg-primary hover:text-white items-center rounded-full'> <FaPlug /> Connect Wallet</button>


            </div>
          </div> </>
        )
      }


    </div>
  )
}

export default Transations