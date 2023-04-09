import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { imageWeb } from "../config";
import Card from "./Card";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);
  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex justify-between w-[100vw]">
      <div>
        <h1>{restaurant[0]?.card?.card?.info?.name}</h1>
        <img
          src={imageWeb + restaurant[0]?.card?.card?.info?.cloudinaryImageId}
        />
        <h2>{restaurant[0]?.card?.card?.info?.id}</h2>
        <h3>{restaurant[0]?.card?.card?.info?.avgRating + " Stars"}</h3>
      </div>
      <div className="pl-[20%]">
        {restaurant[3]?.groupedCard?.cardGroupMap.REGULAR.cards.map((item) => {
          if (item.card.card.itemCards) {
            return item.card.card.itemCards.map((food) => {
              return <p key={food.card.info.id}>{food.card.info.name}</p>;
            });
          }
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
