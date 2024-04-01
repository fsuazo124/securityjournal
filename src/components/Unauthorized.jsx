import React from "react";

function Unauthorized() {
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-gray-800 font-dark font-extrabold mb-8 mt-20">
            ¡Oh no!
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            No tienes acceso a esta página, por favor inicia sesión
          </p>

          <a
            href="/"
            className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-700 hover:bg-gray-600"
          >
            Regresa a Inicio
          </a>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <img
            src="/src/assets/unauthorized.png"
            className=""
            alt="Unauthorized"
          />
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;
