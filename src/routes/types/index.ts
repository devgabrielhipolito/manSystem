import { ReactElement } from "react";
import { userProvider } from "../../utils/Permissions";

export type TypesRoutes = {
  key?: string;
  icon?: JSX.Element;
  path: string;
  element: ReactElement;
  permissions: userProvider[];
};
