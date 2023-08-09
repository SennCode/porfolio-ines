import { useState } from "react";
import "../App.css";

const Home = () => {
  const texts = ["Hello", "I am", "Inés"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handlePageClick = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
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
               texts[currentTextIndex] === "Hello" ? "translate-x-8" : null
             }`}
          >
            {texts[currentTextIndex] === "Hello" ? "Hello." : "About"}
          </h1>

          <h1
            className={`text ${
              texts[currentTextIndex] === "I am" ? "translate-x-8" : null
            } font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
             transition-transform transform-gpu`}
          >
            {texts[currentTextIndex] === "I am" ? "Work" : "I am"}
          </h1>

          <h1
            className={`text ${
              texts[currentTextIndex] === "Inés" ? "translate-x-8" : null
            } font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl
             transition-transform transform-gpu`}
          >
            {texts[currentTextIndex] === "Inés" ? "Contact" : "Inés"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
