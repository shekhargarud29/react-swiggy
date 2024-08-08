import { useEffect, useState } from "react";

export const useSearchBar = () => {
  const [searchHeader, setSearchHeader] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDish, setSearchDish] = useState([]);
  const [error, setError] = useState(null);
  const [searchloading, setSearchLoading] = useState(true);
  useEffect(() => {
    const search = async () => {
      fetch(
        " https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=19.07480&lng=72.88560"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status:${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data) {
            setSearchData(data?.data?.cards[1]?.card?.card?.imageGridCards);
            console.log(searchData);

            setSearchHeader(data?.data?.cards[1]?.card?.card?.header?.title);
            setSearchLoading(false);
          } else {
            throw new Error("Received data has an invalid structure");
          }
        })
        .catch((error) => {
          if (error.message.startsWith("HTTP error")) {
            setError(
              "Failed to fetch data from server. Please try again later."
            );
          } else if (
            error.message === "Received data has an invalid structure"
          ) {
            setError("Received data is not in the expected format.");
          } else if (error.message === "Failed to fetch") {
            setError("Network error. Please check your internet connection.");
          } else {
            setError("An unexpected error occurred. Please try again later.");
          }
          setSearchLoading(false);
        });
    };
    search();
  }, []);

  useEffect(() => {
    console.log(searchTerm);
    if (searchTerm !== "" && searchTerm.length > 1) {
      const searchFun = async () => {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=19.07480&lng=72.88560&str=${searchTerm}&trackingId=undefined&includeIMItem=true`
        );
        const data = await response.json();
        console.log(data);
        setSearchDish(data?.data);
        // console.log(searchDish);
      };
      searchFun();
    } else {
      setSearchDish([]);
    }
  }, [searchTerm, setSearchDish]);

  const searchObject = {
    setSearchTerm,
    searchTerm,
    searchData,
    searchDish,
    searchHeader,
    error,
    searchloading,
  };
  return searchObject;
};
