import { IMG_CDN_URL } from "../config";

/* eslint-disable react/prop-types */
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  avgRating,
}) => {
  return (
    <div className=" w-56 mx-3 p-2 font-normal shadow-xl hover:border-2 cursor-pointer bg-teal-50 mb-2">
      <img
        className="w-52 h-48 object-cover px-2"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
