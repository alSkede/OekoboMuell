import { useEffect, useState } from "react";

export default function TrudeTV({ videoPath }) {
  const [videoExists, setVideoExists] = useState(false);

  useEffect(() => {
    if (!videoPath) return;
    fetch(videoPath, { method: "HEAD" })
      .then((res) => setVideoExists(res.ok))
      .catch(() => setVideoExists(false));
  }, [videoPath]);

  return (
    <div className="relative w-64 h-40 border-4 border-black bg-black rounded shadow-inner">
      {videoExists ? (
        <video
          src={videoPath}
          controls
          className="w-full h-full object-cover rounded"
          preload="metadata"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white text-center px-4">
          🎬 Kein Video verfügbar
        </div>
      )}
    </div>
  );
}
