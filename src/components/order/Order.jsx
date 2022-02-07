import React from "react";
import bookIcon from "../../assets/education.png";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import cartIcon from "../../assets/supermarket.png";
import "./order.scss";

function Header() {
  return (
    <div className="order-area">
      <div className="order">
        <div className="order-placed">Order Placed Successfully</div>
        <div style={{ height: "30vh" }}>
          hurray!!! your order is confirmed order id is #654321 <br></br>save the order id for
          further communication.
        </div>
        <button style={{ height: "5vh", width: "15vw" }}>Continue Shopping</button>
      </div>
    </div>
  );
}

export default Header;
