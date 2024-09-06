import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { authenticateLogin } from "../../redux/actions/authenticationAction";
import { authSchema, AuthSchema } from "../../schemas/auth";
import { Box } from "@mui/material";
import ComponentLogin from "../../components/Login";
import { LayoutBase } from "../../assets/themes/base/layoutBase/LayoutBase";
import { TypographyText } from "../../assets/themes/base/styled";
import { pxToRem } from "../../assets/themes/functions/pxToRem";
import { BoxCenter, ComponentRegister } from "../../components";

export const Register = (): ReactElement => {
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
    <BoxCenter>
      <TypographyText
        mr={"auto"}
        fontWeight={500}
        variant="h1"
        fontSize={pxToRem(39)}
      >
        Crie sua conta
      </TypographyText>
      <TypographyText mr={"auto"} mt={3} fontSize={22}>
        Faça seu login para gerenciar os seus serivços
      </TypographyText>
      <ComponentRegister />
    </BoxCenter>
  );
};
