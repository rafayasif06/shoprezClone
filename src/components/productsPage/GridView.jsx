import React from "react";
import { ProductPageItems } from "./ProductPageItems";
import { HiShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";

const GridView = () => {
  const savingItem = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {ProductPageItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-[350px]  border rounded-md p-4"
          >
            <div className=" w-full flex ">
              <a href="#">
                <p className="text-customBlue font-medium text-sm hover:underline underline-offset-2 ">
                  {item.product}
                </p>
              </a>
            </div>

            <div className="flex justify-center w-72 flex-1">
              <img src={item.prductImg} alt="" />
            </div>

            <div className=" w-full flex justify-between items-center">
              <div className="text-lg font-semibold">
                <span>{item.productPrice}</span>
              </div>
              <div className="flex gap-2">
                <div className="flex rounded-full  h-8 w-8 bg-gray-200  hover:text-customBlue text-gray-500">
                  <button className="w-full h-full flex items-center justify-center">
                    <FaRegHeart />
                  </button>
                </div>
                <div className="flex rounded-full  h-8 w-8 bg-customBlue hover:bg-gray-400  text-white">
                  <button
                    onClick={() => savingItem(index, item)}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <HiShoppingBag />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GridView;
