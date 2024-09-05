import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { authenticateLogin } from "../../redux/actions/authenticationAction";
import { authSchema, AuthSchema } from "../../schemas/auth";
import { Box, styled, Typography } from "@mui/material";
import ComponentLogin from "../../components/Login";
import { LayoutBase } from "../../assets/themes/base/layoutBase/LayoutBase";
import { TypographyText } from "../../assets/themes/base/styled";
import { pxToRem } from "../../assets/themes/functions/pxToRem";

export const Login = (): ReactElement => {
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
    <LayoutBase>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
        flexDirection="column"
        height="100vh"
        width="100%"
      >
        <Box   width="30%">
          <TypographyText fontWeight={500} variant="h1" fontSize={pxToRem(39)}>
            Faça seu login
          </TypographyText>
          <TypographyText mt={3} fontSize={22}>
            Faça seu login para gerenciar os seus serivços
          </TypographyText>
          <ComponentLogin />
        </Box>
      </Box>
    </LayoutBase>
  );
};

export default Login;
