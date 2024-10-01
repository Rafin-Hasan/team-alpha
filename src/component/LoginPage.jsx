import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from "react-toastify";

const LoginPage = () => {
  const auth = getAuth();
  const naviget = useNavigate();

  const [one, tow] = useState(false);
  const [email, upemail] = useState("");
  const [emailError, upemailError] = useState("");
  const [password, uppassword] = useState("");
  const [passwordError, uppasswordError] = useState("");

  const trinary = () => {
    tow(!one);
  };

  const inputEventEmail = (e) => {
    upemail(e.target.value);
    upemailError("");
  };

  const inputEventPass = (e) => {
    uppassword(e.target.value);
    uppasswordError("");
  };

  const forSumit = (e) => {
    e.preventDefault();
    if (!email) {
      upemailError("Please enter your email");
    } else if (!password) {
      uppasswordError("Please enter your password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (!user.emailVerified) {
            toast.warn("Account not verified via email", {
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
          } else {
            toast.success("Welcome back!", {
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
            naviget("/");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/invalid-credential") {
            toast.warn("Something went wrong!", {
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
  };

  return (
    <>
      <div className="loginmain w-full min-h-screen flex items-center justify-center bg-cover bg-center">
        <div className="w-full LoginBlur max-w-md p-6 md:pt-10 bg-black bg-opacity-70 rounded-md shadow-md">
          <h1 className="text-[35px] font-bold mb-2 md:mt-10 text-white md:mb-8 text-center">
            Sing In
          </h1>
          <form onSubmit={forSumit} className="flex flex-col md:gap-5 gap-4">
            <div className="w-full md:h-[50px]">
              <input
                onChange={inputEventEmail}
                className="input w-full md:h-full h-[40px] pl-5 bg-[#575757] text-white rounded-md"
                type="email"
                placeholder="Enter email"
              />
              <p className="text-[12px] text-[#f00] mt-1">{emailError}</p>
            </div>

            <div className="w-full relative md:h-[50px] h-[40px]">
              <input
                onChange={inputEventPass}
                className="input w-full md:h-full h-[40px] pl-5 bg-[#575757] text-white rounded-md"
                type={one ? "text" : "password"}
                placeholder="Password"
              />
              {one ? (
                <FaEye
                  onClick={trinary}
                  className="absolute md:top-[16px] md:right-[16px] top-[13px] right-[14px] text-[#9e9e9e] cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={trinary}
                  className="absolute md:top-[16px] md:right-[16px] top-[13px] right-[14px] text-[#9e9e9e] cursor-pointer"
                />
              )}
              <p className="text-[12px] text-[#f00] mt-1">{passwordError}</p>
            </div>
            <Link to="/forget" className="text-blue-500">
              Forget password?
            </Link>

            <div className="w-full ">
              <button className="w-full md:h-[50px] h-[40px] bg-[#ff2525] rounded-md text-white font-bold flex justify-center items-center">
                Sign In
              </button>
            </div>
          </form>

          <div className="rememberHelp w-full mt-5 flex justify-between items-center">
            <label className="flex items-center text-white gap-3">
              <input type="checkbox" />
              Remember me
            </label>
          </div>

          <div className="donthave w-full flex justify-center mt-10">
            <Link to="/register" className="text-blue-500">
              Don't have an account?
              <span className="md:text-[19px] text-[18px] font-bold hover:text-white pl-3">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
