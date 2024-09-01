import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Input = () => {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="on"
    >
      <TextField id="input-login" label="Seu email" variant="outlined" />
    </Box>
  );
};
