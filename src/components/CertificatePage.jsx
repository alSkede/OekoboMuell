import { useQuiz } from "../QuizContext";

export default function CertificatePage() {
  const { getScore } = useQuiz();
  const score = getScore();
  const date = new Date().toLocaleDateString("de-DE");

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 border-4 border-yellow-500 bg-white rounded-xl shadow-lg text-center space-y-4">
      <h1 className="text-3xl font-bold text-green-800">🎓 Zertifikat</h1>
      <p>Hiermit wird feierlich bestätigt:</p>

      <h2 className="text-2xl font-semibold">Du bist ein*e Müllionär*in!</h2>

      <p className="text-lg mt-2">Mit {score} von 20 Punkten im Trude-Quiz</p>
      <p className="italic">– bestanden am {date} –</p>

      <div className="mt-6">
        <img src="/img/trude_siegel.png" alt="Trude-Siegel" className="h-24 mx-auto" />
        <p className="text-sm mt-2">Trude Kühl, Müllberaterin a.D.</p>
      </div>
    </div>
  );
}

<button
  onClick={() => window.print()}
  className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
>
  🖨️ Zertifikat drucken
</button>
