import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroItems } from "./HeroSectoinItems";
import heroBackground from "../../assets/heroSection/heroBackground.png";
import Slider from "react-slick";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null); // Slider reference

  const dots = HeroItems.map((_, index) => index); // Generate dots based on slides

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex), // Update active index on slide change
  };

  return (
    <>
      <section className="w-full flex justify-center">
        <div className="bg-[#0F121E]  w-full items-center  justify-center p-4 md:w-[95%] ">
          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {HeroItems.map((item, index) => (
              <div key={index} className="">
                <div className="flex flex-col md:flex-row lg:justify-around items-center justify-center">
                  <div className=" flex flex-col gap-10 text-white items-center lg:items-start w-full max-w-[460px] justify-center mt-4 text-center">
                    <div className="~/xl:~text-2xl/3xl font-normal lg:text-left">
                      <h2>{item.top}</h2>
                    </div>
                    <div className="~/xl:~text-5xl/6xl font-semibold lg:text-left">
                      <h1>{item.center}</h1>
                    </div>
                    <div className="bg-[#E4B200] ~/xl:~text-lg/xl font-bold text-[#0F121E] p-2 rounded">
                      <span>{item.bottom}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <img
                      src="https://shoperz-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fitem1.ddd2af94.png&w=640&q=75"
                      alt=""
                      className="~sm/xl:~w-72/[30rem]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Dots */}
          <div className="flex justify-center items-center space-x-2 py-4 ">
            {dots.map((index) => (
              <button
                key={index}
                onClick={() => sliderRef.current.slickGoTo(index)} // Navigate to the slide
                className={`rounded-full transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "w-8 h-3 bg-white"
                    : "w-3 h-3 bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
