import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [results, setResults] = useState({}); // { sceneId: {userAnswer, correct} }

  const recordAnswer = (sceneId, userAnswer, correctIndex) => {
    const isCorrect = userAnswer === correctIndex;
    setResults(prev => ({
      ...prev,
      [sceneId]: { userAnswer, correct: isCorrect }
    }));
  };

  const getScore = () =>
    Object.values(results).filter(r => r.correct).length;

  return (
    <QuizContext.Provider value={{ results, recordAnswer, getScore }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
