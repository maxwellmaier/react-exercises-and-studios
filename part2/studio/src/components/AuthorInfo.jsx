import React from 'react';
import recipeData from '../recipe.json'; // Import the recipe JSON file

function AuthorInfo() {
  const { author, authorImage, website } = recipeData[0]; // Extract author information from the recipe data

  // Create variables to render the author's name, image, and URL
  const recipeAuthor = <div>{author}</div>;
  const recipeAuthorImage = <img src={authorImage} alt={author} className="authorImage" />;
  const recipeWebsite = <a href={website}>{website}</a>;

  // Return all variables in a final <div>
  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;