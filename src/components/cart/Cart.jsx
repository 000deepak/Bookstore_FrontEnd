import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import bookImage from "../../assets/Image 11.png";
import TextField from "@mui/material/TextField";
import "./cart.scss";

export default function Cart(props) {
  console.log(props, "in cart fn,props");
  console.log(props.bookArr, "in cart fn,props.bookArr");
  console.log(props.bookArr.book, "in cart fn,props.booKArr.book");

  const handleMinus = (item) => {
    console.log("adding quantity");
    let bookId = item.bookId;
  
    let data = {
      bookId:bookId,
      quantity: "-1"
    };

    console.log(data.bookId,data.quantity);
    service
      .updateCart(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePlus = (item) => {
    console.log("adding quantity");
    let bookId = item.bookId;
  
    let data = {
      bookId:bookId,
      quantity: "1"
    };

    console.log(data.bookId,data.quantity);
    service
      .updateCart(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cart-area">
      <div className="my-cart"> My cart({props.bookArr.book.length})</div>
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
                  onClick={()=>handleMinus(item)}
                  style={{ backgroundColor: "#A03037", color: "white", fontSize: "12px" }}
                >
                  -
                </Button>
                <Button>10</Button>
                <Button
                  onClick={()=>handlePlus(item)}
                  style={{ backgroundColor: "#E4E4E4", color: "black", fontSize: "12px" }}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* customer details */}
      <div className="customer-details">
        <form className="customer-form">
          <div>Customer Details</div>
          <div className="name">
            <TextField className="form-detail"></TextField>
            <TextField className="form-detail"></TextField>
          </div>
          <br></br>
          <div className="name">
            <TextField className="form-detail"></TextField>
            <TextField className="form-detail"></TextField>
          </div>
          <br></br>
          <div>
            <TextField fullWidth></TextField>
          </div>

          <br></br>
          <div className="name">
            <TextField className="form-detail"></TextField>
            <TextField className="form-detail"></TextField>
          </div>
          <br></br>
          <div className="name">
            <TextField className="form-detail"></TextField>
            <TextField className="form-detail"></TextField>
          </div>
          <div className="type">
            <div>Home</div>
            <div>Work</div>
            <div>Other</div>
            <Button style={{ backgroundColor: "blue" }}>Continue</Button>
          </div>
        </form>
      </div>
      {/* order summary */}
      <div className="order-summary">
        <div className="my-cart">Order Summary</div>
        <div className="cart-items">
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
            <div className="add-quantity">
              <Button style={{ backgroundColor: "#A03037", color: "white", fontSize: "12px" }}>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
