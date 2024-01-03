import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <Link to="/" className="menu-link">
        Home
      </Link>
      <Link to="/login" className="menu-link">
        Login
      </Link>
      <Link to="/GroceryItem" className="menu-link">
        Grocery Item
      </Link>
      <Link to="/GroceryList" className="menu-link">
        Grocery List
      </Link>
      {/* <Link to="/Checkout" className="menu-link">
        Checkout
      </Link> */}
      <Link to="/ContactUs" className="menu-link">
        Contact Us
      </Link>
    </nav>
  );
};

export default MenuBar;
