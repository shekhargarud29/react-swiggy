import { useSelector } from "react-redux";

export const Store = () => {
  const items = useSelector((store) => store.cart.items);
  console.log(items);

  return <></>;
};
