import { RouteObject } from "react-router-dom";
import { Login } from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Register } from "../pages/register/Register";

export const isAuthenticad = false;

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
