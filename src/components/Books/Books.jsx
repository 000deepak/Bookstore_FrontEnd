import React from "react";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import bookImage from "../../assets/Image 11.png";
import "./books.scss";

function Books() {
  return (
    <div className="books-area">
      <div className="books">
        <div className="book-images">
          <img src={bookImage}></img>
        </div>

        <div className="details">
          <div className="book-name">Book Name</div>
          <div className="author" style={{ fontSize: "12px", color: "#878787", font: "Roboto" }}>
            by ME
          </div>
          <div className="rating">
            <div className="point">4.5*</div>
            <div className="point-no" style={{ color: "#a03037" }}>
              (20)
            </div>
          </div>
          <div className="price">Price</div>
        </div>
        <div></div>
        <div className="add-button">
          <Button style={{ backgroundColor: "#A03037", color: "white", fontSize: "12px" }}>
            ADD TO BAG
          </Button>
          <Button style={{ backgroundColor: "#E4E4E4", color: "black", fontSize: "12px" }}>
            WISHLIST
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Books;
