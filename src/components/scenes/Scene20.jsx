import lessons from "../../data/lessons";
import TrudeTV from "../TrudeTV";

export default function Scene20() {
  const scene = lessons.find(s => s.id === 20);

  return (
    <div className="flex flex-col items-center p-6 bg-yellow-100 rounded-xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{scene.title}</h2>

      <div className="flex gap-6 mb-4">
        <img src="/img/trude_final.png" alt="Trude" className="w-48 h-auto" />
        <TrudeTV videoPath={scene.video} />
      </div>

      <div className="bg-white p-4 my-4 rounded-lg border-l-4 border-yellow-500 w-full max-w-xl">
        <p className="italic">🗯️ {scene.trudeSpeech}</p>
      </div>

      <div className="bg-orange-100 p-4 mt-2 rounded w-full max-w-xl text-center">
        <p className="text-lg">🧤 Das Ökomobil fährt ab…</p>
        <p>… Trude winkt mit einem Taschentuch.</p>
        <p className="mt-2">Und nimmt den ganzen Müll mit – versprochen.</p>
      </div>

      <div className="mt-6 italic text-sm text-gray-600">{scene.funfact}</div>
    </div>
  );
}

