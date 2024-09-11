import { SagaIterator } from "redux-saga";
import { put } from "redux-saga/effects";
import { AUTHENTICATION_REQUEST } from "../reducers/autheticationReducer";
import userApi from "../rtk_query/apiQuery"; //rtk query
import { authenticationRequest } from "../actions";
import { authenticationRequestPayload, objectUser } from "../../types/auth";

export function* AUTHENTICATION_REQUEST_SAGA(
  data: authenticationRequestPayload
) {
  try {
    put(AUTHENTICATION_REQUEST(data));
  } catch (error) {}
}
