import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";

const store = configureStore({ reducer: cart.reducer });

export default store;
