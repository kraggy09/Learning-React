import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Utils";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  //console.log("REndered from body");
  useEffect(() => {
    //API call
    getAPI();
  }, []);
  async function getAPI() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5305529&lng=88.3069213&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    {
      /*console.log(json);
    console.log(json?.data?.cards[2]?.data?.data?.cards);*/
    }
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  const online = useOnline();
  if (!online) {
    return <h1>Please Check your internet connection</h1>;
  }
  return restaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="px-2 ml-2 my-2 py-2 stroke-indigo-50">
        <input
          type="text"
          className="w-5/6 h-10 shadow-sm border border-slate-300 rounded-md"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText);
            const data = filterData(searchText, restaurant);
            setFilterRestaurant(data);
          }}
        />
        <button
          className="ml-5 bg-yellow-300 hover:bg-lime-300 rounded-xl p-2"
          onClick={() => {}}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurant.length > 0 ? (
          filterRestaurant.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                className="cards-link"
                key={restaurant.data.id}
              >
                <Card restaurant={restaurant} />
              </Link>
            );
          })
        ) : (
          <div className="border-2 border-yellow-500 rounded-[12px] mx-auto w-5/6 p-5  my-36">
            <h1 className="text-2xl font-bold flex justify-center   text-red-500">
              No restaurant found
            </h1>
          </div>
        )}
      </div>
    </>
  );
};
export default Body;
