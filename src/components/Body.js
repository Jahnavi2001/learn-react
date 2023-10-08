import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { RES_LIST_API } from '../utils/constants'
import { Link } from 'react-router-dom'

const Body = () => {
  // Local State Variable - This is nothing but array destructuting
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div style={{ display: "flex" }}>
        <div className="search">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-restaurants-btn"
          onClick={filterTopRatedRestaurants}
        >
          Top Listed Restaurants
        </button>
      </div>
      <div className="res-container">
          {filteredRestaurants.map((restaurant) => (
          <Link to={'/restaurants/' + restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
