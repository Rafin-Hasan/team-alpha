import React from 'react'
import { BsFillBadgeCcFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";

const RightSide = () => {
  return (
    <>
    <div className="w-[350px] h-fit">
              <div className="text-white">
                <div className="div1 w-full ml-16 h-full">
                  <img
                    className="w-[100px] h-auto"
                    src="photos/poster.jpg"
                    alt="poster"
                  />
                </div>

                <div className="ml-12">
                  <h3 className="font-bold text-wrap text-[30px] mt-5 mb-5">
                    THE SIRES NAME SOMTHING
                  </h3>
                  <div className="flex gap-2 font-medium mb-10">
                    <div className="flex gap-[2px] text-black">
                      <div className="divsmall1 w-[55px] h-[25px] bg-white flex justify-center items-center">
                        <p>PG-13</p>
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
                      <p>24m</p>
                    </div>
                  </div>

                  <p className="w-[300px] text-[13px] font-extralight mt-10">
                    With Tomura Shigaraki at its helm, the former Liberation
                    Army is now known as the Paranormal Liberation Front. This
                    organized criminal group poses an immense threat to the Hero
                    Association, not only because of its sheer size and
                    strength, but also the overpowering... + More AniWatch is
                    the best site to watch My Hero Academia Season 6 SUB online,
                    or you can even watch My Hero Academia Season 6 DUB in HD
                    quality. You can also find Bones anime on AniWatch website.
                  </p>
                </div>
              </div>
            </div>
      
    </>
  )
}

export default RightSide
