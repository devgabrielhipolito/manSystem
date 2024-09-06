import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface BoxCenterProps {
  children: ReactNode;
}

export const BoxCenter: React.FC<BoxCenterProps> = ({ children }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      maxWidth="90%"
      width="500px"
    >
      {children}
    </Box>
  );
};
