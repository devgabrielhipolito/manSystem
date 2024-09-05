import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { TextFieldInput, TypographyText } from "../../assets/themes/base/styled";
import { ButtonCustom } from "../../assets/themes/base/styled/button/Button";

export default function ComponentLogin() {
  function handle() {}

  return (
    <Box
      height="45vh"
      display="flex"
      width="100%"
      justifyContent="space-around"
      alignItems="center"
      flexDirection="column"
      component="form"
    >
      <TextFieldInput
        id="input-email"
        type="text"
        label="Seu email"
        variant="outlined"
      />
      <TextFieldInput
        defaultValue={"text"}
        id="input-login"
        type="password"
        label="Sua senha"
        variant="outlined"
      />
      <ButtonCustom id="teste"  onClick={handle} variant="contained">
        Sing In
      </ButtonCustom>
      <ButtonCustom  onClick={handle} variant="outlined">
        Sing Up
      </ButtonCustom>
      <Typography
        color="#4b4b4b"
        fontSize={12}
        component="a"
        href="/"
        variant="button"
      >
        {" "}
        Esqueceu sua senha?
      </Typography>
    </Box>
  );
}
