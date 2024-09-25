import { createContext, ReactNode, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { authenticationSucess } from "../redux/actions";
import { useNavigate } from "react-router-dom";

interface teste {
  isAuthenticadMemo: boolean;
}

const AuthContext = createContext({} as teste);

interface iContext {
  children: ReactNode;
}

const AuthProvider: React.FC<iContext> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(
    (state: RootState) => state.autheticationReducer.token
  );
  const isAuthenticad = useSelector(
    (state: RootState) => state.autheticationReducer.isAuthenticated
  );

  const isAuthenticadMemo = useMemo(() => isAuthenticad, [isAuthenticad]);
  const tokenMemo = useMemo(() => token, [token]);

  useEffect(() => {
    const cache = localStorage.getItem("token");
    if (cache) {
      dispatch(authenticationSucess(true));
    }
  }, []);

  useEffect(() => {
    if (tokenMemo) {
      localStorage.setItem("token", tokenMemo);
    }

    if (isAuthenticad) {
      navigate("/dashboard");
    }
  }, [isAuthenticadMemo, tokenMemo]);

  return (
    <AuthContext.Provider value={{ isAuthenticadMemo }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
