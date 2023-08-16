import { Lightbox, initTE } from "tw-elements";
initTE({ Lightbox });
import { useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import foto1 from "../assets/images/foto1.webp";
import foto2 from "../assets/images/foto2.jpg";
import foto3 from "../assets/images/foto3.jpg";

const Collection1 = () => {
  //useEffect inicializa los componentes de tw-elements solo una vez de este modo podemos 
    // usar el lightbox, sin useEffect al recargar no se abren las imágenes
  useEffect(() => {
    initTE({ Lightbox });
  }, []);
  return (
    <div className="bg-black min-h-screen pb-20">
      <div className="pt-20 mx-10 sm:mx-20 lg:mx-40 xl:mx-80 2xl:mx-96">
        <Navbar />
      </div>
      <div>
        <h1 className="text-white text-4xl text-center sm:text-6xl lg:text-7xl p-10 mx-10 sm:mx-20 xl:mx-60 2xl:mx-96 slide-in-blurred-bottom">
          Collection 1
        </h1>
      </div>

      <div
        data-te-lightbox-init
        className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0 slide-in-blurred-bottom-h3"
      >
        <div className="container mx-auto py-2 px-10 lg:pt-20">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2 ">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center hover:animate-pulse animate-infinite animate-duration-[2000ms] animate-delay-[3000ms] animate-ease-in-out animate-normal rounded-sm"
                  src={foto2}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center hover:animate-pulse animate-infinite animate-duration-[2000ms] animate-delay-[3000ms] animate-ease-in-out animate-normal rounded-sm"
                  src={foto3}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center hover:animate-pulse animate-infinite animate-duration-[2000ms] animate-delay-[3000ms] animate-ease-in-out animate-normal rounded-sm"
                  src={foto1}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center hover:animate-pulse animate-infinite animate-duration-[2000ms] animate-delay-[3000ms] animate-ease-in-out animate-normal rounded-sm"
                  src={foto1}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center hover:animate-pulse animate-infinite animate-duration-[2000ms] animate-delay-[3000ms] animate-ease-in-out animate-normal rounded-sm"
                  src={foto3}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center hover:animate-pulse animate-infinite animate-duration-[2000ms] animate-delay-[3000ms] animate-ease-in-out animate-normal rounded-sm"
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
