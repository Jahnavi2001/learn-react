import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext)

  return (
    <div className="flex justify-between p-4 items-center shadow-md bg-lime-100 sm:bg-blue-100 lg:bg-red-100">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex">
          <li className="p-4">OnlineStatus: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className="p-4">Cart</li>
          <li className="p-4">
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li >
          <li className="p-4"> {loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
