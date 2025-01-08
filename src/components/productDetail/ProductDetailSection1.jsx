import React, { useState } from "react";
import { colors, productItems } from "./ProductDetailItems";
import GamingComputer from "../../assets/productDetail/GamingComputer.png";
import { IoStar } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const ProductDetailSection1 = () => {
  const [mainImage, setMainImage] = useState(GamingComputer);
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-3 p-8 md:p-8">
      {/* ---------------------------------Left---------------------------------------------------- */}
      <div className="flex mx-auto flex-col items-center w-full max-w-[500px] gap-8 justify-center">
        <div className="overflow-hidden">
          <img className="w-96 " src={mainImage} alt="" />
        </div>
        <div className="flex items-center justify-center gap-1">
          {productItems.map((image, index) => (
            <div
              className=" border-2 border-transparent rounded-lg overflow-hidden hover:border-customBlue"
              key={index}
            >
              <img
                className="w-14 h-14 "
                src={image}
                alt=""
                onMouseEnter={() => setMainImage(image)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* --------------------------------Right------------------------------------------------------- */}
      <div className=" flex items-center mx-auto justify-center flex-col max-w-[500px] w-full gap-4">
        <div className="font-semibold ~/xl:~text-xl/2xl text-customBlue">
          <h1>Laptop Gaming computer Personal computer Intel cooler</h1>
        </div>
        <div className="flex gap-3 items-start leading-none w-full ">
          <span className="flex ">
            {[...Array(5)].map((_, index) => (
              <IoStar key={index} className="text-yellow-500" />
            ))}
          </span>
          <span className="font-medium text-customGray">4.8</span>
          <span className="text-gray-500">(200)</span>
        </div>
        <ul className="list-disc text-gray-500 flex flex-col gap-2 text-sm ml-4">
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            magnam dignissimos incidunt magni in maiores!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            odio debitis deleniti cum, ratione dolorum molestiae voluptatem
            facilis minima molestias?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            itaque?
          </li>
        </ul>
        <div className="text-sm w-full">
          <span className="text-gray-500">SKU: </span>
          <span className="font-medium">29087645</span>
        </div>

        <div className="flex flex-col  gap-2  w-full">
          <span className="font-medium text-base">Brand</span>
          <span className="text-gray-500 text-sm">Coolar Master</span>
        </div>

        <div className="w-full flex flex-col gap-2">
          <span className="text-base font-medium">Color</span>
          <div className="flex items-center gap-2 ">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-7 h-7 border-2 rounded ${
                  color.bgClass
                } ${
                  selectedColor === color.name
                    ? "border-customBlue"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedColor(color.name)}
              >
                {selectedColor === color.name && (
                  <FaCheck className={`text-sm ${color.textColor}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection1;
