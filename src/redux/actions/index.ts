import { createAction } from "@reduxjs/toolkit";
import authenticationAction from "./authenticationAction";
import { objectUser } from "../../types/auth";

//authentication
export const authenticationRequest = createAction<objectUser>(
  authenticationAction.AUTHENTICATION_REQUEST
);
