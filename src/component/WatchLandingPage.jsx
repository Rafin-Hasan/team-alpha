import React, { useState, useEffect } from "react";
import RightSideWatch from "../Small Compo Part/watch landing page/RightSideWatch";
import RecommendedSlider from "../Small Compo Part/watch landing page/RecomendedSlide";
import AllData from "../Small Compo Part/ApiData/JsonData";
import { FaPlay } from "react-icons/fa";
import Details from "../Small Compo Part/watch landing page/Details";
import { useDispatch, useSelector } from "react-redux";
import Treanding from "../Small Compo Part/watch landing page/Treanding";
import { useNavigate } from "react-router-dom";

const WatchLandingPage = () => {
  // Get data from Redux slice
  const dataFormRedux = useSelector((state) => state.info.clone);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Global data library
  const [data, setData] = useState(AllData[0]);
  
  // Dynamically received data (initially null)
  const [alpha, setAlpha] = useState(null);

  // Sync Redux data with local state when `dataFormRedux` changes
  useEffect(() => {
    if (dataFormRedux) {
      setAlpha(dataFormRedux); // Update alpha with Redux data when it changes
    }
  }, [dataFormRedux]);

  // When the page loads, get the data from localStorage if available
  useEffect(() => {
    const savedAlphaTeam = localStorage.getItem("AlphaTeam");
    if (savedAlphaTeam) {
      setAlpha(JSON.parse(savedAlphaTeam));
    }
  }, []);

  const handlePlayClick = (item) => {
    // Store in localStorage
    localStorage.setItem("AlphaTeam", JSON.stringify(item));

    // Update the state to trigger re-render with new data
    setAlpha(item);

    // Dispatch action if needed (this line can be re-enabled when AlphateamData is available)
    // dispatch(AlphateamData(item));
  };

  return (
    <div className="w-full h-[100vh] watclanding overflow-y-scroll">
      <div className="w-full h-full watclanding2 flex">
        <div className="w-full flex flex-col md:flex-row watchlandingpage h-full text-white pt-10">
          {/* Left side photo */}
          <div className="w-[100px] md:w-[300px] p-1 md:p-10">
            {alpha ? (
              <img
                className="w-full h-auto"
                src={alpha?.short_image}
                alt="poster"
              />
            ) : (
              <p className="text-white">Loading...</p>
            )}
          </div>

          {/* Right Side */}
          <RightSideWatch />
        </div>

        {/* Details */}
        <Details />
      </div>

      {/* Bottom part */}
      <div className="w-full watclandingdivbuttom">
        <div className="w-full flex justify-between h-[100vh] text-white">
          {/* Left side */}
          <div className="hidden md:block w-[920px]">
            <div className="flex flex-col">
              <h2 className="text-[28px] font-bold pl-8 pt-5 md:mb-[50px]">
                Recommended for you
              </h2>
              <RecommendedSlider />

              <h2 className="text-[28px] font-bold pl-8 pt-5 md:mb-[50px]">
                Trending
              </h2>
              <Treanding />
            </div>
          </div>

          {/* Right side */}
          <div className=" w-full  md:w-[500px] relatedAnime h-full overflow-y-scroll">
            <h2 className="text-[28px] font-bold pl-8 pt-5 md:mb-5">
              Related Anime
            </h2>
            <div className="w-full flex flex-wrap gap-5 justify-center h-full">
              {AllData.length > 0 ? (
                AllData.map((item) => (
                  <div
                    key={item.id}
                    className="md:w-[200px] md:h-[280px] w-[100px] h-[140px]"
                  >
                    <div className="w-full h-full overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                      <img
                        src={item.short_image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <p className="text-white text-lg font-semibold mb-2">
                          {item.name}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-400 font-medium">
                            {item.imdb_rating}
                          </span>
                          <div
                            onClick={() => handlePlayClick(item)}
                            className="bg-white text-black rounded-full p-2 hover:bg-[#ff0202] hover:text-white transition-colors duration-300 cursor-pointer"
                          >
                            <FaPlay className="text-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">No related anime available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLandingPage;
