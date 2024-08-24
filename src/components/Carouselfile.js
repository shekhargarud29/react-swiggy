import { useState } from "react";
import { Dish_Url } from "../const/config";
import { Category } from "./Category";

export const Carousal = ({
  restaurantDish,
  restaurantCollection,
  deals,
  topPicks,
  title,
  addingItem,
}) => {
  const [scrollDish, setScrollDish] = useState(0);
  const [scrollDeal, setScrollDeal] = useState(0);
  const [scrollPick, setScrollPick] = useState(0);

  const [scrollRes, setScrollRes] = useState(0);
  //   const [carousal, setcarousal] = useState(true);

  return restaurantDish ? (
    <>
      <div>
        <div className="border-bottom pb-5 ">
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="fw-bold col-12">What's on your mind?</h4>
            </div>
            <div className="d-flex">
              <button
                className="carousal-btn mx-1"
                type="button"
                onClick={() => {
                  if (scrollDish >= 3) {
                    setScrollDish(scrollDish - 3);
                  } else {
                    console.log("exceed");
                  }
                }}
                disabled={scrollDish < 3}
              >
                <i className="fa-solid fa-arrow-left " />
              </button>
              <button
                className="carousal-btn mx-1"
                onClick={() => {
                  if (scrollDish <= 6) {
                    setScrollDish(scrollDish + 3);
                  } else {
                    console.log("exceed");
                  }
                }}
                disabled={scrollDish > 6}
              >
                <i className="fa-solid fa-arrow-right "></i>
              </button>
            </div>
          </div>
          <div className="d-flex flex-nowrap overflow-hidden ">
            {restaurantDish &&
              restaurantDish.map((dish, index) => {
                // console.log(dish);
                return (
                  <div
                    key={`O${index}`}
                    className=" col-2-lg"
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
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  ) : restaurantCollection ? (
    <>
      <div className="border-bottom py-5 px-0">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="fw-bolder col-12">What's on your mind?</h4>
          </div>
          <div>
            <button
              className="carousal-btn mx-1"
              onClick={() => {
                if (scrollRes >= 3) {
                  setScrollRes(scrollRes - 3);
                } else {
                  console.log("exceed");
                }
              }}
              disabled={scrollRes < 3}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="carousal-btn mx-1"
              onClick={() => {
                if (scrollRes <= 9) {
                  setScrollRes(scrollRes + 3);
                } else {
                  console.log("exceed");
                }
              }}
              disabled={scrollRes > 9}
            >
              <i className="fa-solid fa-arrow-right "></i>
            </button>
          </div>
        </div>
        <div className="d-flex  overflow-hidden" style={{ minWidth: "auto" }}>
          {restaurantCollection &&
            restaurantCollection.map((restaurant, index) => {
              // console.log(dish);
              return (
                <div
                  key={`T${index}`}
                  className="  py-3 pe-4 border-0 "
                  style={{
                    transform: `translateX(-${scrollRes * 134}%) `,
                    transition: "transform 2s",
                    minWidth: "275px",
                  }}
                >
                  <Category key={`H${index}`} {...restaurant?.info} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  ) : deals ? (
    <>
      <div className="p-2 px-3 pt-4">
        <div className="d-flex pb-3 justify-content-between">
          <div>
            <h4 className="fw-bolder col-12">Deals for you</h4>
          </div>
          <div>
            <button
              className="carousal-btn  mx-1"
              onClick={() => {
                // console.log(deals?.length);
                if (scrollDeal >= 2) {
                  setScrollDeal(scrollDeal - 2);
                } else {
                  console.log("exceed");
                }
              }}
              disabled={scrollDeal < 2}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="carousal-btn mx-1"
              onClick={() => {
                // console.log(scrollDeal);
                if (scrollDeal <= 2) {
                  setScrollDeal(scrollDeal + 2);
                } else {
                  console.log("exceed");
                }
                // console.log(scrollDeal);
              }}
              disabled={scrollDeal > 2}
            >
              <i className="fa-solid fa-arrow-right "></i>
            </button>
          </div>
        </div>
        <div className="d-flex   overflow-hidden">
          {deals.map((deal, index) => {
            // console.log(deal[0]);
            return (
              <div
                key={index}
                className="me-3   p-2 col-5 d-flex  border  rounded-4"
                style={{
                  transform: `translateX(-${scrollDeal * 100}%) `,
                  transition: "transform 2s",
                }}
              >
                <div className="pe-3">
                  <img
                    className=""
                    src={deal[0].icon}
                    width={48}
                    height={48}
                    alt="Items At ₹169"
                  />
                </div>
                <div className="pe-5">
                  <h6 className="fw-bolder">
                    <strong>{deal[0].title1}</strong>
                  </h6>
                  <h6 className="text-secondary">
                    <small>{deal[0].title2}</small>
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : topPicks ? (
    <>
      <div>
        <div className="d-flex pt-4 justify-content-between">
          <div>
            <h5 className="fw-bolder col-12">{title}</h5>
          </div>
          <div>
            <button
              className="carousal-btn mx-1"
              onClick={() => {
                if (scrollPick >= 2) {
                  setScrollPick(scrollPick - 2);
                } else {
                  console.log("exceed");
                }
              }}
              disabled={scrollPick < 2}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="carousal-btn mx-1"
              onClick={() => {
                // console.log(scrollDeal);
                if (scrollPick <= 2) {
                  setScrollPick(scrollPick + 2);
                } else {
                  console.log("exceed");
                }
              }}
              disabled={scrollPick > 2}
            >
              <i className="fa-solid fa-arrow-right "></i>
            </button>
          </div>
        </div>
        {topPicks && (
          <div className="p-1 d-flex overflow-hidden">
            {topPicks.map((topPick, index) => {
              // console.log(topPick);
              return (
                <div
                  key={`Q${index}`}
                  className=" m-0 me-3 my-3 row col-lg-4 "
                  // key={(index) => {
                  //   console.log(`a${index}`);
                  //   return index;
                  // }}
                  style={{
                    transform: `translateX(-${scrollPick * 50}%) `,
                    transition: "transform 2s",
                    position: "relative",
                  }}
                >
                  <img
                    className=" p-0  rounded"
                    // style={{ width: "100%" }}
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${topPick?.creativeId}`}
                    alt={topPick?.title}
                  ></img>
                  <div
                    className="text-light"
                    style={{
                      position: "absolute",
                      bottom: "0%",
                    }}
                  >
                    <div className="d-flex py-3 justify-content-between align-items-center">
                      <span className="fw-medium">
                        &#8377;
                        {(topPick?.dish?.info?.defaultPrice ||
                          topPick?.dish?.info?.price) / 100}
                      </span>
                      <button
                        className="btn btn-light fw-bold text-success px-4"
                        type="button"
                        onClick={() => addingItem(topPick)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  ) : null;
};
