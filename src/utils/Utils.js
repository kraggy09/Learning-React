export function filterData(searchText, restaurant) {
  const temp = restaurant;
  const filterData = restaurant.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}
