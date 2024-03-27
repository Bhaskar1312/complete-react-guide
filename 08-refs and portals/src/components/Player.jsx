import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName] = useState('');

    function handleSubmit() {
        console.log(playerName.current)
        setEnteredPlayerName(playerName.current.value);
    }
  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'unknown entity' }</h2>

      <p>
        {/*  value={enteredPlayerName} not needed when using ref*/}
        <input ref={playerName} type="text"/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
