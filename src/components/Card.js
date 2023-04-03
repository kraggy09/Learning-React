import { imageWeb } from "../config";
const Card = ({ restaurant }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurant.data;
  return (
    <div className="w-56 flex flex-col justify-between shadow-xl  m-[25px]  rounded-xl">
      <img className="rounded-xl" src={imageWeb + cloudinaryImageId} />
      <p className="font-bold text-xl my-3">{name}</p>
      <p className="my-2">{cuisines.join(", ")}</p>
      <p className="my-2">{avgRating} stars</p>
    </div>
  );
};

export default Card;
