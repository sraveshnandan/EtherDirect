import React, { useContext } from 'react';
import { TransactionContext } from "../Context/TransactionContext";

const Transations = () => {
  const { connectedWallet } = useContext(TransactionContext);
  return (
    // wrapper 
    <div className='w-full flex-col md:flex-row flex items-center text-stone-300'>
      {
        connectedWallet ? (
          <div>

            
          </div>

        ) : (
          <h1>Connect Your Wallet To see Latest Transaction </h1>
        )
      }


    </div>
  )
}

export default Transations