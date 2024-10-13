import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaStar,
  FaCalendarAlt,
  FaTags,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AllData from "../Small Compo Part/ApiData/JsonData";
import { AlphateamData } from "../Slices/SliceData";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(AllData);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (filter) {
      const filteredResults = AllData.filter(
        (item) =>
          item.genres &&
          item.genres.includes(filter) &&
          item.name.toLowerCase().includes(value)
      );
      setResults(filteredResults);
    } else {
      const filteredResults = AllData.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      setResults(filteredResults);
    }
  };

  const handleFilterChange = (e) => {
    const genre = e.target.value;
    setFilter(genre);

    if (genre) {
      const filteredResults = AllData.filter(
        (item) =>
          item.genres &&
          item.genres.includes(genre) &&
          item.name.toLowerCase().includes(query)
      );
      setResults(filteredResults);
    } else {
      const filteredResults = AllData.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setResults(filteredResults);
    }
  };

  const handleClick = (xo) => {
    dispatch(AlphateamData(xo));
    localStorage.setItem("AlphaTeam", JSON.stringify(xo));
    navigate("/watchlanding");
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex items-center justify-center px-6 py-12 relative">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-purple-600 opacity-30 h-96 w-96 rounded-full absolute top-0 left-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="bg-pink-500 opacity-40 h-64 w-64 rounded-full absolute bottom-10 right-20 transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="w-full max-w-6xl z-10 relative">
        <h1 className="text-5xl font-extrabold text-white tracking-wide mb-10">
          Discover Your Next Anime
        </h1>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
          {/* Search Input */}
          <div className="relative w-full sm:w-3/4 mb-4 sm:mb-0">
            <input
              type="text"
              className="bg-gray-800 px-6 py-4 rounded-full w-full text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-200"
              placeholder="Search anime titles..."
              value={query}
              onChange={handleSearch}
            />
            <FaSearch
              className="absolute right-6 top-4 text-purple-400"
              size={24}
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select
              className="bg-gray-800 px-6 py-4 rounded-full text-white text-lg focus:outline-none focus:ring-4 focus:ring-pink-500 transition duration-200"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="">All Genres</option>
              {Array.from(
                new Set(AllData.flatMap((item) => item.genres || []))
              ).map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            <FaFilter
              className="absolute right-6 top-4 text-pink-400"
              size={24}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-10">
          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.id}
                className="relative bg-gray-800 rounded-3xl p-6 flex items-center hover:bg-gray-700 transition duration-300 transform hover:scale-105 cursor-pointer shadow-lg"
                onClick={() => handleClick(item)}
              >
                <img
                  src={item.short_image}
                  alt={item.name}
                  className="h-40 w-40 rounded-3xl object-cover shadow-md"
                />
                <div className="flex flex-col ml-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <div className="flex items-center space-x-4 text-gray-400">
                    <span className="flex items-center text-lg">
                      <FaStar className="mr-2 text-yellow-400" />{" "}
                      {item.imdb_rating}
                    </span>
                    <span className="flex items-center text-lg">
                      <FaCalendarAlt className="mr-2 text-gray-400" />{" "}
                      {item.released_date}
                    </span>
                    <span className="flex items-center text-lg">
                      <FaTags className="mr-2 text-gray-400" />{" "}
                      {(item.genres || []).join(", ")}
                    </span>
                  </div>
                </div>

                {/* Subtle Shape Decoration */}
                <div className="absolute -right-10 -top-10 bg-purple-500 opacity-50 h-20 w-20 rounded-full"></div>
              </div>
            ))
          ) : query.length > 0 ? (
            <p className="text-gray-400 text-center">No anime found</p>
          ) : (
            <p className="text-gray-400 text-center">
              Search for your favorite anime
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
