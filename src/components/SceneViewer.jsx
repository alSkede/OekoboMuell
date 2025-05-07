import { useState } from "react";
import lessons from "../data/lessons";
import SceneComponents from "./scenes";

export default function SceneViewer() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = lessons[sceneIndex];
  const SceneComponent = SceneComponents[`Scene${scene.id}`];

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" && sceneIndex < lessons.length - 1) {
      setSceneIndex(sceneIndex + 1);
    } else if (e.key === "ArrowLeft" && sceneIndex > 0) {
      setSceneIndex(sceneIndex - 1);
    }
  };

  return (
    <div
      className="flex flex-col items-center px-4 py-6"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <h1 className="text-4xl font-bold text-center mb-4 text-green-800">
        {scene.title}
      </h1>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        <button
          onClick={() => setSceneIndex((i) => Math.max(i - 1, 0))}
          disabled={sceneIndex === 0}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded disabled:opacity-50"
        >
          ⬅️ Zurück
        </button>

        <select
          value={sceneIndex}
          onChange={(e) => setSceneIndex(parseInt(e.target.value))}
          className="border border-gray-400 px-3 py-2 rounded"
        >
          {lessons.map((s, idx) => (
            <option key={s.id} value={idx}>
              {s.id}. {s.title}
            </option>
          ))}
        </select>

        <button
          onClick={() => setSceneIndex((i) => Math.min(i + 1, lessons.length - 1))}
          disabled={sceneIndex === lessons.length - 1}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded disabled:opacity-50"
        >
          Weiter ➡️
        </button>
      </div>

      {/* Aktuelle Szene */}
      <div className="w-full max-w-5xl">
        <SceneComponent />
      </div>
    </div>
  );
}
