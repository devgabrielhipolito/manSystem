import React, { ReactElement, ReactNode, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { TypesRoutes } from "../../routes/types";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { BoxCenter } from "../utils/BoxCenter";
import { SidenavBox } from "../../assets/themes/base/styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import verifyPermissions from "../../customHooks/verifyPermissions";
import { LinkItemSidenav } from "../../assets/themes/base/styled/Sidenav/LinksitemSidenav";
import { GroupSidenav } from "../../assets/themes/base/styled/Sidenav/GroupSidenav";

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

    routes.map(({ key, path, permissions, icon }) => {
      if (!verifyPermissions(permissions, userPermission)) return null;

      mappedRoutes.push(
        <LinkItemSidenav component={Link} to={path}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={key} />
        </LinkItemSidenav>
      );
    });

    return mappedRoutes;
  }, [isAuthenticated]);

  return (
    <>
      <Drawer
        sx={{ width: 310, background: "red" }}
        open={true}
        variant="persistent"
      >
        <GroupSidenav>
          <List
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {renderLinks.flat()}
          </List>
        </GroupSidenav>
      </Drawer>
    </>
  );
}
