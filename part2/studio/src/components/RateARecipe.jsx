import React from 'react';

const stars = ['⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️'];

function GiveRating(props) {
  return <h3>{stars[props.rating - 1]}</h3>;
}

function RateARecipe(props) {
  // Check if the rating is between 1 and 5
  const isValidRating = props.rating >= 1 && props.rating <= 5;

  // Render GiveRating component if the rating is valid, otherwise render null
  return isValidRating ? <GiveRating rating={props.rating} /> : null;
}

export default RateARecipe;

 
 //import json file for the data
 //apply css for className recipeImage
 