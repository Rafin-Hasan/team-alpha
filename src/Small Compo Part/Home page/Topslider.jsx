import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AllData from "../Small Compo Part/ApiData/JsonData";
import anime from '../../public/Annimetion/arrowdown.json';
import Lottie from "lottie-react";

const Topslider = () => {
  // data from api
  const [data, updateData] = useState(AllData);

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: "ondemand",
    adaptiveHeight: true, // Enable adaptive height for different image sizes
    responsive: [
      {
        breakpoint: 768, // Mobile screen size
        settings: {
          arrows: false, // Disable arrows on mobile
          dots: true,
        },
      },
    ],
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
    <div className="relative w-full h-screen md:h-full"> {/* Use h-screen for mobile */}
      {/* Slider Buttons for desktop only */}
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
              className="w-full h-[70vh] md:h-full object-cover" // Adjust the height for mobile
              src={alldata?.large_image} // Unique image
              alt="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Topslider;
