import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  return (
    <div className="flex justify-between p-3 bg-lime-200 shadow-md">
      <div>
        <h1 className="text-xl">Logo</h1>
      </div>
      <ul className="flex mr-5  ">
        <Link className="mx-5" to="/">
          <li>Home</li>
        </Link>
        <Link className="mx-5" to="/about">
          <li>About Us</li>
        </Link>
        <Link className="mx-5" to="/contact">
          <li>Contact</li>
        </Link>
        <Link className="mx-5" to="/instamart">
          <li>Instamart</li>
        </Link>
        <Link className="mx-5" to="/cart">
          <li>Cart-{cartItem.length}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
