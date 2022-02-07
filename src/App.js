import logo from "./logo.svg";
import "./App.css";
import User from "../src/pages/user/User";
import Header from "../src/components/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Books from "../src/components/Books/Books";
import Cart from "../src/components/cart/Cart";
import Wishlist from "../src/components/wishlist/Wishlist";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
