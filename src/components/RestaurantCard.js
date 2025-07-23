import React from "react";
import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = ({ responseData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    responseData.info;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-image" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
