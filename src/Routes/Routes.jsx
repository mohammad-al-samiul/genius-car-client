import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
