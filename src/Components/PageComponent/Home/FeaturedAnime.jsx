import React from "react";

const FeaturedAnime = ({ anime }) => {
  if (!anime) return null;

  return (
    <div
      className="relative h-[70vh] flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url(${anime.picture})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-8">
        <h1 className="text-6xl font-extrabold">{anime.name}</h1>
        <p className="mt-4 text-lg">IMDb: {anime.rating || "8.8"}/10</p>
        <p className="text-lg text-red-400 mt-1">2B+ Streams</p>

        <div className="mt-6 flex space-x-4">
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg text-lg">
            Play
          </button>
          <button className="bg-gray-700 text-white py-2 px-6 rounded-lg text-lg">
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAnime;
