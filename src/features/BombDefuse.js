import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const BombDefuse = createSlice({
  name: "bombDefuse",
  initialState,
  reducers: {
    incrementBomb: (state) => {
      state.value += 1;
    },
    decrementBomb: (state) => {
      state.value -= 1;
    },
    zeroBomb: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { incrementBomb, decrementBomb, zeroBomb } = BombDefuse.actions;
export default BombDefuse.reducer;
