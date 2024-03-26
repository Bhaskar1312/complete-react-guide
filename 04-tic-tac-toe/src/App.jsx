import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from './winning-combinations.js'
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if(gameTurns.length>0 && gameTurns[0].player==='X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {

    const [gameTurns, setGameTurns] = useState([]);
    // const [hasWinner, setHasWinner] = useState(false); // redundant

    // const [activePlayer, setActivePlayer] = useState('X'); // redundant, state can be derived from gameTurns
    // common state for both Player,GameBoard =lifting state up
    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = initialGameBoard;
    for(const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    let winner = null;
    console.log(WINNING_COMBINATIONS);
    for(const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol  = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol  = gameBoard[combination[2].row][combination[2].column];
        // console.log(firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol);
        if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol) {
            winner = firstSquareSymbol;
            console.log("winner", winner);
        }
    }

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((currActivePlayer)=>currActivePlayer==='X'?'O':'X');

        setGameTurns((prevTurns)=>{
            let currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, // we can use activePlayer but that would be merging two states
                ...prevTurns
            ];
            return updatedTurns;
        });

    }


    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player-1" symbol="X" isActive={activePlayer==='X'} />
                    <Player initialName="Player-2" symbol="O" isActive={activePlayer==='O'} />
                </ol>
                {winner && <GameOver winner={winner} />}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App
