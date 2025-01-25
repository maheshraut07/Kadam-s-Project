import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart"));

const initialState = savedCart || {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }
      state.totalPrice += newItem.price * newItem.quantity;
    },

    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item._id === itemId);
      if (existingItem) {
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item._id !== itemId);
      }
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      // console.log(id, quantity);

      const existingItem = state.items.find((item) => item._id === id);
      if (existingItem) {
        state.totalPrice +=
          (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
