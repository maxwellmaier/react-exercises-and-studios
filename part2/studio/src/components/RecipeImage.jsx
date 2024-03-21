import React from 'react';
import recipeData from '../recipe.json'; // Import the recipe JSON file

function RecipeImage() {
  const { recipeImage, name } = recipeData[0]; // Extract the recipe image URL and name from the recipe data

  // Return the recipe image inside its own <div>
  return (
    <div>
      <img src={recipeImage} alt={name} className="recipeImage" /> {/* Apply the recipeImage className for styling */}
    </div>
  );
}

export default RecipeImage;
