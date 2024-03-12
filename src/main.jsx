import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        children: [
          {
            element: <Dashboard />,
            index: true,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "employes",
            element: <h1>Hola desde empleados</h1>,
          },
          {
            path: "news",
            element: <h1>Hola desde novedades</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
 },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);