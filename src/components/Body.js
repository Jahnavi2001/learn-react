import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  // ------ First way
  // This is nothing but array destructuting
  // Local State Variable
  // let [listOfRestaurants, setListOfRestaurants] = useState(resObj);

  // ------ Second way
  // If we simplify above statement it looks as this
  // const arr = useState(resObj)
  // const [listOfRestaurants, setListOfRestaurants] = arr

  // ------ Third way
  // If we more simplify above statement it looks as this
  const arr = useState(resObj)
  const listOfRestaurants = arr[0]
  const setListOfRestaurants = arr[1]

  // ----- we can extract a call back function to here alsooo (or) we can directly write there also instead of extracting
  const onButtonClick = () => {
    console.log("button clicked before", listOfRestaurants);
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
    console.log("after filter listOfRestaurants", listOfRestaurants);
  };

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <button className="top-restaurants-btn" onClick={onButtonClick}>
        Top Listed Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
