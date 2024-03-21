import React from 'react';
import recipeData from '../recipe.json'; // Import the recipe JSON file

function IngredientList() {
  const { ingredients } = recipeData[0]; // Extract the list of ingredients from the recipe data

  // Create an unordered list of ingredients using the map function
  const ingredientsList = (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );

  // Return the list of ingredients inside its own <div> with an <h3> header
  return (
    <div>
      <h3>Ingredients</h3>
      {ingredientsList}
    </div>
  );
}

export default IngredientList;