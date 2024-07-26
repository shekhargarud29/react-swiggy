import { useState } from "react";

export const MenuItemcards = (title, itemCards) => {
  //   const id = title.replace(/\s/g, "").replace(/'/g, "");
  console.log(title);
  const [arrow, setArrow] = useState(false);
  return (
    <>
      <div className="p-3">
        <div className="card border-0 ">
          <div
            className="card-header p-0 py-2 border-0 "
            style={{ backgroundColor: "white" }}
            onClick={() => {
              setArrow(!arrow);
              console.log(arrow);
            }}
          >
            <a
              className="btn fw-bold d-block border-0 p-0"
              data-bs-toggle="collapse"
              href={`#${title.replace(/\s/g, "").replace(/'/g, "")}`}
            >
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
                  // console.log(itemCards.length - 1);
                  const { name, ratings, description, imageId, isVeg } =
                    itemCard?.card?.info;
                  const { rating, ratingCountV2 } = ratings?.aggregatedRating;
                  // const{}
                  return (
                    <div
                      key={`Z${index}`}
                      id={`a${index}`}
                      className="row pt-4 justify-content-between"
                      style={{
                        paddingBottom: "40px",
                        borderBottom:
                          index < itemCards.length - 1
                            ? "2px solid #f2f2f3"
                            : "",
                      }}
                    >
                      <div className="left col-8 ">
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
                          <h6> &#8377; 375 </h6>
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
                              // textOverflow: {if (document.getElementsByClassName("description")[0].innerHTML) {
                              //   <>

                              // } else {

                              // }
                              // },
                            }}
                          >
                            {description}
                          </p>
                          <strong className="text-secondary">More</strong>
                        </div>
                      </div>
                      <div className="right col-3">
                        <div
                          className=" ms-3 "
                          style={{ position: "relative" }}
                        >
                          <img
                            className="rounded-4 menu-img"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                            alt="Combo for 1 Non-Veg"
                          ></img>
                          <div
                            className="px-4 text-center d-flex flex-column justify-content-center"
                            style={{
                              width: "100%",
                              position: "absolute",
                              bottom: "-25%",
                              left: "0%",
                              // paddingInline: "",
                            }}
                          >
                            <button
                              className="btn btn-light fs-h1 text-success w-100  shadow-sm"
                              type="button"
                            >
                              <h5 className=" fw-bold m-0 py-1 "> ADD</h5>
                            </button>
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
  );
};
