import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UseerContect";
// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setbtn] = useState("login");

  let btnname = "login";
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  // Subscribing to store using useselector

  return (
    <div className='flex justify-between bg-pink-100 shadow-sm mb-11 sm:bg-yellow-100'>
      {/* if device greater than small it will becom yellow else pink */}
      <div className='w-79'>
        <img src={LOGO_URL} style={{ width: "71px" }}></img>
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status: {onlineStatus ? "on" : "off"}</li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='px-4'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='text-bold'>
            <Link to='/cart'> cart items - {cartItems.length}</Link>
          </li>
          <button
            className='login-btn'
            onClick={() => {
              //   btnname = "logout";
              btn === "login" ? setbtn("logout") : setbtn("login");
            }}
          >
            {btn}
          </button>
          <li className='text-bold ml-4'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
