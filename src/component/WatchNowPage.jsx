import React from "react";
import BottomPart from "../Small Compo Part/Watch now page/BottomPart";
import RightSide from "../Small Compo Part/Watch now page/RightSide";
import LeftSide from "../Small Compo Part/Watch now page/LeftSide";
import TopText from "../Small Compo Part/Watch now page/TopText";

const WatchNowPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] overflow-y-scroll overflow-x-hidden whatchnow">
        
        
        <div className="pl-5 topPart w-full h-full pr-5 ">
          {/* top text */}
          <TopText />

          <div className="w-full flex h-full topPart justify-between ">
            {/* Left side */}
            <LeftSide />

            {/* Right side */}
            <RightSide />
          </div>

        </div>

        {/* bottom 100vh */}
        <div className="w-full h-[100vh] boottom ">
          <BottomPart />
        </div>

        
      </div>
    </>
  );
};

export default WatchNowPage;
