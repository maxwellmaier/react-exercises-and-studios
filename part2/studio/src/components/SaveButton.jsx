import React from 'react';
import './styling.css'; // Import the CSS file for styling

function SaveButton() {
  // Function to handle button click
  const handleClick = () => {
    alert('You are saving this pin!');
  };

  // Return the SaveButton component
  return (
    <button id="saveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
