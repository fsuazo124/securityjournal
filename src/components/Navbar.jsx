import { useDispatch } from "react-redux";
import { logout } from "../store/slices/users/userSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate("/");
    dispatch(logout());
  };

  return (
    <nav>
      <div className="">
        <div className="flex justify-between bg-slate-50 border-b border-b-green-800 h-20 px-12 shadow items-center ">
          <div className="flex items-center space-x-2 md:space-x-8">
            <img
              src="/src/assets/sj_icon.png"
              alt="Icono SJ"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <h1 className="text-base md:text-xl lg:text-2xl font-bold cursor-pointer">
              Grupo AyR
            </h1>
            <div className="hidden md:flex justify-around space-x-4"></div>
          </div>
          <div className="flex space-x-4 items-center">
            <button
              onClick={handleLogin}
              className="bg-red-600 px-2 py-2 rounded text-white md:font-bold hover:bg-red-500 font-medium md:text-xs text-xs uppercase"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
