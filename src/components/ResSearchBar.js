import { useEffect, useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

export const ResSearchBar = ({ setrestaurantList, restaurantCollection }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // const filterSearch = () => {
    if (searchTerm !== "") {
      const filterData = restaurantCollection.filter((restaurant) => {
        return (
          restaurant?.info?.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          restaurant?.info?.cuisines.some((cuisine) => {
            return cuisine.toLowerCase().includes(searchTerm.toLowerCase());
          })
        );
      });
      // console.log(filterData);

      setrestaurantList(filterData);
    } else {
    }
    // };
  }, [searchTerm, restaurantCollection, setrestaurantList]);

  return (
    <>
      <div className="searchbar">
        <TextField
          className=""
          id="outlined-basic"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          variant="outlined"
          fullWidth
          label="Search your restaurant or food here"
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                // className="border rounded-pill"
              >
                <i className="fas fa-search" />
              </InputAdornment>
            ),
          }}
        />
        {/* <input
          className="form-control border rounded-pill px-3 m-0 "
          type="search"
          id="searchbar"
          placeholder="search your restaurant or food here"
          value={searchTerm}
          onChange={handleSearch}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     filterSearch();
          //   }
          // }}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </input> */}
        {/* <input className="form-control border rounded-pill px-3 m-0">
          {" "}
          <i className="fa fa-search" aria-hidden="true"></i>
        </input> */}
        {/* <button
          type="button"
          className="btn btn-primary rounded-pill rounded-start"
          // onClick={filterSearch}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button> */}
      </div>
    </>
  );
};
