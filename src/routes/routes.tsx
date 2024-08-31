import { RouteObject } from "react-router-dom";
import { Login } from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";

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
];
