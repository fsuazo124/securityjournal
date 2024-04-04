import React, { useState, useEffect } from "react";
import axios from "axios";
import { LuUsers } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { BiShow } from "react-icons/bi";
import { GoEyeClosed } from "react-icons/go";
import { IoMdAlert } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("El primer nombre es requerido"),
  last_name: Yup.string(),
  user_name: Yup.string()
    .required("El nombre de usuario es requerido")
    .min(5, "El nombre de usuario debe tener al menos 5 caracteres"),
  id_profile: Yup.number()
    .required("El perfil de usuario es requerido")
    .integer(),
  password: Yup.string().matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    "La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial"
  ),
});

function Modal({ onClose, getUsersData, selectedUser, setSelectedUser }) {
  const [profiles, setProfiles] = useState([]);
  const [message, setMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (selectedUser) {
      formik.setValues({
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        user_name: selectedUser.user_name,
        id_profile: selectedUser.profile.id,
        password: "",
      });
    }
  }, [selectedUser]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/sj/api/users/profile"
        );
        setProfiles(res.data.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    const timeout = setTimeout(() => {
      fetchProfiles();
    }, 50);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      user_name: "",
      id_profile: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        let res;
        if (selectedUser) {
          if (values.password === "") {
            delete values.password;
          }

          res = await axios.patch(
            `http://localhost:3000/sj/api/users/update/${selectedUser.id}`,
            values
          );

          setTimeout(() => {
            onClose();
            setSelectedUser(null);
            formik.resetForm();
          }, 3000);
        } else {
          res = await axios.post(
            "http://localhost:3000/sj/api/users/register",
            values
          );

          formik.resetForm();
        }
        setMessage(res.data.meta.message);
        getUsersData();
        setTimeout(() => {
          setMessage("");
        }, 5000);
      } catch (error) {
        console.log(error);
        if (error.response) {
          switch (error.response.status) {
            case 400:
              if (error.response.data.errors) {
                setMessage(error.response.data.errors[0].title);
              } else {
                setMessage(error.response.data.message[2]);
              }
              setTimeout(() => {
                setMessage("");
              }, 5000);
              break;
            default:
              console.log("Error de respuesta desconocido:", error.response);
              break;
          }
        } else {
          console.log("Error desconocido:", error);
        }
      }
    },
  });

  return (
    <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-60 overflow-hidden flex items-center justify-center backdrop-blur-sm">
      <div className="grid place-items-center">
        <button
          onClick={() => {
            onClose();
            setSelectedUser(null);
          }}
          className="absolute top-6 right-1 sm:top-16 sm:right-16"
        >
          <RxExit
            className="md:w-9 md:h-9 text-slate-50 hover:text-red-600"
            title="Salir"
          />
        </button>
        <div className="w-5/6 sm:w-screen">
          <div className="sm:px-1 sm:py-10 sm:ml-10 sm:mr-10 lg:p-10 bg-slate-50 lg:ml-40 lg:mr-40 h-max mt-30 rounded-sm border border-gray-300 shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-2xl grid md:grid-cols-2 gap-4">
            <div className="md:col-span-1 ml-10 relative">
              <LuUsers className="w-6 h-6 mt-5 sm:mt-0 sm:w-12 sm:h-12 text-gray-600" />
              <p className="font-bold text-sm sm:text-base lg:text-xl sm:font-bold text-gray-600 mt-4">
                {selectedUser
                  ? "Actualizar usuario"
                  : "Registro de nuevos usuarios"}
              </p>
              {message && (
                <div
                  className="flex bg-green-200 border border-gray-300 text-gray-600  ml-0 sm:ml-3 mb-0 mt-2 sm:mb-10 sm:-mt-10 md:px-2 md:py-2 md:mt-7 md:mb-2 w-60 lg:w-max rounded relative"
                  role="alert"
                >
                  <strong className="inline text-base md:text-lg font-bold ml-1 w-8">
                    <IoMdAlert />
                  </strong>
                  <span className="text-xs md:text-sm inline mr-2 ml-2 lg:mr-4">
                    {message}
                  </span>
                </div>
              )}

              <p className="invisible sm:visible absolute top-0 bottom-0 right-11 h-full w-px bg-gray-400" />
            </div>
            <div className="md:col-span-1 mr-10 mb-10 mt-10 ml-10 sm:ml-0">
              <form onSubmit={formik.handleSubmit}>
                <p className="text-sm font-semibold sm:text-base text-gray-600 sm:font-bold mb-10 -mt-5 sm:-mt-0">
                  {selectedUser
                    ? "Completa todos los campos para actualizar un usuario"
                    : "Completa todos los campos para registrar un nuevo usuario"}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mt-5 sm:-mt-0">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-xs sm:text-sm font-semibold text-gray-600 "
                    >
                      Primer Nombre
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      autoComplete="given-name"
                      placeholder="Jennifer"
                      className="block w-full px-3 sm:py-1 py-0 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300 placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:text-opacity-40 sm:placeholder:text-base"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.first_name}
                    />
                    {formik.touched.first_name && formik.errors.first_name ? (
                      <div className="text-red-700 text-sm sm:text-base font-semibold ml-3 italic opacity-90">
                        {formik.errors.first_name}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-xs sm:text-sm font-semibold text-gray-600 "
                    >
                      Primer Apellido
                    </label>
                    {selectedUser ? <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      autoComplete="family-name"
                      className="block w-full px-3 sm:py-1 py-0 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300 placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:text-opacity-40 sm:placeholder:text-base"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.last_name}
                    /> : <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    autoComplete="family-name"
                    placeholder="Diaz"
                    className="block w-full px-3 sm:py-1 py-0 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300 placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:text-opacity-40 sm:placeholder:text-base"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                  />}
                    
                    {formik.touched.last_name && formik.errors.last_name ? (
                      <div className="text-red-700 text-sm sm:text-base font-semibold ml-3 italic opacity-90">
                        {formik.errors.last_name}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="user_name"
                    className="block text-xs sm:text-sm font-semibold text-gray-600 "
                  >
                    Nombre de Usuario
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    autoComplete="username"
                    placeholder="jdiaz2024"
                    className="block w-full px-3 sm:py-1 py-0 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300 placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:text-opacity-40 sm:placeholder:text-base"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_name}
                  />
                  {formik.touched.user_name && formik.errors.user_name ? (
                    <div className="text-red-700 text-sm sm:text-base font-semibold ml-3 italic opacity-90">
                      {formik.errors.user_name}
                    </div>
                  ) : null}
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="id_profile"
                    className="block text-xs sm:text-sm font-semibold text-gray-600 "
                  >
                    Perfil de Usuario
                  </label>
                  <select
                    id="id_profile"
                    name="id_profile"
                    value={formik.values.id_profile}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "id_profile",
                        parseInt(e.target.value)
                      )
                    }
                    onBlur={formik.handleBlur}
                    className="block w-5/6 sm:w-4/6 lg:w-1/2 px-3 py-1 mt-1 text-sm sm:text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300"
                  >
                    {selectedUser ? (
                      <>
                        <option key={selectedUser.profile.id} value="">
                          {selectedUser.profile.title}
                        </option>
                        {profiles
                          .filter(
                            (profile) => profile.id !== selectedUser.profile.id
                          )
                          .map((profile) => (
                            <option key={profile.id} value={profile.id}>
                              {profile.title}
                            </option>
                          ))}
                      </>
                    ) : (
                      <>
                        <option value="">Selecciona un perfil...</option>
                        {profiles.map((profile) => (
                          <option key={profile.id} value={profile.id}>
                            {profile.title}
                          </option>
                        ))}
                      </>
                    )}
                  </select>

                  {formik.touched.id_profile && formik.errors.id_profile ? (
                    <div className="text-red-700 text-sm sm:text-base font-semibold ml-3 italic opacity-90">
                      {formik.errors.id_profile}
                    </div>
                  ) : null}
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="password"
                    className="block text-xs sm:text-sm font-semibold text-gray-600"
                  >
                    {selectedUser ? "Actualizar Contraseña" : "Contraseña"}
                  </label>
                  <div className="relative">
                  {selectedUser ? <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="new-password"
                      className="block w-full px-3 sm:py-1 py-0 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300 placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:text-opacity-40 sm:placeholder:text-base"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    /> : <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    placeholder="jmendez_2024"
                    className="block w-full px-3 sm:py-1 py-0 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300 placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:text-opacity-40 sm:placeholder:text-base"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />}
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <GoEyeClosed /> : <BiShow />}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-700 text-sm sm:text-base font-semibold ml-3 italic opacity-90">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="mt-5 sm:mt-20">
                  <button
                    type="submit"
                    className="w-full py-1 sm:py-1 font-semibold text-sm sm:text-base text-white bg-gray-800 rounded-md shadow-md transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 uppercase"
                  >
                    {selectedUser ? "Actualizar" : "Crear"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
