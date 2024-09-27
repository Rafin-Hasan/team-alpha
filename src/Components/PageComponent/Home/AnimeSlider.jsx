import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimeSlider = ({ animeData, filter }) => {
  let filteredAnime = [];

  // Filter based on new or trending
  if (filter === "new") {
    // Use a simple heuristic to filter new releases
    filteredAnime = animeData.filter((anime) => anime.release_year > 2018);
  } else if (filter === "trending") {
    filteredAnime = animeData.filter((anime) => anime.trending === true);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className="px-8">
      {filteredAnime.map((anime) => (
        <div key={anime.id} className="px-2">
          <img
            src={anime.picture}
            alt={anime.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="mt-2 text-center text-sm">{anime.name}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default AnimeSlider;
