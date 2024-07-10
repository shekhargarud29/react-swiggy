import { useRouteError } from "react-router-dom";
export const ErrorPage = () => {
  const error1 = useRouteError();
  const { error, status, statusText } = useRouteError();

  console.log(error1);
  return (
    <>
      <div
        className="  bg-secondary rounded-4 p-4"
        style={{
          color: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <div className="row justify-content-center align-item-center">
          <div className="col-6 d-flex align-items-center">
            <div>
              <h1 className="pb-3">Oops! Page not found</h1>
              <div>
                <h4 className="d-inline">
                  Error: {status} ({statusText}){" "}
                </h4>
                {/* <h4 className="d-inline">{statusText}</h4> */}
              </div>
              <h4>{error?.message}</h4>
            </div>
          </div>
          <div className="col-6">
            <img
              style={{ width: "100%" }}
              src="https://static-00.iconduck.com/assets.00/robot-404-error-errors-illustration-512x427-j192mt0z.png"
              alt="ErrorPage"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
