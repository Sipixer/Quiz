import { useGameContext } from "./useGameContext";

const InGame = () => {
  const { currentQuestion, PlayerAnswer, answer, NextQuestion } =
    useGameContext();
  return (
    <div className="center">
      <div className="question">
        <h2>{currentQuestion.question}</h2>
        <div className="gridreponse">
          {currentQuestion.propositions.map((proposition: string) => (
            <div
              onClick={() => PlayerAnswer(proposition)}
              className={
                "proposition " +
                (answer != "" &&
                  (currentQuestion.réponse == proposition ? "good" : "bad"))
              }
              key={proposition}
            >
              {proposition}
            </div>
          ))}
        </div>

        {answer != "" && (
          <>
            <p className="anecdote">{currentQuestion.anecdote}</p>
            <div className="button" onClick={NextQuestion}>
              Suivant
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InGame;
