import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Books from "../../components/Books/Books";
import Cart from "../../components/cart/Cart";
import Wishlist from "../../components/wishlist/Wishlist";
import service from "../../services/bookstore";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OrderPlaced from "../../components/order/OrderPlaced";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

//redux
import { fetchBooks } from "../../store/actions/index";
import { fetchCartBooks } from "../../store/actions/index";
import { fetchWishlistBooks } from "../../store/actions/index";
import { useSelector, useDispatch } from "react-redux";

//css
import "./dashboard.scss";

export default function Dashboard() {
  //-----------------------------------------------redux

  const dispatch = useDispatch();

  //-----------------------------------------------redux(END)

  let navigate = useNavigate();


  const [books, setBooks] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);
  const [sliced, setSliced] = React.useState([]);

  React.useEffect(() => {
    getBooks();
    getWishlistBooks();
    getCartBooks();
    // handlePage(1);
  }, []);

  //-----------------------------------------------Pagination
  const [page, setPage] = React.useState(1);

  const handlePage = (e, page) => {
    if (page == 1) {
      
      let arr = books.slice(0, 8).map((b) => b);
      setSliced(arr);
      setPage(page);
      getBooks();
    } else if (page == 2) {
      getBooks();
      let arr = books.slice(8, 16).map((b) => b);
      setSliced(arr);
      setPage(page);
      console.log(arr, "page 2");
    } else if (page == 3) {
      let arr = books.slice(16, 24).map((b) => b);
      setBooks(arr);
    } else {
      getBooks();
      let arr = books.slice(0, 8).map((b) => b);
      setSliced(arr);
      setPage(page);
    }
  };
  //-----------------------------------------------Pagination

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
        dispatch(fetchWishlistBooks(res.data.data.book));
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
        dispatch(fetchCartBooks(res.data.data.book));
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
    } else if (icon == "orderPlaced") {
      console.log("This is order icon");
      navigate("/orderPlaced");
    } else if (icon == "home") {
      console.log("This is home icon");

      navigate("/");
    } else {
      console.log("page not found");
    }
  };

  const [searchText ,setSearchText]=React.useState('');
  const search=(value)=>{
    setSearchText(value)
  }
  

  return (
    <div className="book-dashboard" style={{ minHeight: "100vh" }}>
      <div>
        <Header handleHeader={handleHeader} wishlist={wishlist} cart={cart} search={search}/>
      </div>
      <div className="page">
        <Routes>
          <Route
            exact
            path="/cart"
            element={<Cart bookArr={cart} getBooks={getCartBooks} handleHeader={handleHeader} search={searchText}/>}
          />
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
                getBooks={getBooks}
                books={sliced}
                cartBooks={cart}
                wishlistBooks={wishlist}
              />
            }
          />
          <Route exact path="/orderPlaced" element={<OrderPlaced />} />
        </Routes>
        <div className="pagination">
          <Stack spacing={1}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              onChange={handlePage}
              page={page}
            />
          </Stack>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
