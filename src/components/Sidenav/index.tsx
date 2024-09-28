import React, { ReactElement, ReactNode, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { TypesRoutes } from "../../routes/types";
import { Box } from "@mui/material";
import { BoxCenter } from "../utils/BoxCenter";
import { SidenavBox } from "../../assets/themes/base/styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import verifyPermissions from "../../customHooks/verifyPermissions";

type TSidenavProps = {
  routes: TypesRoutes[];
};

export default function Sidenav({ routes }: TSidenavProps) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.autheticationReducer.isAuthenticated
  );

  const userPermission = useSelector(
    (state: RootState) => state.autheticationReducer.userPermission
  );

  console.log(routes);
  const renderLinks = useMemo(() => {
    const mappedRoutes: ReactElement[] = [];

    routes.map(({ key, path, permissions }) => {
      if (!verifyPermissions(permissions, userPermission)) return null;

      mappedRoutes.push(<Link to={path}>{key}</Link>);
    });

    return mappedRoutes;
  }, [isAuthenticated]);

  return <SidenavBox>{renderLinks.flat()}</SidenavBox>;
}
