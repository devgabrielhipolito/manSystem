import { Navigate, RouteObject } from "react-router-dom";
import { Login } from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Register } from "../pages/register/Register";
import { Children } from "react";
import SideNav from "../components/sideNav/SideNav";

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
    element: <SideNav />,
    path: "/dashboard",
    type: "private",
    key: "sidenav",
    collapse: true,
  },

  {
    element: <p>Mais uma rota</p>,
    path: "/profile",
    type: "private",
    key: "teste",
    collapse: false,
  },
];
