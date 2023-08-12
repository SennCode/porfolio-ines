import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects"
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";

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
        errorElement: <NotFound />
      },
      {
        path:"/projects",
        element: <Projects/>,
        errorElement: <NotFound />
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <NotFound />
      },
    ],
  },
]);
