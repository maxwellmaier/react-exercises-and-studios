import React from 'react';
import recipeData from '../recipe.json'; // Import the recipe JSON file

function RecipeName() {
  const { name } = recipeData[0]; // Extract the recipe name from the recipe data

  // Render the recipe name as an <h1> level header
  return <h1>{name}</h1>;
}

export default RecipeName;