import TrudeTV from "./TrudeTV";

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

        {/* Rechte Seite: Inhalte */}
        <div className="flex flex-col md:w-1/2 gap-4">
          <div className="bg-white border-l-4 border-rose-400 p-4 rounded">
            <p className="italic">🗯️ {scene.trudeSpeech}</p>
          </div>

          <div className="bg-green-100 p-4 rounded">
            <p><strong>Wissenshäppchen:</strong> {scene.knowledge}</p>
          </div>

          <div className="bg-blue-100 p-4 rounded">
            <p><strong>Mitmachaktion:</strong> {scene.action}</p>
          </div>

          {scene.quiz && (
            <div className="bg-yellow-100 p-4 rounded">
              <p><strong>Quizfrage:</strong> {scene.quiz.question}</p>
              <ul className="list-disc list-inside">
                {scene.quiz.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
              <p className="mt-2 text-green-700">
                ✅ Richtige Antwort: {scene.quiz.options[scene.quiz.correct]}
              </p>
            </div>
          )}

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
