import React from 'react';
import './styling.css'; // Import the CSS file for styling

function ClickedButton() {
  // Function to handle button click
  const handleClick = () => {
    alert('The pin has been removed from the board.');
  };

  // Return the ClickedButton component
  return (
    <button className="clickedButton" onClick={handleClick}>
      Saved
    </button>
  );
}

export default ClickedButton;