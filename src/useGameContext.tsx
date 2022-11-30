import React, { createContext, useContext } from "react";

const GameContext = createContext<any>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context == undefined) {
    console.log("GameContext use outside of Provider");
    return;
  }
  return context;
};

const GameContextProvider = ({ children }: { children: any }) => {
  return (
    <GameContext.Provider value={{ test: "6165" }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
