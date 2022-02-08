import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import bookImage from "../../assets/Image 11.png";
import "./wishlist.scss";

export default function Wishlist(props) {
  console.log(props, "in wishlist fn,props");
  console.log(props.bookArr, "bookArr.book");
  console.log(props.bookArr.book, "bookArr.book");


  React.useEffect(() => {
    props.getBooks();
  }, []);


  console.log(props.bookArr, "in wishlist fn,props.bookArr");
 
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
    <div className="cart-area">
      <div className="my-cart"> My Wishlist({props.bookArr.length})</div>
      {/* cart items */}
      {props.bookArr.map((item) => (
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
                {item.author}
              </div>
              <div className="rating">
                <div className="point">4.5*</div>
                <div className="point-no" style={{ color: "#a03037" }}>
                  (20)
                </div>
              </div>
              <div className="price">{item.price}</div>
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
