import { createAction } from "@reduxjs/toolkit";
import authenticationAction from "./authenticationAction";
import { objectUser } from "../../types/auth";
import createAccountActions from "./createAccountActions";

//authentication
export const authenticationRequest = createAction<objectUser>(
  authenticationAction.AUTHENTICATION_REQUEST
);
export const authenticationSucess = createAction<boolean>(
  authenticationAction.AUTHENTICATION_SUCCESS
);

//create account
export const createAccountRequest = createAction<objectUser>(
  createAccountActions.CREATE_ACCOUNT_REQUEST
);
export const createAccountSucess = createAction<boolean>(
  createAccountActions.CREATE_ACCOUNT_SUCCESS
);
