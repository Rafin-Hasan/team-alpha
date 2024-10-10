import React, { useEffect } from 'react'
import Navbar from '../Pages/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LayoutOne = () => {

  const userdataFromSlice = useSelector((state)=>state.userinfo.user)

  const goBack = useNavigate()

  useEffect(()=>{
    if(userdataFromSlice == null){

      goBack('/3333333333nahidsirbest')
    }
  },[])


  return (
    <>

    <div className="flex">
        <Navbar/>
        <Outlet/>
    </div>
      
    </>
  )
}

export default LayoutOne
