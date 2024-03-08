function Navbar() {
  return (
    <nav>
      <div class="">
        <div class="flex justify-between bg-slate-50 border-b border-b-green-800 h-20 px-12 shadow items-center ">
          <div class="flex items-center space-x-2 md:space-x-8">
            <img
              src="/src/assets/sj_icon.png"
              alt="Icono SJ"
              class="w-8 h-8 md:w-10 md:h-10"
            />
            <h1 class="text-base md:text-xl lg:text-2xl font-bold cursor-pointer">
              Grupo AyR
            </h1>
            <div class="hidden md:flex justify-around space-x-4"></div>
          </div>
          <div class="flex space-x-4 items-center">
            <a
              href=""
              class="bg-red-600 px-2 py-2 rounded text-white font-bold hover:bg-red-500 md:text-xs text-xs uppercase"
            >
              Cerrar Sesión
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
