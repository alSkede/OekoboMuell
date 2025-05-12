import { useState, useEffect, useRef } from "react";
import lessons from "../data/lessons";
import Scene1 from "./scenes/Scene1";
import Scene2 from "./scenes/Scene2";
import Scene3 from "./scenes/Scene3";

const SceneComponents = { Scene1, Scene2, Scene3 };

export default function SceneViewer() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = lessons[sceneIndex];
  const SceneComponent = SceneComponents[`Scene${scene.id}`];

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, [scene.id]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-gray-800">
      
      {/* Header */}
      <header className="p-4 text-center text-3xl font-bold bg-green-700 text-white shadow-md">
        {scene.title}
      </header>

      {/* Main Grid */}
      <main className="flex-grow grid grid-cols-2 gap-6 p-8">
        
        {/* Video Panel */}
        <div className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-6">
          <video
            className="w-full h-[60vh] object-cover rounded"
            src={scene.video}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Content Panel */}
        <div className="flex flex-col gap-4 bg-white shadow rounded-lg p-6">
          <SceneComponent />
        </div>

      </main>

      {/* Footer Navigation */}
      <footer className="flex justify-between items-center p-4 bg-neutral-200">
        <button
          onClick={() => setSceneIndex(Math.max(sceneIndex - 1, 0))}
          disabled={sceneIndex === 0}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
        >
          ⬅️ Zurück
        </button>

        <select
          value={sceneIndex}
          onChange={(e) => setSceneIndex(parseInt(e.target.value))}
          className="border px-3 py-2 rounded"
        >
          {lessons.map((s, idx) => (
            <option key={s.id} value={idx}>
              {s.id}. {s.title}
            </option>
          ))}
        </select>

        <button
          onClick={() => setSceneIndex(Math.min(sceneIndex + 1, lessons.length - 1))}
          disabled={sceneIndex === lessons.length - 1}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
        >
          Weiter ➡️
        </button>
      </footer>

      {/* Trude Audio */}
      <audio
        ref={audioRef}
        src={`/audios/scene${scene.id.toString().padStart(2, "0")}_trude.mp3`}
        preload="auto"
      />

    </div>
  );
}
