// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53DpxHdMLr7F22UTOLtIfcJMaIh5wbW8A_l-E6g9iOu9bbbc4"
          alt="Mini Mart Logo"
          className="logo"
        />
        <h1 className="store-name">Welcome to Mini Mart</h1>
      </div>
      <div className="content">
        <p className="description">
          Discover a world of flavors and quality at Mini Mart. We're more than
          just a grocery store.
        </p>
        <div className="offer-container">
          <div className="offer">
            <h2 className="offer-title">Special Offer</h2>
            <p className="offer-text">
              Buy One, Get One <span className="offer-highlight">50% OFF</span>
            </p>
            <p className="offer-details">Selected Fresh Produce</p>
          </div>
          <div className="offer">
            <h2 className="offer-title">Limited Time</h2>
            <p className="offer-text">
              <span className="offer-highlight">25% OFF</span> Snack Aisle Items
            </p>
            <p className="offer-details">Chips, Cookies, and More!</p>
          </div>
        </div>
      </div>
      <div className="login-button-container">
        <Link to="/login" className="login-button">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Home;
