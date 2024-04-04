import { useState, useEffect } from "react";
import TableUsers from "./TableUsers";
import axios from "axios";
import TableProfiles from "./TableProfiles";

function Admin() {
  const [showTableUsers, setShowTableUsers] = useState(false);
  const [showTableProfiles, setShowTableProfiles] = useState(false);
  const [showReports, setShowReports] = useState(false);
  const [users, setUsers] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getUsersData();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getUsersData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/sj/api/users");
      setUsers(res.data.data);
    } catch (error) {
      console.log("Error al obtener datos de usuarios:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getProfilesData();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getProfilesData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/sj/api/users/profile");
      setProfiles(res.data.data);
    } catch (error) {
      console.log("Error al obtener datos de perfiles:", error);
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
    <div className="w-80 md:ml-0 sm:w-full md:w-full">
      <header className="bg-green-700 px-4 py-2 md:py-4 text-black rounded-sm"></header>
      <div className="p-4"></div>
      <div className="mt-2 flex border-b border-gray-200 dark:border-green-700">
      <button
          className={`text-sm sm:text-base cursor-base sm:-mb-px h-10 text-blackspace-nowrap border-b-2 border-transparent bg-transparent px-6 py-2 text-center font-bold text-gray-700 hover:border-gray-400 focus:outline-none ${
            showReports ? "bg-zinc-100 h-9 rounded-sm" : ""
          }`}
          onClick={handleReportesClick}
        >
          Reportes
        </button>
        <button
          className={`text-sm sm:text-base cursor-base sm:-mb-px h-10 text-blackspace-nowrap border-b-2 border-transparent bg-transparent px-6 py-2 text-center font-bold text-gray-700 hover:border-gray-400 focus:outline-none ${
            showTableUsers ? "bg-zinc-100 h-9 rounded-sm" : ""
          }`}
          onClick={handleUsuariosClick}
        >
          Usuarios
        </button>
        <button
          className={`text-sm sm:text-base cursor-base sm:-mb-px h-10 text-blackspace-nowrap border-b-2 border-transparent bg-transparent px-6 py-2 text-center font-bold text-gray-700 hover:border-gray-400 focus:outline-none ${
            showTableProfiles ? "bg-zinc-100 h-9 rounded-sm" : ""
          }`}
          onClick={handlePerfilesClick}
        >
          Perfiles
        </button>
      </div>
      <div className="mt-14">
        {showTableUsers && (
          <TableUsers usersData={users} setUsersData={setUsers} getUsersData={getUsersData} />
        )}
        {showTableProfiles && (
          <TableProfiles profilesData={profiles} setProfilesData={setProfiles} getProfilesData={getProfilesData} />
        )}
        {showReports && <h1>Hola desde reportes</h1>}
      </div>
    </div>
  );
}

export default Admin;
