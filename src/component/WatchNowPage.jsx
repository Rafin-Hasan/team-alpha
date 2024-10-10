import React from "react";
import BottomPart from "../Small Compo Part/Watch now page/BottomPart";
import RightSide from "../Small Compo Part/Watch now page/RightSide";
import LeftSide from "../Small Compo Part/Watch now page/LeftSide";
import TopText from "../Small Compo Part/Watch now page/TopText";
import { useSelector } from "react-redux";
import VideoCollection from "./VideoCollection";

const WatchNowPage = () => {
  // Get data from Redux store
  const alpha = useSelector((state) => state.info.clone);

  // Debugging: check if alpha is populated correctly
 

  return (
    <div className="w-full h-[100vh] bg-black overflow-y-scroll overflow-x-hidden whatchnow">
      <div className="pl-5 pr-5 w-full h-full topPart">
        {/* Top Text */}
        <TopText />

        {/* Main content */}
        <div className="w-full flex h-full justify-between">
          {/* Left side */}
          <LeftSide />

          {/* Right side - hidden on smaller screens */}
          <div className="hidden md:block">
            <RightSide />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full boottom">
        <BottomPart />
      </div>

      {/* Video Collection Section */}
      <div className="w-full">
        <VideoCollection />
      </div>
    </div>
  );
};

export default WatchNowPage;
