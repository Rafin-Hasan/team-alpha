import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navber/Navber";

const LayoutOne = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutOne;
