import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MenuInfo } from "./Menuinfofile";
import { useState } from "react";

export const Menu = () => {
  const [MenuList, setMenuList] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const menuList = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=9864&catalog_qa=undefined&submitAction=ENTER"
        );
        const data = await response.json();
        console.log(data);
        setMenuList(data?.data?.cards[2]?.card?.card?.info);
        console.log(data?.data?.cards[2]?.card?.card?.info);
      } catch {
        console.log("error");
      }
    };
    menuList();
  }, []);

  return (
    <>
      <h1>Menu page</h1>
      <MenuInfo key={MenuList?.id} {...MenuList} />
    </>
  );
};
