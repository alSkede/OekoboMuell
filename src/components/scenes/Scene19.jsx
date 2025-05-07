import lessons from "../../data/lessons";
import TrudeTV from "../TrudeTV";

export default function Scene19() {
  const scene = lessons.find(s => s.id === 19);

  return (
    <div className="flex flex-col items-center p-6 bg-pink-50 rounded-xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{scene.title}</h2>

      <div className="flex gap-6 mb-4">
        <img src="/img/trude_final.png" alt="Trude" className="w-48 h-auto" />
        <TrudeTV videoPath={scene.video} />
      </div>

      <div className="bg-white p-4 my-4 rounded-lg border-l-4 border-pink-400 w-full max-w-xl">
        <p className="italic">🗯️ {scene.trudeSpeech}</p>
      </div>

      <div className="bg-fuchsia-100 p-4 mt-2 rounded w-full max-w-xl text-center">
        <p className="text-lg font-semibold">Liebe Sabine,</p>
        <p className="mt-2">dieses eBook ist ein Geschenk zu deinem 60. Geburtstag –</p>
        <p>für all das, was du für Umwelt, Bildung und unsere Gemeinschaft tust.</p>
        <p className="mt-2 font-bold">Trude winkt dir zu – mit Feder und Herz. 💌</p>
      </div>

      <div className="mt-6 italic text-sm text-gray-600">{scene.funfact}</div>
    </div>
  );
}

