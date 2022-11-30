import React, { useState } from "react";

import "./App.css";
import EndGame from "./EndGame";
import InGame from "./InGame";
import MainMenu from "./MainMenu";
import GameContextProvider, { useGameContext } from "./useGameContext";

function App() {
  return (
    <GameContextProvider>
      <StatusManagerCheker statusis={0}>
        <MainMenu />
      </StatusManagerCheker>
      <StatusManagerCheker statusis={1}>
        <InGame />
      </StatusManagerCheker>
      <StatusManagerCheker statusis={2}>
        <EndGame />
      </StatusManagerCheker>
    </GameContextProvider>
  );
}

const StatusManagerCheker = ({ statusis, children }: any) => {
  const { status } = useGameContext();
  if (status == statusis) {
    return children;
  }
};
export default App;
