import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TypographyText } from "../../assets/themes/base/styled";
import { pxToRem } from "../../assets/themes/functions/pxToRem";
import { BoxCenter, ComponentRegister } from "../../components";
import { SingUpSchema, singUpSchema } from "../../schemas/SingUp";
import useApiQuery from "../../customHooks/useApiQuery";

export const Register = (): ReactElement => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingUpSchema>({
    resolver: yupResolver(singUpSchema),
  });

  const { dispatchAction } = useApiQuery();

  const onSubmit = handleSubmit((data) => {
    dispatchAction({ data, action: "createAccount" });
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
