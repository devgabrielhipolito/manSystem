import { combineReducers } from "redux";
import autheticationReducer from "./autheticationReducer";
import userApi from "../rtk_query/apiQuery";
const rootReducer = combineReducers({
  autheticationReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
