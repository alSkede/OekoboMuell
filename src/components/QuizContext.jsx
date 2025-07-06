import { createContext, useContext, useState, useEffect } from "react";

const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [results, setResults] = useState(() => {
    const stored = localStorage.getItem("quizResults");
    return stored ? JSON.parse(stored) : {};
  });

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  useEffect(() => {
    localStorage.setItem("quizResults", JSON.stringify(results));
  }, [results]);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  const recordAnswer = (sceneId, userAnswer, correctIndex) => {
    const isCorrect = userAnswer === correctIndex;
    setResults((prev) => ({
      ...prev,
      [sceneId]: { userAnswer, correct: isCorrect },
    }));
  };

  const getScore = () =>
    Object.values(results).filter((r) => r.correct).length;

  const resetQuiz = () => {
    setResults({});
    localStorage.removeItem("quizResults");
    setUserName("");
    localStorage.removeItem("userName");
  };

  return (
    <QuizContext.Provider
      value={{
        results,
        recordAnswer,
        getScore,
        resetQuiz,
        userName,
        setUserName,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
