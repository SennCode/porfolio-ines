import { useState } from "react";
import "../App.css";
import { isMobile } from "react-device-detect";

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
    if(!isMobile){
      setTextInes(textInes === "Inés" ? "Contact" : "Inés")
    }
  }

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
    if(!isMobile) {
      setTextInes("Inés")
    }
  }

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
      className="bg-white bg-[url(./assets/images/IMG_9EB17B5FFAD7-1.jpeg)] bg-no-repeat bg-right min-h-screen bg-auto md:bg-contain flex items-center"
      onClick={handleClickText}
    >
      <div className="mx-6 justify-start py-10">
        <div className="px-8">
        <h1
  className={`text-red-colour font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
    transition-transform transform-gpu ${textHello === "Hello." && !isMobile ? "-translate-x-8" : ""}`}
  onMouseEnter={handleMouseEnterHello}
  onMouseLeave={handleMouseLeaveHello}
>
  {textHello}
</h1>


          <h1
            className={`font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
            transition-transform transform-gpu ${textIam === "I am" && !isMobile ? "-translate-x-8" : ""}`}
            onMouseEnter={handleMouseEnterIam}
            onMouseLeave={handleMouseLeaveIam}
          >
            {textIam}
          </h1>

          <h1
            className={`font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
            transition-transform transform-gpu ${textInes === "Inés" && !isMobile ? "-translate-x-8" : ""}`}
             onMouseEnter={handleMouseEnterInes}
             onMouseLeave={handleMOuseLeaveInes}
          >
            {textInes}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
