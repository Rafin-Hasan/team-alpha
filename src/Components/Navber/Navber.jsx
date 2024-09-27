import React, { useState } from "react";
import {
  FiSearch,
  FiHome,
  FiFilm,
  FiMonitor,
  FiTrendingUp,
  FiPlus,
  FiShuffle,
} from "react-icons/fi";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const icons = [
    { name: "search", icon: <FiSearch /> },
    { name: "home", icon: <FiHome /> },
    { name: "film", icon: <FiFilm /> },
    { name: "monitor", icon: <FiMonitor /> },
    { name: "trending", icon: <FiTrendingUp /> },
    { name: "plus", icon: <FiPlus /> },
    { name: "shuffle", icon: <FiShuffle /> },
  ];

  return (
    <div className="h-screen w-16 bg-black flex flex-col items-center space-y-8 py-4">
      {icons.map(({ name, icon }) => (
        <div
          key={name}
          className={`flex flex-col items-center cursor-pointer group ${
            activeIcon === name ? "text-white" : "text-gray-500"
          }`}
          onClick={() => setActiveIcon(name)}
        >
          {icon}
          {activeIcon === name && (
            <span className="w-2 h-1 mt-2 bg-red-500"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
