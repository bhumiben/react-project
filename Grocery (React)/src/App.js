import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./NavigationBar";
import LoginForm from "./LoginForm";
import Home from "./Home";
import GroceryList from "./GroceryList";
import GroceryItem from "./GroceryItem";
import Checkout from "./Checkout";
import ContactUs from "./ContactUs";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/GroceryList" element={<GroceryList />} />
          <Route path="/GroceryItem" element={<GroceryItem />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
