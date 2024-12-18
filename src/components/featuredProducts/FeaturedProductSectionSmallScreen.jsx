import React, { useState } from "react";
import {
  HiddenFeaturedItems,
  ShownFeaturedItems,
} from "./FeaturedProductItems";
import { HiShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";

const FeaturedProductSectionSmallScreen = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleToOpen = () => setIsOpen((prev) => !prev);

  return (
    <section className="w-full md:hidden ">
      <div className="flex flex-col justify-center p-8 relative gap-12 ">
        <div className="absolute right-12 top-12">
          <button
            onClick={toggleToOpen}
            className="text-[#0077E4] text-base font-normal "
          >
            View All
          </button>
        </div>
        <div className="text-2xl underline font-medium decoration-blue-500 decoration-2 underline-offset-8">
          <span>Featured Products</span>
        </div>
        {/* ----------------Shown-featured-Items---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          {ShownFeaturedItems.map((item, index) => (
            <div
              key={index}
              className="flex  flex-col border border-gray-300 rounded-lg p-4 gap-3  "
            >
              <div className="text-base font-medium text-[#0077E4]">
                <a href="#">
                  <p>{item.product}</p>
                </a>
              </div>
              <div className="w-full flex items-center justify-center flex-1">
                <img src={item.prductImg} alt="" />
              </div>
              <div className="text-lg font-semibold">
                <span>{item.productPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex  items- rounded-full items-center justify-center py-3 px-4 text-white gap-3 bg-[#319DFF] leading-none ">
                  <span className=" text-xl">
                    <HiShoppingBag />
                  </span>
                  <span className="text-base">Add to Cart</span>
                </div>
                <div className="flex items-center justify-center p-3 w-10 h-10 rounded-full bg-gray-200">
                  <span className="text-gray-600">
                    <FaRegHeart />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ----------------Hidden-Featured-Items----------------------- */}
        <div
          className={` ${
            isOpen ? "grid grid-cols-1 sm:grid-cols-2 gap-8" : "hidden"
          } `}
        >
          {HiddenFeaturedItems.map((item, index) => (
            <div
              key={index}
              className="flex  flex-col border border-gray-300 rounded-lg p-4 gap-3  "
            >
              <div className="text-base font-medium text-[#0077E4]">
                <a href="">
                  <p>{item.product}</p>
                </a>
              </div>
              <div className="w-full flex items-center justify-center flex-1">
                <img src={item.prductImg} alt="" />
              </div>
              <div className="text-lg font-semibold">
                <span>{item.productPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex  items- rounded-full items-center justify-center py-3 px-4 text-white gap-3 bg-[#319DFF] leading-none ">
                  <span className=" text-xl">
                    <HiShoppingBag />
                  </span>
                  <span className="text-base">Add to Cart</span>
                </div>
                <div className="flex items-center justify-center p-3 w-10 h-10 rounded-full bg-gray-200">
                  <span className="text-gray-600">
                    <FaRegHeart />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default FeaturedProductSectionSmallScreen;
