import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import bookImage from "../../assets/Image 11.png";
import { useNavigate } from "react-router-dom";

import "./orderSummary.scss";

export default function Summary(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    // props.getBooks();
  }, []);

  const handleCheckout = () => {
    // navigate("/order");
    props.handleHeader("orderPlaced");
  };

  return (
    <div className="order-area">
      <div className="order-main">
        <div className="my-order" style={{ fontSize: "20px", fontWeight: "800px" }}>
          {" "}
          My order({props.bookArr.length})
        </div>
        {/* order items */}
        {props.bookArr.map((item) => (
          <div>
            <div className="order-items">
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
              </div>
            </div>
          </div>
        ))}
        <div style={{ padding: "1rem" }}>
          <Button
            onClick={handleCheckout}
            style={{ backgroundColor: "#3371B5", color: "white", marginLeft: "80%" }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
