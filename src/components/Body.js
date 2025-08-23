import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [topRated, setTopRated] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

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
    setFilteredSearch(
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

  const searchHandler = () => {
    const searchedResturants = topRated.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredSearch(searchedResturants);
  };

  return topRated.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchHandler}>Search</button>
        </div>
        <button className="filter-btn" onClick={handlerClickHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredSearch.map((rest) => (
          <RestaurantCard key={rest.info.id} responseData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
