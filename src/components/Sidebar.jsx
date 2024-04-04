import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  const [sidenav, setSidenav] = useState(true);
  const user = useSelector((state) => state.user.usuarioLogguer);

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 640;
    setSidenav(!isSmallScreen);
  }, []);

  const handleToggleSidebar = () => {
    setSidenav(!sidenav);
  };

  return (
    <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
      <div className="font-poppins bg-white">
        <div
          id="view"
          className="h-full flex flex-row"
          x-data="{ sidenav: true }"
        >
          <button
            onClick={handleToggleSidebar}
            className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-green-700 focus:outline-none focus:text-white absolute top-5 left-1 sm:hidden"
          >
            <svg
              className="w-5 h-5 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="sidebar"
            className={`bg-slate-50 h-full md:block shadow-2xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out ${
              sidenav
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            }`}
          >
            <div className="space-y-6 md:space-y-8 mt-10">
              <h1 className="font-bold text-xl text-center md:hidden">
                {user?.profile}
                <span className="text-teal-600">.</span>
              </h1>
              <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                {user?.profile}
                <span className="text-teal-600">.</span>
              </h1>
              <div id="profile" className="space-y-3">
                <img
                  src="/src/assets/user.png"
                  alt="User"
                  className="w-10 md:w-16 rounded-full mx-auto border-slate-950 shadow-sm"
                />
                <div>
                  <h2 className="font-medium md:text-base text-center text-black sm:font-bold">
                    {user?.firstName} {""} {user?.lastName}
                  </h2>
                  <div className="flex gap-3 justify-center items-center">
                    <div className="rounded-full h-2 w-2 bg-green-500" />
                    <p className="text-sm text-gray-500 text-center font-semibold">
                      {user?.userName}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-green-200">
                <input
                  id="text"
                  name="text"
                  type="text"
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                  placeholder="Buscar"
                />
                <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                  <svg
                    className="w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div id="menu" className="flex flex-col space-y-2">
                <Link
                  className={`${
                    location.pathname === "/dasboard"
                      ? "text-blue-300"
                      : "text-white"
                  } text-2xl block mt-2 hover:text-blue-300 `}
                  to="dashboard"
                >
                  <div className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-green-700 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                    <svg
                      className="w-6 h-6 fill-current inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span className="ml-1">Dashboard</span>
                  </div>
                </Link>
                <Link
                  className={`${
                    location.pathname === "/novedades"
                      ? "text-blue-300"
                      : "text-white"
                  } text-2xl block mt-2 hover:text-blue-300 `}
                  to="news"
                >
                  <div className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-green-700 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                    <svg
                      className="w-6 h-6 fill-current inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-1">Novedades</span>
                  </div>
                </Link>

                <Link
                  className={`${
                    location.pathname === "/empleados"
                      ? "text-blue-300"
                      : "text-white"
                  } text-2xl block mt-2 hover:text-blue-300 `}
                  to="employes"
                >
                  <div className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-green-700 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                    <svg
                      className="w-6 h-6 fill-current inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
                    </svg>
                    <span className="ml-1">Empleados</span>
                  </div>
                </Link>
                {user.profile === "Administrador" && (
                  <Link
                    className={`${
                      location.pathname === "/administracion"
                        ? "text-blue-300"
                        : "text-white"
                    } text-2xl block mt-2 hover:text-blue-300 `}
                    to="admin"
                  >
                    <div className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-green-700 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                      <svg
                        className="w-6 h-6 fill-current inline-block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                      <span className="ml-1">Administracion</span>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="main -ml-48 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
        <div className="flex h-full w-auto bg-white text-2xl font-bold shadow-md p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
