import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Input = () => {
  return (
    <Box component="form" noValidate autoComplete="on">
      <TextField
        id="input-email"
        type="text"
        label="Seu email"
        variant="outlined"
      />
      <TextField
        id="input-login"
        type="password"
        label="Sua senha"
        variant="outlined"
      />

    </Box>
  );
};
