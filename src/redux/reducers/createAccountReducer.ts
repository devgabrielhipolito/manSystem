import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticationRequestPayload, objectUser } from "../../types/auth";

type CreateState = {
  user: string | null;
  isCreatedAccount: boolean;
};

const initialState: CreateState = {
  user: null,
  isCreatedAccount: false,
};

const createAccountReducer = createSlice({
  name: "createAccount",
  initialState,
  reducers: {
    CREATE_ACCOUNT_REQUEST: (
      state: CreateState,
      { payload: data }: PayloadAction<objectUser>
    ) => {
      console.log(data);
    },
    CREATE_ACCOUNT_SUCCESS: (
      state: CreateState,
      action: PayloadAction<boolean>
    ) => ({
      ...state,
      isCreatedAccount: true,
    }),
  },
});

// Exporta as actions geradas pelo createSlice
export const { CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS } =
  createAccountReducer.actions;
export default createAccountReducer.reducer;
