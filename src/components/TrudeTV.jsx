import { useEffect, useState } from "react";

export default function TrudeTV({ videoPath }) {
  const [videoExists, setVideoExists] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (!videoPath) return;
    fetch(videoPath, { method: "HEAD" })
      .then((res) => setVideoExists(res.ok))
      .catch(() => setVideoExists(false));
  }, [videoPath]);

  if (!videoExists) {
    return (
      <div className="w-64 h-40 bg-black text-white flex items-center justify-center border-4 border-gray-700 rounded">
        🚫 Kein Video
      </div>
    );
  }

  return (
    <div
      className="relative w-64 h-40 border-4 border-gray-700 rounded overflow-hidden bg-black cursor-pointer"
      onClick={() => setPlayVideo(true)}
    >
      {playVideo ? (
        <video
          src={videoPath}
          autoPlay
          controls
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg bg-black bg-opacity-80">
          ▶️ Klicken zum Abspielen
        </div>
      )}
    </div>
  );
}
