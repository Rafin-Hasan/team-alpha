import React from 'react'
import { useSelector } from 'react-redux'

const Details = () => {
  const alpha = useSelector((state) => state.info.clone)
  
  return (
    <>
      <div className="hidden md:block">
        <div className="div1 w-[426px] h-full pl-10 pt-[110px]">
          <div className="w-full flex flex-col gap-3 mb-10 text-[16px] font-medium text-white">
            <p>
              Japanese :{" "}
              <span className="font-extralight">僕のヒーローアカデミア 第7期</span>
            </p>
            <p>
              Synonyms :{" "}
              <span className="font-extralight">My Hero Academia 7</span>
            </p>
            <p>
              Aired :{" "}
              <span className="font-extralight">May 4, 2024 to ?</span>
            </p>
            <p>
              Premiered :{" "}
              <span className="font-extralight">Spring 2024</span>
            </p>
            <p>
              Duration : <span className="font-extralight">24m</span>
            </p>
            <p>
              Status :{" "}
              <span className="font-extralight">Currently Airing</span>
            </p>
            <p>
              MAL Score :<span className="font-extralight">?</span>
            </p>
          </div>
          
          <div className="w-[300px] bg-[#dcdcdc64] h-[1px]"></div>

          <div className="genres text-white font-medium flex flex-wrap gap-5 mb-5 mt-5">
            Genres:{" "}
            { alpha.genres.map((genre, op) => (
              <span key={op} className="flex w-fit items-center font-extralight justify-center px-[6px] border rounded-full">
                {genre }
              </span>
            ))}
          </div>

          <div className="w-[300px] bg-[#dcdcdc64] h-[1px]"></div>

          <div className="w-full text-white font-medium flex flex-col gap-2 mt-5">
            <p>
              Studios : <span className="font-extralight"> {alpha?.studio} </span>
            </p>
            <p>
              Producers : <span className="font-extralight">{alpha?.producer} </span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
