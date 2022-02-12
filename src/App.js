import logo from "./logo.svg";
import "./App.css";
import User from "../src/pages/user/User";
import Header from "../src/components/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Books from "../src/components/Books/Books";
import Cart from "../src/components/cart/Cart";
import Wishlist from "../src/components/wishlist/Wishlist";
import CustomerDetails from "./components/customerDetails/CustomerDetails";
import OrderPlaced from "../src/components/order/OrderPlaced"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // <Order />
    <Router>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route exact path="/order" element={<OrderPlaced />} />

        <Route path="/" element={<Dashboard />}>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
