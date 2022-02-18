import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import orderOne from "../../assets/order1.png";
import orderTwo from "../../assets/order2.png";

import "./orderPlaced.scss";

function OrderPlaced() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="orderPlaced-area">
      <div className="orderPlaced">
        <div className="cracker">
          <img src={orderOne} alt="this is logo"></img>
          <div className="orderPlaced-placed">Order Placed Successfully!!</div>
          <img src={orderTwo} alt="this is logo"></img>
        </div>

        <div style={{ height: "30vh" }}>
          Hurray!!! your order is confirmed order id is #654321 <br></br>save the order id for
          further communication.
        </div>
        <div style={{padding: "1rem" }}>
          <table>
            <tr>
              <th>Email Us</th>
              <th>Contact Us</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>admin@bookstore.com</td>
              <td>+91 816347881</td>
              <td>Address</td>
            </tr>
          </table>
        </div>
        <Button onClick={handleHome} style={{ backgroundColor: "blue", color: "white",  }}>
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}

export default OrderPlaced;
