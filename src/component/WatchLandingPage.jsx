import React from "react";
import { BsFillBadgeCcFill } from "react-icons/bs";
import { FaMicrophone, FaPlay } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import AllData from "../Small Compo Part/ApiData/JsonData"; // Import the anime data

const WatchLandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access the anime data passed via navigate
  const { anime } = location.state || {};

  // If no anime data is passed (e.g., page accessed directly)
  if (!anime) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1>No anime selected. Please go back to the search page.</h1>
        <button
          className="ml-4 px-4 py-2 bg-purple-600 rounded-lg"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  // Handle play button click in recommendations
  const handlePlayClick = (recommendedAnime) => {
    navigate("/watchlanding", { state: { anime: recommendedAnime } });
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <div className="w-full h-full flex p-10">
        {/* Left Section - Poster and Details */}
        <div className="w-3/4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-6">
            <img
              className="w-full h-auto rounded-lg"
              src={anime.large_image}
              alt={anime.name}
            />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <p className="flex gap-2 font-medium">
              <span>Home</span>
              <span>•</span>
              <span>TV</span>
              <span>•</span>
              <span className="font-extralight text-[15px]">{anime.name}</span>
            </p>

            <h3 className="font-bold text-[40px] mt-5 mb-5">{anime.name}</h3>

            <div className="flex gap-2 font-medium mb-10">
              <div className="flex gap-[2px] text-black">
                <div className="bg-white flex items-center justify-center w-[55px] h-[25px] rounded">
                  <p>{anime.pg}</p>
                </div>
                <div className="bg-white flex items-center justify-center w-[25px] h-[25px] rounded">
                  HD
                </div>
                <div className="bg-white flex items-center justify-center w-[45px] h-[25px] rounded">
                  <p className="flex items-center gap-2">
                    <BsFillBadgeCcFill className="text-[12px]" /> {anime.cc}
                  </p>
                </div>
                <div className="bg-white flex items-center justify-center w-[45px] h-[25px] rounded">
                  <p className="flex items-center gap-2">
                    <FaMicrophone className="text-[12px]" /> {anime.episodes}
                  </p>
                </div>
              </div>
              <div className="">
                <p>•</p>
              </div>
              <div className="">
                <p>TV</p>
              </div>
              <div className="">
                <p>•</p>
              </div>
              <div className="">
                <p>{anime.time_length}</p>
              </div>
            </div>

            <p className="w-full text-[14px] font-extralight mt-6 mb-6">
              {anime.story}
            </p>

            <div className="flex gap-3 text-black">
              <button className="w-[125px] h-[44px] rounded-full bg-white hover:bg-[#ff0202] hover:text-white transition-all hover:scale-105 active:scale-95">
                Watch Now
              </button>
              <button className="w-[125px] h-[44px] rounded-full bg-white hover:bg-[#ff0202] hover:text-white transition-all hover:scale-105 active:scale-95">
                Add to List
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Additional Anime Details */}
        <div className="w-1/4 h-full pl-6 pt-8">
          <h4 className="text-2xl font-bold mb-6">Anime Details</h4>
          <div className="text-sm text-gray-300">
            <p>
              <strong>Japanese:</strong> {anime.japanese_title || "N/A"}
            </p>
            <p>
              <strong>Synonyms:</strong> {anime.synonyms || "N/A"}
            </p>
            <p>
              <strong>Aired:</strong> {anime.released_date}
            </p>
            <p>
              <strong>Premiered:</strong> {anime.premiered || "N/A"}
            </p>
            <p>
              <strong>Duration:</strong> {anime.time_length}
            </p>
            <p>
              <strong>Status:</strong> {anime.status || "Ongoing"}
            </p>
            <p>
              <strong>MAL Score:</strong> {anime.mal_score || "N/A"}
            </p>
            <p>
              <strong>Studios:</strong> {anime.studio || "N/A"}
            </p>
            <p>
              <strong>Producers:</strong> {anime.producer || "N/A"}
            </p>
            <p>
              <strong>Genres:</strong> {anime.genres.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Modern Recommendations Section */}
      <div className="w-full px-10 mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended For You</h2>
        <div className="flex flex-wrap gap-5">
          {AllData.map((recommendedAnime) => (
            <div
              key={recommendedAnime.id}
              className="relative w-[200px] h-[300px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={recommendedAnime.short_image}
                alt={recommendedAnime.name}
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-lg font-semibold mb-2">
                  {recommendedAnime.name}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-400 font-medium">
                    {recommendedAnime.imdb_rating}
                  </span>
                  <div
                    className="bg-white text-black rounded-full p-2 hover:bg-[#ff0202] hover:text-white transition-colors duration-300 cursor-pointer"
                    onClick={() => handlePlayClick(recommendedAnime)}
                  >
                    <FaPlay className="text-lg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchLandingPage;
