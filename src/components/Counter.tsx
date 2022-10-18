import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;






// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store";
// import { down, init, up } from "../store/counterSlice";
// import React from "react";

// function Counter() {
//   const dispach = useDispatch();
//   const count = useSelector((state: RootState) => {
//     return state.counter.value;
//   });
//   const addNumber = () => {
//     dispach(up(2));
//   };
//   const minusNumber = () => {
//     dispach(down(2));
//   };
//   const initNumber = () => {
//     dispach(init(""));
//   };

//   return (
//     <>
//     <div>
//       <div>{count}</div>
//       <button onClick={addNumber}>+</button>
//       <button onClick={minusNumber}>-</button>
//       <button onClick={initNumber}>초기화</button>
//     </div>
//     </>
//   );
// }

// export default Counter;