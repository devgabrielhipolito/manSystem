import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { AppThemeProvider } from "./context/ThemeProvider";
import "./assets/style.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <Provider store={store}>
        <App/>
      </Provider>
    </AppThemeProvider>
  </StrictMode>
);
