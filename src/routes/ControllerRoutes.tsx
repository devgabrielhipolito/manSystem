import React, { ReactElement, useCallback, useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { selectIIsAuthenticated, selectToken } from "../utils/Reselect";
import useCache from "../customHooks/useCache";
import { RootState } from "../redux/reducers";
export default function ControllerRoutes() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const isAuthenticated = useSelector(selectIIsAuthenticated);
  const { storageSetToken, storageToken } = useCache();

  useEffect(() => {
    if (isAuthenticated) {
      storageSetToken(token);
      navigate("/dashboard", { replace: false });
    }
  }, [token]);

  const getRoutes = useCallback(() => {
    // return routes.map(({ element, path, type, key, collapse }) => {
    //   if (type === "private" && !storageToken) {
    //     return null;
    //   }
    //   if (collapse === true) {

    //   }
    //   return <Route key={key} element={element} path={path} />;
    // });

    return routes.map(({ collapse, element, key, path, type }) => {
      const mappedRoutes: ReactElement[] = [];
      if (collapse === true) {
        const colapseRoutes = <Route element={element} key={key} path={path} />;
        mappedRoutes.push(colapseRoutes);
      }

      mappedRoutes.push(<Route path={path} element={element} key={key} />);

      return mappedRoutes.flat() as ReactElement[];
    });
  }, [isAuthenticated]);

  return (
    <div>
      <Routes>
        
        {getRoutes().flat()}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
