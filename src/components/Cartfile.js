import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { clearItem } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { Toast } from "primereact/toast";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
import { useState } from "react";

export const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  // console.log(items.length);
  // localStorage.setItem("items",s)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  // const toast = useRef(null);

  const accept = () => {
    dispatch(clearItem());
    toast.success("Cleared succesfully", {
      position: "top-right",

      autoClose: 750,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        fontWeight: "bolder",
        marginTop: "100px",
      },
      iconTheme: {
        primary: "#06b6d4",
        secondary: "#FFFAEE",
      },
    });
  };

  const reject = () => {
    toast("Not cleared", {
      icon: "🚫",
      position: "bottom-right",
      autoClose: 500,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        fontWeight: "bolder",
      },
    });
  };
  const removingItem = () => {
    confirmDialog({
      group: "templating",
      visible: { visible },
      onHide: () => setVisible(false),
      message: (
        <div className=" flex flex-column align-items-center w-100 gap-3 fs-5 ">
          <i className="fa-solid fa-triangle-exclamation pe-3"></i>
          <span>Please confirm to proceed moving forward.</span>
        </div>
      ),
      header: (
        <div style={{}}>
          <span className="fw-bolder fs-5">Confirmation</span>
        </div>
      ),

      icon: "pi pi-exclamation-triangle",
      accept,
      reject,
      style: {
        width: "50vw",
        borderRadius: "10px",
      },
      // breakpoints: { "1100px": "75vw", "960px": "100vw" },
    });
    // if (window.confirm("Do you want to clear the cart?")) {
    //   dispatch(clearItem());
    //   // toast.
    // }
  };
  // const clearingItem = (val) => {
  //   dispatch(clearItem(val));
  // };

  return (
    <>
      {/* <Toast ref={toast} /> */}
      <ConfirmDialog group="templating" />
      {items && items.length === 0 ? (
        <>
          <div
            className="d-flex flex-column align-items-center justify-content-center p-md-5 p-3 m-md-5"
            style={{ minHeight: "60vh" }}
          >
            <h4>
              <i>Feeling hungry? Browse our menu and fill your cart!</i>
            </h4>
            <button
              className="btn btn-primary mt-3 fw-bold"
              onClick={() => navigate("/")}
            >
              Order Now
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={{ minHeight: "100vh" }}>
            <div className="p-4 pb-0 d-flex justify-content-center">
              <div className="col-8 d-flex justify-content-between align-items-center">
                <h4 className="m-0 fw-bold">Total Items:-{items.length}</h4>
                <button
                  className="btn btn-primary text-light"
                  onClick={() => removingItem()}
                >
                  <h6 className="m-1">CLEAR CART</h6>
                </button>
              </div>
            </div>
            {items.map((item, index) => {
              const { name, ratings, description, imageId, isVeg, price } =
                item?.card?.info || item?.dish?.info;

              const { rating, ratingCountV2 } = ratings?.aggregatedRating || {};

              // if(item?.card){
              //   const { name, ratings, description, imageId, isVeg } =item?.card?.info;
              //   const { rating, ratingCountV2 } = ratings?.aggregatedRating
              //   return(<></>)}
              //   else{
              //     const { name, ratings, description, imageId, isVeg } =
              //       item?.card?.info;
              //     const { rating, ratingCountV2 } = ratings?.aggregatedRating;
              //     return(<></>)
              //   }

              return (
                <>
                  <div className="d-flex flex-column  pt-3 px-4 align-items-center">
                    <div
                      key={`Z${index}`}
                      // id={`a${index}`}
                      className="d-flex col-8 pb-4 justify-content-between"
                      style={{
                        paddingTop: "40px",
                        borderTop: "2px solid #f2f2f3",
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
                      <div className="right col-3">
                        <div
                          className=" ms-3 "
                          style={{ position: "relative" }}
                        >
                          {imageId !== undefined ? (
                            <>
                              <img
                                className="rounded-4 menu-img"
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
                              className="btn btn-danger fs-h1 text-light w-100  shadow-sm"
                              type="button"
                              onClick={() => {
                                dispatch(removeItem(index));
                                toast("Item removed", {
                                  icon: "🗑️",
                                  position: "bottom-right",
                                  autoClose: 500,
                                  style: {
                                    borderRadius: "10px",
                                    background: "#e13647",
                                    color: "#fff",
                                  },
                                });
                              }}
                            >
                              <h5 className=" fw-bold m-0 py-1 "> REMOVE</h5>
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
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
