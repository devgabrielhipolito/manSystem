import React, { act } from "react";
import {
  useAuthenticationUserMutation,
  useCreateAccountMutation,
} from "../redux/rtkQuery/apiQuery";
import { objectUser } from "../types/auth";
import { authenticationRequest, createAccountRequest } from "../redux/actions";
import { AUTHENTICATION_REQUEST } from "../redux/reducers/autheticationReducer";
import { useDispatch } from "react-redux";

export default function useLoginQuery() {
  const [authenticationUser, { isLoading: isAuthLoading }] =
    useAuthenticationUserMutation();
  const [createAccount, { isLoading: isRegisterLoading }] =
    useCreateAccountMutation();
  const dispatch = useDispatch();

  const fetchLogin = async (
    data: objectUser,
    action: "authentication" | "register"
  ) => {
    if (action === "authentication") {
      const response = await authenticationUser(data);

      if (response.data) {
        dispatch(authenticationRequest(data));
      }
    }
   else if (action === "register") {
      const response = await createAccount(data);

      if (response.data) {
        dispatch(createAccountRequest(data));
      }
    }
  };

  return {
    fetchLogin,
    isAuthLoading,
    isRegisterLoading,
  };
}
