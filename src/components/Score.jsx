import { useQuiz } from "../QuizContext";

export default function ScorePage() {
  const { getScore } = useQuiz();
  const score = getScore();

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">🎉 Deine Punktzahl:</h2>
      <p className="text-5xl text-green-600 font-mono">{score} / 20</p>
      <p className="mt-4">Trude ist stolz auf dich!</p>
    </div>
  );
}
