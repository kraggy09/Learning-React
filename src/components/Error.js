import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something Went Wrong!</h2>
      <h3>{err.data}</h3>
      <h3>Status:{err.status}</h3>
    </div>
  );
};

export default Error;
