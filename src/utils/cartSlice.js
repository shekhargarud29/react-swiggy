import { createSlice } from "@reduxjs/toolkit";
// import { Cart } from "../components/Cartfile";
// import { json } from "react-router-dom";

const fromLocalStorage = () => {
  const data = localStorage.getItem("items");

  return data ? JSON.parse(data) : [];
};
const fromStorage = () => {
  const data2 = localStorage.getItem("countObj");

  return data2 ? JSON.parse(data2) : {};
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: fromLocalStorage(),
    countsObj: fromStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== action.payload
      );
      console.log(action);

      // localStorage.setItem("items", JSON.stringify(state.items));
    },
    clearItem: (state, action) => {
      state.items.length = 0;
      localStorage.removeItem("items");
      localStorage.removeItem("countObj");
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice?.actions;
export default cartSlice.reducer;
