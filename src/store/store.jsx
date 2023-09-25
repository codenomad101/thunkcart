import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cart/CartSlice";
export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
