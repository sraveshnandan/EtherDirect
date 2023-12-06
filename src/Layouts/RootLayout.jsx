import React from "react";
import { Outlet } from "react-router-dom";

import { Footer, NavBar } from "../components";

const RootLayout = () => {
  
  return (
    <>
      <main className=" md:px-20 px-2 max-w-[1440px]  mx-auto">
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default RootLayout;
