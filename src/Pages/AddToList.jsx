import React from 'react'
import WatchList from './Add list Component/WatchList'
import Onhold from './Add list Component/OnHold'


const AddToList = () => {
  return (
    <>

    <div className="w-full md:h-[100vh] overflow-y-scroll bg-black ">
        <h3 className=' md:text-5xl text-white mt-3 mb-3 font-poppins'> Watching </h3>
        <div className="w-[1400px]">
            <WatchList/>
        </div>
        <h3 className=' md:text-5xl text-white mt-3 mb-3 font-poppins'> Hold-On </h3>

        <div className="w-[1400px]">
            <Onhold/>
        </div>

       



    </div>
      
    </>
  )
}

export default AddToList
