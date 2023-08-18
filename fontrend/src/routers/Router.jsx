import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/HeaderMenu/Home";
import Services from "../pages/HeaderMenu/Services";
import ErrorPage from "../Error/ErrorPage";
import SignIn from "../pages/Login/SignIn";
import Contact from "../pages/HeaderMenu/Contact";
import About from "../pages/HeaderMenu/About";
import Doctor from "../pages/HeaderMenu/Doctor";
import DoctorDetails from "../pages/SectionComponents/DoctorDetails/DoctorDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/doctors",
        element: <Doctor></Doctor>,
      },
      {
        path: "/doctors/:id",
        element: <DoctorDetails />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
export default router;
