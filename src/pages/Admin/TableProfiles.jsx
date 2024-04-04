import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import AlertUser from "./AlertUser";
import ModalProfiles from "./ModalProfiles";

function TableProfiles({ profilesData, getProfilesData }) {
  const [totalSelect, setTotalSelect] = useState(5);
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [titleAlert, setTitleAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSelectChange = (event) => {
    const newValue = parseInt(event.target.value);
    setTotalSelect(newValue);
  };

  const handleFilterChange = (event) => {
    const newValue = event.target.value;
    setFilterStatus(newValue);
  };

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
  };

  const handleAddUserClick = () => {
    setShowModal(true);
  };

  const filteredProfiles = profilesData
    .filter((profile) => {
      const profileName = profile.title.toLowerCase();
      const createdAt = new Date(profile.created_At).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });

      if (filterStatus === "Todos") {
        return profileName.includes(searchTerm.toLowerCase()) || createdAt.includes(searchTerm.toLowerCase());
      } 

      if(filterStatus === "")

      return true;
    })
    .slice(0, totalSelect);

  return (
    <div className="font-sans">
      <div className="flex justify-end">
        {showAlert && (
          <AlertUser
            title={titleAlert}
            setAlertTitle={setTitleAlert}
            setShowAlert={setShowAlert}
          />
        )}
      </div>
      {showModal && (
        <ModalProfiles getProfilesData={getProfilesData} onClose={() => setShowModal(false)} />
      )}
      <div className="">
        <div className="">
          <div className="flex justify-between items-center -mt-5 sm:-mt-1">
            <div className="flex flex-row items-center">
              <div className="relative">
                <select
                  className="h-9 rounded-l border text-xs lg:text-sm block appearance-none w-15 bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  onChange={handleSelectChange}
                  value={totalSelect}
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
                <select
                  className="h-9 rounded-r text-xs lg:text-sm border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-auto bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                  onChange={handleFilterChange}
                  value={filterStatus}
                >
                  <option value="Todos">Todos</option>
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
                  id="buscar"
                  name="buscar"
                  placeholder="Buscar"
                  className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 h-9 w-0 sm:w-40 lg:w-96 bg-white text-sm placeholder-gray-300 text-gray-500 focus:bg-white focus:text-gray-600 focus:outline-none"
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="-ml-52">
            <button
              className="bg-gradient-to-b mb-2 w-max mx-auto text-gray-600 text-xs sm:text-sm text-center font-bold from-gray-200 to-gray-200 px-1 py-1 rounded-sm shadow-gray-500 shadow-md border-b-4 hover border-gray-400 hover:shadow-sm transition-all duration-500"
              onClick={handleAddUserClick}
            >
              Agregar Perfil de Usuario
            </button>
          </div>
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8  px-4 sm:px-8 py-4 overflow-x-auto mt-2 md:mt-4 lg:mt-1">
          {filteredProfiles.length === 0 ? (
            <p className="text-gray-600 text-center mt-20">
              Ningún registro encontrado
            </p>
          ) : (
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <div style={{ overflowY: "auto", maxHeight: "600px" }}>
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-3 py-0 sm:h-10 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Nombre del perfil
                      </th>
                      <th className="px-3 py-0 sm:h-10 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Descripción
                      </th>
                      <th className="px-3 py-0 sm:h-10 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Fecha de creación
                      </th>
                      <th className="px-3 py-0 sm:h-10 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                          Acciones
                        </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProfiles.map((profile, index) => (
                      <tr key={profile.id}>
                        
                        <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm font-semibold">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <FaUserCircle className="h-9 ml-3 w-6" />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {profile.title}
                                </p>
                              </div>
                            </div>
                          </td>
                        <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm font-semibold">
                          {profile.description}
                        </td>
                        <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm font-semibold">
                        {new Date(profile.created_At).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="px-3 py-2 sm:px-5 sm:py-3 md:px-3 md:py-2 border-b border-gray-200 bg-white text-sm text-center">
                            <div className="flex justify-start items-center">
                              <span className="relative inline-block">
                                <FiEdit 
                                  className="h-5 w-5 ml-5  hover:scale-125 hover:text-green-700"
                                  title="Editar Perfil"                            />
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
                    Mostrando 1 a {totalSelect} de {profilesData.length} entradas
                  </span>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TableProfiles;
