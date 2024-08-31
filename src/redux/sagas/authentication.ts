import { SagaIterator } from "redux-saga";
import { put } from "redux-saga/effects";
import { login } from "../reducers/autheticationReducer";

export function* authenticateLoginSaga(data: any): SagaIterator {
  put(login(data));
}
