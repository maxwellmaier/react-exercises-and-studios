import React from 'react';
import SaveButton from './SaveButton'; // Import SaveButton component
import ClickedButton from './ClickedButton'; // Import ClickedButton component
import './styling.css'; // Import the CSS file for styling

function Button(props) {
  // Destructure the props to get the saveButton value
  const { saveButton } = props;

  // Conditional rendering based on the saveButton value
  return saveButton ? <SaveButton /> : <ClickedButton />;
}

export default Button;
 