import { useState } from "react";
import { LuUserX2 } from "react-icons/lu";
import { LuUserCheck2 } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

const TableUsers = ({ usersData }) => {
  const [totalSelect, setTotalSelect] = useState(5);

  console.log(usersData);
  const handleSelectChange = (event) => {
    const newValue = parseInt(event.target.value);
    setTotalSelect(newValue);
  };

  return (
    <div className="font-sans ">
      <div className="">
        <div className="">
          <div className="flex justify-between items-center -mt-5 sm:-mt-1">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <div className="relative">
                  <select
                    className="h-9 rounded-l border text-xs sm:text-sm block appearance-none w-15 bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                  <select className="h-9 rounded-r text-xs sm:text-sm border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-auto bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
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
                <div className="relative invisible sm:visible ">
                  <input
                    placeholder="Buscar"
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 h-9 w-0 sm:w-40 lg:w-96 bg-white text-sm placeholder-gray-300 text-gray-500 focus:bg-white focus:text-gray-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="-ml-52">
            <button className="bg-gradient-to-b mb-2 w-max mx-auto text-gray-600 text-xs sm:text-sm text-center font-bold from-gray-200 to-gray-200 px-1 py-1 rounded-sm shadow-gray-500 shadow-md border-b-4 hover border-gray-400 hover:shadow-sm transition-all duration-500">Agregar Usuario</button>
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8  px-4 sm:px-8 py-4 overflow-x-auto mt-2 md:mt-4 lg:mt-1">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <div style={{ overflowY: "auto", maxHeight: "400px" }}>
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 sm:h-10 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Usuario
                      </th>
                      <th className="px-3 py-2 sm:h-10 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Nombre
                      </th>
                      <th className="px-3 py-2 sm:h-10 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Perfil
                      </th>
                      <th className="px-3 py-2 sm:h-10sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-3 py-2 sm:h-10sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((user, index) => (
                      <tr key={index}>
                        <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm font-semibold">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <FaUserCircle className="h-9 ml-3 w-6" />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {user.user_name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm font-semibold">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user.first_name}{' '}{user.last_name}
                          </p>
                        </td>
                        <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm font-semibold">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user.profile.title}
                          </p>
                        </td>
                        <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className={`absolute inset-0 opacity-50 rounded-full ${
                                user.is_active ? "bg-green-200" : "bg-red-200"
                              }`}
                            ></span>
                            <span className="relative">
                              {user.is_active ? "Activo" : "Inactivo"}
                            </span>
                          </span>
                        </td>
                        <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm text-center">
                          <div className="flex justify-start items-center">
                            <span className="relative inline-block ">
                              <LuUserX2
                                className="h-6 w-6 icon hover:scale-125 hover:text-red-700"
                                title="Deshabilitar usuario"
                              />
                            </span>
                            <span className="relative inline-block">
                              <LuUserCheck2
                                className="h-6 w-6 ml-5  hover:scale-125 hover:text-blue-700"
                                title="Habilitar usuario"
                              />
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 sm:px-5 py-5 bg-white border-t flex flex-col sm:flex-row items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-600">
                  Mostrando 1 a {totalSelect - 1} de {usersData.length} entradas
                </span>
                <div className="inline-flex mt-2 sm:mt-0">
                  <button className="text-xs sm:text-sm bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded-sm">
                    Atrás
                  </button>
                  <button className="text-xs sm:text-sm bg-gray-300 ml-1 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded-sm">
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
