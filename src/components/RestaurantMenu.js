import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from 'react'

const RestaurantMenu = () => {

  const [ showIndex, setShowIndex ] = useState(0)
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Optional Chainning
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categoryList =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (eachCard) =>
        eachCard.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex flex-col gap-2 text-center my-6">
      <div className="text-2xl font-bold">{name}</div>
      <div className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </div>
      <div>
        {categoryList.map((category, index) => (
          <RestaurantCategory
            data={category.card.card}
            key={category.card.card.title}
            showItems={index === showIndex}
            setShowIndex={
              () => {
                index === showIndex ? setShowIndex(null) : setShowIndex(index)
              }
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
