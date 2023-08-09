
import { useState } from "react";
import "../App.css";

const Home = () => {
  const texts = ["Hello", "I am", "Inés"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handlePageClick = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handleMouseEnter = (index) => {
    setCurrentTextIndex(index);
  };

  const handleMouseLeave = () => {
    // Puedes dejar esta función vacía o manejar alguna lógica si es necesario
  };

  return (
    <div
      className="bg-white bg-[url(./assets/images/IMG_9EB17B5FFAD7-1.jpeg)] bg-no-repeat bg-right min-h-screen bg-auto md:bg-contain flex items-center"
      onClick={handlePageClick}
    >
      <div className="mx-6 justify-start py-10">
        <div className="px-8">
          <h1
            className={`text-red-colour font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
            transition-transform transform-gpu ${
              texts[currentTextIndex] === "Hello" ? "translate-x-8" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            {texts[currentTextIndex] === "Hello" ? "About" : "Hello."}
          </h1>

          <h1
            className={`font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
            transition-transform transform-gpu ${
              texts[currentTextIndex] === "I am" ? "translate-x-8" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            {texts[currentTextIndex] === "I am" ? "Work" : "I am"}
          </h1>

          <h1
            className={`text font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl
             transition-transform transform-gpu ${
               texts[currentTextIndex] === "Inés" ? "translate-x-8" : ""
             }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            {texts[currentTextIndex] === "Inés" ? "Contact" : "Inés"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
