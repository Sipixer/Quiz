import React, { useState } from "react";

import "./App.css";
import GameContextProvider from "./useGameContext";

function App() {
  return (
    <GameContextProvider>
      <MainMenu />
    </GameContextProvider>
  );
}

const MainMenu = () => {
  const [NumberOfQuestion, setNumberOfQuestion] = useState(10);
  const onChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfQuestion(parseInt(e.currentTarget.value));
  };
  const Start = () => {
    console.log("Start");
  };
  return (
    <div className="mainmenu">
      <h1>Voulez vous faire un quiz de culture générale ?</h1>
      <div className="questionnumber">
        <p>Combien de question voulez vous faire ?</p>
        <input
          type="range"
          value={NumberOfQuestion}
          onChange={onChangeRange}
          min={1}
          max={20}
        />
        <p>{NumberOfQuestion}</p>
      </div>
      <button className="button" onClick={Start}>
        Commencer
      </button>
    </div>
  );
};
export default App;
