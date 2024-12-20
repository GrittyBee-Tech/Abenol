/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Donate from './pages/donate';
import Lges from './pages/lges';
import Pvc from './pages/pvc';
import JoinAbenol from './pages/join';

const router = createBrowserRouter([
  {
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/join',
        element: <JoinAbenol />,
      },
      {
        path: '/donate',
        element: <Donate />,
      },
      {
        path: '/lges-project',
        element: <Lges />,
      },
      {
        path: '/pvc-project',
        element: <Pvc />,
      },
      {
        path: '/donate',
        element: <Donate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
