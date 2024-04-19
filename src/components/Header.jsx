import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Importing React Icon
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

function Header() {
  const menuItems = [
    {
      name: "Home",
      path: "/",
      description: "The landing page or main dashboard of the website.",
    },
    {
      name: "About",
      path: "/about",
      description: "Information about the company, its mission, and its team.",
    },
    {
      name: "Services",
      path: "/services",
      description: "Detailed overview of the services or products offered.",
    },
    {
      name: "Blog",
      path: "/blog",
      description:
        "Articles, updates, and news related to the business or industry.",
    },
    {
      name: "Contact",
      path: "/contact",
      description: "Contact form, location map, and other contact information.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [listStyle, setListStyle] = useState(menuItems[0].name);

  const handleNavigation = (path, name) => {
    // alert(`Navigating to: ${name}`);
    setIsOpen(!isOpen);
    setListStyle(name);

    // FIXME: for application that routes
    // history.push(path);
  };

  return (
    <header className="bg-colors-matrix-green text-white flex items-center justify-between px-4 h-[64px]">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
        React Menu Extraction & Visualization
      </h1>
      <p className="text-sm sm:text-md md:text-lg lg:text-2xl">
        Ermias Tamirat
      </p>
    </header>
  );
}

export default Header;
