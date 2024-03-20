import { useState } from "react";
import { LuUserPlus2 } from "react-icons/lu";
import { LuUserX2 } from "react-icons/lu";
import { LuUserCheck2 } from "react-icons/lu";

const TableUsers = ({userData}) => {
  const [totalSelect, setTotalSelect] = useState(5)


    const handleSelectChange = (event) => {
      const newValue = parseInt(event.target.value);
      setTotalSelect(newValue);
    };

  return (
    <div className="font-sans ">
      <div className="">
        <div className="">
          <div className="my-2 flex sm:flex-row flex-col">
            <div className="flex flex-row -mb-5 sm:mb-0 justify-end sm:justify-normal">
              <div className="relative">
                <select className="h-9 rounded-l border text-xs sm:text-base block appearance-none w-15 bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleSelectChange}
                >
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="h-9 rounded-r text-xs sm:text-base border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none  w-auto bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option>Todos</option>
                  <option>Activos</option>
                  <option>Inactivos</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="block relative invisible sm:visible">
              <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-gray-500"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                </svg>
              </span>
              <input
                placeholder="Buscar"
                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 h-9 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white  focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8  px-4 sm:px-8 py-4 overflow-x-auto ">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <div style={{ overflowY: "auto", maxHeight: "400px" }}>
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Usuario
                      </th>
                      <th className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Nombre
                      </th>
                      <th className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Perfil
                      </th>
                      <th className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              Vera Carpenter
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Editor
                        </p>
                      </td>
                      <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Editor
                        </p>
                      </td>
                      <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Activo</span>
                        </span>
                      </td>
                      <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm text-center">
                        <div className="flex justify-start items-center">
                          <span className="relative inline-block">
                            <LuUserPlus2 className="h-6 w-6 icon hover:scale-125 hover:text-green-700" />
                          </span>
                          <span className="relative inline-block">
                            <LuUserX2 className="h-6 w-6 ml-5 icon hover:scale-125 hover:text-red-700" />
                          </span>
                          <span className="relative inline-block">
                            <LuUserCheck2 className="h-6 w-6 ml-5  hover:scale-125 hover:text-blue-700" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              Vera Carpenter
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Editor
                        </p>
                      </td>
                      <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Editor
                        </p>
                      </td>
                      <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Activo</span>
                        </span>
                      </td>
                      <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm text-center">
                        <div className="flex justify-start items-center">
                          <span className="relative inline-block">
                            <LuUserPlus2 className="h-6 w-6 icon hover:scale-125 hover:text-green-700" />
                          </span>
                          <span className="relative inline-block">
                            <LuUserX2 className="h-6 w-6 ml-5 icon hover:scale-125 hover:text-red-700" />
                          </span>
                          <span className="relative inline-block">
                            <LuUserCheck2 className="h-6 w-6 ml-5  hover:scale-125 hover:text-blue-700" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <div className="px-4 sm:px-5 py-5 bg-white border-t flex flex-col sm:flex-row items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-900">
                  `Mostrando 1 a {totalSelect - 1} de 50 entradas
                </span>
                <div className="inline-flex mt-2 sm:mt-0">
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                    Atrás
                  </button>
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableUsers;
