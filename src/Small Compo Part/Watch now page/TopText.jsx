import React from 'react'
import { useSelector } from 'react-redux';

const TopText = () => {
  const alpha = useSelector((state) => state.info.clone);
  return (
    <>
    <div className="w-full flex items-center topPart h-[60px] text-white">
            <p className="flex gap-5 font-medium">
              <span>Home</span>
              <span>•</span>
              <span>TV</span>
              <span>•</span>
              <span className="font-extralight text-[15px]">{alpha?.name} </span>
            </p>
          </div>
      
    </>
  )
}

export default TopText
