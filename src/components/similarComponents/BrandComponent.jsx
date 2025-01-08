import React, { useState } from "react";
import { HiddenBrandsOptions, ShownBrandsOptions } from "./SimilarItems";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const BrandComponent = ({ width = "" }) => {
  const [isShowMoreBrandsTrue, setIsShowMoreBrandsTrue] = useState(false);
  const toggleShowMoreBrands = () => setIsShowMoreBrandsTrue((prev) => !prev);

  return (
    <div
      className={`flex  flex-col ${width} gap-3 bg-white border-[1px] p-3 mt-8`}
    >
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
              <button className="text-gray-400">{item.brandQuantity}</button>
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
              <span className="text-gray-400">{item.brandQuantity}</span>
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
  );
};

export default BrandComponent;
