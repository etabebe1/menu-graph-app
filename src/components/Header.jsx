import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Importing React Icon
import { MdOutlineCloseFullscreen } from "react-icons/md";

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
    alert(`Navigating to: ${name}`);
    setIsOpen(!isOpen);
    setListStyle(name);

    // FIXME: for application that routes
    // history.push(path);
  };

  return (
    <header>
      <nav className="z-50">
        <div
          className={`slider-component sm:hidden block w-[70vw] sm:w-full h-[100vh] sm:h-[64px] bg-colors-digital-gray-2 absolute ${
            isOpen ? " left-0" : "-left-full"
          } z-50 transition-all duration-300 pt-4`}
        >
          <button
            className="close-btn absolute  bg-colors-deep-space-blue p-1 rounded-md hover:border border-colors-quantum-silver right-5 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              <MdOutlineCloseFullscreen />
            </span>
          </button>

          <ul className="link-container w-full h-full p-3 flex flex-col gap-3 pt-14 text-white font-semibold text-lg">
            {menuItems.map((list, index) => (
              <Link to={"#"} key={index + 1}>
                <li
                  className={`${
                    list.name === listStyle &&
                    "bg-colors-quantum-silver/50 rounded-sm"
                  } p-1`}
                  onClick={() => handleNavigation(list.path, list.name)}
                >
                  {list.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
