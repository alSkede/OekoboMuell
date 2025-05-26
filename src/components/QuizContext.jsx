import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

useEffect(() => {
  localStorage.setItem("quizResults", JSON.stringify(results));
}, [results]);

export const QuizProvider = ({ children }) => {
  const [results, setResults] = useState(() => {
    const stored = localStorage.getItem("quizResults");
    return stored ? JSON.parse(stored) : {};
  });

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
