import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TextFieldInput } from "../assets/themes/base/styled";
import { ButtonCustom } from "../assets/themes/base/styled/button/Button";
import { useNavigate } from "react-router-dom";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

interface ComponentLoginProps {
  onSubmit: () => void;
  control: Control<{
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
  }>;
  register: UseFormRegister<{
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
  }>;

  error: FieldErrors<{
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
  }>;
}

export const ComponentRegister: React.FC<ComponentLoginProps> = ({
  control,
  error,
  onSubmit,
  register,
}) => {
  const navigate = useNavigate();

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
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextFieldInput
            {...register("name")}
            {...field}
            variant="outlined"
            error={!!error.name}
            label={error.name ? error.name?.message : "Seu nome"}
          />
        )}
      ></Controller>

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

      <Controller
        name="confirmpassword"
        control={control}
        render={({ field }) => (
          <TextFieldInput
            {...register("confirmpassword")}
            type="password"
            variant="outlined"
            error={!!error.password}
            {...field}
            label={
              error.password ? error.password?.message : "Confirme sua senha"
            }
          />
        )}
      ></Controller>
      <ButtonCustom variant="contained" onClick={onSubmit}>
        Sing Up
      </ButtonCustom>
      <ButtonCustom
        onClick={() => {
          navigate("/");
        }}
        variant="outlined"
      >
        Sing In
      </ButtonCustom>
    </Box>
  );
};
