import React from "react";
import ProductPageItems from "./ProductPageItems";
import { HiShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";

const ListView = () => {
  return (
    <div className="w-full flex-col flex items-center justify-center gap-4">
      {ProductPageItems.map((item, index) => (
        <div
          className=" border-[1px] gap-8 border-gray-300 rounded-lg flex p-4"
          key={index}
        >
          {/* --------left-div----------- */}
          <div className="w-52 ">
            <img className="hover:scale-110 transition duration-500 min-w-52" src={item.prductImg} alt="image" />
          </div>
          {/* --------right-div----------- */}
          <div className="flex flex-col items-center justify-center gap-3 ">
            <div className="w-full text-xl font-semibold text-customBlue">
              <h1>{item.product}</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quae temporibus non hic ut perspiciatis officia aut ipsa
                corporis qui!
              </p>
            </div>
            <div className="w-full text-customGray font-medium text-2xl">
              <span>{item.productPrice}</span>
            </div>
            {/* -------------Cart-And-Favourite-------- */}
            <div className="w-full flex gap-4">
              <div className="flex  ">
                <button
                  className="flex  rounded-full items-center justify-center py-3 px-4 text-white gap-3  hover:text-gray-500 hover:bg-white hover:border-2  hover:border-gray-500 bg-[#319DFF] leading-none"
                  onClick={() => savingItem(index, item)}
                >
                  <span className="text-base">Add to Cart</span>
                  <span className=" text-xl">
                    <HiShoppingBag />
                  </span>
                </button>
              </div>
              <div className="flex   ">
                <button className="flex  rounded-full items-center justify-center py-3 px-4 hover:text-white hover:bg-customBlue text-gray-500 border-gray-500 gap-3 border-2  leading-none">
                  <span className="text-base">Add to Cart</span>
                  <span className=" text-xl">
                    <FaRegHeart />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
