import { useGameContext } from "./useGameContext";

const MainMenu = () => {
  return (
    <div className="mainmenu">
      <h1>Petit test de culture générale ?</h1>
      <NumberOfQuestion />
      <StartButton />
    </div>
  );
};

const NumberOfQuestion = () => {
  const { NumberOfQuestion, setQuestionNumber } = useGameContext();
  const onChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionNumber(parseInt(e.currentTarget.value));
  };
  return (
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
  );
};
const StartButton = () => {
  const { StartGame } = useGameContext();
  return (
    <div className="button" onClick={() => StartGame()}>
      Commencer
    </div>
  );
};

export default MainMenu;
