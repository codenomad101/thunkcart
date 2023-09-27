import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cart/CartSlice";
import modalReducer from "../features/cart/ModalSlice";
export const store = configureStore({
  reducer: {
    cart: CartReducer,
    modal: modalReducer,
  },
});
