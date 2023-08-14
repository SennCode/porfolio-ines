import Navbar from "../components/Navbar";
import foto1 from "../assets/images/foto1.webp";


const Projects = () => {
  return (
    <div className="bg-black min-h-screen justify-center">
      <div className="pt-20 mx-10 sm:mx-20 lg:mx-40 xl:mx-80 2xl:mx-96">
        <Navbar />
      </div>
      <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl pt-10 mx-10 sm:mx-20 lg:mx-30 xl:mx-60 2xl:mx-96 slide-in-blurred-bottom">
        Proyects
      </h1>
      <div className="text-white mt-25 pb-40 mx-10 sm:mx-20 lg:mx-30 xl:mx-60 2xl:mx-96 slide-in-blurred-bottom-h3">
        <h3 className="text-red-colour text-3xl sm:text-4xl mt-10 mb-10 ">
          Collections
        </h3>
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-auto">
              <img
                src={foto1}
                alt="coleccion_1"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="#">
                <span className="absolute inset-0"></span>
                Collection 1
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">
              Name
            </p>
          </div>
          <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-auto">
              <img
                src={foto1}
                alt="collecion 1"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="#">
                <span className="absolute inset-0"></span>
                Collection 2
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">
              Name
            </p>
          </div>
          <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-auto">
              <img
                src={foto1}
                alt="Coleccion3"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="#">
                <span className="absolute inset-0"></span>
                Collection 3
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">
              Name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
