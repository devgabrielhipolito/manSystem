import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import {
  authenticationRequest,
  createAccountUserRequest,
} from "../../redux/actions/";
import { authSchema, AuthSchema } from "../../schemas/auth";
import { TypographyText } from "../../assets/themes/base/styled";
import { pxToRem } from "../../assets/themes/functions/pxToRem";
import { BoxCenter, ComponentRegister } from "../../components";
import { SingUpSchema, singUpSchema } from "../../schemas/SingUp";

export const Register = (): ReactElement => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingUpSchema>({
    resolver: yupResolver(singUpSchema),
  });

  const dispatch = useDispatch();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    dispatch(createAccountUserRequest(data));
  });

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
      <ComponentRegister
        error={errors}
        control={control}
        register={register}
        onSubmit={onSubmit}
      />
    </BoxCenter>
  );
};
