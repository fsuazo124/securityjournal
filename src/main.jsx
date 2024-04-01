import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Admin from "./pages/Admin/Admin";
import News from "./pages/News";
import Employes from "./pages/Employes";
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
            element: <Employes />,
          },
          {
            path: "news",
            element: <News />,
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