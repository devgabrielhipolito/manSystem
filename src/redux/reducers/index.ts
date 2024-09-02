import { combineReducers } from "redux";
import autheticationReducer from "./autheticationReducer";
import themeReducer from "./themeReducer";
const rootReducer = combineReducers({
  autheticationReducer,
  themeReducer

});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
