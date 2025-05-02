/* ---------Redux Toolkit--------- */

import { createSlice, configureStore } from "@reduxjs/toolkit";

// Slice (Actions + Reducer Combined)
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; }
  }
});

// Store
const store = configureStore({ reducer: counterSlice.reducer });

// Actions (Auto-Generated)
export const { increment } = counterSlice.actions;
