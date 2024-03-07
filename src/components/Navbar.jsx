function Navbar() {
  return (
    <nav>
    <div class="">
      <div class="flex justify-between bg-slate-50 border-b border-b-green-800 h-20 px-12 shadow items-center ">
        <div class="flex items-center space-x-8">
        <img
                  src="/src/assets/sj_icon.png"
                  alt="Icono SJ"
                  className="w-10 h-10"
                />
          <h1 class="text-xl lg:text-2xl font-bold cursor-pointer">Grupo AyR</h1>
          <div class="hidden md:flex justify-around space-x-4">
          </div>
        </div>
        <div class="flex space-x-4 items-center">
          <a href="" class="bg-red-600 px-2 py-2 rounded text-white font-bold hover:bg-red-500 text-xs uppercase">Cerrar Sesión</a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
