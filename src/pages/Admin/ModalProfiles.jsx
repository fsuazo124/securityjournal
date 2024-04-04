import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdAlert } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { RxExit } from "react-icons/rx";
import { IoMdCheckboxOutline } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("El título es requerido")
    .min(3, "El titulo debe tener al menos 3 caracteres"),
  description: Yup.string().required("La descripción es requerida"),
  permissions: Yup.object().shape({
    create: Yup.boolean()
      .nullable()
      .required("La propiedad 'create' es requerida"),
    read: Yup.boolean().nullable().required("La propiedad 'read' es requerida"),
    update: Yup.boolean()
      .nullable()
      .required("La propiedad 'update' es requerida"),
    delete: Yup.boolean()
      .nullable()
      .required("La propiedad 'delete' es requerida"),
  }),
});

function ModalProfiles({ onClose, getProfilesData }) {
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      permissions: {
        create: false,
        read: false,
        update: false,
        delete: false,
      },
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "http://localhost:3000/sj/api/users/profile",
          values
        );
        setMessage(res.data.meta.message);
        formik.resetForm();
        getProfilesData();
        setTimeout(() => {
          setMessage("");
        }, 5000);
      } catch (error) {
        console.log(error);
        if (error.response) {
          switch (error.response.status) {
            case 400:
              setMessage(error.response.data.message[(0, 1, 2)]);
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
        <button onClick={onClose} className="absolute top-16 right-2">
          <RxExit
            className="md:w-9 md:h-9 text-slate-50 hover:text-red-600"
            title="Salir"
          />
        </button>
        <div className="w-5/6 sm:w-screen">
          <div className="sm:px-1 sm:py-10 sm:ml-10 sm:mr-10 lg:p-10 bg-slate-50 lg:ml-40 lg:mr-40 h-max mt-30 rounded-sm border border-gray-300 shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-2xl grid md:grid-cols-2 gap-4">
            <div className="md:col-span-1 ml-10 relative">
              <ImProfile className="w-6 h-6 mt-5 sm:mt-0 sm:w-12 sm:h-12 text-gray-600" />
              <p className="font-bold text-sm sm:text-base lg:text-xl sm:font-bold text-gray-600 mt-4">
                Registro de nuevos perfiles
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
                  Completa todos los campos para registrar un nuevo perfil
                </p>
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-gray-600 "
                  >
                    Título del Perfil
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    autoComplete="given-name"
                    placeholder="Operario"
                    className="block w-full px-3 sm:py-1 py-0 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300 placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:text-opacity-40 sm:placeholder:text-base"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                  />
                  {formik.touched.title && formik.errors.title && (
                    <div className="text-red-700 text-base font-semibold ml-3 italic opacity-90">
                      {formik.errors.title}
                    </div>
                  )}
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-600 "
                  >
                    Descripción del Perfil
                  </label>
                  <input
                    id="description"
                    name="description"
                    autoComplete="username"
                    placeholder="Edición y creación de incidencias"
                    className="block w-full px-3 sm:py-1 py-0 mt-1 text-base lg:text-lg font-normal text-gray-600 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300 placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:text-opacity-40 sm:placeholder:text-base"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                  />
                  {formik.touched.description && formik.errors.description && (
                    <div className="text-red-700 text-base font-semibold ml-3 italic opacity-90">
                      {formik.errors.description}
                    </div>
                  )}
                </div>
                <div className="mt-5">
                  <p
                    htmlFor="permissions"
                    className="block text-sm font-semibold text-gray-600"
                  >
                    Permisos de Perfil
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 md:space-x-2 lg:space-x-16 mt-3">
                    <div className="flex items-center">
                      <p
                        htmlFor="create"
                        className="flex items-center cursor-pointer"
                      >
                        <IoMdCheckboxOutline
                          className={
                            formik.values.permissions.create
                              ? "text-white bg-gray-400 rounded-sm"
                              : "text-gray-400"
                          }
                          onClick={() =>
                            formik.setFieldValue(
                              "permissions.create",
                              !formik.values.permissions.create
                            )
                          }
                        />
                        <span className="text-gray-600 ml-1 lg:ml-2 text-xs sm:text-sm lg:text-base">
                          Crear
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p
                        htmlFor="read"
                        className="flex items-center cursor-pointer"
                      >
                        <IoMdCheckboxOutline
                          className={
                            formik.values.permissions.read
                              ? "text-white bg-gray-400 rounded-sm"
                              : "text-gray-400"
                          }
                          onClick={() =>
                            formik.setFieldValue(
                              "permissions.read",
                              !formik.values.permissions.read
                            )
                          }
                        />
                        <span className="text-gray-600 ml-1 lg:ml-2 text-xs sm:text-sm lg:text-base">
                          Leer
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p
                        htmlFor="update"
                        className="flex items-center cursor-pointer"
                      >
                        <IoMdCheckboxOutline
                          className={
                            formik.values.permissions.update
                              ? "text-white bg-gray-400 rounded-sm"
                              : "text-gray-400"
                          }
                          onClick={() =>
                            formik.setFieldValue(
                              "permissions.update",
                              !formik.values.permissions.update
                            )
                          }
                        />
                        <span className="text-gray-600 ml-1 lg:ml-2 text-xs sm:text-sm lg:text-base">
                          Actualizar
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p
                        htmlFor="delete"
                        className="flex items-center cursor-pointer"
                      >
                        <IoMdCheckboxOutline
                          className={
                            formik.values.permissions.delete
                              ? "text-white bg-gray-400 rounded-sm"
                              : "text-gray-400"
                          }
                          onClick={() =>
                            formik.setFieldValue(
                              "permissions.delete",
                              !formik.values.permissions.delete
                            )
                          }
                        />
                        <span className="text-gray-600 ml-1 lg:ml-2 text-xs sm:text-sm lg:text-base">
                          Eliminar
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-28">
                    <button
                      type="submit"
                      className="w-full py-1 sm:py-1 font-semibold text-sm sm:text-base text-white bg-gray-800 rounded-md shadow-md transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 uppercase"
                      >
                      Crear
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProfiles;
