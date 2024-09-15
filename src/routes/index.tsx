import { createBrowserRouter } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { RouteObject } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";



export function returnRoutes(): RouteObject[] {
  if (true) {
    return privateRoutes;
  }
  return publicRoutes;
}

export const router = createBrowserRouter(returnRoutes());
