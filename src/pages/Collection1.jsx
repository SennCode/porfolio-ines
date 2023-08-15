import {
  Lightbox,
  initTE,
} from "tw-elements";

initTE({ Lightbox });
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import foto1 from "../assets/images/foto1.webp";
import foto2 from "../assets/images/foto2.jpg";
import foto3 from "../assets/images/foto3.jpg";


const Collection1 = () => {
  useEffect(() => {
    // Inicializa los componentes de tw-elements solo una vez
    initTE({ Lightbox });
  }, []);
  return (
    <div className="bg-black min-h-screen justify-center pb-20">
      <div className="pt-20 mx-10 sm:mx-20 lg:mx-40 xl:mx-80 2xl:mx-96">
        <Navbar />
      </div>
      <div>
        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl pt-10 mx-10 sm:mx-20 lg:mx-30 xl:mx-60 2xl:mx-96 slide-in-blurred-bottom">
          Collection 2
        </h1>
      </div>

      <div
        data-te-lightbox-init
        className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0 slide-in-blurred-bottom"
      >
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={foto2}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={foto3}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={foto1}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={foto1}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={foto3}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={foto2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection1;
