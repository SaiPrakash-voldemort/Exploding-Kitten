import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const DefuseBomb = createSlice({
  name: "defuseBomb",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    zero: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { increment, decrement, zero } = DefuseBomb.actions;
export default DefuseBomb.reducer;
