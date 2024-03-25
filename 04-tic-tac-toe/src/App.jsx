
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" >
          <li>
            <span className="player">
              <span className="player-name">Player-1</span>
              <span className="player-symbol">X</span>
              <button>Edit</button>
            </span>
          </li>
          <li>
            <span className="player">
              <span className="player-name">Player-2</span>
              <span className="player-symbol">O</span>
              <button>Edit</button>
            </span>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default App
