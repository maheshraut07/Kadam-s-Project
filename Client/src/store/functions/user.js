import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "User",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token)
          localStorage.setItem("token", action.payload.token);
      }
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;
