import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

const MovieSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Enable infinite scrolling
    speed: 500,
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    arrows: false, // Disable default arrows, we'll use custom arrows
    draggable: true, // Allow slides to be dragged
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
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative w-full h-full bg-black p-4">
      <div className="text-red-600 anton text-6xl font-bold mb-4">
        LATEST RELEASE
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="w-full h-full">
          {/* Slide 1 */}
          <div className="p-2 relative group">
            <div className="w-full h-0 pb-[56.25%] relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              {/* 16:9 Aspect Ratio */}
              <img
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                src="/photos/demoone.png"
                alt="Movie 1"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                <div className="text-left transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                  <h2 className="text-white text-2xl mb-2">Mera Naam Jamboo</h2>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform">
                    <FaPlay className="mr-2" /> Play
                  </button>
                </div>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="h-1 bg-gray-800 group-hover:bg-red-600 transition-all duration-500"></div>
          </div>

          {/* Slide 2 */}
          <div className="p-2 relative group">
            <div className="w-full h-0 pb-[56.25%] relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                src="/photos/squidgame.webp"
                alt="Movie 2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                <div className="text-left transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                  <h2 className="text-white text-2xl mb-2">Tu Mera Hero</h2>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform">
                    <FaPlay className="mr-2" /> Play
                  </button>
                </div>
              </div>
            </div>
            <div className="h-1 bg-gray-800 group-hover:bg-red-600 transition-all duration-500"></div>
          </div>

          {/* Slide 3 */}
          <div className="p-2 relative group">
            <div className="w-full h-0 pb-[56.25%] relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                src="https://hackernoon.imgix.net/images/eQHzh6rz7ETBHLjs0KzCl1Dooqp2-s593ohs.jpeg"
                alt="Movie 3"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                <div className="text-left transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                  <h2 className="text-white text-2xl mb-2">Takes Dittres</h2>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform">
                    <FaPlay className="mr-2" /> Play
                  </button>
                </div>
              </div>
            </div>
            <div className="h-1 bg-gray-800 group-hover:bg-red-600 transition-all duration-500"></div>
          </div>

          {/* Slide 4 */}
          <div className="p-2 relative group">
            <div className="w-full h-0 pb-[56.25%] relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                src="https://imageio.forbes.com/blogs-images/scottmendelson/files/2016/04/Captain-America-Civil-War-Poster.jpg?height=380&width=655&fit=bounds"
                alt="Movie 4"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                <div className="text-left transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                  <h2 className="text-white text-2xl mb-2">Aye-Y Pl</h2>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform">
                    <FaPlay className="mr-2" /> Play
                  </button>
                </div>
              </div>
            </div>
            <div className="h-1 bg-gray-800 group-hover:bg-red-600 transition-all duration-500"></div>
          </div>
        </Slider>

        {/* Custom Previous/Next Arrows */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-red-600"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-red-600"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MovieSlider;
