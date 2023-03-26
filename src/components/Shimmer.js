const Shimmer = () => {
  return (
    <div className="shimmer-cards">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-para"></div>
            <div className="shimmer-para"></div>
            <div className="shimmer-para"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
