import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticationRequestPayload, objectUser } from "../../types/auth";

const initialState = {
  data: "",
};

const authenticationReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    AUTHENTICATION_REQUEST: (
      state,
      action: PayloadAction<authenticationRequestPayload>
    ) => {
      console.log("REDUCER");
      action.payload;
    },
    AUTHENTICATION_SUCCESS: (state, action: PayloadAction<string>) => {
      state.data = action.payload; // Você pode definir outra lógica aqui para o sucesso
    },
  },
});

// Exporta as actions geradas pelo createSlice
export const { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS } =
  authenticationReducer.actions;
export default authenticationReducer.reducer;
