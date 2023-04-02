import { useState, useEffect } from "react";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurnat();
  }, []);
  async function getRestaurnat() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5305529&lng=88.3069213&restaurantId=" +
        id
    );
    const json = await data.json();
    setRestaurant(json.data.cards);
    console.log(json.data.cards);
  }
  return restaurant;
};
export default useRestaurant;
