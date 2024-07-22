export const Shimmer = () => {
  return new Array(20).fill(0).map(() => (
    <div className="custom-card col-3 p-3">
      <div className="mb-3 ">
        <div className="shimmerImg rounded-3"></div>
      </div>
      <div className="">
        <div className="shimmerLine mb-3"></div>
        <div className="d-flex mb-3 justify-content-between">
          <div className="shimmerLine" style={{ width: "50px" }}></div>
          <div className="shimmerLine" style={{ width: "50px" }}></div>
        </div>
        <div className="text-secondary shimmerLine mb-3"></div>
        <div className="shimmerLine mb-3"></div>
      </div>
    </div>
  ));
};
