import { useState } from "react";

export default function TrudeTV({ videoPath }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-48 cursor-pointer" onClick={() => setShowVideo(true)}>
      <img src="/img/trudes_tv.png" alt="Trudes Fernseher" className="w-full" />
      {showVideo && (
        <div className="absolute inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-[90%] max-w-xl">
            <video controls autoPlay src={videoPath} className="w-full rounded-lg" />
            <button
              onClick={(e) => { e.stopPropagation(); setShowVideo(false); }}
              className="absolute top-2 right-2 text-white text-xl font-bold"
            >✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
