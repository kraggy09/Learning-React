import { imageWeb } from "../config";
const MenuCard = ({ menu }) => {
  console.log(menu);
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
        <button className="bg-lime-400 rounded-lg p-1 my-auto ml-2">
          Add Item
        </button>
      </div>
    </div>
  );
};
export default MenuCard;
