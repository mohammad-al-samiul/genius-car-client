import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Signup from "../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "/checkout/:id",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/api/services/${params.id}`),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoutes>
            <Contact />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
