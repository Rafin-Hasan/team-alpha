import React from "react";
import { FaPlay } from "react-icons/fa";
import AllData from "../Small Compo Part/ApiData/JsonData";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AlphateamData } from "../Slices/SliceData";

const VideoCollection = () => {

  // custom variavals
  const dispatch = useDispatch()
  const navigate = useNavigate()



  // navigat user data
  const rafin = (shanto)=>{

    dispatch(AlphateamData(shanto))
    localStorage.setItem("AlphaTeam" , JSON.stringify(shanto));

    navigate('/watchlanding')

  }



  // Function to group anime by genres
  const groupByGenres = (data) => {
    const genres = {};
    data.forEach((anime) => {
      anime.genres.forEach((genre) => {
        if (!genres[genre]) {
          genres[genre] = []; // Initialize array for new genre
        }
        genres[genre].push(anime); // Add anime to the genre
      });
    });
    return genres; // Return the grouped genres
  };

  // Grouped anime data
  const groupedAnimes = groupByGenres(AllData);

  return (
    <>
      <div className="w-full h-[100vh] bg-black foroverflow overflow-y-scroll p-5">
        <div className="w-full flex flex-col md:gap-10">
          {/* Map through each genre and display the animes */}
          {Object.keys(groupedAnimes).map((genre) => (
            <div key={genre} className="w-full">
              <h2 className="text-white text-[20px] md:text-3xl font-bold mb-4">{genre}</h2>
              <div className="flex flex-wrap gap-10 md:gap-5 overflow-x-auto scrollbar-hide">
                {groupedAnimes[genre].map((anime) => (
                  <div
                    key={anime.id}
                    className="relative md:w-[200px] w-[130px] h-[170px] md:h-[300px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={anime.short_image}
                      alt={anime.name}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-white text-lg font-semibold mb-2">
                        {anime.name}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-400 font-medium">
                          {anime.imdb_rating}
                        </span>
                        <div onClick={()=> rafin(anime)} className="bg-white text-black rounded-full p-2 hover:bg-[#ff0202] hover:text-white transition-colors duration-300 cursor-pointer">
                          <FaPlay className="text-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCollection;
