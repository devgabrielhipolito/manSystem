import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import userApi from "../rtk_query/apiQuery";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, userApi.middleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export default store;
