import { useQuiz } from "./QuizContext";

export default function PrintableCertificate() {
  const { getScore, userName } = useQuiz();
  const score = getScore();
  const date = new Date().toLocaleDateString("de-DE");
  const name = userName?.trim() || "🌟 Umweltfreund*in";

  return (
    <div
      id="printable-certificate"
      style={{
        width: "1000px",
        height: "700px",
        padding: "60px",
        border: "8px solid goldenrod",
        fontFamily: "Georgia, serif",
        backgroundColor: "white",
        color: "#111",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", color: "#2e7d32", marginBottom: "10px" }}>
          🎓 Müllionärs-Zertifikat
        </h1>

        <p style={{ fontSize: "18px", margin: "30px 0" }}>
          Hiermit wird feierlich bestätigt, dass
        </p>

        <h2
          style={{
            fontSize: "36px",
            color: "#0d47a1",
            borderBottom: "1px dotted #aaa",
            display: "inline-block",
            padding: "5px 20px",
          }}
        >
          {name}
        </h2>

        <p style={{ fontSize: "20px", marginTop: "30px" }}>
          das Trude-Kühl-Programm erfolgreich abgeschlossen hat –
          <br />
          mit <strong>{score} von 20 Punkten</strong> im großen Müll-Quiz.
        </p>

        <p style={{ fontSize: "16px", fontStyle: "italic", marginTop: "20px" }}>
          „Mit Herz und Hirn für eine saubere Zukunft!“
        </p>

        <p style={{ marginTop: "50px" }}>
          Bestanden am: <strong>{date}</strong>
        </p>

        <div style={{ marginTop: "60px" }}>
          <img
            src="/img/trude_siegel.png"
            alt="Trude-Siegel"
            style={{ height: "100px" }}
          />
          <p style={{ fontStyle: "italic", fontSize: "14px" }}>
            Trude Kühl, Müllberaterin a.D.
          </p>
        </div>
      </div>
    </div>
  );
}
