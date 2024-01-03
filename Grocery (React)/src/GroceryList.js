import React, { useState, useEffect } from "react";
import "./GroceryList.css"; // Import your CSS file

function GroceryList() {
  const [ingredients, setIngredients] = useState({});
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const itemPrice = 4.99;
  const taxRate = 0.13;

  useEffect(() => {
    if (search) {
      fetch(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=14e868e2&app_key=fc53a4dd1d41f5bbaba444c839ca651c&ingr=${search}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log("Data received");
          setIngredients(json);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [search]);

  const addToCart = () => {
    if (ingredients.parsed && ingredients.parsed.length > 0) {
      const foodLabel = ingredients.parsed[0].food.label;
      setCart([...cart, { label: foodLabel, price: itemPrice }]);
    }
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    return total.toFixed(2);
  };

  const handleCheckout = () => {
    const total = calculateTotal();
    alert(`Thank you for shopping! Total amount (including tax): $${total}`);
    setCart([]); // Clear the cart after checkout
  };

  return (
    <div className="grocery-list-container">
      <h1 className="app-title">Welcome to Our Grocery Store</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53DpxHdMLr7F22UTOLtIfcJMaIh5wbW8A_l-E6g9iOu9bbbc4"
        alt="Mini Mart Logo"
        className="logo"
      />
      <form className="search-form">
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for food items"
        />
        <button className="search-button" onClick={(e) => e.preventDefault()}>
          Search
        </button>
      </form>
      <div className="food-details">
        {ingredients.parsed && ingredients.parsed.length > 0 && (
          <div className="food-item">
            <div className="food-image">
              <img
                src={ingredients.parsed[0].food.image}
                alt={ingredients.parsed[0].food.label}
              />
            </div>
            <div className="food-info">
              <h3 className="food-label">{ingredients.parsed[0].food.label}</h3>
              <p className="food-category">
                Category: {ingredients.parsed[0].food.category}
              </p>
              <p className="food-description">
                {ingredients.parsed[0].food.knownAs}
              </p>
              <button className="add-to-cart-button" onClick={addToCart}>
                Add to Cart
              </button>
              <p className="food-price">${itemPrice.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
      <div className="cart-section">
        <h2>Your Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.label}: ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Total (before tax): ${calculateTotal()}</h3>
        <h3>Tax (13%): ${(calculateTotal() * taxRate).toFixed(2)}</h3>
        <h2>Total (including tax): ${calculateTotal()}</h2>
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default GroceryList;
