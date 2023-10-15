import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    console.log('itemm caleed', item)
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          className="border-b-2 border-gray-300 p-4 my-2 text-left flex gap-4"
          key={item.card.info.id}
        >
          <div className="w-9/12 flex flex-col gap-2">
            <div className="text-md">{item.card.info.name}</div>
            <div>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <div className="text-sm text-gray-500">
              {item.card.info.description}
            </div>
          </div>
          <div className="w-3/12 relative">
            <div className="absolute left-12 bottom-2 shadow-lg border border-gray-400 rounded-md">
              <button className="bg-white px-4 py-1 rounded-md font-bold" onClick={() => handleAddItem(item)}>
                ADD +
              </button>
            </div>
            <img
              className="h-32 w-full rounded-lg"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
