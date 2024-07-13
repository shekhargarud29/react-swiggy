import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MenuInfo } from "./Menuinfofile";
import { useState } from "react";

export const Menu = () => {
  const [menuList, setMenuList] = useState([]);
  const [menuItem, setMenuItem] = useState([]);
  // const [loading, setLoading] = true;
  // const [offers, setOffers] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const menu = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );
        const data = await response.json();
        console.log(data);
        setMenuItem(data?.data?.cards[2]?.card?.card || {});
        setMenuList(data);
        // setLoading(false);
        // setOffers(
        //   data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
        // );
      } catch {
        console.log("error");
        // setLoading(false);
      }
    };
    menu();
  }, [id]);

  console.log(menuList);
  console.log(menuItem);
  // console.log(menuList?.data);
  return (
    <>
      <h1>Menu page</h1>
      {/* {console.log(MenuList?.cards[2]?.card?.card?.info?.id)} */}
      {menuItem && menuItem.info && menuList && (
        <MenuInfo
          key={menuItem?.info?.id}
          menuItem={menuItem}
          menuList={menuList}
        />
      )}
    </>
  );
};
