import { MenuItemcards } from "./MenuItemcards";

// import { useState } from "react";
export const MenuCategory = ({ categories, title, countObj, handleAdd }) => {
  //   console.log(categories);
  //   console.log(title?.categories);
  return (
    <>
      <div className="p-3">
        <h5>
          <b>{title}</b>
        </h5>

        <div>
          {categories &&
            categories?.map((categoryData, index) => {
              // console.log(categoryData?.title.replace(/\s/g, ""));
              // console.log(categories.length);
              // console.log(categoryData);
              return (
                <div key={`M${index}`}>
                  <MenuItemcards
                    title={categoryData?.title}
                    itemCards={categoryData?.itemCards}
                    currentComponent="MenuCategory"
                    countObj={countObj}
                    handleAdd={handleAdd}
                  />
                </div>
                // <div
                //   key={`B${index}`}
                //   className="py-2"
                //   style={{
                //     borderBottom:
                //       index < categories.length - 1 ? "2px solid #f2f2f3" : "",
                //   }}
                // >
                //   <div
                //     className="card-header p-0 py-2 border-0 "
                //     style={{ backgroundColor: "white" }}
                //   >
                //     <a
                //       className="btn fw-bold d-block border-0 p-0"
                //       data-bs-toggle="collapse"
                //       href={`#${categoryData?.title
                //         .replace(/\s/g, "")
                //         .replace(/'/g, "")}`}
                //     >
                //       <h5 className="d-flex justify-content-between">
                //         {categoryData?.title} ({categoryData?.itemCards.length})
                //         <i className="fa-solid fa-chevron-down fw-bold"></i>
                //       </h5>
                //     </a>
                //   </div>
                //   <div
                //     key={`C${index}`}
                //     id={categoryData?.title
                //       .replace(/\s/g, "")
                //       .replace(/'/g, "")}
                //     className="collapse"
                //   >
                //     <div className="card-body p-0 pt-2">
                //       {categoryData?.itemCards &&
                //         categoryData.itemCards.map((itemCard, index) => {
                //           const { name, ratings, description, imageId, isVeg } =
                //             itemCard?.card?.info;
                //           //   console.log(itemCard);
                //           const { rating, ratingCountV2 } =
                //             ratings?.aggregatedRating;
                //           // const{}
                //           return (
                //             <div
                //               key={`D${index}`}
                //               // id={`a${index}`}
                //               className="row pt-4 justify-content-between"
                //               style={{
                //                 paddingBottom: "40px",
                //                 borderBottom:
                //                   index < categoryData?.itemCards.length - 1
                //                     ? "2px solid #f2f2f3"
                //                     : "",
                //               }}
                //             >
                //               <div className="left col-8 ">
                //                 {isVeg ? (
                //                   <div
                //                     className="border  border-success   rounded-1"
                //                     style={{
                //                       width: "max-content",
                //                       padding: "2.50px",
                //                     }}
                //                   >
                //                     <div
                //                       className=""
                //                       style={{
                //                         width: "9px",
                //                         height: "9px",
                //                         borderRadius: "50%",
                //                         backgroundColor: "#0f8a65",
                //                       }}
                //                     ></div>
                //                   </div>
                //                 ) : (
                //                   <div
                //                     className="border  border-danger  rounded-1"
                //                     style={{
                //                       width: "max-content",
                //                       padding: "1.50px",
                //                     }}
                //                   >
                //                     <div
                //                       className=""
                //                       style={{
                //                         width: "0px",
                //                         height: "0px",
                //                         borderRadius: "3px",
                //                         borderLeft: "7px solid transparent",
                //                         borderRight: "7px solid transparent",
                //                         borderBottom: "10px solid #e43b4f",
                //                       }}
                //                     ></div>
                //                   </div>
                //                 )}
                //                 <div className="" style={{ color: "#414449" }}>
                //                   <h5 className="m-0">{name}</h5>
                //                   <h6> &#8377; 375 </h6>
                //                 </div>
                //                 {rating ? (
                //                   <div
                //                     className="py-1  "
                //                     style={{
                //                       fontSize: "16px",
                //                     }}
                //                   >
                //                     <i
                //                       className="fa-solid fa-star fa-xs"
                //                       style={{
                //                         color: "#116649",
                //                       }}
                //                     >
                //                       {" "}
                //                       <span className="fw-bold">{rating} </span>
                //                     </i>
                //                     <span
                //                       className="fw-medium"
                //                       style={{
                //                         color: "#414449",
                //                       }}
                //                     >
                //                       {" "}
                //                       ({ratingCountV2})
                //                     </span>
                //                   </div>
                //                 ) : null}

                //                 <div>
                //                   <p
                //                     className="fw-medium py-1 textflow"
                //                     style={{
                //                       color: "#414449",
                //                     }}
                //                   >
                //                     {description}
                //                   </p>
                //                 </div>
                //               </div>
                //               <div className="right col-3">
                //                 <div
                //                   className=" ms-3 "
                //                   style={{
                //                     position: "relative",
                //                   }}
                //                 >
                //                   <img
                //                     className="rounded-4 menu-img"
                //                     src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                //                     alt="Combo for 1 Non-Veg"
                //                   ></img>
                //                   <div
                //                     className="px-4 text-center d-flex flex-column justify-content-center"
                //                     style={{
                //                       width: "100%",
                //                       position: "absolute",
                //                       bottom: "-25%",
                //                       left: "0%",
                //                       // paddingInline: "",
                //                     }}
                //                   >
                //                     <button
                //                       className="btn btn-light fs-h1 text-success w-100  shadow-sm"
                //                       type="button"
                //                     >
                //                       <h5 className=" fw-bold m-0 py-1 ">
                //                         {" "}
                //                         ADD
                //                       </h5>
                //                     </button>
                //                     <small
                //                       className="text-center m-0 "
                //                       style={{
                //                         color: "#8d8f91",
                //                       }}
                //                     >
                //                       customisable
                //                     </small>
                //                   </div>
                //                 </div>
                //               </div>
                //             </div>
                //           );
                //         })}
                //     </div>
                //   </div>
                // </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
