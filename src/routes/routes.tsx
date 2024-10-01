import { Navigate, RouteObject } from "react-router-dom";
import { Login } from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Register } from "../pages/register/Register";
import { Children } from "react";
import SideNav from "../components/Sidenav";
import { TypesRoutes } from "./types";
import { userProvider } from "../utils/Permissions";
import { HomeIcon } from "../assets/Icons/HomeIcon";
import { ConfigIcon } from "../assets/Icons/ConfigIcon";

export const publicRoutes: TypesRoutes[] = [
  {
    element: <Login />,
    path: "/",
    key: "login",
    permissions: [userProvider.NO_ROLE_REQUIRED, userProvider.NO_ROLE_REQUIRED],
  },
  {
    element: <p>So um boss pode visualizar esta rota</p>,
    path: "/boss",
    key: "boss",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },
];

export const privateRoutes: TypesRoutes[] = [
  {
    element: <Dashboard />,
    path: "/",
    icon: <HomeIcon />,
    key: "Serviços",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },

  {
    element: <p>clientes</p>,
    path: "/clientes",
    key: "clientes",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },

  {
    element: <p>fornecedores</p>,
    path: "/fornecedores",
    key: "fornecedores",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },

  {
    element: <p>Mais uma rota</p>,
    path: "/Relatorios",
    key: "Relatorios",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },

  {
    element: <p>Mais uma rota</p>,
    path: "/settings",
    icon: <ConfigIcon />,
    key: "Configurações",
    permissions: [userProvider.NO_ROLE_REQUIRED],
  },
];
