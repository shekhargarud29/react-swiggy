import { createSlice } from "@reduxjs/toolkit";
// import { json } from "react-router-dom";

const fromLocalStorage = () => {
  const data = localStorage.getItem("items");
  return data ? JSON.parse(data) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: fromLocalStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    clearItem: (state) => {
      state.items.length = 0;
      localStorage.removeItem("items");
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice?.actions;
export default cartSlice.reducer;
