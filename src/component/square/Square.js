// create square component
//import React
import React from 'react';
//import the styling for the square
import './square.css';
//create a functional component called Square that takes in props

const Square = ({ value, setClick, clicks }) => {
    //Use HTML to create a button

    const onClick = (value) => {
        //when background color is not white return
        if (value.backgroundColor !== "white") {
            return;
        }
        if (clicks % 2 === 0) {
            value.backgroundColor = "red";
        } else {
            value.backgroundColor = "yellow";
        }
        setClick(clicks + 1);
    }

    // Use HTML to create a button that displays the value of the square
    return     (<button id={`square-${value.i}`} style={{ backgroundColor: value.backgroundColor }} className="square" onClick={()=>{onClick(value)}}>
    </button>
);
};


//export the Square component
export default Square;