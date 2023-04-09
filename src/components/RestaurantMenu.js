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
    <div>
      <h1>{restaurant[0]?.card?.card?.info?.name}</h1>
      <img
        src={imageWeb + restaurant[0]?.card?.card?.info?.cloudinaryImageId}
      />
      <h2>{restaurant[0]?.card?.card?.info?.id}</h2>
      <h3>{restaurant[0]?.card?.card?.info?.avgRating + " Stars"}</h3>

      {/*restaurant[2].groupedCard.cardGroupMap.REGULAR.cards.map((item) => {
        return !item.card
          ? null
          : item.card.itemCards.map((item) => {
              return <h1>{item.card.info.name}</h1>;
            });
      })*/}
      {/*restaurant[2].groupedCard.cardGroupMap.REGULAR.cards.map((item) => {
        if (item.card && item.card.itemCards) {
          return item.card.itemCards.map((man) => {
            console.log("hello");

            return <h1 key={man.card.info.id}>{man.card.info.name}</h1>;
          });
        }
        return null;
      })*/}
    </div>
  );
};
export default RestaurantMenu;
