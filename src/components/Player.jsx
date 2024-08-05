import { useState } from 'react';

export default function Player({ initialName, symbol}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [ isEditing, setIsEditing ] = useState(false);

  function editButtonClickHandler() {
    setIsEditing(() => !isEditing);
  }

  function handleNameChange(event) {
    console.log(event)
    setPlayerName(event.target.value);
  }

  return(
    <li>
      <span className="player">
      {isEditing ? 
          <input type='text' required value={playerName} onChange={handleNameChange}></input>
         :
          <span className="player-name">{playerName}</span>
      }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editButtonClickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}