import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { authSchema, AuthSchema } from "../../schemas/auth";
import { ComponentLogin } from "../../components/Login";
import { TypographyText } from "../../assets/themes/base/styled";
import { pxToRem } from "../../assets/themes/functions/pxToRem";
import { BoxCenter } from "../../components";
import { authenticationRequest } from "../../redux/actions/";
import userApi, {
  useAuthenticationUserMutation,
} from "../../redux/rtkQuery/apiQuery";
import { objectUser } from "../../types/auth";
import { RootState } from "../../redux/reducers";

export const Login = (): ReactElement => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({
    resolver: yupResolver(authSchema),
  });

  const [authenticationUser, { isSuccess, isLoading, isError }] =
    useAuthenticationUserMutation();

  const onSubmit = handleSubmit((data: objectUser) => {
    const response = authenticationUser(data);
    console.log(response);
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
