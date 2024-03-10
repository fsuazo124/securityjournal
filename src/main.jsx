import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Layout />,
    children: [
      {
        children: [
          {
            element: <Dashboard />,
            index: true
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
          {
            path: 'employes',
            element: <h1>Hola desde empleados</h1>,
          },
          {
            path: 'news',
            element: <h1>Hola desde novedades</h1>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
