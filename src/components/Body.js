import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { RES_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable - This is nothing but array destructuting
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);
    const json = await data.json();
    console.log("🚀 > fetchData > json:", json)
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    setFilteredRestaurants(filteredList);
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  }

  console.log('filteredRestaurants', filteredRestaurants)
  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex gap-14 px-14 mt-10 mb-6 mx-2 items-center">
        <div className="flex gap-2 items-center">
          <div>
            <input
              className="border border-black rounded-md py-1 px-2"
              type="text"
              data-testid="searchInput"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <button
              className="bg-blue-300 py-2 px-3 rounded-md"
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
        </div>
        <div>
          <button
            className="bg-green-200 py-2 px-3 rounded-md"
            onClick={filterTopRatedRestaurants}
          >
            Top Listed Restaurants
          </button>
        </div>
        <div>
          UserName:
          <input
            data-testid="loggedInUser"
            className="border border-black rounded-md px-4 py-1 ml-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          </div>
          
          <div className="bg-gray-300 rounded-md py-1 px-2">
            <Link to='/demo-use-memo'>Use Memo Hook Demo </Link>
          </div>

          <div className="bg-gray-300 rounded-md py-1 px-2">
            <Link to='/demo-use-reference'>Use Ref Hook Demo </Link>
          </div>
        
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.avgRating <= 4.2 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
