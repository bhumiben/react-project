import React, { useState, useEffect } from "react";
import "./GroceryItem.css";

function GroceryItem() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=14e868e2&app_key=fc53a4dd1d41f5bbaba444c839ca651c&ingr= "apple", "mango", "orange", "Banana", "Milk", "Chicken", "Beans", "eggPlant", "eggs", "Sugarcane" `
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("Data received", json);
        if (json.parsed && Array.isArray(json.parsed)) {
          setIngredients(json.parsed);
        } else {
          setIngredients([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIngredients([]);
      });
  }, []); // Empty dependency array ensures the effect runs once on component mount
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (foodId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [foodId]: (prevQuantities[foodId] || 0) + 1
    }));
  };

  const handleDecrement = (foodId) => {
    if (quantities[foodId] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [foodId]: prevQuantities[foodId] - 1
      }));
    }
  };

  return (
    <div className="grocery-list-container">
      <h1 className="groceryItem">Good food</h1>
      <div className="food-details">
        {ingredients.map((item, index) => (
          <div key={index} className="grocery-item">
            <h3>Food Label: {item.food.label}</h3>

            <h3>Food Category: {item.food.category}</h3>
            <div className="food-image">
              <img src={item.food.image} alt={item.food.label} />
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleDecrement(item.food.foodId)}>
                -
              </button>
              <span>{quantities[item.food.foodId] || 0}</span>
              <button onClick={() => handleIncrement(item.food.foodId)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryItem;
