import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalVegetables: 20,
};

const vegetableSlice = createSlice({
  name: 'vegetable',
  initialState,
  reducers: {
    buy: (state, action) => {
      state.totalVegetables -= action.payload
    },
    reStock: (state, action) => {
      state.totalVegetables += action.payload
    }
  }
})

export default vegetableSlice.reducer
export const {buy, reStock} = vegetableSlice.actions