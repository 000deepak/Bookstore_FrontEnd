import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Books from "../../components/Books/Books";
import "./dashboard.scss"
export default function Dashboard() {
  return (
    <div className="book-dashboard">
      <div>
        <Header />
      </div>
      <Books />
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
