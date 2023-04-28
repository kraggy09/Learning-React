import { imageWeb } from "../config";
const CartItems = ({ item }) => {
  console.log(item);
  console.log("From CartItems");
  return (
    <div className="w-56 flex flex-col justify-between shadow-xl  m-[25px]  rounded-xl">
      <img className="rounded-xl" src={imageWeb + item.imageId} />
      <p className="font-bold text-xl my-3">{item.name}</p>
      <p className="py-2">₹{Math.floor(item.price / 100)}</p>
    </div>
  );
};

export default CartItems;
