import React from "react";
import { BsFillBadgeCcFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";

const WatchLandingPage = () => {
  return (
    <>
      <div className=" w-full watclanding h-[100vh] overflow-y-scroll ">
        <div className=" w-full h-full watclanding2 flex">
          <div className="div1 w-[1000px] flex h-full text-white pt-10 ">
            <div className="div1 w-[300px] p-10 h-full ">
              <img
                className="w-full h-auto"
                src="photos/poster.jpg"
                alt="poster"
              />
            </div>

            <div className=" w-[700px] ">
              <p className="flex gap-1 font-medium">
                <span>Home</span>
                <span>•</span>
                <span>TV</span>
                <span>•</span>
                <span className="font-extralight text-[15px]">SIRESNAME</span>
              </p>

              <h3 className="font-bold text-[40px] mt-5 mb-5">
                THE SIRES NAME SOMTHING
              </h3>

              <div className="flex gap-2 font-medium mb-10 ">
                <div className="flex gap-[2px] text-black">
                  <div className="divsmall1  w-[55px] h-[25px] bg-white flex justify-center items-center ">
                    <p>PG-13</p>{" "}
                  </div>
                  <div className="divsmall w-[25px] h-[25px] bg-white flex justify-center items-center">
                    {" "}
                    HD{" "}
                  </div>
                  <div className="divsmall w-[45px] h-[25px] bg-white flex justify-center items-center">
                    {" "}
                    <p className="flex items-center justify-center gap-2">
                      {" "}
                      <BsFillBadgeCcFill className="text-[12px]" /> 25{" "}
                    </p>{" "}
                  </div>
                  <div className="divsmall w-[45px] h-[25px] bg-white flex justify-center items-center">
                    {" "}
                    <p className="flex justify-center items-center gap-2">
                      {" "}
                      <FaMicrophone className="text-[12px] " /> 25{" "}
                    </p>{" "}
                  </div>
                </div>
                <div className="">
                  {" "}
                  <p>•</p>{" "}
                </div>
                <div className="">
                  {" "}
                  <p>TV</p>{" "}
                </div>
                <div className="">
                  {" "}
                  <p>•</p>{" "}
                </div>
                <div className="">
                  {" "}
                  <p>24m</p>{" "}
                </div>
              </div>
              <div className="flex gap-3 text-black">
                <button className="w-[125px] h-[44px] rounded-full bg-white hover:bg-[#ff0202] hover:text-white transition-all hover:scale-105 active:scale-95">
                  Watch Now
                </button>

                <div className="relative push">
                  <button className="w-[125px] buttoFordiv h-[44px] rounded-full bg-white focus:bg-[#ff0202] focus:text-white transition-all hover:scale-105 active:scale-95">
                    Add to list
                  </button>
                  <div className="butonDiv absolute top-[50px] left-0 w-[160px] rounded-xl bg-[#ffffffd1] z-10 flex flex-col gap-2 pt-4">
                    <button className="w-full text-start hover:bg-[#fff] py-1 pl-3 font-medium">
                      <p>Watching</p>
                    </button>
                    <button className="w-full text-start hover:bg-[#fff] py-1 pl-3 font-medium">
                      <p>Hold-on</p>
                    </button>
                    <button className="w-full text-start hover:bg-[#fff] py-1 pl-3 font-medium">
                      <p>Plan to watch</p>
                    </button>
                    <button className="w-full text-start hover:bg-[#fff] py-1 pl-3 font-medium">
                      <p>Dropped</p>
                    </button>
                    <button className="w-full text-start hover:bg-[#fff] py-1 pl-3 font-medium">
                      <p>Complete</p>
                    </button>
                  </div>
                </div>
              </div>
              <p className=" w-[550px] text-[13px] font-extralight mt-10 mb-20 ">
                With Tomura Shigaraki at its helm, the former Liberation Army is
                now known as the Paranormal Liberation Front. This organized
                criminal group poses an immense threat to the Hero Association,
                not only because of its sheer size and strength, but also the
                overpowerin...+ More AniWatch is the best site to watch My Hero
                Academia Season 6 SUB online, or you can even watch My Hero
                Academia Season 6 DUB in HD quality. You can also find Bones
                anime on AniWatch website.
              </p>

              <div className=" w-full flex gap-3 text-white font-medium items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    className="w-10 h-10 "
                    src="photos/share.gif"
                    alt="gif"
                  />
                </div>
                <div className="">
                  <p>Share Anime</p>
                  <p className="font-extralight">to your friends</p>
                </div>
              </div>
            </div>
          </div>

          <div className="div1  w-[426px] h-full pl-10 pt-[110px]">
            <div className="w-full flex flex-col gap-3 mb-10 text-[16px] font-medium text-white ">
              <p>
                Japanese :{" "}
                <span className="font-extralight">
                  僕のヒーローアカデミア 第7期
                </span>{" "}
              </p>
              <p>
                Synonyms :
                <span className="font-extralight"> My Hero Academia 7</span>
              </p>
              <p>
                Aired :{" "}
                <span className="font-extralight">May 4, 2024 to ?</span>{" "}
              </p>
              <p>
                Premiered : <span className="font-extralight">Spring 2024</span>{" "}
              </p>
              <p>
                Duration : <span className="font-extralight">24m</span>{" "}
              </p>
              <p>
                Status :{" "}
                <span className="font-extralight">Currently Airing</span>{" "}
              </p>
              <p>
                MAL Score :<span className="font-extralight">?</span>{" "}
              </p>
            </div>
            <div className="w-[300px] bg-[#dcdcdc64] h-[1px] "></div>
            <div className="genres text-white font-medium flex flex-wrap gap-5 mb-5 mt-5 ">
              Genres:
              <span className="flex w-fit items-center font-extralight justify-center px-[6px] border rounded-full">
                {" "}
                Action{" "}
              </span>
              <span className="flex w-fit items-center font-extralight justify-center px-[6px] border rounded-full">
                {" "}
                Adventuree{" "}
              </span>
              <span className="flex w-fit items-center font-extralight justify-center px-[6px] border rounded-full">
                {" "}
                School{" "}
              </span>
              <span className="flex w-fit items-center font-extralight justify-center px-[6px] border rounded-full">
                {" "}
                Shounen{" "}
              </span>
              <span className="flex w-fit items-center font-extralight justify-center px-[6px] border rounded-full">
                {" "}
                Super power{" "}
              </span>
              <span className="flex w-fit items-center font-extralight justify-center px-[6px] border rounded-full">
                {" "}
                More{" "}
              </span>
              <span className="flex w-fit items-center font-extralight justify-center px-[6px] border rounded-full">
                {" "}
                More{" "}
              </span>
              <span className="flex w-fit items-center font-extralight justify-center px-[6px] border rounded-full">
                {" "}
                More{" "}
              </span>
            </div>
            <div className="w-[300px] bg-[#dcdcdc64] h-[1px] "></div>
            <div className="w-full text-white font-medium flex flex-col gap-2 mt-5 ">
              <p>
                {" "}
                Studios : <span className="font-extralight">Bones</span>
              </p>
              <p>
                {" "}
                Producers : <span className="font-extralight"> Shueisha</span>
              </p>
            </div>
          </div>
        </div>

        {/* buttom part start */}
        <div className="w-full watclandingdivbuttom ">
          <div className="w-full flex justify-between h-full text-white ">

            {/* left side */}
            <div className="w-[920px] h-full">
              <h2 className="text-[28px] font-bold pl-8 pt-5">Recommended for you</h2>
              <div className=" w-full justify-center pt-12 flex flex-wrap gap-5 h-full">
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              </div>
            </div>




            {/* right side */}
            <div className="w-[500px] h-full ">

            <h2 className="text-[28px] font-bold pl-8 pt-5">Related Anime</h2>

              <div className="w-full justify-center pt-12 flex flex-wrap gap-5 h-full">
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              <div className="w-[200px] h-[300px] bg-red-700 "></div>
              </div>



            </div>
          
          
          
          
          </div>
        </div>
        {/* buttom part end */}
      </div>
    </>
  );
};

export default WatchLandingPage;
