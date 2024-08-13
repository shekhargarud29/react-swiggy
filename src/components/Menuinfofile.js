// import { useState } from "react";
import { Link } from "react-router-dom";
import { Carousal } from "./Carouselfile";
// import { useState } from "react";
import { MenuItemcards } from "./MenuItemcards";
// import { useMenuSortBy } from "../hooks/useMenuSortBy";
import { MenuCategory } from "./MenuCategory";
import { MenuSortBy } from "./MenuSortBy";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

// import { TextField, InputAdornment } from "@mui/material";

export const MenuInfo = ({
  menuItem,
  offers,
  menuDatas,
  setMenuDatas,
  cloneMenuDatas,
}) => {
  // const [scrollDeal, setScrollDeal] = useState(0);
  // const [scrollPick, setScrollPick] = useState(0);
  // const [arrow, setArrow] = useState(false);

  // const [offers, setOffers] = useState([]);
  // const [license, setLicense] = useState({});
  // const [recommended, setRecommended] = useState([]);
  // const [menuDatas, setMenuDatas] = useState([]);

  // setMenuItem(data?.data?.cards[2]?.card?.card);
  // setOffers(data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle);

  // console.log(menuItem?.info);
  // console.log(menuList?.data);
  // console.log(offers);
  // useEffect(() => {
  // setOffers(
  //   menuList?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
  // );
  // setMenuDatas(
  //   menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  // setLicense(
  //   menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
  //     ?.card?.card || {}
  // );
  // }, [menuList?.data?.cards]);

  // console.log(topPicks?.carousel);
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
  const dispatch = useDispatch();
  const addingItem = (val) => {
    dispatch(addItem(val));
  };

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
      <div>
        {/* menu Description */}
        <div>
          <div style={{ fontSize: "11px" }} className="py-4">
            <Link to="/" className="text-secondary text-decoration-none">
              Home
            </Link>
            <span className="text-secondary">
              {" "}
              / {menuItem?.info?.city} / {menuItem?.info?.name}
            </span>
          </div>
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
                {feeDetails?.message && (
                  <div>
                    <h6 className="fs-6 d-flex align-items-center text-secondary">
                      <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
                        alt="DISTANCE_FEE_NON_FOOD_LM"
                        aria-hidden="true"
                        className=" me-2"
                        style={{ Width: "25px", height: "25px" }}
                      />

                      <small>
                        {feeDetails?.message.replace(/<\/?b>/g, "")}
                      </small>
                    </h6>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Deals */}
        <Carousal deals={deals} />
        {/* <div className="p-2 px-3 pt-4">
          <div className="d-flex pb-3 justify-content-between">
            <div>
              <h4 className="fw-bolder col-12">Deals for you</h4>
            </div>
            <div>
              <button
                className="carousal-btn  mx-1"
                onClick={() => {
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
                  console.log(scrollDeal);
                  if (scrollDeal <= 2) {
                    setScrollDeal(scrollDeal + 2);
                  } else {
                    console.log("exceed");
                  }
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
        </div> */}
        {/* MEnu */}
        <div className="p-2 px-3 pt-4">
          {/* Heading */}
          <div>
            <div className="text-center text-secondary">
              <h6>-: MENU :-</h6>
            </div>
            {/* Search Bar */}
            <div className=" my-4">
              <Link to="/searchbar" className="text-decoration-none text-dark">
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
              </Link>
            </div>
            {/* Filter */}
            <MenuSortBy
              menuDatas={menuDatas}
              setMenuDatas={setMenuDatas}
              cloneMenuDatas={cloneMenuDatas}
            />
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
          {/* Top Picks */}
          {/* <div>
              <div className="d-flex pt-4 justify-content-between">
                <div>
                  <h5 className="fw-bolder col-12">{topPicks?.title}</h5>
                </div>
                <div>
                  <button
                    className="btn btn-outline-warning  rounded-pill mx-1"
                    onClick={() => {
                      if (scrollPick >= 2) {
                        setScrollPick(scrollPick - 2);
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
                      if (scrollPick <= 2) {
                        setScrollPick(scrollPick + 2);
                      } else {
                        console.log("exceed");
                      }
                    }}
                  >
                    <i className="fa-solid fa-arrow-right "></i>
                  </button>
                </div>
              </div>
              {topPicks?.carousel && (
                <div className="p-1 d-flex overflow-hidden">
                  {topPicks?.carousel.map((topPick, index) => {
                    return (
                      <div
                        key={index}
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
                          style={{ position: "absolute", bottom: "0%" }}
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
            </div> */}
        </div>
        {/* gap */}
        <div style={{ backgroundColor: "#f2f2f3", padding: "9px" }}></div>
        {/* Recommended */}
        {/* <div className="p-3">
            <div>
              <div className="card border-0 ">
                <div
                  className="card-header p-0 py-2 border-0 "
                  style={{ backgroundColor: "white" }}
                >
                  <a
                    className="btn fw-bold d-block border-0 p-0"
                    data-bs-toggle="collapse"
                    href="#Recommended"
                  >
                    <h5 className="d-flex justify-content-between">
                      {recommended?.title}{" "}
                      <i className="fa-solid fa-chevron-down fw-bold"></i>
                    </h5>
                  </a>
                </div>
                <div id={recommended?.title} className="collapse show">
                  <div className="card-body p-0 pt-3">
                    {recommended?.itemCards &&
                      // console.log(recommended?.itemCards.length),

                      recommended.itemCards.map((itemCard, index) => {
                        console.log(recommended?.itemCards.length - 1);
                        const { name, ratings, description, imageId, isVeg } =
                          itemCard?.card?.info;
                        const { rating, ratingCountV2 } =
                          ratings?.aggregatedRating;
                       
                        return (
                          <div
                            key={index}
                            id={`a${index}`}
                            className="row pt-4 justify-content-between"
                            style={{
                              paddingBottom: "40px",
                              borderBottom:
                                index < recommended?.itemCards.length - 1
                                  ? "2px solid #f2f2f3"
                                  : "",
                            }}
                          >
                            
                            <div className="left col-8 ">
                              {isVeg ? (
                                <div
                                  className="border border-2 border-success   rounded-1"
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
                                  className="border border-2 border-danger  rounded-1"
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
                                <div
                                  className="py-1  "
                                  style={{ fontSize: "16px" }}
                                >
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

                              <div>
                                <p
                                  className="fw-medium py-1"
                                  style={{ color: "#414449" }}
                                >
                                  {description}
                                </p>
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
          </div> */}

        {/* categories */}

        {menuDatas.map((menuData, index) => {
          const { carousel, categories, title, itemCards } =
            menuData?.card?.card;

          return (
            <>
              <div>
                {carousel ? (
                  <div key={`A${index}`}>
                    {/* Top Picks */}
                    {/* <SortBy carousel={carousel} /> */}
                    <Carousal
                      topPicks={carousel}
                      title={title}
                      addingItem={addingItem}
                    />
                    {/* <div>
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
                    {carousel && (
                      <div className="p-1 d-flex overflow-hidden">
                        {carousel.map((topPick, index) => {
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
                  </div> */}
                  </div>
                ) : categories ? (
                  <div key={`A${index}`}>
                    {/* categories */}

                    <MenuCategory
                      title={title}
                      categories={categories}
                      addingItem={addingItem}
                    />

                    {/* <div className="p-3">
                    <h5>
                      <b>{title}</b>
                    </h5>

                    <div>
                      {categories.map((categoryData, index) => {
                        // console.log(categoryData?.title.replace(/\s/g, ""));
                        // console.log(categories.length);
                        return (
                          <div
                            key={`B${index}`}
                            className="py-2"
                            style={{
                              borderBottom:
                                index < categories.length - 1
                                  ? "2px solid #f2f2f3"
                                  : "",
                            }}
                          >
                            <div
                              className="card-header p-0 py-2 border-0 "
                              style={{ backgroundColor: "white" }}
                            >
                              <a
                                className="btn fw-bold d-block border-0 p-0"
                                data-bs-toggle="collapse"
                                href={`#${categoryData?.title
                                  .replace(/\s/g, "")
                                  .replace(/'/g, "")}`}
                              >
                                <h5 className="d-flex justify-content-between">
                                  {categoryData?.title} (
                                  {categoryData?.itemCards.length})
                                  <i className="fa-solid fa-chevron-down fw-bold"></i>
                                </h5>
                              </a>
                            </div>
                            <div
                              key={`C${index}`}
                              id={categoryData?.title
                                .replace(/\s/g, "")
                                .replace(/'/g, "")}
                              className="collapse"
                            >
                              <div className="card-body p-0 pt-2">
                                {categoryData?.itemCards &&
                                  categoryData.itemCards.map(
                                    (itemCard, index) => {
                                      const {
                                        name,
                                        ratings,
                                        description,
                                        imageId,
                                        isVeg,
                                      } = itemCard?.card?.info;
                                      const { rating, ratingCountV2 } =
                                        ratings?.aggregatedRating;
                                      // const{}
                                      return (
                                        <div
                                          key={`D${index}`}
                                          // id={`a${index}`}
                                          className="row pt-4 justify-content-between"
                                          style={{
                                            paddingBottom: "40px",
                                            borderBottom:
                                              index <
                                              categoryData?.itemCards.length - 1
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
                                                    borderLeft:
                                                      "7px solid transparent",
                                                    borderRight:
                                                      "7px solid transparent",
                                                    borderBottom:
                                                      "10px solid #e43b4f",
                                                  }}
                                                ></div>
                                              </div>
                                            )}
                                            <div
                                              className=""
                                              style={{ color: "#414449" }}
                                            >
                                              <h5 className="m-0">{name}</h5>
                                              <h6> &#8377; 375 </h6>
                                            </div>
                                            {rating ? (
                                              <div
                                                className="py-1  "
                                                style={{
                                                  fontSize: "16px",
                                                }}
                                              >
                                                <i
                                                  className="fa-solid fa-star fa-xs"
                                                  style={{
                                                    color: "#116649",
                                                  }}
                                                >
                                                  {" "}
                                                  <span className="fw-bold">
                                                    {rating}{" "}
                                                  </span>
                                                </i>
                                                <span
                                                  className="fw-medium"
                                                  style={{
                                                    color: "#414449",
                                                  }}
                                                >
                                                  {" "}
                                                  ({ratingCountV2})
                                                </span>
                                              </div>
                                            ) : null}

                                            <div>
                                              <p
                                                className="fw-medium py-1 textflow"
                                                style={{
                                                  color: "#414449",
                                                }}
                                              >
                                                {description}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="right col-3">
                                            <div
                                              className=" ms-3 "
                                              style={{
                                                position: "relative",
                                              }}
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
                                                  <h5 className=" fw-bold m-0 py-1 ">
                                                    {" "}
                                                    ADD
                                                  </h5>
                                                </button>
                                                <small
                                                  className="text-center m-0 "
                                                  style={{
                                                    color: "#8d8f91",
                                                  }}
                                                >
                                                  customisable
                                                </small>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div> */}
                    {/* gap */}
                    <div
                      style={{ backgroundColor: "#f2f2f3", padding: "9px" }}
                    ></div>
                  </div>
                ) : itemCards ? (
                  <div key={`A${index}`}>
                    {/* <MenuSortBy itemCards={itemCards} /> */}
                    {/* ItemCards */}
                    <MenuItemcards
                      title={title}
                      itemCards={itemCards}
                      addingItem={addingItem}
                    />
                    {/* <div className="p-3">
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
                          href={`#${title
                            .replace(/\s/g, "")
                            .replace(/'/g, "")}`}
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
                              const {
                                name,
                                ratings,
                                description,
                                imageId,
                                isVeg,
                              } = itemCard?.card?.info;
                              const { rating, ratingCountV2 } =
                                ratings?.aggregatedRating;
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
                                            borderRight:
                                              "7px solid transparent",
                                            borderBottom: "10px solid #e43b4f",
                                          }}
                                        ></div>
                                      </div>
                                    )}
                                    <div
                                      className=""
                                      style={{ color: "#414449" }}
                                    >
                                      <h5 className="m-0">{name}</h5>
                                      <h6> &#8377; 375 </h6>
                                    </div>
                                    {rating ? (
                                      <div
                                        className="py-1  "
                                        style={{ fontSize: "16px" }}
                                      >
                                        <i
                                          className="fa-solid fa-star fa-xs"
                                          style={{ color: "#116649" }}
                                        >
                                          {" "}
                                          <span className="fw-bold">
                                            {rating}{" "}
                                          </span>
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
                                      <strong className="text-secondary">
                                        More
                                      </strong>
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
                                          <h5 className=" fw-bold m-0 py-1 ">
                                            {" "}
                                            ADD
                                          </h5>
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
                  </div> */}
                    {/* gap */}
                    <div
                      style={{ backgroundColor: "#f2f2f3", padding: "9px" }}
                    ></div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          );
        })}
        {/* licence */}
        <div
          className="p-4 pt-2 pb-5 d-grid gap-3"
          style={{ backgroundColor: "#f1f1f6", color: "#93959f" }}
        >
          {menuDatas.map((menuData, index) => {
            const {
              [`@type`]: types,
              type,
              imageId,
              text,
              name,
              completeAddress,
              area,
            } = menuData?.card?.card;
            return (
              <div key={`f${index}`}>
                {types ===
                "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo" ? (
                  <div key={`P${index}`}>
                    <div className="d-flex align-items-center">
                      <div className="me-4" style={{ width: "10%" }}>
                        <img
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/${imageId}`}
                          className="w-100"
                          alt={type}
                        />
                      </div>
                      <p className="m-0 ">{text[0]}</p>
                    </div>
                    <hr></hr>
                  </div>
                ) : types ===
                  "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress" ? (
                  <div key={`P${index}`}>
                    <div>
                      <b>{name}</b>
                      <p>(Outlet:{area})</p>
                    </div>
                    <div>
                      <p>
                        <i className="fa-solid fa-location-dot me-2"></i>
                        {completeAddress}
                      </p>
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-center p-2 pb-5 text-dark fw-bold">
                      <small>
                        For better experience, download the Swiggy app now
                      </small>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
          {/* <div className="d-flex align-items-center">
              <div className="me-4" style={{ width: "10%" }}>
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i"
                  className="w-100"
                  alt="FSSAI"
                />
              </div>
              <p className="m-0 ">License No. 11519005000992</p>
            </div>
            <hr></hr>
            <div>
              <b>Wow! Momo</b>
              <p>(Outlet:Kurla West)</p>
            </div>
            <div>
              <p>
                <i className="fa-solid fa-location-dot me-2"></i>
                SG 6, Second floor Foodcourt, Phoenix Marketcity Mall LBS Road
                Kurla , Mumbai 400070
              </p>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-center pb-5 text-dark fw-bold">
              <small>For better experience, download the Swiggy app now</small>
            </div> */}
        </div>
      </div>
    </>
  );
};
