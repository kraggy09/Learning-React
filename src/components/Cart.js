import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  /*We must only subscribe to the part of the store which is required.As it improves the
   app overall.
  Like here we have subscribed only to the cartSlice items(Array) and it improves the
   overall performance
  As we are subscibed to the items so the component re-renders only when the item is 
  changed. However if the whole store is subscribed the component will re-render everytime
   any of the slice of the store is changed.And this is how the app performance is improved

  */
  const dispatch = useDispatch();
  const handleclearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="relative">
      <h1 className="font-bold text-3xl">Cart Items-{cartItems.length}</h1>

      <button
        className="bg-green-400 text-white absolute right-3 top-1 px-3 py-2 rounded-xl"
        onClick={() => handleclearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => {
          return <CartItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
