import {useState} from "react";

export default function Player() {
    const [enteredPlayerName, setEnteredPlayerName] = useState();
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        setSubmitted(false);
        console.log("event.target.value", event.target.value);
        setEnteredPlayerName(event.target.value);
    }
    function handleSubmit() {
        setSubmitted(true);
    }
  return (
    <section id="player">
      <h2>Welcome {submitted?enteredPlayerName:"unknown entity"}</h2>

      <p>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
