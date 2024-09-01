import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "@emotion/react";
import { Light } from "../theme";
import { Box } from "@mui/system";

interface IThemeContextData {
  children: ReactNode;
}

interface IContext {
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IContext> = ({ children }) => {
  const themeSelector = Light;

  return (
    <ThemeContext.Provider value={{ children }}>
      <ThemeProvider theme={themeSelector}>
        <Box
          width="100w"
          height="100vh"
          margin={0}
          padding={0}
          boxSizing={"border-box"}
          bgcolor={themeSelector.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
