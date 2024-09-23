import React, { useCallback, useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
export default function ControllerRoutes() {
  const isAuthenticad = useSelector(
    (state: RootState) => state.autheticationReducer.isAuthenticated
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticad) {
      navigate("/dashboard");
    }
  }, [isAuthenticad, navigate]);

  const getRoutes = useCallback(() => {
    return routes.map(({ element, path, type }) => {
      if (type === "private" && !isAuthenticad) {
        return null;
      }
      return <Route element={element} path={path} />;
    });
  }, [isAuthenticad]);

  return (
    <div>
      <Routes>
        {getRoutes()}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
