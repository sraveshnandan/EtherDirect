import React from "react";
import { Link } from "react-router-dom";
import i from "../assets/eth.png"

const Why = () => {
  const Card = ({ title, desc, size }) => {
    let dim = 'md:w-[40%] w-full'
    if (size === 'lg') {
      dim = 'md:w-[80%] w-full mx-auto'

    }
    return (
      <div className={`${dim} text-white hover:shadow-md hover:shadow-slate-600 duration-500 p-4 m-2 rounded-lg bg-[#122] flex `}>
        <div className="w-2/3 flex gap-4 flex-col">
          <span className="text-3xl font-semibold ">{title}</span>
          <span className="text-sm font-semibold mb-2">{desc}</span>
          <Link className="font-bold w-fit hover:text-primary">Learn More ↗</Link>
        </div>
        <div className="w-1/3 flex items-end justify-end">
          <img src={i} alt="s-eth" className=" w-40 opacity-20 hover:opacity-95  h-40 hover:hue-rotate-60 object-cover cursor-pointer " />
        </div>
      </div>
    )
  }
  return <>
    {/* wrapper */}
    {/* Header  */}
    <div className="w-[90%] mx-auto my-12 flex flex-col ">
      <span className="text mb-4 text-5xl text-center">Why Choose EtherDirect</span>
      <div className="w-full mt-12  justify-center items-center flex flex-col ">
        <Card title={'Decentralized Blockchain Network.'} desc={'EherDirect is Web 3.0 Blockchain network based app , which provides user to send etherium to any wallet without any risk.'} size={'lg'} />
        <div className="flex md:flex-row flex-col  items-center justify-center ">
          <Card title={'Gass Free & High Benefits.'} desc={'EherDirect is Web 3.0 Blockchain network based app , which provides user to send etherium to any wallet without any risk.'} />

          <Card title={'High Secuirity Provided.'} desc={'EherDirect is Web 3.0 Blockchain network based app , which provides user to send etherium to any wallet without any risk.'} />
        </div>

      </div>

    </div>

  </>;
};

export default Why;
