import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from './winning-combinations.js'
import GameOver from "./components/GameOver.jsx";

const PLAYERS={
    X: 'Player 1',
    O: 'Player 2'
};

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
    const [players, setPlayers] = useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);
    // const [hasWinner, setHasWinner] = useState(false); // redundant

    // const [activePlayer, setActivePlayer] = useState('X'); // redundant, state can be derived from gameTurns
    // common state for both Player,GameBoard =lifting state up
    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = [...initialGameBoard.map(array=>[...array])] // previously we are modifying initialGameBoard in place as well, so the screen wont get updated(for-of not get executed)
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
            winner = players[firstSquareSymbol];
            console.log(players);
            console.log("winner", winner);
        }
    }

    const hasDraw = gameTurns.length===9 &&!winner;

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

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayers(prevPlayers =>{
            return {
                ...prevPlayers,
                [symbol]: newName
            };
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player-1" symbol="X" isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange}/>
                    <Player initialName="Player-2" symbol="O" isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App
