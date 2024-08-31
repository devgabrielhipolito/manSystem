import { createAction } from "@reduxjs/toolkit";

export const authenticateLogin = createAction<string>("authenticate/login");
