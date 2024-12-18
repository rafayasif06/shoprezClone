import React from "react";
import { ShoprezContact, ShoprezLinks } from "./FirstFooterItems";

export default function FirstFooter() {
  return (
    <footer className="w-full">
      <div className="flex flex-col md:flex-row md:items-center  justify-center p-12 gap-16 md:gap-0 md:justify-between xl:justify-between  max-w-[1440px] mx-auto ">
        {/* -------------Shoprez-Logo-And-Contact----------- */}
        <div className="flex flex-col gap-8 ">
          <div className="w-72">
            <img
              src="https://shoperz-one.vercel.app/_next/static/media/shoperz.4818bbc8.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3 ">
            {ShoprezContact.map((item, index) => (
              <div key={index} className="flex flex-col gap-1.5">
                <span className="text-base font-medium">{item.heading}</span>
                <p className="text-gray-500 text-sm ">{item.line2}</p>
              </div>
            ))}
          </div>
        </div>
        {/* -------------Links----------- */}
        <div className="grid grid-cols-2 md:grid-cols-3 ~/xl:~gap-8/20   h-full">
          {ShoprezLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-4 ">
              <p className="text-base font-semibold">{section.heading}</p>
              <ul className="flex flex-col flex-1 gap-y-3.5 ">
                {section.links.map((link, index) => (
                  <li key={index} className="flex md:flex-1 text-sm font-medium hover:underline underline-offset-2 text-gray-500">
                    <a className="hover:text-gray-700" href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

{
  /* <div class="flex flex-col lg:flex-row lg:space-x-4">
  <div class="bg-blue-500 p-4">1</div>
  <div class="bg-blue-500 p-4">2</div>
  <div class="bg-blue-500 p-4">3</div>
  </div> */
}
