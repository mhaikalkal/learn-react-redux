import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nilai: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // state ini merupakan, parameter ke 2 dadri createSlice, dalam kasus ini == initialState yg isinya nilai
    increment: (state) => {
      // karena nilai merupakan isi dari object initialState, ya maka state.nilai
      state.nilai += 1;
    },
    decrement: (state) => {
      state.nilai -= 1;
    },
    incrementByAmount: (state, action) => {
      state.nilai += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.nilai -= action.payload;
    },
    reset: (state) => {
      state.nilai = 0;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
