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
    <div className="res-card">
      <div>
        <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="res-name">{name}</div>
      <div className="res-cuisine">{cuisines.join(", ")}</div>
      <div className="res-rating"> {avgRating} Stars</div>
      <div className="res-delivery-time">DeliveryTime: {deliveryTime} mins</div>
      <div className="res-area-name">{areaName}</div>
    </div>
  );
};

export default RestaurantCard;
