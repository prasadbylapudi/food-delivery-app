import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import "./Recipes.css";
import { Box } from "@chakra-ui/react";
function Recipes() {
  const [count, setCount] = useState(0);
  const handleAddCart = (e) => {
    console.log("add cart clicked");
    setCount(count + 1);
    console.log("items:", count);
  };
  const [recipes, setRecipes] = useState([
    {
      restaurantName: "dwaraka",
      name: "butter Chicken",
      price: 299,
    },
    {
      restaurantName: "Paradise",
      name: "chicken Manchuria",
      price: 260,
    },
  ]);
  return (
    <>
      <h1 className="heading">Recipes</h1>

      <div className="cart">Item: {count}</div>
      <div className="recipeCard">
        {recipes.map((recipe, idx) => {
          return (
            <div key={idx}>
              <h1>Restaurant:{recipe.restaurantName}</h1>
              <h1>itemname: {recipe.name}</h1>
              <h1>price: {recipe.price}(INR)</h1>
              <span>
                <Button onClick={handleAddCart}>Add to Cart</Button>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Recipes;
