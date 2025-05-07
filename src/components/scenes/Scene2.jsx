import { useState } from "react";
import TrudeTV from "./TrudeTV";
import lessons from "../data/lessons"; // deine lessons.js-Datei

export default function Scene2() {
  const scene = lessons.find(s => s.id === 2);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="flex flex-col items-center p-6 bg-yellow-50 rounded-xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{scene.title}</h2>

      <div className="flex gap-6">
        {/* Trude-Illustration */}
        <img src="/img/trude_final.png" alt="Trude" className="w-48 h-auto" />

        {/* Fernseher */}
        <TrudeTV videoPath={scene.video} />
      </div>

      {/* Sprechblase */}
      <div className="bg-white p-4 my-4 rounded-lg border-l-4 border-red-400 w-full max-w-xl">
        <p className="italic">🗯️ {scene.trudeSpeech}</p>
      </div>

      {/* Wissenshäppchen */}
      <div className="bg-green-100 p-4 rounded w-full max-w-xl">
        <p><strong>Wissenshäppchen:</strong> {scene.knowledge}</p>
      </div>

      {/* Mitmachaktion */}
      <div className="bg-blue-100 p-4 mt-4 rounded w-full max-w-xl">
        <p><strong>Mitmachaktion:</strong> {scene.action}</p>
      </div>

      {/* Quizbutton */}
      <button
        onClick={() => setShowQuiz(!showQuiz)}
        className="mt-6 bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600"
      >
        {showQuiz ? "Quiz ausblenden" : "Quiz starten"}
      </button>

      {showQuiz && (
        <div className="bg-white border border-gray-300 p-4 mt-4 rounded w-full max-w-xl">
          <p><strong>Quizfrage:</strong> {scene.quiz.question}</p>
          <ul className="list-disc list-inside mt-2">
            {scene.quiz.options.map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
          <p className="mt-4 text-green-600">✅ Richtige Antwort: {scene.quiz.options[scene.quiz.correct]}</p>

          <hr className="my-4" />

          <p><strong>Expertenfrage:</strong> {scene.quiz.expert.question}</p>
          <ul className="list-disc list-inside mt-2">
            {scene.quiz.expert.options.map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
          <p className="mt-4 text-green-600">✅ Richtige Antwort: {scene.quiz.expert.options[scene.quiz.expert.correct]}</p>
        </div>
      )}

      {/* Funfact */}
      <div className="mt-6 italic text-sm text-gray-600">{scene.funfact}</div>
    </div>
  );
}
