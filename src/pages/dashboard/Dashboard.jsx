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


  React.useEffect(() => {
    getWishlistBooks();
  }, []);

  const getWishlistBooks = () => {
    service
      .getWishlist()
      .then((res) => {
        console.log(res,"wishlist get response 1");
        console.log(res.data.data,"wishlist get response 2");
        console.log(res.data.data.book,"wishlist get response 3 book");


        setWishlist(res.data.data.book);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(wishlist,"setwishlist");

  const getCartBooks = () => {
    service
      .getCart()
      .then((res) => {
        console.log(res,"get cart response");
        console.log(res.data.data,"get cart response");
        console.log(res.data.data.book,"get cart response");

        setCart(res.data.data.book);
        console.log(cart, "in setCart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHeader = (icon) => {
    if (icon == "cart") {
      console.log("getting cart from dashboard");
      getCartBooks();
      console.log(cart," in cart");
      navigate("/cart");

    } else if (icon == "wishlist") {
      console.log("This is wishlist icon");
      getWishlistBooks();
      console.log(wishlist,"wishlist");
      navigate("/wishlist");

    } else if (icon == "home") {
      console.log("This is home icon");

      navigate("/");
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
        <Route exact path="/cart" element={<Cart bookArr={cart} getBooks={getCartBooks} />} />
        <Route
          exact
          path="/wishlist"
          element={<Wishlist bookArr={wishlist} getBooks={getWishlistBooks} />}
        />
        <Route exact path="/" element={<Books />} />
      </Routes>
      <div>{/* <Footer /> */}</div>
    </div>
  );
}
