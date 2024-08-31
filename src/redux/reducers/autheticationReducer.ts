import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

const authenticateReducer = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
});

export const { login } = authenticateReducer.actions;
export default authenticateReducer.reducer;
