import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Books from "../../components/Books/Books";
import Cart from "../../components/cart/Cart";
import Wishlist from "../../components/wishlist/Wishlist";
import service from "../../services/bookstore";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//redux
import {fetchBooks } from "../../store/actions/index";
import { useSelector, useDispatch } from "react-redux";

//css
import "./dashboard.scss";

export default function Dashboard() {
  //-----------------------------------------------redux

  const dispatch = useDispatch();
  //getting state values
  const booksArray = useSelector((state) => state.getTheBooks.books);
  console.log(booksArray,"booksArray")

  //-----------------------------------------------redux(END)

  let navigate = useNavigate();

  const [books, setBooks] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);

  React.useEffect(() => {
    getBooks();
    getWishlistBooks();
    getCartBooks();
  }, []);

  const getBooks = () => {
    service
      .getBooks()
      .then((res) => {
        console.log(res);
        dispatch(fetchBooks(res.data.data));
        setBooks(res.data.data);
        getCartBooks();
        getWishlistBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWishlistBooks = () => {
    service
      .getWishlist()
      .then((res) => {
        setWishlist(res.data.data.book);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCartBooks = () => {
    service
      .getCart()
      .then((res) => {
        setCart(res.data.data.book);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToCart = (bookId) => {
    console.log(bookId);
    service
      .addCart(bookId)
      .then((res) => {
        console.log(res);
        getCartBooks();
        getWishlistBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToWishlist = (bookId) => {
    console.log(bookId);
    service
      .addWishlist(bookId)
      .then((res) => {
        console.log(res);
        getCartBooks();
        getWishlistBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHeader = (icon) => {
    if (icon == "cart") {
      console.log("getting cart from dashboard");
      getCartBooks();
      console.log(cart, " in cart");
      navigate("/cart");
    } else if (icon == "wishlist") {
      console.log("This is wishlist icon");
      getWishlistBooks();
      console.log(wishlist, "wishlist");
      navigate("/wishlist");
    } else if (icon == "home") {
      console.log("This is home icon");

      navigate("/");
    } else {
      console.log("page not found");
    }
  };

  return (
    <div className="book-dashboard" style={{ minHeight: "100vh" }}>
      <div>
        <Header handleHeader={handleHeader} wishlist={wishlist} cart={cart} />
      </div>
      <Routes>
        <Route exact path="/cart" element={<Cart bookArr={cart} getBooks={getCartBooks} />} />
        <Route
          exact
          path="/wishlist"
          element={
            <Wishlist bookArr={wishlist} getBooks={getWishlistBooks} addToCart={addToCart} />
          }
        />
        <Route
          exact
          path="/"
          element={
            <Books
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              books={ booksArray/* books */}
              cartBooks={cart}
              wishlistBooks={wishlist}
            />
          }
        />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}
