import { ReactElement } from "react";
import { userProvider } from "../../utils/Permissions";

export type TypesRoutes = {
  key?: string;
  path: string;
  element: ReactElement;
  permissions: userProvider[];
};
