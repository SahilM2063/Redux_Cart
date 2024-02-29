import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((p) => p.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += 1;
        console.log("Product already exits in cart");
      } else {
        state.cart.push({ ...action.payload });
        console.log("Product added to cart");
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
      console.log("Product removed from cart");
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
