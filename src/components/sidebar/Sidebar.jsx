import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import {
  CategoryItems,
  HiddenPriceOptions,
  ShownPriceOPtions,
} from "../similarComponents/SimilarItems";
import BrandComponent from "../similarComponents/BrandComponent";
import CategoriesComponent from "../similarComponents/CategoriesComponent";
import PriceComponent from "../similarComponents/PriceComponent";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  const [isCategoryTrue, setIsCategoryTrue] = useState(true);
  const toggleCategoryToTrue = () => setIsCategoryTrue((prev) => !prev);

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
          <div className="absolute right-9 top-9  text-4xl">
            <button onClick={toggleSidebar}>
              <RxCross2 />
            </button>
          </div>
        </div>

        <hr className="w-4/5 text-gray-800 h-8 mt-4" />

        {/* ---------------Categories------------------- */}
        <CategoriesComponent width="w-4/5"/>
        {/* -------------Brands-Options------------ */}

        <BrandComponent width="w-4/5"/>
        {/* ----------------Price-Optons----------- */}
        <PriceComponent width="w-4/5" />
      </div>
    </section>
  );
};

export default Sidebar;
