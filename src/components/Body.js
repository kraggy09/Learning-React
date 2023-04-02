import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Utils";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  console.log("REndered from body");
  useEffect(() => {
    //API call
    getAPI();
  }, []);
  async function getAPI() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5305529&lng=88.3069213&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  return restaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurant);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {filterRestaurant.map((restaurant) => {
          if (filterRestaurant.length == 0) {
            return <h1>No restaurant found</h1>;
          }
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              className="cards-link"
              key={restaurant.data.id}
            >
              <Card restaurant={restaurant} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
