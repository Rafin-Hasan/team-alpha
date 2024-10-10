import React, { useState } from 'react'
import { BsFillBadgeCcFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AlphateamData } from '../../Slices/SliceData';
import { SaveuserDdata } from '../../Slices/Slice user/userSavedData';
import { Bounce, toast } from 'react-toastify';

const RightSideWatch = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()



  const alpha = useSelector((state) => state.info.clone)

  const [one , tow ] = useState(false)
  const changtoShow = ()=>{
    tow(!one)
  }




  const buttonSaveToWatch = (product) => {
    // Generate a unique collection name using a timestamp or UUID (you can replace this with a UUID if needed)
    const uniqueCollectionName = `WatchList_${Date.now()}`; // Example: "WatchList_1632861736172"
    
    // Retrieve existing collections from localStorage or initialize to an empty array if none exists
    let collections = JSON.parse(localStorage.getItem('collections')) || [];
  
    // Create the new collection object with the unique name and product data
    const newCollection = {
      id: uniqueCollectionName,  // Unique ID for the collection
      products: [product]  // Store the product in an array in this collection
    };
  
    // Add the new collection to the collections array
    collections.push(newCollection);
  
    // Store the updated collections array back into localStorage
    localStorage.setItem('collections', JSON.stringify(collections));
  
    // Dispatch the updated state to Redux
    dispatch(SaveuserDdata(collections));
  
    // Show a toast notification
    toast.success('Anime saved to WatchList', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };



  // ===================================================================hold on


  const buttonSaveholdOn = (product) => {
    // Generate a unique collection name using a timestamp or UUID (you can replace this with a UUID if needed)
    const uniqueCollectionName = `WatchList_${Date.now()}`; // Example: "WatchList_1632861736172"
    
    // Retrieve existing collections from localStorage or initialize to an empty array if none exists
    let collections = JSON.parse(localStorage.getItem('HoldOn')) || [];
  
    // Create the new collection object with the unique name and product data
    const newCollection = {
      id: uniqueCollectionName,  // Unique ID for the collection
      products: [product]  // Store the product in an array in this collection
    };
  
    // Add the new collection to the collections array
    collections.push(newCollection);
  
    // Store the updated collections array back into localStorage
    localStorage.setItem('HoldOn', JSON.stringify(collections));
  
    // Dispatch the updated state to Redux
    dispatch(SaveuserDdata(collections));
  
    // Show a toast notification
    toast.success('Anime saved On hold', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };



  // ==========================================================================================


  













  const Nahid = (sir)=>{
   
    dispatch(AlphateamData(sir))

     localStorage.setItem("AlphaTeam" , JSON.stringify(sir));

     navigate('/watchnow')
  };

  return (
    <>
    <div className=" w-[200px] md:w-[700px] ">
              <p className="flex text-[12px] md:text-[15px] gap-1 font-medium">
                <span>Home</span>
                <span>•</span>
                <span>TV</span>
                <span>•</span>
                <span className="font-normal text-[12px] md:text-[15px]">SIRESNAME</span>
              </p>

              <h3 className="rightsideName font-bold text-[18px] md:text-[40px] mt-5 mb-5">
                {alpha?.name}
              </h3>

              <div className="flex gap-1 md:gap-2 items-center text-[9px] md:text-[15px] font-medium mb-2 md:mb-10 ">
                <div className="flex gap-[1px]  md:gap-[2px] text-black">
                  <div className="divsmall1  md:w-[55px] w-[30px] h-[16px] md:h-[25px] bg-white flex justify-center items-center ">
                    <p>PG {alpha?.pg}</p>{" "}
                  </div>
                  <div className="divsmall h-[16px] md:w-[25px] md:h-[25px] bg-white flex justify-center items-center">
                    {" "}
                    HD{" "}
                  </div>
                  <div className="divsmall md:w-[45px] w-[25px] h-[16px] md:h-[25px] bg-white flex justify-center items-center">
                    {" "}
                    <p className="flex items-center justify-center gap-1">
                      {" "}
                      <BsFillBadgeCcFill className=" md:text-[12px]" /> 25{" "}
                    </p>{" "}
                  </div>
                  <div className="divsmall  md:w-[45px] w-[25px] h-[16px] md:h-[25px] bg-white flex justify-center items-center">
                    {" "}
                    <p className="flex justify-center items-center gap-1">
                      {" "}
                      <FaMicrophone className=" text-[6px] md:text-[12px] " />{" "}
                      25{" "}
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
                  <p> { alpha?.time_length }</p>{" "}
                </div>
              </div>
              <div className="flex md:mt-0 mt-5 items-center md:gap-3 gap-2 text-black">
                <button onClick={()=> Nahid(alpha)} className=" w-[60px] mt-[3px] md:mt-0 md:w-[125px] h-[22px] text-[9px] md:text-[16px]  md:h-[44px] rounded-full bg-white hover:bg-[#ff0202] hover:text-white transition-all hover:scale-105 active:scale-95">
                  Watch Now
                </button>

                <div className="relative push">
                  <button onClick={changtoShow} className="w-[60px] md:w-[125px] h-[22px] text-[9px] md:text-[16px]  md:h-[44px] buttoFordiv  rounded-full bg-white focus:bg-[#ff0202] focus:text-white transition-all hover:scale-105 active:scale-95">
                    Add to list
                  </button>

                  {/* on foucas */}
                  {one && <div className="butonDiv absolute top-8 md:top-[50px] md:text-[15px] text-[10px] left-0 w-[100px] md:w-[160px] rounded-xl bg-[#ffffffd1] z-10 flex flex-col gap-2 pt-4">
                    
                    
                    
                    <button onClick={()=> buttonSaveToWatch(alpha)} className="w-full text-start hover:bg-[#fff] py-1 hover:rounded-xl pl-3 font-medium">
                      <p>Watching</p>
                    </button>
                    
                    
                    <button
                    onClick={()=> buttonSaveholdOn(alpha)} 
                     className="w-full text-start hover:bg-[#fff] py-1 rounded-xl pl-3 font-medium">
                      <p>Hold-on</p>
                    </button>
                   
                  

                    {/* 🤣⁉️🤣 */}


                    
                    {/* 🤣⁉️🤣 */}
                    
                  </div>}


                </div>
              </div>
              <p className=" w-[250px] md:w-[550px] text-[9px] md:text-[13px] font-extralight mt-10 mb-20 ">
                {alpha?.story}
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
      
    </>
  )
}

export default RightSideWatch
