import React, { useCallback, useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { AuthContext } from "../context/AuthProvider";
import { authenticationLogout } from "../redux/actions";
import { selectIIsAuthenticated, selectToken } from "../utils/Reselect";
export default function ControllerRoutes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticad = useSelector(
    (state: RootState) => state.autheticationReducer.isAuthenticated
  );
  const isAuthenticated = useSelector(selectIIsAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticad]);

  useEffect(() => {
    if (location.pathname === "/") dispatch(authenticationLogout(false));
  }, [navigate]);

  const getRoutes = useCallback(() => {
    return routes.map(({ element, path, type, key }) => {
      if (type === "private" && !isAuthenticated) {
        return null;
      }
      return <Route key={key} element={element} path={path} />;
    });
  }, [isAuthenticated]);

  return (
    <div>
      <Routes>
        {getRoutes()}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
