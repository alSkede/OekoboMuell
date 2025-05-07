
import { useQuiz } from "../QuizContext";

export default function SceneQuiz({ scene }) {
  const { results, recordAnswer } = useQuiz();
  const answer = results[scene.id]?.userAnswer;

  const playSound = (type) => {
    let file = "";
    if (type === "correct") file = "/sfx/applause.mp3";
    else if (type === "wrong_boo") file = "/sfx/boo.mp3";
    else if (type === "wrong_snore") file = "/sfx/snore.mp3";

    const audio = new Audio(file);
    audio.play();
  };

  const handleClick = (i) => {
    if (answer !== undefined) return;

    const isCorrect = i === scene.quiz.correct;
    const isBoo = scene.quiz.boo && scene.quiz.boo.includes(i);

    playSound(isCorrect ? "correct" : isBoo ? "wrong_boo" : "wrong_snore");
    recordAnswer(scene.id, i, scene.quiz.correct);
  };

  return (
    <div className="bg-yellow-100 p-4 mt-4 rounded w-full max-w-xl">
      <p><strong>Quizfrage:</strong> {scene.quiz.question}</p>
      <ul className="mt-2 space-y-2">
        {scene.quiz.options.map((opt, i) => (
          <li key={i}>
            <button
              onClick={() => handleClick(i)}
              disabled={answer !== undefined}
              className={`w-full text-left px-4 py-2 rounded ${
                answer === i
                  ? i === scene.quiz.correct
                    ? "bg-green-300"
                    : "bg-red-300"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
      {answer !== undefined && (
        <p className="mt-2 text-sm text-gray-600">
          {answer === scene.quiz.correct ? "✅ Richtig!" : "❌ Leider falsch."}
        </p>
      )}
    </div>
  );
}
