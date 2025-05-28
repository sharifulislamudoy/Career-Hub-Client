import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Signup from "../Pages/SignUp";
import LoginPage from "../Pages/Login";
import ErrorPage from "../Pages/Error";
import Jobs from "../Pages/Jobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/jobs',
        Component: Jobs,
      },
      {
        path: '/sign-up',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        Component: LoginPage
      }
    ]
  },
]);