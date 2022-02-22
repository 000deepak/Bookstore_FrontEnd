import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";

import service from "../../services/bookstore";
import bookImage from "../../assets/Image 11.png";
import "./books.scss";

function Books(props) {
  //------------------------------------------redux

  //getting state values
  const booksArray = useSelector((state) => state.getTheBooks.books);
  //replace props.books with this array to use redux

  //-------------------------------------------redux(END)

  const [snackBar, setsnackBar] = React.useState(false);
  const [bookArr, setBookArr] = React.useState(props.books);

  React.useEffect(() => {
    props.getBooks();
    console.log(props.books, "books");
    search();
    lowToHigh();
  }, []);

  const search=()=>{
    if(props.searchText!=''){
      let filtered = props.books.filter(i=>i.bookName.toLoweCase().includes(props.searchText))
      setBookArr(filtered)
    }else{
      setBookArr(props.books)
    }
  }

  const handleCart = (item) => {
    props.addToCart(item._id);
    setsnackBar(true);
  };

  const handleWishlist = (item) => {
    props.addToWishlist(item._id);
    setsnackBar(true);
  };

  const handleSelector = (e) => {
    let val = e.target.value;
    console.log(val);
    switch (val) {
      case "lowPrice":
        lowToHigh();
        break;
      case "highPrice":
        highToLow();
        break;
      default:
        console.log("invalid");
    }
  };

  const lowToHigh = () => {
    var ltoh = props.books.sort((a, b) => a.price - b.price);
    console.log(ltoh)
    setBookArr(ltoh);
    props.getBooks();

  };

  const highToLow = () => {
    var htol = props.books.sort((a, b) => a.price - b.price).reverse();
    console.log(htol)
    setBookArr(htol);
    props.getBooks();

  };

  const handleClosesnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setsnackBar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClosesnackBar}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const showButton = (item) => {
    let show = "";
    const cartContainsBook = props.cartBooks.find((data) => data.bookId === item._id);
    const wishlistContainsBook = props.wishlistBooks.find((data) => data.bookId === item._id);

    if (cartContainsBook) {
      show = (
        <div>
          <Snackbar
            open={snackBar}
            autoHideDuration={2000}
            onClose={handleClosesnackBar}
            message="Book Added To Cart"
            action={action}
          />
          <Button
            className="add-button"
            // onClick={() => handleCart(item)}

            style={{ backgroundColor: "#3371B5", color: "white", fontSize: "12px" }}
          >
            ADDED TO BAG
          </Button>
        </div>
      );
    } else if (wishlistContainsBook) {
      show = (
        <div>
          <Snackbar
            open={snackBar}
            autoHideDuration={6000}
            onClose={handleClosesnackBar}
            message="Book Added To Wishlist"
            action={action}
          />
          <Button
            className="wishlist-button"
            // onClick={() => handleWishlist(item)}
            style={{ backgroundColor: "#DBDBDB", color: "black", fontSize: "12px" }}
          >
            ADDED TO WISHLIST
          </Button>
        </div>
      );
    } else {
      show = (
        <div className="both-button">
          <div>
            <Button
              className="one-button"
              onClick={() => handleCart(item)}
              style={{ backgroundColor: "#A03037", color: "white", fontSize: "12px" }}
            >
              ADD TO BAG
            </Button>
          </div>
          <div>
            <Button
              className="one-button"
              onClick={() => handleWishlist(item)}
              style={{ backgroundColor: "#E4E4E4", color: "black", fontSize: "12px" }}
            >
              WISHLIST
            </Button>
          </div>
        </div>
      );
    }
    return show;
  };

  return (
    <div className="book-main">
      <div className="sort-bar">
        <div className="bookBar">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 className="total-books" style={{ fontSize: "20px" }}>
              Books
            </h3>
            <div className="total-books" style={{ fontSize: "12px" }}>
              ({props.books.length} items)
            </div>
          </div>
          <div>
            <select name="sort by relevance" className="priceValue" onChange={handleSelector}>
              <option value="priceValue">Sort by relevance</option>
              <option value="lowPrice">Price:Low to high</option>
              <option value="highPrice">Price:High to low</option>
              <option value="newPrice">Newest arrivals</option>
            </select>
          </div>
        </div>
      </div>
      <div className="books-area">
        {bookArr.map((item) => (
          <div className="books">
            {/*book image */}
            <div className="book-images">
              <img src={bookImage}></img>
            </div>

            <div className="button-and-details">
              {/*book details */}
              <div className="details">
                <h4 style={{ height: ".1rem" }} className="book-name">
                  {item.bookName}
                </h4>
                <div
                  className="author"
                  style={{ fontSize: "12px", color: "#878787", font: "Roboto" }}
                >
                  {item.author}
                </div>
                <div className="rating">
                  <div className="rating-no">4.5*</div>
                  <div className="rating-books" style={{ color: "#a03037" }}>
                    (20)
                  </div>
                </div>
                <div className="price" style={{ fontWeight: "bold" }}>
                  Rs.{item.price}
                </div>
              </div>

              {/*showButton */}
              <div>{showButton(item)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
