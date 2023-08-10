import { useState } from "react";
import "../Home.css";
import { isMobile } from "react-device-detect";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [textHello, setTextHello] = useState("Hello.");
  const [textIam, setTextIam] = useState("I am");
  const [textInes, setTextInes] = useState("Inés");
  const [mobileClicked, setMobileClicked] = useState(false)

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

  const handleMOuseLeaveInes = () => {
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
      setMobileClicked(true)
    }
  };

  return (
    <div
      className="bg-white bg-[url(./assets/images/prueba-bg2.jpeg)] bg-no-repeat bg-right min-h-screen bg-auto md:bg-cover flex justify-start items-center kenburns-bottom"
      onClick={handleClickText}
    >
      <div className="mx-20 py-10">
        <div
          className={`${
            (!isMobile||mobileClicked)
              ? "transition ease-in-out delay-950 hover:translate-x-10 hover:duration-1500"
              : ""
          } px-8`}
        >
          <NavLink to="/about">
            <h1
              className="animate-fade-up animate-once animate-duration-1500 animate-delay-10000 animate-ease-in text-red-colour font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
    transition-transform transform-gpu "
              onMouseEnter={handleMouseEnterHello}
              onMouseLeave={handleMouseLeaveHello}
            >
              {textHello}
            </h1>
          </NavLink>
        </div>

        <div
          className={`${!isMobile}transition ease-in-out delay-950 hover:translate-x-10 hover:duration-1500 px-8`}
        >
          <NavLink to="work">
            <h1
              className="animate-fade-up animate-once animate-duration-25000 animate-delay-500 animate-ease-in font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
            transition-transform transform-gpu"
              onMouseEnter={handleMouseEnterIam}
              onMouseLeave={handleMouseLeaveIam}
            >
              {textIam}
            </h1>
          </NavLink>
        </div>

        <div
          className={`${!isMobile}transition ease-in-out delay-950 hover:translate-x-10 hover:duration-1500 px-8`}
        >
          <NavLink to="/contact">
            <h1
              className="animate-fade-up animate-once animate-duration-40000 animate-delay-1000 animate-ease-in font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
            transition-transform transform-gpu"
              onMouseEnter={handleMouseEnterInes}
              onMouseLeave={handleMOuseLeaveInes}
            >
              {textInes}
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
