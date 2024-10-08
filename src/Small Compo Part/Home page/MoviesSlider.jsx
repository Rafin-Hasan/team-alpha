import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import AllData from "../ApiData/JsonData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AlphateamData } from "../../Slices/SliceData";

const MovieSlider = () => {
  const [currentShow] = useState(AllData?.[0] || {}); // Default to the first item or an empty object if AllData is not available.
  const sliderRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to navigate user to watch video
  const handlePlayClick = (xo) => {
    dispatch(AlphateamData(xo));
    localStorage.setItem("AlphaTeam", JSON.stringify(xo));

    // Navigate to the watch landing page
    navigate("/watchlanding");
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  return (
    <div className="relative w-full h-full bg-black p-4">
      <div className="text-red-600 anton text-[25px] md:text-4xl font-bold mb-4">
        LATEST RELEASE
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="w-full h-full">
          {AllData && AllData.length > 0 ? (
            AllData.map((xo, index) => (
              <div key={index} className="p-2 relative group">
                <div className="w-full h-0 pb-[56.25%] relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  {/* 16:9 Aspect Ratio */}
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    src={xo?.large_image}
                    alt={xo?.name || "Movie"}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                    <div className="text-left transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                      <h2 className="text-white text-2xl mb-2">{xo?.name}</h2>
                      <button
                        onClick={() => handlePlayClick(xo)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold md:py-2 py-1 md:px-4 px-2 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform"
                      >
                        <FaPlay className="mr-2" /> Play
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gray-800 group-hover:bg-red-600 transition-all duration-500"></div>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No movies available</p>
          )}
        </Slider>

        {/* Custom Previous/Next Arrows */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#00000039] text-white p-2 rounded-full hover:bg-[#ff343472]"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#00000039] text-white p-2 rounded-full hover:bg-[#ff343472]"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MovieSlider;
