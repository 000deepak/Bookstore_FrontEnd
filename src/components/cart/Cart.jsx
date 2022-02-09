import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import bookImage from "../../assets/Image 11.png";
import TextField from "@mui/material/TextField";
import CustomerDetails from "../customerDetails/CustomerDetails";
import { useNavigate } from "react-router-dom";

import "./cart.scss";

export default function Cart(props) {
  const navigate = useNavigate();
  const [fill, setfill] = React.useState(false);

  React.useEffect(() => {
    props.getBooks();
  }, []);

  const handleFill = () => {
    navigate("/order");
  };

  const handlePlaceOrder = () => {
    setfill(!fill);
    console.log(fill);
  };

  const handleMinus = (item) => {
    console.log("adding quantity");
    let bookId = item.bookId;
    const reduceQuantity = item.quantity - 1;

    let data = {
      bookId: bookId,
      quantity: reduceQuantity,
    };

    service
      .updateCart(data)
      .then((res) => {
        console.log(res);
        props.getBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePlus = (item) => {
    console.log("adding quantity");
    let bookId = item.bookId;

    const increaseQuantity = item.quantity + 1;

    let data = {
      bookId: bookId,
      quantity: increaseQuantity,
    };

    service
      .updateCart(data)
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
      <div className="cart-main">
        <div className="my-cart" style={{ fontSize: "20px", fontWeight: "800px" }}>
          {" "}
          My Cart({props.bookArr.length})
        </div>
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
                    onClick={() => handleMinus(item)}
                    style={{
                      backgroundColor: "#E4E4E4",
                      color: "black",
                      fontSize: "12px",
                      minWidth: "34px",
                    }}
                  >
                    -
                  </Button>
                  <Button style={{ minWidth: "34px" }}>{item.quantity}</Button>
                  <Button
                    onClick={() => handlePlus(item)}
                    style={{
                      backgroundColor: "#E4E4E4",
                      color: "black",
                      fontSize: "12px",
                      minWidth: "34px",
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div style={{ padding: "1rem" }}>
          <Button
            onClick={handlePlaceOrder}
            style={{ backgroundColor: "blue", color: "white", marginLeft: "80%" }}
          >
            Place Order
          </Button>
        </div>

        {/* customer details */}
      </div>
      <div className="fill-customer-details" style={{ width: "100%" }}>
        {fill ? (
          <CustomerDetails handleFill={handleFill} />
        ) : (
          <div className="fill">
            <Button onClick={handleFill}>Customer Details</Button>
          </div>
        )}
      </div>
      {/* place order*/}
    </div>
  );
}
