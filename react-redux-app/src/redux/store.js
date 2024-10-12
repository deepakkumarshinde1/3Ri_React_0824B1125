import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter.reducer";

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
  },
});

export default store;
