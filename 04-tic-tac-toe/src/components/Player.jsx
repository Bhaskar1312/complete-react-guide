import {useState} from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick(name) {
        console.log('clicked on button', name);
        // setIsEditing(!isEditing);
        // setIsEditing(!isEditing); // these are scheduled and with a delay
        setIsEditing(wasEditing => !wasEditing); // best practice when current depends on prev state instead of !isEditing
        // setIsEditing(wasEditing => !wasEditing); // nothing happens when both are functions
    }
    // let playerName = (<span className="player-name">{name}</span>)
    // if(isEditing) {
    //     playerName = (<input type="text" required></input>);
    // }
    return (
        <li>
            <span className="player">
              {!isEditing && (<span className="player-name">{name}</span>)}
              {/*  {playerName}*/}
              <span className="player-symbol">{symbol}</span>
                {isEditing && (<input type="text" value={name} required></input>)}
              <button onClick={()=>handleEditClick(name)}>{isEditing ? "Save" : "Edit"}</button>
            </span>
        </li>
    );
}