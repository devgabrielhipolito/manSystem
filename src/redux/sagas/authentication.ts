import { put } from "redux-saga/effects";
import { AUTHENTICATION_REQUEST } from "../reducers/autheticationReducer";
import { authenticationRequestPayload } from "../../types/auth";

export function* AUTHENTICATION_REQUEST_SAGA(
  data: authenticationRequestPayload
) {}
