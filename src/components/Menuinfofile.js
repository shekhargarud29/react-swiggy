import { useEffect, useState } from "react";
// import { TextField, InputAdornment } from "@mui/material";

export const MenuInfo = ({ menuItem, menuList }) => {
  const [scrollDeal, setScrollDeal] = useState(0);

  const [offers, setOffers] = useState([]);

  // setMenuItem(data?.data?.cards[2]?.card?.card);
  // setOffers(data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle);

  // console.log(menuItem?.info);
  // console.log(menuList?. data);
  // console.log(offers);
  useEffect(() => {
    setOffers(
      menuList?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  }, [menuList?.data?.cards]);
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    feeDetails,
  } = menuItem?.info;
  const deals = offers.map((offer) => {
    const title = () => {
      if (offer?.info?.couponCode) {
        // console.log(offer?.info?.couponCode);
        return offer?.info?.couponCode;
      } else {
        // console.log(offer?.info?.description);
        return offer?.info?.description;
      }
    };
    const titleResult = title();
    // console.log(offer);
    const offerarray = [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day",
        title1: `${offer?.info?.header}`,
        title2: `${titleResult}`,
      },
    ];
    return offerarray;
  });
  // console.log(deals);
  // console.log(offerarray);
  // console.log(offers);
  // console.log(offers[0]?.info?.header);

  // const deals = [
  //   {
  //     icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day",
  //     title1: `${offers[0]?.info?.header}`,
  //     title2: "ENDS IN 13h : 54m : 13s",
  //   },
  //   {
  //     icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
  //     title1: "Items At ₹169",
  //     title2: "ENDS IN 13h : 54m : 13s",
  //   },
  //   {
  //     icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
  //     title1: "Items At ₹169",
  //     title2: "ENDS IN 13h : 54m : 13s",
  //   },
  //   {
  //     icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
  //     title1: "Items At ₹169",
  //     title2: "ENDS IN 13h : 54m : 13s",
  //   },
  //   {
  //     icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
  //     title1: "Items At ₹169",
  //     title2: "ENDS IN 13h : 54m : 13s",
  //   },
  // ];
  return (
    <>
      <div className="border  row justify-content-center">
        <div className="border p-0 col-6">
          <div className="p-2 px-3 pt-4">
            <h3 className="fw-bold">{name}</h3>
          </div>
          <div
            style={{
              background:
                "linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)",
              padding: "0px 16px 16px",
              borderBottomLeftRadius: "36px",
              borderBottomRightRadius: "36px",
            }}
          >
            <div
              className="border rounded-5 py-2 "
              style={{ backgroundColor: "white" }}
            >
              <div className="p-1 px-3 ">
                <div className="d-flex align-center">
                  <sub>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      role="img"
                      aria-hidden="true"
                      strokecolor="rgba(2, 6, 12, 0.92)"
                      fillcolor="rgba(2, 6, 12, 0.92)"
                    >
                      <circle
                        cx={10}
                        cy={10}
                        r={9}
                        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                      />
                      <path
                        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="StoreRating20_svg__paint0_linear_32982_71567"
                          x1={10}
                          y1={1}
                          x2={10}
                          y2={19}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#21973B" />
                          <stop offset={1} stopColor="#128540" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </sub>
                  <h5 className="mx-2 fw-bolder">
                    {avgRating} ({totalRatingsString}) <sup>.</sup>{" "}
                    {costForTwoMessage}
                  </h5>
                </div>
                <div className="text-danger fs-6">
                  <a href="/" className="text-danger">
                    {cuisines.join(", ")}
                  </a>
                </div>
                <div className="d-flex my-2  align-items-center">
                  <div className="mx-1 py-1  d-flex flex-column align-items-center">
                    <div
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "rgb(196, 196, 196)",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "1px",
                        height: "23px",
                        background: "rgb(196, 196, 196)",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "rgb(196, 196, 196)",
                      }}
                    ></div>
                  </div>
                  <div className="mx-1 fw-medium">
                    <div className="mb-2">
                      <small>
                        Outlet
                        <span className="text-secondary"> {areaName}</span>
                      </small>
                    </div>
                    <div className="my-1">
                      <small>{sla?.slaString}</small>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderImage: "initial",
                  borderBottom: "1px solid rgba(2, 6, 12,.25)",
                  margin: "10px 0px",
                }}
              ></hr>
              <div className="pt-1 px-3 ">
                <div>
                  <h6 className="fs-6 d-flex align-items-center text-secondary">
                    <img
                      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
                      alt="DISTANCE_FEE_NON_FOOD_LM"
                      aria-hidden="true"
                      className=" me-2"
                      style={{ Width: "25px", height: "25px" }}
                    />
                    <small>{feeDetails?.message.replace(/<\/?b>/g, "")}</small>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 px-3 pt-4">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="fw-bolder col-12">Deals for you</h4>
              </div>
              <div>
                <button
                  className="btn btn-outline-warning  rounded-pill mx-1"
                  onClick={() => {
                    if (scrollDeal >= 2) {
                      setScrollDeal(scrollDeal - 2);
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
                    console.log(scrollDeal);
                    if (scrollDeal <= 2) {
                      setScrollDeal(scrollDeal + 2);
                    } else {
                      console.log("exceed");
                    }
                  }}
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
                    className="me-3   p-2 col-5 d-flex  border border-2 rounded-4"
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
          <div className="p-2 px-3 pt-4">
            <div>
              <div className="text-center text-secondary">
                <h6>-: MENU :-</h6>
              </div>
              <div className=" my-4">
                <div
                  className="rounded border p-2 d-flex  align-items-center"
                  style={{
                    backgroundColor: "#f2f2f3",
                    position: "relative",
                    color: "#6c757d",
                  }}
                >
                  <button
                    type="button"
                    className="btn p-1  flex-grow-1 text-center btn-block"
                    style={{
                      color: "#6c757d",

                      border: "none",
                    }}
                  >
                    Search for dishes
                  </button>
                  <i
                    className="fa-solid fa-magnifying-glass "
                    style={{ position: "absolute", top: "35%", right: "2%" }}
                  ></i>
                </div>
              </div>
              <div className="d-flex  pb-3">
                <div
                  className="border border-2 me-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "25px",

                    padding: "10px 16px",
                    height: "35px",
                    width: "70px",
                  }}
                >
                  <input type="checkbox" id="VEG" className="shadow" />
                </div>
                <div
                  className="border border-2 mx-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "25px",

                    padding: "10px 16px",
                    height: "35px",
                    width: "70px",
                  }}
                >
                  <input
                    type="checkbox"
                    // aria-checked="false"
                    // aria-label="Enable veg option"
                    id="NONVEG"
                    className="shadow"
                  />
                </div>
              </div>
              <hr
                style={{
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderImage: "initial",
                  borderBottom: "1px solid rgba(2, 6, 12,.75)",
                  margin: "10px 0px",
                }}
              ></hr>
            </div>
            <div>
              <div className="d-flex pt-4 justify-content-between">
                <div>
                  <h5 className="fw-bolder col-12">Top picks</h5>
                </div>
                <div>
                  <button
                    className="btn btn-outline-warning  rounded-pill mx-1"
                    onClick={() => {
                      if (scrollDeal >= 2) {
                        setScrollDeal(scrollDeal - 2);
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
                      // console.log(scrollDeal);
                      if (scrollDeal <= 2) {
                        setScrollDeal(scrollDeal + 2);
                      } else {
                        console.log("exceed");
                      }
                    }}
                  >
                    <i className="fa-solid fa-arrow-right "></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
