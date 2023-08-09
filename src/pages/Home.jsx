import { useState } from "react";
import "../App.css";

const Home = () => {
  const [hoveredText, setHoveredText] = useState(null);

  const handlePageClick = () => {
    if (hoveredText === "Hello") {
      setHoveredText("About");
    
    }
  };

  return (
    <div className="bg-white bg-[url(./assets/images/IMG_9EB17B5FFAD7-1.jpeg)] bg-no-repeat bg-right min-h-screen bg-auto md:bg-contain flex items-center" onClick={handlePageClick}>
      <div className="mx-6 justify-start py-10">
        <div className="px-8">
          <h1
            className={`text-red-colour font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl  
             transition-transform transform-gpu ${
               hoveredText === "Hello" ? "translate-x-8" : null
             }`}
            onMouseEnter={() => setHoveredText("Hello")}
            onMouseLeave={() => setHoveredText(null)}
          >
            {hoveredText === "Hello" ? "About" : "Hello."}
          </h1>

          <h1
            className={`text ${
              hoveredText === "I am" ? "translate-x-8" : null
            } font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 
             transition-transform transform-gpu`}
            onMouseEnter={() => setHoveredText("I am")}
            onMouseLeave={() => setHoveredText(null)}
          >
            {hoveredText === "I am" ? "Proyects" : "I am"}
          </h1>

          <h1
            className={`text ${
              hoveredText === "Inés" ? "translate-x-8" : null
            } font-bold text-7xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl
             transition-transform transform-gpu`}
            onMouseEnter={() => setHoveredText("Inés")}
            onMouseLeave={() => setHoveredText(null)}
          >
            {hoveredText === "Inés" ? "Contact" : "Inés"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
