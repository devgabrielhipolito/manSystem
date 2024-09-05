import { Provider } from "react-redux";
import { LayoutBase } from "./assets/themes/base/layoutBase/LayoutBase";
import store from "./redux/store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <LayoutBase>
        <RouterProvider router={router} />
      </LayoutBase>
    </Provider>
  );
}

export default App;
