import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    areaName,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = resData.info;
  return (
    <div className="flex flex-col gap-2 w-64 bg-gray-100 p-4 m-4 rounded-lg hover:bg-gray-300">
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
    </div>
  );
};

export default RestaurantCard;
