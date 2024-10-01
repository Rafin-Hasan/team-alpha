import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";


const ForgetPage = () => {


  // for icon
  
  
  // for vilidetion
  const [email         , upemail]         = useState('')
  const [emailError    , upemailError]    = useState('')




  // vilidtion 
  const inputEventEmail = (e)=>{
    upemail(e.target.value)
    upemailError('')
  }
 

  // for from 
  const forSumit =(e)=>{
   e.preventDefault()
   if(!email){
    upemailError('Please enter your email')
   } else{
    console.log('ok hoise')
   }



  }
  return (
    <>

      <div className="loginmain w-full md:h-[100vh] ">
        <div className=" w-full md:pt-10 md:h-[100vh] LoginBlur flex  justify-center ">

          <div className="warper flex justify-center rounded-md">
           <div className="">
           <h1 className='text-[20px] md:mt-10 md:mb-20 font-medium '>Enter your email to get mail to reset passowrd </h1>
            <div className="inputBox">
              <form onSubmit={forSumit}  className=' form flex flex-col gap-5 '>

                <div className=" w-[350px] h-[50]  ">
                <input onChange={inputEventEmail} className=' input w-[350px]   h-[50px] pl-5 bg-[#575757] rounded-md' type="email" placeholder='Enter email' />
                </div>

                <p className='text-[12px] text-[#f00]'> {emailError} </p>
              
                <div className="button mt-10">
                  <button className='w-[350px] h-[50px] bg-[#ff2525] rounded-md flex justify-center items-center'> Sing In</button>
                </div>
              
                
              </form>
             
              <div className="donthave w-full flex items-center justify-center mt-10">
                <Link className='flex items-center justify-center text-center text-[20px] ' to='/login'><IoMdArrowRoundBack/><span className='text-[20px] pl-3'>  Sing in page</span> </Link>
              </div>
            </div>
           </div>
          </div>

        </div>
      </div>

      
    </>
  )
}

export default ForgetPage
