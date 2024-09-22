import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticationRequestPayload, objectUser } from "../../types/auth";

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

type ResponseAuthType = {
  status: string;
  token: string;
};

const authenticationReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    AUTHENTICATION_REQUEST: (
      state: AuthState,
      { payload: data }: PayloadAction<ResponseAuthType>
    ) => ({
      ...state,
      token: data.token,
    }),
    AUTHENTICATION_SUCCESS: (
      state: AuthState,
      { payload: data }: PayloadAction<boolean>
    ) => ({
      ...state,
      isAuthenticated: true,
    }),
  },
});

// Exporta as actions geradas pelo createSlice
export const { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS } =
  authenticationReducer.actions;
export default authenticationReducer.reducer;
