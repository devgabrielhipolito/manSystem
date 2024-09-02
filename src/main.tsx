import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import store from "./redux/store/store";
import Login from "./pages/login/Login";
import { AppThemeProvider } from "./context/ThemeProvider";
import "./assets/style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <Provider store={store}>
        <Login />
      </Provider>
    </AppThemeProvider>
  </StrictMode>
);
