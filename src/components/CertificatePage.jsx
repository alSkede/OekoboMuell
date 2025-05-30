
import { useQuiz } from "./QuizContext";
import { useEffect } from "react";

export default function CertificatePage() {
  const { getScore } = useQuiz();
  const score = getScore();
  const date = new Date().toLocaleDateString("de-DE");

  const downloadPDF = () => {
    const element = document.getElementById("certificate");
    window.html2pdf().set({
      margin: 0.5,
      filename: `Müllionärin-Zertifikat.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    }).from(element).save();
  };

  const fireConfetti = () => {
    const confetti = window.confetti;
    if (confetti) {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  };

  useEffect(() => {
    if (score >= 15) {
      fireConfetti();
    }
  }, [score]);

  return (
    <div className="flex flex-col items-center">
      <div id="certificate" className="max-w-xl p-8 border-4 border-yellow-500 bg-white rounded-xl shadow-lg text-center space-y-4">
        <h1 className="text-3xl font-bold text-green-800">🎓 Zertifikat</h1>
        <p>Hiermit wird feierlich bestätigt:</p>

        <h2 className="text-2xl font-semibold">Du bist Müllionärin!</h2>
        <p className="text-lg mt-2">Mit {score} von 20 Punkten im Trude-Quiz</p>
        {score < 15 ? (
            <p className="text-red-500">Vielleicht nochmal nachsortieren? 🧹</p>
        ) : (
            <p className="text-green-700 font-semibold">Herzlichen Glückwunsch, du hast bestanden!</p>
        )}
        <p className="italic">– bestanden am {date} –</p>

        <div className="mt-6">
          <img src="/img/trude_siegel.png" alt="Trude-Siegel" className="h-32 mx-auto drop-shadow-lg" />
          <p className="text-sm mt-2 italic">Zertifiziert von Trude Kühl, Müllberaterin a.D.</p>
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          📥 PDF herunterladen
        </button>
        <button
          onClick={fireConfetti}
          className="px-3 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
        >
          🎉 Nochmal Konfetti!
        </button>
      </div>
    </div>
  );
}
