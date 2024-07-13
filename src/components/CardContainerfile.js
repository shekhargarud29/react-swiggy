import RestaurantCard from "./RestaurantCardfile";
// import { Category } from "./Category";
import { Dish_Url } from "../const/config";

// import { RestaurantList } from "../const/config";
// import { Img_Url } from "../const/config";
import { TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Category } from "./Category";
// import Filter from "./Filter";
const CardContainer = () => {
  // console.log(RestaurantList);

  // method 3
  // const restaurantData = [
  //   {
  //     imageUrl:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
  //     title: "Chinese Wok",
  //     rating: " 4.3",
  //     time: "25-30",
  //     cuisine: "Chinese, Asian, Tibetan, Desserts",
  //     location: "Santacruz East",
  //   },
  //   {
  //     imageUrl:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
  //     title: "japanese Wok",
  //     rating: " 4.3",
  //     time: "25-30",
  //     cuisine: "Chinese, Asian, Tibetan, Desserts",
  //     location: "Santacruz East",
  //   },
  //   {
  //     imageUrl:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
  //     title: "korean Wok",
  //     rating: " 4.3",
  //     time: "25-30",
  //     cuisine: "Chinese, Asian, Tibetan, Desserts",
  //     location: "Santacruz East",
  //   },
  //   {
  //     imageUrl:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
  //     title: "American Wok",
  //     rating: " 4.3",
  //     time: "25-30",
  //     cuisine: "Chinese, Asian, Tibetan, Desserts",
  //     location: "Santacruz East",
  //   },
  //   {
  //     imageUrl:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
  //     title: "German Wok",
  //     rating: " 4.3",
  //     time: "25-30",
  //     cuisine: "Chinese, Asian, Tibetan, Desserts",
  //     location: "Santacruz East",
  //   },
  // ];

  // method 5
  const [restaurantList, setrestaurantList] = useState([]);
  const [restaurantDish, setrestaurantDish] = useState([]);
  // const [checkedCheckboxes, setcheckedCheckboxes] = useState([]);
  const [scrollDish, setScrollDish] = useState(0);
  const [scrollRes, setScrollRes] = useState(0);
  const [restaurantCollection, setrestaurantCollection] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [loading, setloading] = useState(true);
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        // console.log(data.data.cards[0].card?.card?.imageGridCards?.info);

        setrestaurantDish(data.data.cards[0].card?.card?.imageGridCards?.info);
        setrestaurantList(
          data.data.cards[1].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setrestaurantCollection(
          data.data.cards[1].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.log("failed to fetch");
      }
    };

    getRestaurants();
  }, []);

  // console.log("restlist", restaurantList);

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  // console.log(searchTerm);
  useEffect(() => {
    // const filterSearch = () => {
    if (searchTerm !== "") {
      const filterData = restaurantCollection.filter((restaurant) => {
        return (
          restaurant?.info?.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          restaurant?.info?.cuisines.some((cuisine) => {
            return cuisine.toLowerCase().includes(searchTerm.toLowerCase());
          })
        );
      });
      // console.log(filterData);

      setrestaurantList(filterData);
    } else {
    }
    // };
  }, [searchTerm, restaurantCollection]);

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

  // {
  //   // const filterTime = () => {
  //   //   const filterData = restaurantCollection.filter((restaurant) => {
  //   //     if (restaurant?.info?.sla?.deliveryTime <= 30) {
  //   //       console.log("time" + restaurant?.info?.sla?.deliveryTime);
  //   //     }
  //   //     return restaurant?.info?.sla?.deliveryTime <= 30;
  //   //   });
  //   //   setrestaurantList(filterData);
  //   // };
  //   // const filterRating = () => {
  //   //   const filterData = restaurantCollection.filter((restaurant) => {
  //   //     if (restaurant?.info?.avgRating >= 4) {
  //   //       console.log("rating" + restaurant?.info?.avgRating);
  //   //     }
  //   //     return restaurant?.info?.avgRating >= 4;
  //   //   });
  //   //   setrestaurantList(filterData);
  //   // };
  //   // const filterCostLowToHigh = () => {
  //   //   const filterData = restaurantCollection.sort((a, b) => {
  //   //     // const spl = a.info.costForTwo;
  //   //     console.log(
  //   //       "cost1" +
  //   //         (+a.info.costForTwo.match(/\d/g).join("") -
  //   //           +b.info.costForTwo.match(/\d/g).join(""))
  //   //     );
  //   //     return (
  //   //       +a.info.costForTwo.match(/\d/g).join("") -
  //   //       +b.info.costForTwo.match(/\d/g).join("")
  //   //     );
  //   //   });
  //   //   console.log(filterData);
  //   //   setrestaurantList(filterData);
  //   // };
  //   // const filterCostHightoLow = () => {
  //   //   const filterData = restaurantCollection.sort((a, b) => {
  //   //     // console.log("cost of a=" + +a.info.costForTwo.match(/\d/g).join(""));
  //   //     // console.log("cost of b=" + +b.info.costForTwo.match(/\d/g).join(""));
  //   //     console.log(
  //   //       "cost2=" +
  //   //         (+b.info.costForTwo.match(/\d/g).join("") -
  //   //           +a.info.costForTwo.match(/\d/g).join(""))
  //   //     );
  //   //     return (
  //   //       +b.info.costForTwo.match(/\d/g).join("") -
  //   //       +a.info.costForTwo.match(/\d/g).join("")
  //   //     );
  //   //   });
  //   //   console.log(filterData);
  //   //   setrestaurantList(filterData);
  //   // };
  // }

  var checkedCheckboxes = Array.from(
    document.querySelectorAll("input[name='flexcheckDefault1']:checked")
  );
  const filter = () => {
    // if (document.getElementById("Relevance(Default)1").checked === true) {
    //   console.log("relevence from filter");
    //   // console.log(document.getElementById("Relevance(Default)").id);
    //   sortBy(document.getElementById("Relevance(Default)1").value);
    // } else if (document.getElementById("DeliveryTime1").checked === true) {
    //   console.log("deliveryTime from filter");
    //   sortBy(document.getElementById("DeliveryTime1").value);
    // } else if (document.getElementById("Rating1").checked === true) {
    //   console.log("rating from filter");
    //   sortBy(document.getElementById("Rating1").value);
    // } else if (document.getElementById("Cost:LowtoHigh1").checked === true) {
    //   console.log("costLowToHigh from filter");
    //   sortBy(document.getElementById("Cost:LowtoHigh1").value);
    // } else if (document.getElementById("Cost:HightoLow1").checked === true) {
    //   console.log("costHightoLow from filter");

    //   sortBy(document.getElementById("Cost:HightoLow1").value);
    // } else {
    //   console.log("no checked from filter");
    // }

    // const radios = document.getElementsByName("flexRadioDefault1");

    // radios.forEach((radio) => {
    //   if (radio.checked === true) {
    //     console.log(radio.value + " from filter");
    //     sortBy(radio.value);
    //   }
    // });

    const checkedRadio = document.querySelector(
      "input[name='flexRadioDefault1']:checked"
    );
    if (checkedRadio) {
      console.log(checkedRadio.value + " from filter (radio button)");
      sortBy(checkedRadio.value);
    }
    checkedCheckboxes = Array.from(
      document.querySelectorAll("input[name='flexcheckDefault1']:checked")
    );

    console.log(checkedCheckboxes);
    if (checkedCheckboxes.length > 0) {
      const lastCheckedCheckbox =
        checkedCheckboxes[checkedCheckboxes.length - 1];
      console.log(lastCheckedCheckbox.value + " from filter (checkbox)");
      sortBy(lastCheckedCheckbox.value, lastCheckedCheckbox.id);
    } else {
      // If no checkboxes are checked, handle this case if needed
      console.log("No checkboxes checked");
    }

    // let lastCheckCheckBox = null;
    // const checkboxes = document.getElementsByName("flexcheckDefault1");
    // checkboxes.forEach((checkbox) => {
    //   if (checkbox.checked === true) {
    //     lastCheckCheckBox = checkbox;
    //     console.log(lastCheckCheckBox);
    //   }
    // });
    // if (lastCheckCheckBox) {
    //   console.log(lastCheckCheckBox.value + " from filter");
    //   // console.log(checkbox.value + " from filter");
    //   sortBy(lastCheckCheckBox.value, lastCheckCheckBox.id);
    // }
    // console.log(e.target.id);
  };

  // setrestaurantList(restaurantData);
  return (
    // method 1
    // <>
    //   <div className="container py-3">
    //     <div className="mx-5 p-5  row justify-content-center">
    //       <h3 className="fw-bold">
    //         Restaurants with online food delivery in Mumbai
    //       </h3>
    //       <RestaurantCard />
    //       <RestaurantCard />
    //       <RestaurantCard />
    //       <RestaurantCard />
    //       <RestaurantCard />
    //       <RestaurantCard />
    //       <RestaurantCard />
    //       <RestaurantCard />
    //       <RestaurantCard />
    //       <RestaurantCard />
    //       <RestaurantCard />
    //     </div>
    //   </div>
    // </>

    // method 2
    // <>
    //   <div className="container py-3">
    //     <div className="mx-5 p-5  row justify-content-start">
    //       <h3 className="fw-bold">
    //         Restaurants with online food delivery in Mumbai
    //       </h3>
    //       <RestaurantCard
    //         imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
    //         title="Chinese Wok"
    //         rating=" 4.3"
    //         time="25-30"
    //         cuisine="Chinese, Asian, Tibetan, Desserts"
    //         location="Santacruz East"
    //       />
    //       <RestaurantCard
    //         imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
    //         title="Chinese Wok"
    //         rating=" 4.3"
    //         time="25-30"
    //         cuisine="Chinese, Asian, Tibetan, Desserts"
    //         location="Santacruz East"
    //       />
    //       <RestaurantCard
    //         imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
    //         title="Chinese Wok"
    //         rating=" 4.3"
    //         time="25-30"
    //         cuisine="Chinese, Asian, Tibetan, Desserts"
    //         location="Santacruz East"
    //       />
    //       <RestaurantCard
    //         imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
    //         title="Chinese Wok"
    //         rating=" 4.3"
    //         time="25-30"
    //         cuisine="Chinese, Asian, Tibetan, Desserts"
    //         location="Santacruz East"
    //       />
    //     </div>
    //   </div>
    // </>

    // method 3
    // <>
    //   <div className="container py-3">
    //     <div className="mx-5 p-5  row justify-content-start">
    //       <h3 className="fw-bold">
    //         Restaurants with online food delivery in Mumbai
    //       </h3>
    //       {restaurantData.map((restaurant) => {
    //         // console.log(restaurant);
    //         return (
    //           // method 1

    //           // <RestaurantCard
    //           //   imageUrl={restaurant?.imageUrl}
    //           //   title={restaurant?.title}
    //           //   rating={restaurant?.rating}
    //           //   time={restaurant?.time}
    //           //   cuisine={restaurant?.cuisine}
    //           //   location={restaurant?.location}
    //           // />

    //           // method 2
    //           <RestaurantCard {...restaurant} />
    //         );
    //       })}
    //     </div>
    //   </div>
    // </>

    // method 4
    // <>
    //   <div className="container-lg py-3">
    //     <div className="mx-lg-5 p-5  row justify-content-start">
    //       <h3 className="fw-bold col-12">
    //         Restaurants with online food delivery in Mumbai
    //       </h3>
    //       {/* {console.log(
    //         RestaurantList[1]?.card?.card?.gridElements?.infoWithStyle
    //           ?.restaurants[0]
    //       )} */}
    //       {RestaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
    //         (restaurant) => {
    //           // console.log(restaurant);
    //           return (
    //             // method 1
    //             // <RestaurantCard
    //             //   imageUrl={Img_Url + restaurant?.info?.cloudinaryImageId}
    //             //   title={restaurant?.info?.name}
    //             //   rating={restaurant?.info?.avgRating}
    //             //   time={restaurant?.info?.sla?.slaString}
    //             //   cuisine={restaurant?.info?.cuisines.join(", ")}
    //             //   location={restaurant?.info?.areaName}
    //             // />

    //             // method 2

    //             <RestaurantCard
    //               key={restaurant?.info?.id}
    //               {...restaurant?.info}
    //             />
    //           );
    //         }
    //       )}
    //     </div>
    //   </div>
    // </>

    // method 5 api calling
    <>
      <div className="container-lg py-3">
        <div className="mx-lg-5 px-4 py-1 row justify-content-center">
          <div className="border-bottom pb-5">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="fw-bolder col-12">What's on your mind?</h4>
              </div>
              <div>
                <button
                  className="btn btn-outline-warning  rounded-pill mx-1 "
                  type="button"
                  onClick={() => {
                    if (scrollDish >= 3) {
                      setScrollDish(scrollDish - 3);
                    } else {
                      console.log("exceed");
                    }
                  }}
                >
                  <i className="fa-solid fa-arrow-left " />
                </button>
                <button
                  className="btn btn-outline-warning rounded-pill mx-1"
                  onClick={() => {
                    if (scrollDish <= 6) {
                      setScrollDish(scrollDish + 3);
                    } else {
                      console.log("exceed");
                    }
                  }}
                >
                  <i className="fa-solid fa-arrow-right "></i>
                </button>
              </div>
            </div>
            <div className="d-flex overflow-hidden ">
              {restaurantDish.map((dish) => {
                // console.log(dish);
                return (
                  <div
                    className=" col-2"
                    style={{
                      transform: `translateX(-${scrollDish * 200}%)`,
                      transition: "transform 2s",
                    }}
                  >
                    <img
                      key={dish.id}
                      className=" pe-5  cards-dish"
                      src={Dish_Url + dish?.imageId}
                      alt={dish?.accessibility?.altText}
                    ></img>
                    {/* <Category key={dish.id} {...dish} /> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mx-lg-5 px-4 py-1 row justify-content-center">
          <div className="border-bottom pb-5">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="fw-bolder col-12">What's on your mind?</h4>
              </div>
              <div>
                <button
                  className="btn btn-outline-warning  rounded-pill mx-1"
                  onClick={() => {
                    if (scrollRes >= 3) {
                      setScrollRes(scrollRes - 3);
                    } else {
                      console.log("exceed");
                    }
                  }}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  className="btn btn-outline-warning  rounded-pill mx-1"
                  onClick={() => {
                    if (scrollRes <= 9) {
                      setScrollRes(scrollRes + 3);
                    } else {
                      console.log("exceed");
                    }
                  }}
                >
                  <i className="fa-solid fa-arrow-right "></i>
                </button>
              </div>
            </div>
            <div className="d-flex overflow-hidden">
              {restaurantCollection.map((restaurant) => {
                // console.log(dish);
                return (
                  <div
                    className=" col-3 py-3 pe-4 border-0 "
                    style={{
                      transform: `translateX(-${scrollRes * 134}%) `,
                      transition: "transform 2s",
                    }}
                  >
                    <Category
                      key={restaurant?.info?.id}
                      {...restaurant?.info}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-lg-5 p-3  row justify-content-center">
          <div className="col-6 row justify-content-start p-0">
            <div className="col-md-3 ">
              <button
                type="button"
                className="btn border rounded-pill mx-3 p-2 px-4"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                <strong>Filter</strong>
              </button>

              {/* <!-- The Modal --> */}
              <div className="modal " id="myModal">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                  <div className="modal-content">
                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                      <h4 className="modal-title">
                        <strong>Filter</strong>
                      </h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className="modal-body border-1  d-flex justify-content-start">
                      <div className="left  col-4 border-end">
                        <div className="list-group p-3">
                          <label className="list-group-item btn btn-warning  border-0 fw-bold h6">
                            <input
                              className="form-check-input me-1 filter-radio"
                              type="radio"
                              value=""
                              name="default"
                              id="first-check"
                              defaultChecked
                              onChange={(e) => {
                                // console.log(e.target.checked);
                                if (e.target.checked === true) {
                                  document.getElementById(
                                    "first"
                                  ).style.display = "block";
                                  document.getElementById(
                                    "second"
                                  ).style.display = "none";
                                  document.getElementById(
                                    "third"
                                  ).style.display = "none";
                                  document.getElementById(
                                    "fourth"
                                  ).style.display = "none";
                                }
                              }}
                            />
                            Sort
                          </label>
                          <label className="list-group-item btn btn-warning  border-0 fw-bold h6">
                            <input
                              className="form-check-input me-1 filter-radio"
                              type="radio"
                              value=""
                              name="default"
                              id="second-check"
                              onChange={(e) => {
                                console.log(e.target.checked);
                                if (e.target.checked === true) {
                                  document.getElementById(
                                    "second"
                                  ).style.display = "block";
                                  document.getElementById(
                                    "first"
                                  ).style.display = "none";
                                  document.getElementById(
                                    "third"
                                  ).style.display = "none";
                                  document.getElementById(
                                    "fourth"
                                  ).style.display = "none";
                                }
                              }}
                            />
                            Delivery Time
                          </label>
                          <label className="list-group-item  btn btn-warning border-0 fw-bold h6">
                            <input
                              className="form-check-input me-1 filter-radio"
                              type="radio"
                              value=""
                              name="default"
                              id="third-check"
                              onChange={(e) => {
                                console.log(e.target.checked);
                                if (e.target.checked === true) {
                                  document.getElementById(
                                    "third"
                                  ).style.display = "block";
                                  document.getElementById(
                                    "first"
                                  ).style.display = "none";
                                  document.getElementById(
                                    "second"
                                  ).style.display = "none";
                                  document.getElementById(
                                    "fourth"
                                  ).style.display = "none";
                                }
                              }}
                            />
                            Rating
                          </label>
                          <label className="list-group-item btn btn-warning border-0 fw-bold h6">
                            <input
                              className="form-check-input me-1 filter-radio"
                              type="radio"
                              value=""
                              name="default"
                              id="fourth-check"
                              onChange={(e) => {
                                console.log(e.target.checked);
                                if (e.target.checked === true) {
                                  document.getElementById(
                                    "fourth"
                                  ).style.display = "block";
                                  document.getElementById(
                                    "first"
                                  ).style.display = "none";
                                  document.getElementById(
                                    "second"
                                  ).style.display = "none";
                                  document.getElementById(
                                    "third"
                                  ).style.display = "none";
                                }
                              }}
                            />
                            Veg or Non-VEg
                          </label>
                        </div>
                      </div>
                      <div className="right  col-8 ">
                        <div className="px-5 py-2">
                          <div id="first" className="">
                            <div className="text-secondary">
                              <span>SORT BY</span>
                            </div>
                            <div>
                              <ul className="list-group overflow-hidden ">
                                <li className="list-group-item p-0 py-2 border-0">
                                  <div className="d-flex align-items-center  px-1 justify-content-start">
                                    <input
                                      className=" input-button me-2"
                                      type="radio"
                                      name="flexRadioDefault1"
                                      id="Relevance(Default)1"
                                      value="Relevance(Default)"
                                      // onClick={(e) => {
                                      //   // console.log("yo");
                                      //   setrestaurantList(restaurantCollection);
                                      // }}
                                      defaultChecked
                                    />
                                    <label
                                      className="d-flex"
                                      htmlFor="Relevance(Default)1"
                                    >
                                      Relevance(Default)
                                    </label>
                                  </div>
                                </li>
                                <li className="list-group-item p-0 py-2  border-0">
                                  <div className="d-flex align-items-center  px-1 justify-content-start">
                                    <input
                                      className=" input-button me-2"
                                      type="radio"
                                      name="flexRadioDefault1"
                                      id="DeliveryTime1"
                                      value="DeliveryTime"
                                      // onClick={filterTime}
                                    />
                                    <label
                                      className="d-flex"
                                      htmlFor="DeliveryTime1"
                                    >
                                      DeliveryTime
                                    </label>
                                  </div>
                                </li>
                                <li className="list-group-item p-0 py-2  border-0">
                                  <div className="d-flex align-items-center  px-1 justify-content-start">
                                    <input
                                      className=" input-button me-2"
                                      type="radio"
                                      name="flexRadioDefault1"
                                      id="Rating1"
                                      value="Rating"

                                      // onClick={filterRating}
                                    />
                                    <label className="d-flex" htmlFor="Rating1">
                                      Rating
                                    </label>
                                  </div>
                                </li>
                                <li className="list-group-item p-0 py-2 border-0">
                                  <div className="d-flex align-items-center  px-1 justify-content-start">
                                    <input
                                      className=" input-button me-2"
                                      type="radio"
                                      name="flexRadioDefault1"
                                      id="Cost:LowtoHigh1"
                                      value="Cost:LowtoHigh"

                                      // onClick={(e) => {
                                      //   filterCostLowToHigh(e);
                                      // }}
                                    />
                                    <label
                                      className="d-flex"
                                      htmlFor="Cost:LowtoHigh1"
                                    >
                                      Cost:LowtoHigh
                                    </label>
                                  </div>
                                </li>
                                <li className="list-group-item p-0 py-2 border-0">
                                  <div className="d-flex align-items-center  px-1 justify-content-start">
                                    <input
                                      className=" input-button me-2"
                                      type="radio"
                                      name="flexRadioDefault1"
                                      id="Cost:HightoLow1"
                                      value="Cost:HightoLow"

                                      // onClick={(e) => {
                                      //   filterCostLowToHigh(e);
                                      // }}
                                    />
                                    <label
                                      className="d-flex"
                                      htmlFor="Cost:HightoLow1"
                                    >
                                      Cost:HightoLow
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div id="second">
                            <div className="text-secondary">
                              <span>FILTER BY</span>
                            </div>
                            <div>
                              <ul className="list-group">
                                <li className="list-group-item p-0 py-2 border-0">
                                  <div className="d-flex align-items-center  px-1 justify-content-start">
                                    <input
                                      className=" form-check-input me-2"
                                      type="checkbox"
                                      name="flexcheckDefault1"
                                      id="fastdelivery"
                                      value="DeliveryTime"
                                    />
                                    <label
                                      className="form-check-label d-flex"
                                      htmlFor="fastdelivery"
                                    >
                                      Fast Delivery
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div id="third">
                            <div className="text-secondary">
                              <span>FILTER BY</span>
                            </div>
                            <div>
                              <ul className="list-group  ">
                                <li className="list-group-item p-0 py-2 border-0">
                                  <div className="d-flex align-items-center  px-1 justify-content-start">
                                    <input
                                      className=" form-check-input me-2 "
                                      type="checkbox"
                                      name="flexcheckDefault1"
                                      id="Ratings 3.5+"
                                      value="Rating"
                                    />
                                    <label
                                      className="form-check-label d-flex"
                                      htmlFor="Ratings 3.5+"
                                    >
                                      Ratings 3.5+
                                    </label>
                                  </div>
                                </li>
                                <li className="list-group-item p-0 py-2 border-0">
                                  <div className="d-flex align-items-center  px-1 justify-content-start">
                                    <input
                                      className=" form-check-input me-2"
                                      type="checkbox"
                                      name="flexcheckDefault1"
                                      id="Ratings 4.5+"
                                      value="Rating"
                                    />
                                    <label
                                      className="form-check-label d-flex"
                                      htmlFor="Ratings 4.5+"
                                    >
                                      Ratings 4.5+
                                    </label>
                                  </div>
                                </li>
                                <li className="list-group-item p-0 py-2 border-0">
                                  <div className="d-flex align-items-center  px-1 justify-content-start">
                                    <input
                                      className=" form-check-input me-2"
                                      type="checkbox"
                                      name="flexcheckDefault1"
                                      id="Ratings 4.0+"
                                      value="Rating"
                                    />
                                    <label
                                      className="form-check-label d-flex"
                                      htmlFor="Ratings 4.0+"
                                    >
                                      Ratings 4.0+
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div id="fourth">
                            <h1>fourth box</h1>
                          </div>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-warning"
                        data-bs-dismiss="modal"
                        onClick={filter}
                      >
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <button
                type="button"
                className="btn border rounded-pill mx-3 p-2 px-4"
              >
                <strong>Filter</strong>
              </button> */}
            </div>
            <div className="dropdown col-md-3  ">
              <button
                type="button"
                className="btn dropdown-toggle btn border rounded-pill mx-3 p-2 px-4"
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
          </div>
          <div className=" col-6 ">
            <div className="searchbar">
              <TextField
                className=""
                id="outlined-basic"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                variant="outlined"
                fullWidth
                label="Search your restaurant or food here"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      // className="border rounded-pill"
                    >
                      <i className="fas fa-search" />
                    </InputAdornment>
                  ),
                }}
              />
              {/* <input
                className="form-control border rounded-pill px-3 m-0 "
                type="search"
                id="searchbar"
                placeholder="search your restaurant or food here"
                value={searchTerm}
                onChange={handleSearch}
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     filterSearch();
                //   }
                // }}
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </input> */}
              {/* <input className="form-control border rounded-pill px-3 m-0">
                {" "}
                <i className="fa fa-search" aria-hidden="true"></i>
              </input> */}
              {/* <button
                type="button"
                className="btn btn-primary rounded-pill rounded-start"
                // onClick={filterSearch}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button> */}
            </div>
          </div>
        </div>
        <div className="mx-lg-5 px-4 py-1  row justify-content-center">
          <h3 className="fw-bold col-12">
            Restaurants with online food delivery in Mumbai
          </h3>
          {/* {console.log(
            RestaurantList[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants[0]
          )} */}
          {restaurantList.map((restaurant) => {
            // console.log(restaurant);
            return (
              // method 1
              // <RestaurantCard
              //   imageUrl={Img_Url + restaurant?.info?.cloudinaryImageId}
              //   title={restaurant?.info?.name}
              //   rating={restaurant?.info?.avgRating}
              //   time={restaurant?.info?.sla?.slaString}
              //   cuisine={restaurant?.info?.cuisines.join(", ")}
              //   location={restaurant?.info?.areaName}
              // />

              // method 2
              <>
                {restaurant?.info && (
                  <RestaurantCard
                    key={restaurant?.info?.id}
                    {...restaurant?.info}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
