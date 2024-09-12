import React from "react";
import { useAuthenticationUserMutation } from "../redux/rtkQuery/apiQuery";
import { objectUser } from "../types/auth";
import { authenticationRequest } from "../redux/actions";
import { AUTHENTICATION_REQUEST } from "../redux/reducers/autheticationReducer";
import { useDispatch } from "react-redux";

export default function useLoginQuery() {
  const [authenticationUser, { isLoading }] = useAuthenticationUserMutation();
  const dispatch = useDispatch();
  const fetch = async (data: objectUser) => {
    try {
      const response = await authenticationUser(data);

      if (!response.data) {
        dispatch(AUTHENTICATION_REQUEST(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetch,
    isLoading,
  };
}
