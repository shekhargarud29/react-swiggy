import { useState, useEffect } from "react";
import { Res_Url } from "../const/config";

export const useRestaurant = () => {
  const [resObjectrestaurantList, setresObjectrestaurantList] = useState([]);
  const [resObjectrestaurantDish, setresObjectrestaurantDish] = useState([]);
  const [resObjectrestaurantCollection, setresObjectrestaurantCollection] =
    useState([]);
  const [resObjectloading, setresObjectloading] = useState(true);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await fetch(Res_Url);
        const data = await response.json();
        // console.log(data.data.cards[0].card?.card?.imageGridCards?.info);

        setresObjectrestaurantDish(
          data.data.cards[0].card?.card?.imageGridCards?.info
        );

        setresObjectrestaurantList(
          data.data.cards[1].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setresObjectrestaurantCollection(
          data.data.cards[1].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setresObjectloading(false);
      } catch (error) {
        console.log("failed to fetch");
        setresObjectloading(true);
      }
    };
    // console.log(resObjectrestaurantList);
    getRestaurants();
  }, []);

  const resObject = {
    restaurantList: resObjectrestaurantList,
    setrestaurantList: setresObjectrestaurantList,
    restaurantDish: resObjectrestaurantDish,
    setrestaurantDish: setresObjectrestaurantDish,
    restaurantCollection: resObjectrestaurantCollection,
    setrestaurantCollection: setresObjectrestaurantCollection,
    Loading: resObjectloading,
    setLoading: setresObjectloading,
  };

  console.log(resObject?.restaurantList);
  return resObject;
};
