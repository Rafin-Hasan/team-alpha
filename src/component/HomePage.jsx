import React, { useState } from "react";
import { FaImdb, FaPlay } from "react-icons/fa";
import SliderOne from "./SliderOne";
import AllData from "../Small Compo Part/ApiData/JsonData";
import { useDispatch } from "react-redux";
import { AlphateamData } from "../Slices/SliceData";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // API data from local storage
  const [currentShow, setCurrentShow] = useState(AllData[0]); // Start with the first show as default

  // Callback function to update the data when the slider changes
  const handleSlideChange = (currentData) => {
    setCurrentShow(currentData); // Update the current show details based on the active slide
  };

  // Function to navigate user to watch video
  const handlePlayClick = (xo) => {
    // Dispatch the current show data and store it in local storage
    dispatch(AlphateamData(currentShow));
    localStorage.setItem("AlphaTeam", JSON.stringify(currentShow));
    

    // Navigate to the watch landing page
    navigate("/watchlanding");
  };
  const nextbutton = (xo) => {
    
    dispatch(AlphateamData(xo));
    localStorage.setItem("AlphaTeam", JSON.stringify(xo));
    

    // Navigate to the watch landing page
    navigate("/watchlanding");
  };

  return (
    <>
      <div className="home w-full h-[100vh] overflow-y-scroll bg-black ">
        <div className="homemain w-full h-fit md:h-[424px] pl-5 bg-black flex">
          {/* Left Section */}
          <div className="hidden md:block">
            <div className="flex flex-col justify-start">
              <div className="flex items-end gap-2 pt-[70px] pl-[10px] relative">
                <p className="text-[35px] absolute top-[100px] z-50 shadow h-[100px] text-white font-medium">
                  {currentShow?.name} {/* Dynamically show the current show's name */}
                </p>
              </div>
              <div className="w-[300px] h-[200px] md:mt-44 md:pl-4">
                <div className="text-[#fff41d] ml-2 text-[30px] mt-3 flex gap-2">
                  <FaImdb />
                  <h4 className="text-[16px] text-white font-semibold">
                    {currentShow?.imdb_rating} {/* Show IMDb rating */}
                    <span className="text-[14px]">/</span>10
                  </h4>
                </div>
                <p className="text-white ml-2 mt-1">
                  <span className="text-[#ff0202]">{currentShow?.streams}</span> Streams
                </p>
                <div className="w-full h-[144px] flex items-center">
                  <div className="flex gap-3">
                    <button
                      onClick={handlePlayClick}
                      className="w-[125px] h-[44px] rounded-full bg-white hover:bg-[#ff0202] hover:text-white transition-transform duration-300 hover:scale-105 active:scale-95"
                    >
                      Play
                    </button>
                    {/* <span>   🤣⁉️🤣   </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Slider) */}
          <div className="right-section mt-5 md:mt-0  md:w-[1120px] w-full h-[150px] mb-20 md:mb-0 mr-2 md:mr-0  md:h-full flex overflow-hidden justify-end relative">
            <SliderOne onSlideChange={handleSlideChange} />

            {/* Overlay Gradients */}
            <div className="absolute hidden md:block  w-full h-[100px] left-0 md:w-[200px] md:h-full bg-gradient-to-r from-[#000]"></div>
            <div className="absolute  hidden md:block  w-full h-[100px] left-0 md:w-[200px] md:h-full bg-gradient-to-r from-[#000]"></div>
            <div className="absolute  hidden md:block bottom-0 w-full h-[100px] md:w-full md:h-[200px] bg-gradient-to-t from-[#000]"></div>
          </div>
        </div>

        {/* Dynamic API data display */}
        <div className="flex flex-wrap gap-4 justify-center bg-black md:pt-12 ">
          {AllData.map((data) => (
            <div key={data.id} className="md:w-[200px] md:h-[280px] w-[100px] h-[140px]">
              <div className="w-full h-full overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={data.short_image}
                  alt={data.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-lg font-semibold mb-2">
                    {data.name}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400 font-medium">
                      {data.imdb_rating}
                    </span>

                    <div onClick={() => nextbutton(data)} className="bg-white text-black rounded-full p-2 hover:bg-[#ff0202] hover:text-white transition-colors duration-300 cursor-pointer">
                      <FaPlay className="text-lg" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
