import { useState } from "react";
import lessons from "../data/lessons";
import TrudeTV from "./TrudeTV";
import SceneComponents from "./scenes";

export default function SceneViewer() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = lessons[sceneIndex];
  const SceneComponent = SceneComponents[`Scene${scene.id}`];

  const handleNext = () => {
    if (sceneIndex < lessons.length - 1) setSceneIndex(sceneIndex + 1);
  };

  const handlePrev = () => {
    if (sceneIndex > 0) setSceneIndex(sceneIndex - 1);
  };

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-4 text-green-800">
        {scene.title}
      </h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={handlePrev}
          disabled={sceneIndex === 0}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded disabled:opacity-50"
        >
          ⬅️ Zurück
        </button>
        <button
          onClick={handleNext}
          disabled={sceneIndex === lessons.length - 1}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded disabled:opacity-50"
        >
          Weiter ➡️
        </button>
      </div>

      <div className="w-full max-w-5xl">
        <SceneComponent />
      </div>
    </div>
  );
}
