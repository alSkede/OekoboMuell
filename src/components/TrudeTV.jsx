import { useEffect, useRef } from "react";

export default function TrudeTV({ videoPath, volume, audioMuted, videoPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = isNaN(volume) ? 0.5 : volume;
      videoRef.current.muted = audioMuted;
    }
  }, [volume, audioMuted]);

  useEffect(() => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [videoPlaying]);

  return (
    <div
      style={{
        position: "relative",
        width: "450px",
        height: "400px",
        border: "4px solid #4b5563",
        borderRadius: "12px",
        overflow: "hidden",
        background: "black"
      }}
    >
      {/* Video Panel */}
      <video
        ref={videoRef}
        src={videoPath}
        muted={audioMuted}
        preload="metadata"
        style={{
          position: "absolute",
          top: "41%",
          left: "33%",
          width: "46%",
          height: "40%",
          objectFit: "cover",
          zIndex: 10
        }}
      />
    </div>
  );
}
