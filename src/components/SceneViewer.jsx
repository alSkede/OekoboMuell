import { useState, useEffect, useRef } from "react";
import lessons from "../data/lessons";
import GenericSceneLayout from "./GenericSceneLayout";

import DoublePage from "./DoublePage";
import CertificatePage from "./CertificatePage";
import { useQuiz } from "./QuizContext";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import "../styles/SceneViewer.css";

export default function SceneViewer() {
  const [audioMuted, setAudioMuted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = lessons[sceneIndex];
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const { results } = useQuiz();
  const hasCompletedScene20 =
    scene.id === 20 && results[20]?.userAnswer !== undefined;
  const [volume, setVolume] = useState(0.5); // Default Volume

useEffect(() => {
  window.speechSynthesis.cancel(); // nur sicherheitshalber abbrechen

  if (audioRef.current) {
    audioRef.current.currentTime = 0;
    audioRef.current.volume = volume;
    audioRef.current.muted = audioMuted;
    audioRef.current.play().catch(() => {});
  }

  if (videoRef.current) {
    videoRef.current.volume = volume;
  }
}, [scene.id, audioMuted, volume]);

const toggleVideo = () => {
  if (!videoRef.current) return;
  if (videoRef.current.paused) {
    videoRef.current.play().catch(() => {});
    setVideoPlaying(true);
  } else {
    videoRef.current.pause();
    setVideoPlaying(false);
  }
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
    <div className="min-h-screen pt-20 flex flex-col">

     {/* Main Content */}
    <main className="scene-main flex-grow">
      <GenericSceneLayout
        scene={scene}
        volume={volume}
        audioMuted={audioMuted}
      />
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
      />
    </div>
  );
}
