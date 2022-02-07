import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Books from "../../components/Books/Books";
import Cart from "../../components/cart/Cart";
import Wishlist from "../../components/wishlist/Wishlist";
import service from "../../services/bookstore";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import "./dashboard.scss";
export default function Dashboard() {
  let navigate = useNavigate();

  const [cart, setCart] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);

  const handleHeader = (icon) => {
    if (icon == "cart") {
      console.log("getting cart from dashboard");
      service
        .getCart()
        .then((res) => {
          console.log(res);
          setCart(res.data.data);
          console.log(cart,"in setCart");
          navigate("/cart");
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (icon == "wishlist") {
      console.log("This is wishlist icon");
      service
        .getWishlist()
        .then((res) => {
          console.log(res);
          setWishlist(res.data.data);
          navigate("/wishlist");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("page not found");
    }
  };

  return (
    <div className="book-dashboard">
      <div>
        <Header handleHeader={handleHeader} />
      </div>
      <Routes>
        <Route exact path="/cart" element={<Cart bookArr={cart} />} />
        <Route exact path="/wishlist" element={<Wishlist bookArr={wishlist} />} />
        <Route exact path="/" element={<Books />} />
      </Routes>
      <div>{/* <Footer /> */}</div>
    </div>
  );
}
