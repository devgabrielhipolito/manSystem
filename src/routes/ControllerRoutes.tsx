import React, { useCallback, useContext } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { AuthContext } from "../context/AuthProvider";
export default function ControllerRoutes() {
  const {isAuthenticadMemo  } = useContext(AuthContext);

  const getRoutes = useCallback(() => {
    return routes.map(({ element, path, type, key }) => {
      if (type === "private" && !isAuthenticadMemo) {
        return null;
      }
      return <Route key={key} element={element} path={path} />;
    });
  }, [isAuthenticadMemo]);

  return (
    <div>
      <Routes>
        {getRoutes()}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
