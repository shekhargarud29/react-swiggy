export const Shimmer = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center">
        <div
          className=" p-5  text-center text-light"
          style={{ backgroundColor: "#171a29" }}
        >
          <div className="loading  p-5 mx-auto">
            <div
              className="p-1 mx-auto  loading-div"
              // style={{ Width: "100%" }}
            ></div>
            <img
              className=""
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
              alt="carousel"
              style={{
                height: "50px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: " translate3d(-50%, -50%, 0)",
              }}
            />
          </div>
          <h2 className="p-5 pt-0 m-0 fw-light" style={{ color: "#d1d1d4" }}>
            Looking for great food near you ...
          </h2>
        </div>
        <div className="col-10 mx-auto">
          <div className="d-flex">
            <div className="col-3 px-3">
              {/* left side */}
              <div
                className="mx-2 py-5"
                style={{
                  border: "5px solid #eef0f5",
                  borderWidth: " 0px 2px",
                }}
              >
                <div
                  className="mb-3 py-3 d-flex  align-items-center "
                  style={{ backgroundColor: "#eef0f5" }}
                >
                  <div
                    className="shimmerProfile p-4 mx-4  rounded-pill"
                    style={{ backgroundColor: "white" }}
                  ></div>
                  <div
                    className="shimmerLine w-25  "
                    style={{ width: "35%", backgroundColor: "white" }}
                  ></div>
                </div>
                {new Array(6).fill(0).map(() => (
                  <div className="mb-3 py-3 d-flex align-items-center ">
                    <div
                      className="shimmerProfile p-4 mx-4  rounded-pill"
                      style={{ backgroundColor: "#eef0f5" }}
                    ></div>
                    <div
                      className="shimmerLine w-25  "
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-9 p-4 px-1">
              {/* Right side */}
              <div
                className="shimmerLine  m-5 mb-0"
                style={{ width: "13%" }}
              ></div>
              <div className=" d-flex py-1 flex-wrap">
                {new Array(6).fill(0).map(() => (
                  <div
                    className="custom-card col-4"
                    style={{ padding: "45px 25px 20px 46px" }}
                  >
                    <div className="mb-3 ">
                      <div className="shimmerImg "></div>
                    </div>
                    <div className="">
                      <div className="shimmerLine w-50 mb-3"></div>
                      <div className="shimmerLine w-25 mb-3"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
