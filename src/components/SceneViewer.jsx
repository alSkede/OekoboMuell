import { useState, useEffect, useRef } from "react";
import lessons from "../data/lessons";
import GenericScene from "./GenericScene";
import CertificatePage from "./CertificatePage";
import { useQuiz } from "../QuizContext";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import "../styles/SceneViewer.css";

export default function SceneViewer() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = lessons[sceneIndex];
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const { results } = useQuiz();
  const hasCompletedScene20 =
    scene.id === 20 && results[20]?.userAnswer !== undefined;

  const [videoPlaying, setVideoPlaying] = useState(true);
  const [audioMuted, setAudioMuted] = useState(true);
  const [volume, setVolume] = useState(0.5); // Default Volume

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
      audioRef.current.volume = volume;
    }
    setVideoPlaying(true);
  }, [scene.id, volume]);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setVideoPlaying(!videoPlaying);
  };

  const toggleAudioMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioMuted;
    setAudioMuted(!audioMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

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
            ref={videoRef}
            className="scene-video-element"
            src={scene.video}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="scene-controls">
            <button onClick={toggleVideo} className="scene-button">
              {videoPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
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
          ⬅️
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
          ➡️
        </button>

        {/* Audio Controls */}
        <div className="audio-controls">
          <button
            onClick={toggleAudioMute}
            className="scene-button"
            title={audioMuted ? "Audio stummgeschaltet" : "Audio aktiviert"}
          >
            {audioMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            title={`Lautstärke: ${(volume * 100).toFixed(0)}%`}
          />
        </div>
      </footer>

      {/* Trude Audio */}
      <audio
        ref={audioRef}
        src={`/audios/scene${scene.id.toString().padStart(2, "0")}_trude.mp3`}
        preload="auto"
        muted={audioMuted}
        autoPlay
      />
    </div>
  );
}
