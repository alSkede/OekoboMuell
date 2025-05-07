import lessons from "../../data/lessons";
import TrudeTV from "../TrudeTV";

export default function Scene1() {
  const scene = lessons.find(s => s.id === 1);

  return (
    <div className="flex flex-col items-center p-6 bg-sky-100 rounded-xl shadow-md max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">{scene.title}</h1>

      <div className="flex gap-6 mb-4">
        <img src="/img/trude_final.png" alt="Trude Kühl" className="w-48 h-auto" />
        <TrudeTV videoPath={scene.video} />
      </div>

      <div className="bg-white p-4 mb-4 rounded-lg border-l-4 border-blue-500 w-full max-w-xl">
        <p className="italic">🗯️ {scene.trudeSpeech}</p>
      </div>

      <div className="bg-blue-100 p-4 rounded w-full max-w-xl">
        <p><strong>Wissenshäppchen:</strong> {scene.knowledge}</p>
      </div>

      <div className="bg-green-100 p-4 mt-4 rounded w-full max-w-xl">
        <p><strong>Mitmachaktion:</strong> {scene.action}</p>
      </div>

      <div className="bg-yellow-50 text-sm text-gray-600 mt-6 italic">
        {scene.funfact}
      </div>
    </div>
  );
}
