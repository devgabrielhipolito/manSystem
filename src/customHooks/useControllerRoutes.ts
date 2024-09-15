import React from "react";
import { RootState } from "../redux/reducers";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/routes";

export default function useControllerRoutes() {
  const isAuthenticad = useSelector(
    (state: RootState) => state.autheticationReducer.isAuthenticated
  );
  function returnRoutes(): RouteObject[] {
    if (isAuthenticad) {
      return privateRoutes;
    }
    return publicRoutes;
  }
  const router = createBrowserRouter(returnRoutes());
  return {
    router,
  };
}
