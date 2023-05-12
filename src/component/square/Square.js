// create square component
//import React
import React from 'react';
//import the styling for the square
// import './Square.css';
//create a functional component called Square that takes in props

const Square = ({ value, onClick }) => (
    //Use HTML to create a button
    

    // Use HTML to create a button that displays the value of the square
    <button className="square" onClick={onClick}>
        {value}
    </button>
)
//export the Square component
export default Square;