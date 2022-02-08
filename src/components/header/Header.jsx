import React from "react";
import bookIcon from "../../assets/education.png";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import cartIcon from "../../assets/supermarket.png";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import service from "../../services/bookstore";
import { useNavigate } from "react-router-dom";
import "./header.scss";

function Header(props) {
  let user = localStorage.getItem("firstname");

  const handleCart = () => {
    console.log("going to cart from header");
    props.handleHeader("cart");
  };

  const handleWishlist = () => {
    console.log("going to wishlist");
    props.handleHeader("wishlist");
  };

  const handleHome = () => {
    console.log("going to Home");
    props.handleHeader("home");
  };

  return (
    <div className="header">
      <div className="book-icon" onClick={handleHome}>
        <IconButton>
          <img src={bookIcon}></img>{" "}
        </IconButton>
        <p style={{ color: "white" }}>Bookstore</p>
      </div>

      <div className="searchBar">
        <IconButton className="mag">
          <SearchIcon />
        </IconButton>
        <input className="search" type="text" placeholder="Search"></input>
      </div>
      <div style={{ color: "white" }}>
        <IconButton>
          <PermIdentityTwoToneIcon style={{ color: "white" }}></PermIdentityTwoToneIcon>
        </IconButton>
        {user}
      </div>

      <div style={{ color: "white" }}>
        <IconButton onClick={handleWishlist}>
          <FavoriteBorderSharpIcon style={{ color: "white" }}></FavoriteBorderSharpIcon>
        </IconButton>
        Wishlist
      </div>

      <div className="cart-icon">
        <IconButton onClick={handleCart}>
          <ShoppingCartOutlinedIcon style={{ color: "white" }} />
        </IconButton>
        <p className="cart-name" style={{ color: "white" }}>
          Cart
        </p>
      </div>
    </div>
  );
}

export default Header;
