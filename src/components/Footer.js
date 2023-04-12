import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h1 className="font-bold text-xl flex w-[100vw] justify-center items-center">
      This site is developed by {user.name}-{user.email}
    </h1>
  );
};

export default Footer;
