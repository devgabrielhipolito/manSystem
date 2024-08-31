import { all, takeLatest } from "redux-saga/effects";
import { authenticateLoginSaga } from "../sagas/authentication";

export default function* rootSaga() {
  yield all([takeLatest("authenticate/login", authenticateLoginSaga)]);
}
