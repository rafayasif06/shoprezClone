import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CategoryItems } from "../similarComponents/SimilarItems";

const CategoriesComponent = ({ width="" }) => {
  const [isCategoryTrue, setIsCategoryTrue] = useState(true);
  const toggleCategoryToTrue = () => setIsCategoryTrue((prev) => !prev);

  return (
    <div className={` flex  flex-col ${width} gap-3 bg-[#EEF0F4] p-3`}>
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
  );
};

export default CategoriesComponent;
