import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineLogin } from "react-icons/hi";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      {/* Nav Wrapper      */}
      <nav className="w-full text-white  backdrop-blur-lg flex items-center justify-between   px-2  md:mt-2 static py-2">
        {/* Logo  */}
        <Link
          to="/"
          className="flex hover:text-primary  cursor-pointer text font-bold items-center  text-2xl gap-1"
        >
          <FaEthereum size={24} className="hover:text-primary" /> EtherDirect
        </Link>

        {/* Menu  */}
        <ul className="md:flex hidden   items-center gap-4 flex-row">
          <Link to="/" className="font-semibold hover:text-primary">
            Home{" "}
          </Link>
          <Link to="/about" className="font-semibold hover:text-primary">
            About{" "}
          </Link>
          <Link to="/services" className="font-semibold hover:text-primary">
            Services{" "}
          </Link>
          <Link to="/contact" className="font-semibold hover:text-primary">
            Contact{" "}
          </Link>

        </ul>
        {/* CTA Button  */}
        <button
          type="button"
          onClick={() => console.log(`Connect wallet button is clicked.`)}
          className="bg-white  hidden hover:shadow-lg hover:text-black hover:bg-primary   hover:shadow-slate-600 transition-all duration-200 md:flex gap-2 items-center text-black px-3 py-1 rounded-full font-semibold"
        >
          <HiOutlineLogin className="text-2xl hover:text-white text-black" />
          Login
        </button>

        {/* Mobile menu  */}

        <button
          onClick={() => setopen(!open)}
          className="md:hidden hover:text-primary font-bold block text-2xl"
        >
          <HiMenuAlt4 />
        </button>

        {open === true ? (
          <>
            <ul className="md:hidden transition-all duration-500 backdrop-blur-3xl animate-slide-in flex-col flex absolute blue-glassmorphism py-12 items-center h-screen  w-[80%] rounded-md gap-4 top-0 right-0 ">
              <button
                onClick={() => setopen(!open)}
                className=" hover:text-primary font-bold text-2xl absolute top-4 left-4"
              >
                <RxCross2 />
              </button>
              <Link to="/" className="font-semibold hover:text-primary">
                Home{" "}
              </Link>
              <Link to="/about" className="font-semibold hover:text-primary">
                About{" "}
              </Link>
              <Link to="/services" className="font-semibold hover:text-primary">
                Services{" "}
              </Link>
              <Link to="/contact" className="font-semibold hover:text-primary">
                Contact{" "}
              </Link>
              {/* CTA Button  */}
              <button
                type="button"
                onClick={() => console.log(`Connect wallet button is clicked.`)}
                className="bg-white hover:shadow-lg hover:text-black hover:bg-primary pear  hover:shadow-slate-600 transition-all duration-200 flex gap-2 items-center text-black px-3 py-2 rounded-full font-semibold"
              >
                <HiOutlineLogin className="text-2xl hover:text-white text-black" />
                Login
              </button>
            </ul>
          </>
        ) : null}
      </nav>
    </>
  );
};

export default NavBar;
