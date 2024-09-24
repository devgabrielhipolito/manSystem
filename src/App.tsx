import { LayoutBase } from "./assets/themes/base/layoutBase/LayoutBase";
import { RouterProvider } from "react-router-dom";
import useControllerRoutes from "./customHooks/useControllerRoutes";
import ControllerRoutes from "./routes/ControllerRoutes";

function App() {
  return (
    <LayoutBase>
      <ControllerRoutes />
    </LayoutBase>
  );
}

export default App;
