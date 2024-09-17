import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema, AuthSchema } from "../../schemas/auth";
import { ComponentLogin } from "../../components/Login";
import { TypographyText } from "../../assets/themes/base/styled";
import { pxToRem } from "../../assets/themes/functions/pxToRem";
import { BoxCenter } from "../../components";
import { objectUser } from "../../types/auth";
import useLoginQuery from "../../customHooks/useApiQuery";

export const Login = ({}): ReactElement => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({
    resolver: yupResolver(authSchema),
  });

  const { dispatch, isLoading } = useLoginQuery();

  const onSubmit = handleSubmit((data) => {
    dispatch({ data, action: "authentication" });
  });

  return (
    <BoxCenter>
      <TypographyText
        mr={"auto"}
        fontWeight={500}
        variant="h1"
        fontSize={pxToRem(39)}
      >
        Faça seu login
      </TypographyText>
      <TypographyText mr={"auto"} mt={3} fontSize={22}>
        Faça seu login para gerenciar os seus serviços
      </TypographyText>
      <ComponentLogin
        error={errors}
        control={control}
        register={register}
        onSubmit={onSubmit}
      />
      {isLoading && <p>Carregando</p>}
    </BoxCenter>
  );
};

export default Login;
