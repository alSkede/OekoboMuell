import { Link } from "react-router-dom";
import "../styles/global.css";
import { useQuiz } from "./QuizContext";

export default function StartPage() {
  const { userName, setUserName } = useQuiz(); // ✅ jetzt korrekt innerhalb der Komponente

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-green-50 flex items-center justify-center p-6">
      <table className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <tbody>
          <tr>
            {/* Linke Spalte */}
            <td className="align-top p-6 w-1/3 bg-gradient-to-b from-green-50 to-yellow-50">
              <h1 className="text-4xl font-bold text-green-800 mb-4">
                Willkommen bei Trude Kühl!
              </h1>
              <p className="text-base mb-4">
                Steig ein ins Ökomobil – und erfahre, wie du mit Spaß die Welt vom Müll befreien kannst.
              </p>

              {/* Namensfeld */}
              <div className="mb-6 text-left">
  <label htmlFor="username" className="block text-sm font-medium text-green-800 mb-1">
    Dein Name für die Urkunde
  </label>
  <input
    id="username"
    type="text"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
    placeholder="Sabine Reussink"
    className="w-full max-w-xs px-4 py-2 border-2 border-green-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
  />
</div>

              {/* Features */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="feature-box">
                  <span className="feature-icon text-green-600">🗑️</span>
                  <span className="font-semibold text-green-800">Müll-Quiz</span>
                </div>
                <div className="feature-box">
                  <span className="feature-icon text-green-600">♻️</span>
                  <span className="font-semibold text-green-800">Upcycling-Workshops</span>
                </div>
                <div className="feature-box">
                  <span className="feature-icon text-yellow-600">💡</span>
                  <span className="font-semibold text-green-800">Kreative Tipps</span>
                </div>
                <div className="feature-box">
                  <span className="feature-icon text-red-500">🎯</span>
                  <span className="font-semibold text-green-800">Mitmachaktionen</span>
                </div>
              </div>

              <div style={{ height: "40px" }}></div>

              <Link to="/scenes">
                <button className="main-button mb-6">
                  🚀 Los geht’s
                </button>
              </Link>

              <div style={{ height: "250px" }}></div>

              <footer className="text-sm text-gray-600">
                © 2025 inspective Müllionär-Programm. Alle Rechte vorbehalten.
              </footer>
            </td>

            {/* Rechte Spalte */}
            <td className="align-top p-6 w-2/3 bg-white">
              <img
                src="/img/Titel_Muellionaer.png"
                alt="Titel: Wer wird Müllionär?"
                className="w-full max-w-lg rounded-lg shadow-xl"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
