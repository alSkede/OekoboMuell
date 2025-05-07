import { useQuiz } from "../QuizContext";
window.html2pdf().set({...}).from(element).save();

export default function CertificatePage() {
  const { getScore } = useQuiz();
  const score = getScore();
  const date = new Date().toLocaleDateString("de-DE");

  const downloadPDF = () => {
    const element = document.getElementById("certificate");
    html2pdf().set({
      margin: 0.5,
      filename: `Müllionärin-Zertifikat.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    }).from(element).save();
  };

  return (
    <div className="flex flex-col items-center">
      <div id="certificate" className="max-w-xl p-8 border-4 border-yellow-500 bg-white rounded-xl shadow-lg text-center space-y-4">
        <h1 className="text-3xl font-bold text-green-800">🎓 Zertifikat</h1>
        <p>Hiermit wird feierlich bestätigt:</p>

        <h2 className="text-2xl font-semibold">Du bist Müllionärin!</h2>
        <p className="text-lg mt-2">Mit {score} von 20 Punkten im Trude-Quiz</p>
        <p className="italic">– bestanden am {date} –</p>

        <div className="mt-6">
          <img src="/img/trude_siegel.png" alt="Trude-Siegel" className="h-32 mx-auto drop-shadow-lg" />
          <p className="text-sm mt-2 italic">Zertifiziert von Trude Kühl, Müllberaterin a.D.</p>
        </div>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        📥 PDF herunterladen
      </button>
    </div>
  );
}
