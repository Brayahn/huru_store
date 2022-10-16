import React from "react";
import "./Header.css";
import huru from "./huru.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <nav>
        <Link to="/">
          <img className="header_logo" src={huru} alt="Huru Logo" />
        </Link>
      </nav>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <nav>
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionLineOne"> Hello Stranger</span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
        </nav>
        <div className="header_option">
          <span className="header_optionLineOne"> Returns </span>
          <span className="header_optionLineTwo"> Orders </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"> your </span>
          <span className="header_optionLineTwo"> Prime </span>
        </div>
        <div className="header_optionBasket">
          <nav>
            <Link to="/cart" className="cart_link">
              <ShoppingBasketIcon className="shopping_basket" />
            </Link>
          </nav>
          <span className="header_optionLineTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
