import Navbar from "../components/Navbar";
import foto1 from "../assets/images/foto1.webp";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-black min-h-screen justify-center">
      <div className="pt-20 mx-10 sm:mx-20 lg:mx-40 xl:mx-80 2xl:mx-96">
        <Navbar />
      </div>
      <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl pt-10 mx-10 sm:mx-20 lg:mx-30 2xl:mx-96 slide-in-blurred-bottom">
        Proyects
      </h1>

      <div className="text-white mt-25 pb-40 mx-10 sm:mx-20 lg:mx-30  2xl:mx-96">
        <h3 className="text-red-colour text-3xl sm:text-4xl mt-10 mb-10 slide-in-blurred-bottom-h3 ">
          Collections
        </h3>
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 slide-in-blurred-bottom-h3">
          <div className="group relative">
            <NavLink to="/projects/collection1">
              <div className="relative h-80 w-full overflow-hidden rounded-sm bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-auto">
                <img
                  src={foto1}
                  alt="coleccion_1"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <h3 className="mt-6 text-sm text-gray-500">Collection 1</h3>
              <p className="text-base font-semibold text-gray-900">Name</p>
            </NavLink>
          </div>
          <div className="group relative">
            <NavLink to="/projects/collection2">
              <div className="relative h-80 w-full overflow-hidden rounded-sm bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-auto">
                <img
                  src={foto1}
                  alt="collecion 1"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                
                  Collection 1
                
              </h3>
              <p className="text-base font-semibold text-gray-900">Name</p>
            </NavLink>
          </div>
          <div className="group relative">
            <NavLink to="/projects/collection3">
              <div className="relative h-80 w-full overflow-hidden rounded-sm bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-auto">
                <img
                  src={foto1}
                  alt="Coleccion3"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                
                  Collection 3
               
              </h3>
              <p className="text-base font-semibold text-gray-900">Name</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
