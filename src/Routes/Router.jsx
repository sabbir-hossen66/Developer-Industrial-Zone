
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
import UpdatedProfile from "../Pages/UpdatedProfile/UpdatedProfile";
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
        path: "/updated-profile",
        element: <UpdatedProfile></UpdatedProfile>,
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