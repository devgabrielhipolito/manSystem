import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticationRequestPayload, objectUser } from "../../types/auth";
import { act } from "react";

type AuthState = {
  user: string | null;
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authenticationReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    AUTHENTICATION_REQUEST: (
      state: AuthState,
      {
        payload: data,
      }: PayloadAction<Pick<authenticationRequestPayload, "payload">>
    ) => {
      console.log(data);
    },
    AUTHENTICATION_SUCCESS: (
      state: AuthState,
      action: PayloadAction<boolean>
    ) => {
    },
  },
});

// Exporta as actions geradas pelo createSlice
export const { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS } =
  authenticationReducer.actions;
export default authenticationReducer.reducer;
