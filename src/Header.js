import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_nav_item">
          <span className="header_nav_item_one">
            {!user ? "게스트" : user.email}{" "}
          </span>
          <Link to={!user && "/login"} className="homelogin">
            <span
              onClick={handleAuthentication}
              className="header_nav_item_two"
            >
              {user ? "로그아웃" : "로그인"}
            </span>
          </Link>
        </div>

        <div className="header_nav_item">
          <span className="header_nav_item_one">돌아가기</span>
          <span className="header_nav_item_two">주문내역</span>
        </div>

        <div className="header_nav_item">
          <span className="header_nav_item_one">안녕하세요</span>
          <span className="header_nav_item_two">반갑습니다</span>
        </div>

        <div className="header_basket">
          <Link to="/checkout">
            <ShoppingBasketIcon />
          </Link>
          <span className="header_basket_count">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
