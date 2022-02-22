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
import { Pagination } from "@material-ui/lab";
import usePagination from "../../components/pagination/Paginate";



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
  let [page, setPage] = React.useState(1);
  const PER_PAGE = 8;

  const count = Math.ceil(books.length / PER_PAGE);
  const _DATA = usePagination(books, PER_PAGE);

  const handleChange = (e, p) => {
    console.log(_DATA.currentData(),p)
    setPage(p);
    _DATA.jump(p);
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

  const [searchText, setSearchText] = React.useState("");
  const search = (value) => {
    setSearchText(value);
  };

  return (
    <div className="book-dashboard">
      <div>
        <Header handleHeader={handleHeader} wishlist={wishlist} cart={cart} search={search} />
      </div>
      <div className="page">
        <Routes>
          <Route
            exact
            path="/cart"
            element={
              <Cart
                bookArr={cart}
                getBooks={getCartBooks}
                handleHeader={handleHeader}
                search={searchText}
              />
            }
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
                books={_DATA.currentData()}
                cartBooks={cart}
                wishlistBooks={wishlist}
                searchText={searchText}
              />
            }
          />
          <Route exact path="/orderPlaced" element={<OrderPlaced />} />
        </Routes>
        <div className="pagination">
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
