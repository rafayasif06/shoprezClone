import React from "react";
import { benifitsItemsData } from "./BenifitsItems";
import { RxLink1 } from "react-icons/rx";

const Benifits = () => {
  return (
    <section className="w-full ">
      <div className=" flex flex-col gap-12 p-8 mx-auto max-w-[1440px]  ">
        <div className="flex font-medium">
          <span className="text-4xl underline decoration-blue-500 decoration-2 underline-offset-8">
            Benifits
          </span>
        </div>
        <div className=" grid grid-cols-1  gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5 p-6 border-[1px] rounded-md w-full max-w-[1440px] mx-auto border-gray-300">
          {benifitsItemsData.map((item, index) => (
            <ul
              key={index}
              className={`flex items-center justify-center ${
                index === benifitsItemsData.length - 1
                  ? "border-none"
                  : "lg:border-r border-gray-300"
              }`}
            >
              <li className="flex items-center gap-2  justify-center md:gap-4">
                <div className="">
                  <img src={item.svg} alt="" className="~sm/lg:~w-8/10" />
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-medium">
                    <span>{item.line1}</span>
                  </div>
                  <div className="text-xs">
                    <span>{item.line2}</span>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
