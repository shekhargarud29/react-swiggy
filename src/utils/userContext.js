import { createContext } from "react";
import { useSelector } from "react-redux";

export const menuIdContext = createContext({
  menuId: "",
});

// export const handleAdd = createContext(() => {});
