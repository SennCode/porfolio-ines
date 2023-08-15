import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [navText, setNavText] = useState("inés.");
  const location = useLocation(); //Lo usamos para enrutar el navbar

  const handleMouseEnter = () => {
    setNavText(navText === "inés." ? "inés.projects" : "inés.");
  };

  const handleMouseLeave = () => {
    setNavText("inés.");
  };

  // getNavLink Lo usamos para enrutar el navbar
  const getNavLink = () => {
    if (location.pathname.startsWith("/projects/collection")) {
      return "/projects";
    }
    return "/";
  };

  return (
    <>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#000000] py-2 text-white hover:text-red-600 focus:text-white dark:bg-dark lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-auto">
            {!isMobile ? (
              <Link
                to={getNavLink()}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-2xl"
              >
                {navText}
              </Link>
            ) : (
              <Link to={getNavLink()}>{navText}</Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
