import React, { Children, createContext, useState } from "react";

export type UserProps = {
  name: string;
  token: string;
};

type AuthContextProps = {
  user: UserProps | null;
  login: (user: UserProps) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>({
    name: "teste",
    token: "2",
  });

  const login = (user: UserProps) => {
    console.log(user);
    setUser(user);
  };

  const logout = () => {
    console.log("Logout");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
