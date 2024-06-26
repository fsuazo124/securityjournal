import { useState, useEffect } from "react";
import axios from "axios";
import { login } from "../store/slices/users/userSlice";
import { useDispatch } from "react-redux";
import Alert from "../components/Alert";

function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/sj/api/auth", {
        user_name: username,
        password: password,
      });

      dispatch(login(res.data.data));

      if (res.status === 200) {
        window.location.href = "/home";
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            setAlertTitle(error.response.data.errors[0].title);
            setShowAlert(true);
            setUserName("");
            setPassword("");
            break;
          case 400:
            setAlertTitle(
              `${error.response.data.message[0]} - ${
                error.response.data.message[1] || ""
              }`
            );
            setShowAlert(true);
            break;
          case 403:
            setAlertTitle(error.response.data.errors[0].title);
            setShowAlert(true);
            setUserName("");
            setPassword("");
            break;
          default:
            console.log("Error de respuesta desconocido:", error.response);
            break;
        }
      } else {
        console.log("Error desconocido:", error);
      }
    }
  };

  return (
    <div>
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
                  InSisPer-Tic
                </h1>
              </div>
              <div className="items-end mt-20">
                {showAlert && (
                  <Alert
                    title={alertTitle}
                    setShowAlert={setShowAlert}
                    setUserName={setUserName}
                    setPassword={setPassword}
                    setAlertTitle={setAlertTitle}
                  />
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-screen flex">
        <div
          className="hidden lg:flex w-full lg:w-1/2 bg-green-800
          justify-around items-center"
        >
          <div
            className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
          ></div>

          <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
            <img
              src="/src/assets/security.png"
              alt="Grupo AyR "
              className="w-28 mx-2"
            />
            <h1 className="text-white font-bold text-4xl font-sans">
              Gestión Integral de Seguridad y Asistencia
            </h1>
            <p className="text-white mt-1">
              Registro de incidencias, accesos y entrada/salida de personal
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                href="#"
                className="hover:bg-gray-600 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-gray-600 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
              >
                Comenzemos
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form
              className="bg-white rounded-md shadow-2xl p-5"
              onSubmit={handleSubmit}
            >
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                ¡Bienvenido de nuevo!
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-8">
                Digita tus credenciales de acceso
              </p>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>

                <input
                  id="username"
                  className=" pl-2 w-full outline-none border-none"
                  type="text"
                  name="username"
                  autoComplete="username"
                  placeholder="Nombre de usuario"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 w-full outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="username"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="block w-full bg-green-700 mt-5 py-2 rounded-2xl hover:bg-gray-600 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Inicia Sesión
              </button>
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                  ¿Has olvidado tu contraseña?
                </span>
                <a
                  href="#"
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  ¿Aún no tienes una cuenta?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-gray-950">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <p className="max-w-md mx-auto mt-4 text-gray-400">
            InSisPer-Tic, Colonia San Pablo, Frente a Tiendas El Jordan, La Paz, La Paz, Honduras
            </p>
          </div>
          <hr className="my-10 border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">
              © Copyright 2024. All Rights Reserved.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Teams{" "}
              </a>

              <a
                href="#"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Privacy{" "}
              </a>

              <a
                href="#"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Cookies{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Login;
