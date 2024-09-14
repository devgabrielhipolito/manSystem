import React from "react";
import { authenticationRequest } from "../redux/actions";

export type authenticationRequestPayload = ReturnType<
  typeof authenticationRequest
>;

export type objectUser = {
  email: string;
  password: string;
};

