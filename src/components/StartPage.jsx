import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50 text-center p-6">
      <h1 style={{ color: "red" }}>👀 Die App läuft – aber etwas fehlt!</h1>
      <img
        src="/img/Titel_Muellionaer.png"
        alt="Titel: Wer wird Müllionär?"
        className="w-full max-w-xl mx-auto mb-8 rounded shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-6 text-green-700">
        Willkommen bei Trude Kühl!
      </h1>
      <p className="text-lg max-w-xl mb-8">
        Steig ein ins Ökomobil – und erfahre, wie du mit Spaß die Welt vom Müll befreien kannst.
      </p>

      <Link to="/szenen">
        <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-3 rounded shadow">
          🚀 Los geht’s
        </button>
      </Link>
    </div>
  );
}
