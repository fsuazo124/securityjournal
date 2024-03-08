import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';

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
        element: <h1>Noticias</h1>,
        children: [
          {
            index: true,
            element: <h1>Hola desde la página de noticias principal</h1>,
          },
          {
            path: 'clients',
            element: <h1>Hola 2 desde la página de clientes</h1>,
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
