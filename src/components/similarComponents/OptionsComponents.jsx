import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import {
  CategoryItems,
  HiddenBrandsOptions,
  HiddenPriceOptions,
  ShownBrandsOptions,
  ShownPriceOPtions,
} from "./SidebarItems";

const OptionsComponents = ({ toggleSidebar, isOpen }) => {
  const [isCategoryTrue, setIsCategoryTrue] = useState(true);
  const toggleCategoryToTrue = () => setIsCategoryTrue((prev) => !prev);

  const [isShowMoreBrandsTrue, setIsShowMoreBrandsTrue] = useState(false);
  const toggleShowMoreBrands = () => setIsShowMoreBrandsTrue((prev) => !prev);

  const [isShowMorePriceOptionsTrue, setIsShowMorePriceOptionsTrue] =
    useState(false);
  const toggleShowMorePriceOptions = () =>
    setIsShowMorePriceOptionsTrue((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);
  return (
    <section
      className={`z-10 w-[320px] overflow-y-auto bg-white fixed h-screen left top-0 rounded-tr-[60px]  ${
        isOpen ? "translate-x-0" : "-translate-x-full "
      } `}
    >
      <div className=" flex flex-col overflow-y-auto  items-center w-full relative">
        {/* ----------------Logo-and-cross---------------- */}
        <div className="flex  items-center justify-center ">
          <div className="w-[180px] mt-16">
            <img
              className=""
              src="https://shoperz-one.vercel.app/_next/static/media/shoperz.4818bbc8.svg"
              alt=""
            />
          </div>
          {/* From */}
          <div className="absolute right-9 top-9  text-4xl">
            <button onClick={toggleSidebar}>
              <RxCross2 />
            </button>
          </div>
        </div>

        <hr className="w-4/5 text-gray-800 h-8 mt-4" />

        {/* ---------------Categories------------------- */}
        <div className=" flex  flex-col w-4/5 gap-3 bg-[#EEF0F4] p-3">
          <p className="text-xl font-medium">Categories</p>
          <div className="flex  text-base justify-between">
            <span className="">All</span>
            <button onClick={toggleCategoryToTrue}>
              <FaChevronDown />
            </button>
          </div>

          <div
            className={`flex flex-col  gap-2 ${
              isCategoryTrue ? "hidden" : "flex "
            }`}
          >
            {CategoryItems.map((item, index) => (
              <div key={index}>
                <div className="">
                  <ul className=" flex text-sm font-normal  gap-4">
                    <li className="text-[#586A84]">
                      <button>{item.deviceCategory}</button>
                    </li>
                    <li className="text-gray-400">
                      <span>{item.deviceAvailable}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* -------------Brands-Options------------ */}

        <div className=" flex  flex-col w-4/5 gap-3 bg-white border-[1px] p-3 mt-8">
          <div className="text-xl font-medium">
            <span>Brands</span>
          </div>
          <div className="flex  flex-col gap-2">
            {ShownBrandsOptions.map((item, index) => (
              <div key={index}>
                <div className="flex text-sm gap-3">
                  <button>
                    <input className="text-green-300" type="checkbox" />
                  </button>
                  <button className="text-[#586A84]">{item.brandName}</button>
                  <button className="text-gray-400">
                    {item.brandQuantity}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`  flex-col gap-2 ${
              isShowMoreBrandsTrue ? "flex" : "hidden"
            }`}
          >
            {HiddenBrandsOptions.map((item, index) => (
              <div key={index}>
                <div className="flex text-sm gap-3">
                  <input type="checkbox" />
                  <span className="text-[#586A84]">{item.brandName}</span>
                  <span className="text-gray-400">
                    {item.brandQuantity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex">
            <button
              className="flex items-center justify-center gap-1 text-sm text-[#586A84]"
              onClick={toggleShowMoreBrands}
            >
              <span>Show</span>
              <span className={`${isShowMoreBrandsTrue ? "hidden" : ""}`}>
                More
              </span>
              <span className={`${isShowMoreBrandsTrue ? "" : "hidden"}`}>
                less
              </span>
              <span className={`${isShowMoreBrandsTrue ? "hidden" : ""}`}>
                <IoChevronDownOutline />
              </span>
              <span className={`${isShowMoreBrandsTrue ? "" : "hidden"}`}>
                <IoChevronUpOutline />
              </span>
            </button>
          </div>
        </div>
        {/* To */}

        {/* ----------------Price-Optons----------- */}
        <div className=" flex  flex-col w-4/5 gap-3 bg-white border-[1px] p-3 mt-8">
          <div className="text-xl font-medium">
            <span>Price</span>
          </div>
          <div className="flex  flex-col gap-2">
            {ShownPriceOPtions.map((item, index) => (
              <div key={index}>
                <div className="flex text-sm gap-3">
                  <button>
                    <input className="text-green-300" type="checkbox" />
                  </button>
                  <button className="text-[#586A84]">{item.priceOption}</button>
                  <button className="text-gray-400">
                    {item.quantityByPrice}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`  flex-col gap-2 ${
              isShowMorePriceOptionsTrue ? "flex" : "hidden"
            }`}
          >
            {HiddenPriceOptions.map((item, index) => (
              <div key={index}>
                <div className="flex text-sm gap-3">
                  <input type="checkbox" />
                  <span className="text-[#586A84]">
                    {item.priceOption}
                  </span>
                  <span className="text-gray-400">
                    {item.quantityByPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex">
            <button
              className="flex items-center justify-center gap-1 text-sm text-[#586A84]"
              onClick={toggleShowMorePriceOptions}
            >
              <span>Show</span>
              <span className={`${isShowMorePriceOptionsTrue ? "hidden" : ""}`}>
                More
              </span>
              <span className={`${isShowMorePriceOptionsTrue ? "" : "hidden"}`}>
                less
              </span>
              <span className={`${isShowMorePriceOptionsTrue ? "hidden" : ""}`}>
                <IoChevronDownOutline />
              </span>
              <span className={`${isShowMorePriceOptionsTrue ? "" : "hidden"}`}>
                <IoChevronUpOutline />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



export default OptionsComponents