import { LayoutBase } from "./assets/themes/base/layoutBase/LayoutBase";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <LayoutBase>
      <RouterProvider router={router} />
    </LayoutBase>
  );
}

export default App;
