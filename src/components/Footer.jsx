import React from "react";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      {/* wrapper */}
      <div className="w-full rounded-lg   px-4 white-glassmorphism  flex flex-col ">
        {/* Upper Div  */}
        <div className="w-full md:flex-row mb-8 flex-col flex ">
          {/* Subscrbe Section  */}
          <div className="flex-flex-col md:m-2 my-4 p-2 md:w-[30%] w-full  ">
            <span className="text-white text-2xl">
              Subscribe to ETHerDirect Newsletter
            </span>

            <form className="w-full rounded-full flex white-glassmorphism  my-4 overflow-hidden ">
              <input
                type="email"
                required
                placeholder="email@email.com"
                className="grow px-3 outline-none text-white bg-transparent"
              />
              <button
                type="submit"
                className="w-8 m-1 h-8 text-xl flex items-center justify-center  bg-white rounded-full font-[900] hover:shadow-slate-600 hover:shadow-md"
              >
                <HiLogout />
              </button>
            </form>
          </div>
          {/* LINKS  */}
          <div className=" md:grow md:flex-row flex-wrap flex gap-8 items-center px-8 justify-evenly">
            <div className="">
              <span className="text-white text-2xl">General</span>
              <ul className="text-white text-sm flex flex-col">
                <Link className="hover:text-primary mt-2 flex gap-1">
                  Privecy Policy{" "}
                  <span className="font-[900] text-primary rotate-180">↯</span>
                </Link>
                <Link className="hover:text-primary mt-2 flex gap-1">
                  Desclaimer{" "}
                  <span className="font-[900] text-primary rotate-180">↯</span>
                </Link>
                <Link className="hover:text-primary mt-2 flex gap-1">
                  Support Us{" "}
                  <span className="font-[900] text-primary rotate-180">↯</span>
                </Link>
              </ul>
            </div>

            <div>
              <span className="text-white text-2xl">Community</span>
              <ul className="text-white text-sm flex flex-col">
                <Link className="hover:text-primary mt-2 flex gap-1">
                  Privecy Policy{" "}
                  <span className="font-[900] text-primary rotate-180">↯</span>
                </Link>
                <Link className="hover:text-primary mt-2 flex gap-1">
                  Desclaimer{" "}
                  <span className="font-[900] text-primary rotate-180">↯</span>
                </Link>
                <Link className="hover:text-primary mt-2 flex gap-1">
                  Support Us{" "}
                  <span className="font-[900] text-primary rotate-180">↯</span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr className="w-full border-0 h-[2px] mt-2 bg-slate-600" />
        {/* Lower Div Copyright Section  */}
        <div className="w-full flex flex-col md:flex-row items-center py-4 justify-between ">
          <Link
            to="/"
            className="flex hover:text-primary  cursor-pointer text font-bold items-center  text-2xl gap-1"
          >
            <FaEthereum size={24} className="hover:text-primary text-white" />{" "}
            EtherDirect
          </Link>

          <span className="text-[grey] text-md">
            &copy; All Rights Reserved | <span>2023-2024</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
