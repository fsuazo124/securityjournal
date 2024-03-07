import React from "react";

function Login() {
  return (
    <div>
      <header>
        <nav>
          <div className="">
            <div className="flex justify-between bg-slate-50 border-b border-b-green-800 h-20 px-10 shadow items-center">
              <div className="flex items-center space-x-8 px-3">
                <img
                  src="/src/assets/sj_icon.png"
                  alt="Icono SJ"
                  className="w-10 h-10"
                />
                <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
                  Grupo AyR
                </h1>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div class="h-screen flex">
        <div
          class="hidden lg:flex w-full lg:w-1/2 bg-green-800
          justify-around items-center"
        >
          <div
            class=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
          ></div>

          <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
            <img
              src="/src/assets/ayr_white.png"
              alt="Grupo AyR "
              className="w-28 mx-2"
            />
            <h1 class="text-white font-bold text-4xl font-sans">
              Seguridad y Validación
            </h1>
            <p class="text-white mt-1">
              Registro de novedades, accesos y entrada/salida de personal
            </p>
            <div class="flex justify-center lg:justify-start mt-6">
              <a
                href="#"
                class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
              >
                Comenzemos
              </a>
            </div>
          </div>
        </div>
        <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div class="w-full px-8 md:px-32 lg:px-24">
            <form class="bg-white rounded-md shadow-2xl p-5">
              <h1 class="text-gray-800 font-bold text-2xl mb-1">
                ¡Bienvenido de nuevo!
              </h1>
              <p class="text-sm font-normal text-gray-600 mb-8">
                Digita tus credenciales de acceso
              </p>
              <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 20a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM12 12a9 9 0 0 1-9-9 8.959 8.959 0 0 1 4.5-1.207A9 9 0 0 1 12 12z" />
                </svg>
                <input
                  id="username"
                  class=" pl-2 w-full outline-none border-none"
                  type="text"
                  name="username"
                  placeholder="Nombre de usuario"
                />
              </div>
              <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  class="pl-2 w-full outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                />
              </div>
              <button
                type="submit"
                class="block w-full bg-green-700 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Inicia Sesión
              </button>
              <div class="flex justify-between mt-4">
                <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                  ¿Has olvidado tu contraseña?
                </span>
                <a
                  href="#"
                  class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  ¿Aún no tienes una cuenta?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer class="bg-white dark:bg-gray-950">
        <div class="container px-6 py-8 mx-auto">
          <div class="flex flex-col items-center text-center">
            <p class="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
              Grupo AyR, Colonia San Miguel, frente a Molinos de Honduras,
              Comayagua, Honduras
            </p>
          </div>
          <hr class="my-10 border-gray-200 dark:border-gray-700" />

          <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-500">
              © Copyright 2024. All Rights Reserved.
            </p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Teams{" "}
              </a>

              <a
                href="#"
                class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Privacy{" "}
              </a>

              <a
                href="#"
                class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Cookies{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
