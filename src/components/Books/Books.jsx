import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import bookImage from "../../assets/Image 11.png";
import "./books.scss";

function Books(props) {
  const handleCart = (item) => {
    props.addToCart(item._id);
  };

  const handleWishlist = (item) => {
    props.addToWishlist(item._id);
  };

  return (
    <div className="book-main">
      <div className="bookBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="total-books" style={{ fontSize: "20px" }}>
            Books
          </div>
          <div className="total-books" style={{ fontSize: "12px" }}>
            ({props.books.length} items)
          </div>
        </div>
        <div>
          <select name="sort by relevance" className="priceValue">
            <option value="priceValue">Sort by relevance</option>
            <option value="lowPrice">Price:Low to high</option>
            <option value="highPrice">Price:High to low</option>
            <option value="newPrice">Newest arrivals</option>
          </select>
        </div>
      </div>
      <div className="books-area">
        {props.books.map((item, index) => (
          <div className="books">
            {/*book image */}
            <div className="book-images">
              <img src={bookImage}></img>
            </div>

            {/*book details */}
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
            </div>

            {/*buttons */}
            <div className="add-button">
              <Button
                onClick={() => handleCart(item)}
                style={{ backgroundColor: "#A03037", color: "white", fontSize: "12px" }}
              >
                ADD TO BAG
              </Button>
              <Button
                onClick={() => handleWishlist(item)}
                style={{ backgroundColor: "#E4E4E4", color: "black", fontSize: "12px" }}
              >
                WISHLIST
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
