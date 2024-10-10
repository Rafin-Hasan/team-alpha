import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AllData from "../Small Compo Part/ApiData/JsonData";
import { Bounce, toast } from "react-toastify";

const Traial = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(AllData); // Initially show all data
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();


//   navigate

const nextBro = useNavigate()

const gogoBro =()=>{
    nextBro('/login')
    toast.warn('Please Login First', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}


  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (filter) {
      // If a genre is selected, filter the data based on both the genre and the search query
      const filteredResults = AllData.filter(
        (item) =>
          item.genres.includes(filter) &&
          item.name.toLowerCase().includes(value)
      );
      setResults(filteredResults);
    } else {
      // If no genre is selected, filter the data based only on the search query
      const filteredResults = AllData.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      setResults(filteredResults);
    }
  };

  // Handle genre filtering
  const handleFilterChange = (e) => {
    const genre = e.target.value;
    setFilter(genre);

    if (genre) {
      // Filter data based on the selected genre
      const filteredResults = AllData.filter(
        (item) =>
          item.genres.includes(genre) && item.name.toLowerCase().includes(query)
      );
      setResults(filteredResults);
    } else {
      // If no genre is selected, show all results based on the current search query
      const filteredResults = AllData.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setResults(filteredResults);
    }
  };

  // Handle navigation to details page
 

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4 py-12">
      <div className="w-full mx-auto flex flex-col items-center space-y-8">
        <h1 className="text-5xl font-bold text-purple-400 mb-8">Alpha</h1>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Search Input */}
          <div className="relative w-full sm:w-2/3">
            <input
              type="text"
              className="bg-gray-800 p-4 rounded-full w-full text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-600 transition-shadow duration-200 ease-in-out"
              placeholder="Enter anime name..."
              value={query}
              onChange={handleSearch}
            />
            <FaSearch
              className="absolute right-4 top-4 text-purple-400"
              size={22}
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select
              className="bg-gray-800 p-4 rounded-full  text-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-600 transition-shadow duration-200 ease-in-out"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="">All Genres</option>
              {/* Generate unique genres from your data */}
              {Array.from(new Set(AllData.flatMap((item) => item.genres))).map(
                (genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                )
              )}
            </select>
            <FaFilter
              className="absolute right-4 top-4 text-purple-400"
              size={22}
            />
          </div>
        </div>

        <div className="w-full h-[433px] searchScroll overflow-y-scroll max-w-4xl">
          {/* Render Results */}
          {results.length > 0 ? (
            <ul
            onClick={gogoBro}
             className="space-y-6">
              {results.map((item) => (
                <li
                  key={item.id}
                  className="bg-gray-800  rounded-3xl shadow-lg flex items-center space-x-6 hover:bg-gray-700 transition-colors duration-200 ease-in-out cursor-pointer"
                   // Navigate to details page on click
                >
                  <img
                    src={item.short_image}
                    alt={item.name}
                    className="h-32 w-32 rounded-2xl object-cover"
                  />
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="text-gray-400">
                      <span className="font-semibold">IMDB Rating:</span>{" "}
                      {item.imdb_rating}
                    </p>
                    <p className="text-gray-400">
                      <span className="font-semibold">Released:</span>{" "}
                      {item.released_date}
                    </p>
                    <p className="text-gray-400">
                      <span className="font-semibold">Genres:</span>{" "}
                      {item.genres.join(", ")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : query.length > 0 ? (
            <p className="text-gray-500 text-center">No results found</p>
          ) : (
            <p className="text-gray-500 text-center">
              Start typing to search for anime...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Traial;
