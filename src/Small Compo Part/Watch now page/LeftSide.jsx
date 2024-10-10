import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import VideoPlayer from "../../Video Player/VideoPlayer";

const LeftSide = () => {
  const alpha = useSelector((state) => state.info.clone);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className=" md:w-[1030px] justify-between flex h-full overflow-y-scroll letside">
        {/* Left side */}
        <div className="w-[300px] hidden md:block h-fit bg-[#5e5e5e] overflow-y-scroll leftSideListofep">
          {/* List of episodes */}
          <div className="w-full h-[50px] bg-[#151515] flex gap-10 items-center pl-2 text-[#bdbdbd]">
            <p>List of episodes:</p>

            <div className="relative">
              <div className="text-[#a9a9a9] relative">
                <input
                  className="bg-transparent border text-[12px] rounded-[8px] pl-10 w-[140px] h-[30px]"
                  type="search"
                  placeholder="Number of Ep"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <IoSearch className="absolute top-[6px] left-[10px]" />
              </div>
            </div>
          </div>

          {/* Episode list div */}
          <div className="w-full h-[608px] bg-[#7b7b7b] overflow-y-scroll epsodeList mt-3 flex flex-wrap">
            {alpha.episodes &&
              Array(alpha.episodes)
                .fill()
                .map((_, index) => {
                  const isHighlighted =
                    searchTerm && parseInt(searchTerm) === index + 1;
                  return (
                    <div
                      key={index}
                      className={`w-full h-[50px] flex items-center justify-center text-white ${
                        isHighlighted
                          ? "bg-[#ffcc00]"
                          : "bg-[#151515] hover:bg-[#afafaf]"
                      }`}
                    >
                      Episode {index + 1}
                    </div>
                  );
                })}
          </div>
        </div>

        {/* Right side */}
        <div className=" md:w-[720px] h-fit overflow-y-scroll videoPart">
          {/* Video play place */}
          <div className="w-full h-fit">
            <div className=" items-center justify-center rounded-md overflow-hidden">
              <VideoPlayer />
            </div>
            <div className=" w-full flex flex-col items-center">
            <h4 className="text-white pt-20 font-poppins font-semibold"> Scroll for more content</h4>
            <img className=" rotate-180" src="https://www.thenightministry.org/images/down-arrow-animated.gif" alt="gide" />
            </div>

            {/* <img
              className="w-full h-full"
              src={alpha?.large_image}
              alt="video"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
