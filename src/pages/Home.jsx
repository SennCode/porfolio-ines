import { useState } from "react";
import "../App.css";
import { isMobile } from "react-device-detect";

const Home = () => {
  const [textHello, setTextHello] = useState("Hello.");
  const [textIam, setTextIam] = useState("I am");
  const [textInes, setTextInes] = useState("Inés");

  const handleMouseEnterHello = () => {
    if (!isMobile) {
      setTextHello(textHello === "Hello." ? "About" : "Hello.");
    }
  };

  const handleMouseLeaveHello = () => {
    if (!isMobile) {
      setTextHello("Hello.");
    }
  };

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
            className="text-red-colour font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
            transition-transform transform-gpu"
            onMouseEnter={() => handleMouseEnterHello()}
            onMouseLeave={handleMouseLeaveHello}
          >
            {textHello}
          </h1>

          <h1
            className="font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
            transition-transform transform-gpu "
          >
            {textIam}
          </h1>

          <h1
            className="text font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl
             transition-transform transform-gpu"
          >
            {textInes}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
