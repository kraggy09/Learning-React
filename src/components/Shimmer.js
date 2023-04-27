const Shimmer = () => {
  return (
    <div className="flex flex-wrap flex-row">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div className="h-[400px] w-[200px] mx-10 my-5" key={index}>
            <div className="animate-pulse mt-[25px] ml-[5px] w-[95%] h-[30%] bg-gray-500 rounded mb-4"></div>

            <div className="bg-gray-500 ml-4 h-[5%] w-[75%] mb-3 animate-pulse"></div>
            <div className="bg-gray-500 ml-4 h-[5%] w-[75%] mb-3 animate-pulse"></div>
            <div className="bg-gray-500 ml-4 h-[5%] w-[75%] mb-3 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
