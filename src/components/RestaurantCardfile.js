import { Img_Url } from "../const/config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  sla,
  cuisines,
  areaName,
}) => {
  // call directly
  // const RestaurantCard = ({imageUrl, title, rating, time, cuisine, location}) => {
  // call using props
  // const { imageUrl, title, rating, time, cuisine, location } = props;

  return (
    // method 1
    // <>
    //   <div className="card  m-0 p-3  col-3 border-0 ">
    //     <img
    //       className="card-image-top rounded-4"
    //       src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
    //       alt="hello"
    //     ></img>
    //     <div className="card-body p-3">
    //       <div>
    //         <h5 className="fw-bold m-0">Chinese Wok</h5>
    //       </div>
    //       <div className="mb-1">
    //         <span>
    //           <svg
    //             width="20"
    //             height="20"
    //             viewBox="0 0 20 20"
    //             fill="none"
    //             role="img"
    //             aria-hidden="true"
    //             strokecolor="rgba(2, 6, 12, 0.92)"
    //             fillcolor="rgba(2, 6, 12, 0.92)"
    //           >
    //             <circle
    //               cx="10"
    //               cy="10"
    //               r="9"
    //               fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
    //             ></circle>
    //             <path
    //               d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
    //               fill="white"
    //             ></path>
    //             <defs>
    //               <linearGradient
    //                 id="StoreRating20_svg__paint0_linear_32982_71567"
    //                 x1="10"
    //                 y1="1"
    //                 x2="10"
    //                 y2="19"
    //                 gradientUnits="userSpaceOnUse"
    //               >
    //                 <stop stopColor="#21973B"></stop>
    //                 <stop offset="1" stopColor="#128540"></stop>
    //               </linearGradient>
    //             </defs>
    //           </svg>
    //           <strong> 4.3 . 25-30 mins</strong>
    //         </span>
    //       </div>
    //       <div>
    //         <p className="m-0 fw-light">Chinese, Asian, Tibetan, Desserts</p>
    //         <p className="m-0 fw-light">Santacruz East</p>
    //       </div>
    //     </div>
    //   </div>
    // </>

    // method 2 (a)
    // <>
    //
    //     <div className="card  m-0 p-3  col-3 border-0 ">
    //       <img
    //         className="card-image-top rounded-4"
    //         src={props.imageUrl}
    //         alt="hello"
    //       ></img>
    //       <div className="card-body p-3">
    //         <div>
    //           <h5 className="fw-bold m-0">{props.title}</h5>
    //         </div>
    //         <div className="mb-1">
    //           <span>
    //             <svg
    //               width="20"
    //               height="20"
    //               viewBox="0 0 20 20"
    //               fill="none"
    //               role="img"
    //               aria-hidden="true"
    //               strokecolor="rgba(2, 6, 12, 0.92)"
    //               fillcolor="rgba(2, 6, 12, 0.92)"
    //             >
    //               <circle
    //                 cx="10"
    //                 cy="10"
    //                 r="9"
    //                 fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
    //               ></circle>
    //               <path
    //                 d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
    //                 fill="white"
    //               ></path>
    //               <defs>
    //                 <linearGradient
    //                   id="StoreRating20_svg__paint0_linear_32982_71567"
    //                   x1="10"
    //                   y1="1"
    //                   x2="10"
    //                   y2="19"
    //                   gradientUnits="userSpaceOnUse"
    //                 >
    //                   <stop stopColor="#21973B"></stop>
    //                   <stop offset="1" stopColor="#128540"></stop>
    //                 </linearGradient>
    //               </defs>
    //             </svg>
    //             <strong>
    //               {props.rating} . {props.time} mins
    //             </strong>
    //           </span>
    //         </div>
    //         <div>
    //           <p className="m-0 fw-light">{props.cusisne}</p>
    //           <p className="m-0 fw-light">{props.location}</p>
    //         </div>
    //       </div>
    //     </div>
    // </>

    // method 2 (b)
    // <>
    //   <div className="card  m-0 p-3  col-3 border-0 ">
    //     <img
    //       className="card-image-top rounded-4"
    //       src={imageUrl}
    //       alt="hello"
    //     ></img>
    //     <div className="card-body p-3">
    //       <div>
    //         <h5 className=" m-0">{title}</h5>
    //       </div>
    //       <div className="mb-1">
    //         <span>
    //           <svg
    //             width="20"
    //             height="20"
    //             viewBox="0 0 20 20"
    //             fill="none"
    //             role="img"
    //             aria-hidden="true"
    //             strokecolor="rgba(2, 6, 12, 0.92)"
    //             fillcolor="rgba(2, 6, 12, 0.92)"
    //           >
    //             <circle
    //               cx="10"
    //               cy="10"
    //               r="9"
    //               fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
    //             ></circle>
    //             <path
    //               d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
    //               fill="white"
    //             ></path>
    //             <defs>
    //               <linearGradient
    //                 id="StoreRating20_svg__paint0_linear_32982_71567"
    //                 x1="10"
    //                 y1="1"
    //                 x2="10"
    //                 y2="19"
    //                 gradientUnits="userSpaceOnUse"
    //               >
    //                 <stop stopColor="#21973B"></stop>
    //                 <stop offset="1" stopColor="#128540"></stop>
    //               </linearGradient>
    //             </defs>
    //           </svg>
    //           <strong>
    //             <span>{rating}</span> <small>.</small> <span>{time}</span>
    //           </strong>
    //         </span>
    //       </div>
    //       <div className=" ">
    //         <p className="m-0 fw-light textflow">{cuisine}</p>
    //         <p className="m-0 fw-light">{location}</p>
    //       </div>
    //     </div>
    //   </div>
    // </>

    // method 4 (2)
    <>
      <div className=" cards m-0 p-3 row col-lg-3 border-0 ">
        <div className=" col-lg-12 col-3">
          <img
            className="cards-img rounded-4 shadow p-0 "
            src={Img_Url + cloudinaryImageId}
            alt="hello"
          ></img>
        </div>
        <div className=" p-3 col-lg-12 col-8">
          <div>
            <h5 className=" m-0 textflow">{name}</h5>
          </div>
          <div className="mb-1">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                role="img"
                aria-hidden="true"
                strokecolor="rgba(2, 6, 12, 0.92)"
                fillcolor="rgba(2, 6, 12, 0.92)"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                ></circle>
                <path
                  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="StoreRating20_svg__paint0_linear_32982_71567"
                    x1="10"
                    y1="1"
                    x2="10"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#21973B"></stop>
                    <stop offset="1" stopColor="#128540"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <strong>
                <span>{avgRating}</span> <small>.</small>{" "}
                <span>{sla?.slaString}</span>
              </strong>
            </span>
          </div>
          <div className=" ">
            <p className="m-0 fw-light textflow">{cuisines.join(", ")}</p>
            <p className="m-0 fw-light">{areaName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
