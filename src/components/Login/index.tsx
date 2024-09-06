import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TextFieldInput } from "../../assets/themes/base/styled";
import { ButtonCustom } from "../../assets/themes/base/styled/button/Button";
import { useNavigate } from "react-router-dom";

export default function ComponentLogin() {
  const navigate = useNavigate();
  function handle() {}

  return (
    <Box
      height="45vh"
      display="flex"
      maxWidth="100%"
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
        id="input-login"
        type="password"
        label="Sua senha"
        variant="outlined"
      />
      <ButtonCustom onClick={handle} variant="contained">
        Sing In
      </ButtonCustom>
      <ButtonCustom
        onClick={() => {
          navigate("/register");
        }}
        variant="outlined"
      >
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
