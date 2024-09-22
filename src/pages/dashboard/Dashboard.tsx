import { Box } from "@mui/material";
import { ReactElement } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Dashboard = (): ReactElement => {
  return (
    <Box>
      <h1>Você esta logado</h1>
      <Outlet />
    </Box>
  );
};

export default Dashboard;
