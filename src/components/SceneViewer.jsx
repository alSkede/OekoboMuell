import { useState } from "react";
import lessons from "../data/lessons";
import Scene1 from "./scenes/Scene1";
import Scene2 from "./scenes/Scene2";
import Scene3 from "./scenes/Scene3";

const SceneComponents = {
  Scene1,
  Scene2,
  Scene3,
};

export default function SceneViewer() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = lessons[sceneIndex];
  const SceneComponent = SceneComponents[`Scene${scene.id}`];
  ...
}


const SceneComponents = { Scene1 };

export default function SceneViewer() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = lessons[sceneIndex];
  const SceneComponent = SceneComponents["Scene1"];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-gray-800">
      
      {/* Header */}
      <header className="p-4 text-center text-3xl font-bold bg-green-700 text-white shadow-md">
        {scene.title}
      </header>

      {/* Main Content */}
      <main className="flex-grow grid grid-cols-2 gap-6 p-8">
        
        {/* Left Panel: Visual Placeholder */}
        <div className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-6">
          <p className="text-xl font-semibold mb-4">Visual: Video or Image</p>
          <div className="w-full h-[60vh] bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [TrudeTV / Image Placeholder]
          </div>
        </div>

        {/* Right Panel: Scene Content */}
        <div className="flex flex-col gap-4 bg-white shadow rounded-lg p-6">
          <p><strong>🗯️ Trude sagt:</strong> {scene.trudeSpeech}</p>
          <p><strong>📚 Wissen:</strong> {scene.knowledge}</p>
          <p><strong>✋ Mitmachaktion:</strong> {scene.action}</p>
          <p className="italic">{scene.funfact}</p>
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

    </div>
  );
}
import { useState } from "react";
import lessons from "../data/lessons";
import Scene1 from "./scenes/Scene1";

const SceneComponents = { Scene1 };

export default function SceneViewer() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = lessons[sceneIndex];
  const SceneComponent = SceneComponents["Scene1"];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-gray-800">
      
      {/* Header */}
      <header className="p-4 text-center text-3xl font-bold bg-green-700 text-white shadow-md">
        {scene.title}
      </header>

      {/* Main Content */}
      <main className="flex-grow grid grid-cols-2 gap-6 p-8">
        
        {/* Left Panel: Visual Placeholder */}
        <div className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-6">
          <p className="text-xl font-semibold mb-4">Visual: Video or Image</p>
          <div className="w-full h-[60vh] bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [TrudeTV / Image Placeholder]
          </div>
        </div>

        {/* Right Panel: Scene Content */}
        <div className="flex flex-col gap-4 bg-white shadow rounded-lg p-6">
          <p><strong>🗯️ Trude sagt:</strong> {scene.trudeSpeech}</p>
          <p><strong>📚 Wissen:</strong> {scene.knowledge}</p>
          <p><strong>✋ Mitmachaktion:</strong> {scene.action}</p>
          <p className="italic">{scene.funfact}</p>
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

    </div>
  );
}
import { useState } from "react";
import lessons from "../data/lessons";
import Scene1 from "./scenes/Scene1";

const SceneComponents = { Scene1 };

export default function SceneViewer() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = lessons[sceneIndex];
  const SceneComponent = SceneComponents["Scene1"];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-gray-800">
      
      {/* Header */}
      <header className="p-4 text-center text-3xl font-bold bg-green-700 text-white shadow-md">
        {scene.title}
      </header>

      {/* Main Content */}
      <main className="flex-grow grid grid-cols-2 gap-6 p-8">
        
        {/* Left Panel: Visual Placeholder */}
        <div className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-6">
          <p className="text-xl font-semibold mb-4">Visual: Video or Image</p>
          <div className="w-full h-[60vh] bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [TrudeTV / Image Placeholder]
          </div>
        </div>

        {/* Right Panel: Scene Content */}
        <div className="flex flex-col gap-4 bg-white shadow rounded-lg p-6">
          <p><strong>🗯️ Trude sagt:</strong> {scene.trudeSpeech}</p>
          <p><strong>📚 Wissen:</strong> {scene.knowledge}</p>
          <p><strong>✋ Mitmachaktion:</strong> {scene.action}</p>
          <p className="italic">{scene.funfact}</p>
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

    </div>
  );
}
