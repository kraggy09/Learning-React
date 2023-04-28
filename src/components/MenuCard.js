import { useDispatch } from "react-redux";
import { imageWeb } from "../config";
import { addItem } from "../utils/cartSlice";
const MenuCard = ({ menu }) => {
  //This is assigning dipatch properties with the help of useDispatch to dis
  const dis = useDispatch();

  const handleAddItem = (item) => {
    //Dispatching an action addItem on the function of handleAddItem
    dis(addItem(item));
  };
  // console.log(menu);
  return (
    <div className="border-b-2 flex justify-between w-[80vw] mx-auto shadow-gray-300  rounded mb-4 static">
      <span className="flex flex-col justify-center items-center">
        <p className="mx-auto text-lg">{menu.card.info.name}</p>
        <p>₹{menu.card.info.price / 100}</p>
      </span>
      <div className="flex static">
        {menu.card.info.imageId ? (
          <img
            className="mx-auto mb-3 rounded-xl  right-5 top-0 h-[70px]"
            src={imageWeb + menu.card.info.imageId}
          />
        ) : (
          <p>No Image</p>
        )}
        <button
          className="bg-lime-400 rounded-lg p-1 my-auto ml-2"
          //This one will call the action of addItem which is handled by this function
          onClick={() => handleAddItem(menu.card.info)}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};
export default MenuCard;
