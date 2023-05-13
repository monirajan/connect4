//create a gameboard component
//import React
import React, {useEffect} from 'react';
//import the Square component
import Square from '../square/Square';
//import the calculateWinner function
//import { calculateWinner } from '../../helpers';
//import the styling for the gameboard
import './Gameboard.css';
//create a functional component called Gameboard that takes in props
// how to give squares
const Gameboard = ({  }) => {
     const [squares, setSquares] = React.useState([]);
     const [clicks, setClicks] = React.useState(1);

     function initSquare() {
         var i = 0;
         //create a 2d array of 6 rows and 7 columns and fill it with object with properties i, background_color and i should be incremented by 1
         const squares = Array(6).fill(null).map(() => Array(7).fill(null).map(() => ({i: ++i, backgroundColor: "white"})));
          setSquares(squares);
     }

     useEffect(() => {
         initSquare();
    }, []);

return (
//Create a 6 x 7 matrix using the map function inside the gameboard component using the squares array
//Use the map function to create a row of 7 squares
//Use the map function to create a square with a value of 0
//Use the map function to create a square with a value of 1
//Use the map function to create a square with a value of 2
//Use the map function to create a square with a value of 3

        <div className="gameboard">
            {squares.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((square, colIndex) => (
                        <Square key={colIndex} value={square} setClick={setClicks} clicks={clicks} />
                    ))}
                </div>
            ))}
        </div>


)
}
//export the Gameboard component
export default Gameboard;




