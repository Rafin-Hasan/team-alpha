import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";

const Onhold = () => {
  // Retrieve saved data from Redux store
  const savedata = useSelector((state) => state.saveuserinfohold.userSavedhold);
  
  // Local state to handle the slider data
  const [data, setData] = useState(savedata || []);
  
  const sliderRef = useRef(null);

  const getSlidesToShow = (dataLength) => {
    if (dataLength === 1) return 1;
    return Math.min(dataLength, 4); // Limits to 4 slides max
  };

  const settings = {
    dots: false,
    infinite: data.length > 1,
    speed: 500,
    slidesToShow: getSlidesToShow(data.length),
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: getSlidesToShow(data.length),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(getSlidesToShow(data.length), 2),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    setData(savedata);
  }, [savedata , data]);

  return (
    <div className="relative w-full h-full bg-black">
      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="w-full h-full">
          {data.map((collection) =>
            collection.products.map((product) => (
              <div key={product.id} className="p-2 relative group">
                <div className="w-full h-0 pb-[56.25%] relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    src={product?.large_image}
                    alt={product?.name}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                    <div className="text-left transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                      <h2 className="text-white text-2xl mb-2">{product?.name}</h2>
                      <button className="bg-red-600 hover:bg-[#ff353542] active:scale-95 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform">
                        <FaPlay className="mr-2" /> Play
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gray-800 group-hover:bg-red-600 transition-all duration-500"></div>
              </div>
            ))
          )}
        </Slider>

        {data.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#5d5d5d85] text-white p-2 rounded-full hover:bg-[#ff353542]"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#5d5d5d85] text-white p-2 rounded-full hover:bg-[#ff353542]"
            >
              <FaChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Onhold;
