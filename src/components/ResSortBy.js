import { ResFilter } from "./ResFilter";

export const ResSortBy = ({ setrestaurantList, restaurantCollection }) => {
  const sortBy = (id, ids) => {
    console.log(ids);
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
        console.log("direct filter");
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
    }
  };

  return (
    <>
      {<ResFilter sortBy={sortBy} />}

      <div className="dropdown mx-2 ">
        <button
          type="button"
          className="btn dropdown-toggle btn border rounded-pill  p-2 px-4"
          data-bs-toggle="dropdown"
        >
          <strong>Sort By</strong>
        </button>
        <ul className="dropdown-menu p-3 rounded-4 shadow">
          <li>
            <div className="d-flex align-items-center p-1 justify-content-between">
              <label className="d-flex" htmlFor="Relevance(Default)">
                Relevance(Default)
              </label>
              <input
                className=" input-button ms-3"
                type="radio"
                name="flexRadioDefault"
                id="Relevance(Default)"
                value="Relevance(Default)"
                onChange={(e) => {
                  sortBy(e.target.value);
                }}
                defaultChecked
              />
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center p-1 justify-content-between">
              <label className="d-flex" htmlFor="DeliveryTime">
                DeliveryTime
              </label>
              <input
                className=" input-button ms-3"
                type="radio"
                name="flexRadioDefault"
                id="DeliveryTime"
                value="DeliveryTime"
                onChange={(e) => {
                  sortBy(e.target.value);
                }}
              />
            </div>
          </li>

          <li>
            <div className="d-flex align-items-center p-1 justify-content-between">
              <label className="d-flex" htmlFor="Rating">
                Rating
              </label>
              <input
                className=" input-button ms-3"
                type="radio"
                name="flexRadioDefault"
                id="Rating"
                value="Rating"
                onChange={(e) => {
                  sortBy(e.target.value);
                }}
              />
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center p-1 justify-content-between">
              <label className="d-flex" htmlFor="Cost:LowtoHigh">
                Cost:LowtoHigh
              </label>
              <input
                className=" input-button ms-3"
                type="radio"
                name="flexRadioDefault"
                id="Cost:LowtoHigh"
                value="Cost:LowtoHigh"
                onChange={(e) => {
                  sortBy(e.target.value);
                }}
              />
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center p-1 justify-content-between">
              <label className="d-flex" htmlFor="Cost:HightoLow">
                Cost:HightoLow
              </label>
              <input
                className=" input-button ms-3"
                type="radio"
                name="flexRadioDefault"
                id="Cost:HightoLow"
                value="Cost:HightoLow"
                onChange={(e) => {
                  sortBy(e.target.value);
                }}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
