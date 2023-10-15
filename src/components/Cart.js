import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center">
      <div className="font-bold text-lg my-8">Cart</div>
      <div>
        <button className="bg-slate-500 rounded-md py-1 px-3 text-white" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {cartItems.length ? (
        <div className="w-6/12 mx-auto my-4">
          <ItemList items={cartItems}></ItemList>
        </div>
      ) : (
        <div className="my-10">Cart is Empty. Add Items to your Cart</div>
      )}
    </div>
  );
};

export default Cart;
