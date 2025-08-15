import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import responseList from "../utils/mockData";

const Body = () => {
  let [topRated, setTopRated] = useState(responseList);
  const handlerClickHandler = () => {
    const filteredResturants = topRated.filter((res) => {
      return res.info.avgRating > 4.5;
    });
    setTopRated(filteredResturants);
  };
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
