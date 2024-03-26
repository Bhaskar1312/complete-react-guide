import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(rowIndex, colIndex) {
        console.log(rowIndex, colIndex, "handleSelectSquare")
        setGameBoard((prevGameBoard)=>{

            // prevGameBoard[rowIndex][colIndex] = 'X'; // use immutable state for copying using spread ... rather than updating arrays/objects
            const updatedBoard = [...prevGameBoard.map(nestedArr=>[...nestedArr])];
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        });
    }
    return (
        <ol id="game-board">
            {gameBoard.map(
                (row, rowIndex)=><li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex)=> <li key={colIndex}>
                        <button onClick={()=>handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li> )}
                </ol>
            </li> )}
        </ol>
    )
}