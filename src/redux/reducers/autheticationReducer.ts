import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticationRequestPayload, objectUser } from "../../types/auth";

type AuthState = {
  user: string | null;
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: true,
};

const authenticationReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    AUTHENTICATION_REQUEST: (
      state: AuthState,
      { payload: data }: PayloadAction<objectUser>
    ) => {
      console.log(data);
    },
    AUTHENTICATION_SUCCESS: (
      state: AuthState,
      action: PayloadAction<boolean>
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
