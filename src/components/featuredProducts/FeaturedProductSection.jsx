import React, { useRef } from "react";
import { FeaturedItems } from "./FeaturedProductItems";
import "slick-carousel/slick/slick.css";
import { HiShoppingBag } from "react-icons/hi2";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import nextArrow from "../../assets/carousel/nextArrow.svg";
import prevArrow from "../../assets/carousel/prevArrow.svg";

const FeaturedProductsSection = () => {
  const sliderRef = useRef(null);
  const CustomPrevArrow = (props) => (
    <button
      className="custom-arrows prev-arrow"
      onClick={props.onClick}
      style={{ display: "block" }}
    />
  );

  const CustomNextArrow = (props) => (
    <button
      className="custom-arrows next-arrow"
      onClick={props.onClick}
      style={{ display: "block" }}
    />
  );

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440, // From 900 to 1100
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280, // From 768 to 900
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Below 768
        settings: {
          slidesToShow: 2,
        },
      },
    ],

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <section className="w-full hidden md:block">
      <div className=" p-8 flex flex-col gap-12 relative mx-auto max-w-[1440px] ">
        <div className=" font-medium">
          <span className="text-4xl underline decoration-blue-500 decoration-2 underline-offset-8">
            Featured Products
          </span>
        </div>
        <div className="w-full  ">
          <Slider ref={sliderRef} {...settings} className="">
            {FeaturedItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center h-[350px]  border rounded-md p-4"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-gray-500 text-sm font-normal">
                    {item.productManufacturer}
                  </span>
                  <a href="#">
                    <p className="text-[#0077E4] font-medium text-base- ">
                      {item.product}
                    </p>
                  </a>
                </div>

                <div className="flex justify-center w-72 flex-1">
                  <img src={item.prductImg} alt="" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold">
                    <span>{item.productPrice}</span>
                  </div>
                  <div className="flex rounded-full justify-center items-center h-8 w-8 bg-gray-300 hover:bg-gray-400 text-white">
                    <button>
                      <HiShoppingBag />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex gap-8 absolute right-12 top-16">
          <button className="" onClick={previousSlide}>
            <img src={prevArrow} alt="" />
          </button>
          <button className="" onClick={nextSlide}>
            <img src={nextArrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
