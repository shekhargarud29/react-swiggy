import { useState, useEffect } from "react";
import { Res_Url } from "../const/config";

export const useRestaurant = () => {
  const [resObjectrestaurantList, setresObjectrestaurantList] = useState([]);
  const [resObjectrestaurantDish, setresObjectrestaurantDish] = useState([]);
  const [resObjectrestaurantCollection, setresObjectrestaurantCollection] =
    useState([]);
  const [resObjectloading, setresObjectloading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getRestaurants = async () => {
  //     try {
  //       const response = await fetch(Res_Url);
  //       const data = await response.json();
  //       // console.log(data.data.cards[0].card?.card?.imageGridCards?.info);

  //       setresObjectrestaurantDish(
  //         data.data.cards[0].card?.card?.imageGridCards?.info
  //       );

  //       setresObjectrestaurantList(
  //         data.data.cards[1].card?.card?.gridElements?.infoWithStyle
  //           ?.restaurants
  //       );
  //       setresObjectrestaurantCollection(
  //         data.data.cards[1].card?.card?.gridElements?.infoWithStyle
  //           ?.restaurants
  //       );
  //       setresObjectloading(false);
  //     } catch (error) {
  //       console.log("failed to fetch");
  //       setresObjectloading(false);
  //       return (
  //         <>
  //           <div>
  //             <h3>Sorry we are having server issue, please visit later</h3>
  //           </div>
  //         </>
  //       );
  //     }
  //   };
  //   // console.log(resObjectrestaurantList);
  //   getRestaurants();
  // }, [resObjectrestaurantList]);

  // useEffect(() => {
  //   const getRe = async () => {
  //     try {
  //       fetch(
  //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGkdak"
  //       ).then((response) => {
  //         if (!response.ok) {
  //           // Handle HTTP errors
  //           throw new Error(`HTTP error! Status:`);
  //         }
  //         return response.json();
  //       });
  //       // setresObjectloading(false);
  //     } catch (error) {
  //       console.log("failed to fetch the data");
  //       console.log(error);
  //     }
  //   };
  //   getRe();
  // }, []);

  useEffect(() => {
    const getRestaurants = async () => {
      fetch(Res_Url)
        .then((response) => {
          if (!response.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.data && data.data.cards) {
            setresObjectrestaurantDish(
              data.data.cards[0]?.card?.card?.imageGridCards?.info || []
            );

            const restaurants =
              data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants || [];
            setresObjectrestaurantList(restaurants);
            setresObjectrestaurantCollection(restaurants);
            setresObjectloading(false);
          } else {
            // Handle invalid data structure
            throw new Error("Received data has an invalid structure");
          }
        })
        .catch((error) => {
          // Handle different error scenarios
          if (error.message.startsWith("HTTP error")) {
            setError(
              "Failed to fetch data from server. Please try again later."
            );
          } else if (
            error.message === "Received data has an invalid structure"
          ) {
            setError("Received data is not in the expected format.");
          } else if (error.message === "Failed to fetch") {
            setError("Network error. Please check your internet connection.");
          } else {
            setError("An unexpected error occurred. Please try again later.");
          }
          setresObjectloading(false);
        });
    };

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
    error: error,
    setError: setError,
  };

  // console.log(resObject?.restaurantList);
  return resObject;
};
