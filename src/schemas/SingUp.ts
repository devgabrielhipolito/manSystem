import * as yup from "yup";

export const singUpSchema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().email().required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
    confirmpassword: yup.string().required("Confirme sua senha"),
  })
  .required();

export type SingUpSchema = yup.InferType<typeof singUpSchema>;
