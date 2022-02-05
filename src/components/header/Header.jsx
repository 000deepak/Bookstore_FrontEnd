import React from "react";
import bookIcon from "../../assets/education.png";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import cartIcon from "../../assets/supermarket.png";
import "./header.scss";

function Header() {
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
      <div className="cart-icon">
        <p className="cart-name" style={{ color: "white" }}>
          Cart
        </p>
        <img src={cartIcon}></img>
      </div>
    </div>
  );
}

export default Header;
