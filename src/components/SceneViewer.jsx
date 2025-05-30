import { useState, useEffect, useRef } from "react";
import lessons from "../data/lessons";
import GenericScene from "./GenericScene";
import CertificatePage from "./CertificatePage";
import { useQuiz } from "../QuizContext";
import "./SceneViewer.css"; // <- Neue CSS-Datei für Styles

export default function SceneViewer() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = lessons[sceneIndex];
  const audioRef = useRef(null);
  const { results } = useQuiz();
  const hasCompletedScene20 =
    scene.id === 20 && results[20]?.userAnswer !== undefined;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, [scene.id]);

  if (hasCompletedScene20) {
    return <CertificatePage />;
  }

  return (
    <div className="scene-viewer">
      {/* Header */}
      <header className="scene-header">
        🐤 Trude Kühl
      </header>

      {/* Main Content */}
      <main className="scene-main">
        {/* Video Panel */}
        <div className="scene-video">
          <video
            className="scene-video-element"
            src={scene.video}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Content Panel */}
        <div className="scene-content">
          <h1 className="scene-title">{scene.title}</h1>
          <GenericScene scene={scene} />
        </div>
      </main>

      {/* Footer */}
      <footer className="scene-footer">
        <button
          onClick={() => setSceneIndex(Math.max(sceneIndex - 1, 0))}
          disabled={sceneIndex === 0}
          className="scene-button"
        >
          ⬅️ Zurück
        </button>

        <select
          value={sceneIndex}
          onChange={(e) => setSceneIndex(parseInt(e.target.value))}
          className="scene-select"
        >
          {lessons.map((s, idx) => (
            <option key={s.id} value={idx}>
              {s.id}. {s.title}
            </option>
          ))}
        </select>

        <button
          onClick={() =>
            setSceneIndex(Math.min(sceneIndex + 1, lessons.length - 1))
          }
          disabled={sceneIndex === lessons.length - 1}
          className="scene-button"
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
