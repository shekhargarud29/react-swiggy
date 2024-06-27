// import React, { useState } from "react";

// const Filter = () => {
//   const [sortBy, setSortBy] = useState("Relevance(Default)");

//   const handleSortByChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   return (
//     <div className="filter-container">
//       <h2 className="filter-title">Filter</h2>
//       <div className="filter-section">
//         <h3 className="filter-section-title">Sort</h3>
//         <div className="filter-options">
//           <label htmlFor="relevance">
//             <input
//               type="radio"
//               id="relevance"
//               name="sortBy"
//               value="Relevance(Default)"
//               checked={sortBy === "Relevance(Default)"}
//               onChange={handleSortByChange}
//             />
//             Relevance (Default)
//           </label>
//           <label htmlFor="deliveryTime">
//             <input
//               type="radio"
//               id="deliveryTime"
//               name="sortBy"
//               value="DeliveryTime"
//               checked={sortBy === "DeliveryTime"}
//               onChange={handleSortByChange}
//             />
//             Delivery Time
//           </label>
//           <label htmlFor="rating">
//             <input
//               type="radio"
//               id="rating"
//               name="sortBy"
//               value="Rating"
//               checked={sortBy === "Rating"}
//               onChange={handleSortByChange}
//             />
//             Rating
//           </label>
//           <label htmlFor="costLowtoHigh">
//             <input
//               type="radio"
//               id="costLowtoHigh"
//               name="sortBy"
//               value="Cost:LowtoHigh"
//               checked={sortBy === "Cost:LowtoHigh"}
//               onChange={handleSortByChange}
//             />
//             Cost: Low to High
//           </label>
//           <label htmlFor="costHightoLow">
//             <input
//               type="radio"
//               id="costHightoLow"
//               name="sortBy"
//               value="Cost:HightoLow"
//               checked={sortBy === "Cost:HightoLow"}
//               onChange={handleSortByChange}
//             />
//             Cost: High to Low
//           </label>
//         </div>
//       </div>
//       <div className="filter-section">
//         <h3 className="filter-section-title">Delivery Time</h3>
//         <div className="filter-options">
//           {/* Add options for delivery time filters */}
//         </div>
//       </div>
//       <div className="filter-section">
//         <h3 className="filter-section-title">Cuisines</h3>
//         <div className="filter-options">
//           {/* Add options for cuisine filters */}
//         </div>
//       </div>
//       <div className="filter-section">
//         <h3 className="filter-section-title">Explore</h3>
//         <div className="filter-options">
//           {/* Add options for explore filters */}
//         </div>
//       </div>
//       <div className="filter-section">
//         <h3 className="filter-section-title">Ratings</h3>
//         <div className="filter-options">
//           {/* Add options for ratings filters */}
//         </div>
//       </div>
//       <div className="filter-section">
//         <h3 className="filter-section-title">Veg/Non-Veg</h3>
//         <div className="filter-options">
//           {/* Add options for veg/non-veg filters */}
//         </div>
//       </div>
//       <div className="filter-section">
//         <h3 className="filter-section-title">Offers</h3>
//         <div className="filter-options">
//           {/* Add options for offers filters */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;
