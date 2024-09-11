import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticationRequestPayload, objectUser } from "../../types/auth";
import { act } from "react";

const initialState = {
  user: [],
  loading: false,
  isError: null,
};

const authenticationReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    AUTHENTICATION_REQUEST: (
      state,
      {
        payload: data,
      }: PayloadAction<Pick<authenticationRequestPayload, "payload">>
    ) => {
      console.log(data);
    },
    AUTHENTICATION_SUCCESS: (state, action: PayloadAction<boolean>) => {
      state.loading = !action.payload;
      return { ...state };
    },
  },
});

// Exporta as actions geradas pelo createSlice
export const { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS } =
  authenticationReducer.actions;
export default authenticationReducer.reducer;
