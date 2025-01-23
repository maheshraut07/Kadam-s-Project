import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./functions/user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
