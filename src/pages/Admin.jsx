import { useState, useEffect } from "react";
import TableUsers from "../components/TableUsers";
import axios from "axios";

function Admin() {
  const [showTableUsers, setShowTableUsers] = useState(true);
  const [showTableProfiles, setShowTableProfiles] = useState(false);
  const [showReports, setShowReports] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersData(); 
  }, []);
  
  const fetchUsersData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/sj/api/users/");
      setUsers(res.data.data); // Almacena los datos de usuarios en el estado
      console.log(users)
    } catch (error) {
      console.log("Error al obtener datos de usuarios:", error);
    }
  };
  


  const handleUsuariosClick = () => {
    setShowTableUsers(true);
    setShowTableProfiles(false);
    setShowReports(false);
  };

  const handlePerfilesClick = () => {
    setShowTableProfiles(true);
    setShowTableUsers(false);
    setShowReports(false);
  };

  const handleReportesClick = () => {
    setShowReports(true);
    setShowTableUsers(false);
    setShowTableProfiles(false);
  };

  return (
    <div className="w-80 md:ml-0 sm:w-full md:w-full lg:full">
      <header className="bg-green-700 px-4 py-2 md:py-4 text-black"></header>
      <div className="p-4"></div>
      <div className="mt-2 flex border-b border-gray-200 dark:border-green-700">
        <button
          className="text-base md:text-md cursor-base -mb-px h-10 text-blackspace-nowrap border-b-2 border-transparent bg-transparent px-6 py-2 text-center font-bold text-gray-700 hover:border-gray-400 focus:outline-none  sm:text-base"
          onClick={handleUsuariosClick}
        >
          Usuarios
        </button>
        <button
          className="text-base md:text-md cursor-base -mb-px h-10 text-blackspace-nowrap border-b-2 border-transparent bg-transparent px-6 py-2 text-center font-bold text-gray-700 hover:border-gray-400 focus:outline-none  sm:text-base"
          onClick={handlePerfilesClick}
        >
          Perfiles
        </button>
        <button
          className="text-base md:text-md cursor-base -mb-px h-10 text-blackspace-nowrap border-b-2 border-transparent bg-transparent px-6 py-2 text-center font-bold text-gray-700 hover:border-gray-400 focus:outline-none  sm:text-base"
          onClick={handleReportesClick}
        >
          Reportes
        </button>
      </div>
      <div className="mt-14">
        {showTableUsers && <TableUsers usersData={users} />}
        {showTableProfiles && <h1>Hola desde perfiles</h1>}
        {showReports && <h1>Hola desde reportes</h1>}
      </div>
    </div>
  );
}

export default Admin;
