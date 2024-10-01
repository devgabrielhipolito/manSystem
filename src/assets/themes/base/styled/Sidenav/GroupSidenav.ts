import { Box, styled } from "@mui/material";

export const GroupSidenav = styled(Box)(({ theme }) => ({
  width: 250,
  height: "100%",
  background: theme.palette.primary.main,
  border: "none",
  display: "flex",
  justifyContent: "center",
}));
