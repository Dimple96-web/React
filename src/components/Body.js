import React from "react";
import RestaurantCard from "./RestaurantCard";
import responseList from "../utils/mockData";

const Body = () => {
  const handlerClickHandler = () => {};
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handlerClickHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {responseList.map((rest) => (
          <RestaurantCard key={rest.info.id} responseData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
