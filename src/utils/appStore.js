import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
  // app reducer,it has small slice reducer
  // configurestore is creating the store
  reducer: {
    cart: cartSlice,
  },
});

export default appStore;
