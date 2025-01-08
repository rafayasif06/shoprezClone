import React from "react";
import { keyPoints } from "./ProductDetailItems";
import GamingComputer from "../../assets/productDetail/gamingComputer.png";
import deviceCompatibles from "../../assets/productDetail/deviceCompatibles.png";
import windowsLogo from "../../assets/productDetail/windowsLogo.png";

const ProductDetailDescryption = () => {
  return (
    <section className=" w-full mt-8 p-4 ">
      <div className="max-w-[1000px] px-4 pb-8 md:pb-16 pt-4 md:pt-8 mx-auto flex flex-col items-center justify-center border-[1px] rounded-lg ">
        <div className=" w-full ~sm/xl:~text-xl/3xl font-semibold text-customGray">
          <h2>Descrypton</h2>
        </div>
        {/* -------------------Key-Properties--------------- */}
        <div className=" flex w-full gap-4  items-cente  ">
          {/* -----------Left-Half-Properties---------- */}
          <div className=" flex gap-4 flex-col w-full items-center justify-center">
            <div className="~sm/lg:~text-lg/xl max-w-[500px]  w-full font-medium">
              <h3>Key properties:</h3>
            </div>

            <div className="">
              {keyPoints.map((item, index) => (
                <ul
                  key={index}
                  className="flex flex-col text-sm list-disc ml-4"
                >
                  <li>{item.processor}</li>
                  <li>{item.motherboard}</li>
                  <li>{item.graphicCard}</li>
                  <li>{item.ram}</li>
                  <li>{item.hdd}</li>
                  <li>{item.powerSupply}</li>
                  <li>{item.os}</li>
                  <li>{item.benifit1}</li>
                  <li>{item.benifit2}</li>
                  <li>{item.benifit3}</li>
                </ul>
              ))}
            </div>
          </div>
          {/* -----------Right-Half-Properties---------- */}
          <div className="max-w-[500px] w-full  md:flex hidden">
            <div className="   w-full  items-center justify-center">
              <img
                className=" w-80 h-80 xl:w-[400px] xl:h-[400px]"
                src={GamingComputer}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* ------------------Expand-Line---------------- */}
        <div className="w-full mt-4 items-center justify-center flex md:hidden text-xl font-medium ">
          <p>Expand your options and achieve more</p>
        </div>
        {/* ------------------Expands-Your-Options---------------- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 md:mt-8">
          {/* -------------------Left-Half-Expand------------------- */}
          <div className="max-w-[500px]flex w-full items-center justify-center ">
            <div className="  w-full h-full  flex items-center justify-center">
              <img
                className="~/xl:~w-[12.5rem]/[28rem] "
                src={GamingComputer}
                alt=""
              />
            </div>
          </div>
          {/* -------------------Right-Half-Expand------------------- */}

          <div className="flex flex-col gap-3 max-w-[500px] w-full">
            <div className="flex flex-col gap-2">
              <p className="hidden md:flex  ~sm/xl:~text-lg/2xl font-medium">
                Expand your options and achieve more
              </p>
              <p className="~sm/xl:~text-sm/base  text-gray-500">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="~sm/xl:~text-lg/2xl font-medium">Lorem ipsum</p>
              <p className="~sm/xl:~text-sm/base  text-gray-500">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content.
              </p>
            </div>
          </div>
        </div>
        {/* -------------------Device-Compatibles------------------- */}
        <div className="flex flex-col mt-4 md:mt-8 items-center justify-center">
          {/* --------------------Upper-Half------------------- */}

          <div className="w-full mt-4 flex  text-xl font-medium ">
            <p className="w- ~sm/xl:~text-lg/2xl font-medium">
              The device is fully prepared and configured. In addition,
              applications such as:
            </p>
          </div>
          <ul className="mt-4 md:mt-8 w-full flex flex-col gap-1 ~sm/lg:~text-base/lg list-disc ml-8">
            <li>Total 360 Antivirus</li>
            <li>Acrobat Reader DC</li>
            <li>WinRAR</li>
            <li>Office package Open Office</li>
            <li>Google Chrome</li>
            <li>VLC Media Player</li>
          </ul>
          <div className="w-full mt-8 md:mt-12 flex items-center justify-center">
            <img
              src={deviceCompatibles}
              className="~/xl:~w-[22rem]/[44rem]"
              alt=""
            />
          </div>
          {/* --------------------Lower-Half------------------- */}
          <div className="flex flex-col items-center justify-center gap-6 md:gap-12 mt-6 md:mt-12">
            <div className=" w-full flex flex-col gap-2">
              <p className=" ~/xl:~text-lg/2xl font-medium">
                The computer has a full legal version of the WINDOWS operating
                system without a time limit
              </p>
              <p className="~/xl:~text-sm/lg text-gray-500 ">
                The operating system including drivers is installed and
                configured. All ready for work and fun. After connecting and
                starting the computer, it will display the Windows desktop.
              </p>
            </div>
            {/* -------------------------------- */}
            <div className="flex flex-col gap-6  items-center  justify-center">
              <p className="~/xl:~text-lg/2xl font-medium">
                The WINDOWS license key is listed on the warranty card along
                with information about the installed software.
              </p>
              <div>
                <img src={windowsLogo} alt="" />
              </div>
            </div>
            {/* -------------------------------- */}
            <div className="flex flex-col gap-2">
              <p className="~/xl:~text-lg/2xl font-medium">
                Safe transportation
              </p>
              <p className="~/xl:~text-sm/lg  text-gray-500">
                After thorough testing, the computers are packed in strong,
                original product cartons. They are secured inside by strong
                polystyrene profiles. This ensures that the computer reaches you
                without problems and unpleasant surprises.
              </p>
            </div>
            {/* -------------------------------- */}
          </div>
        </div>
        {/* -------------------End------------------- */}
        
      </div>
    </section>
  );
};

export default ProductDetailDescryption;
