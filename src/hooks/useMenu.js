import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useMenu = () => {
  const [menuItem, setMenuItem] = useState([]);
  const [offers, setOffers] = useState([]);
  const [menuLoading, setMenuLoading] = useState(true);

  const [menuDatas, setMenuDatas] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const menu = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );
        const data = await response.json();
        // console.log(data);
        setMenuItem(data?.data?.cards[2]?.card?.card);

        setOffers(
          data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
        );

        setMenuDatas(
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );
        setMenuLoading(false);
        // setOffers(
        //   data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
        // );
      } catch {
        console.log("error");
        setMenuLoading(true);
      }
    };
    menu();
  }, [id]);

  const menuObject = {
    menuLoading: menuLoading,
    menuItem: menuItem,
    offers: offers,
    setOffers: setOffers,
    menuDatas: menuDatas,
    setMenuDatas: setMenuDatas,
  };

  // console.log(menuObject?.menuItem);
  return menuObject;
};
