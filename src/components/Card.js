import { imageWeb } from "../config";
const Card = ({ restaurant }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurant.data;
  return (
    <div className="card">
      <img src={imageWeb + cloudinaryImageId} />
      <p className="name">{name}</p>
      <p className="style">{cuisines.join(", ")}</p>
      <p className="rating">{avgRating} stars</p>
    </div>
  );
};

export default Card;
