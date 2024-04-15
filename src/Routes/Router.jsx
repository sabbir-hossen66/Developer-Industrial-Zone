
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
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
        path: "/about",
        element: <div>about section</div>,
      },
      {
        path: "/up-profile",
        element: <div>up-profile</div>,
      },
      {
        path: "/login",
        element: <div>login</div>,
      },
    ],

  },
]);