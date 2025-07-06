// DoublePage.jsx

import TrudeSpeechButton from "./TrudeSpeechButton";
import SceneQuiz from "./SceneQuiz";

export default function DoublePage({ scene }) {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Linke Seite: Grafik + Sprechblase */}
      <div className="relative md:w-1/2 p-4 flex items-center justify-center bg-neutral-100">
        <img
          src={`/img/scene${scene.id}_trude.png`}
          alt={`Szene ${scene.id}`}
          className="rounded-lg shadow-lg object-contain w-full max-h-[400px]"
        />
        {/* Sprechblase als Overlay */}
        {scene.trudeSpeech && (
          <div className="absolute top-4 left-4 bg-white bg-opacity-90 border border-rose-400 rounded p-2 shadow-md max-w-xs">
            <p className="italic text-sm">🗯️ {scene.trudeSpeech}</p>
            <TrudeSpeechButton text={scene.trudeSpeech} />
          </div>
        )}
      </div>

      {/* Rechte Seite: Inhalte */}
      <div className="md:w-1/2 p-6 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-emerald-800">{scene.title}</h2>
        <div className="bg-green-100 p-4 rounded">
          <p><strong>Wissenshäppchen:</strong> {scene.knowledge}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded">
          <p><strong>Mitmachaktion:</strong> {scene.action}</p>
        </div>
        {scene.quiz && <SceneQuiz scene={scene} />}
        {scene.funfact && (
          <div className="text-sm italic text-gray-600 mt-2">
            {scene.funfact}
          </div>
        )}
      </div>
    </div>
  );
}

