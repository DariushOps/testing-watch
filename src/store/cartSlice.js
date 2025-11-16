import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantites: 0,
    changed: false,
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.totalQuantites++;
      state.changed = true;
      if (existingItem) {
        state.items.map((item) =>
          item.id === existingItem.id ? existingItem.quantity++ : item
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export default cart;
