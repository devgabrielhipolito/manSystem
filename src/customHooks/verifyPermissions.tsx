import React, { ReactElement } from "react";
import { userProvider } from "../utils/Permissions";

export default function verifyPermissions(
  permissions: userProvider[],
  userPermissio: string
) {
  if (!userPermissio && permissions.includes(userProvider.WITHOUT_PERMISSION)) {
    return true;
  }

  if (!permissions.includes(userProvider.NO_ROLE_REQUIRED)) {
    return true;
  }
  if (!permissions.includes(userPermissio as userProvider)) {
    return false;
  } else {
    return true;
  }
}
