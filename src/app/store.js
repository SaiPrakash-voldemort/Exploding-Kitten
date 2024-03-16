import { configureStore } from "@reduxjs/toolkit";
import DefuseBomb from "../features/DefuseBomb";
import BombDefuse from "../features/BombDefuse";

export const store = configureStore({
  reducer: {
    defuseBomb: DefuseBomb,
    bombDefuse: BombDefuse,
  },
});
