import React from "react";
import Button from "@mui/material/Button";
import "./order.scss";

function Header() {
  return (
    <div className="order-area">
      <div className="order">
        <div className="order-placed">Order Placed Successfully</div>
        <div style={{ height: "30vh" }}>
          hurray!!! your order is confirmed order id is #654321 <br></br>save the order id for
          further communication.
        </div>
        <div>
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
        <Button style={{ backgroundColor: "blue", color: "white" }}>Continue Shopping</Button>
      </div>
    </div>
  );
}

export default Header;
