import { createContext, ReactElement, ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { authenticationSucess } from "../redux/actions";
import { replace, useNavigate } from "react-router-dom";

const AuthContext = createContext({});

interface iContext {
  children: ReactNode;
}

const AuthProvider: React.FC<iContext> = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(
    (state: RootState) => state.autheticationReducer.token
  );
  if (token) {
    dispatch(authenticationSucess(true));
  }

  console.log(token);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
