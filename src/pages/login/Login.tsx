import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { authenticateLogin } from "../../redux/actions/authenticationAction";
import { authSchema, AuthSchema } from "../../schemas/auth";
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
    console.log(data)

  }
  return (
    <div>
      <h1>ManSys Login</h1>
      <form onSubmit={handleSubmit(handleLogin)} action="">
        <label htmlFor="">
          <p>Seu email</p>
          <input {...register("email")}  type="text" placeholder="digite seu email" />
        </label>
        <label htmlFor="">
          <p>Sua senha</p>
          <input
            {...register("password")}
            type="password"
            placeholder="digite sua senha"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
