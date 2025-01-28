import { createSlice } from "@reduxjs/toolkit";

const today = new Date();

const initialState = {
  items: [],
  totalPrice: 0,
  deliveryCharge: today.getDay() <= 5 ? 0 : 50,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
      }
      state.totalPrice += newItem.price * newItem.quantity;
    },

    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item._id === itemId);
      if (existingItem) {
        state.totalPrice -= existingItem.price;
        state.items = state.items.filter((item) => item._id !== itemId);
      }
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === id);
      if (existingItem) {
        state.totalPrice +=
          (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  calculateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
