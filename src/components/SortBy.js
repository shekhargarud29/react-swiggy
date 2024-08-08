import { ResFilter } from "./ResFilter";
import { ResSortBy } from "./ResSortBy";

export const SortBy = ({ setrestaurantList, restaurantCollection }) => {
  // console.log(carousel);
  // const location = useLocation();

  // console.log(location);
  // const { menuId } = useContext(menuIdContext);
  // console.log(menuId);
  // console.log(`/menu/${menuId?.menuId}`);

  const sortBy = (id, ids) => {
    // console.log(ids);
    if (id === "Relevance(Default)") {
      document
        .querySelectorAll("#Relevance\\(Default\\)1, #Relevance\\(Default\\)")
        .forEach((x) => {
          x.checked = true;
        });
      setrestaurantList(restaurantCollection);
    } else if (id === "DeliveryTime") {
      // const filterTime = restaurantCollection.filter((restaurant) => {
      //   if (restaurant?.info?.sla?.deliveryTime <= 30) {
      //     console.log("time" + restaurant?.info?.sla?.deliveryTime);
      //   }
      //   return restaurant?.info?.sla?.deliveryTime <= 30;
      // });
      document
        .querySelectorAll("#DeliveryTime1, #DeliveryTime")
        .forEach((x) => {
          x.checked = true;
        });
      const filterTime = restaurantCollection.slice().sort((a, b) => {
        return a.info.sla.deliveryTime - b.info.sla.deliveryTime;
      });
      setrestaurantList(filterTime);
    } else if (id === "Rating") {
      document.querySelectorAll("#Rating1, #Rating").forEach((x) => {
        x.checked = true;
      });
      if (ids) {
        if (ids === "Ratings 3.5+") {
          console.log("filter 3.5");
          const filterRating = restaurantCollection
            .slice()
            .filter((restaurant) => {
              return restaurant?.info?.avgRating >= 3.5;
            });
          setrestaurantList(filterRating);
        }
        if (ids === "Ratings 4.5+") {
          console.log("filter 4.5");
          const filterRating = restaurantCollection
            .slice()
            .filter((restaurant) => {
              return restaurant?.info?.avgRating >= 4.5;
            });
          setrestaurantList(filterRating);
        }
        if (ids === "Ratings 4.0+") {
          console.log("filter 4.0");
          const filterRating = restaurantCollection
            .slice()
            .filter((restaurant) => {
              return restaurant?.info?.avgRating >= 4.0;
            });
          setrestaurantList(filterRating);
        }
      } else {
        // console.log("direct filter");
        const filterRating = restaurantCollection.slice().sort((a, b) => {
          return b.info.avgRating - a.info.avgRating;
        });
        setrestaurantList(filterRating);
      }
    } else if (id === "Cost:LowtoHigh") {
      document
        .querySelectorAll("#Cost\\:LowtoHigh1, #Cost\\:LowtoHigh")
        .forEach((x) => {
          x.checked = true;
        });
      const filterCostLowToHigh = restaurantCollection.slice().sort((a, b) => {
        // const spl = a.info.costForTwo;
        // console.log(
        //   "cost1" +
        //     (+a.info.costForTwo.match(/\d/g).join("") -
        //       +b.info.costForTwo.match(/\d/g).join(""))
        // );
        return (
          +a.info.costForTwo.match(/\d/g).join("") -
          +b.info.costForTwo.match(/\d/g).join("")
        );
      });

      setrestaurantList(filterCostLowToHigh);
    } else if (id === "Cost:HightoLow") {
      document
        .querySelectorAll("#Cost\\:HightoLow1, #Cost\\:HightoLow")
        .forEach((x) => {
          x.checked = true;
        });

      const filterCostHightoLow = restaurantCollection.slice().sort((a, b) => {
        // console.log(
        //   "cost2=" +
        //     (+b.info.costForTwo.match(/\d/g).join("") -
        //       +a.info.costForTwo.match(/\d/g).join(""))
        // );
        return (
          +b.info.costForTwo.match(/\d/g).join("") -
          +a.info.costForTwo.match(/\d/g).join("")
        );
      });

      setrestaurantList(filterCostHightoLow);
    } else if (id === "PureVeg") {
      console.log("pure");
      const filterPureVeg = restaurantCollection
        .slice()
        .filter((restaurant) => {
          return restaurant.info.veg === true;
        });
      setrestaurantList(filterPureVeg);
    } else if (id === "NonVeg") {
      console.log("notpure");
      const filterPureVeg = restaurantCollection
        .slice()
        .filter((restaurant) => {
          console.log(!restaurant.info.veg);
          return !restaurant.info.veg;
        });
      setrestaurantList(filterPureVeg);
    }
  };

  // return location?.pathname === "/" ? (
  return (
    <>
      <ResFilter sortBy={sortBy} />
      <ResSortBy sortBy={sortBy} />
    </>
  );
  // ) : (
  //   console.log("he")(
  //     <>
  //       <MenuInfo sortBy={sortBy} />
  //     </>
  //   )
  // );
};
