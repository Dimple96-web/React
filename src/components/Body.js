import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  let [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const swiggyData = await data.json();
    setTopRated(
      swiggyData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const handlerClickHandler = () => {
    const filteredResturants = topRated.filter((res) => {
      return res.info.avgRating > 4.5;
    });
    setTopRated(filteredResturants);
  };
  if (topRated.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handlerClickHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {topRated.map((rest) => (
          <RestaurantCard key={rest.info.id} responseData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
