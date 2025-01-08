import React from "react";
import CategoriesComponent from "../similarComponents/CategoriesComponent";
import BrandComponent from "../similarComponents/BrandComponent";
import PriceComponent from "../similarComponents/PriceComponent";

import menuIcon1 from "../../assets/productPage/menuIcon1.svg";
import menuIcon2 from "../../assets/productPage/menuIcon2.svg";
import GridView from "./GridView";
import ListView from "./ListView";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showView = searchParams.get("view") === "grid";
  return (
    <section className="w-full">
      <div className="flex max-w-[1440px] mx-auto mt-8 p-2 lg:p-8 gap-8 ">
        {/* ------------Left-Bar--------- */}
        
        <div className=" hidden lg:flex flex-col w-1/4   ">
          <CategoriesComponent widhth="w-6/7"/>
          <BrandComponent widhth="w-6/7"/>
          <PriceComponent widhth="w-6/7"/>

        </div>
        {/* ---------------Right-Half---------- */}
        <div className="flex w-full items-center justify-between flex-col lg:w-3/4   gap-8">
          {/* ---------------Product-List---------------- */}
          <div className=" flex flex-col gap-3 items-center justify-center w-full border-[1px] border-gray-200 rounded-lg p-3 ">
            <div className="w-full flex justify-between">
              <div className="~/xl:~text-2xl/4xl text-customGray font-semibold">
                <h1>Product List</h1>
              </div>
              <div className="flex items-center ~sm/lg:~text-sm/base justify-center font-light text-gray-500">
                <span>Showing 1-12 of 1090</span>
              </div>
            </div>
            <hr className=" hidden md:flex w-[95%]" />
            <div className="w-full hidden md:flex justify-between">
              <div className="flex gap-2 ">
                <button
                  onClick={() => setSearchParams({ view: "grid" })}
                  className=" rounded-lg hover:bg-gray-200 p-2"
                >
                  <img className="w-6" src={menuIcon1} alt="" />
                </button>
                <button
                  onClick={() => setSearchParams({ view: "list" })}
                  className=" rounded-lg hover:bg-gray-200 p-2"
                >
                  <img className="w-6" src={menuIcon2} alt="" />
                </button>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex rounded-full text-gray-500 text-sm  border-gray-200 border-2 overflow-hidden p-1">
                  <label htmlFor="sorting"></label>
                  <select name="sort" id="sort-select">
                    <option value="default sorting">Default sorting</option>
                    <option value="best match">Best Match</option>
                    <option value="price low to high">Price low to high</option>
                    <option value="price high to low">Price high to low</option>
                  </select>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          {/* ----------Products-------- */}
          {/* --------------Grid-View-------- */}
          <div className={`${showView ? "flex" : "hidden"}`}>
            <GridView />
          </div>

          {/* --------------List-View-------- */}
          <div className={`${showView ? "hidden" : "flex"}`}>
            <ListView />
          </div>
          {/* ---------------- */}
          <div className="flex justify-between w-full items-center p-3 border-[1px] rounded border-gray-300">
            <div className="gap-1 flex items-center justify-center text-sm text-customGray">
              <span>Showing</span>
              <span className="font-medium">1 - 20</span>
              <span>of</span>
              <span className="font-medium">120</span>
            </div>
            <div class="flex items-center gap-2">
              <label>
                <input type="radio" name="page" class="hidden" />
                <span class="px-4 py-2 rounded-full max-w-8 min-h-8 bg-customBlue text-white cursor-pointer">
                  1
                </span>
              </label>

              <label>
                <input type="radio" name="page" class="hidden" />
                <span class="px-4 py-2 rounded-full max-w-8 min-h-8 bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">
                  2
                </span>
              </label>

              <label>
                <input type="radio" name="page" class="hidden" />
                <span class="px-4 py-2 rounded-full max-w-8 min-h-8 bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">
                  3
                </span>
              </label>

              <label>
                <input type="radio" name="page" class="hidden" />
                <span class="px-4 py-2 rounded-full max-w-8 min-h-8 bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">
                  4
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
