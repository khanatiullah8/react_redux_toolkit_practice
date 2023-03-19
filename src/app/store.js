import { configureStore } from "@reduxjs/toolkit";
import fruitReducer from '../features/fruit/fruitSlice';
import vegetableReducer from "../features/vegetable/vegetableSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    fruit: fruitReducer,
    vegetable: vegetableReducer,
    user: userReducer,
  }
})

export default store;