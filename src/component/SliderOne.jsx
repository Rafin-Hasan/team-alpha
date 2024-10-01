import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AllData from "../Small Compo Part/ApiData/JsonData";
import Lottie from "lottie-react";
import anime from "../../public/Annimetion/arrowdown.json";

const SliderOne = ({ onSlideChange }) => {
  const [data, setData] = useState(AllData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true, // Enable infinite looping
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: "ondemand", // Ensure slides are lazy-loaded
    afterChange: (current) => {
      setCurrentIndex(current);
      if (onSlideChange) {
        onSlideChange(data[current]); // Trigger the callback to update data based on the active slide
      }
    },
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Slider Buttons */}
      <div className="hidden md:block">
        <div className="absolute inset-0 flex justify-between items-center px-4 z-10">
          <button
            onClick={goToPrev}
            className="w-[50px] z-50 h-[50px] rounded-full text-white hover:text-[#ff3a3a] transition-all bg-gray-800 flex items-center justify-center"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="w-[50px] h-[50px] rounded-full text-white hover:text-[#ff3a3a] transition-all bg-gray-800 flex items-center justify-center"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {data.map((alldata) => (
          <div key={alldata?.id} className="w-full h-full">
            <img
              className="w-full h-full object-top object-cover"
              src={alldata?.large_image}
              alt={alldata?.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderOne;
