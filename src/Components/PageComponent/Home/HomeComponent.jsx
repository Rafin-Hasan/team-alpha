import React, { useEffect, useState } from "react";
import axios from "axios";
import FeaturedAnime from "./FeaturedAnime";
import AnimeSlider from "./AnimeSlider";

const HomeComponent = () => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.jsonbin.io/v3/b/66f632adacd3cb34a88ccf46",
          {
            headers: {
              "X-Master-Key": "$2b$10$YOUR_API_KEY",
            },
          }
        );
        setAnimeData(response.data.record);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {loading ? (
        <p className="text-center text-2xl">Loading...</p>
      ) : (
        <>
          {/* Featured Section */}
          <FeaturedAnime anime={animeData[0]} />

          {/* New This Week Slider */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold px-8">New this week</h2>
            <AnimeSlider animeData={animeData} filter="new" />
          </section>

          {/* Trending Now Slider */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold px-8">Trending Now</h2>
            <AnimeSlider animeData={animeData} filter="trending" />
          </section>
        </>
      )}
    </div>
  );
};

export default HomeComponent;
