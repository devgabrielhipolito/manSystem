import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { AppThemeProvider } from "./context/ThemeProvider";
import "./assets/style.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AppThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
