import React from "react";
import { Outlet } from "react-router-dom";
import Table from "../components/Table";

function Admin() {
  return (
    <div className="w-80 md:ml-0 md:w-full">
      <header className="bg-green-700 px-4 py-2 md:py-4 text-black">
        <img src="" />
      </header>
      <div className="p-4">
      </div>
      <div className="mt-2 flex border-b border-gray-200 dark:border-green-700">
        <button className="text-base md:text-md cursor-base -mb-px h-10 text-blackspace-nowrap border-b-2 border-transparent bg-transparent px-6 py-2 text-center font-bold text-gray-700 hover:border-gray-400 focus:outline-none  sm:text-base">
          Usuarios
        </button>
        <button className="text-base md:text-md cursor-base -mb-px h-10 text-blackspace-nowrap border-b-2 border-transparent bg-transparent px-6 py-2 text-center font-bold text-gray-700 hover:border-gray-400 focus:outline-none  sm:text-base">
          Perfiles
        </button>
        <button className="text-base md:text-md cursor-base -mb-px h-10 text-blackspace-nowrap border-b-2 border-transparent bg-transparent px-6 py-2 text-center font-bold text-gray-700 hover:border-gray-400 focus:outline-none  sm:text-base">
          Reportes
        </button>
      </div>
      <div className="mt-14">
        <main>
          <Table />
        </main>
      </div>
    </div>
  );
}

export default Admin;
