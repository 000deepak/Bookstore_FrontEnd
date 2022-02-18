import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import bookImage from "../../assets/Image 11.png";
import TextField from "@mui/material/TextField";
import CustomerDetails from "../customerDetails/CustomerDetails";
import OrderSummary from "../orderSummary/OrderSummary";
import { useNavigate } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "./cart.scss";

export default function Cart(props) {
  const navigate = useNavigate();
  const [fill, setfill] = React.useState(false);
  const [summary, setSummary] = React.useState(false);

  let sorted = props.bookArr.sort((a, b) => {
    let aValue = parseInt(a.bookId, 16);
    let bValue = parseInt(b.bookId, 16);
    return aValue -  bValue;
  });

  console.log(sorted, props.bookArr, "sorted");

  React.useEffect(() => {
    props.getBooks();
  }, []);

  const handlePlaceOrder = () => {
    setfill(!fill);
    console.log(fill);
  };

  const handleFill = () => {
    setSummary(!summary);
  };

  const handleRemove = (item) => {
    let bookId = item.bookId;
    const reduceQuantity = 0;

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
    <div className="main-cart">
      <div className="cart-area">
        <div className="cart-main">
          <h3 className="my-cart" style={{ fontSize: "20px", fontWeight: "800px" }}>
            {" "}
            My Cart({props.bookArr.length})
          </h3>
          {/* cart items */}
          {sorted.map((item) => (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="cart-items" style={{ display: "#flex", justifyContent: "start" }}>
                <div className="book-images">
                  <img src={bookImage}></img>
                </div>
                <div className="details">
                  <h4 style={{ height: ".1rem" }} className="book-name">Sherlock Holmes</h4>
                  <div
                    className="author"
                    style={{ fontSize: "12px", color: "#878787", font: "Roboto" }}
                  >
                    Arthur Conan Doyle
                  </div>
                  <div className="rating">
                    <div className="point">4.5*</div>
                    <div className="point-no" style={{ color: "#a03037" }}>
                      (20)
                    </div>
                  </div>
                  <div className="price" style={{ fontSize: "bold" }}>
                    Rs.3000
                  </div>
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
              <div className="deleteBook" style={{ padding: "2rem", color: "#a03037" }}>
                <Button
                  style={{
                    color: "#a03037",
                  }}
                  onClick={() => handleRemove(item)}
                  style={{ color: "#a03037" }}
                >
                  <DeleteOutlineOutlinedIcon />
                </Button>
              </div>
            </div>
          ))}
          {props.bookArr.length > 0 ? (
            <div style={{ padding: "1rem" }}>
              <Button
                onClick={handlePlaceOrder}
                style={{ backgroundColor: "#3371B5", color: "white", marginLeft: "85%" }}
              >
                Place Order
              </Button>
            </div>
          ) : null}

          {/* customer details */}
        </div>
        <div className="fill-customer-details" style={{ width: "100%" }}>
          {fill ? (
            <CustomerDetails handleFill={handleFill} />
          ) : (
            <div className="fill">Customer Details</div>
          )}
        </div>
        {/*order summary*/}
        <div style={{ width: "100%" }}>
          {summary ? (
            <OrderSummary className bookArr={props.bookArr} />
          ) : (
            <div className="fill">Order Summary</div>
          )}
        </div>
      </div>
    </div>
  );
}
