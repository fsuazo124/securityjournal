import React from "react";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
