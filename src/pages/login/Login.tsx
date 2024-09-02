import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { authenticateLogin } from "../../redux/actions/authenticationAction";
import { authSchema, AuthSchema } from "../../schemas/auth";
import { createTheme, FilledInput, InputLabel } from "@mui/material";
import { Input } from "../../components/Inputs/index";
import { Box } from "@mui/material";
import { yellow } from "@mui/material/colors";
import ComponentLogin from "../../components/Login";
export const Login = (): ReactElement => {
  const theme = createTheme();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({
    resolver: yupResolver(authSchema),
  });

  const dispatch = useDispatch();
  function handleLogin(data: AuthSchema) {
    authenticateLogin("2");
  }
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      width="100%"
    >
      <Box width="30%">
        <h1 id="login-title">Login</h1>
        <p id="login-paragrafh">Faça seu login para gerenciar os seus serivços</p>
        <ComponentLogin />
      </Box>
    </Box>
  );
};

export default Login;
