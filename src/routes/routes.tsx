import { Navigate, RouteObject } from "react-router-dom";
import { Login } from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Register } from "../pages/register/Register";

export const privateRoutes: RouteObject[] = [
  {
    element: <Dashboard />,
    path: "/",

    children: [
      {
        path: "teste",
        element: <p>Logado</p>,
      },
    ],
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

export const routes = [
  {
    element: <Login />,
    path: "/",
    type: "public",
    key: "login",
    collapse: false,
  },
  {
    element: <Dashboard />,
    path: "/dashboard",
    type: "private",
    key: "dashboard",
    collapse: true,
  },
];
