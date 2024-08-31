import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterType {
  value: number;
}

const initialState: CounterType = {
  value: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      console.log(action);
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
