import React from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { FaGasPump } from "react-icons/fa6";
import { TbClockBolt } from "react-icons/tb";

const Services = () => {
  const ServicesCard = ({ title, icon }) => {
    return (
      <div className="flex rounded-xl m-8 backdrop-blur-lg   w-[70%] md:w-1/4   items-center gap-4 p-2 white-glassmorphism hover:shadow-lg hover:shadow-slate-600 hover:scale-110 duration-500">
        <span className="w-12 h-12 rounded-sm p-1 blue-glassmorphism flex items-center justify-center t">
          <span className="text-xl text-white hover:text-primary shadow-lg">
            {icon}
          </span>
        </span>

        <span className="text-white  text-xl hover:text-primary cursor-pointer">
          {title}
        </span>
      </div>
    );
  };
  return (
    <>
      {/* Wrapper  */}

      <div className="flex my-12 w-full  md: md flex-wrap  justify-around items-center">
        {/* <ServicesCard
          title={"InterOperable"}
          icon={<FaArrowRightArrowLeft />}
        /> */}
        <ServicesCard title={"Fully Secure"} icon={<MdLock />} />
        <ServicesCard title={"Gas Free"} icon={<FaGasPump />} />
        <ServicesCard title={"Blazzing Fast"} icon={<TbClockBolt />} />
      </div>
    </>
  );
};

export default Services;
