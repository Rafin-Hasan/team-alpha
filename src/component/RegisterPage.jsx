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
import { BeatLoader } from "react-spinners";

const RegisterPage = () => {
  // only after sing up is done
  const navigate = useNavigate();

  // firebase variabls
  const auth = getAuth();

  // for icon
  const [one, tow] = useState(false);
  const [onec, towc] = useState(false);

  // for vilidetion
  const [email, upemail] = useState("");
  const [name, upname] = useState("");
  const [nameerorr, upnameerorr] = useState("");
  const [emailError, upemailError] = useState("");
  const [password, uppassword] = useState("");
  const [passwordError, uppasswordError] = useState("");

  const [confirmpassword, upconfirmpassword] = useState("");
  const [confirmpasswordError, upconfirmpasswordError] = useState("");


  const [oneL, towL] = useState(false);

  const trinary = () => {
    tow(!one);
  };

  const trinaryc = () => {
    towc(!onec);
  };

  // vilidtion
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
  // for from
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

        towL(true)
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            towL(false)
            // ...
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
            });

            // sing up succes tostify
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

            towL(false)

            // ..
            // for alredy in use accaount tostify
            if (errorCode == "auth/email-already-in-use") {
              toast.warn("You already have account", {
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
            // for weak password tostify

            if (errorCode == "auth/weak-password") {
              toast.warn("weak password!", {
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
        // incorrect password tostify

        toast.warn("Both password are not match", {
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
      <div className="loginmain w-full h-[100vh] ">
        <div className=" w-full md:pt-10 h-[100vh] LoginBlur flex  justify-center ">
          <div className="warper flex justify-center rounded-md">
            <div className="flex flex-col items-center">
              <h1 className=" text-[25px] md:text-[35px] mt-3 md:mt-2 mb-5 font-semibold md:font-medium ">
                Sing up
              </h1>
              <div className="inputBox">
                <form
                  onSubmit={forSumit}
                  className=" form flex items-center flex-col gap-5 "
                >
                  <div className=" w-[300px] md:w-[350px] h-[50]  ">
                    <input
                      onChange={inputname}
                      className=" input w-[300px] md:w-[350px] h-[50px] pl-5 bg-[#575757] rounded-md"
                      type="text"
                      placeholder="Enter name"
                    />
                  </div>

                  <p className="text-[12px] text-[#f00]"> {nameerorr} </p>
                  <div className=" w-[300px] md:w-[350px] h-[50]  ">
                    <input
                      onChange={inputEventEmail}
                      className=" input w-[300px] md:w-[350px]   h-[50px] pl-5 bg-[#575757] rounded-md"
                      type="email"
                      placeholder="Enter email"
                    />
                  </div>

                  <p className="text-[12px] text-[#f00]"> {emailError} </p>

                  <div className="md:w-[350px] w-[300px] relative h-[50]">
                    <input
                      onChange={inputEventPass}
                      className=" input w-[300px] md:w-[350px] h-[50px]  pl-5 bg-[#575757] rounded-md "
                      type={one ? "text" : "password"}
                      placeholder="Password"
                    />
                    {one ? (
                      <FaEye
                        onClick={trinary}
                        className=" absolute top-[16px] right-[16px] text-[#9e9e9e] "
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={trinary}
                        className=" absolute top-[16px] right-[16px] text-[#9e9e9e] "
                      />
                    )}
                  </div>

                  <p className="text-[12px] text-[#f00] "> {passwordError} </p>

                  <div className=" w-[300px] md:w-[350px] relative h-[50]">
                    <input
                      onChange={inputconfirm}
                      className=" input w-[300px] md:w-[350px] h-[50px]  pl-5 bg-[#575757] rounded-md "
                      type={onec ? "text" : "password"}
                      placeholder="Password"
                    />
                    {onec ? (
                      <FaEye
                        onClick={trinaryc}
                        className=" absolute top-[16px] right-[16px] text-[#9e9e9e] "
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={trinaryc}
                        className=" absolute top-[16px] right-[16px] text-[#9e9e9e] "
                      />
                    )}
                  </div>

                  <p className="text-[12px] text-[#f00] ">
                    {" "}
                    {confirmpasswordError}{" "}
                  </p>
                    {
                      oneL?<div className="button mt-5">
                    <div className=" w-[300px] md:mb-0 mb-2 md:w-[350px] h-[50px] bg-[#ff2525] rounded-md flex justify-center items-center">
                      {" "}
                      <BeatLoader />
                    </div>
                  </div>
                  :
                  <div className="button mt-5">
                    <button className=" w-[300px] md:mb-0 mb-2 md:w-[350px] h-[50px] bg-[#ff2525] rounded-md flex justify-center items-center">
                      {" "}
                      Sing up
                    </button>
                  </div>
                    }
                  

                  
                </form>
                <div className="rememberHelp w-full md:mt-5 flex justify-between ">
                  <div className=" flex items-center"></div>
                  <div className="">Need help ?</div>
                </div>
                <div className="donthave w-full flex justify-center mt-10">
                  <Link to="/login">
                    Already have an account?{" "}
                    <span className="text-[20px] pl-3">Sing In</span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
