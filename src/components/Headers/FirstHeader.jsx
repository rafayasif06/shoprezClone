import React from "react";
import { FaUser } from "react-icons/fa";
import { ImInsertTemplate } from "react-icons/im";
import { IoIosHelpCircle } from "react-icons/io";
import { PiBagSimpleFill } from "react-icons/pi";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const FirstHeader = () => {
  const headerLeft = [
    {
      leftIcon: "Contact Us",
      leftIconData: <FaUser className="text-base " />,
    },
    {
      leftIcon: "Help Center",
      leftIconData: <IoIosHelpCircle className="text-base " />,
    },
    {
      leftIcon: "Business Conditions",
      leftIconData: <PiBagSimpleFill className="text-base " />,
    },
  ];
  const headerRight = [
    {
      rightIcon: "Currency",
      rightIconData: <AiFillDollarCircle className="text-base " />,
    },
    {
      rightIcon: "Sell on Shoprez",
      rightIconData: <IoTicket className="text-base " />,
    },
    {
      rightIcon: "Login",
      rightIconData: <FaUserCircle className="text-base " />,
    },
  ];

  return (
    <>
      <nav className="text-[#7D8FA9]  w-full justify-between p-4 px-12 hidden lg:flex ">
        <section className="flex gap-12 items-center justify-center">
          <div className="flex gap-12">
            {headerLeft.map((item, index) => (
              <div key={index}>
                <div className="flex  ">
                  <button>
                    <span className="flex items-center justify-center  gap-1 font-normal text-xs">
                      {item.leftIconData}
                      {item.leftIcon}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button className="font-normal text-xs">
              Terms of Personal Data Protection
            </button>
          </div>
        </section>

        <section className="flex">
          <div className="flex gap-12 ">
            {headerRight.map((item, index) => (
              <div key={index} className="">
                <div className="flex">
                  <button>
                    <span className="flex  gap-1 items-center justify-center font-normal text-xs">
                      {item.rightIconData}
                      {item.rightIcon}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </nav>
      <hr className="border-t-[1px] w-full border-gray-200  " />
    </>
  );
};

export default FirstHeader;
