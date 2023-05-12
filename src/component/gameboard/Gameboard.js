//create a gameboard component
//import React
import React from 'react';
//import the Square component
import Square from '../square/Square';
//import the calculateWinner function
//import { calculateWinner } from '../../helpers';
//import the styling for the gameboard
import './Gameboard.css';
//create a functional component called Gameboard that takes in props
// how to give squares
const Gameboard = ({ onClick }) => {
    //create a 2d array of 6 rows and 7 columns
    const squares = Array(6).fill(Array(7).fill(null));
    //
    // const [board, setBoard] = useState(squares);
    // const [player, setPlayer] = useState(1);

return (
//Create a 6 x 7 matrix using the map function inside the gameboard component
<div className="gameboard">
    {squares.map((row) => (
        <>
        <div className='Row'>
            {
        row.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
        </div> 
        <br></br>
        </>
    ))}

</div>

)
}
//export the Gameboard component
export default Gameboard;




