import logo from "./logo.svg";
import "./App.css";
import User from "../src/pages/user/User";
import Dashboard from "./pages/dashboard/Dashboard";
import Cart from "../src/components/cart/Cart";
import Wishlist from "../src/components/wishlist/Wishlist";
import OrderPlaced from "../src/components/order/OrderPlaced";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Dashboard />}>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/orderPlaced" element={<OrderPlaced />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
