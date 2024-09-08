import { useState, useRef, useEffect } from "react";
// import { addItem } from "../utils/cartSlice";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addItem, removeItem } from "../utils/cartSlice";

export const MenuItemcards = ({
  title,
  itemCards,
  currentComponent,
  // addingItem,
  // countObj,
  // handleUpdateCounts,
  // handleAdd,
}) => {
  const dispatch = useDispatch();
  const countObj = useSelector((val) => val.cart.countsObj);
  // console.log(countObj);

  //   const id = title.replace(/\s/g, "").replace(/'/g, "");
  // console.log(title);
  const [arrow, setArrow] = useState(false);
  // console.log(Object.keys(countObj).length);

  // countObj != null ? console.log(countObj) : console.log("he");
  return itemCards ? (
    <>
      <div className={currentComponent === "MenuCategory" ? "p-0 py-3" : "p-3"}>
        <div className="card border-0 ">
          <div
            className="card-header p-0 py-2 border-0 "
            style={{ backgroundColor: "white" }}
          >
            <a
              className="btn fw-bold d-block border-0 p-0"
              data-bs-toggle="collapse"
              href={`#${title.replace(/\s/g, "").replace(/'/g, "")}`}
              onClick={() => {
                setArrow(!arrow);
                // console.log(arrow);
              }}
            >
              {currentComponent === "MenuCategory" ? (
                <>
                  <h5 className="d-flex justify-content-between">
                    {title} ({title?.length})
                    {arrow ? (
                      <i className="fa-solid fa-chevron-up fw-bold"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-down fw-bold"></i>
                    )}
                  </h5>
                </>
              ) : (
                <>
                  <h5 className="d-flex justify-content-between">
                    <strong>
                      {" "}
                      {title} ({title.length}){" "}
                    </strong>
                    {arrow ? (
                      <i className="fa-solid fa-chevron-up fw-bold"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-down fw-bold"></i>
                    )}
                  </h5>
                </>
              )}
            </a>
          </div>
          <div
            id={title.replace(/\s/g, "").replace(/'/g, "")}
            className="collapse"
          >
            <div className="card-body p-0 pt-3">
              {itemCards &&
                // console.log(recommended?.itemCards.length),

                itemCards.map((itemCard, index) => {
                  // console.log(itemCards);
                  const {
                    name,
                    ratings,
                    description,
                    imageId,
                    isVeg,
                    price,
                    id,
                  } = itemCard?.card?.info;
                  const { rating, ratingCountV2 } = ratings?.aggregatedRating;
                  // count.current = count.current - 1;
                  // const count = useRef(0);
                  // setCount;
                  // console.log(counts);

                  return (
                    <div
                      key={`Z${index}`}
                      id={`a${index}`}
                      className="d-flex flex-md-row flex-column-reverse pt-4 justify-content-md-between justify-content-center"
                      style={{
                        paddingBottom: "40px",
                        borderBottom:
                          index < itemCards.length - 1
                            ? "2px solid #f2f2f3"
                            : "",
                      }}
                    >
                      <div className="left col-md-8 col-12  me-3  pe-md-4 pt-md-0 pt-5">
                        {isVeg ? (
                          <div
                            className="border  border-success   rounded-1"
                            style={{
                              width: "max-content",
                              padding: "2.50px",
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "9px",
                                height: "9px",
                                borderRadius: "50%",
                                backgroundColor: "#0f8a65",
                                // borderLeft: "7px solid transparent",
                                // borderRight: "7px solid transparent",
                                // borderBottom: "10px solid #0f8a65",
                              }}
                            ></div>
                          </div>
                        ) : (
                          <div
                            className="border  border-danger  rounded-1"
                            style={{
                              width: "max-content",
                              padding: "1.50px",
                            }}
                          >
                            <div
                              className=""
                              style={{
                                width: "0px",
                                height: "0px",
                                borderRadius: "3px",
                                borderLeft: "7px solid transparent",
                                borderRight: "7px solid transparent",
                                borderBottom: "10px solid #e43b4f",
                              }}
                            ></div>
                          </div>
                        )}
                        <div className="" style={{ color: "#414449" }}>
                          <h5 className="m-0">{name}</h5>
                          <h6>&#8377; {price / 100} </h6>
                        </div>
                        {rating ? (
                          <div className="py-1  " style={{ fontSize: "16px" }}>
                            <i
                              className="fa-solid fa-star fa-xs"
                              style={{ color: "#116649" }}
                            >
                              {" "}
                              <span className="fw-bold">{rating} </span>
                            </i>
                            <span
                              className="fw-medium"
                              style={{ color: "#414449" }}
                            >
                              {" "}
                              ({ratingCountV2})
                            </span>
                          </div>
                        ) : null}

                        <div className="d-flex align-items-end">
                          <p
                            className="fw-medium description py-1 m-0 "
                            style={{
                              color: "#414449",
                              overflow: "hidden",
                            }}
                          >
                            {description}
                          </p>
                          <strong className="text-secondary">More</strong>
                        </div>
                      </div>
                      <div className="right col-md-3 col-sm-5  py-md-0 mx-md-0 mx-sm-auto">
                        <div
                          className=" "
                          style={{ position: "relative", minWidth: "150px" }}
                        >
                          {imageId !== undefined ? (
                            <>
                              <img
                                className="rounded-4 menu-img"
                                style={{ width: "100%" }}
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                                alt="Combo for 1 Non-Veg"
                              ></img>
                            </>
                          ) : (
                            <>
                              <div className="rounded-4 menu-img">
                                <img src=" " alt={name}></img>
                              </div>
                            </>
                          )}
                          {/* <img
                            className="rounded-4 menu-img"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                            alt="Combo for 1 Non-Veg"
                          ></img> */}
                          <div
                            className=" text-center d-flex flex-column justify-content-center"
                            style={{
                              width: "100%",
                              padding: "0px 2.5rem ",
                              position: "absolute",
                              bottom: "-25%",
                              left: "0%",
                              // paddingInline: "",
                            }}
                          >
                            {countObj[id] &&
                            countObj[id]?.count > 0 &&
                            Object.keys(countObj).includes(id) ? (
                              <>
                                <div className=" bg-light fs-h1 text-success w-100  rounded d-flex justify-content-evenly align-items-center shadow-sm">
                                  <button
                                    className="btn btn-light fw-bold text-success rounded-end-0 border-0"
                                    style={{ padding: "12.5px" }}
                                    onClick={() => {
                                      // let id = "plus";
                                      // handleAdd(itemCard, index, "plus");
                                      dispatch(addItem(itemCard));
                                    }}
                                  >
                                    <h6 className="m-0 fw-bold">
                                      <i className="fa-solid fa-plus"></i>
                                    </h6>
                                  </button>
                                  <h5 className=" fw-bold m-0 py-1 flex-grow-1  text-center">
                                    {countObj[id].count}
                                  </h5>
                                  <button
                                    className="btn btn-light fw-bold text-success rounded-start-0 border-0 "
                                    style={{ padding: "12.5px" }}
                                    onClick={() => {
                                      // handleAdd(itemCard, index);
                                      dispatch(removeItem(itemCard));
                                    }}
                                  >
                                    <h6 className="m-0 fw-bold">
                                      <i className="fa-solid fa-minus"></i>
                                    </h6>
                                  </button>
                                </div>
                              </>
                            ) : (
                              <div className=" bg-light fs-h1 text-success w-100  rounded d-flex justify-content-evenly align-items-center shadow-sm">
                                <button
                                  className="btn btn-light fs-h1 text-success w-100  shadow-sm"
                                  type="button"
                                  onClick={() => {
                                    // var sign= "plus";
                                    // handleAdd(itemCard, index, "plus");
                                    dispatch(addItem(itemCard));
                                  }}
                                >
                                  <h5 className=" fw-bold m-0 py-1 "> ADD</h5>
                                </button>
                              </div>
                            )}
                            {/* {countObj.length != undefined ? (
                                <button
                                  className="btn btn-light fs-h1 text-success w-100  shadow-sm"
                                  type="button"
                                  onClick={() => {
                                    var id = "plus";
                                    handleAdd(itemCard, index, id);
                                  }}
                                >
                                  <h5 className=" fw-bold m-0 py-1 "> ADD</h5>
                                </button>
                              ) : (
                                <>
                                  <button
                                    className="btn btn-light fs-h1 text-success w-100  shadow-sm"
                                    type="button"
                                    onClick={() => {
                                      var id = "plus";
                                      handleAdd(itemCard, index, id);
                                    }}
                                  >
                                    <h5 className=" fw-bold m-0 py-1 "> not</h5>
                                  </button>
                                </>
                              )} */}

                            {}

                            <small
                              className="text-center m-0 "
                              style={{ color: "#8d8f91" }}
                            >
                              customisable
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};
