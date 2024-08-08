import { useEffect, useState } from "react";
import { useSearchBar } from "../hooks/useSearchBar";

export const SearchBar = () => {
  // const [searchHeader, setSearchHeader] = useState("");
  // const [searchData, setSearchData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchDish, setSearchDish] = useState([]);
  // useEffect(() => {
  //   const search = async () => {
  //     const response = await fetch(
  //       " https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=19.07480&lng=72.88560"
  //     );
  //     const data = await response.json();
  //     console.log(data?.data?.cards[1]?.card?.card?.header?.title);
  //     setSearchData(data?.data?.cards[1]?.card?.card?.imageGridCards);
  //     setSearchHeader(data?.data?.cards[1]?.card?.card?.header?.title);
  //     console.log(searchData);
  //   };
  //   search();
  // }, []);

  // useEffect(() => {
  //   console.log(searchTerm);
  //   if (searchTerm !== "" && searchTerm.length > 1) {
  //     const searchFun = async () => {
  //       const response = await fetch(
  //         `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=19.07480&lng=72.88560&str=${searchTerm}&trackingId=undefined&includeIMItem=true`
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setSearchDish(data?.data);
  //       console.log(searchDish);
  //     };
  //     searchFun();
  //   } else {
  //     setSearchDish([]);
  //   }
  // }, [searchTerm, setSearchDish]);

  const searchObject = useSearchBar();
  console.log(searchObject?.searchDish);
  if (searchObject?.Loading) {
    return (
      <>
        <div className="container " style={{ height: "100vh" }}>
          <div className="shimmerLine mx-auto w-75"></div>
          <div>
            <div
              className="shimmerLine  m-5 mb-1"
              style={{ width: "13%" }}
            ></div>
            <div className=" d-flex py-1 flex-wrap">
              {new Array(2).fill(0).map(() => (
                <div
                  className="custom-card col-6"
                  style={{ padding: "45px 25px 20px 46px" }}
                >
                  <div className="mb-3 ">
                    <div className="shimmerImg "></div>
                  </div>
                  <div className="">
                    <div className="shimmerLine w-50 mb-2"></div>
                    <div className="shimmerLine w-25 mb-2"></div>
                    <div
                      className="shimmerLine  mb-2"
                      style={{ width: "13%" }}
                    ></div>
                    <div className="d-flex justify-content-end">
                      <div
                        className=" shimmerLine"
                        style={{ width: "17%", height: "25px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  const { setSearchTerm, searchTerm, searchData, searchDish, searchHeader } =
    searchObject;

  return searchObject?.error != null ? (
    <>
      <div style={{ height: "100vh" }}>
        <div className="bg-secondary p-5">
          <div
            className="mx-auto p-5 text-light"
            style={{ width: "max-content" }}
          >
            <h4>{searchObject?.error}</h4>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="" style={{ backgroundColor: "white" }}>
        <div
          className="mx-auto"
          style={{
            width: "54%",
            position: "sticky",
            top: "91px ",
            left: "0px",
            zIndex: "8888",
            background: "white",
            paddingBottom: "8px",
            paddingTop: "48px",
          }}
        >
          <div className=" mb-1">
            <div>
              <div
                className="rounded-1 p-2 d-flex "
                style={{
                  // backgroundColor: "#f2f2f3",
                  position: "relative",
                  // color: "#6c757d",

                  border: "1.5px solid #bebfc5",
                }}
              >
                <input
                  type="text"
                  className="btn p-1  flex-grow-1 text-start fw-medium fs-6"
                  placeholder="Search for restaurants and food
"
                  style={{
                    color: "#6c757d",
                    border: "none",
                  }}
                  value={searchTerm}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setSearchTerm(e.target.value);
                    console.log(searchTerm);
                  }}
                />

                <i
                  className="fa-solid fa-magnifying-glass "
                  style={{ position: "absolute", top: "35%", right: "2%" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto " style={{ width: "54%" }}>
          <div className="p-2 py-5 " style={{ height: "100vh" }}>
            {!searchDish?.suggestions ? (
              <>
                <div>
                  <div>
                    <h5 style={{ color: "#3d4152" }} className="pb-2 fw-bolder">
                      {searchHeader}
                    </h5>
                  </div>
                  <div className="d-flex flex-wrap overflow-hidden py-2">
                    {searchData &&
                      searchData?.info?.map((image, index) => {
                        const { imageId, entityId } = image;
                        console.log(
                          new URLSearchParams(entityId.split("?")[1]).get(
                            "query"
                          )
                        );

                        return (
                          <>
                            <div
                              key={`u${index}`}
                              className="col-2"
                              style={{ width: "10.666667%" }}
                            >
                              <button
                                className="btn"
                                onClick={() => {
                                  setSearchTerm(
                                    new URLSearchParams(
                                      entityId.split("?")[1]
                                    ).get("query")
                                  );
                                }}
                              >
                                <img
                                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${imageId}`}
                                  style={{ width: "100%", height: "100%" }}
                                  alt={new URLSearchParams(
                                    entityId.split("?")[1]
                                  ).get("query")}
                                ></img>
                              </button>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="px-4 ">
                  {searchDish?.suggestions &&
                  searchDish?.suggestions.length === 0 ? (
                    <>
                      {" "}
                      <div className="px-2 py-5">
                        <h6>No match found for "{searchTerm}"</h6>
                      </div>
                      <div>
                        <img
                          style={{ width: "100%" }}
                          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/3_0_assets/EmptyStates/search_not_found"
                        ></img>
                      </div>
                    </>
                  ) : (
                    searchDish?.suggestions?.map((suggestion, index) => {
                      const { cloudinaryId, tagToDisplay, text } = suggestion;
                      return searchDish?.suggestions.length === 0 ? (
                        <>
                          {" "}
                          <div>
                            <h5>No match found for "{searchTerm}"</h5>
                          </div>
                        </>
                      ) : (
                        <>
                          <div key={`w${index}`} className="d-flex">
                            <div className="py-3">
                              <img
                                className="rounded"
                                style={{ width: "100%", height: "80px" }}
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${cloudinaryId}`}
                              ></img>
                            </div>
                            <div className="ms-3 d-flex flex-column justify-content-center">
                              <h6>{text}</h6>
                              <h6 style={{ color: "rgb(104, 107, 120)" }}>
                                {tagToDisplay}
                              </h6>
                            </div>
                          </div>
                        </>
                      );
                    })
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
