import React from "react";
import bookIcon from "../../assets/education.png";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import cartIcon from "../../assets/supermarket.png";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import LogoutIcon from "@mui/icons-material/Logout";
import service from "../../services/bookstore";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import Search from "@mui/icons-material/Search";

function Header(props) {
  const navigate = useNavigate();
  //------------------------------------------redux
  //getting state values
  const cartArray = useSelector((state) => state.fetchCartBooks.books);

  //getting state values
  const wishlistArray = useSelector((state) => state.fetchWishlistBooks.books);
  //-------------------------------------------redux(END)
  React.useEffect(() => {}, []);

  let user = localStorage.getItem("firstName");

  const handleCart = () => {
    props.handleHeader("cart");
  };

  const handleWishlist = () => {
    props.handleHeader("wishlist");
  };

  const handleHome = () => {
    props.handleHeader("home");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/user");
  };

  const searchBook = (e) => {
    console.log(e.target.value,"header");
    props.search(e.target.value);
  };

  return (
    <div className="main-header">
      <div className="header">
        <div className="book-icon" onClick={handleHome}>
          <IconButton>
            <img src={bookIcon}></img>{" "}
          </IconButton>
          <p style={{ color: "white" }}>Bookstore</p>
        </div>

        <div>
          <SearchIcon className="magicon" />
        </div>

        <div className="searchBar">
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={(e) => searchBook(e)}
          ></input>
        </div>

        <div style={{ color: "white" }}>
          <IconButton>
            <PermIdentityTwoToneIcon style={{ color: "white" }}></PermIdentityTwoToneIcon>
          </IconButton>
          {user}
        </div>

        <div style={{ color: "white" }}>
          <IconButton onClick={handleWishlist}>
            <Badge badgeContent={props.wishlist.length} color="primary">
              <FavoriteBorderSharpIcon style={{ color: "white" }}></FavoriteBorderSharpIcon>
            </Badge>
          </IconButton>
          Wishlist
        </div>

        <div className="cart-icon">
          <IconButton onClick={handleCart}>
            <Badge badgeContent={props.cart.length} color="primary">
              <ShoppingCartOutlinedIcon style={{ color: "white" }} />
            </Badge>
          </IconButton>
          <p className="cart-name" style={{ color: "white" }}>
            Cart
          </p>
        </div>

        <div className="logout">
          <LogoutIcon
            onClick={handleLogout}
            style={{ color: "white" }}
            className="logout"
          ></LogoutIcon>

          <p style={{ color: "white" }}>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
