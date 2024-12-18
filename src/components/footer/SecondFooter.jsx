import React from "react";
import { AccountsLinks, PaymentMethods } from "./SecondFooterItems";

const SecondFooter = () => {
  return (
    <footer className="w-full">
      <hr className="bg-gray-200 h-0.5 w-full" />
      <div className="flex  flex-col md:flex-row items-center  justify-center md:justify-between">
          {/* ------------Account-Links--------- */}
        <div className="md:order-2 flex justify-center   gap-5 p-6  items-center">
          {AccountsLinks[0].accounts.map((icon, index) => (
            <div className=" " key={index}>
              <a href="#">
                <img className="w-6" src={icon} alt="" />
              </a>
            </div>
          ))}
        </div>
        {/* ------------Payment-Methods--------- */}

<hr className="bg-gray-200 h-0.5 w-full md:hidden " />
        <div className=" md:order-3 flex justify-center items-center p-6">
          {PaymentMethods[0].accounts.map((icon, index) => (
            <div className="" key={index}>
              <img className="w-16" src={icon} alt="" />
            </div>
          ))}
        </div>
          {/* ------------Copyright-Text--------- */}
<hr className="bg-gray-200 h-0.5 w-full  md:hidden" /> 
        <div className="md:order-1 text-sm p-6 font-normal text-gray-400">
          <span>© Shoperz 2023 - All Rights Reserved</span>
        </div>

      </div>
    </footer>

  );
};

export default SecondFooter;
