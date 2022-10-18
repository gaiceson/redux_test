import { createSlice } from "@reduxjs/toolkit";

// 기존 리듀서 정의
//const INCREASE = "counter/INCREASE";
//const DECREASE = "counter/DECREASE";
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

let initialState = {
  number: 0,
  selectedItem: null,
};

// export default function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return { number: state.number + 1 };
//     case DECREASE:
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// }

const counterSlice = createSlice({
  name: "CounterRe",
  initialState,
  reducers: {
    getAllProduct(state, action) {
      state.number = action.payload.data;
    },
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
});

export default counterSlice.reducer;
