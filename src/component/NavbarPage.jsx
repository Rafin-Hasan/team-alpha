import React, { useState } from "react";
import { BiMoviePlay } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoSearch, IoTv } from "react-icons/io5";
import { TfiControlShuffle } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";

const NavbarPage = () => {
  // State to manage dropdown 
  const [one, tow] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    tow(!one);
  };

  return (
    <>
      <div className="navbar w-fit md:w-[110px] h-[100vh] pl-3 pr-2 md:pl-0 md:pr-0 bg-black ">

      <div className="md:hidden flex justify-center mt-10">
          <button onClick={toggleDropdown} className="text-white">
            <FaBars className="text-[28px]" />
          </button>
        </div>


        {/* Logo Section */}
       
       <div className="hidden md:block">
       <div className="w-full h-0 flex justify-center pt-5 md:pt-10">
          <Link to="/">
            <img className="w-[50px] h-[60px]" src="photos/LOgo.png" alt="log" />
          </Link>
        </div>
       </div>

        {/* Dropdown Toggle for small screens */}
        

        {/* Navbar Items */}
        <ul
          className={`${
            one ? " flex" : " hidden"
          } md:flex flex-col transition-all items-center md:translate-y-0 justify-center mt-10 md:mt-[150px] md:gap-16 gap-10 `}
        >
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-[#fff] text-[#6e2ed5]"
                  : "text-white hover:text-[#6e2ed5]"
              }
            >
              <IoSearch className="text-[28px]" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-[#fff] text-[#6e2ed5]"
                  : "text-white hover:text-[#6e2ed5]"
              }
            >
              <GoHomeFill className="text-[28px]" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allvideos"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-[#fff] text-[#6e2ed5]"
                  : "text-white hover:text-[#6e2ed5]"
              }
            >
              <BiMoviePlay className="text-[28px]" />
            </NavLink>
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default NavbarPage;
