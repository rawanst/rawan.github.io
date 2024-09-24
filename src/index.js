import * as React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App'
import Blog from './Pages/Blog'
import Portfolio from './Pages/Portfolio'
import Article from './Pages/Article'
import ComingSoon from './Pages/ComingSoon'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

const basename = process.env.NODE_ENV === 'production' ? '/rawanst.github.io' : '/'

const router = createBrowserRouter(
  [
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
  ],
  {
    basename: basename,
  }
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
