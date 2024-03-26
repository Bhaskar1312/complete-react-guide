import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";

function App() {
    function deriveActivePlayer(gameTurns) {
        let currentPlayer = 'X';
        if(gameTurns.length>0 && gameTurns[0].player==='X') {
            currentPlayer = 'O';
        }
        return currentPlayer;
    }
    const [gameTurns, setGameTurns] = useState([]);
    // const [activePlayer, setActivePlayer] = useState('X'); // redundant, state can be derived from gameTurns
    // common state for both Player,GameBoard =lifting state up
    const activePlayer = deriveActivePlayer(gameTurns);
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
                <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App
