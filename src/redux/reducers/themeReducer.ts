import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeSelector: (state, action: PayloadAction) => {
      console.log(state);
    },
  },
});

export const { themeSelector } = themeReducer.actions;
export default themeReducer.reducer;
