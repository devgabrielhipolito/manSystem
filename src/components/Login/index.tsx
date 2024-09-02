import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { themeSelector } from "../../redux/reducers/themeReducer";
import { useDispatch } from "react-redux";
import { Light } from "../../theme";

export default function ComponentLogin() {
  const dispatch = useDispatch();
  function handle() {
    dispatch(themeSelector(Light));
  }

  return (
    <Box
      height="35vh"
      display="flex"
      padding="2%"
      width="100%"
      justifyContent="space-around"
      alignItems="center"
      flexDirection="column"
      component="form"
    >
      <TextField
        sx={{ width: "inherit" }}
        id="input-email"
        type="text"
        label="Seu email"
        variant="outlined"
      />
      <TextField
        sx={{ width: "inherit" }}
        id="input-login"
        type="password"
        label="Sua senha"
        variant="outlined"
      />
      <Button sx={{ width: 120 }} onClick={handle} variant="contained">
        Login
      </Button>
    </Box>
  );
}
