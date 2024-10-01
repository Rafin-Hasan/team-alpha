import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Bounce, toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [one, tow] = useState(false);
  const [onec, towc] = useState(false);

  const [email, upemail] = useState("");
  const [name, upname] = useState("");
  const [nameerorr, upnameerorr] = useState("");
  const [emailError, upemailError] = useState("");
  const [password, uppassword] = useState("");
  const [passwordError, uppasswordError] = useState("");

  const [confirmpassword, upconfirmpassword] = useState("");
  const [confirmpasswordError, upconfirmpasswordError] = useState("");

  const trinary = () => {
    tow(!one);
  };

  const trinaryc = () => {
    towc(!onec);
  };

  const inputEventEmail = (e) => {
    upemail(e.target.value);
    upemailError("");
  };
  const inputEventPass = (e) => {
    uppassword(e.target.value);
    uppasswordError("");
  };
  const inputname = (e) => {
    upname(e.target.value);
    upnameerorr("");
  };
  const inputconfirm = (e) => {
    upconfirmpassword(e.target.value);
    upconfirmpasswordError("");
  };

  const forSumit = (e) => {
    e.preventDefault();
    if (!name) {
      upnameerorr("Please enter your name");
    } else if (!email) {
      upemailError("please enter your email");
    } else if (!password) {
      uppasswordError("please enter your password");
    } else if (!confirmpassword) {
      upconfirmpasswordError("please confirme your password");
    } else {
      if (password == confirmpassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            sendEmailVerification(auth.currentUser).then(() => {});
            toast.success("Verification mail sent", {
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
            navigate("/login");
          })
          .catch((error) => {
            const errorCode = error.code;
            if (errorCode == "auth/email-already-in-use") {
              toast.warn("You already have an account", {
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
            if (errorCode == "auth/weak-password") {
              toast.warn("Weak password!", {
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
      } else {
        toast.warn("Both passwords do not match", {
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
    }
  };

  return (
    <>
      <div className="loginmain w-full min-h-screen flex items-center justify-center bg-cover bg-center">
        <div className="w-full LoginBlur max-w-md p-6 md:pt-10 bg-black bg-opacity-70 rounded-md shadow-md">
          <h1 className="text-[35px] font-bold md:mt-2 md:mb-5 text-white mb-2 text-center">
            Sign Up
          </h1>
          <form onSubmit={forSumit} className="flex flex-col gap-5">
            <div className="w-full md:h-[50px] h-[40px]">
              <input
                onChange={inputname}
                className="input w-full h-full pl-5 bg-[#575757] text-white rounded-md"
                type="text"
                placeholder="Enter name"
              />
              <p className="text-[12px] text-[#f00] mt-1">{nameerorr}</p>
            </div>
            <div className="w-full md:h-[50px] h-[40px]">
              <input
                onChange={inputEventEmail}
                className="input w-full h-full pl-5 bg-[#575757] text-white rounded-md"
                type="email"
                placeholder="Enter email"
              />
              <p className="text-[12px] text-[#f00] mt-1">{emailError}</p>
            </div>
            <div className="w-full relative md:h-[50px] h-[40px]">
              <input
                onChange={inputEventPass}
                className="input w-full h-full pl-5 bg-[#575757] text-white rounded-md"
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
            <div className="w-full relative md:h-[50px] h-[40px]">
              <input
                onChange={inputconfirm}
                className="input w-full h-full pl-5 bg-[#575757] text-white rounded-md"
                type={onec ? "text" : "password"}
                placeholder="Confirm Password"
              />
              {onec ? (
                <FaEye
                  onClick={trinaryc}
                  className="absolute md:top-[16px] md:right-[16px] top-[13px] right-[14px] text-[#9e9e9e] cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={trinaryc}
                  className="absolute md:top-[16px] md:right-[16px] top-[13px] right-[14px] text-[#9e9e9e] cursor-pointer"
                />
              )}
              <p className="text-[12px] text-[#f00] mt-1">
                {confirmpasswordError}
              </p>
            </div>
            <div className="w-full mt-5">
              <button className="w-full md:h-[50px] h-[40px] bg-[#ff2525] rounded-md text-white font-bold flex justify-center items-center">
                Sign Up
              </button>
            </div>
          </form>
          <div className="w-full mt-5 flex justify-between items-center">
            <div className="text-white">Need help?</div>
          </div>
          <div className="w-full flex justify-center mt-10">
            <Link to="/login" className="text-blue-500">
              Already have an account?{" "}
              <span className="md:text-[19px] text-[18px] font-bold hover:text-white pl-3">
                Sign In
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
