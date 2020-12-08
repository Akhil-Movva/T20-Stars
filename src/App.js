import React, { useState } from "react";
import "./styles.css";

var players = {
  batsmen: ["Virat Kohli", "Kane Williamson", "Ab de Villiers"],
  bowlers: ["Natarajan", "Rashid Khan", "Jofra Archer"],
  allrounders: ["Ben Stokes", "Hardik Pandya", "Andre Russell"]
};

export default function App() {
  var [playerOne, setPlayerOne] = useState(players.batsmen[0]);
  var [playerTwo, setPlayerTwo] = useState(players.batsmen[1]);
  var [playerThree, setPlayerThree] = useState(players.batsmen[2]);

  function clickHandler(role) {
    setPlayerOne(role[0]);
    setPlayerTwo(role[1]);
    setPlayerThree(role[2]);
  }

  return (
    <div className="App">
      <div>
        <h1>
          <span role="img" aria-labelledby="bat and bowl">
            🏏
          </span>
          T20 Stars
          <span role="img" aria-labelledby="star">
            ⭐
          </span>
        </h1>
        <p> Have a look at my favorite T20 players across roles</p>
      </div>
      <div>
        <button onClick={() => clickHandler(players.batsmen)} className="role">
          Batsmen
        </button>
        <button onClick={() => clickHandler(players.bowlers)} className="role">
          Bowlers
        </button>
        <button
          onClick={() => clickHandler(players.allrounders)}
          className="role"
        >
          All-rounders
        </button>
      </div>
      <hr />
      <ul className="list">
        <li>
          <div className="item">{playerOne}</div>
        </li>
        <li>
          <div className="item">{playerTwo}</div>
        </li>
        <li>
          <div className="item">{playerThree}</div>
        </li>
      </ul>
    </div>
  );
}
