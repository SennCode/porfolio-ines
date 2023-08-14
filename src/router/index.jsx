import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Collection1 from "../pages/Collection1";
import Collection2 from "../pages/Collection2";
import Collection3 from "../pages/Collection3";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <NotFound />,
      },

      {
        path: "/projects",
        element: <Projects />,
        errorElement: <NotFound />,
      },

      {
        path: "/projects/collection1",
        element: <Collection1 />,
      },
      {
        path: "/projects/collection2",
        element: <Collection2 />,
      },
      {
        path: "/projects/collection3",
        element: <Collection3 />,
      },

      {
        path: "/contact",
        element: <Contact />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
