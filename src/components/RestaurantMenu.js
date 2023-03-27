import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { imageWeb } from "../config";
import Card from "./Card";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);

  const params = useParams();
  console.log(params);
  useEffect(() => {
    getRestaurnat();
  }, []);
  async function getRestaurnat() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5305529&lng=88.3069213&restaurantId=" +
        params.id
    );
    const json = await data.json();
    setRestaurant(json.data.cards);
    console.log(json.data.cards);
  }
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
      {restaurant[0]?.card?.card?.info?.cuisines?.map((x) => {
        return <p key={x}>{x + ","}</p>;
      })}
      {/*restaurant[2].groupedCard.cardGroupMap.REGULAR.cards.map((item) => {
        return !item.card
          ? null
          : item.card.itemCards.map((item) => {
              return <h1>{item.card.info.name}</h1>;
            });
      })*/}
      {}
    </div>
  );
};
export default RestaurantMenu;
