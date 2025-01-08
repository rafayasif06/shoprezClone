import React from "react";
import { Outlet } from "react-router-dom";
import FirstHeader from "./Headers/FirstHeader";
import SecondHeader from ".//Headers/SecondHeader";
import FirstFooter from "./footer/FirstFooter";
import SecondFooter from "./footer/SecondFooter";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <FirstHeader />
      <SecondHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FirstFooter />
      <SecondFooter />
    </div>
  );
};

export default Layout;
