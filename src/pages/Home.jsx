import { useState } from "react";
import "../App.css";
import { isMobile } from "react-device-detect";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [textHello, setTextHello] = useState("Hello.");
  const [textIam, setTextIam] = useState("I am");
  const [textInes, setTextInes] = useState("Inés");

  // onMouseEnter

  const handleMouseEnterHello = () => {
    if (!isMobile) {
      setTextHello(textHello === "Hello." ? "About" : "Hello.");
    }
  };

  const handleMouseEnterIam = () => {
    if (!isMobile) {
      setTextIam(textIam === "I am" ? "Work" : "I am");
    }
  };

  const handleMouseEnterInes = () => {
    if (!isMobile) {
      setTextInes(textInes === "Inés" ? "Contact" : "Inés");
    }
  };

  // onMouseLeave

  const handleMouseLeaveHello = () => {
    if (!isMobile) {
      setTextHello("Hello.");
    }
  };

  const handleMouseLeaveIam = () => {
    if (!isMobile) {
      setTextIam("I am");
    }
  };

  const handleMouseLeaveInes = () => {
    if (!isMobile) {
      setTextInes("Inés");
    }
  };

  // handleClickText

  const handleClickText = () => {
    if (isMobile) {
      setTextHello(textHello === "Hello." ? "About" : "Hello.");
      setTextIam(textIam === "I am" ? "Work" : "I am");
      setTextInes(textInes === "Inés" ? "Contact" : "Inés");
    }
  };

  return (
    <div
      className="bg-black bg-no-repeat bg-right min-h-screen bg-auto md:bg-cover flex justify-start items-center kenburns-bottom"
      onClick={handleClickText}
    >
      <div className="mx-4 md:mx-20 lg:mx-24 py-10">
        {/* PRIMER H1 */}
        <div
          className={`${
            !isMobile
              ? "transition ease-in-out delay-950 hover:translate-x-10 hover:duration-1500"
              : ""
          } px-8`}
        >
          {isMobile ? (
            textHello === "About" ? (
              <NavLink to="/about">
                <h1
                  className="animate-fade-up animate-once animate-duration-300 animate-delay-100 animate-ease-in text-red-colour font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
        transition-transform transform-gpu "
                  onMouseEnter={handleMouseEnterHello}
                  onMouseLeave={handleMouseLeaveHello}
                >
                  {textHello}
                </h1>
              </NavLink>
            ) : (
              <h1
                className="animate-fade-up animate-once animate-duration-300 animate-delay-100 animate-ease-in text-red-colour font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
      transition-transform transform-gpu "
                onMouseEnter={handleMouseEnterHello}
                onMouseLeave={handleMouseLeaveHello}
              >
                {textHello}
              </h1>
            )
          ) : (
            <NavLink to="/about">
              <h1
                className="animate-fade-up animate-once animate-duration-300 animate-delay-100 animate-ease-in text-red-colour font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
      transition-transform transform-gpu "
                onMouseEnter={handleMouseEnterHello}
                onMouseLeave={handleMouseLeaveHello}
              >
                {textHello}
              </h1>
            </NavLink>
          )}

          {/* SEGUNDO H1 */}
        </div>

        <div
          className={`${
            !isMobile
              ? "transition ease-in-out delay-950 hover:translate-x-10 hover:duration-1500"
              : ""
          } px-8`}
        >
          {isMobile ? (
            textIam === "Work" ? (
              <NavLink to="/work">
                <h1
                  className="text-white animate-fade-up animate-once animate-duration-300 animate-delay-300 animate-ease-in font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
        transition-transform transform-gpu "
                  onMouseEnter={handleMouseEnterIam}
                  onMouseLeave={handleMouseLeaveIam}
                >
                  {textIam}
                </h1>
              </NavLink>
            ) : (
              <h1
                className=" text-white animate-fade-up animate-once animate-duration-300 animate-delay-300 animate-ease-in font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
      transition-transform transform-gpu "
                onMouseEnter={handleMouseEnterIam}
                onMouseLeave={handleMouseLeaveIam}
              >
                {textIam}
              </h1>
            )
          ) : (
            <NavLink to="/work">
              <h1
                className="text-white animate-fade-up animate-once animate-duration-300 animate-delay-300 animate-ease-in font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
      transition-transform transform-gpu "
                onMouseEnter={handleMouseEnterIam}
                onMouseLeave={handleMouseLeaveIam}
              >
                {textIam}
              </h1>
            </NavLink>
          )}
        </div>
        {/* TERCER H1 */}
        <div
          className={`${
            !isMobile
              ? "transition ease-in-out delay-950 hover:translate-x-10 hover:duration-1500"
              : ""
          } px-8`}
        >
          {isMobile ? (
            textInes === "Contact" ? (
              <NavLink to="/contact">
                <h1
                  className="text-white animate-fade-up animate-once animate-duration-300 animate-delay-500 animate-ease-in font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
        transition-transform transform-gpu "
                  onMouseEnter={handleMouseEnterInes}
                  onMouseLeave={handleMouseLeaveInes}
                >
                  {textInes}
                </h1>
              </NavLink>
            ) : (
              <h1
                className="text-white animate-fade-up animate-once animate-duration-300 animate-delay-500 animate-ease-in font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
      transition-transform transform-gpu "
                onMouseEnter={handleMouseEnterInes}
                onMouseLeave={handleMouseLeaveInes}
              >
                {textInes}
              </h1>
            )
          ) : (
            <NavLink to="/contact">
              <h1
                className="text-white  animate-fade-up animate-once animate-duration-300 animate-delay-500 animate-ease-in font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
      transition-transform transform-gpu "
                onMouseEnter={handleMouseEnterInes}
                onMouseLeave={handleMouseLeaveInes}
              >
                {textInes}
              </h1>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;