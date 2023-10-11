import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  function handleClick () {
    setShowIndex()
  }

  return (
    <div className="w-6/12 mx-auto bg-gray-100 rounded-md p-4 m-12 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <div className="text-xl font-bold">
          {data.title} ({data.itemCards.length})
        </div>
        <div>{ showItems ? '⬆️' : '⬇️'}</div>
      </div>
      {showItems && <ItemList items={data.itemCards}></ItemList>}
    </div>
  );
};

export default RestaurantCategory;
