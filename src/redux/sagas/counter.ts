import { SagaIterator } from "redux-saga";
import { put } from "redux-saga/effects";
import { AUTHENTICATION_REQUEST } from "../reducers/autheticationReducer";
import userApi from "../rtkQuery/apiQuery"; //rtk query
import { authenticationRequest } from "../actions";
import { authenticationRequestPayload, objectUser } from "../../types/auth";
import { increment } from "../reducers/counterSlices";

export function* CounterS(data: number): SagaIterator {
  try {
    console.log(data);
    put(increment(data));
  } catch (error) {}
}
