import { all, takeLatest } from "redux-saga/effects";
import { AUTHENTICATION_REQUEST_SAGA } from "../sagas/authentication";
import authenticationActions from "../actions/authenticationAction";
import { CounterS } from "./counter";

export default function* rootSaga() {
  yield all([
    takeLatest(
      "authentication/AUTHENTICATION_REQUEST",
      AUTHENTICATION_REQUEST_SAGA
    ),
  ]);
}
