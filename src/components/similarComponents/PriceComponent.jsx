import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import {
  HiddenPriceOptions,
  ShownPriceOPtions,
} from "../similarComponents/SimilarItems";

const PriceComponent = ({ width="" }) => {
  const [isShowMorePriceOptionsTrue, setIsShowMorePriceOptionsTrue] =
    useState(false);
  const toggleShowMorePriceOptions = () =>
    setIsShowMorePriceOptionsTrue((prev) => !prev);

  return (
    <div className={`flex  flex-col ${width} bg-white border-[1px] p-3 mt-8`}>
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
              <button className="text-gray-400">{item.quantityByPrice}</button>
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
              <span className="text-[#586A84]">{item.priceOption}</span>
              <span className="text-gray-400">{item.quantityByPrice}</span>
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
  );
};

export default PriceComponent;
