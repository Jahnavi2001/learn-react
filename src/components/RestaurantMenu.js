import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchResMenu();
  }, []);

  fetchResMenu = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Optional Chainning
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - 
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
