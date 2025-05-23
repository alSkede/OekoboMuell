import TrudeTV from "./TrudeTV";
import { useEffect, useRef } from "react";
import TrudeSpeechButton from "../TrudeSpeechButton";
import SceneQuiz from "./SceneQuiz";

export default function GenericSceneLayout({ scene }) {
  return (
    <div className="flex flex-col items-center px-6 py-8 bg-neutral-50 rounded-xl max-w-5xl mx-auto shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-emerald-800">
        {scene.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Linke Seite: Bild + Video */}
        <div className="flex flex-col items-center md:w-1/2">
          <img
            src={`/img/scene${scene.id}_trude.png`}
            alt={`Szene ${scene.id}`}
            className="rounded shadow w-full object-contain max-h-64 mb-4"
          />
          <TrudeTV videoPath={scene.video} />
        </div>
        
        const audioRef = useRef(null);

         useEffect(() => {
           if (audioRef.current) {
             audioRef.current.play().catch(() => {
               // Autoplay verhindert (z. B. durch Browser): ignorieren
              });
            }
         }, [scene.id]);  // Spielt nur beim Szenenwechsel ab

        <audio
          ref={audioRef}
          src={`/audios/scene${scene.id.toString().padStart(2, "0")}_trude.mp3`}
          className="hidden"
          autoPlay
        />

        {/* Rechte Seite: Inhalte */}
        <div className="flex flex-col md:w-1/2 gap-4">
          <div className="bg-white border-l-4 border-rose-400 p-4 rounded">
            <div>
                <p className="italic">🗯️ {scene.trudeSpeech}</p>
                <TrudeSpeechButton text={scene.trudeSpeech} />
            </div>
          </div>
          
          <div>
            <p className="italic">🗯️ {scene.trudeSpeech}</p>
            <audio
              controls
              src={`/audios/scene${scene.id.toString().padStart(2, "0")}_trude.mp3`}
              className="mt-2"
            />
          </div>

          <div className="bg-green-100 p-4 rounded">
            <p><strong>Wissenshäppchen:</strong> {scene.knowledge}</p>
          </div>

          <div className="bg-blue-100 p-4 rounded">
            <p><strong>Mitmachaktion:</strong> {scene.action}</p>
          </div>

          {scene.quiz && <SceneQuiz scene={scene} />}

          {scene.quiz?.expert && (
            <div className="bg-yellow-50 p-4 rounded text-sm">
              <p><strong>🧠 Expertenfrage:</strong> {scene.quiz.expert.question}</p>
              <ul className="list-disc list-inside">
                {scene.quiz.expert.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
              <p className="mt-1 text-green-700">
                ✅ {scene.quiz.expert.options[scene.quiz.expert.correct]}
              </p>
            </div>
          )}

          <div className="text-sm italic text-gray-600 mt-4">
            {scene.funfact}
          </div>
        </div>
      </div>
    </div>
  );
}
