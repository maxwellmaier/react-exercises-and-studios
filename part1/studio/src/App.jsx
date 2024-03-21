import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function RecipeAuthor() {
  // Define author details
  const authorLink = "https://example.com";
  const authorPhoto = "https://example.com/author.jpg";
  const authorName = "John Doe";

  return (
      <div className={styles.recipeAuthorBlock}>
          <img src={authorPhoto} alt="Author" className={styles.imageUpdates} />
          <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a>
          </div>
      </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
      return (
          <div>
              <div>
                  <h1>Recipe Title</h1>
                  <p>Short recipe description</p>
              </div>
              <RecipeAuthor />
          </div>
      );
  }
}

export default RecipeDescription;
