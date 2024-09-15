import { combineReducers } from "redux";
import autheticationReducer from "./autheticationReducer";
import userApi from "../rtkQuery/apiQuery";
import createAccountReducer from "./createAccountReducer";
const rootReducer = combineReducers({
  autheticationReducer,
  [userApi.reducerPath]: userApi.reducer,
  createAccountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
