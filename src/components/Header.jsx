import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Importing React Icon
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

function Header() {
  
  return (
    <header className="bg-colors-matrix-green text-white flex items-center justify-between px-4 h-[64px]">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
        React Menu Extraction & Visualization
      </h1>
      <p className="text-sm sm:text-md md:text-lg lg:text-2xl">
        Ermias Tamirat || Jeremiah
      </p>
    </header>
  );
}

export default Header;
