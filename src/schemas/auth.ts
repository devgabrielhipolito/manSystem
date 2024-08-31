import * as yup from "yup";

export const authSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export type AuthSchema = yup.InferType<typeof authSchema>;
