import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../config";

const SearchContainer = () => {
  const [inputText, setInputText] = useState("");
  const [showRestaurants, setShowRestaurants] = useState(resList);

  const filterData = () => {
    const filteredRestaurants = showRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(inputText.toLowerCase())
    );
    return filteredRestaurants;
  };

  return (
    <>
      <div className="py-10 text-center">
        <input
          type="text"
          placeholder="Restaurant name, please ..."
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
        />

        <button
          className="px-5 mx-5 font-medium text-xl text-red-400 rounded-md bg-teal-50"
          onClick={() => {
            const returnedData = filterData(inputText, showRestaurants);
            setShowRestaurants(returnedData);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap ">
        {showRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant?.info?.id} />
        ))}
      </div>
    </>
  );
};

export default SearchContainer;
