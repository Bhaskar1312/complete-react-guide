import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        setPlayerName(event.target.value);
    }

    function handleEditClick() {
        console.log('clicked on button');
        // setIsEditing(!isEditing);
        // setIsEditing(!isEditing); // these are scheduled and with a delay
        setIsEditing(wasEditing => !wasEditing); // best practice when current depends on prev state instead of !isEditing
        // setIsEditing(wasEditing => !wasEditing); // nothing happens when both are functions

        if(isEditing){ // instead of on every keystroke
            onChangeName(symbol, playerName);
        }
    }
    // let playerName = (<span className="player-name" defaultValue={name}>{name}</span>)
    // if(isEditing) {
    //     playerName = (<input type="text" required></input>);
    // }
    return (
        <li className={isActive? "active":""}>
            <span className="player">
              {!isEditing && (<span className="player-name">{playerName}</span>)}
              {/*  {playerName}*/}
              <span className="player-symbol">{symbol}</span>
                {/*defaultValue={name} so that you can change*/}
                {isEditing && (<input type="text" value={playerName} onChange={handleChange} required></input>)}
              <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            </span>
        </li>
    );
}