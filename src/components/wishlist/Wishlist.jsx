import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import service from "../../services/bookstore";
import bookImage from "../../assets/Image 11.png";
import "./wishlist.scss";

export default function Wishlist(props) {
  React.useEffect(() => {
    props.getBooks();
  }, []);

  const handleCart = (item) => {
    console.log(item.bookId);
    props.addToCart(item.bookId);
  }


  const handleRemove = (item) => {
    console.log(item, "item");

    console.log(item.bookId, "removing from wishllist");
    service
      .updateWishlist(item.bookId)
      .then((res) => {
        console.log(res);
        props.getBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="wishlist-area">
      <div className="my-wishlist"> My Wishlist({props.bookArr.length})</div>
      {/* wishlist items */}
      {props.bookArr.map((item) => (
        <div className="main-flex">
          <div className="wishlist-items">
            <div className="book-images">
              <img src={bookImage}></img>
            </div>
            <div className="details">
              <div className="book-name">{item.bookName}</div>
              <div
                className="author"
                style={{ fontSize: "12px", color: "#878787", font: "Roboto" }}
              >
                {item.author}
              </div>
              <div className="rating">
                <div className="point">4.5*</div>
                <div className="point-no" style={{ color: "#a03037" }}>
                  (20)
                </div>
              </div>
              <div className="price">{item.price}</div>
              <div className="add-book"></div>
            </div>
          </div>
          <div className="remove-book">
            <Button onClick={() => handleRemove(item)} style={{ color: "#a03037" }}>
              <DeleteOutlineOutlinedIcon />
            </Button>
            <Button onClick={() => handleCart(item)} style={{ color: "#a03037" }}>
              <AddShoppingCartIcon />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
