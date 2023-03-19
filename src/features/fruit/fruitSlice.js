import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalFruits: 10,
};

const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {
    buy: (state, action) => {
      state.totalFruits -= action.payload;
    },
    reStock: (state, action) => {
      state.totalFruits += action.payload;
    },
  },
});

export default fruitSlice.reducer;
export const { buy, reStock } = fruitSlice.actions;
