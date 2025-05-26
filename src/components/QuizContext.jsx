import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [results, setResults] = useState(() => {
    const stored = localStorage.getItem("quizResults");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("quizResults", JSON.stringify(results));
}, [results]);

  const recordAnswer = (sceneId, userAnswer, correctIndex) => {
    const isCorrect = userAnswer === correctIndex;
    setResults(prev => ({
      ...prev,
      [sceneId]: { userAnswer, correct: isCorrect }
    }));
  };

  const getScore = () =>
    Object.values(results).filter(r => r.correct).length;


  const resetQuiz = () => {
    setResults({});
    localStorage.removeItem("quizResults");
  };

  return (
    <QuizContext.Provider value={{ results, recordAnswer, getScore, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => useContext(QuizContext);
