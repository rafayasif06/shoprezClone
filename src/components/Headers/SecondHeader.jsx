import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

const SecondHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="flex w-full whitespace-nowrap gap-8 justify-between items-center p-4 px-10 ">
        {/* -------Menu-Icon-------- */}
        <div className="flex lg:hidden text-2xl ">
          <RiMenu2Fill onClick={toggleSidebar} />
        </div>

        {/* --------Website-Logo------------ */}
        <div>
          <a href="#">
            <img
              className="min-w-28 w-28"
              src="https://shoperz-one.vercel.app/_next/static/media/shoperz.4818bbc8.svg"
              alt="logo"
            />
          </a>
        </div>

        {/* -----------Category-Button--------- */}

        <div className=" items-center justify-center gap-1 hidden lg:flex">
          <div>
            <button className="text-base font-medium">Select Categories</button>
          </div>
          <div>
            <FaChevronDown />
          </div>
        </div>

        {/* ----------First-Seach-Box------------------ */}
        <div className="hidden lg:flex w-full max-w-3xl bg-gray-200 justify-evenly gap-2 rounded-lg items-center p-3">
          <div className="w-full">
            <input
              type="text"
              className="w-full bg-transparent text-gray-700 placeholder:text-gray-500 text-base"
              placeholder="What are you looking for?"
            />
          </div>

          <div className="flex items-center justify-center">
            <button className="text-xl">
              <IoSearch />
            </button>
          </div>
        </div>

        {/* ---------------Add-to-Favourite------------- */}
        <div className="text-[#7D8FA9] hidden text-2xl lg:flex  hover:text-[#319DFF] ">
          <button>
            <FaHeart />
          </button>
        </div>

        {/* -----------Cart-Section----------- */}

        <div className="min-w-32 flex overflow-hidden items-center">
          <button className="relative text-white rounded-l-lg text-xl  p-3 bg-[#319DFF]">
            <HiShoppingBag />
            <div className="w-3.5 h-3.5 absolute top-0.5 right-0.5  bg-white rounded-full flex text-center items-center justify-center ">
              <span className=" text-[10px] font-extrabold text-[#319DFF] ">
                1
              </span>
            </div>
          </button>
          <div className="bg-gray-200 text-[#586A84] p-2 rounded-r-lg text-lg font-bold ">
            $799.00
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* -------------------Second-Search-Box--------- */}

      <section className=" flex w-full justify-center lg:hidden   ">
        <div className="w-[94%] flex bg-gray-200 justify-evenly gap-2 rounded-lg items-center p-3">
          <div className="w-full">
            <input
              type="text"
              className="w-full bg-transparent placeholder:text-gray-500 text-base"
              placeholder="What are you looking for?"
            />
          </div>

          <div>
            <button className="text-xl">
              <IoSearch />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondHeader;
