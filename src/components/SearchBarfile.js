export const SearchBar = () => {
  return (
    <>
      <div className="" style={{ backgroundColor: "white" }}>
        {/* <div className="mx-auto " style={{ width: "54%", zIndex: "" }}> */}
        <div
          style={{
            // width: "54%",
            position: "sticky",
            top: "100px ",
            left: "0px",
            zIndex: "8888",
            background: "white",
          }}
        >
          <div className=" mb-5 ">
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
                />

                <i
                  className="fa-solid fa-magnifying-glass "
                  style={{ position: "absolute", top: "35%", right: "2%" }}
                ></i>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="p-2 " style={{ height: "100vh" }}>
          <div>
            <div>
              <h5 style={{ color: "#3d4152" }} className="fw-bolder">
                Popular Cuisines
              </h5>
            </div>
            <div className="d-flex">
              <div className="" style={{ width: "10%" }}>
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65"
                  style={{ width: "100%" }}
                  alt="kk"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
