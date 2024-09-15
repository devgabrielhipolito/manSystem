import { RouteObject } from "react-router-dom";
import { Login } from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Register } from "../pages/register/Register";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";





export const privateRoutes: RouteObject[] = [
  {
    element: <Dashboard />,
    path: "/",
  },
];

export const publicRoutes: RouteObject[] = [
  {
    element: <Login />,
    path: "/",
  },
  {
    element: <Register />,
    path: "/register",
  },
];
