import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import bookImage from "../../assets/Image 11.png";
import TextField from "@mui/material/TextField";
import "./wishlist.scss";

export default function Wishlist(props) {
  console.log(props, "in wishlist fn,props");
  console.log(props.bookArr.book, "bookArr.book");


  console.log(props.bookArr, "in wishlist fn,props.bookArr");
 
  const handleRemove = (item) => {
    console.log(item, "item");

    console.log(item.bookId, "removing from wishllist");
    service
      .updateWishlist(item.bookId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cart-area">
      <div className="my-cart"> My Wishlist({props.bookArr.book.length})</div>
      {/* cart items */}
      {props.bookArr.book.map((item) => (
        <div>
          <div className="cart-items">
            <div className="book-images">
              <img src={bookImage}></img>
            </div>
            <div className="details">
              <div className="book-name">{item.bookName}</div>
              <div
                className="author"
                style={{ fontSize: "12px", color: "#878787", font: "Roboto" }}
              >
                by ME
              </div>
              <div className="rating">
                <div className="point">4.5*</div>
                <div className="point-no" style={{ color: "#a03037" }}>
                  (20)
                </div>
              </div>
              <div className="price">Price</div>
              <div className="add-quantity">
                <Button
                  onClick={() => handleRemove(item)}
                  style={{ backgroundColor: "#A03037", color: "white", fontSize: "12px" }}
                >
                  -
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
