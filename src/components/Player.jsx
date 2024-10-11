import { useState } from 'react';

export default function Player({ name, symbol, isActive, changeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditNameClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      changeName(symbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(() => e.target.value);
  }

  let playerNameElem = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameElem = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {playerNameElem}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditNameClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
