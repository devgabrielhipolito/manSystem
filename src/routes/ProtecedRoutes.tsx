import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { Register } from "../pages/register/Register";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

function ProtecedRoutes() {
  return <p>teste</p>;
}

export default ProtecedRoutes;
