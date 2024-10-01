import React, { useRef, useState } from "react";
import { FaImdb, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import SliderOne from "./SliderOne"; // Assuming you have a slider component
import AllData from "../Small Compo Part/ApiData/JsonData";

const HomePage = () => {
  const [apidata] = useState(AllData);
  const [currentShow, setCurrentShow] = useState(apidata[0]); // Start with the first show as default
  const navigate = useNavigate(); // Hook for navigation

  // Callback function to update the data when the slider changes
  const handleSlideChange = (currentData) => {
    setCurrentShow(currentData); // Update the current show details based on the active slide
  };

  // Filtered data for Latest Release and Continue Watching categories
  const latestRelease = apidata.filter((anime) => anime.latest_released);
  const continueWatching = apidata.filter((anime) => anime.watched);

  // Limit the number of displayed items
  const displayedLatestRelease = latestRelease.slice(0, 15);
  const displayedContinueWatching = continueWatching.slice(0, 15);

  // Refs for draggable sliders
  const latestReleaseRef = useRef(null);
  const continueWatchingRef = useRef(null);

  // State for tracking the drag
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e, ref) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX); // Track the initial mouse/touch position
    setScrollLeft(ref.current.scrollLeft); // Track initial scroll position
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const dragMove = (e, ref) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX; // Current mouse/touch position
    const walk = (x - startX) * 1; // Adjust sensitivity for smoother scroll
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="home w-full h-[100vh] overflow-y-scroll bg-black">
      <div className="homemain w-full h-fit md:h-[424px] pl-5 bg-black flex">
        {/* Left Section */}
        <div className="hidden md:block">
          <div className="flex flex-col justify-start">
            <div className="flex items-end gap-2 pt-[70px] pl-[10px] relative">
              <p className="text-[35px] text-wrap absolute top-[100px] z-50 shadow h-[100px] text-white font-poppins font-medium">
                {currentShow?.name}{" "}
                {/* Dynamically show the current show's name */}
              </p>
            </div>
            <div className="w-[300px] h-[200px] md:mt-44 md:pl-4">
              <div className="text-[#fff41d] ml-2 text-[30px] mt-3 flex gap-2">
                <FaImdb />
                <h4 className="text-[16px] text-white font-semibold font-poppins">
                  {currentShow?.imdb_rating} {/* Show IMDb rating */}
                  <span className="text-[14px]">/</span>10
                </h4>
              </div>
              <p className="text-white ml-2 mt-1">
                <span className="text-[#ff0202]">{currentShow?.streams}</span>{" "}
                Streams
              </p>
              <div className="w-full h-[144px] flex items-center">
                <div className="flex gap-3">
                  <button className="w-[125px] h-[44px] rounded-full bg-white hover:bg-[#ff0202] hover:text-white transition-all hover:scale-105 active:scale-95">
                    Play
                  </button>
                  <button className="w-[125px] h-[44px] rounded-full bg-white hover:bg-[#ff0202] hover:text-white transition-all hover:scale-105 active:scale-95">
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Slider) */}
        <div className="right-section mt-5 md:mt-0 md:w-[1120px] w-full h-[150px] mb-20 md:mb-0 mr-2 md:mr-0 md:h-full flex overflow-hidden justify-end relative">
          <SliderOne onSlideChange={handleSlideChange} />

          {/* Overlay Gradients */}
          <div className="absolute hidden md:block w-full h-[100px] left-0 md:w-[200px] md:h-full bg-gradient-to-r from-[#000]"></div>
          <div className="absolute hidden md:block bottom-0 w-full h-[100px] md:w-full md:h-[200px] bg-gradient-to-t from-[#000]"></div>
        </div>
      </div>

      {/* Latest Release Section */}
      <div className="w-full py-10">
        <div className="flex justify-between items-center">
          <h2 className="text-[40px] text-red-600 pb-3 font-bold pl-8">
            LATEST RELEASE
          </h2>
          <p className="pr-8">DRAG TO NEXT &rarr;</p>
        </div>
        <div
          ref={latestReleaseRef}
          className="flex gap-6 px-8 overflow-x-auto scrollbar-hide cursor-grab"
          onMouseDown={(e) => startDrag(e, latestReleaseRef)}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onMouseMove={(e) => dragMove(e, latestReleaseRef)}
          onTouchStart={(e) => startDrag(e, latestReleaseRef)}
          onTouchEnd={stopDrag}
          onTouchMove={(e) => dragMove(e, latestReleaseRef)}
        >
          {displayedLatestRelease.map((data) => (
            <div
              key={data.id}
              className="relative w-[240px] h-[360px] shrink-0 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={data.short_image}
                alt={data.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white text-black rounded-full p-2 hover:bg-[#ff0202] hover:text-white transition-colors duration-300 cursor-pointer">
                    <FaPlay className="text-lg" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    {data.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-4 px-6 py-2 bg-[#ff0202] text-white rounded-md"
          onClick={() => navigate("/allvideos")}
        >
          Watch More
        </button>
      </div>

      {/* Continue Watching Section */}
      <div className="w-full py-10">
        <div className="flex justify-between items-center">
          <h2 className="text-[40px] text-red-600 pb-3 font-bold pl-8">
            CONTINUE WATCHING
          </h2>
          <p className="pr-8">DRAG TO NEXT &rarr;</p>
        </div>
        <div
          ref={continueWatchingRef}
          className="flex gap-6 px-8 overflow-x-auto scrollbar-hide cursor-grab"
          onMouseDown={(e) => startDrag(e, continueWatchingRef)}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onMouseMove={(e) => dragMove(e, continueWatchingRef)}
          onTouchStart={(e) => startDrag(e, continueWatchingRef)}
          onTouchEnd={stopDrag}
          onTouchMove={(e) => dragMove(e, continueWatchingRef)}
        >
          {displayedContinueWatching.map((data) => (
            <div
              key={data.id}
              className="relative w-[240px] h-[360px] shrink-0 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={data.short_image}
                alt={data.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white text-black rounded-full p-2 hover:bg-[#ff0202] hover:text-white transition-colors duration-300 cursor-pointer">
                    <FaPlay className="text-lg" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    {data.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-4 px-6 py-2 bg-[#ff0202] text-white rounded-md"
          onClick={() => navigate("/allvideos")}
        >
          Watch More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
