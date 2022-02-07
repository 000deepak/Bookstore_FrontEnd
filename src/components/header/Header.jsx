import React from "react";
import bookIcon from "../../assets/education.png";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import cartIcon from "../../assets/supermarket.png";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import service from "../../services/bookstore";
import { useNavigate } from "react-router-dom";
import "./header.scss";

function Header(props) {

  const handleCart = () => {
    console.log("going to cart from header");
    props.handleHeader("cart");
  };

  const handleWishlist = () => {
    console.log("going to wishlist");
    props.handleHeader("wishlist");
  };

  return (
    <div className="header">
      <div className="book-icon">
        <img src={bookIcon}></img>
        <p style={{ color: "white" }}>Bookstore</p>
      </div>

      <div className="searchBar">
        <IconButton className="mag">
          <SearchIcon />
        </IconButton>
        <input className="search" type="text" placeholder="Search"></input>
      </div>
      <div>
        <IconButton>
          <PermIdentityTwoToneIcon></PermIdentityTwoToneIcon>
        </IconButton>
        Manage Account
      </div>

      <div>
        <IconButton onClick={handleWishlist}>
          <FavoriteBorderSharpIcon></FavoriteBorderSharpIcon>
        </IconButton>
        Wishlist
      </div>

      <div className="cart-icon">
        <p className="cart-name" style={{ color: "white" }}>
          Cart
        </p>
        <IconButton onClick={handleCart}>
          <img src={cartIcon}></img>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
