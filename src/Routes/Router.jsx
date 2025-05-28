import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Signup from "../Pages/SignUp";
import LoginPage from "../Pages/Login";
import ErrorPage from "../Pages/Error";
import Jobs from "../Pages/Jobs";
import AddJobPost from "../Pages/AddJobPost";

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
        path: '/add-jobs',
        Component: AddJobPost,
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