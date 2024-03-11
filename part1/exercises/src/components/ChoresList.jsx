import React from 'react';
import classes from './ChoresList.module.css'; // Import the CSS module with styles

export default function ChoresList() {
    return (
        <div>
            <h2 className={classes.choresHeading}>Chores List</h2>
            <ul className={classes.choresText}> {/* Apply styles to the list */}
                <li>Clean the kitchen</li>
                <li>Do laundry</li>
                <li>Walk the dog</li>
                {/* Add more chores as needed */}
            </ul>
        </div>
    );
}

