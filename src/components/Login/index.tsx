import Box from "@mui/material/Box";
import { FormControl, Typography } from "@mui/material";
import { TextFieldInput } from "../../assets/themes/base/styled";
import { ButtonCustom } from "../../assets/themes/base/styled/button/Button";
import { useNavigate } from "react-router-dom";
import React from "react";

import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

interface ComponentLoginProps {
  onSubmit: () => void;
  control: Control<{
    email: string;
    password: string;
  }>;
  register: UseFormRegister<{
    email: string;
    password: string;
  }>;

  error: FieldErrors<{
    email: string;
    password: string;
  }>;
}

export const ComponentLogin: React.FC<ComponentLoginProps> = ({
  error,
  control,
  onSubmit,
  register,
}) => {
  const navigate = useNavigate();

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
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextFieldInput
            {...register("email")}
            {...field}
            variant="outlined"
            error={!!error.email}
            label={error.email ? error.email?.message : "Seu email"}
          />
        )}
      ></Controller>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextFieldInput
            {...register("password")}
            type="password"
            variant="outlined"
            error={!!error.password}
            {...field}
            label={error.password ? error.password?.message : "Sua senha"}
          />
        )}
      ></Controller>
      <ButtonCustom variant="contained" onClick={onSubmit}>
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
};
