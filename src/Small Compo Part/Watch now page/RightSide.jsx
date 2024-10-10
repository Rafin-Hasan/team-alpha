import React from 'react'
import { BsFillBadgeCcFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { useSelector } from 'react-redux';

const RightSide = () => {

  const alpha = useSelector((state) => state.info.clone)


  return (
    <>
    <div className="w-[350px] h-fit">
              <div className="text-white">
                <div className="div1 w-full ml-16 h-full">
                  <img
                    className="w-[100px] h-auto"
                    src={alpha?.short_image}
                    alt="poster"
                  />
                </div>

                <div className="ml-12">
                  <h3 className="font-bold text-wrap text-[30px] mt-5 mb-5">
                    {alpha?.name}
                  </h3>
                  <div className="flex gap-2 font-medium mb-10">
                    <div className="flex gap-[2px] text-black">
                      <div className="divsmall1 w-[55px] h-[25px] bg-white flex justify-center items-center">
                        <p>PG {alpha?.pg} </p>
                      </div>
                      <div className="divsmall w-[25px] h-[25px] bg-white flex justify-center items-center">
                        HD
                      </div>
                      <div className="divsmall w-[45px] h-[25px] bg-white flex justify-center items-center">
                        <p className="flex items-center justify-center gap-2">
                          <BsFillBadgeCcFill className="text-[12px]" /> 25
                        </p>
                      </div>
                      <div className="divsmall w-[45px] h-[25px] bg-white flex justify-center items-center">
                        <p className="flex justify-center items-center gap-2">
                          <FaMicrophone className="text-[12px]" /> 25
                        </p>
                      </div>
                    </div>
                    <div>
                      <p>•</p>
                    </div>
                    <div>
                      <p>TV</p>
                    </div>
                    <div>
                      <p>•</p>
                    </div>
                    <div>
                      <p> {alpha?.time_length} </p>
                    </div>
                  </div>

                  <p className="w-[300px] text-[13px] font-extralight mt-10">
                    {alpha?.story}
                  </p>
                </div>
              </div>
            </div>
      
    </>
  )
}

export default RightSide
