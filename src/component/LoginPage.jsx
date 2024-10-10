import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userDdata } from '../Slices/Slice user/Sliceuser';
import { BeatLoader } from 'react-spinners';

const LoginPage = () => {


  // save user data
  const dispatch = useDispatch()
  const next     =  useNavigate()

  const [loader, setLoader] = useState(false);




  // firebase variabals
  const auth = getAuth();


  // naviget state
  const naviget = useNavigate()


  // for icon
  const [one           , tow]             = useState(false)
  
  // for vilidetion
  const [email         , upemail]         = useState('')
  const [emailError    , upemailError]    = useState('')
  const [password      , uppassword]      = useState('')
  const [passwordError , uppasswordError] = useState('')

  const trinary = ()=>{
    tow(!one)
  }

  // vilidtion 
  const inputEventEmail = (e)=>{
    upemail(e.target.value)
    upemailError('')
  }
  const inputEventPass = (e)=>{
    uppassword(e.target.value)
    uppasswordError('')
  }

  // for from 
  const forSumit =(e)=>{
   e.preventDefault()
   if(!email){
    upemailError('Please enter your email')
   }
   else if(!password){
    uppasswordError('please enter your passowrd')
   } else{
   
    setLoader(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setLoader(false)
    const user = userCredential.user;
    // ...

    dispatch(userDdata(user))
    localStorage.setItem('userLogdin' , JSON.stringify(user))



      
      if(user.emailVerified == false){

        // not virifide tostify
        toast.warn('Account not verified via email', {
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
      } else{

        // succes and navigate tostify
        toast.success('enjoy', {
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
         naviget('/')
      }

   
  })

  
  .catch((error) => {
    const errorCode = error.code;
    setLoader(false)
    
     if(errorCode == 'auth/invalid-credential'){

      // password incorrect tostify
      
      toast.warn('Something went wrong!', {
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
     }
  });

    
    
   }



  }
  return (
    <>

      <div className="loginmain w-full h-[100vh] ">
        <div className=" w-full md:pt-10 h-[100vh] LoginBlur flex  justify-center ">

          <div className="warper flex justify-center rounded-md">
           <div className=" flex flex-col items-center ">
           <h1 className=' text-[25px] md:text-[35px] mt-10 md:mb-20 font-semibold md:font-medium '>Sing In</h1>
            <div className="inputBox">
              <form onSubmit={forSumit}  className=' form flex items-center flex-col gap-5 '>

                <div className=" w-[300px] md:w-[350px] h-[50]  ">
                <input onChange={inputEventEmail} className=' input md:w-[350px] w-[300px] h-[50px] pl-5 bg-[#575757] rounded-md' type="email" placeholder='Enter email' />
                </div>

                <p className='text-[12px] text-[#f00]'> {emailError} </p>
              
               <div className=" w-[300px] md:w-[350px] relative h-[50]">
                <input onChange={inputEventPass} className=' input w-[300px] md:w-[350px] h-[50px]  pl-5 bg-[#575757] rounded-md ' type={one? "text" : "password"} placeholder='Password' />
                {one?<FaEye onClick={trinary} className=' absolute top-[16px] right-[16px] text-[#9e9e9e] '/>
                :
                <FaEyeSlash onClick={trinary} className=' absolute top-[16px] right-[16px] text-[#9e9e9e] '/>}
                </div>
              
                <p className='text-[12px] text-[#f00] '> {passwordError} </p>


                {
                  loader? <div className="button mt-10">
                  <button className=' w-[300px] md:mb-0 mb-5 md:w-[350px] h-[50px] bg-[#ff2525] rounded-md flex justify-center items-center'>  <BeatLoader /> </button>
                </div> :
                <div className="button mt-10">
                  <button className=' w-[300px] md:mb-0 mb-5 md:w-[350px] h-[50px] bg-[#ff2525] rounded-md flex justify-center items-center'> Sing In</button>
                </div>
                }

                

                

              </form>
              <div className="rememberHelp w-full md:mt-5 flex justify-between ">
                <div className=" flex items-center">
                <label className=' flex items-center gap-3'>
                {" "}
                <input type="checkbox" />
                Remember me{" "}
              </label>
                </div>
                <div className="">
                  <Link to='/forget'>Forget password ?</Link>
                </div>
              </div>
              <div className="donthave w-full flex justify-center mt-10">
                <Link to='/register'>Don't have an account? <span className='text-[20px] pl-3'>Sing Up</span> </Link>
              </div>
            </div>
           </div>
          </div>

        </div>
      </div>

      
    </>
  )
}

export default LoginPage
