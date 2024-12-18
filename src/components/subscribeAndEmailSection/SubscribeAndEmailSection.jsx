import React from "react";
import { RiTelegram2Fill } from "react-icons/ri";

function SubscribeAndEmailSection() {
  return (
    <section className="w-full max-w-[1440px] mt-4 sm:mt-8 lg:mt-20 mx-auto">
      <div className="flex flex-col items-center lg:flex-row  w-full sm:w-800px bg-[#0F121E] sm:justify-around  text-white p-8 gap-8">
        {/* ----------Texts------------ */}
        <div className="flex flex-col xl:flex-row font-normal gap-3 items-center ">
          <div className="text-base sm:text-lg">
            <p>Subscribe to Our Newsletter</p>
          </div>
          <div className="hidden xl:flex">
            <span>-</span>
          </div>
          <div className="flex gap-1">
            <span>Get a </span>
            <a href="#">
              <span className="sm:font-semibold sm:underline hidden sm:flex underline-offset-2">
                $20 Coupon
              </span>
            </a>
            <span className="sm:hidden">$20 Cupon</span>
            <span>for your first order!</span>
          </div>
        </div>

        {/* ----------Input------------ */}
        <div className="flex w-full items-center max-w-[600px]">
          <div className=" rounded-l-lg overflow-hidden w-full h-10 bg-sky-400  ">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full text-sm bg-gray-600 placeholder:text-white placeholder: p-2 h-full "
            />
          </div>
          <div className="bg-[#319DFF] overflow-hidden h-10 rounded-r-lg py-2 px-4 text-xl ">
            <button>
              <RiTelegram2Fill />
            </button>
          </div>
        </div>
      
      </div>
    </section>
  );
}

export default SubscribeAndEmailSection;
