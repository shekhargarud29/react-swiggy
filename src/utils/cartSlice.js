import { createSlice } from "@reduxjs/toolkit";
// import { Cart } from "../components/Cartfile";
// import { json } from "react-router-dom";
import toast from "react-hot-toast";

// const fromLocalStorage = () => {
//   const data = localStorage.getItem("items");

//   return data ? JSON.parse(data) : [];
// };
// const fromStorage = () => {
//   const data2 = localStorage.getItem("countObj");

//   return data2 ? JSON.parse(data2) : {};
// };
// const { setCountObj } = useContext(menuIdContext);
// countItem = () => {
//   const total = Object.values(countsObj)
//     .map((val) => val.count)
//     .reduce(
//       (acc, val) =>
//         // console.log(val);
//         (acc = acc + val),
//       0
//       // setSum(val + sum);
//     );
//   return total;
// };

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    countsObj: {},
    item: 0,
  },
  reducers: {
    addItem: (state, action) => {
      // state.items.push(action.payload);
      // localStorage.setItem("items", JSON.stringify(state.items));
      // console.log(action.payload);
      const { id } = action.payload.card.info;
      state.countsObj[id] = state.countsObj[id]
        ? { count: state.countsObj[id].count + 1, itemCard: action.payload }
        : { count: 1, itemCard: action.payload };
      // console.log(state.countsObj);
      state.item = Object.values(state.countsObj)
        .map((val) => val.count)
        .reduce(
          (acc, val) =>
            // console.log(val);
            (acc = acc + val),
          0
          // setSum(val + sum);
        );
      toast.success("Added succesfully", {
        position: "bottom-right",
        autoClose: 1000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    },
    removeItem: (state, action) => {
      // state.items = state.items.filter(
      //   (item) => item?.card?.info?.id !== action.payload
      // );
      // console.log(action);
      const { id } = action.payload.card.info;
      if (state.countsObj[id].count > 0) {
        state.countsObj[id].count -= 1;
        // state.countsObj[id] = {
        //   count: state.countsObj[id].count - 1,
        //   itemCard: action.payload,
        // };
      }
      if (state.countsObj[id].count === 0) {
        delete state.countsObj[id];
      }
      state.item = Object.values(state.countsObj)
        .map((val) => val.count)
        .reduce(
          (acc, val) =>
            // console.log(val);
            (acc = acc + val),
          0
          // setSum(val + sum);
        );
      toast("Item removed", {
        icon: "🗑️",
        position: "bottom-right",
        autoClose: 500,
        style: {
          borderRadius: "10px",
          background: "#e13647",
          color: "#fff",
        },
      });
      // localStorage.setItem("items", JSON.stringify(state.items));
    },
    clearItem: (state, action) => {
      state.countsObj = {};
      state.item = 0;
      // state.items.length = 0;
      // localStorage.removeItem("items");
      // localStorage.removeItem("countbj");
      // setCountObj({});
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice?.actions;
export default cartSlice.reducer;
