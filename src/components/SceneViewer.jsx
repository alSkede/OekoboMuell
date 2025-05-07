import { useState } from "react";
import lessons from "../data/lessons";
import Scene2 from "./scenes/Scene2";
import Scene3 from "./scenes/Scene3";
// später: import Scene4, Scene5, usw...

export default function SceneViewer() {
  const [sceneId, setSceneId] = useState(2); // Start bei Szene 2

  const goPrev = () => setSceneId(id => Math.max(2, id - 1));
  const goNext = () => setSceneId(id => Math.min(20, id + 1));

  const renderScene = () => {
    switch (sceneId) {
      case 2: return <Scene2 />;
      case 3: return <Scene3 />;
      // case 4: return <Scene4 />;
      default: return <p className="text-center p-10">Szene {sceneId} kommt bald!</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 px-6 py-8">
      <div className="flex justify-between w-full max-w-4xl mb-4">
        <button onClick={goPrev} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">←</button>
        <span className="text-lg font-bold">Szene {sceneId}</span>
        <button onClick={goNext} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">→</button>
      </div>
      {renderScene()}
    </div>
  );
}
