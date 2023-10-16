import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({ resData }) => {  
  const { loggedInUser } = useContext(UserContext)
  const {
    name,
    cuisines,
    avgRating,
    areaName,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = resData.info;

  return (
    <div data-testid="resCard" className="flex flex-col gap-2 w-64 bg-gray-100 p-4 m-4 rounded-lg hover:bg-gray-300">
      <div>
        <img
          className="h-52 w-full rounded-lg mb-3"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </div>
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(", ")}
      </div>
      <div className="res-rating"> {avgRating} Stars</div>
      <div className="res-delivery-time">DeliveryTime: {deliveryTime} mins</div>
      <div className="res-area-name">{areaName}</div>
      <div>User: {loggedInUser}</div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <span className="border rounded-md py-1 px-2 bg-black text-white absolute mt-4 ml-6">
          Promoted
        </span>
        <RestaurantCard resData={props.resData} />
      </div>
    );
  };
};

export default RestaurantCard;
