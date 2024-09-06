import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TextFieldInput } from "../assets/themes/base/styled";
import { ButtonCustom } from "../assets/themes/base/styled/button/Button";
import { useNavigate } from "react-router-dom";

export const ComponentRegister = () => {
  const navigate = useNavigate();
  function handle() {}

  return (
    <Box
      height="60vh"
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
        label="Digite seu email"
        variant="outlined"
      />

      <TextFieldInput
        id="input-name"
        type="text"
        label="Digite seu nome"
        variant="outlined"
      />

      <TextFieldInput
        id="input-password"
        type="password"
        label="Digite sua senha"
        variant="outlined"
      />

      <TextFieldInput
        id="input-confirm-password"
        type="password"
        label="Confirme sua senha"
        variant="outlined"
      />

      <ButtonCustom onClick={handle} variant="contained">
        Sing Up
      </ButtonCustom>
      <ButtonCustom
        onClick={() => {
          navigate("/");
        }}
        variant="outlined"
      >
        Ja tem um login?
      </ButtonCustom>
    </Box>
  );
};
