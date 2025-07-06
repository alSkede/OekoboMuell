import TrudeTV from "./TrudeTV";
import { useEffect, useRef, useState } from "react";
import TrudeSpeechButton from "./TrudeSpeechButton";
import SceneQuiz from "./SceneQuiz";
import { Play, Pause } from "lucide-react";

export default function GenericSceneLayout({ scene, volume, audioMuted }) {
  const audioRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const toggleVideo = () => {
    setVideoPlaying(prev => !prev);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [scene.id]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <table
        style={{
          width: "100%",
          tableLayout: "fixed",
          borderCollapse: "collapse"
        }}
      >
        <tbody>
          <tr>
            {/* Linke Spalte */}
            <td
              style={{
                width: "50%",
                verticalAlign: "top",
                padding: "1rem"
              }}
            >
              {/* Video mit PNG-Overlay */}
              <div style={{ position: "relative", width: "100%", maxWidth: "100%", marginBottom: "1rem" }}>
                <TrudeTV
                  videoPath={scene.video}
                  volume={volume}
                  audioMuted={audioMuted}
                  videoPlaying={videoPlaying}
                />
                <img
                  src="/img/trude_tv.png"
                  alt="Trude TV"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "495px",
                    height: "430px",
                    pointerEvents: "none",
                    zIndex: 20
                  }}
                />
              </div>

              {/* Play/Pause-Button */}
              <div style={{ marginBottom: "1rem" }}>
                <button
                  onClick={toggleVideo}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "1rem"
                  }}
                >
                  {videoPlaying ? "Pause" : "Play"}
                </button>
              </div>

              {/* Expertenfrage */}
              {scene.quiz?.expert && (
                <div
                  style={{
                    backgroundColor: "#fef3c7",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    fontSize: "0.9rem"
                  }}
                >
                  <p><strong>🧠 Expertenfrage:</strong> {scene.quiz.expert.question}</p>
                  <ul style={{ paddingLeft: "1rem", marginTop: "0.5rem" }}>
                    {scene.quiz.expert.options.map((opt, i) => (
                      <li key={i}>{opt}</li>
                    ))}
                  </ul>
                  <p style={{ marginTop: "0.5rem", color: "#16a34a" }}>
                    ✅ {scene.quiz.expert.options[scene.quiz.expert.correct]}
                  </p>
                </div>
              )}

              {/* Quiz */}
              {scene.quiz && <SceneQuiz scene={scene} />}

              {/* Funfact */}
              {scene.funfact && (
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    color: "#4b5563",
                    marginTop: "1rem"
                  }}
                >
                  {scene.funfact}
                </div>
              )}
            </td>

            {/* Rechte Spalte */}
            <td
              style={{
                width: "50%",
                verticalAlign: "top",
                padding: "1rem"
              }}
            >
              {/* Szenenbild */}
              <img
                src={`/img/${scene.image || `scene${scene.id}_trude.png`}`}
                alt={`Szene ${scene.id}`}
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "contain",
                  marginBottom: "1rem"
                }}
              />

              {/* Wissenshäppchen */}
              <div
                style={{
                  backgroundColor: "#d1fae5",
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1rem"
                }}
              >
                <p><strong>Wissenshäppchen:</strong> {scene.knowledge}</p>
              </div>

              {/* Mitmachaktion */}
              <div
                style={{
                  backgroundColor: "#bfdbfe",
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1rem"
                }}
              >
                <p><strong>Mitmachaktion:</strong> {scene.action}</p>
              </div>

              {/* Trude-Spricht-Button */}
              {scene.trudeSpeech && (
                <div style={{ marginBottom: "1rem" }}>
                  <TrudeSpeechButton text={scene.trudeSpeech} />
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Audio */}
      <audio
        ref={audioRef}
        src={`/audios/scene${scene.id.toString().padStart(2, "0")}_trude.mp3`}
        className="hidden"
        autoPlay
      />
    </div>
  );
}
