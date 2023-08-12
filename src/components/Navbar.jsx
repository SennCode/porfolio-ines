import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [navText, setNavText] = useState("inés.");

  const handleMouseEnter = () => {
    setNavText(navText === "inés." ? "inés.projects" : "inés.");
  };

  const handleMouseLeave = () => {
    setNavText("inés.");
  };

  return (
    <>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#000000] py-2 text-white hover:text-red-600 focus:text-white dark:bg-dark lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-auto">
            {!isMobile ? (
              <Link
                to="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-2xl"
              >
                {navText}
              </Link>
            ) : (
              <Link to="/">{navText}</Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
