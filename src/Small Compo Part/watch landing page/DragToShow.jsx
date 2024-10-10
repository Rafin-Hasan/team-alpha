import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AllData from "../Small Compo Part/ApiData/JsonData";

const Drag = () => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const latestReleaseRef = useRef(null);
  const navigate = useNavigate();

  const displayedLatestRelease = AllData.slice(0, 10); // You can adjust this to the number of latest releases to display

  const startDrag = (e, ref) => {
    setDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(ref.current.scrollLeft);
  };

  const stopDrag = () => {
    setDragging(false);
  };

  const dragMove = (e, ref) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.5; // The multiplier controls the drag speed
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {/* Latest Release Section */}
      <div className="w-full py-10">
        <div className="flex justify-between items-center">
          <h2 className="text-[40px] text-red-600 pb-3 font-bold pl-8">
            LATEST RELEASE
          </h2>
          <p className="pr-8">DRAG TO NEXT &rarr;</p>
        </div>
        <div
          ref={latestReleaseRef}
          className="flex gap-6 px-8 overflow-x-auto scrollbar-hide cursor-grab"
          onMouseDown={(e) => startDrag(e, latestReleaseRef)}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onMouseMove={(e) => dragMove(e, latestReleaseRef)}
          onTouchStart={(e) => startDrag(e, latestReleaseRef)}
          onTouchEnd={stopDrag}
          onTouchMove={(e) => dragMove(e, latestReleaseRef)}
        >
          {displayedLatestRelease.map((data) => (
            <div
              key={data.id}
              className="relative w-[240px] h-[360px] shrink-0 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={data.short_image}
                alt={data.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white text-black rounded-full p-2 hover:bg-[#ff0202] hover:text-white transition-colors duration-300 cursor-pointer">
                    <FaPlay className="text-lg" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    {data.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-4 px-6 py-2 bg-[#ff0202] text-white rounded-md"
          onClick={() => navigate("/allvideos")}
        >
          Watch More
        </button>
      </div>
    </>
  );
};

export default Drag;
