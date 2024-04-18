
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import IndustryDetail from "../Pages/IndustryDetail/IndustryDetail";
import PrivetRoute from "./PrivetRoute";
import Contact from "../Pages/Contact/Contact";
import Profile from "../Pages/Profile/Profile";
import Services from "../Pages/Services/Services";
import AnotherUpProfile from "../Pages/AnotherUpProfile/AnotherUpProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/industry/:id",
        element: <PrivetRoute><IndustryDetail></IndustryDetail></PrivetRoute>,
        loader: () => fetch('/api.json')
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/up-profile",
        element: <PrivetRoute><Profile></Profile></PrivetRoute>,
      },
      {
        path: "/another-upProfile",
        element: <PrivetRoute><AnotherUpProfile></AnotherUpProfile></PrivetRoute>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],

  },
]);