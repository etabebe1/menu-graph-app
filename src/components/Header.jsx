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

  const [isOpen, setIsOpen] = useState(true);
  const [listStyle, setListStyle] = useState(menuItems[0].name);

  const handleNavigation = (path, name) => {
    // alert(`Navigating to: ${name}`);
    setIsOpen(!isOpen);
    setListStyle(name);

    // FIXME: for application that routes
    // history.push(path);
  };

  return (
    <header>
      <nav className="z-50" aria-label="Main navigation">
        <div
          className={`slider-component sm:hidden block w-full sm:w-full  h-[100vh] sm:h-[64px]  bg-colors-digital-gray/25 absolute backdrop-blur-sm ${
            isOpen ? " left-0" : "-left-full"
          } z-50 transition-all duration-300`}
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
          aria-labelledby="menuLabel"
        >
          <div className="layer  pt-4 w-[70vw] bg-colors-digital-gray h-full">
            <button
              className="close-btn absolute  bg-colors-matrix-green p-1 rounded-md hover:border border-colors-quantum-silver right-5 text-2xl text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Close menu"
            >
              <span>
                <MdOutlineCloseFullscreen />
              </span>
            </button>
            <h2 id="menuLabel" className="hidden">
              Site Navigation
            </h2>
            <ul className="link-container w-full h-full p-3 flex flex-col gap-8 pt-14 text-white font-semibold text-lg">
              {menuItems.map((list, index) => (
                <Link to={"#"} key={index + 1}>
                  <li
                    className={`shadow-lg ${
                      list.name === listStyle &&
                      "text-colors-matrix-green border-b-2 border-r-2 rounded-md border-colors-matrix-green transition-all duration-500"
                    } p-1`}
                    onClick={() => handleNavigation(list.path, list.name)}
                  >
                    {list.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* mobile version header */}
        <div className="flex gap-4 shadow-lg sm:shadow-none sm:backdrop-blur-none fixed w-full h-16 bg-colors-digital-gray border-b-1 z-30 backdrop-blur-md">
          <div className="max-w-4xl w-full flex flex-row sm:flex-row justify-between px-3 items-center mx-auto">
            <button
              className=" text-white text-2xl bg-colors-matrix-green rounded-md p-1 sm:hidden hover:border border-colors-quantum-silver"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
            >
              <RiMenu3Line />
            </button>

            <Link to={"/"}>
              <div className="logo-image-container flex gap-2 items-center my-2 group">
                <img
                  src={"/assets/EPhone.jpg"}
                  alt="EPhone App Logo"
                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl group-hover:scale-105 transition-all"
                />
                <h1 className="text-colors-matrix-green text-xl font-semibold group-hover:text-colors-matrix-green/90 transition-all">
                  EPhone App
                </h1>
              </div>
            </Link>

            {/* nav link container */}
            <div className="link-container hidden sm:block">
              <ul className="space-x-2 md:space-x-5 lg:space-x-10 flex justify-center items-center">
                {menuItems.map((list, index) => {
                  return (
                    <Link to={`${list.path}`} key={index}>
                      <button
                        className="text-lg"
                        aria-label={`Navigate to ${list.name}`}
                      >
                        <span
                          className={`flex flex-row items-center text-sm md:text-base hover:text-white/50 transition-all duration-300`}
                        >
                          <p
                            className={`text-xl text-white shadow-md  px-3 py-0.5 ${
                              list.name === listStyle &&
                              "text-colors-matrix-green border-b-2 border-r-2 rounded-lg  border-colors-matrix-green transition-all duration-500"
                            } `}
                            onClick={() =>
                              handleNavigation(list.path, list.name)
                            }
                          >
                            {list.name}
                          </p>
                        </span>
                      </button>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
