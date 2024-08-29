import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";
import FilterwithIconsbar from "./FilterwithIconsbar";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { ICONS_ARRAY } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const BodyContainer = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("==== hey swiggy PLS", json?.data);
    const RestaurantCardData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(RestaurantCardData);
    setFilteredResList(RestaurantCardData);
  };
  const onFilterClick = (content) => {
    setFilteredResList(
      resList.filter((res) => res.info.cuisines.includes(content))
    );
  };

  const onSearchBarChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    // setResList(resList.filter((res) => {
    //   res.info.name.includes(e.target.value)}));
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <Alert severity="warning">
        <AlertTitle>Info</AlertTitle>
        Looks like you are OFFLINE! Please check your internet connection.
      </Alert>
    );
  }

  return (
    <div className="bg-primary my-4 p-4 flex flex-wrap justify-center">
      <div className="">
        {ICONS_ARRAY.map((icon) => (
          <Button
            className="px-4 py-2 bg-green m-4 rounded-2xl"
            key={icon.label}
            onClick={() =>
              setFilteredResList(
                resList.filter((res) => res.info.cuisines.includes(icon.label))
              )
            }
          >
            {icon.label}
          </Button>
        ))}
      </div>
      <div className="relative flex justify-end">
        <input
          type="search"
          className="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
          placeholder="Search Restaurent"
          aria-label="Search"
          id="exampleFormControlInput3"
          aria-describedby="button-addon3"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950 bg-blue-300"
          data-twe-ripple-init
          data-twe-ripple-color="white"
          type="button"
          id="button-addon3"
          onClick={() => {
            setFilteredResList(
              resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
      {filteredResList.length === 0 ? (
        <Shimmer></Shimmer>
      ) : (
        <div className="flex flex-wrap">
          {filteredResList.map((restaurant) => (
            <Link
              to={"/restaurents/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating >= 4.5 ? (
                <RestaurantCardPromoted info={restaurant.info} />
              ) : (
                <RestaurantCard info={restaurant.info}></RestaurantCard>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BodyContainer;
