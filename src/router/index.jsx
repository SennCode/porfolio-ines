import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work"
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
      },
      {
        path:"/work",
        element: <Work/>

      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
