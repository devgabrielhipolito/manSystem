import { combineReducers } from "redux";
import autheticationReducer from "./autheticationReducer";
const rootReducer = combineReducers({
  autheticationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
