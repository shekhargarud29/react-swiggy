import RestaurantCard from "./RestaurantCardfile";
// import { RestaurantList } from "../const/config";
// import { Img_Url } from "../const/config";
import { TextField, InputAdornment } from "@mui/material";

import { useState } from "react";
import { useEffect } from "react";
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
  const [restaurantCollection, setrestaurantCollection] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        console.log(
          data.data.cards[1].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
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
  console.log(searchTerm);
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
      console.log(filterData);

      setrestaurantList(filterData);
    } else {
    }
    // };
  }, [searchTerm, restaurantCollection]);

  const filterTime = () => {
    const filterData = restaurantCollection.filter((restaurant) => {
      console.log(restaurant?.info?.sla?.deliveryTime);
      return restaurant?.info?.sla?.deliveryTime <= 30;
    });
    setrestaurantList(filterData);
  };

  const filterRating = () => {
    const filterData = restaurantCollection.filter((restaurant) => {
      return restaurant?.info?.avgRating >= 4;
    });
    setrestaurantList(filterData);
  };

  const filterCostLowToHigh = (e) => {
    const filterData = restaurantCollection.sort((a, b) => {
      // const spl = a.info.costForTwo;
      console.log(+a.info.costForTwo.match(/\d/g).join(""));
      return (
        +a.info.costForTwo.match(/\d/g).join("") -
        +b.info.costForTwo.match(/\d/g).join("")
      );
    });
    if (e.target.value === "ascend") {
      // console.log("ascend");
      setrestaurantList(filterData);
    } else {
      // console.log("descend");
      setrestaurantList(filterData.reverse());
    }
    // console.log(filterData);
    // setrestaurantList(filterData);
    // console.log(restaurantList);
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
        <div className="mx-lg-5 p-3  row justify-content-center">
          <div className="col-6 row justify-content-start p-0">
            <div className="col-md-3 ">
              <button
                type="button"
                class="btn border rounded-pill mx-3 p-2 px-4"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                <strong>Filter</strong>
              </button>

              {/* <!-- The Modal --> */}
              <div class="modal " id="myModal">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                  <div class="modal-content">
                    {/* <!-- Modal Header --> */}
                    <div class="modal-header">
                      <h4 class="modal-title">
                        <strong>Filter</strong>
                      </h4>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div class=" border-1  d-flex justify-content-start">
                      {/* <div className=""> */}
                      <div className="left  col-4 border-end">
                        <div className="list-group p-3">
                          <label class="list-group-item  border-0 fw-bold h6">
                            <input
                              class="form-check-input me-1 filter-radio"
                              type="radio"
                              value=""
                              name="default"
                              id="first-check"
                              checked
                              onClick={(e) => {
                                console.log(e.target.checked);
                                if (e.target.checked === true) {
                                  document.getElementById(
                                    "first"
                                  ).style.display = "block";
                                  document.getElementById(
                                    "second"
                                  ).style.display = "none";
                                }
                              }}
                            />
                            Sort
                          </label>
                          <label class="list-group-item  border-0 fw-bold h6">
                            <input
                              class="form-check-input me-1 filter-radio"
                              type="radio"
                              value=""
                              name="default"
                              id="second-check"
                              onClick={(e) => {
                                console.log(e.target.checked);
                                if (e.target.checked === true) {
                                  document.getElementById(
                                    "second"
                                  ).style.display = "block";
                                  document.getElementById(
                                    "first"
                                  ).style.display = "none";
                                }
                              }}
                            />
                            Delivery Time
                          </label>
                          <label class="list-group-item  border-0 fw-bold h6">
                            <input
                              class="form-check-input me-1 filter-radio"
                              type="radio"
                              value=""
                              name="default"
                              id="second-check"
                              onClick={(e) => {
                                console.log(e.target.checked);
                                if (e.target.checked === true) {
                                  document.getElementById(
                                    "second"
                                  ).style.display = "block";
                                  document.getElementById(
                                    "first"
                                  ).style.display = "none";
                                }
                              }}
                            />
                            Rating
                          </label>
                          <label class="list-group-item  border-0 fw-bold h6">
                            <input
                              class="form-check-input me-1 filter-radio"
                              type="radio"
                              value=""
                              name="default"
                              id="second-check"
                              onClick={(e) => {
                                console.log(e.target.checked);
                                if (e.target.checked === true) {
                                  document.getElementById(
                                    "second"
                                  ).style.display = "block";
                                  document.getElementById(
                                    "first"
                                  ).style.display = "none";
                                }
                              }}
                            />
                            Veg or Non-VEg
                          </label>
                        </div>
                      </div>
                      <div className="right  col-8 overflow-auto">
                        <div className="px-5 py-3">
                          <div id="first" className="">
                            <div className="text-secondary">
                              <span>SORT BY</span>
                            </div>
                            <div>
                              <ul className="list-group overflow-hidden">
                                <li className="list-group-item p-0 py-2 border-0">
                                  <div className="d-flex align-items-center  justify-content-start">
                                    <input
                                      className=" input-button me-2"
                                      type="radio"
                                      name="flexRadioDefault1"
                                      id="Relevance(Default)1"
                                      onClick={(e) => {
                                        // console.log("yo");
                                        setrestaurantList(restaurantCollection);
                                      }}
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
                                <li className="list-group-item p-0  py-2">
                                  <div className="d-flex align-items-center  justify-content-start">
                                    <input
                                      className=" input-button me-2"
                                      type="radio"
                                      name="flexRadioDefault1"
                                      id="DeliveryTime1"
                                      onClick={filterTime}
                                    />
                                    <label
                                      className="d-flex"
                                      htmlFor="DeliveryTime1"
                                    >
                                      DeliveryTime
                                    </label>
                                  </div>
                                </li>

                                <li className="list-group-item p-0 py-2">
                                  <div className="d-flex align-items-center  justify-content-start">
                                    <input
                                      className=" input-button me-2"
                                      type="radio"
                                      name="flexRadioDefault1"
                                      id="Rating1"
                                      onClick={filterRating}
                                    />
                                    <label className="d-flex" htmlFor="Rating1">
                                      Rating
                                    </label>
                                  </div>
                                </li>
                                <li className="list-group-item p-0 py-2">
                                  <div className="d-flex align-items-center  justify-content-start">
                                    <input
                                      className=" input-button me-2"
                                      type="radio"
                                      name="flexRadioDefault1"
                                      id="Cost:LowtoHigh1"
                                      value="ascend"
                                      onClick={(e) => {
                                        filterCostLowToHigh(e);
                                      }}
                                    />
                                    <label
                                      className="d-flex"
                                      htmlFor="Cost:LowtoHigh1"
                                    >
                                      Cost:LowtoHigh
                                    </label>
                                  </div>
                                </li>
                                <li className="list-group-item p-0 py-2">
                                  <div className="d-flex align-items-center  justify-content-start">
                                    <input
                                      className=" input-button me-2"
                                      type="radio"
                                      name="flexRadioDefault1"
                                      id="Cost:HightoLow1"
                                      value="descend"
                                      onClick={(e) => {
                                        filterCostLowToHigh(e);
                                      }}
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
                            <h1>second box</h1>
                          </div>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>

                    {/* <!-- Modal footer --> */}
                    <div class="modal-footer">
                      {/* <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button> */}
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
                      onClick={(e) => {
                        // console.log("yo");
                        setrestaurantList(restaurantCollection);
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
                      onClick={filterTime}
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
                      onClick={filterRating}
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
                      value="ascend"
                      onClick={(e) => {
                        filterCostLowToHigh(e);
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
                      value="descend"
                      onClick={(e) => {
                        filterCostLowToHigh(e);
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-6 ">
            <div className="">
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
                <i class="fa fa-search" aria-hidden="true"></i>
              </input> */}
              {/* <input className="form-control border rounded-pill px-3 m-0">
                {" "}
                <i class="fa fa-search" aria-hidden="true"></i>
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
        <div className="mx-lg-5 p-5  row justify-content-center">
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

              <RestaurantCard
                key={restaurant?.info?.id}
                {...restaurant?.info}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
