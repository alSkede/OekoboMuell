import { useQuiz } from "./QuizContext";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function CertificatePage() {
  const { getScore, userName } = useQuiz();
  const score = getScore();
  const date = new Date().toLocaleDateString("de-DE");

  const downloadPDF = () => {
    const element = document.getElementById("certificate");
    window.html2pdf().set({
      margin: 0,
      filename: `Müllionärs-Zertifikat.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }).from(element).save();
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  useEffect(() => {
    if (score >= 15) {
      fireConfetti();
    }
  }, [score]);

  const nameDisplay = userName?.trim() || "🌟 Umweltfreund*in";

  return (
    <div className="flex justify-center items-start gap-8 mt-10">
      {/* Linke Spalte: Buttons */}
      <div className="flex flex-col gap-6">
        <button
          onClick={downloadPDF}
          className="px-6 py-4 w-52 bg-green-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-green-700 transition"
        >
          📥 PDF herunterladen
        </button>
        <button
          onClick={fireConfetti}
          className="px-6 py-4 w-52 bg-pink-500 text-white text-lg font-semibold rounded-xl shadow hover:bg-pink-600 transition"
        >
          🎉 Nochmal Konfetti!
        </button>
      </div>

      {/* Rechte Spalte: Urkunde */}
      <div
        id="certificate"
        style={{
          width: "210mm",
          height: "297mm",
          padding: "20mm",
          backgroundColor: "white",
          border: "4px solid #facc15",
          borderRadius: "12px",
          fontFamily: "Georgia, serif",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          pageBreakInside: "avoid",
        }}
      >
        <h1 className="text-4xl font-bold text-green-800">🎓 Urkunde</h1>
        <p>Diese Urkunde erhält</p>
        <h2 className="text-2xl font-semibold text-blue-700">{nameDisplay}</h2>
        <p>für den erfolgreichen Abschluss des</p>
        <h3 className="text-xl font-semibold italic text-green-800">Trude-Kühl-Müllionärs-Programms</h3>
        <p className="mt-2 text-lg">Punktzahl: {score} / 20</p>

        {score < 15 ? (
          <p className="text-red-600 mt-2">Vielleicht nochmal nachsortieren? 🧹</p>
        ) : (
          <p className="text-green-700 font-semibold mt-2">Herzlichen Glückwunsch, du hast bestanden!</p>
        )}

        <p className="italic text-sm">– bestanden am {date} –</p>

        <div className="mt-8">
          <img
            src="/img/trude_siegel.png"
            alt="Trude-Siegel"
            style={{
              width: "50mm",
              height: "50mm",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
            }}
            className="drop-shadow-lg"
          />
          <p className="text-sm italic mt-2">
            Zertifiziert von <strong>Trude Kühl</strong>, Müllberaterin a.D.
          </p>
        </div>
      </div>
    </div>
  );
}
