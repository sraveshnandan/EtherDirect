import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  const Card = ({ title, desc, size }) => {
    let dim = 'md:w-1/3 w-full'
    if (size === 'lg') {
      dim = 'md:w-2/3  w-full mx-auto'

    }
    return (
      <div className={`${dim} text-white hover:shadow-md hover:shadow-slate-600 duration-500 p-4 m-2  blue-glassmorphism flex `}>
        <div className="full flex  flex-col">
          <span className="text-2xl text-primary font-semibold line-clamp-3 mb-2 ">{title}</span>
          <span className="text-sm block w-full  font-semibold mb-4 ">{desc}</span>
          <div className='w-full flex items-center justify-start'><hr className='border-0 h-[2px] mt-4 bg-white' />
            <Link className=" font-bold w-fit hover:text-primary">Learn More ↗</Link></div>
        </div>
      </div>
    )
  }
  return (
    <>
      {/* wrapper  */}

      <div className='my-12 text-center'><span className="text mb-4 text-5xl text-center">How To  Start.</span></div>

      {/* Heading  */}
      <div className='bg-[#333] rounded-xl text-white py-8 px-4 pr-8 text-center flex justify-between w-[80%] mx-auto items-center'>
        <span className='text-3xl'>Get Started With Simple Steps. </span>
        <span className='font-[900] text-white text-4xl hover:text-primary cursor-pointer rotate-90'>⇱</span>
      </div>
      <div className='w-[80%] mt-8 mb-16 mx-auto flex md:flex-row flex-col gap-2 '>
        <Card title={'Connect Your Wallet.'} desc={'You have to just connect your wallet and you are good to go. Feel free to connect yout etherium wallet to start the payment'} size={'lg'} />
        <Card title={'Initisiet Transation.'} desc={'Fill the transation form to begin the transation.'} />

        <Card title={'Check Transation Status.'} desc={'Check Your Transation Status on etherscan.'} />
      </div>
    </>
  )
}

export default GetStarted