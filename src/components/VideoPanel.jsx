import { useState, useEffect, useRef } from "react";

export default function VideoPanel({ scene }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const src = `/videos/scene${scene.id.toString().padStart(2, "0")}.mp4`;

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Reset bei neuem Video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, [src]);

  // Automatisch zurücksetzen wenn Video endet oder pausiert
 useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  // Zurücksetzen beim Szenenwechsel
  video.pause();
  video.currentTime = 0;
  setIsPlaying(false);

  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  video.addEventListener("pause", handlePause);
  video.addEventListener("ended", handleEnded);

  return () => {
    video.removeEventListener("pause", handlePause);
    video.removeEventListener("ended", handleEnded);
  };
}, [scene.id]); // ← wichtig!

  return (
    <div className="flex flex-col items-center mt-6">
      <button
        onClick={togglePlayPause}
        className="mb-4 px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition"
      >
        {isPlaying ? "⏸️ Pause" : "▶️ Play"}
      </button>

      <video
        ref={videoRef}
        src={src}
        className="w-full max-w-2xl rounded shadow-lg"
      />
    </div>
  );
}
