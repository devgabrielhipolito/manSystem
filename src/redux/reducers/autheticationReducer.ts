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

    AUTHENTICATION_LOGOUT: (state: AuthState) => ({
      ...state,
      isAuthenticated: false,
    }),
  },
});

// Exporta as actions geradas pelo createSlice
export const {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_LOGOUT,
} = authenticationReducer.actions;
export default authenticationReducer.reducer;
