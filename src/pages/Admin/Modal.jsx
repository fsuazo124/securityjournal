import React, { useState, useEffect } from "react";
import axios from "axios";
import { LuUsers } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("El primer nombre es requerido"),
  last_name: Yup.string().required("El primer apellido es requerido"),
  user_name: Yup.string().required("El nombre de usuario es requerido"),
  id_profile: Yup.number()
    .required("El perfil de usuario es requerido")
    .integer(),
  password: Yup.string().required("La contraseña es requerida"),
});

function Modal({ onClose }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/sj/api/users/profile"
        );
        console.log(res.data.data);
        setProfiles(res.data.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    const timeout = setTimeout(() => {
      fetchProfiles();
    }, 500);

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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-60 overflow-hidden flex items-center justify-center backdrop-blur-sm">
      <div className="grid place-items-center">
        <button onClick={onClose} className="absolute top-16 right-16">
          <RxExit
            className="md:w-9 md:h-9 text-slate-50 hover:text-red-600"
            title="Salir"
          />
        </button>
        <div className="w-screen">
          <div className="sm:px-1 sm:py-10 sm:ml-10 sm:mr-10 lg:p-10 bg-slate-50 lg:ml-40 lg:mr-40 h-max mt-30 rounded-sm border border-gray-300 shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-2xl grid md:grid-cols-2 gap-4">
            <div className="md:col-span-1 ml-10 relative">
              <LuUsers className="w-12 h-12 text-gray-600" />
              <p className="sm:text-base lg:text-xl font-bold text-gray-600 mt-4">
                Registro de nuevos usuarios
              </p>
              <p className="absolute top-0 bottom-0 right-11 h-full w-px bg-gray-400" />
            </div>
            <div className="md:col-span-1 mr-10 mb-10 mt-10">
              <form onSubmit={formik.handleSubmit}>
                <p className="text-base text-gray-600 font-bold mb-10">
                  Completa todos los campos para registrar un nuevo usuario
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-semibold text-gray-600 "
                    >
                      Primer Nombre
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      autoComplete="given-name"
                      className="block w-full px-3 py-1 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.first_name}
                    />
                    {formik.touched.first_name && formik.errors.first_name ? (
                      <div className="text-red-700 text-base font-semibold ml-3">
                        {formik.errors.first_name}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-semibold text-gray-600 "
                    >
                      Primer Apellido
                    </label>
                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      autoComplete="family-name"
                      className="block w-full px-3 py-1 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.last_name}
                    />
                    {formik.touched.last_name && formik.errors.last_name ? (
                      <div className="text-red-700 text-base font-semibold ml-3">
                        {formik.errors.last_name}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-semibold text-gray-600 "
                  >
                    Nombre de Usuario
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    autoComplete="username"
                    className="block w-full px-3 py-1 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_name}
                  />
                  {formik.touched.user_name && formik.errors.user_name ? (
                    <div className="text-red-700 text-base font-semibold ml-3">
                      {formik.errors.user_name}
                    </div>
                  ) : null}
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="id_profile"
                    className="block text-sm font-semibold text-gray-600 "
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
                    className="block w-1/2 px-3 py-1 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300"
                  >
                    <option value="">Selecciona un perfil...</option>
                    {profiles.map((profile) => (
                      <option key={profile.id} value={profile.id}>
                        {profile.title}
                      </option>
                    ))}
                  </select>
                  {formik.touched.id_profile && formik.errors.id_profile ? (
                    <div className="text-red-700 text-base font-semibold ml-3">
                      {formik.errors.id_profile}
                    </div>
                  ) : null}
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-600 "
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    className="block w-full px-3 py-1 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-700 text-base font-semibold ml-3 ">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="mt-20">
                  <button
                    type="submit"
                    className="w-full py-1 font-semibold text-base text-white bg-gray-800 rounded-md shadow-md transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 uppercase"
                  >
                    Crear
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
