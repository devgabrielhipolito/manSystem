import { Navigate, RouteObject } from "react-router-dom";
import { Login } from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Register } from "../pages/register/Register";
import { Children } from "react";
import SideNav from "../components/Sidenav";
import { TypesRoutes } from "./types";
import { userProvider } from "../utils/Permissions";

export const privateRoutesss: RouteObject[] = [
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

export const publicRoutesss: RouteObject[] = [
  {
    element: <Login />,
    path: "/",
  },
  {
    element: <Register />,
    path: "/register",
  },
];

export const publicRoutes: TypesRoutes[] = [
  {
    element: <Login />,
    path: "/",
    key: "login",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },
];

export const privateRoutes: TypesRoutes[] = [
  {
    element: <Dashboard />,
    path: "/",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },

  {
    element: <p>Mais uma rota</p>,
    path: "/clientes",
    key: "clientes",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },

  {
    element: <p>Mais uma rota</p>,
    path: "/fornecedores",
    key: "fornecedores",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },

  {
    element: <p>Mais uma rota</p>,
    path: "/estoque",
    key: "Estoque",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },
  {
    element: <p>Mais uma rota</p>,
    path: "/logs",
    key: "logs",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },
  {
    element: <p>Mais uma rota</p>,
    path: "/admin",
    key: "admin",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },
];
