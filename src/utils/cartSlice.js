import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: () => {
      state.items.pop(action.payload);
    },
    clearCart: () => {
      state.items.length = 0;
    },
  },
});

export const { additem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
