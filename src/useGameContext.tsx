import React, { createContext, useContext, useState } from "react";
import QuestionsList from "./assets/1.json";

const GameContext = createContext<any>(undefined);
type Question = {
  id: number;
  question: string;
  propositions: string[];
  réponse: string;
  anecdote: string;
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context == undefined) {
    console.log("GameContext use outside of Provider");
    return;
  }
  return context;
};

const useStatus = () => {
  const [status, setStatus] = useState(0);
  const NextStatus = () => {
    setStatus((c) => (c == 2 ? c : c + 1));
  };
  const Reset = () => {
    setStatus(0);
  };
  return { status, NextStatus, Reset };
};

const GameContextProvider = ({ children }: { children: any }) => {
  const [NumberOfQuestion, setNumberOfQuestion] = useState(10);
  const { status, NextStatus, Reset } = useStatus();
  const [Questions, setQuestions] = useState<Question[]>();
  const [point, setPoints] = useState(0);
  const [QuestionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const GenerateQuestion = () => {
    const shuffled = [...QuestionsList].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, NumberOfQuestion));
  };
  const StartGame = () => {
    setQuestionIndex(0);
    setPoints(0);
    GenerateQuestion();
    NextStatus();
  };
  const setQuestionNumber = (number: number) => {
    setNumberOfQuestion(number);
  };
  const CurrentQuestion = () => {
    if (Questions == undefined) return null;
    if (QuestionIndex == Questions?.length) {
      setQuestionIndex(0);
      NextStatus();
    } else {
      return Questions[QuestionIndex];
    }
  };
  const PlayerAnswer = (_answer: string) => {
    if (answer != "") return;
    if (_answer == currentQuestion?.réponse) {
      setPoints((c) => c + 1);
    }
    setAnswer(_answer);
  };
  const NextQuestion = () => {
    setQuestionIndex((c) => c + 1);
    setAnswer("");
  };
  const currentQuestion = CurrentQuestion();
  const value = {
    NumberOfQuestion,
    setQuestionNumber,
    status,
    StartGame,
    currentQuestion,
    PlayerAnswer,
    answer,
    NextQuestion,
    Reset,
    point,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContextProvider;
