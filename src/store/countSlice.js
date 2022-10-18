import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  age: 22,
};

export const counterSlice = createSlice({
  name: "counter-test",
  initialState,
  reducers: {
    plus: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      state.value -= 1;
    },
    setName: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { plus, minus, setName } = counterSlice.actions;
export default counterSlice.reducer;
