import React, { ReactElement } from "react";
import { userProvider } from "../utils/Permissions";

export default function verifyPermissions(
  permissions: userProvider[],
  userPermissio: string
) {
  if (!permissions.includes(userPermissio as userProvider)) {
    return false;
  } else {
    return true
  }
}
