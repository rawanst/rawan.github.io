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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "blog/:id",
    element: <Article />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
