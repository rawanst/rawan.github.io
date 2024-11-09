import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import Blog from './Pages/Blog'
import Portfolio from './Pages/Portfolio'
import Article from './Pages/Article'
import ComingSoon from './Pages/ComingSoon'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <Article />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/:id",
    element: <ComingSoon />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

// Le point d'entrée principal de ton application React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);