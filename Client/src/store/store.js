import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./functions/user";
import cartReducer from "./functions/cart";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
