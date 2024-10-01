import React, { ReactElement, useCallback, useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { selectIIsAuthenticated, selectToken } from "../utils/Reselect";
import useCache from "../customHooks/useCache";
import { RootState } from "../redux/reducers";
import Sidenav from "../components/Sidenav";
import { Box } from "@mui/material";
import userPermissions from "../customHooks/verifyPermissions";
import verifyPermissions from "../customHooks/verifyPermissions";
export default function ControllerRoutes() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const userPermission = useSelector(
    (state: RootState) => state.autheticationReducer.userPermission
  );
  const isAuthenticated = useSelector(selectIIsAuthenticated);
  const { storageSetToken, storageToken } = useCache();

  useEffect(() => {
    if (isAuthenticated) {
      storageSetToken(token);
    }
  }, [token]);

  const routes = useMemo(() => {
    if (!isAuthenticated) return publicRoutes;

    return privateRoutes;
  }, [isAuthenticated]);

  const getRoutes = useCallback(() => {
    // return routes.map(({ element, path, type, key, collapse }) => {
    //   if (type === "private" && !storageToken) {
    //     return null;
    //   }
    //   if (collapse === true) {

    //   }
    //   return <Route key={key} element={element} path={path} />;
    // });

    return routes.map(({ element, key, path, permissions }) => {
      const mappedRoutes: ReactElement[] = [];
      if (!verifyPermissions(permissions, userPermission)) {
        return null;
      }

      mappedRoutes.push(<Route path={path} element={element} key={key} />);
      return mappedRoutes as ReactElement[];
    });
  }, [isAuthenticated, token]);

  return (
    <Box display={"flex" } flexDirection={"row"} bgcolor={"#fff"} width={"100%"} height={"100vh"}>
      {isAuthenticated && <Sidenav routes={routes} />}
      <Routes>
        {getRoutes()}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Box>
  );
}
